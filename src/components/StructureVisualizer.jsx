import React from 'react';
import './StructureVisualizer.css';

// Colors (Refined Palette)
const TYPE_COLORS = {
    'S': { color: '#e53935', label: 'S' },        // Red
    'V': { color: '#43a047', label: 'V' },        // Green
    'C': { color: '#fbc02d', label: 'C' },        // Amber
    'O': { color: '#1e88e5', label: 'O' },        // Blue
    'M': { color: '#78909c', label: 'M' },        // Blue Grey
    'default': { color: '#333', label: '' }
};

// Field label mappings for Japanese display
const FIELD_LABELS = {
    fullSentence: '📝 原文',
    mainClause: '🔷 主節',
    thatClause: '🔹 that節',
    whenClause: '🔸 when節',
    relativeClause: '🔻 関係詞節',
    asClause: '🔹 as節',
    afterClause: '🔹 after節',
    purposeClause: '🔹 目的節',
    modifierClause: '🔹 修飾節',
    modifierDetail: '🔸 修飾語',
    causativeDetail: '🔹 使役構文',
    perceptionDetail: '🔹 知覚動詞',
    infinitiveClause: '🔹 to不定詞句',
    firstClause: '🔷 第1節',
    secondClause: '🔷 第2節',
    grammarPoint: '📖 文法',
    contrast: '⚡ 対比',
    evidenceClause: '💡 根拠文',
    conditionalClause: '🔹 条件節',
    analysis: '📝 解説'
};

function StructureVisualizer({ text, translation, rationale, correctWord }) {

    const parseStructure = (str) => {
        if (!str) return [];
        const chunks = [];
        // Match tags like [S], [V], [O], [C], [M], [S'], [V'], [O'], [C'], [S''], [V''], etc.
        const regex = /\[([SVCOM]'*)\]/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(str)) !== null) {
            const tag = match[1];
            const tagIndex = match.index;
            const textSegment = str.substring(lastIndex, tagIndex).trim();
            if (textSegment) {
                // Use base type (S, V, O, C, M) for coloring, preserve full tag for display
                const baseType = tag.charAt(0);
                chunks.push({ text: textSegment, type: baseType, fullTag: tag });
            }
            lastIndex = regex.lastIndex;
        }

        const remaining = str.substring(lastIndex).trim();
        if (remaining) {
            chunks.push({ text: remaining, type: null, fullTag: null });
        }
        return chunks;
    };

    // Function to highlight the correct word in pastel yellow
    const highlightCorrectWord = (chunkText) => {
        if (!correctWord || !chunkText) return chunkText;

        // Case-insensitive search for the correct word
        const escapedWord = correctWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedWord})`, 'gi');
        const parts = chunkText.split(regex);

        if (parts.length === 1) return chunkText;

        return parts.map((part, i) => {
            if (part.toLowerCase() === correctWord.toLowerCase()) {
                return (
                    <span key={i} className="correct-word-highlight">
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    // Render a single structure line with SVOC coloring
    // Splits on '→' to separate structure from Japanese comment
    const renderStructureLine = (str, showLabel = null) => {
        // Split on '→' to separate structure and comment
        const [structurePart, commentPart] = str.split('→').map(s => s.trim());

        const chunks = parseStructure(structurePart);
        return (
            <div className="structure-line">
                {showLabel && <span className="field-label">{showLabel}</span>}
                <div className="structure-content">
                    <span className="sentence-viz-inline">
                        {chunks.map((chunk, idx) => {
                            const style = TYPE_COLORS[chunk.type] || TYPE_COLORS.default;
                            if (!chunk.type) {
                                return <span key={idx} className="viz-text-plain">{highlightCorrectWord(chunk.text)}</span>;
                            }
                            return (
                                <span key={idx} className="viz-chunk" style={{
                                    '--chunk-color': style.color,
                                    marginRight: '8px'
                                }}>
                                    <span className="chunk-text">{highlightCorrectWord(chunk.text)}</span>
                                    <span className="chunk-label-badge">{chunk.fullTag}</span>
                                </span>
                            );
                        })}
                    </span>
                    {commentPart && (
                        <span className="structure-comment">→ {commentPart}</span>
                    )}
                </div>
            </div>
        );
    };


    // Check if text is an object (new format) or string (old format)
    const isObjectFormat = text && typeof text === 'object';

    // For old string format
    const englishChunks = !isObjectFormat ? parseStructure(text) : [];

    // Parse LITERAL translation for color coding
    const literalChunks = translation && translation.literal && translation.literal.includes('[')
        ? parseStructure(translation.literal)
        : [{ text: translation?.literal || "", type: null }];

    return (
        <div className="structure-container">
            {/* Object Format (New - フィールド分離) */}
            {isObjectFormat && (
                <div className="structure-object-view">
                    {Object.entries(text).map(([key, value]) => {
                        if (!value) return null;
                        const label = FIELD_LABELS[key] || key;

                        // Grammar point gets special styling
                        if (key === 'grammarPoint') {
                            return (
                                <div key={key} className="grammar-note">
                                    <strong>{label}:</strong> {value}
                                </div>
                            );
                        }

                        // Other fields get structure parsing
                        return (
                            <div key={key} className="field-row">
                                {renderStructureLine(value, label)}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* String Format (Old - 従来形式) */}
            {!isObjectFormat && text && (
                <div className="sentence-viz">
                    {englishChunks.map((chunk, idx) => {
                        const style = TYPE_COLORS[chunk.type] || TYPE_COLORS.default;
                        if (!chunk.type) {
                            return <span key={idx} className="viz-text-plain">{highlightCorrectWord(chunk.text)}</span>;
                        }
                        return (
                            <span key={idx} className="viz-chunk" style={{
                                '--chunk-color': style.color,
                                marginRight: '15px'
                            }}>
                                <span className="chunk-text">{highlightCorrectWord(chunk.text)}</span>
                                <span className="chunk-label-badge">{style.label}</span>
                            </span>
                        );
                    })}
                </div>
            )}

            {/* Translation Box */}
            {translation && (
                <div className="translation-box">
                    <div className="trans-row">
                        <span className="trans-label literal">LITERAL</span>
                        <span className="trans-text-colored-wrapper">
                            {literalChunks.map((chunk, idx) => {
                                const style = TYPE_COLORS[chunk.type];
                                if (!style) return <span key={idx}>{chunk.text}</span>;

                                return (
                                    <span
                                        key={idx}
                                        className="trans-chunk-colored"
                                        style={{ color: style.color }}
                                    >
                                        {chunk.text}
                                    </span>
                                );
                            })}
                        </span>
                    </div>
                    {translation.natural && (
                        <div className="trans-row">
                            <span className="trans-label natural">NATURAL</span>
                            <span className="trans-text">{translation.natural}</span>
                        </div>
                    )}
                </div>
            )}
            {rationale && (
                <div className="rationale-box">
                    <div className="rationale-header">
                        <span className="rationale-icon">💡</span> 選択根拠・指導ポイント
                    </div>
                    <div className="rationale-content">
                        {rationale}
                    </div>
                </div>
            )}
        </div>
    );
}

export default StructureVisualizer;

