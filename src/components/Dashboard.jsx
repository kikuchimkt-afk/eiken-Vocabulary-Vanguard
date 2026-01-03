import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { exams } from '../data/exams';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    // Load saved grade from localStorage or default to '2級'
    const [selectedGrade, setSelectedGrade] = useState(() => {
        const saved = localStorage.getItem('selectedGrade');
        return saved || '2級';
    });
    const [bgIndex] = useState(() => Math.floor(Math.random() * 5) + 1);

    // Save selected grade to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('selectedGrade', selectedGrade);
    }, [selectedGrade]);

    // Filter exams by grade
    const filteredExams = exams.filter(exam => exam.grade === selectedGrade);

    // Grades list (Updated per user request)
    const grades = ['準1級', '2級', '準2級+', '準2級', '3級', '4級', '5級'];

    // Count exams per grade
    const getExamCount = (grade) => exams.filter(exam => exam.grade === grade).length;

    // Grade color mapping
    const gradeColors = {
        '準1級': '#8B5CF6', // purple
        '2級': '#EF4444',   // red
        '準2級+': '#F97316', // orange
        '準2級': '#F59E0B', // amber
        '3級': '#22C55E',   // green
        '4級': '#3B82F6',   // blue
        '5級': '#06B6D4',   // cyan
    };

    const handleStart = (examId) => {
        navigate(`/classroom/${examId}`);
    };

    const handlePrint = (examId) => {
        const url = `/print/${examId}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="dashboard-container">
            <div
                className="dashboard-bg"
                style={{
                    backgroundImage: `url('/backgrounds/bg${bgIndex}.png')`
                }}
            />
            <header className="dashboard-header">
                <h1>EIKEN Vocabulary Vanguard<br /><span style={{ fontSize: '0.6em', opacity: 0.8 }}>英検大問１</span></h1>
                <p>学習したい問題を選択してください</p>
            </header>

            <div className="grade-filters">
                {grades.map(grade => {
                    const count = getExamCount(grade);
                    const color = gradeColors[grade] || '#888';
                    const isActive = selectedGrade === grade;
                    const buttonStyle = isActive
                        ? { background: color, borderColor: color, color: 'white' }
                        : { background: 'transparent', borderColor: color, color: color };

                    return (
                        <button
                            key={grade}
                            className={`grade-btn ${isActive ? 'active' : ''}`}
                            onClick={() => setSelectedGrade(grade)}
                            style={buttonStyle}
                        >
                            {grade}
                            {count > 0 && <span className="count-badge" style={isActive ? { background: 'white', color: color } : {}}>{count}</span>}
                        </button>
                    );
                })}
            </div>

            <section className="exam-grid">
                <h2 className="section-title">英検{selectedGrade}</h2>
                <div className="cards-container">
                    {filteredExams.length > 0 ? (
                        filteredExams.map(exam => (
                            <div key={exam.id} className="exam-card">
                                <div className="card-header">
                                    <span className={`year-badge year-${exam.year}`}>{exam.year}</span>
                                    <span className="session-text">{exam.session}</span>
                                    {exam.badge && <span className="venue-badge">{exam.badge}</span>}
                                </div>

                                <div className="card-actions">
                                    <button className="action-btn primary" onClick={() => handleStart(exam.id)}>
                                        <span className="icon">📝</span> 演習/テスト
                                    </button>
                                    <button className="action-btn secondary" onClick={() => handlePrint(exam.id)}>
                                        <span className="icon">🖨</span> 印刷
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-data-message">
                            現在、この級のデータはありません。
                        </div>
                    )}
                </div>
            </section>

            <footer className="dashboard-footer">
                &copy; ECCベストワン藍住・北島中央
            </footer>
        </div>
    );
};

export default Dashboard;
