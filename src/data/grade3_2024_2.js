export const grade3_2024_2Data = {
    title: "2024年度第2回検定一次試験(3級)",
    questions: [
        {
            id: 1,
            text: "A: Are you doing ( ) special this weekend?<br>B: Yes. I'm going to the mountains.",
            choices: ["everywhere", "anytime", "anything", "everything"],
            choiceMeanings: ["どこでも", "いつでも", "何か（疑問文・否定文で）", "すべてのもの"],
            correctAnswer: 3,
            structure: "Are you doing [V] anything special [O] this weekend [M]?",
            explanation: "anything special: 何か特別なこと",
            translation: {
                literal: "あなたはしていますか [V] 何か特別なことを [O] 今週末 [M]？",
                natural: "今週末は何か特別なことをするの？",
                intermediate: "A: 今週末は何か特別なことをするの？\nB: うん。山に行くつもりだよ。"
            },
            rationale: "【文法】形容詞が不定代名詞（something, anything, nothingなど）を修飾する場合は後ろに置く（後置修飾）。"
        },
        {
            id: 2,
            text: "A: What's wrong, Sue?<br>B: I can't do my English homework. I ( ) my dictionary at school!",
            choices: ["left", "bought", "taught", "began"],
            choiceMeanings: ["置いてきた／去った", "買った", "教えた", "始めた"],
            correctAnswer: 1,
            structure: "I [S] left [V] my dictionary [O] at school [M]!",
            explanation: "leave: （物を）置き忘れる、置いてくる",
            translation: {
                literal: "私は [S] 置いてきた [V] 辞書を [O] 学校に [M]！",
                natural: "学校に辞書を置いてきちゃった！",
                intermediate: "A: どうしたの、スー？\nB: 英語の宿題ができないの。学校に辞書を置いてきちゃった！"
            },
            rationale: "【文脈】homework needs dictionary, can't do it → left at school（学校に忘れた）。"
        },
        {
            id: 3,
            text: "A: I have a present for Mom. I need to ( ) it before she comes home.<br>B: Use this paper and some tape.",
            choices: ["sound", "spend", "wrap", "reach"],
            choiceMeanings: ["聞こえる", "費やす", "包む", "到着する"],
            correctAnswer: 3,
            structure: "I [S] need to wrap [V] it [O] before she comes home [M].",
            explanation: "wrap: 包む",
            translation: {
                literal: "私は [S] 包む必要がある [V] それを [O] 彼女が帰宅する前に [M]。",
                natural: "彼女が帰って来る前にそれを包まなきゃ。",
                intermediate: "A: ママへのプレゼントがあるんだ。彼女が帰って来る前に包まなきゃ。\nB: この紙とテープを使って。"
            },
            rationale: "【文脈】present, use paper and tape → wrap（包む）。"
        },
        {
            id: 4,
            text: "Most of the students in Mr. Johnson's class were able to ( ) the test because they studied hard.",
            choices: ["sing", "pass", "grow", "hold"],
            choiceMeanings: ["歌う", "合格する", "成長する", "持つ"],
            correctAnswer: 2,
            structure: "Most of the students [S] were able to pass [V] the test [O].",
            explanation: "pass the test: 試験に合格する",
            translation: {
                literal: "生徒のほとんどは [S] 試験に合格できた [V]。",
                natural: "生徒のほとんどは試験に合格できた。",
                intermediate: "ジョンソン先生のクラスの生徒のほとんどは、一生懸命勉強したので試験に合格することができました。"
            },
            rationale: "【熟語】pass the test（試験に合格する）。studied hard（一生懸命勉強した）結果として妥当。"
        },
        {
            id: 5,
            text: "A: Can I ( ) you to my friend?<br>B: Of course.",
            choices: ["introduce", "believe", "bake", "relax"],
            choiceMeanings: ["紹介する", "信じる", "焼く", "リラックスする"],
            correctAnswer: 1,
            structure: "Can I introduce [V] you [O] to my friend [M]?",
            explanation: "introduce A to B: AをBに紹介する",
            translation: {
                literal: "紹介していいですか [V] あなたを [O] 私の友達に [M]？",
                natural: "あなたを友達に紹介してもいい？",
                intermediate: "A: あなたを友達に紹介してもいい？\nB: もちろん。"
            },
            rationale: "【熟語】introduce A to B（AをBに紹介する）。"
        },
        {
            id: 6,
            text: "The castle in Mary's town is very old. It was built in the 17th ( ).",
            choices: ["date", "idea", "century", "history"],
            choiceMeanings: ["日付", "考え", "世紀", "歴史"],
            correctAnswer: 3,
            structure: "It [S] was built [V] in the 17th century [M].",
            explanation: "century: 世紀",
            translation: {
                literal: "それは [S] 建てられた [V] 17世紀に [M]。",
                natural: "それは17世紀に建てられた。",
                intermediate: "メアリーの町の城はとても古いです。それは17世紀に建てられました。"
            },
            rationale: "【文脈】very old, built in 17th... → century（世紀）。"
        },
        {
            id: 7,
            text: "Ben's grandmother loves cooking. It is a ( ) for her to make a big dinner for Ben's family every year on Christmas Day.",
            choices: ["trick", "tradition", "trouble", "temple"],
            choiceMeanings: ["トリック", "伝統／慣習", "トラブル", "寺"],
            correctAnswer: 2,
            structure: "It [仮S] is [V] a tradition [C] for her [意味上のS] to make a big dinner [真S].",
            explanation: "tradition: 伝統、慣習",
            translation: {
                literal: "それは [S] 伝統です [C] 彼女にとって夕食を作ることが [真S]。",
                natural: "彼女にとってごちそうを作るのは恒例のことだ。",
                intermediate: "ベンの祖母は料理が大好きです。クリスマスの日にベンの家族のためにごちそうを作るのが、彼女の毎年の恒例行事（伝統）です。"
            },
            rationale: "【文脈】every year（毎年）行っていること → tradition（伝統、恒例行事）。"
        },
        {
            id: 8,
            text: "A: I'm going to the library, Mom.<br>B: OK. But please clean ( ) your room when you come home.",
            choices: ["between", "up", "into", "over"],
            choiceMeanings: ["〜の間に", "上の（副詞）", "〜の中へ", "〜を越えて"],
            correctAnswer: 2,
            structure: "please clean up [V] your room [O].",
            explanation: "clean up: 掃除する、片付ける",
            translation: {
                literal: "掃除してください [V] あなたの部屋を [O]。",
                natural: "部屋を片付けてね。",
                intermediate: "A: 図書館に行ってくるね、ママ。\nB: わかったわ。でも帰ってきたら部屋を片付けてね。"
            },
            rationale: "【熟語】clean up（掃除する、片付ける）。"
        },
        {
            id: 9,
            text: "Sue was worried ( ) her new job at first, but she really enjoys it now.",
            choices: ["about", "under", "against", "across"],
            choiceMeanings: ["〜について", "〜の下に", "〜に反対して", "〜を横切って"],
            correctAnswer: 1,
            structure: "Sue [S] was worried [V] about her new job [M].",
            explanation: "be worried about: 〜を心配している",
            translation: {
                literal: "スーは [S] 心配していた [V] 彼女の新しい仕事について [M]。",
                natural: "スーは最初新しい仕事について心配していた。",
                intermediate: "スーは最初新しい仕事のことを心配していましたが、今はとても楽しんでいます。"
            },
            rationale: "【熟語】be worried about（〜について心配する）。"
        },
        {
            id: 10,
            text: "Jenny won first place in the science competition. She is really proud ( ) herself.",
            choices: ["on", "at", "of", "in"],
            choiceMeanings: ["〜の上に", "〜で", "〜の", "〜の中に"],
            correctAnswer: 3,
            structure: "She [S] is [V] really proud [C] of herself [M].",
            explanation: "be proud of: 〜を誇りに思う",
            translation: {
                literal: "彼女は [S] です [V] 本当に誇りに思っている [C] 彼女自身を [M]。",
                natural: "彼女は自分自身をとても誇りに思っている。",
                intermediate: "ジェニーは科学コンテストで1位になりました。彼女は自分自身をとても誇りに思っています。"
            },
            rationale: "【熟語】be proud of（〜を誇りに思う）。"
        },
        {
            id: 11,
            text: "Yuka's little brother was very angry because Yuka ( ) her promise to take him to the movies.",
            choices: ["gave", "broke", "caught", "found"],
            choiceMeanings: ["与えた", "壊した（破った）", "捕まえた", "見つけた"],
            correctAnswer: 2,
            structure: "because Yuka [S] broke [V] her promise [O].",
            explanation: "break one's promise: 約束を破る",
            translation: {
                literal: "なぜならユカが [S] 破ったから [V] 彼女の約束を [O]。",
                natural: "ユカが約束を破ったから。",
                intermediate: "ユカの弟はとても怒っていました。なぜならユカが彼を映画に連れて行くという約束を破ったからです。"
            },
            rationale: "【熟語】break a promise（約束を破る）。"
        },
        {
            id: 12,
            text: "These days, ( ) and more people are interested in space. They want to learn about the planets and the stars.",
            choices: ["much", "most", "more", "least"],
            choiceMeanings: ["たくさんの（量）", "大部分の", "より多くの", "最も少ない"],
            correctAnswer: 3,
            structure: "more and more people [S] are [V] interested [C] in space [M].",
            explanation: "more and more: ますます多くの",
            translation: {
                literal: "ますます多くの人々が [S] です [V] 興味がある [C] 宇宙に [M]。",
                natural: "最近、ますます多くの人が宇宙に興味を持っています。",
                intermediate: "最近、ますます多くの人が宇宙に興味を持っています。彼らは惑星や星について学びたいと思っています。"
            },
            rationale: "【熟語】more and more（ますます多くの）。比較級 and 比較級。"
        },
        {
            id: 13,
            text: "Paul read a famous story about a dog last week. The author ( ) it when she was a child.",
            choices: ["wrote", "write", "writes", "writing"],
            choiceMeanings: ["書いた", "書く", "書く（三単現）", "書いている"],
            correctAnswer: 1,
            structure: "The author [S] wrote [V] it [O] when she was a child [M].",
            explanation: "wrote: 書いた（writeの過去形）",
            translation: {
                literal: "著者は [S] 書いた [V] それを [O] 彼女が子供だった時 [M]。",
                natural: "著者は子供の頃にそれを書いた。",
                intermediate: "ポールは先週、犬についての有名な物語を読みました。著者は子供の頃にそれを書きました。"
            },
            rationale: "【文法】when she was a child（過去）の話なので過去形 wrote。"
        },
        {
            id: 14,
            text: "Aki is a fast runner. She can run ( ) than anyone in her class.",
            choices: ["faster", "fastest", "fast", "too fast"],
            choiceMeanings: ["より速く", "最も速く", "速く", "速すぎる"],
            correctAnswer: 1,
            structure: "She [S] can run [V] faster [M] than anyone [M].",
            explanation: "faster: より速く（比較級）",
            translation: {
                literal: "彼女は [S] 走れる [V] より速く [M] 誰よりも [M]。",
                natural: "彼女は誰よりも速く走れる。",
                intermediate: "アキは足が速いです。彼女はクラスの誰よりも速く走ることができます。"
            },
            rationale: "【文法】比較級 than 〜（〜より...）。"
        },
        {
            id: 15,
            text: "A: Have you ever ( ) to New York, Mr. Smith?<br>B: Yes, many times.",
            choices: ["be", "are", "been", "were"],
            choiceMeanings: ["〜になる", "〜である", "〜であった（過去分詞）", "〜であった（過去形）"],
            correctAnswer: 3,
            structure: "Have [aux] you [S] ever been [V] to New York [M]?",
            explanation: "have been to: 〜へ行ったことがある",
            translation: {
                literal: "あなたは [S] 今までにニューヨークへ行ったことがありますか [V]？",
                natural: "ニューヨークへ行ったことはありますか？",
                intermediate: "A: スミスさん、今までにニューヨークへ行ったことはありますか？\nB: はい、何度もあります。"
            },
            rationale: "【熟語】Have/Has (ever) been to ...?（〜へ行ったことがあるか）。現在完了の経験用法。"
        }
    ]
};
