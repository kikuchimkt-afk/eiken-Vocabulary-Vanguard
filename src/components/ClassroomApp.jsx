
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { getExamById, exams } from '../data/exams'; // Dynamic data loader
import StructureVisualizer from './StructureVisualizer';
import './ClassroomApp.css';

function ClassroomApp() {
    const { examId } = useParams(); // Get ID from URL
    const [searchParams] = useSearchParams();
    // const navigate = useNavigate(); // Unused

    // Dynamic Data Loading
    const targetExam = getExamById(examId) || exams[0]; // Fallback to first exam
    const examData = targetExam.data;

    // Helper to get initial questions based on range
    const getInitialQuestions = () => {
        const rangeParam = searchParams.get('range');
        if (rangeParam) {
            const [start, end] = rangeParam.split('-').map(Number);
            if (!isNaN(start) && !isNaN(end)) {
                return examData.questions.filter(q => q.id >= start && q.id <= end);
            }
        }
        return examData.questions;
    };

    // State Initialization
    const initialQs = getInitialQuestions();
    const [questions, setQuestions] = useState(initialQs);
    const [baseQuestions] = useState(initialQs); // Store original order for Practice Mode
    const [isInstructorMode, setIsInstructorMode] = useState(() => searchParams.get('mode') === 'instructor');

    // Student Mode States
    const [studentMode, setStudentMode] = useState('practice'); // 'practice' | 'test'
    const [isTestRunning, setIsTestRunning] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const [selectedAnswers, setSelectedAnswers] = useState({}); // { qId: selectedChoiceIdx }

    // Mistake Tracking State
    const [wrongQuestions, setWrongQuestions] = useState(() => {
        // Unique storage key per exam
        const storageKey = 'wrong_questions_' + targetExam.id;
        const saved = localStorage.getItem(storageKey);
        // Default to ALL questions if nothing saved (Treat as "Unanswered/Uncleared")
        return saved ? JSON.parse(saved) : examData.questions.map(q => q.id);
    });
    const [isWeaknessMode, setIsWeaknessMode] = useState(false);

    // Save wrong questions effect
    useEffect(() => {
        const storageKey = 'wrong_questions_' + targetExam.id;
        localStorage.setItem(storageKey, JSON.stringify(wrongQuestions));
    }, [wrongQuestions, targetExam.id]);


    // Helper: Shuffle Array
    const shuffleArray = (array) => {
        const newArr = [...array];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    };

    // Helper: Shuffle Question Choices
    const shuffleQuestion = (q) => {
        if (!q.choices) return q;

        // Create an array of indices [0, 1, 2, 3]
        const indices = q.choices.map((_, i) => i);
        const shuffledIndices = shuffleArray(indices);

        const newChoices = shuffledIndices.map(i => q.choices[i]);
        const newMeanings = q.choiceMeanings ? shuffledIndices.map(i => q.choiceMeanings[i]) : null;

        // Find new correct answer index
        // Original correct answer is 1-based index (q.correctAnswer)
        const oldCorrectIndex = q.correctAnswer - 1;
        // In the new array, where did oldCorrectIndex go?
        // newChoices[k] comes from q.choices[shuffledIndices[k]]
        // so we need k such that shuffledIndices[k] === oldCorrectIndex
        const newCorrectIndex = shuffledIndices.indexOf(oldCorrectIndex);

        return {
            ...q,
            choices: newChoices,
            choiceMeanings: newMeanings,
            correctAnswer: newCorrectIndex + 1 // Convert back to 1-based
        };
    };

    // Timer Logic
    useEffect(() => {
        let interval;
        if (isTestRunning && !isSubmitted) {
            interval = setInterval(() => {
                setElapsedTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTestRunning, isSubmitted]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')} `;
    };

    // Re-apply filters/shuffle when mode or weakness toggle changes
    useEffect(() => {
        // Instructor Mode: Always show full list (respecting range) in original order
        // Ignore Weakness Filter and Test Shuffling
        if (isInstructorMode) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setQuestions(baseQuestions);
            return;
        }

        let currentPool = [...baseQuestions];

        // Filter by Weakness if enabled
        if (isWeaknessMode) {
            currentPool = currentPool.filter(q => wrongQuestions.includes(q.id));
        }

        // Shuffle if Test Mode
        if (studentMode === 'test') {
            // Only shuffle if NOT submitted. If submitted, we want to keep the current state.
            // Also, we generally only want to shuffle once when entering the mode,
            // but relying on isSubmitted check helps prevent re-shuffle on grading.
            if (!isSubmitted) {
                const shuffled = currentPool.map(q => shuffleQuestion(q));
                setQuestions(shuffled);
            }
            // If submitted, do nothing to 'questions' to preserve order for review
        } else {
            // Practice Mode: Original Order
            setQuestions(currentPool);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [baseQuestions, isWeaknessMode, wrongQuestions.length, studentMode, isSubmitted, isInstructorMode]);

    const handleModeSwitch = (mode) => {
        setStudentMode(mode);
        // Reset everything on mode switch
        setSelectedAnswers({});
        setIsSubmitted(false);
        setElapsedTime(0);

        if (mode === 'test') {
            setIsTestRunning(true);
        } else {
            setIsTestRunning(false);
        }
    };

    const handleSubmitTest = () => {
        if (window.confirm('採点しますか？ (Grade the test?)')) {
            setIsSubmitted(true);
            setIsTestRunning(false);

            // Record Mistakes and Resolve Correct Answers
            const newWrongIds = [];
            const resolvedIds = [];

            questions.forEach(q => {
                const userSel = selectedAnswers[q.id];

                if (userSel === q.correctAnswer) {
                    // Correctly answered -> Remove from wrong list if present
                    if (wrongQuestions.includes(q.id)) {
                        resolvedIds.push(q.id);
                    }
                } else {
                    // Wrong or Unanswered -> Add to wrong list
                    if (!wrongQuestions.includes(q.id)) {
                        newWrongIds.push(q.id);
                    }
                }
            });

            if (newWrongIds.length > 0 || resolvedIds.length > 0) {
                setWrongQuestions(prev => {
                    // Filter out resolved IDs, then add new wrong IDs
                    const filtered = prev.filter(id => !resolvedIds.includes(id));
                    return [...filtered, ...newWrongIds];
                });
            }
        }
    };

    const handleResetMistakes = () => {
        if (window.confirm('未正解リストをリセット（全て未正解に戻す）しますか？')) {
            setWrongQuestions(examData.questions.map(q => q.id));
        }
    };

    // Answer Handler
    const handleAnswer = (qId, choiceIdx) => {
        // Determine status: 'correct' or 'wrong'
        // In React we typically store state, but for this simple app, we want to just track selection
        // to show Highlight class.
        // If we want to allow re-selection, we just update the state.
        setSelectedAnswers(prev => ({
            ...prev,
            [qId]: choiceIdx
        }));
    };

    const handleReset = (qId) => {
        setSelectedAnswers(prev => {
            const newState = { ...prev };
            delete newState[qId];
            return newState;
        });
    };

    // Instructor: Toggle Highlighting (Simple Implementation)
    const handleMouseUp = () => {
        if (!isInstructorMode) return;
        const selection = window.getSelection();
        if (!selection.isCollapsed) {
            try {
                const range = selection.getRangeAt(0);
                const span = document.createElement('span');
                span.className = 'highlighted-text';
                span.style.backgroundColor = '#fff3cdc7';
                range.surroundContents(span);
            } catch (e) { console.log('Selection error', e) }
        }
    };

    const openQRModal = () => {
        // Implementation for QR generation
        const start = window.prompt("Start ID:", 1);
        const end = window.prompt("End ID:", 5);
        if (start && end) {
            const url = `${window.location.origin}/classroom?range=${start}-${end}`;
            const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;
            // Simple window open for prototype
            const w = window.open("", "_blank", "width=400,height=400");
            w.document.write(`<h3>Scan for Range ${start}-${end}</h3><img src="${apiUrl}" /><br><a href="${url}">${url}</a>`);
        }
    };

    return (
        <div className={`classroom-body ${isInstructorMode ? 'instructor-mode' : ''}`} onMouseUp={handleMouseUp}>
            {/* App Control Bar (Modern UI) */}
            {/* 1. Unified App Header (Glassy) */}
            <nav className="glass-nav">
                <div className="nav-left">
                    <button className="tool-btn secondary" onClick={() => { window.location.href = '/'; }} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginRight: '12px', padding: '6px 12px', cursor: 'pointer' }}>
                        <span style={{ fontSize: '1.1em' }}>⌂</span> <span style={{ fontSize: '0.9rem' }}>ホーム</span>
                    </button>
                    <span className="app-logo" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'inherit' }}>
                        英検{targetExam.grade}
                    </span>
                    <div className="divider-vertical"></div>
                    <span className="nav-badge">{targetExam.title}</span>

                    {/* Instructor Toggle */}
                    <label className="toggle-wrapper">
                        <input
                            type="checkbox"
                            checked={isInstructorMode}
                            onChange={(e) => setIsInstructorMode(e.target.checked)}
                        />
                        <div className="toggle-bg">
                            <div className="toggle-handle"></div>
                        </div>
                        <span className="toggle-label">Instructor</span>
                    </label>

                </div>

                <div className="nav-right" style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                    <button className="tool-btn secondary" onClick={() => window.open(`/vocab/${targetExam.id}`, '_blank')} title="Vocabulary App" style={{ fontSize: '0.9rem' }}>
                        📖 宿題アプリ
                    </button>
                    <button className="tool-btn secondary" onClick={openQRModal} title="Show QR" style={{ fontSize: '0.9rem' }}>
                        📷 宿題QR
                    </button>
                </div>

                {/* Student Controls */}
                {/* Student Controls */}
                {!isInstructorMode && (
                    <>
                        {/* Mode Switcher (Pill Style) - Kept on Left */}
                        <div className="mode-pill">
                            <div
                                className={`pill-option ${studentMode === 'practice' ? 'active' : ''}`}
                                onClick={() => handleModeSwitch('practice')}
                            >
                                練習
                            </div>
                            <div
                                className={`pill-option ${studentMode === 'test' ? 'active' : ''}`}
                                onClick={() => handleModeSwitch('test')}
                            >
                                テスト
                            </div>
                        </div>

                        {/* Right Aligned Tools (Weakness & Reset) */}
                        <div className="nav-right" style={{ marginLeft: 'auto' }}>
                            {/* Combined Capsule: Status + Reset */}
                            <div className={`tool-capsule ${isWeaknessMode ? 'active-mode' : ''}`}>
                                <div
                                    className="capsule-label"
                                    onClick={() => setIsWeaknessMode(!isWeaknessMode)}
                                >
                                    <span className="btn-icon">⚡</span>
                                    <span className="btn-text">未正解 {wrongQuestions.length}</span>
                                </div>
                                <div className="capsule-divider"></div>
                                <button
                                    className="capsule-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleResetMistakes();
                                    }}
                                    title="全てリセット"
                                    disabled={wrongQuestions.length === 0}
                                >
                                    ⟳
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </nav>

            {/* Exam Paper Header */}
            <header className="paper-header">
                <div className="instruction-row">
                    <h1 className="big-number">1</h1>
                    次の(1)から({examData.questions.length})までの(     )に入れるのに最も適切なものを選びなさい。
                </div>
            </header>

            <hr className="paper-divider" />

            {/* Test Mode Floating Status Bar */}
            {studentMode === 'test' && !isInstructorMode && (
                <div className="floating-status-bar">
                    {!isSubmitted ? (
                        <>
                            <div className="timer-wrapper">
                                <span className="timer-icon">⏱</span>
                                <span className="timer-val">{formatTime(elapsedTime)}</span>
                            </div>
                            <button className="fab-submit" onClick={handleSubmitTest}>
                                採点する
                            </button>
                        </>
                    ) : (
                        <div className="result-row">
                            <div className="result-item">
                                <span className="label">Time</span>
                                <span className="value">{formatTime(elapsedTime)}</span>
                            </div>
                            <div className="divider-vertical small"></div>
                            <div className="result-item">
                                <span className="label">Score</span>
                                <span className="value score-highlight">
                                    {questions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length}
                                    <span className="total">/{Object.keys(selectedAnswers).length}</span>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <main id="question-container">
                {questions.map(q => {
                    const userSel = selectedAnswers[q.id];
                    const isAnswered = userSel !== undefined;

                    return (
                        <div key={q.id} className="question-block">
                            {isAnswered && studentMode === 'practice' && (
                                <button className="reset-btn" onClick={() => handleReset(q.id)}>
                                    リセット
                                </button>
                            )}
                            <div className="question-flex">
                                <div className="q-number-col">
                                    <div className="q-number">({q.id})</div>
                                    {/* Hide Correct Badge in Instructor Mode, show only in Student Modes when answered correct */}
                                    {!isInstructorMode && isAnswered && userSel === q.correctAnswer && (studentMode === 'practice' || (studentMode === 'test' && isSubmitted)) && (
                                        <div className="correct-badge">正解</div>
                                    )}
                                </div>
                                <div className="q-body">
                                    <div className="q-text highlightable" dangerouslySetInnerHTML={{ __html: q.text.replace(/\(\s*\)/g, '( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )') }}></div>
                                    {/* Intermediate Translation for Instructor */}
                                    {isInstructorMode && q.translation && q.translation.intermediate && (
                                        <div className="instructor-inline-trans">
                                            {q.translation.intermediate}
                                        </div>
                                    )}
                                    <div className="choices">
                                        {q.choices.map((choice, idx) => {
                                            const choiceNum = idx + 1;
                                            let statusClass = '';

                                            // Feedback Logic
                                            if (isInstructorMode) {
                                                // Instructor Mode: Only highlight correct answer, no interaction
                                                if (choiceNum === q.correctAnswer) statusClass = 'correct';
                                            } else {
                                                // Student Mode
                                                const showFeedback = studentMode === 'practice' || (studentMode === 'test' && isSubmitted);

                                                if (isAnswered && showFeedback) {
                                                    if (choiceNum === q.correctAnswer) statusClass = 'correct';
                                                    else if (choiceNum === userSel) statusClass = 'wrong';

                                                    // Always highlight correct one if answered wrong
                                                    if (userSel !== q.correctAnswer && choiceNum === q.correctAnswer) statusClass = 'correct';
                                                }

                                                // In Test Mode (running), just show selected state
                                                if (studentMode === 'test' && !isSubmitted && isAnswered) {
                                                    if (choiceNum === userSel) statusClass = 'selected-neutral';
                                                }
                                            }

                                            return (
                                                <div
                                                    key={idx}
                                                    className={`choice-item ${statusClass}`}
                                                    onClick={() => !isInstructorMode && handleAnswer(q.id, choiceNum)}
                                                    style={isInstructorMode ? { cursor: 'default', pointerEvents: 'none' } : {}}
                                                >
                                                    <span className="choice-number">{choiceNum}</span>
                                                    <div className="choice-content-col">
                                                        <span className="choice-text">{choice}</span>
                                                        {/* Show meanings in Instructor Mode OR Student Mode when Feedback is active */}
                                                        {(isInstructorMode || (isAnswered && (studentMode === 'practice' || (studentMode === 'test' && isSubmitted)))) && q.choiceMeanings && q.choiceMeanings[idx] && (
                                                            <div className="choice-meaning">{q.choiceMeanings[idx]}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {
                                        ((isAnswered && (studentMode === 'practice' || (studentMode === 'test' && isSubmitted))) || isInstructorMode) && (
                                            <div className="explanation-box visible">
                                                <strong>正解: {q.correctAnswer}</strong><br />
                                                {q.explanation}
                                            </div>
                                        )
                                    }                            {
                                        isInstructorMode && (
                                            <div className="instructor-tools">
                                                <StructureVisualizer
                                                    text={q.structure}
                                                    translation={q.translation}
                                                    rationale={q.rationale}
                                                    correctWord={q.choices[q.correctAnswer - 1]}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}

export default ClassroomApp;
