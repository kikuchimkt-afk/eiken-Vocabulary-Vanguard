const fs = require('fs');
const path = require('path');

// Read the file content
const dataPath = path.join(__dirname, 'src/data/grade2.js');
const fileContent = fs.readFileSync(dataPath, 'utf8');

// Extract the object part (removing "export const grade2Data = " and ";")
const objectString = fileContent.replace('export const grade2Data = ', '').replace(/;\s*$/, '');

try {
    const grade2Data = eval('(' + objectString + ')');

    // Set of "Basic" words/Grammar terms/Partial matches to exclude for "Vocabulary" study
    const basicWords = new Set([
        "a", "an", "the", "in", "on", "at", "to", "for", "of", "with", "by", "from", "up", "down", "out", "about",
        "be", "is", "are", "was", "were", "bin", "have", "has", "had", "do", "does", "did",
        "can", "could", "will", "would", "shall", "should", "may", "might", "must",
        "i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them",
        "my", "your", "his", "their", "our", "its",
        "this", "that", "these", "those",
        "what", "which", "who", "whom", "whose", "where", "when", "why", "how",
        "some", "any", "no", "none", "all", "each", "every", "other", "another",
        "few", "little", "many", "much",
        "one", "two", "three", "four", "five", "first", "second", "third",
        "yes", "no", "not", "never", "always", "often", "usually", "just", "very", "so", "too",
        "provide", "provided", "to provide", "only provide", // Grammar variations (Q19)
        "large from", "size from", "the large of", "the size of", // Grammar variations (Q20)
        "none", "any", "other", "few", // Grammar (Q18)
        "capable of", "inspired by", "attracted to", "disappointed in", // Phrases (Q11 - keep the key word 'disappointed' or 'capable'?)
        // Let's decide how to handle phrases. "disappointed in" is the idiom.
        // If we want <50 words, we might want to consolidate.
        // But the prompt says "extract from choices".
        // Let's keep distinct phrasal verbs/idioms as "words".
        // Q11: "disappointed in", "capable of" are idiomatic adjectives with prepositions.
        // The script splits by space?
        // Let's treat choice as a WHOLE UNIT if it's a phrase in the data.

        "large", "size" // Basic words
    ]);

    const essentialVocab = new Map(); // Word -> Meaning (if found) or Context

    grade2Data.questions.forEach(q => {
        // We mainly want the CHOICES because that's what's being tested.
        // Also the Answer word is critical.

        q.choices.forEach((c, idx) => {
            let choiceText = c.trim(); // Keep original case for display
            let lowerC = choiceText.toLowerCase();
            let meaning = q.choiceMeanings ? q.choiceMeanings[idx] : "";

            // Check filters
            if (basicWords.has(lowerC)) return;

            // Short word filter (unless it's a valid vocab word like "aim", "aid" - but "cut", "set" are basic verbs)
            // Let's trust the "basicWords" list mostly.
            // "cut down", "set aside" -> these are phrasal verbs. Space detection.

            // If it's a grammar choice (like Q19 variations), it might be filtered by basicWords or pattern.
            // Q19 choices: "provide", "provided", "to provide", "only provide".
            // "provided" is conjunction "provides that".
            // If I filter "provide", I lose the root.
            // But this question is GRAMMAR.
            // Maybe manual review is best?
            // "Extract ... 50 or less".

            essentialVocab.set(choiceText, meaning);
        });

        // Also check explanation for "Word: Meaning" format to ensure we capture the specific meaning taught
        // This often confirms the 'correct' answer's definition.
        if (q.explanation) {
            const match = q.explanation.match(/^([a-zA-Z\s]+):\s*(.+)$/);
            if (match) {
                const w = match[1].trim(); // Word
                // Sometimes explanation says "judgment: 判断".
                // We overwrite with this meaning as it's authoritative for the question.
                if (essentialVocab.has(w) || essentialVocab.has(w.toLowerCase())) {
                    // Update meaning if it was empty or generic
                    essentialVocab.set(w, match[2].trim());
                } else {
                    // Add if not in choices (rare but possible context word)
                    // But filter basic
                    if (!basicWords.has(w.toLowerCase())) {
                        essentialVocab.set(w, match[2].trim());
                    }
                }
            }
        }
    });

    // Post-processing for size < 50
    // Q1-10 are Pure Vocab (40 words).
    // Q11-17 are Idioms/Phrasal Verbs (7*4=28).
    // Q18-20 are Grammar (usually).
    // Total raw is ~70+.
    // User wants < 50.
    // I should prioritize the Correct Answer (Must know) and maybe 1-2 key distractors?
    // Or just all Correct Answers (20) + High frequency distractors?

    // Let's filter out "Grammar Question" choices entirely if possible.
    // Q18 (any/none), Q19 (provided/provide), Q20 (size of).
    // These are often just grammar forms.
    // "provided" is a vocab word (conjunction).
    // "size" is basic.

    // I will output the list and mark them.

    console.log(`Total candidates: ${essentialVocab.size}`);
    console.log("\n--- Essential Vocabulary List ---");
    let count = 0;
    const sortedEntries = Array.from(essentialVocab.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    sortedEntries.forEach(([word, meaning]) => {
        // Filter out Q20 style "the large of" if it slipped through (it is in basicWords list though)
        console.log(`${word} : ${meaning}`);
        count++;
    });
    console.log(`\nFinal Count: ${count}`);

} catch (e) {
    console.error("Error parsing data:", e);
}
