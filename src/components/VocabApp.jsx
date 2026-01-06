import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { vocabDatabase } from '../data/vocabData';
import { getExamById, exams } from '../data/exams';
import './VocabApp.css';

// localStorage用のキー生成
const getStorageKey = (examId) => `vocab_memorized_${examId}`;

// localStorageから覚えた単語を読み込み
const loadMemorizedIds = (examId) => {
    try {
        const stored = localStorage.getItem(getStorageKey(examId));
        if (stored) {
            return new Set(JSON.parse(stored));
        }
    } catch (e) {
        console.error('Failed to load memorized words:', e);
    }
    return new Set();
};

// localStorageに覚えた単語を保存
const saveMemorizedIds = (examId, ids) => {
    try {
        localStorage.setItem(getStorageKey(examId), JSON.stringify([...ids]));
    } catch (e) {
        console.error('Failed to save memorized words:', e);
    }
};

const VocabApp = () => {
    const { examId } = useParams();
    const targetExam = getExamById(examId) || exams[0]; // Get exam metadata

    // Get vocab list from database OR generate from exam data
    let vocabList = vocabDatabase[examId];
    if (!vocabList && targetExam?.data?.questions) {
        vocabList = targetExam.data.questions.map((q, idx) => {
            const correctIdx = q.correctAnswer - 1;
            return {
                id: idx + 1,
                word: q.choices[correctIdx],
                meaning: q.choiceMeanings ? q.choiceMeanings[correctIdx] : '',
                questionId: q.id
            };
        });
    }
    vocabList = vocabList || [];

    // State - localStorageから初期値を読み込み
    const [started, setStarted] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [shuffledList, setShuffledList] = useState([]);
    const [memorizedIds, setMemorizedIds] = useState(() => loadMemorizedIds(examId));
    const [cheerMessage, setCheerMessage] = useState(null); // For popup

    // memorizedIdsが変更されたらlocalStorageに保存
    useEffect(() => {
        saveMemorizedIds(examId, memorizedIds);
    }, [examId, memorizedIds]);

    // Start Screen Info
    const remainingCount = vocabList.length - memorizedIds.size;

    // Initialize list on start
    const handleStart = () => {
        // 覚えた単語を除外してリストを作成
        let list = vocabList.filter(word => !memorizedIds.has(word.id));

        // 覚えていない単語がない場合は全単語を表示
        if (list.length === 0) {
            if (window.confirm("すべての単語を覚えました！🎉\n学習記録をリセットして最初からやり直しますか？")) {
                setMemorizedIds(new Set());
                list = [...vocabList];
            } else {
                return; // キャンセルした場合は何もしない
            }
        }

        if (isRandom) {
            // Fisher-Yates shuffle
            for (let i = list.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [list[i], list[j]] = [list[j], list[i]];
            }
        } else {
            list.sort((a, b) => a.id - b.id);
        }
        setShuffledList(list);
        setCurrentIndex(0);
        setIsFlipped(false);
        setStarted(true);
    };

    const checkProgress = (newMemorizedSize) => {
        const total = vocabList.length;


        const thresholds = [90, 80, 60, 40, 20];
        // We only want to trigger if we JUST reached or passed a threshold we hadn't passed before?
        // Simple logic: if new percent matches exactly or we just crossed it.
        // Let's simpler: Just show if percent matches exactly? No, 70 items -> won't hit exact integers often.
        // Show if (newMemorizedSize / total) >= threshold AND ((newMemorizedSize - 1) / total) < threshold
        const prevSize = newMemorizedSize - 1;

        for (let t of thresholds) {
            const currentP = (newMemorizedSize / total) * 100;
            const prevP = (prevSize / total) * 100;
            if (currentP >= t && prevP < t) {
                return t;
            }
        }
        return null;
    };

    const handleMemorized = (e) => {
        e.stopPropagation();
        const word = shuffledList[currentIndex];
        const newSet = new Set(memorizedIds);

        if (!newSet.has(word.id)) {
            newSet.add(word.id);
            setMemorizedIds(newSet);

            // Check encouragement
            const reachedThreshold = checkProgress(newSet.size);
            if (reachedThreshold) {
                setCheerMessage(`すごい！ ${reachedThreshold}% 覚えました！その調子！Forza!`);
                setTimeout(() => setCheerMessage(null), 3000);
            }
        }

        handleNextStep();
    };

    const handleNotYet = (e) => {
        e.stopPropagation();
        const word = shuffledList[currentIndex];
        const newSet = new Set(memorizedIds);
        if (newSet.has(word.id)) {
            newSet.delete(word.id);
            setMemorizedIds(newSet);
        }
        handleNextStep();
    };

    const handleNextStep = () => {
        setIsFlipped(false);
        setTimeout(() => {
            if (currentIndex < shuffledList.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                if (window.confirm("一周しました。もう一度学習しますか？")) {
                    setCurrentIndex(0);
                }
            }
        }, 150);
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setIsFlipped(false);
            setTimeout(() => {
                setCurrentIndex(prev => prev - 1);
            }, 150);
        }
    };

    const handleReset = () => {
        if (window.confirm("学習記録をリセットしますか？\n（「覚えた」単語がすべて未学習に戻ります）")) {
            setMemorizedIds(new Set());
        }
    };

    // Current word
    const currentWord = shuffledList[currentIndex];

    // Start Screen
    // Start Screen
    if (!started) {
        return (
            <div className="vocab-container">
                <div className="vocab-app-content start-screen">
                    <div className="vocab-header">
                        <h1>英検{targetExam.grade}単語</h1>
                        <p className="vocab-subtitle">{targetExam.year}年度 {targetExam.session}</p>
                    </div>

                    <div className="vocab-info-card">
                        <p className="remaining-label">あと</p>
                        <p className="remaining-count">{remainingCount}</p>
                        <p className="remaining-label">語</p>
                        <button className="reset-text-btn" onClick={handleReset}>
                            学習記録をリセット
                        </button>
                    </div>

                    <div className="settings-box">
                        <label className="setting-label">出題順序</label>
                        <div className="toggle-group">
                            <button
                                className={`toggle-btn ${!isRandom ? 'active' : ''}`}
                                onClick={() => setIsRandom(false)}
                            >
                                出現順
                            </button>
                            <button
                                className={`toggle-btn ${isRandom ? 'active' : ''}`}
                                onClick={() => setIsRandom(true)}
                            >
                                ランダム
                            </button>
                        </div>
                    </div>

                    <button className="start-btn-large" onClick={handleStart}>
                        START
                    </button>

                    <div className="start-footer-message">
                        がんばりましょう！応援しています！
                    </div>
                </div>
            </div>
        );
    }

    // Flashcard Screen
    return (
        <div className="vocab-container">
            <div className="vocab-app-content study-screen">
                {cheerMessage && (
                    <div className="cheer-overlay">
                        <div className="cheer-content">
                            🎉 {cheerMessage}
                        </div>
                    </div>
                )}

                <div className="study-header">
                    <span className="progress-text">No.{currentIndex + 1}</span>
                    <button className="quit-btn" onClick={() => setStarted(false)}>終了</button>
                </div>

                <div
                    className={`flashcard ${isFlipped ? 'flipped' : ''}`}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    <div className="card-face card-front">
                        <span className="word-en">{currentWord.word}</span>
                        <span className="tap-hint">Tap to Check</span>
                    </div>
                    <div className="card-face card-back">
                        <span className="word-jp">{currentWord.meaning}</span>
                        <span className="word-en-small">{currentWord.word}</span>
                    </div>
                </div>

                <div className="controls">
                    {!isFlipped ? (
                        <>
                            <button
                                className="control-btn prev"
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                            >
                                ← 前へ
                            </button>
                            <button
                                className="control-btn next"
                                onClick={() => setIsFlipped(true)}
                            >
                                答えを見る
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="control-btn answer-btn not-yet"
                                onClick={handleNotYet}
                            >
                                まだ
                            </button>
                            <button
                                className="control-btn answer-btn memorized"
                                onClick={handleMemorized}
                            >
                                覚えた
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VocabApp;
