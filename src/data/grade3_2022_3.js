export const grade3_2022_3Data = {
    title: "2022年度第3回検定一次試験(3級)",
    questions: [
        {
            id: 1,
            text: "A: Have you ( ) Mom's birthday present yet?<br>B: No, I'll do that tonight.",
            choices: ["contacted", "invited", "wrapped", "climbed"],
            choiceMeanings: ["連絡した", "招待した", "包んだ", "登った"],
            correctAnswer: 3,
            structure: "Have [aux] you [S] wrapped [V] Mom's birthday present [O] yet [M]?",
            explanation: "正解単語: wrapped (包んだ)。プレゼントなので「包む (wrap)」という動作が自然です。まだ包んでいないので、今夜やると言っています。",
            translation: {
                literal: "あなたは [S] 包みましたか [V] ママの誕生日プレゼントを [O] もう [M]？",
                natural: "ママの誕生日プレゼントはもう包んだ？",
                intermediate: "A: ママの誕生日プレゼントはもう包んだ？\nB: ううん、今夜やるつもり。"
            },
            rationale: "present とくれば wrap (包む)。"
        },
        {
            id: 2,
            text: "Last Friday, we had a ( ) lunch to welcome the new member of our team. He just started working at the company.",
            choices: ["special", "deep", "weak", "low"],
            choiceMeanings: ["特別な", "深い", "弱い", "低い"],
            correctAnswer: 1,
            structure: "we [S] had [V] a special lunch [O].",
            explanation: "正解単語: special (特別な)。新しいメンバーを歓迎する (welcome) ためのランチなので、普段とは違う「特別な (special)」ランチです。",
            translation: {
                literal: "私たちは [S] 食べました [V] 特別なランチを [O]。",
                natural: "私たちは特別なランチを食べました。",
                intermediate: "先週の金曜日、私たちはチームの新しいメンバーを歓迎するために特別なランチを食べました。彼は会社で働き始めたばかりです。"
            },
            rationale: "welcome ... new member というイベントごとなので special。"
        },
        {
            id: 3,
            text: "A: Have you washed the dishes yet?<br>B: Yes, I've ( ) done that, and I've cleaned the kitchen floor, too.",
            choices: ["soon", "already", "out", "ago"],
            choiceMeanings: ["すぐに", "すでに", "外へ", "〜前に"],
            correctAnswer: 2,
            structure: "I [S] 've already done [V] that [O].",
            explanation: "正解単語: already (すでに)。「もうやったよ」と答えている場面です。Yes と答え、さらに台所の床も掃除したと言っているので、「すでに (already)」終えたことがわかります。完了形の肯定文でよく使われます。",
            translation: {
                literal: "私は [S] すでにしました [V] それを [O]。",
                natural: "私はもうそれをやりました。",
                intermediate: "A: もうお皿は洗った？\nB: うん、もうやったよ。台所の床も掃除したよ。"
            },
            rationale: "完了形（肯定文）で「もう〜した」という場合は already。"
        },
        {
            id: 4,
            text: "Tomorrow, we'll go to a zoo for children. They can ( ) some of the animals there.",
            choices: ["build", "close", "touch", "shout"],
            choiceMeanings: ["建てる", "閉じる", "触る", "叫ぶ"],
            correctAnswer: 3,
            structure: "They [S] can touch [V] some of the animals [O] there [M].",
            explanation: "正解単語: touch (触る)。子供向けの動物園 (zoo for children) なので、動物を見るだけでなく「触る (touch)」ことができる場所です。ふれあい動物園のイメージです。",
            translation: {
                literal: "彼らは [S] 触ることができる [V] 動物のいくつかに [O] そこで [M]。",
                natural: "彼らはそこで動物たちに触ることができます。",
                intermediate: "明日、私たちは子供向けの動物園に行きます。彼らはそこで動物たちに触ることができます。"
            },
            rationale: "zoo for children という文脈から、動物とのふれあい (touch) を想定。"
        },
        {
            id: 5,
            text: "Some people like to run for about 30 minutes every day because they think it is ( ).",
            choices: ["afraid", "expensive", "crowded", "healthy"],
            choiceMeanings: ["恐れて", "高価な", "混雑した", "健康的な"],
            correctAnswer: 4,
            structure: "they [S] think [V] it [S'] is healthy [C'].",
            explanation: "正解単語: healthy (健康的な)。毎日30分走る理由は、それが体に良い、つまり「健康的な (healthy)」ことだと思うからです。",
            translation: {
                literal: "彼らは [S] 思っている [V] それは健康的だと [C]。",
                natural: "彼らはそれは健康的だと思っている。",
                intermediate: "毎日30分ほど走るのが好きな人もいます。なぜなら彼らはそれが健康的だと思っているからです。"
            },
            rationale: "running every day は healthy な習慣。"
        },
        {
            id: 6,
            text: "My friend Peter is ( ). He always gets a good score on his math tests.",
            choices: ["clever", "sunny", "clear", "early"],
            choiceMeanings: ["賢い", "晴れた", "明らかな", "早い"],
            correctAnswer: 1,
            structure: "My friend Peter [S] is [V] clever [C].",
            explanation: "正解単語: clever (賢い)。いつも数学のテストで良い点を取る (good score) ので、頭が良い「賢い (clever)」と判断しています。",
            translation: {
                literal: "私の友人ピーターは [S] です [V] 賢い [C]。",
                natural: "私の友人ピーターは賢いです。",
                intermediate: "私の友人ピーターは賢いです。彼はいつも数学のテストで良い点を取ります。"
            },
            rationale: "good score on math tests → clever。"
        },
        {
            id: 7,
            text: "This comic book is funny. I ( ) a lot when I was reading it.",
            choices: ["drove", "borrowed", "heard", "laughed"],
            choiceMeanings: ["運転した", "借りた", "聞いた", "笑った"],
            correctAnswer: 4,
            structure: "I [S] laughed [V] a lot [M].",
            explanation: "正解単語: laughed (笑った)。漫画 (comic book) が面白い (funny) ので、読んでいる時にたくさん「笑った (laughed)」という流れです。",
            translation: {
                literal: "私は [S] 笑いました [V] たくさん [M]。",
                natural: "私はたくさん笑いました。",
                intermediate: "この漫画は面白いです。読んでいるとき、私はたくさん笑いました。"
            },
            rationale: "funny book を読めば laugh (笑う)。"
        },
        {
            id: 8,
            text: "When Keita moved to Canada, he wasn't ( ) to speak much English. But now, he speaks it very well.",
            choices: ["absent", "able", "angry", "another"],
            choiceMeanings: ["欠席の", "できる（能力がある）", "怒った", "もう一つの"],
            correctAnswer: 2,
            structure: "he [S] wasn't [V] able [C] to speak much English [M].",
            explanation: "正解単語: able (できる)。be able to ... で「...できる」。ここでは wasn't able to なので「できなかった」。カナダに引っ越した当初は話せなかったが、今は話せるという対比です。",
            translation: {
                literal: "彼は [S] でなかった [V] できる状態 [C] たくさんの英語を話すことが [M]。",
                natural: "彼はあまり英語を話せませんでした。",
                intermediate: "ケイタがカナダに引っ越したとき、彼はあまり英語を話せませんでした。でも今は、とても上手に話します。"
            },
            rationale: "be able to 構文。"
        },
        {
            id: 9,
            text: "Tom's mother ( ) a message for him. She told him to walk the dog before dinner.",
            choices: ["met", "closed", "left", "held"],
            choiceMeanings: ["会った", "閉めた", "残した", "持った"],
            correctAnswer: 3,
            structure: "Tom's mother [S] left [V] a message [O] for him [M].",
            explanation: "正解単語: left (残した/置いていった)。leave a message で「伝言を残す」。お母さんがトムに「犬の散歩をするように」という伝言を残しました。",
            translation: {
                literal: "トムの母は [S] 残しました [V] メッセージを [O] 彼のために [M]。",
                natural: "トムの母は彼にメッセージを残しました。",
                intermediate: "トムのお母さんは彼にメッセージを残しました。彼女は夕食の前に犬の散歩をするように言いました。"
            },
            rationale: "leave a message (伝言を残す) は定型表現。"
        },
        {
            id: 10,
            text: "A: Did you make this yogurt, Grandma?<br>B: Yes, it's easy. It's made ( ) milk.",
            choices: ["from", "under", "before", "over"],
            choiceMeanings: ["〜から（原料）", "〜の下に", "〜の前に", "〜を超えて"],
            correctAnswer: 1,
            structure: "It [S] 's made [V] from milk [M].",
            explanation: "正解単語: from。be made from ... で「〜（原料）から作られている」。牛乳からヨーグルトができるなどの化学変化を伴う場合（見た目で材料がわかりにくい場合など）によく使われます。",
            translation: {
                literal: "それは [S] 作られています [V] 牛乳から [M]。",
                natural: "それは牛乳から作られています。",
                intermediate: "A: おばあちゃん、このヨーグルトを作ったの？\nB: ええ、簡単よ。牛乳から作られているの。"
            },
            rationale: "be made from (〜から作られる)。"
        },
        {
            id: 11,
            text: "Miho doesn't ( ) much money on lunch because she always brings her lunch from home.",
            choices: ["catch", "stay", "know", "spend"],
            choiceMeanings: ["捕まえる", "滞在する", "知っている", "費やす／使う"],
            correctAnswer: 4,
            structure: "Miho [S] doesn't spend [V] much money [O] on lunch [M].",
            explanation: "正解単語: spend (使う)。お金を「使う (spend)」という動詞が適切です。お弁当を持ってくるので、ランチにお金をあまり使わないという意味です。",
            translation: {
                literal: "ミホは [S] 使いません [V] 多くのお金を [O] ランチに [M]。",
                natural: "ミホはランチにあまりお金を使いません。",
                intermediate: "ミホはいつも家からお弁当を持ってくるので、ランチにあまりお金を使いません。"
            },
            rationale: "spend money on ... (〜にお金を使う)。"
        },
        {
            id: 12,
            text: "Yesterday, Mark was sick ( ) bed, so he didn't go to work today.",
            choices: ["above", "in", "across", "on"],
            choiceMeanings: ["〜の上に（離れて）", "〜の中に", "〜を横切って", "〜の上に（接触）"],
            correctAnswer: 2,
            structure: "Mark [S] was [V] sick in bed [C].",
            explanation: "正解単語: in。sick in bed で「病気で寝込んでいる」という決まり文句（熟語）です。",
            translation: {
                literal: "マークは [S] でした [V] 病気で寝込んで [C]。",
                natural: "マークは病気で寝込んでいました。",
                intermediate: "昨日、マークは病気で寝込んでいたので、今日は仕事に行きませんでした。"
            },
            rationale: "sick in bed (病気で寝ている) という熟語。"
        },
        {
            id: 13,
            text: "A: You have a really nice house, Bob.<br>B: Thank you. It was ( ) by my grandfather.",
            choices: ["build", "built", "to build", "building"],
            choiceMeanings: ["建てる（原形）", "建てられた（過去分詞）", "建てること（不定詞）", "建てている（現在分詞）"],
            correctAnswer: 2,
            structure: "It [S] was built [V] by my grandfather [M].",
            explanation: "正解単語: built (建てられた)。家が主語なので「建てられた」という受動態（be動詞 + 過去分詞）になります。by my grandfather (祖父によって) があるので受動態です。",
            translation: {
                literal: "それは [S] 建てられました [V] 私の祖父によって [M]。",
                natural: "それは私の祖父によって建てられました。",
                intermediate: "A: 本当に素敵な家だね、ボブ。\nB: ありがとう。祖父が建てたんだ（祖父によって建てられたんだ）。"
            },
            rationale: "受動態 was built by ...。"
        },
        {
            id: 14,
            text: "Our school is planning an event to collect plastic bottles. A local artist will ( ) them into art.",
            choices: ["recycles", "recycled", "recycle", "recycling"],
            choiceMeanings: ["リサイクルする（三単現）", "リサイクルした（過去形）", "リサイクルする（原形）", "リサイクルすること（現在分詞）"],
            correctAnswer: 3,
            structure: "A local artist [S] will recycle [V] them [O] into art [M].",
            explanation: "正解単語: recycle (リサイクルする)。ペットボトルを集めてアートにする、つまり再利用「リサイクル (recycle)」します。助動詞 will の後は動詞の原形を使います。",
            translation: {
                literal: "地元の芸術家が [S] リサイクルします [V] それらを [O] アートに [M]。",
                natural: "地元の芸術家がそれらをアートにリサイクル（再利用）します。",
                intermediate: "私たちの学校はペットボトルを集めるイベントを計画しています。地元の芸術家がそれらをアートに再利用してくれます。"
            },
            rationale: "will ＋ 動詞の原形。"
        },
        {
            id: 15,
            text: "A: Do you know ( ) the next bus to the airport leaves?<br>B: Yes. In 15 minutes.",
            choices: ["which", "who", "where", "when"],
            choiceMeanings: ["どれ", "誰", "どこ", "いつ"],
            correctAnswer: 4,
            structure: "Do [aux] you [S] know [V] when the next bus to the airport leaves [O]?",
            explanation: "正解単語: when (いつ)。next bus ... leaves とあるので、出発する「時間 (when)」を聞いています。答えも「15分後」と時間を答えています。間接疑問文です。",
            translation: {
                literal: "あなたは [S] 知っていますか [V] いつ空港行きの次のバスが出発するか [O]？",
                natural: "空港行きの次のバスがいつ出るか知っていますか？",
                intermediate: "A: 空港行きの次のバスがいつ出るか知ってる？\nB: うん。15分後だよ。"
            },
            rationale: "時間を尋ねているので when。"
        }
    ]
};
