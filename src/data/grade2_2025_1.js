export const grade2_2025_1Data = {
    title: "2025年度第1回検定一次試験",
    questions: [
        // Q1
        {
            id: 1,
            text: "The ( ) of ancient Greece made many great discoveries in science, politics, and art. These discoveries changed the way that people think and live.",
            choices: ["civilization", "disappointment", "proportion", "advertisement"],
            choiceMeanings: ["文明", "失望", "割合", "広告"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The civilization of ancient Greece made many great discoveries. These discoveries changed the way that people think and live.",
                mainClause: "The civilization [S] of ancient Greece [M] made [V] many great discoveries [O] in science, politics, and art [M]",
                secondSentence: "These discoveries [S] changed [V] the way [O]",
                relativeClause: "that people [S'] think [V'] and live [V'] → 関係代名詞節（the wayを修飾）"
            },
            explanation: "civilization: 文明",
            translation: {
                literal: "古代ギリシャの文明は [S] した [V] 多くの偉大な発見を [O]。",
                natural: "古代ギリシャの文明は、科学、政治、芸術において多くの偉大な発見をした。",
                intermediate: "古代ギリシャの文明は、科学、政治、芸術において多くの偉大な発見をしました。これらの発見は、人々の考え方や生き方を変えました。"
            },
            rationale: "【文脈】古代ギリシャの「何か」が発見をした → civilization（文明）。"
        },
        // Q2
        {
            id: 2,
            text: "The hard, wooden bench in the park was ( ), so Anna and Cathy decided to sit on the grass.",
            choices: ["permanent", "amusing", "complicated", "uncomfortable"],
            choiceMeanings: ["永続的な", "面白い", "複雑な", "不快な（座り心地が悪い）"],
            correctAnswer: 4,
            structure: "The hard, wooden bench [S] was [V] uncomfortable [C].",
            explanation: "uncomfortable: 心地よくない、不快な",
            translation: {
                literal: "その硬い木のベンチは [S] であった [V] 不快な [C]。",
                natural: "公園の硬い木のベンチは座り心地が悪かった。",
                intermediate: "公園のその硬い木のベンチは座り心地が悪かったので、アンナとキャシーは芝生の上に座ることにしました。"
            },
            rationale: "【文脈】硬くて木製 → だから芝生に座った → uncomfortable（心地悪い）。"
        },
        // Q3
        {
            id: 3,
            text: "The people in the car crash could have been ( ) hurt. Luckily, their injuries were not serious.",
            choices: ["severely", "fluently", "currently", "anxiously"],
            choiceMeanings: ["ひどく（深刻に）", "流暢に", "現在", "心配して"],
            correctAnswer: 1,
            structure: "The people [S] could have been severely hurt [V].",
            explanation: "severely: ひどく、厳しく",
            translation: {
                literal: "人々は [S] ひどく傷ついた可能性があった [V]。",
                natural: "その自動車事故の人々はひどい怪我を負う可能性があった。",
                intermediate: "その自動車事故に遭った人々は、ひどい怪我を負う可能性がありました。幸いなことに、彼らの怪我は深刻ではありませんでした。"
            },
            rationale: "【文脈】luckily not serious（幸運にも深刻でない）の逆 → severely hurt（ひどく傷つく）。"
        },
        // Q4
        {
            id: 4,
            text: "The sofa was too heavy to carry, so Bill had to ( ) it across the floor to move it to the other side of his living room.",
            choices: ["drag", "wipe", "greet", "row"],
            choiceMeanings: ["引きずる", "拭く", "挨拶する", "漕ぐ"],
            correctAnswer: 1,
            structure: "Bill [S] had to drag [V] it [O] across the floor [M].",
            explanation: "drag: 引きずる",
            translation: {
                literal: "ビルは [S] 引きずらなければならなかった [V] それを [O] 床を横切って [M]。",
                natural: "ビルはそれを床の上を引きずらなければならなかった。",
                intermediate: "そのソファは重すぎて運べなかったので、ビルはリビングルームの反対側に移動させるために、床の上をそれを引きずらなければなりませんでした。"
            },
            rationale: "【文脈】重すぎて持てない → drag（引きずる）。"
        },
        // Q5
        {
            id: 5,
            text: "Haruka wanted to enter a popular university, so she ( ) all her attention to studying for the entrance exam.",
            choices: ["specified", "advertised", "reminded", "devoted"],
            choiceMeanings: ["指定した", "宣伝した", "思い出させた", "捧げた（注いだ）"],
            correctAnswer: 4,
            structure: "she [S] devoted [V] all her attention [O] to studying [M].",
            explanation: "devote A to B: AをBに捧げる、注ぐ",
            translation: {
                literal: "彼女は [S] 注いだ [V] 彼女の全ての注意を [O] 勉強することに [M]。",
                natural: "彼女は全ての注意を入試勉強に注いだ。",
                intermediate: "ハルカは人気のある大学に入りたかったので、入学試験の勉強に全ての注意を注ぎました。"
            },
            rationale: "【文脈】入試のために → devoted attention（注意を向けた/捧げた）。"
        },
        // Q6
        {
            id: 6,
            text: "Gary ( ) that his message was a joke by putting a laughing face symbol at the end of it.",
            choices: ["deceived", "sacrificed", "composed", "indicated"],
            choiceMeanings: ["だました", "犠牲にした", "構成した", "示した"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Gary indicated that his message was a joke by putting a laughing face symbol at the end of it.",
                mainClause: "Gary [S] indicated [V] that節 [O]",
                thatClause: "his message [S'] was [V'] a joke [C'] → 「メッセージが冗談であること」",
                meansPhrase: "by putting a laughing face symbol at the end of it [M:手段] → 「笑顔マークをつけることで」"
            },
            explanation: "indicate: 示す、表示する",
            translation: {
                literal: "ゲイリーは [S] 示した [V] 彼のメッセージが冗談であることを [O]。",
                natural: "ゲイリーはメッセージが冗談であることを示した。",
                intermediate: "ゲイリーは、メッセージの最後に笑っている顔の記号をつけることで、そのメッセージが冗談であることを示しました。"
            },
            rationale: "【文脈】記号をつけて意図を伝える → indicated（示した）。"
        },
        // Q7
        {
            id: 7,
            text: "A: I'm sorry for being late.<br>B: You don't have to ( ). It's not your fault that your train wasn't on time.",
            choices: ["apologize", "supply", "determine", "instruct"],
            choiceMeanings: ["謝る", "供給する", "決定する", "指示する"],
            correctAnswer: 1,
            structure: "You [S] don't have to apologize [V].",
            explanation: "apologize: 謝る、謝罪する",
            translation: {
                literal: "あなたは [S] 謝る必要はない [V]。",
                natural: "謝る必要はないよ。",
                intermediate: "A: 遅れてごめんなさい。\nB: 謝る必要はないよ。電車が時間通りに来なかったのは君のせいじゃないから。"
            },
            rationale: "【文脈】I'm sorry（ごめんなさい）に対して → apologize（謝る）。"
        },
        // Q8
        {
            id: 8,
            text: "A: Do you get nervous before giving a speech in front of the class?<br>B: Yes, I always feel a little ( ). But I try to stay calm and speak clearly.",
            choices: ["inheritance", "exception", "anxiety", "confidence"],
            choiceMeanings: ["遺産", "例外", "不安", "自信"],
            correctAnswer: 3,
            structure: "I [S] feel [V] a little anxiety [O]. (or feel + C)",
            explanation: "anxiety: 不安、心配",
            translation: {
                literal: "私は [S] 感じる [V] 少しの不安を [O]。",
                natural: "いつも少し不安を感じるよ。",
                intermediate: "A: クラスの前でスピーチをする前は緊張しますか？\nB: はい、いつも少し不安を感じます。でも、落ち着いてはっきりと話すように努めています。"
            },
            rationale: "【文脈】nervous（緊張する） → feel anxiety（不安を感じる）。"
        },
        // Q9
        {
            id: 9,
            text: "A: Why are you going to Canada, Sarah?<br>B: I'm going to work for an organization that helps children. I'm going to help people who are in need and try to improve their ( ).",
            choices: ["balance", "welfare", "reputation", "genius"],
            choiceMeanings: ["バランス", "福祉（幸福）", "評判", "天才"],
            correctAnswer: 2,
            structure: {
                fullSentence: "I'm going to help people who are in need and try to improve their welfare.",
                mainClause: "I [S] 'm going to help [V] people [O] and try to improve their welfare [O']",
                relativeClause: "who [S'] are [V'] in need [C'] → 関係代名詞節（peopleを修飾）「困っている」",
                grammarPoint: "be in need = 「困っている、必要としている」"
            },
            explanation: "welfare: 福祉、幸福、繁栄",
            translation: {
                literal: "改善する [V] 彼らの福祉を [O]。",
                natural: "彼らの福祉（暮らし）を良くしたい。",
                intermediate: "A: なぜカナダに行くの、サラ？\nB: 子供たちを助ける組織で働くつもりなの。困っている人々を助け、彼らの福祉を向上させるように努めるつもりよ。"
            },
            rationale: "【文脈】help people in need（困っている人を助ける） → improve welfare（福祉を向上させる）。"
        },
        // Q10
        {
            id: 10,
            text: "The ( ) that make rabbits different from other animals are that they have long ears and short tails.",
            choices: ["contributions", "characteristics", "investigations", "exhibitions"],
            choiceMeanings: ["貢献", "特徴", "調査", "展示"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The characteristics that make rabbits different from other animals are that they have long ears and short tails.",
                mainClause: "The characteristics [S] are [V] that節 [C]",
                relativeClause: "that [S'] make [V'] rabbits [O'] different [C'] from other animals [M] → 関係代名詞節（characteristicsを修飾）",
                complementClause: "that they [S''] have [V''] long ears and short tails [O''] → 補語のthat節",
                grammarPoint: "make + O + C（SVOC構文）/ that節が補語になる構文"
            },
            explanation: "characteristic: 特徴、特性",
            translation: {
                literal: "特徴は [S] ... である [V] 彼らが長い耳を持っていること [C]。",
                natural: "ウサギを他の動物と区別する特徴は、長い耳と短い尻尾を持っていることだ。",
                intermediate: "ウサギを他の動物と異ならせている特徴は、長い耳と短い尻尾を持っていることです。"
            },
            rationale: "【文脈】make different（区別する/異ならせる）要素 → characteristics（特徴）。"
        },
        // Q11
        {
            id: 11,
            text: "A: Did you see the new version of my article for the sports section, Mr. Jones?<br>B: Yes, but it's ( ) than the first version. Please write it once again.",
            choices: ["much safer", "no better", "far healthier", "still further"],
            choiceMeanings: ["はるかに安全", "良くない（変わらない）", "はるかに健康的", "さらに遠く"],
            correctAnswer: 2,
            structure: "it [S] 's [V] no better [C].",
            explanation: "no better: （以前と）変わらず良くない、良くもなっていない",
            translation: {
                literal: "それは [S] です [V] 良くない [C]。",
                natural: "最初のバージョンより良くなっていないね。",
                intermediate: "A: スポーツ欄の私の記事の新しいバージョンを見ましたか、ジョーンズさん？\nB: はい、でも最初のバージョンと比べて良くなっていませんね。もう一度書き直してください。"
            },
            rationale: "【文脈】write it once again（もう一度書け）と言われている → no better（良くなっていない）。"
        },
        // Q12
        {
            id: 12,
            text: "The farmer took his apples to the market on Sunday, but because his prices were too high, ( ) of them could be sold.",
            choices: ["some hardly", "only a little", "only a few", "some seldom"],
            choiceMeanings: ["（不自然）", "ほんの少し（不可算）", "ほんのわずか（可算）", "（不自然）"],
            correctAnswer: 3,
            structure: "only a few of them [S] could be sold [V].",
            explanation: "only a few: ほんのわずかの（数）",
            translation: {
                literal: "それらのうちのほんのわずか [S] 売ることができた [V]。",
                natural: "ほんのわずかしか売れなかった。",
                intermediate: "その農夫は日曜日にリンゴを市場に持って行きましたが、値段が高すぎたため、ほんのわずかしか売れませんでした。"
            },
            rationale: "【文法】apples（可算名詞）を受ける → only a few。"
        },
        // Q13
        {
            id: 13,
            text: "Bill is a university student. He has a part-time job, but he still ( ) his parents for most of his money.",
            choices: ["covers up", "relies on", "does with", "approves of"],
            choiceMeanings: ["隠す", "頼る", "〜で済ませる", "認める"],
            correctAnswer: 2,
            structure: "he [S] still relies on [V] his parents [O].",
            explanation: "rely on: 〜に頼る、依存する",
            translation: {
                literal: "彼は [S] まだ頼っている [V] 彼の両親に [O]。",
                natural: "彼はまだお金のほとんどを両親に頼っている。",
                intermediate: "ビルは大学生です。彼はアルバイトをしていますが、お金のほとんどをまだ両親に頼っています。"
            },
            rationale: "【文脈】part-time jobがあるが、most of moneyについては → relies on（頼っている）。"
        },
        // Q14
        {
            id: 14,
            text: "A: I hear you had a chance to study in Canada, but you didn't go.<br>B: Yes, I turned it down, ( ). It was a big mistake.",
            choices: ["at my service", "in my heart", "in my way", "to my regret"],
            choiceMeanings: ["自由に使えて", "心の中で", "私の邪魔になって", "後悔したことに"],
            correctAnswer: 4,
            structure: "I turned it down, to my regret [M].",
            explanation: "to one's regret: 後悔したことに、残念なことに",
            translation: {
                literal: "私はそれを断った、後悔したことに [M]。",
                natural: "うん、断ってしまったんだ、後悔しているけど。",
                intermediate: "A: カナダに留学するチャンスがあったのに行かなかったんだってね。\nB: うん、断ってしまったんだ、後悔しているけど。大きな間違いだったよ。"
            },
            rationale: "【文脈】big mistake（大きな間違い）だった → to my regret（後悔したことに）。"
        },
        // Q15
        {
            id: 15,
            text: "In order to go on a trip to Europe next year, John is trying to ( ) enough money. He is only eating out on weekends to cut down on spending.",
            choices: ["bring on", "pass for", "save up", "hand over"],
            choiceMeanings: ["引き起こす", "通用する", "貯金する", "引き渡す"],
            correctAnswer: 3,
            structure: "trying to save up [V] enough money [O].",
            explanation: "save up: （お金を）貯める",
            translation: {
                literal: "貯めようとしている [V] 十分なお金を [O]。",
                natural: "ジョンは十分なお金を貯めようとしている。",
                intermediate: "来年ヨーロッパ旅行に行くために、ジョンは十分なお金を貯めようとしています。彼は出費を減らすために、週末にしか外食をしていません。"
            },
            rationale: "【文脈】tripのためにmoneyを → save up（貯める）。"
        },
        // Q16
        {
            id: 16,
            text: "A: What do you think of Alice's Spanish?<br>B: It's very good. She'll be able to live and work in Spain without any problems. She really ( ) it.",
            choices: ["takes a good look at", "pays a good price for", "has a good command of", "gives a good reason of"],
            choiceMeanings: ["よく見る", "高い値を払う", "（言語など）を自由に操る", "良い理由を挙げる"],
            correctAnswer: 3,
            structure: "She [S] really has a good command of [V] it [O].",
            explanation: "have a good command of: 〜を自由に操る、〜が堪能である",
            translation: {
                literal: "彼女は [S] それを自由に操る [V]。",
                natural: "彼女は本当にスペイン語が堪能だ。",
                intermediate: "A: アリスのスペイン語についてどう思う？\nB: とても上手だよ。彼女は何の問題もなくスペインで生活し、働くことができるだろうね。彼女は本当にスペイン語が堪能だよ。"
            },
            rationale: "【文脈】live and work without problems → has a good command of（堪能である）。"
        },
        // Q17
        {
            id: 17,
            text: "A: How is the novel you are reading?<br>B: It's good, but ( ) it is hard to understand. The author uses very complex language.",
            choices: ["with ease", "on board", "in turn", "at times"],
            choiceMeanings: ["容易に", "搭乗して", "順番に", "時々"],
            correctAnswer: 4,
            structure: "at times [M] it [S] is [V] hard [C].",
            explanation: "at times: 時々",
            translation: {
                literal: "時々 [M] それは [S] である [V] 難しい [C]。",
                natural: "それは良い小説だけど、時々理解するのが難しいよ。",
                intermediate: "A: 読んでいる小説はどう？\nB: 良いんだけど、時々理解するのが難しいよ。著者がとても複雑な言葉を使っているんだ。"
            },
            rationale: "【文脈】good, but（良いが...）complex languageで難しいのは常時か部分か → 肯定的な評価もあるので at times（時々）。"
        }
    ]
};
