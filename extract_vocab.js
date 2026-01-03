const fs = require('fs');
const path = require('path');

// Read the file content
const dataPath = path.join(__dirname, 'src/data/grade2.js');
const fileContent = fs.readFileSync(dataPath, 'utf8');

// Extract the object part (removing "export const grade2Data = " and ";")
const objectString = fileContent.replace('export const grade2Data = ', '').replace(/;\s*$/, '');

// Unsafe eval to get the object (since it's a simple object literal in the file)
// Note: In a production env with unknown input this is bad, but here we know the file content.
// However, the file might contain unquoted keys or comments which JSON.parse handles strict.
// The file is JS, so eval is easiest way to parse the JS object literal.
const grade2Data = eval('(' + objectString + ')');

const allWords = new Set();
const breakdown = [];

grade2Data.questions.forEach(q => {
    // 1. Text
    let text = q.text.replace(/<br>/g, ' '); // Remove br
    text = text.replace(/A:|B:/g, ' '); // Remove speakers

    // Split by non-word characters
    const textWords = text.split(/[^a-zA-Z0-9'-]+/).filter(w => w.length > 1 && !w.match(/^\d+$/));

    // 2. Choices
    const choiceWords = [];
    q.choices.forEach(c => {
        const cWords = c.split(/[^a-zA-Z0-9'-]+/).filter(w => w.length > 1);
        cWords.forEach(w => choiceWords.push(w));
    });

    // Add to set (lowercase)
    textWords.forEach(w => allWords.add(w.toLowerCase()));
    choiceWords.forEach(w => allWords.add(w.toLowerCase()));

    breakdown.push({
        id: q.id,
        words: [...new Set([...textWords, ...choiceWords])].map(w => w.toLowerCase())
    });
});

console.log("Total unique words:", allWords.size);
console.log("\n--- Word List (Sorted) ---");
console.log([...allWords].sort().join('\n'));
