export const grade5_2023_2Data = {
    title: "2023年度第2回検定一次試験(5級)",
    questions: [
        {
            id: 1,
            text: "A: Does Alice have any ( )?<br>B: Yes. She has three dogs.",
            choices: ["videos", "pets", "songs", "classes"],
            choiceMeanings: ["動画", "ペット", "歌", "授業"],
            correctAnswer: 2,
            structure: "Does Alice [S] have [V] any pets [O]?",
            explanation: "正解: pets（ペット）。犬を3匹飼っているから、「ペット」を飼っているか聞いているんだね！",
            translation: {
                literal: "アリスは [S] 飼っている [V] ペットを [O]？",
                natural: "アリスはペットを飼ってる？",
                intermediate: "A: アリスはペットを飼ってる？\nB: うん。犬を3匹飼っているよ。"
            },
            rationale: "犬は「ペット」だね！動画やクラスは「飼う」ものじゃないよ。"
        },
        {
            id: 2,
            text: "A: Look! That cat is very ( ).<br>B: Yes. It's very cute.",
            choices: ["small", "rainy", "high", "cloudy"],
            choiceMeanings: ["小さい", "雨の", "高い", "曇りの"],
            correctAnswer: 1,
            structure: "That cat [S] is [V] very small [C].",
            explanation: "正解: small（小さい）。「とてもかわいい」と言っているから、「小さい」猫なんだね。",
            translation: {
                literal: "あの猫は [S] です [V] とても小さい [C]。",
                natural: "見て！あの猫はとても小さいよ。",
                intermediate: "A: 見て！あの猫はとても小さいよ。\nB: うん。とてもかわいいね。"
            },
            rationale: "猫を「雨の」「曇りの」とは言わないよね。「小さい」が自然だね！"
        },
        {
            id: 3,
            text: "Kenji can ( ) English very well. He likes English very much.",
            choices: ["see", "eat", "live", "speak"],
            choiceMeanings: ["見る", "食べる", "住む", "話す"],
            correctAnswer: 4,
            structure: "Kenji [S] can speak [V] English [O] very well [M].",
            explanation: "正解: speak（話す）。「speak English」で「英語を話す」という意味だよ。けんじは英語がとても上手なんだね！",
            translation: {
                literal: "けんじは [S] 話せる [V] 英語を [O] とても上手に [M]。",
                natural: "けんじは英語がとても上手だよ。英語がすごく好きなんだ。",
                intermediate: "けんじは英語をとても上手に話せます。英語がとても好きです。"
            },
            rationale: "英語は「話す」ものだね！「食べる」や「見る」ではないよ。"
        },
        {
            id: 4,
            text: "A: What ( ) do you like?<br>B: I like green.",
            choices: ["year", "song", "color", "movie"],
            choiceMeanings: ["年", "歌", "色", "映画"],
            correctAnswer: 3,
            structure: "What color [O] do you [S] like [V]?",
            explanation: "正解: color（色）。「green（緑）」と答えているから、「何色」が好きか聞いているんだね。",
            translation: {
                literal: "何色を [O] あなたは [S] 好き [V]？",
                natural: "何色が好き？",
                intermediate: "A: 何色が好き？\nB: 緑が好きだよ。"
            },
            rationale: "「green」は色だから、「What color」で「何色」と聞いているんだね！"
        },
        {
            id: 5,
            text: "A: Hiroshi, which season do you like?<br>B: I like spring. We can ( ) new friends in April.",
            choices: ["meet", "go", "close", "cook"],
            choiceMeanings: ["会う", "行く", "閉じる", "料理する"],
            correctAnswer: 1,
            structure: "We [S] can meet [V] new friends [O] in April [M].",
            explanation: "正解: meet（会う）。4月は新学期だから、新しい友達に「会える」んだね。",
            translation: {
                literal: "私たちは [S] 会える [V] 新しい友達に [O] 4月に [M]。",
                natural: "春が好きだよ。4月に新しい友達に会えるからね。",
                intermediate: "A: ひろし、どの季節が好き？\nB: 春が好きだよ。4月に新しい友達に会えるからね。"
            },
            rationale: "新しい友達は「会う」ものだね！「料理する」ではないよ。"
        },
        {
            id: 6,
            text: "A: Everyone, open your ( ) to page 35.<br>B: OK, Ms. Brown.",
            choices: ["apples", "trains", "trees", "textbooks"],
            choiceMeanings: ["りんご", "電車", "木", "教科書"],
            correctAnswer: 4,
            structure: "Open [V] your textbooks [O] to page 35 [M].",
            explanation: "正解: textbooks（教科書）。35ページを開いてね、と先生が言っているから「教科書」だね。",
            translation: {
                literal: "開いて [V] 教科書を [O] 35ページに [M]。",
                natural: "みなさん、教科書の35ページを開いて。",
                intermediate: "A: みなさん、教科書の35ページを開いて。\nB: わかりました、ブラウン先生。"
            },
            rationale: "ページがあるのは「教科書」だね！りんごや電車にはページがないよ。"
        },
        {
            id: 7,
            text: "A: Does Linda ( ) very well?<br>B: Yes. She takes lessons on Mondays and Tuesdays.",
            choices: ["make", "dance", "want", "open"],
            choiceMeanings: ["作る", "踊る", "欲しい", "開ける"],
            correctAnswer: 2,
            structure: "Does Linda [S] dance [V] very well [M]?",
            explanation: "正解: dance（踊る）。レッスンを受けているから、「ダンス」が上手か聞いているんだね。",
            translation: {
                literal: "リンダは [S] 踊る [V] とても上手に [M]？",
                natural: "リンダはダンスが上手？",
                intermediate: "A: リンダはダンスが上手？\nB: うん。月曜と火曜にレッスンを受けてるよ。"
            },
            rationale: "レッスンを受けているから「踊る」のが上手なんだね！"
        },
        {
            id: 8,
            text: "I study in the library ( ) 9:30 a.m. to 11:30 a.m. every Sunday.",
            choices: ["of", "with", "under", "from"],
            choiceMeanings: ["〜の", "〜と一緒に", "〜の下に", "〜から"],
            correctAnswer: 4,
            structure: "I [S] study [V] in the library [M] from 9:30 a.m. to 11:30 a.m. [M].",
            explanation: "正解: from。「from A to B」で「AからBまで」という意味だよ。9時半から11時半まで図書館で勉強するんだね。",
            translation: {
                literal: "私は [S] 勉強する [V] 図書館で [M] 9時半から11時半まで [M]。",
                natural: "毎週日曜日、9時半から11時半まで図書館で勉強するよ。",
                intermediate: "毎週日曜日、9時半から11時半まで図書館で勉強します。"
            },
            rationale: "「from A to B」は「AからBまで」という決まり文句だよ！"
        },
        {
            id: 9,
            text: "A: I want this notebook. How ( ) is it?<br>B: It's 100 yen.",
            choices: ["old", "much", "long", "many"],
            choiceMeanings: ["古い", "いくら", "長い", "いくつ"],
            correctAnswer: 2,
            structure: "How much [M] is it [S]?",
            explanation: "正解: much。「How much」で「いくら」という意味だよ。ノートの値段を聞いているんだね。100円だって。",
            translation: {
                literal: "いくら [M] ですか [V] これは [S]？",
                natural: "このノートが欲しいんだけど、いくら？",
                intermediate: "A: このノートが欲しいんだけど、いくら？\nB: 100円だよ。"
            },
            rationale: "「How much」は「いくら」と値段を聞くときの決まり文句だよ！"
        },
        {
            id: 10,
            text: "My father always eats eggs for breakfast ( ) the morning.",
            choices: ["on", "by", "in", "of"],
            choiceMeanings: ["〜の上に", "〜までに", "〜に", "〜の"],
            correctAnswer: 3,
            structure: "My father [S] always eats [V] eggs [O] in the morning [M].",
            explanation: "正解: in。「in the morning」で「朝に」という意味だよ。お父さんは朝ごはんにいつも卵を食べるんだね。",
            translation: {
                literal: "私の父は [S] いつも食べる [V] 卵を [O] 朝に [M]。",
                natural: "お父さんは朝ごはんにいつも卵を食べるよ。",
                intermediate: "父は朝ごはんにいつも卵を食べます。"
            },
            rationale: "「in the morning」は「朝に」という決まり文句だよ！"
        },
        {
            id: 11,
            text: "A: Do you know the boy over ( ), Jane?<br>B: Yes, Ken. That's my brother.",
            choices: ["that", "there", "too", "then"],
            choiceMeanings: ["あの", "あそこに", "〜も", "それから"],
            correctAnswer: 2,
            structure: "Do you [S] know [V] the boy over there [O]?",
            explanation: "正解: there。「over there」で「あそこに」という意味だよ。あそこにいる男の子を知ってるか聞いているんだね。",
            translation: {
                literal: "あなたは [S] 知ってる [V] あそこにいる男の子を [O]？",
                natural: "ジェーン、あそこにいる男の子を知ってる？",
                intermediate: "A: ジェーン、あそこにいる男の子を知ってる？\nB: うん、ケン。私の弟だよ。"
            },
            rationale: "「over there」は「あそこに」という決まり文句だよ！"
        },
        {
            id: 12,
            text: "Hiroshi always ( ) to bed at 9 p.m. and gets up at 6 a.m.",
            choices: ["goes", "plays", "does", "sits"],
            choiceMeanings: ["行く", "遊ぶ", "する", "座る"],
            correctAnswer: 1,
            structure: "Hiroshi [S] always goes [V] to bed [M] at 9 p.m. [M].",
            explanation: "正解: goes。「go to bed」で「寝る」という意味だよ。ひろしは夜9時に寝て、朝6時に起きるんだね。規則正しい！",
            translation: {
                literal: "ひろしは [S] いつも行く [V] ベッドに [M] 夜9時に [M]。",
                natural: "ひろしはいつも夜9時に寝て、朝6時に起きるよ。",
                intermediate: "ひろしはいつも夜9時に寝て、朝6時に起きます。"
            },
            rationale: "「go to bed」は「寝る」という決まり文句だよ！"
        },
        {
            id: 13,
            text: "A: Kanako, are you a baseball fan?<br>B: Yes, I ( ).",
            choices: ["am", "is", "are", "does"],
            choiceMeanings: ["です", "です", "です", "する"],
            correctAnswer: 1,
            structure: "Yes, I am.",
            explanation: "正解: am。「Are you」で聞かれたら、「Yes, I am」か「No, I'm not」で答えるよ。野球ファンなんだね！",
            translation: {
                literal: "はい、そうです。",
                natural: "うん、そうだよ。",
                intermediate: "A: かなこ、野球ファン？\nB: うん、そうだよ。"
            },
            rationale: "「Are you」で聞かれたら「I am」で答えるよ！"
        },
        {
            id: 14,
            text: "A: Who are the girls in this picture, Jack?<br>B: ( ) are my sisters.",
            choices: ["She", "They", "He", "I"],
            choiceMeanings: ["彼女は", "彼らは", "彼は", "私は"],
            correctAnswer: 2,
            structure: "They are my sisters.",
            explanation: "正解: They（彼らは）。「girls（女の子たち）」は複数だから「They」を使うよ。姉妹なんだね。",
            translation: {
                literal: "彼女たちは [S] 私の姉妹 [C]。",
                natural: "私の姉妹だよ。",
                intermediate: "A: ジャック、この写真の女の子たちは誰？\nB: 私の姉妹だよ。"
            },
            rationale: "「girls」は複数（たくさん）だから「They」を使うよ！「She」は1人のときだね。"
        },
        {
            id: 15,
            text: "A: I can't find my pen. Julia, can I use ( )?<br>B: Yes.",
            choices: ["you", "your", "our", "yours"],
            choiceMeanings: ["あなた", "あなたの", "私たちの", "あなたのもの"],
            correctAnswer: 4,
            structure: "Can I [S] use [V] yours [O]?",
            explanation: "正解: yours（あなたのもの）。「あなたのペン」を借りたいんだね。「yours」は「あなたのもの」という意味だよ。",
            translation: {
                literal: "借りていい [V] あなたのものを [O]？",
                natural: "ペンが見つからないの。ジュリア、あなたのを借りてもいい？",
                intermediate: "A: ペンが見つからないの。ジュリア、あなたのを借りてもいい？\nB: いいよ。"
            },
            rationale: "「yours」は「あなたのもの」という意味だよ！「your」は「あなたの〜」と名詞の前につけるよ。"
        }
    ]
};
