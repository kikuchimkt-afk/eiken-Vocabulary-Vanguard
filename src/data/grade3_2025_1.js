export const grade3_2025_1Data = {
    title: "2025年度第1回検定一次試験(3級)",
    questions: [
        {
            id: 1,
            text: "A: Mom, I ate my sandwich, but I'm still hungry.<br>B: OK. Wait a minute. I'll make you ( ) one.",
            choices: ["another", "near", "every", "much"],
            choiceMeanings: ["もう一つの", "近い", "すべての", "たくさんの"],
            correctAnswer: 1,
            structure: "I [S] 'll make [V] you [O] another one [O].",
            explanation: "正解単語: another (もう一つの)。「まだお腹が空いている」ので、サンドイッチを「もう一つ（another one）」作ってあげる、という文脈。",
            translation: {
                literal: "私は [S] 作ります [V] あなたに [O] もう一つを [O]。",
                natural: "もう一つ作ってあげるわ。",
                intermediate: "A: ママ、サンドイッチを食べたけど、まだお腹が空いているんだ。\nB: わかったわ。ちょっと待って。もう一つ作ってあげるわ。"
            },
            rationale: "【文脈】ate sandwich, still hungry → another one（もう一つ）。"
        },
        {
            id: 2,
            text: "A: Do you know where the library is?<br>B: It's ( ) the post office.",
            choices: ["during", "of", "until", "beside"],
            choiceMeanings: ["〜の間", "〜の", "〜まで", "〜のそばに"],
            correctAnswer: 4,
            structure: "It [S] is [V] beside the post office [C].",
            explanation: "正解単語: beside (〜のそばに)。場所を尋ねる質問への答えとして、郵便局の「そばに」あると説明している。",
            translation: {
                literal: "それは [S] です [V] 郵便局のそば [C]。",
                natural: "それは郵便局のそばにある。",
                intermediate: "A: 図書館がどこにあるか知ってる？\nB: 郵便局のそばだよ。"
            },
            rationale: "【前置詞】場所を表す前置詞として beside が適切。"
        },
        {
            id: 3,
            text: "( ) by scientists shows that global warming is a big problem.",
            choices: ["Research", "Energy", "Environment", "Danger"],
            choiceMeanings: ["研究", "エネルギー", "環境", "危険"],
            correctAnswer: 1,
            structure: "Research by scientists [S] shows [V] that global warming is a big problem [O].",
            explanation: "正解単語: Research (研究)。scientist (科学者) が行うものなので「研究」。show (示す) の主語として適切。",
            translation: {
                literal: "科学者による研究は [S] 示している [V] 地球温暖化が大きな問題であることを [O]。",
                natural: "科学者による研究は、地球温暖化が大きな問題であることを示している。",
                intermediate: "科学者たちの研究によると、地球温暖化は大きな問題です。"
            },
            rationale: "【文脈】scientists, shows a problem → Research（研究）。"
        },
        {
            id: 4,
            text: "John has an ( ) tomorrow. He hopes to get a new job.",
            choices: ["interview", "airport", "example", "excuse"],
            choiceMeanings: ["面接", "空港", "例", "言い訳"],
            correctAnswer: 1,
            structure: "John [S] has [V] an interview [O] tomorrow [M].",
            explanation: "正解単語: interview (面接)。get a new job (新しい仕事を得る) ために必要なものは「面接」。",
            translation: {
                literal: "ジョンは [S] ある [V] 面接が [O] 明日 [M]。",
                natural: "ジョンは明日面接がある。",
                intermediate: "ジョンは明日面接があります。彼は新しい仕事を得たいと望んでいます。"
            },
            rationale: "【文脈】get a new job → interview（面接）。"
        },
        {
            id: 5,
            text: "The road was closed yesterday because there was an ( ).",
            choices: ["accident", "appointment", "apartment", "address"],
            choiceMeanings: ["事故", "約束／予約", "アパート", "住所"],
            correctAnswer: 1,
            structure: "there [M] was [V] an accident [S].",
            explanation: "正解単語: accident (事故)。road was closed (道路が閉鎖された) 理由として「事故」があったことが適切。",
            translation: {
                literal: "事故が [S] あった [V]。",
                natural: "事故があった。",
                intermediate: "昨日、事故があったため道路が封鎖されました。"
            },
            rationale: "【文脈】road was closed（道路が閉鎖された） → accident（事故）。"
        },
        {
            id: 6,
            text: "A: What should I do with this ( ) bottle?<br>B: We can recycle it.",
            choices: ["glad", "empty", "different", "serious"],
            choiceMeanings: ["うれしい", "空の", "違った", "深刻な"],
            correctAnswer: 2,
            structure: "What [O] should [aux] I [S] do [V] with this empty bottle [M]?",
            explanation: "正解単語: empty (空の)。recycle (リサイクルする) 対象なので、中身のない「空の」ボトル。",
            translation: {
                literal: "私は何をすべきですか [V] この空のボトルを [M]？",
                natural: "この空のボトルはどうしたらいい？",
                intermediate: "A: この空のボトルはどうしたらいい？\nB: リサイクルできるよ。"
            },
            rationale: "【文脈】recycle（リサイクルする） → empty bottle（空き瓶）。"
        },
        {
            id: 7,
            text: "This morning, Pat took a ( ) medicine for his stomachache, but it didn't get better. He took some more later.",
            choices: ["little", "lot", "most", "much"],
            choiceMeanings: ["少しの", "たくさんの", "大部分の", "たくさんの"],
            correctAnswer: 1,
            structure: "Pat [S] took [V] a little medicine [O].",
            explanation: "正解単語: little。a little medicine で「少量の薬」。薬の量なので much や little を使うが、文脈的に少量から試した（そして効かなかった）と考えられる。",
            translation: {
                literal: "パットは [S] 飲んだ [V] 少しの薬を [O]。",
                natural: "パットは少し薬を飲んだ。",
                intermediate: "今朝、パットは腹痛のために少し薬を飲みましたが、良くなりませんでした。彼は後で追加で飲みました。"
            },
            rationale: "【熟語】a little（少しの）。薬の量。"
        },
        {
            id: 8,
            text: "A: Can you ( ) down the radio, please?<br>B: OK.",
            choices: ["turn", "get", "go", "make"],
            choiceMeanings: ["回す", "得る", "行く", "作る"],
            correctAnswer: 1,
            structure: "Can [aux] you [S] turn down [V] the radio [O]?",
            explanation: "正解単語: turn。turn down で「（音量などを）下げる」。ラジオの音を下げてほしいという依頼。",
            translation: {
                literal: "あなたは下げられますか [V] ラジオを [O]？",
                natural: "ラジオの音を下げてくれますか？",
                intermediate: "A: ラジオの音を下げてくれませんか？\nB: いいよ。"
            },
            rationale: "【熟語】turn down（音量を下げる）。"
        },
        {
            id: 9,
            text: "A: Where do you want to meet, Kate?<br>B: Let's meet ( ) front of the flower shop.",
            choices: ["on", "for", "in", "to"],
            choiceMeanings: ["〜の上に", "〜のために", "〜の中に", "〜へ"],
            correctAnswer: 3,
            structure: "Let's meet [V] in front of the flower shop [M].",
            explanation: "正解単語: in。in front of で「〜の前で」。待ち合わせ場所の指定に使われる熟語。",
            translation: {
                literal: "会いましょう [V] 花屋の前で [M]。",
                natural: "花屋の前で会おう。",
                intermediate: "A: どこで会いたい、ケイト？\nB: 花屋の前で会おうよ。"
            },
            rationale: "【熟語】in front of（〜の前で）。"
        },
        {
            id: 10,
            text: "Mr. Ford often buys a newspaper at the station in the morning ( ) his way to work.",
            choices: ["at", "by", "on", "to"],
            choiceMeanings: ["〜で", "〜によって", "〜の上に", "〜へ"],
            correctAnswer: 3,
            structure: "on his way [M] to work [M].",
            explanation: "正解単語: on。on one's way to ... で「...へ行く途中で」。仕事へ行く途中で新聞を買う。",
            translation: {
                literal: "彼の途中で [M] 仕事へ行く [M]。",
                natural: "仕事へ行く途中で。",
                intermediate: "フォードさんは、朝仕事へ行く途中でよく駅で新聞を買います。"
            },
            rationale: "【熟語】on one's way to（〜へ行く途中で）。"
        },
        {
            id: 11,
            text: "A: Good luck, Jim. Do your ( ) in the baseball game.<br>B: I will, Dad.",
            choices: ["best", "widest", "longest", "deepest"],
            choiceMeanings: ["最善", "最も広い", "最も長い", "最も深い"],
            correctAnswer: 1,
            structure: "Do [V] your best [O].",
            explanation: "正解単語: best。do your best で「全力を尽くす/頑張る」。試合前の応援メッセージ。",
            translation: {
                literal: "あなたの最善を尽くしなさい [V]。",
                natural: "全力を尽くしなさい。",
                intermediate: "A: 頑張って、ジム。野球の試合で全力を尽くして。\nB: うん、そうするよ、パパ。"
            },
            rationale: "【熟語】do one's best（全力を尽くす）。"
        },
        {
            id: 12,
            text: "Mr. Jones has a meeting at 5:00. He has to leave ( ) now.",
            choices: ["right", "some", "very", "also"],
            choiceMeanings: ["正しい／まさに", "いくつかの", "とても", "〜もまた"],
            correctAnswer: 1,
            structure: "He [S] has to leave [V] right now [M].",
            explanation: "正解単語: right。right now で「今すぐ（たった今）」。5時の会議に間に合うために、今すぐ出発しなければならない。",
            translation: {
                literal: "彼は [S] 出発しなければならない [V] 今すぐに [M]。",
                natural: "彼は今すぐ出発しなければならない。",
                intermediate: "ジョーンズさんは5時に会議があります。彼は今すぐ出発しなければなりません。"
            },
            rationale: "【熟語】right now（今すぐ）。"
        },
        {
            id: 13,
            text: "A: Was this picture ( ) in Australia?<br>B: Yes. My father sent it to me when he was working there.",
            choices: ["take", "took", "taking", "taken"],
            choiceMeanings: ["撮る", "撮った", "撮っている", "撮られた"],
            correctAnswer: 4,
            structure: "Was [aux] this picture [S] taken [V] in Australia [M]?",
            explanation: "正解単語: taken (撮られた)。写真は「撮られる」ものなので受動態 (be + taken)。",
            translation: {
                literal: "この写真は [S] 撮られましたか [V] オーストラリアで [M]？",
                natural: "この写真はオーストラリアで撮られたの？",
                intermediate: "A: この写真はオーストラリアで撮られたの？\nB: ええ。父がそこで働いていた時に送ってくれたの。"
            },
            rationale: "【文法】受動態（be + 過去分詞）。picture が主語なので taken。"
        },
        {
            id: 14,
            text: "A: Mom, have you ( ) the mail yet today?<br>B: Yes. You got a letter from Aunt Jen.",
            choices: ["check", "checking", "to check", "checked"],
            choiceMeanings: ["確認する", "確認している", "確認すること", "確認した"],
            correctAnswer: 4,
            structure: "have [aux] you [S] checked [V] the mail [O] yet [M]?",
            explanation: "正解単語: checked (確認した)。have you ... yet? で現在完了形の疑問文。check の過去分詞形 checked が必要。",
            translation: {
                literal: "あなたは [S] 確認しましたか [V] 郵便を [O] もう [M]？",
                natural: "もう郵便を確認した？",
                intermediate: "A: ママ、今日もう郵便を確認した？\nB: ええ。ジェンおばさんから手紙が来ていたわよ。"
            },
            rationale: "【文法】現在完了形（have + 過去分詞）。"
        },
        {
            id: 15,
            text: "A: Was it hot in Vancouver during your trip?<br>B: No, it was ( ) than my hometown.",
            choices: ["cooling", "cooler", "coolest", "cool"],
            choiceMeanings: ["冷やしている", "より涼しい", "最も涼しい", "涼しい"],
            correctAnswer: 2,
            structure: "it [S] was [V] cooler [C] than my hometown [M].",
            explanation: "正解単語: cooler (より涼しい)。than (〜より) があるので比較級。",
            translation: {
                literal: "それは [S] だった [V] より涼しい [C] 私の故郷より [M]。",
                natural: "私の故郷より涼しかった。",
                intermediate: "A: 旅行中、バンクーバーは暑かった？\nB: ううん、私の故郷より涼しかったよ。"
            },
            rationale: "【文法】比較級 than 〜（〜より...）。"
        }
    ]
};
