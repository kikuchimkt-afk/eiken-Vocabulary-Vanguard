export const gradePre2_2023_2Data = {
    questions: [
        {
            id: 1,
            text: "Ryuji's teammate passed the soccer ball to Ryuji. He ( ) the ball as hard as he could, and it flew past the goalkeeper and into the goal.",
            choices: ["mixed", "chewed", "struck", "copied"],
            choiceMeanings: ["混ぜた", "噛んだ", "打った（蹴った）", "コピーした"],
            correctAnswer: 3,
            structure: "He [S] struck [V] the ball [O] as hard as he could [M].",
            explanation: "struck: strike（打つ、蹴る）の過去形。サッカーボールを「蹴った」文脈。",
            translation: {
                literal: "彼は [S] 打った（蹴った） [V] そのボールを [O] 彼ができる限り強く [M]。",
                natural: "彼はできる限り強くボールを蹴り、それはゴールキーパーを通り過ぎてゴールに入った。",
                intermediate: "RyujiのチームメイトはRyujiにパスを出した。彼は思い切りボールを蹴った。"
            },
            rationale: "【動詞】ボールをゴールに向かって「打つ（蹴る）」のは strike (struck)。"
        },
        {
            id: 2,
            text: "A: Dad, I don't feel well. My head hurts and I think I have a ( ).<br>B: I see. Let me check your temperature.",
            choices: ["grade", "surprise", "custom", "fever"],
            choiceMeanings: ["成績、学年", "驚き", "習慣", "熱"],
            correctAnswer: 4,
            structure: "I [S] think [V] I have a fever [O].",
            explanation: "have a fever: 熱がある。体温(temperature)を測るという会話の流れに合致。",
            translation: {
                literal: "私は [S] 思う [V] 私が熱があると [O]。",
                natural: "お父さん、気分が悪いの。頭が痛くて熱があると思うわ。",
                intermediate: "A: お父さん、気分が悪いんだ。頭痛がして、熱があると思う。\nB: わかった、熱を測ってみよう。"
            },
            rationale: "【名詞】「頭が痛い」「熱を測る」という文脈から fever（発熱）が適切。"
        },
        {
            id: 3,
            text: "Most companies use ships to ( ) their products overseas. Airplanes are much faster, but they are usually much more expensive.",
            choices: ["transport", "design", "consult", "reject"],
            choiceMeanings: ["輸送する", "設計する", "相談する", "拒絶する"],
            correctAnswer: 1,
            structure: "Most companies [S] use [V] ships [O] to transport their products [M].",
            explanation: "transport: 輸送する。海外へ製品を送る手段（船 vs 飛行機）の話。",
            translation: {
                literal: "多くの会社は [S] 使う [V] 船を [O] 彼らの製品を輸送するために [M]。",
                natural: "ほとんどの企業は製品を海外へ輸送するために船を使う。",
                intermediate: "多くの会社は製品を海外に輸送するのに船を使う。飛行機はずっと速いが、たいてはずっと高い。"
            },
            rationale: "【動詞】製品を海外へ「運ぶ」文脈なので transport。"
        },
        {
            id: 4,
            text: "After the basketball game, Mark's coach said many nice things about his passing and defense. He felt ( ) to hear that he was doing a good job.",
            choices: ["frightened", "encouraged", "delivered", "followed"],
            choiceMeanings: ["怯えた", "勇気づけられた", "配達された", "従った"],
            correctAnswer: 2,
            structure: "He [S] felt [V] encouraged [C] to hear that... [M]",
            explanation: "encouraged: 勇気づけられた、励まされた。コーチに褒められてポジティブな感情になった。",
            translation: {
                literal: "彼は [S] 感じた [V] 勇気づけられたと [C] それを聞いて [M]。",
                natural: "彼は良い仕事をしていると聞いて、励みになった。",
                intermediate: "バスケの試合後、コーチは彼のパスとディフェンスを褒めた。彼はそれを聞いて勇気づけられた。"
            },
            rationale: "【形容詞（分詞）】褒められて「励まされた」と感じるのが自然。"
        },
        {
            id: 5,
            text: "A: How long have you been working here, Sabrina?<br>B: I'm new. I was ( ) two weeks ago.",
            choices: ["collected", "hired", "exchanged", "carried"],
            choiceMeanings: ["集められた", "雇われた", "交換された", "運ばれた"],
            correctAnswer: 2,
            structure: "I [S] was hired [V] two weeks ago [M].",
            explanation: "hired: 雇われた。いつから働いているか聞かれ、「新人です（2週間前に雇われた）」と答えている。",
            translation: {
                literal: "私は [S] 雇われた [V] 2週間前に [M]。",
                natural: "私は新人です。2週間前に採用されました。",
                intermediate: "A: ここでどのくらい働いているの？\nB: 私は新人です。2週間前に雇われました。"
            },
            rationale: "【動詞（受動態）】仕事の話なので「雇われた(hired)」が適切。"
        },
        {
            id: 6,
            text: "Kansai is a ( ) in western Japan. Its three largest cities are Osaka, Kyoto, and Kobe.",
            choices: ["safety", "region", "theme", "laundry"],
            choiceMeanings: ["安全", "地域", "テーマ", "洗濯"],
            correctAnswer: 2,
            structure: "Kansai [S] is [V] a region [C] in western Japan [M].",
            explanation: "region: 地域、地方。関西は西日本の「地域」である。",
            translation: {
                literal: "関西は [S] です [V] 地域 [C] 西日本の [M]。",
                natural: "関西は西日本の地域です。",
                intermediate: "関西は西日本の地方です。その3大都市は大阪、京都、神戸です。"
            },
            rationale: "【名詞】関西は「地方・地域」を指す言葉。"
        },
        {
            id: 7,
            text: "A: Could you answer all the questions in our math homework?<br>B: Nearly. I couldn't ( ) the last one, though.",
            choices: ["solve", "repair", "miss", "invent"],
            choiceMeanings: ["解く", "修理する", "逃す", "発明する"],
            correctAnswer: 1,
            structure: "I [S] couldn't solve [V] the last one [O].",
            explanation: "solve: （問題を）解く。数学の宿題の話。",
            translation: {
                literal: "私は [S] 解けなかった [V] 最後のものを [O]。",
                natural: "ほとんどね。最後の1問は解けなかったけど。",
                intermediate: "A: 数学の宿題、全部答えられた？\nB: ほぼね。最後のは解けなかったけど。"
            },
            rationale: "【動詞】宿題の質問（問題）を「解く」のは solve。"
        },
        {
            id: 8,
            text: "Kelly writes two ( ) every month for her English class. Last month, she wrote about a book that she had recently read and what she did during the summer vacation.",
            choices: ["essays", "victories", "systems", "miracles"],
            choiceMeanings: ["エッセイ（作文）", "勝利", "システム", "奇跡"],
            correctAnswer: 1,
            structure: "Kelly [S] writes [V] two essays [O] every month [M].",
            explanation: "essays: エッセイ、作文。英語の授業のために「書く」もの。",
            translation: {
                literal: "ケリーは [S] 書く [V] 2つのエッセイを [O] 毎月 [M]。",
                natural: "ケリーは英語の授業のために毎月2つのエッセイを書きます。",
                intermediate: "ケリーは英語のクラスで毎月2本エッセイを書く。先月は読んだ本と夏休みの出来事について書いた。"
            },
            rationale: "【名詞】書いて提出するものは essays。"
        },
        {
            id: 9,
            text: "There is a store by Lucy's house that sells clothes very ( ). On Saturday, Lucy bought a blouse there for only $10.",
            choices: ["powerfully", "lately", "bravely", "cheaply"],
            choiceMeanings: ["強力に", "最近", "勇敢に", "安く"],
            correctAnswer: 4,
            structure: "that [S] sells [V] clothes [O] very cheaply [M].",
            explanation: "cheaply: 安く。10ドルという安価でブラウスを買ったことから判断。",
            translation: {
                literal: "それは [S] 売る [V] 服を [O] とても安く [M]。",
                natural: "ルーシーの家のそばに、とても安く服を売る店があります。",
                intermediate: "ルーシーの家のそばに服をとても安く売る店がある。土曜日、彼女はそこでたった10ドルでブラウスを買った。"
            },
            rationale: "【副詞】Only $10 という文脈から「安く」売っていることがわかる。"
        },
        {
            id: 10,
            text: "David became very rich after he created a popular smartphone app. He uses most of his ( ) to help people who do not have much money.",
            choices: ["pain", "wealth", "nonsense", "literature"],
            choiceMeanings: ["痛み", "富（財産）", "ナンセンス", "文学"],
            correctAnswer: 2,
            structure: "He [S] uses [V] most of his wealth [O] to help people [M].",
            explanation: "wealth: 富、財産。richになった彼が、お金がない人を助けるために使うもの。",
            translation: {
                literal: "彼は [S] 使う [V] 彼の富の大部分を [O] 人々を助けるために [M]。",
                natural: "彼は富の大部分を、あまりお金を持っていない人々を助けるために使っています。",
                intermediate: "Davidは人気アプリを作って大金持ちになった。彼はその富のほとんどを貧しい人々を助けるために使っている。"
            },
            rationale: "【名詞】richになり、人を助けるために使うのは wealth。"
        },
        {
            id: 11,
            text: "Lester could not go to school for three days last week because he was ( ) a bad cold. He feels much better this week.",
            choices: ["suffering from", "depending on", "giving up", "majoring in"],
            choiceMeanings: ["〜で苦しんでいる", "〜に頼っている", "〜を諦めている", "〜を専攻している"],
            correctAnswer: 1,
            structure: "he [S] was suffering from [V] a bad cold [O].",
            explanation: "suffering from: （病気など）にかかっている、苦しんでいる。bad cold（ひどい風邪）が原因。",
            translation: {
                literal: "彼は [S] 苦しんでいた [V] ひどい風邪に [O]。",
                natural: "レスターはひどい風邪で先週3日間学校に行けませんでした。",
                intermediate: "Lesterは先週、ひどい風邪を患っていたので3日間学校へ行けなかった。今週はずっと気分が良い。"
            },
            rationale: "【熟語】suffer from a cold（風邪を患う）。"
        },
        {
            id: 12,
            text: "A: I'm sorry I didn't hear your question, Ms. Nakayama.<br>B: Please ( ), Asako. You can't learn if you don't listen in class!",
            choices: ["shake hands", "make sense", "take turns", "pay attention"],
            choiceMeanings: ["握手する", "理にかなう", "交代する", "注意を払う"],
            correctAnswer: 4,
            structure: "Please [V] pay attention [O].",
            explanation: "pay attention: 注意を払う、集中して聞く。質問を聞いていなかったことへの注意。",
            translation: {
                literal: "どうか [M] 注意を払いなさい [V]。",
                natural: "注意して聞きなさい、アサコ。",
                intermediate: "A: すみません中山先生、質問が聞こえませんでした。\nB: ちゃんと聞いていなさい、アサコ。授業を聞いていないと学べませんよ！"
            },
            rationale: "【熟語】先生が生徒に「聞きなさい」と注意する場面。"
        },
        {
            id: 13,
            text: "A tree had fallen on the train line to Karinville. Passengers traveling there had to take buses ( ) of trains until the problem was fixed.",
            choices: ["on behalf", "for fear", "by way", "in place"],
            choiceMeanings: ["〜を代表して", "〜を恐れて", "〜を経由して", "〜の代わりに"],
            correctAnswer: 4,
            structure: "Passengers [S] had to take [V] buses [O] in place of trains [M].",
            explanation: "in place of: 〜の代わりに。電車が止まったので、電車の「代わりに」バスを使った。",
            translation: {
                literal: "乗客は [S] 乗らなければならなかった [V] バスに [O] 電車の代わりに [M]。",
                natural: "そこへ向かう乗客は、問題が解決するまで電車の代わりにバスに乗らなければならなかった。",
                intermediate: "Karinville行きの線路に木が倒れた。乗客は復旧するまで電車の代わりにバスを使わなければならなかった。"
            },
            rationale: "【熟語】AではなくBを使う、という文脈なので in place of。"
        },
        {
            id: 14,
            text: "A: Excuse me. I think you have my suitcase.<br>B: Oh, sorry! I must have taken it ( ). It looks just like mine.",
            choices: ["at present", "by mistake", "for nothing", "with ease"],
            choiceMeanings: ["現在は", "間違えて", "無駄に", "容易に"],
            correctAnswer: 2,
            structure: "I [S] must have taken [V] it [O] by mistake [M].",
            explanation: "by mistake: 間違えて。他人のスーツケースを持って行ってしまった状況。",
            translation: {
                literal: "私は [S] 持っていってしまったに違いない [V] それを [O] 間違えて [M]。",
                natural: "ああ、すみません！間違えて持ってきてしまったようです。",
                intermediate: "A: すみません。私のスーツケースをお持ちだと思います。\nB: ああ、ごめんなさい！間違えて取ってしまったに違いありません。私のにそっくりなので。"
            },
            rationale: "【熟語】自分のものと似ていたので「間違えて」取った。"
        },
        {
            id: 15,
            text: "Tetsuya has a Canadian friend called Todd. Tetsuya and Todd write to ( ) at least once a month.",
            choices: ["any other", "one another", "every other", "another one"],
            choiceMeanings: ["他のどんな", "お互いに", "1つおきの", "別のもう1つ"],
            correctAnswer: 2,
            structure: "Tetsuya and Todd [S] write [V] to one another [M]...",
            explanation: "one another: お互いに（each otherとほぼ同義）。手紙を書き合う。",
            translation: {
                literal: "テツヤとトッドは [S] 書く（手紙を出す） [V] お互いに [M]。",
                natural: "テツヤとトッドは少なくとも月に一度手紙を書き合っています。",
                intermediate: "テツヤにはトッドというカナダ人の友人がいる。二人は少なくとも月に一度は連絡を取り合っている。"
            },
            rationale: "【熟語】write to one another (each other) で「お互いに手紙を書く」。"
        },
        {
            id: 16,
            text: "A: Do you know whether your baby will be a boy or a girl?<br>B: No, not yet. My husband and I are ( ) a girl because our first child is a boy.",
            choices: ["hoping for", "taking over", "putting away", "showing off"],
            choiceMeanings: ["〜を望んでいる", "引き継ぐ", "片付ける", "見せびらかす"],
            correctAnswer: 1,
            structure: "My husband and I [S] are hoping for [V] a girl [O].",
            explanation: "hoping for: 〜を望む。第一子が男の子なので、女の子を「望んでいる」。",
            translation: {
                literal: "夫と私は [S] 望んでいる [V] 女の子を [O]。",
                natural: "いいえ、まだ。最初の子が男の子なので、女の子がいいなと思っています。",
                intermediate: "A: 赤ちゃんの性別はわかった？\nB: ううん、まだ。上の子が男の子だから、女の子だといいなと思ってるの。"
            },
            rationale: "【熟語】hope for で「〜を望む」。文脈に合うのはこれのみ。"
        },
        {
            id: 17,
            text: "Tom and Helen both wanted to get a puppy, but they could not ( ) a name for it. Tom wanted to call it Buddy, but Helen wanted to call it Max.",
            choices: ["pour out", "agree on", "run over", "hold up"],
            choiceMeanings: ["注ぎ出す", "〜で合意する", "（車で）ひく", "持ち上げる、遅らせる"],
            correctAnswer: 2,
            structure: "they [S] could not agree on [V] a name [O].",
            explanation: "agree on: 〜について意見が一致する、合意する。名前が決まらなかった。",
            translation: {
                literal: "彼らは [S] 合意できなかった [V] 名前について [O]。",
                natural: "彼らは名前に合意できませんでした。",
                intermediate: "トムとヘレンは子犬を欲しがったが、名前で意見が合わなかった。トムはバディ、ヘレンはマックスと呼びたがった。"
            },
            rationale: "【熟語】意見が違う文脈なので agree on (〜で合意する) の否定。"
        },
        {
            id: 18,
            text: "Mr. Smirnov has to have his monthly report done by the time his boss ( ) back to the office.",
            choices: ["come", "comes", "came", "will come"],
            choiceMeanings: ["来る（原形）", "来る（三単現）", "来た", "来るだろう"],
            correctAnswer: 2,
            structure: "by the time his boss [S'] comes [V'] back [M].",
            explanation: "comes: 時・条件を表す副詞節の中では、未来のことでも現在形を使うルール。",
            translation: {
                literal: "彼の上司が [S'] 戻ってくる [V'] までに [M]。",
                natural: "スミルノフ氏は上司がオフィスに戻ってくるまでに月次報告書を終わらせなければなりません。",
                intermediate: "スミルノフ氏は、上司がオフィスに戻るまでに、月例報告書を仕上げなければならない。"
            },
            rationale: "【文法】「時を表す副詞節(by the time...)」内では未来形ではなく現在形(comes)を用いる。"
        },
        {
            id: 19,
            text: "The other day, James went to the town ( ) he was born. It had been a few years since his last visit, but the town had not changed much.",
            choices: ["when", "where", "why", "which"],
            choiceMeanings: ["いつ", "どこ（関係副詞）", "なぜ", "どれ"],
            correctAnswer: 2,
            structure: "the town [antecedent] where [relative adverb] he was born.",
            explanation: "where: 関係副詞。先行詞が town（場所）で、後ろが彼は生まれた(he was born)という完全な文。",
            translation: {
                literal: "その町へ [M] 彼が生まれた [関係副詞節]。",
                natural: "先日、ジェームズは自分が生まれた町へ行きました。",
                intermediate: "先日、ジェームズは故郷の町へ行った。数年ぶりだったが、町はあまり変わっていなかった。"
            },
            rationale: "【文法】先行詞が場所(town)で、関係詞内で「そこで(there)」の働きをするので where。"
        },
        {
            id: 20,
            text: "A beautiful blue bird was flying ( ) the tree in Paul's garden. Paul wanted to take a picture of it, but it quickly flew away.",
            choices: ["of", "on", "above", "among"],
            choiceMeanings: ["〜の", "〜の上に（接触）", "〜の上方に", "〜の間に"],
            correctAnswer: 3,
            structure: "A bird [S] was flying [V] above the tree [M].",
            explanation: "above: 〜の上方に。木の上空を飛んでいる（接触していない）。onは接触。",
            translation: {
                literal: "鳥が [S] 飛んでいた [V] 木の上方を [M]。",
                natural: "美しい青い鳥が、ポールの庭の木の上を飛んでいました。",
                intermediate: "美しい青い鳥がポールの庭の木の上を飛んでいた。彼は写真を撮りたかったが、すぐに飛び去ってしまった。"
            },
            rationale: "【前置詞】空を飛んでいるので、接触(on)ではなく上方(above)が適切。"
        }
    ]
};
