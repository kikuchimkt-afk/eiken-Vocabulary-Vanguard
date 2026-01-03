import React from 'react';
import { useParams } from 'react-router-dom';
import { getExamById } from '../data/exams';
import './PrintLayout.css';

const PrintLayout = () => {
    const { examId } = useParams();
    const exam = getExamById(examId);

    if (!exam) {
        return <div className="print-error">Exam data not found.</div>;
    }

    const { questions } = exam.data;
    const questionCount = questions.length;

    // Split answers into 2 lines
    const halfPoint = Math.ceil(questionCount / 2);
    const line1 = questions.slice(0, halfPoint);
    const line2 = questions.slice(halfPoint);

    return (
        <div className="print-sheet-a4">
            <div className="print-header">
                <h1>{exam.year}年度 {exam.session} {exam.grade} 大問１</h1>
                <div className="print-meta">Name: ____________________ Date: ______________ Score: ______/{questionCount}</div>
            </div>

            <div className="print-columns">
                {questions.map((q) => (
                    <div key={q.id} className="print-question-block">
                        <div className="pq-number">({q.id})</div>
                        <div className="pq-content">
                            <div className="pq-text" dangerouslySetInnerHTML={{ __html: q.text }}></div>
                            <div className="pq-choices">
                                {q.choices.map((choice, idx) => (
                                    <div key={idx} className="pq-choice-item">
                                        <span className="pq-choice-num">{idx + 1}</span> {choice}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="print-answer-key">
                <div className="answer-key-title">【正解】</div>
                <div className="answer-key-content">
                    {line1.map((q) => (
                        <span key={q.id} className="answer-key-item">({q.id}) {q.correctAnswer}</span>
                    ))}
                </div>
                <div className="answer-key-content">
                    {line2.map((q) => (
                        <span key={q.id} className="answer-key-item">({q.id}) {q.correctAnswer}</span>
                    ))}
                </div>
            </div>

            <div className="print-footer">
                © ECCベストワン藍住・北島中央
            </div>
        </div>
    );
};

export default PrintLayout;
