import React, { useState, useEffect } from 'react';
import { exams } from '../data/exams';
import './HomeworkQRModal.css';

const HomeworkQRModal = ({ isOpen, onClose, exam, onConfirm }) => {
    const [formData, setFormData] = useState({
        startId: 1,
        endId: exam?.data?.questions?.length || 17,
        issueDate: new Date().toISOString().split('T')[0],
        nextAssignment: '',
        instructorName: '',
        deadline: '',
        message: ''
    });

    // 試験が変わったら終了IDを更新 & 次回の課題のデフォルトを設定
    useEffect(() => {
        if (exam?.data?.questions) {
            setFormData(prev => ({
                ...prev,
                endId: exam.data.questions.length
            }));
        }
    }, [exam]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm(formData);
    };

    if (!isOpen) return null;

    // 現在の試験情報
    const currentExamLabel = exam ? `${exam.year}年度 ${exam.session} ${exam.grade}` : '未選択';
    const subVenueLabel = exam?.isSubVenue ? '(准会場)' : '';

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content homework-qr-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>📷 宿題プリント設定</h2>
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        {/* 今回の課題情報表示 */}
                        <div className="current-assignment-info" style={{ marginBottom: '20px', padding: '10px', background: '#f3f4f6', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>今回の課題</div>
                            <div style={{ fontWeight: 'bold', color: '#1f2937' }}>
                                {currentExamLabel} {subVenueLabel}
                            </div>
                        </div>



                        <div className="form-section">
                            <h3>プリント情報</h3>
                            <div className="form-group">
                                <label>出題日</label>
                                <input
                                    type="date"
                                    name="issueDate"
                                    value={formData.issueDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>次回の課題（年と回）</label>
                                <select
                                    name="nextAssignment"
                                    value={formData.nextAssignment}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px 14px',
                                        border: '1px solid #d1d5db',
                                        backgroundColor: '#ffffff',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        color: '#1f2937',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    <option value="">選択してください</option>
                                    {(exams.filter(ex => !exam || ex.grade === exam.grade).length > 0
                                        ? exams.filter(ex => !exam || ex.grade === exam.grade)
                                        : exams
                                    ).map((ex) => (
                                        <option key={ex.id} value={`${ex.year}年度 ${ex.session} ${ex.grade}${ex.isSubVenue ? ' (准会場)' : ''}`}>
                                            {ex.year}年度 {ex.session} {ex.grade} {ex.isSubVenue ? ' (准会場)' : ''}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>担当講師</label>
                                <input
                                    type="text"
                                    name="instructorName"
                                    value={formData.instructorName}
                                    onChange={handleChange}
                                    placeholder="講師名"
                                />
                            </div>
                            <div className="form-group">
                                <label>宿題締め切り</label>
                                <input
                                    type="date"
                                    name="deadline"
                                    value={formData.deadline}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>メッセージ（任意）</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="生徒へのメッセージ"
                                    rows={2}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            キャンセル
                        </button>
                        <button type="submit" className="btn-confirm">
                            🖨️ 印刷ページを開く
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HomeworkQRModal;
