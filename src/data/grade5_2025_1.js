export const grade5Data = {
    title: "2025年度第1回検定一次試験(5級)",
    questions: [
        {
            id: 1,
            text: "A: What's Mike doing now?<br>B: He's ( ) his dog in the garden.",
            choices: ["reading", "washing", "making", "sitting"],
            choiceMeanings: ["読んでいる", "洗っている", "作っている", "座っている"],
            correctAnswer: 2,
            structure: "He [S] is washing [V] his dog [O] in the garden [M].",
            explanation: "wash: 洗う",
            translation: {
                literal: "彼は [S] 洗っている [V] 犬を [O] 庭で [M]。",
                natural: "彼は庭で犬を洗っている。",
                intermediate: "A: マイクは今何をしているの？\nB: 庭で犬を洗っているよ。"
            },
            rationale: "【文脈】犬を「している」動作 → wash（洗う）が自然。"
        },
        {
            id: 2,
            text: "A: It's very cold, Billy. ( ) a coat today.<br>B: OK, Mom.",
            choices: ["Listen", "Wear", "See", "Watch"],
            choiceMeanings: ["聞く", "着る", "見る", "見る（注意して）"],
            correctAnswer: 2,
            structure: "Wear [V] a coat [O] today [M].",
            explanation: "wear: 着る",
            translation: {
                literal: "着なさい [V] コートを [O] 今日 [M]。",
                natural: "今日はコートを着なさい。",
                intermediate: "A: とても寒いわ、ビリー。今日はコートを着なさい。\nB: わかった、ママ。"
            },
            rationale: "【文脈】寒い → コートを着る → wear が正解。"
        },
        {
            id: 3,
            text: "A: What's your favorite color, Amy?<br>B: It's ( ).",
            choices: ["clean", "brown", "tall", "hard"],
            choiceMeanings: ["きれいな", "茶色", "背が高い", "硬い"],
            correctAnswer: 2,
            structure: "It [S] is [V] brown [C].",
            explanation: "brown: 茶色",
            translation: {
                literal: "それは [S] です [V] 茶色 [C]。",
                natural: "茶色です。",
                intermediate: "A: あなたの好きな色は何、エイミー？\nB: 茶色よ。"
            },
            rationale: "【文脈】色を答える → brown（茶色）のみが色の名前。"
        },
        {
            id: 4,
            text: "I have a photo ( ). I have many pictures of my family in it.",
            choices: ["album", "pen", "sun", "dog"],
            choiceMeanings: ["アルバム", "ペン", "太陽", "犬"],
            correctAnswer: 1,
            structure: "I [S] have [V] a photo album [O].",
            explanation: "album: アルバム",
            translation: {
                literal: "私は [S] 持っている [V] 写真アルバムを [O]。",
                natural: "私は写真アルバムを持っている。",
                intermediate: "私は写真アルバムを持っています。その中に家族の写真がたくさん入っています。"
            },
            rationale: "【文脈】photo ( )、picturesがたくさん入っている → album が正解。"
        },
        {
            id: 5,
            text: "My brother and I ( ) to school by bus every day.",
            choices: ["talk", "eat", "see", "come"],
            choiceMeanings: ["話す", "食べる", "見る", "来る"],
            correctAnswer: 4,
            structure: "My brother and I [S] come [V] to school [M] by bus [M].",
            explanation: "come: 来る（通う）",
            translation: {
                literal: "兄と私は [S] 来る [V] 学校に [M] バスで [M]。",
                natural: "兄と私は毎日バスで学校に来る。",
                intermediate: "兄と私は毎日バスで学校に通っています。"
            },
            rationale: "【文脈】to school by bus → come（来る/通う）が自然。"
        },
        {
            id: 6,
            text: "Henry is a ( ). He plays the guitar and the piano.",
            choices: ["rabbit", "musician", "jacket", "team"],
            choiceMeanings: ["ウサギ", "音楽家", "ジャケット", "チーム"],
            correctAnswer: 2,
            structure: "Henry [S] is [V] a musician [C].",
            explanation: "musician: 音楽家",
            translation: {
                literal: "ヘンリーは [S] です [V] 音楽家 [C]。",
                natural: "ヘンリーは音楽家です。",
                intermediate: "ヘンリーは音楽家です。彼はギターとピアノを弾きます。"
            },
            rationale: "【文脈】ギターとピアノを演奏する → musician（音楽家）。"
        },
        {
            id: 7,
            text: "A: Hi, Jane. Where is Ken?<br>B: He's in the ( ).",
            choices: ["watch", "gym", "banana", "night"],
            choiceMeanings: ["腕時計", "体育館", "バナナ", "夜"],
            correctAnswer: 2,
            structure: "He [S] is [V] in the gym [M].",
            explanation: "gym: 体育館",
            translation: {
                literal: "彼は [S] いる [V] 体育館に [M]。",
                natural: "彼は体育館にいる。",
                intermediate: "A: こんにちは、ジェーン。ケンはどこ？\nB: 体育館にいるわ。"
            },
            rationale: "【文脈】Where is Ken? → 場所を答える → gym（体育館）。"
        },
        {
            id: 8,
            text: "I love basketball. I often watch basketball games ( ) TV with my brother.",
            choices: ["of", "on", "at", "in"],
            choiceMeanings: ["〜の", "〜で", "〜で", "〜の中に"],
            correctAnswer: 2,
            structure: "I [S] watch [V] basketball games [O] on TV [M].",
            explanation: "on TV: テレビで",
            translation: {
                literal: "私は [S] 見る [V] バスケの試合を [O] テレビで [M]。",
                natural: "私はテレビでバスケの試合を見る。",
                intermediate: "私はバスケが大好きです。兄とよくテレビでバスケの試合を見ます。"
            },
            rationale: "【熟語】watch ~ on TV（テレビで〜を見る）。"
        },
        {
            id: 9,
            text: "Tom has a ( ) of coffee every morning before he goes to school.",
            choices: ["corn", "floor", "window", "cup"],
            choiceMeanings: ["トウモロコシ", "床", "窓", "カップ"],
            correctAnswer: 4,
            structure: "Tom [S] has [V] a cup of coffee [O].",
            explanation: "a cup of coffee: 一杯のコーヒー",
            translation: {
                literal: "トムは [S] 飲む [V] 一杯のコーヒーを [O]。",
                natural: "トムは一杯のコーヒーを飲む。",
                intermediate: "トムは毎朝学校に行く前に一杯のコーヒーを飲みます。"
            },
            rationale: "【熟語】a cup of coffee（一杯のコーヒー）。"
        },
        {
            id: 10,
            text: "A: Do you play basketball, Bob?<br>B: Yes, a ( ).",
            choices: ["little", "beautiful", "fast", "much"],
            choiceMeanings: ["少し", "美しい", "速い", "たくさん"],
            correctAnswer: 1,
            structure: "Yes, a little [M].",
            explanation: "a little: 少し",
            translation: {
                literal: "はい、少し [M]。",
                natural: "はい、少しね。",
                intermediate: "A: ボブ、バスケする？\nB: うん、少しね。"
            },
            rationale: "【熟語】a little（少し）で「少しやる」という意味。"
        },
        {
            id: 11,
            text: "I get ( ) early every morning and go to the park.",
            choices: ["on", "up", "over", "right"],
            choiceMeanings: ["〜の上に", "起きる", "〜を越えて", "正しい"],
            correctAnswer: 2,
            structure: "I [S] get up [V] early [M].",
            explanation: "get up: 起きる",
            translation: {
                literal: "私は [S] 起きる [V] 早く [M]。",
                natural: "私は毎朝早く起きる。",
                intermediate: "私は毎朝早く起きて公園に行きます。"
            },
            rationale: "【熟語】get up（起きる）。"
        },
        {
            id: 12,
            text: "Janet ( ) swimming every Sunday with her sister.",
            choices: ["goes", "asks", "buys", "drinks"],
            choiceMeanings: ["行く", "尋ねる", "買う", "飲む"],
            correctAnswer: 1,
            structure: "Janet [S] goes [V] swimming [M].",
            explanation: "go swimming: 泳ぎに行く",
            translation: {
                literal: "ジャネットは [S] 行く [V] 泳ぎに [M]。",
                natural: "ジャネットは泳ぎに行く。",
                intermediate: "ジャネットは毎週日曜日に姉と泳ぎに行きます。"
            },
            rationale: "【熟語】go swimming（泳ぎに行く）。"
        },
        {
            id: 13,
            text: "A: Mom, can I ( ) a letter to Uncle Rob this afternoon?<br>B: Of course, Kenji.",
            choices: ["writes", "wrote", "write", "writing"],
            choiceMeanings: ["書く（三単現）", "書いた", "書く", "書いている"],
            correctAnswer: 3,
            structure: "can I write [V] a letter [O]?",
            explanation: "can + 動詞の原形",
            translation: {
                literal: "書いてもいい [V] 手紙を [O]？",
                natural: "手紙を書いてもいい？",
                intermediate: "A: ママ、今日の午後ロブおじさんに手紙を書いてもいい？\nB: もちろんよ、ケンジ。"
            },
            rationale: "【文法】can + 動詞の原形 → write が正解。"
        },
        {
            id: 14,
            text: "I know Tim and Lucy. ( ) are Canadian.",
            choices: ["He", "They", "It", "You"],
            choiceMeanings: ["彼は", "彼らは", "それは", "あなたは"],
            correctAnswer: 2,
            structure: "They [S] are [V] Canadian [C].",
            explanation: "They: 彼らは（複数）",
            translation: {
                literal: "彼らは [S] です [V] カナダ人 [C]。",
                natural: "彼らはカナダ人です。",
                intermediate: "私はティムとルーシーを知っています。彼らはカナダ人です。"
            },
            rationale: "【文法】Tim and Lucy（複数）→ They で受ける。"
        },
        {
            id: 15,
            text: "A: It's hot. Please ( ) the window.<br>B: OK, Mom.",
            choices: ["opens", "open", "opening", "opened"],
            choiceMeanings: ["開ける（三単現）", "開ける", "開けている", "開けた"],
            correctAnswer: 2,
            structure: "Please open [V] the window [O].",
            explanation: "Please + 動詞の原形",
            translation: {
                literal: "開けて [V] 窓を [O]。",
                natural: "窓を開けて。",
                intermediate: "A: 暑いわ。窓を開けて。\nB: わかった、ママ。"
            },
            rationale: "【文法】Please + 動詞の原形 → open が正解。"
        }
    ]
};
