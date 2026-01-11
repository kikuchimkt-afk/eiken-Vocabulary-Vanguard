import React, { useLayoutEffect, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getExamById } from '../data/exams';
import './HomeworkPrintPage.css';

const HomeworkPrintPage = () => {
    const { examId } = useParams();
    const [searchParams] = useSearchParams();
    const exam = getExamById(examId);
    const containerRef = useRef(null);

    // URLパラメータから情報を取得
    const startId = parseInt(searchParams.get('start')) || 1;
    const endId = parseInt(searchParams.get('end')) || exam?.data?.questions?.length || 17;
    const issueDate = searchParams.get('issueDate') || '';
    const nextAssignment = searchParams.get('nextAssignment') || '';
    const nextExamId = searchParams.get('nextExamId');
    const instructorName = searchParams.get('instructor') || '';
    const deadline = searchParams.get('deadline') || '';
    const message = searchParams.get('message') || '';

    // 自動スケーリング処理
    useLayoutEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        // スタイルリセット
        element.style.transform = '';
        element.style.transformOrigin = '';

        const { offsetWidth, scrollHeight } = element;
        // A4縦比率 (297/210 ≒ 1.414) からマージン分を引いた安全係数
        const SAFE_RATIO = 1.35;
        const targetHeight = offsetWidth * SAFE_RATIO;

        if (scrollHeight > targetHeight) {
            const scale = targetHeight / scrollHeight;
            // 95%以下なら適用（微小な縮小は無視してもよいが、今回は厳密に合わせる）
            element.style.transformOrigin = 'top center';
            element.style.transform = `scale(${scale})`;
        }
    }, [exam, startId, endId]); // 依存配列

    if (!exam) {
        return <div className="print-error">試験データが見つかりません。</div>;
    }

    const { questions } = exam.data;
    // ID比較を安全に行う（数値変換）
    const filteredQuestions = questions.filter(q => Number(q.id) >= Number(startId) && Number(q.id) <= Number(endId));
    const questionCount = filteredQuestions.length;

    if (questionCount === 0) {
        return <div className="print-error">選択された範囲の問題が見つかりません。(ID: {startId} - {endId})</div>;
    }

    // 問題を左右2列に分割
    const halfPoint = Math.ceil(questionCount / 2);
    const leftColumn = filteredQuestions.slice(0, halfPoint);
    const rightColumn = filteredQuestions.slice(halfPoint);

    // 正解を2行に分割
    const answerHalfPoint = Math.ceil(questionCount / 2);
    const answerLine1 = filteredQuestions.slice(0, answerHalfPoint);
    const answerLine2 = filteredQuestions.slice(answerHalfPoint);

    // QRコード用URL生成
    const baseUrl = 'https://eiken-vocabulary-vanguard.vercel.app';
    const instructorPageUrl = `${baseUrl}/classroom/${examId}?mode=instructor&range=${startId}-${endId}&locked=true`;

    let vocabExamId = examId;
    let vocabRange = `${startId}-${endId}`;

    if (nextExamId) {
        vocabExamId = nextExamId;
        const nextExam = getExamById(nextExamId);
        if (nextExam?.data?.questions) {
            vocabRange = `1-${nextExam.data.questions.length}`;
        }
    }

    const vocabPageUrl = `${baseUrl}/vocab/${vocabExamId}?range=${vocabRange}&locked=true`;
    const qrApiBase = 'https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=';

    // 日付フォーマット
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    };

    return (
        <div className="homework-print-page" ref={containerRef}>
            {/* ヘッダー */}
            <div className="homework-header">
                <h1>{exam.year}年度 {exam.session} {exam.grade}{(exam.isSubVenue || exam.badge === '準会場') ? ' (準会場)' : ''} 大問１</h1>
                <div className="homework-meta">
                    Name: ____________________ Date: ______________ Score: ______/{questionCount}
                </div>
            </div>

            {/* 問題エリア - 2列 */}
            <div className="homework-questions-container">
                <div className="homework-column">
                    {leftColumn.map((q) => (
                        <div key={q.id} className="homework-question">
                            <div className="hq-number">({q.id})</div>
                            <div className="hq-content">
                                <div className="hq-text" dangerouslySetInnerHTML={{ __html: q.text }}></div>
                                <div className="hq-choices">
                                    {q.choices.map((choice, idx) => (
                                        <span key={idx} className="hq-choice">
                                            <span className="hq-choice-num">{idx + 1}</span> {choice}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="homework-column">
                    {rightColumn.map((q) => (
                        <div key={q.id} className="homework-question">
                            <div className="hq-number">({q.id})</div>
                            <div className="hq-content">
                                <div className="hq-text" dangerouslySetInnerHTML={{ __html: q.text }}></div>
                                <div className="hq-choices">
                                    {q.choices.map((choice, idx) => (
                                        <span key={idx} className="hq-choice">
                                            <span className="hq-choice-num">{idx + 1}</span> {choice}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 下部エリア */}
            <div className="homework-footer-area">
                {/* QRエリア（左） */}
                <div className="homework-qr-section">
                    <div className="qr-item">
                        <img
                            src={`${qrApiBase}${encodeURIComponent(instructorPageUrl)}`}
                            alt="解説ページQR"
                            className="qr-image"
                        />
                        <div className="qr-label">この問題の解説ページ,<br />インストラクターモードのQR<br />(スマフォ, タブレット用)</div>
                        <div className="qr-url-label">PC用URL</div>
                        <div className="qr-url-text">{instructorPageUrl}</div>
                    </div>
                </div>

                {/* 解答・情報エリア（中央） */}
                <div className="homework-answer-section">
                    <div className="answer-key-box">
                        <div className="answer-key-title">この問題の正解，解答</div>
                        <div className="answer-key-content">
                            {answerLine1.map((q) => (
                                <span key={q.id} className="answer-item">({q.id}) {q.correctAnswer}</span>
                            ))}
                        </div>
                        <div className="answer-key-content">
                            {answerLine2.map((q) => (
                                <span key={q.id} className="answer-item">({q.id}) {q.correctAnswer}</span>
                            ))}
                        </div>
                    </div>

                    <div className="instructor-info">
                        {issueDate && <div className="info-row"><span className="info-label">出題日:</span> {formatDate(issueDate)}</div>}
                        {nextAssignment && <div className="info-row"><span className="info-label">次回の課題の年と回:</span> {nextAssignment}</div>}
                        {instructorName && <div className="info-row"><span className="info-label">担当講師:</span> {instructorName}</div>}
                        {deadline && <div className="info-row"><span className="info-label">宿題締め切り:</span> {formatDate(deadline)}</div>}
                        {message && <div className="info-row message-row"><span className="info-label">メッセージ:</span> {message}</div>}
                    </div>
                </div>

                {/* QRエリア（右） */}
                <div className="homework-qr-section" style={{ visibility: nextAssignment ? 'visible' : 'hidden' }}>
                    <div className="qr-item">
                        <img
                            src={`${qrApiBase}${encodeURIComponent(vocabPageUrl)}`}
                            alt="単語テストQR"
                            className="qr-image"
                        />
                        <div className="qr-label">次回の問題の単語テスト<br />のQR(スマフォ, タブレット用)</div>
                        <div className="qr-url-label">PC用URL</div>
                        <div className="qr-url-text">{vocabPageUrl}</div>
                    </div>
                </div>
            </div>

            {/* フッター */}
            <div className="homework-footer">
                © ECCベストワン藍住・北島中央
            </div>
        </div>
    );
};

export default HomeworkPrintPage;
