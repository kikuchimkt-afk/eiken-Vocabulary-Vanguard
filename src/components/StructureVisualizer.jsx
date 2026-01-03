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

function StructureVisualizer({ text, translation, rationale, correctWord }) {

    const parseStructure = (str) => {
        if (!str) return [];
        const chunks = [];
        const regex = /\[([SVCOM])\]/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(str)) !== null) {
            const tag = match[1];
            const tagIndex = match.index;
            const textSegment = str.substring(lastIndex, tagIndex).trim();
            if (textSegment) {
                chunks.push({ text: textSegment, type: tag });
            }
            lastIndex = regex.lastIndex;
        }

        const remaining = str.substring(lastIndex).trim();
        if (remaining) {
            chunks.push({ text: remaining, type: null });
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

    const englishChunks = parseStructure(text);

    // Parse LITERAL translation for color coding
    const literalChunks = translation && translation.literal && translation.literal.includes('[')
        ? parseStructure(translation.literal)
        : [{ text: translation?.literal || "", type: null }];

    return (
        <div className="structure-container">
            {/* English Structure */}
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
