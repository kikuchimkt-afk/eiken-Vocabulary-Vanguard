const fs = require('fs');
const path = require('path');

// Read the file content
const dataPath = path.join(__dirname, 'src/data/grade2.js');
const fileContent = fs.readFileSync(dataPath, 'utf8');

const objectString = fileContent.replace('export const grade2Data = ', '').replace(/;\s*$/, '');

try {
    const grade2Data = eval('(' + objectString + ')');

    // Manual corrections map: "Original Word" -> { word: "Base", meaning: "Meaning" }
    // If meaning is null, use original meaning.
    const corrections = {
        // Q4
        "illustrated": { word: "illustrate", meaning: "説明する" },
        "reminded": { word: "remind", meaning: "思い出させる" },
        "proceeded": { word: "proceed", meaning: "進む" },
        "defended": { word: "defend", meaning: "守る" },
        // Q5
        "carriages": { word: "carriage", meaning: "馬車" },
        "fantasies": { word: "fantasy", meaning: "空想" },
        "puzzles": { word: "puzzle", meaning: "パズル" },
        "luxuries": { word: "luxury", meaning: "贅沢品" },
        // Q7
        "engaged": { word: "engage", meaning: "従事させる" },
        "divided": { word: "divide", meaning: "分ける" },
        "buried": { word: "bury", meaning: "埋める" },
        "stressed": { word: "stress", meaning: "強調する" },
        // Q8
        "sprayed": { word: "spray", meaning: "噴射する（スプレーした）" },
        "demanded": { word: "demand", meaning: "要求する" },
        "awarded": { word: "award", meaning: "授与する" },
        "punished": { word: "punish", meaning: "罰する" },
        // Q11
        "capable of": { word: "capable of", meaning: "〜の能力がある" },
        "inspired by": { word: "be inspired by", meaning: "〜に触発される" }, // Adjusted to idiom
        "attracted to": { word: "be attracted to", meaning: "〜に惹かれる" },
        "disappointed in": { word: "be disappointed in", meaning: "〜に失望して" },
        // Q12
        "hung up": { word: "hang up", meaning: "電話を切る" },
        "took after": { word: "take after", meaning: "〜に似る" },
        "set aside": { word: "set aside", meaning: "（のけて）取っておく" }, // set is base
        "cut down": { word: "cut down", meaning: "〜を減らす" },
        // Q13
        "heard of": { word: "hear of", meaning: "〜のことを聞く" },
        "turned over": { word: "turn over", meaning: "ひっくり返す" },
        "shut off": { word: "shut off", meaning: "止められる（遮断される）" }, // shut is base? "had to be shut off" -> passive. Base is shut off.
        "ruled out": { word: "rule out", meaning: "除外する" },
        // Q14
        "bringing out": { word: "bring out", meaning: "発売する（世に出す）" },
        "falling for": { word: "fall for", meaning: "騙される" },
        "picking on": { word: "pick on", meaning: "いじめる" },
        "giving off": { word: "give off", meaning: "（においなどを）発する" },
        // Q15
        "flows into": { word: "flow into", meaning: "〜に流れ込む" },
        "runs across": { word: "run across", meaning: "偶然出会う" },
        "hands over": { word: "hand over", meaning: "手渡す" },
        "digs up": { word: "dig up", meaning: "掘り起こす" },

        // Grammar/Filter Out (Set to null to skip)
        // Q18
        "none": null, "any": null, "other": null, "few": null,
        // Q19
        "provide": null, "to provide": null, "only provide": null,
        // provided is KEPT as it is a specific conjunction word
        // Q20
        "large from": null, "size from": null, "the large of": null,
        "the size of": { word: "times the size of", meaning: "〜の倍の大きさ" } // Special handling for the idiom context? 
        // Actually Q20 Correct Answer is "the size of". The idiom is "four times the size of".
        // Let's keep "the size of" or better "times the size of" if we want the full phrases? 
        // User checklist had "times the size of". I'll use that as the mapped word for "the size of".
    };

    const skipWords = new Set(["large from", "size from", "the large of", "none", "any", "other", "few", "provide", "to provide", "only provide"]);

    console.log("# Essential Vocabulary List (Grade 2, 2023-1)");
    let totalCount = 0;

    grade2Data.questions.forEach(q => {
        // Iterate choices in order
        q.choices.forEach((c, idx) => {
            let choiceText = c.trim();
            let meaning = q.choiceMeanings ? q.choiceMeanings[idx] : "";

            // Check skip
            if (skipWords.has(choiceText)) return;

            let finalWord = choiceText;
            let finalMeaning = meaning;

            // Apply corrections
            if (corrections[choiceText] !== undefined) {
                if (corrections[choiceText] === null) return; // Explicit skip

                finalWord = corrections[choiceText].word;
                finalMeaning = corrections[choiceText].meaning || meaning;
            } else {
                // Default: Singularize common S suffixes if not in corrections?
                // Just use original if not corrected.
                // The ones I didn't list in 'corrections' were mostly fine (singular nouns, adjectives).
            }

            // Output format: "Word : Meaning"
            console.log(`${finalWord} : ${finalMeaning}`);
            totalCount++;
        });
    });

    console.log(`\nTotal: ${totalCount} words`);

} catch (e) {
    console.error("Errorparsing:", e);
}
