export const grade3_2023_1Data = {
    title: "2023年度第1回検定一次試験(3級)",
    questions: [
        {
            id: 1,
            text: "A: Mom, I think this bread is old.<br>B: I agree. Please throw it in the ( ).",
            choices: ["future", "garbage", "lesson", "north"],
            choiceMeanings: ["未来", "ゴミ", "レッスン", "北"],
            correctAnswer: 2,
            structure: "Please throw [V] it [O] in the garbage [M].",
            explanation: "正解単語: garbage (ゴミ)。パンが古い (old) と言っているので、「ゴミ箱 (garbage) に捨てて」と言うのが自然な流れです。文脈的には、throw ... in the garbage で「ゴミ箱に捨てる」というコロケーションです。",
            translation: {
                literal: "捨ててください [V] それを [O] ゴミ箱の中に [M]。",
                natural: "それをゴミ箱に捨ててください。",
                intermediate: "A: お母さん、このパン古いと思うよ。\nB: そうね。ゴミ箱に捨ててちょうだい。"
            },
            rationale: "old bread (古いパン) なので捨てる場所は garbage。"
        },
        {
            id: 2,
            text: "The Internet has a lot of useful ( ), so people often use it to learn about places before they travel abroad.",
            choices: ["breakfast", "police", "information", "smell"],
            choiceMeanings: ["朝食", "警察", "情報", "におい"],
            correctAnswer: 3,
            structure: "The Internet [S] has [V] a lot of useful information [O].",
            explanation: "正解単語: information (情報)。インターネットには「役に立つ (useful)」ものがたくさんあり、旅行前に使うものといえば「情報 (information)」です。a lot of useful information で「多くの役立つ情報」という意味になります。",
            translation: {
                literal: "インターネットは [S] 持っています [V] 多くの役に立つ情報を [O]。",
                natural: "インターネットには多くの役に立つ情報があります。",
                intermediate: "インターネットには役に立つ情報がたくさんあるので、人々は海外旅行の前に場所について調べるためによく使います。"
            },
            rationale: "Internet と learn about places という文脈から information。"
        },
        {
            id: 3,
            text: "A: I'm going to do some volunteer work at a farm this weekend.<br>B: That ( ) interesting.",
            choices: ["sounds", "hopes", "explains", "grows"],
            choiceMeanings: ["〜に聞こえる", "望む", "説明する", "育つ"],
            correctAnswer: 1,
            structure: "That [S] sounds [V] interesting [C].",
            explanation: "正解単語: sounds (〜に聞こえる)。ボランティアに行くと聞いて、「それは面白そうだね」と感想を言っている場面です。文法的には、That sounds + 形容詞 (interesting) で「それは〜に聞こえる/思える」という表現です。",
            translation: {
                literal: "それは [S] 聞こえる [V] 面白そうに [C]。",
                natural: "それは面白そうです。",
                intermediate: "A: 今週末、農場でボランティア活動をするつもりなんだ。\nB: それは面白そうだね。"
            },
            rationale: "That sounds + 形容詞 は頻出表現。"
        },
        {
            id: 4,
            text: "Harry forgot to take his umbrella this morning. It rained hard, so he was ( ) when he got to school.",
            choices: ["light", "narrow", "deep", "wet"],
            choiceMeanings: ["軽い/明るい", "狭い", "深い", "濡れた"],
            correctAnswer: 4,
            structure: "he [S] was [V] wet [C] when he got to school [M].",
            explanation: "正解単語: wet (濡れた)。傘を忘れて (forgot umbrella)、雨が激しく降った (rained hard) のだから、学校に着いたときはびしょ濡れで「濡れていた (wet)」はずです。",
            translation: {
                literal: "彼は [S] でした [V] 濡れて [C] 彼が学校に着いたとき [M]。",
                natural: "彼が学校に着いたとき、彼は濡れていました。",
                intermediate: "ハリーは今朝傘を持っていくのを忘れました。雨が激しく降ったので、学校に着いた時には彼は濡れていました。"
            },
            rationale: "forgot umbrella と rained hard の結果。"
        },
        {
            id: 5,
            text: "A: How often do you ( ), Grandpa?<br>B: Every day. I walk my dog for one hour every morning.",
            choices: ["introduce", "exercise", "happen", "keep"],
            choiceMeanings: ["紹介する", "運動する", "起こる", "保つ"],
            correctAnswer: 2,
            structure: "How often [M] do [aux] you [S] exercise [V]?",
            explanation: "正解単語: exercise (運動する)。おじいちゃんが「犬の散歩をしている」と答えているので、質問は「どのくらいの頻度で運動 (exercise) しますか？」となります。How often do you ...? で頻度を尋ねています。",
            translation: {
                literal: "どのくらいの頻度で [M] あなたは [S] 運動しますか [V]？",
                natural: "あなたはどのくらいの頻度で運動しますか？",
                intermediate: "A: おじいちゃん、どのくらいの頻度で運動してるの？\nB: 毎日だよ。毎朝1時間犬の散歩をしてるんだ。"
            },
            rationale: "walk my dog (犬の散歩) という具体例から「運動」を尋ねていると判断。"
        },
        {
            id: 6,
            text: "All of the people became ( ) when the popular singer began her concert. They enjoyed listening to her songs.",
            choices: ["fast", "low", "silent", "expensive"],
            choiceMeanings: ["速い", "低い", "静かな", "高価な"],
            correctAnswer: 3,
            structure: "All of the people [S] became [V] silent [C].",
            explanation: "正解単語: silent (静かな)。人気歌手が歌い始めたので、みんな聴き入って「静かに (silent)」なった場面です。became + 形容詞 で「〜になった」という意味を表します。",
            translation: {
                literal: "全ての人々は [S] なりました [V] 静かに [C]。",
                natural: "全ての人々は静かになりました。",
                intermediate: "人気歌手がコンサートを始めたとき、観客は皆静かになりました。彼らは彼女の歌を聴いて楽しみました。"
            },
            rationale: "enjoyed listening (聴き入った) という文脈から silent。"
        },
        {
            id: 7,
            text: "A: Mom, have you seen my ( )? I'm going shopping.<br>B: I saw it on the kitchen table.",
            choices: ["garden", "museum", "wallet", "gym"],
            choiceMeanings: ["庭", "博物館", "財布", "ジム"],
            correctAnswer: 3,
            structure: "have [aux] you [S] seen [V] my wallet [O]?",
            explanation: "正解単語: wallet (財布)。これから買い物に行く (going shopping) のに探しているものといえば「財布 (wallet)」です。文脈から判断できます。",
            translation: {
                literal: "あなたは [S] 見ましたか [V] 私の財布を [O]？",
                natural: "あなたは私の財布を見ましたか？",
                intermediate: "A: お母さん、僕の財布見なかった？ 買い物に行くんだ。\nB: キッチンのテーブルの上で見たわよ。"
            },
            rationale: "going shopping に必要なものは wallet。"
        },
        {
            id: 8,
            text: "A: Excuse me, where is the library?<br>B: It's not far ( ) here. Just walk two minutes that way.",
            choices: ["through", "from", "across", "over"],
            choiceMeanings: ["〜を通って", "〜から", "〜を横切って", "〜を超えて"],
            correctAnswer: 2,
            structure: "It [S] 's [V] not far [C] from here [M].",
            explanation: "正解単語: from。ここでは「ここから (from here)」遠くない、と場所の起点を表しています。not far from ... で「...から遠くない（＝近い）」という距離感を表す表現です。",
            translation: {
                literal: "それは [S] です [V] 遠くない [C] ここから [M]。",
                natural: "それはここから遠くありません。",
                intermediate: "A: すみません、図書館はどこですか？\nB: ここから遠くないですよ。あっちへ徒歩2分です。"
            },
            rationale: "from here (ここから) は基本表現。"
        },
        {
            id: 9,
            text: "At ( ), the boys and girls couldn't sing well together. But after practicing hard for one month, they sang beautifully.",
            choices: ["stick", "minute", "time", "first"],
            choiceMeanings: ["棒", "分", "時間", "最初"],
            correctAnswer: 4,
            structure: "At first [M], the boys and girls [S] couldn't sing [V] well [M] together [M].",
            explanation: "正解単語: first。後半で「練習の後は上手く歌えた」と言っているので、前半は「最初は (At first)」上手く歌えなかった、という対比になっています。At first は物語の始まりなどでよく使われる熟語です。",
            translation: {
                literal: "最初は [M]、少年少女たちは [S] 歌えなかった [V] 上手に [M] 一緒に [M]。",
                natural: "最初は、少年少女たちは一緒に上手く歌えませんでした。",
                intermediate: "最初は、その男の子たちと女の子たちは一緒に上手く歌えませんでした。しかし1ヶ月一生懸命練習した後、美しく歌えました。"
            },
            rationale: "But after ... (しかし〜の後は) との対比で「最初は」。"
        },
        {
            id: 10,
            text: "A: Why did you like that movie, Karen?<br>B: Well, the young girl's dream ( ) true. She became a famous singer.",
            choices: ["came", "grew", "had", "went"],
            choiceMeanings: ["来た", "成長した", "持っていた", "行った"],
            correctAnswer: 1,
            structure: "the young girl's dream [S] came [V] true [C].",
            explanation: "正解単語: came (comeの過去形)。夢が「実現した (came true)」という嬉しい場面です。文法的には、dream comes true (夢が叶う) という熟語の過去形です。",
            translation: {
                literal: "その少女の夢は [S] なりました [V] 本当に（実現した） [C]。",
                natural: "その少女の夢は実現しました。",
                intermediate: "A: カレン、なんであの映画が気に入ったの？\nB: そうね、若い女の子の夢が叶ったからよ。彼女は有名な歌手になったの。"
            },
            rationale: "dream ... true と言えば come true。"
        },
        {
            id: 11,
            text: "Takahiro ( ) some mistakes during his English speech, but his parents were still very proud of him.",
            choices: ["did", "bought", "made", "spent"],
            choiceMeanings: ["した", "買った", "作った/した", "費やした"],
            correctAnswer: 3,
            structure: "Takahiro [S] made [V] some mistakes [O].",
            explanation: "正解単語: made (makeの過去形)。スピーチで「間違いをした」場面です。英語では間違いを「作る (make)」と表現するので、make a mistake (mistakes) が正しい熟語です。",
            translation: {
                literal: "タカヒロは [S] しました [V] いくつかの間違いを [O]。",
                natural: "タカヒロはいくつか間違いをしました。",
                intermediate: "タカヒロは英語のスピーチでいくつかミスをしましたが、両親はそれでも彼をとても誇りに思っていました。"
            },
            rationale: "mistake とセットで使う動詞は make です。"
        },
        {
            id: 12,
            text: "A: I love your new bike.<br>B: Thanks. It's the same ( ) my brother's.",
            choices: ["as", "for", "by", "with"],
            choiceMeanings: ["〜と同じ", "〜のために", "〜によって", "〜と一緒に"],
            correctAnswer: 1,
            structure: "It [S] 's [V] the same [C] as my brother's [M].",
            explanation: "正解単語: as。「兄のものと同じ」と言っています。the same as ... で「...と同じ」という決まった言い方（熟語）です。",
            translation: {
                literal: "それは [S] です [V] 同じ [C] 私の兄のものと [M]。",
                natural: "それは私の兄のものと同じです。",
                intermediate: "A: 君の新しい自転車いいね。\nB: ありがとう。兄のと同じなんだ。"
            },
            rationale: "Same is connected with as."
        },
        {
            id: 13,
            text: "A: You already had breakfast this morning, ( ) you?<br>B: Yes, Mom. I'm going to my piano lesson now.",
            choices: ["doesn't", "didn't", "aren't", "couldn't"],
            choiceMeanings: ["〜ない（現在）", "〜なかった", "〜でない", "〜できなかった"],
            correctAnswer: 2,
            structure: "You [S] already [M] had [V] breakfast [O] ... didn't you?",
            explanation: "正解単語: didn't。お母さんが「もう食べたでしょ？」と確認している場面です。前の文が had (一般動詞の過去形) なので、付加疑問文は didn't you? を使います。",
            translation: {
                literal: "あなたは [S] すでに [M] 食べました [V] 朝食を [O] 今朝 [M]、そうですよね？",
                natural: "あなたは今朝もう朝食を食べましたよね？",
                intermediate: "A: 今朝もう朝ごはんは食べたわよね？\nB: うん、お母さん。今からピアノのレッスンに行くよ。"
            },
            rationale: "had (過去形) なので didn't。"
        },
        {
            id: 14,
            text: "A: Can you speak ( )? I can't hear you very well.<br>B: Of course, Grandma.",
            choices: ["loudest", "more loud", "most loud", "louder"],
            choiceMeanings: ["最も大きな声で", "（文法的に不自然）", "（文法的に不自然）", "より大きな声で"],
            correctAnswer: 4,
            structure: "Can [aux] you [S] speak [V] louder [M]?",
            explanation: "正解単語: louder (より大きな声で)。「よく聞こえない」とおばあちゃんが言っているので、「もっと大きな声で (louder)」話してほしいと頼んでいます。比較級を使って「今より大きく」というニュアンスを伝えています。",
            translation: {
                literal: "あなたは [S] 話せますか [V] もっと大きな声で [M]？",
                natural: "もっと大きな声で話せますか？",
                intermediate: "A: もっと大きな声で話してくれる？ よく聞こえないの。\nB: もちろんよ、おばあちゃん。"
            },
            rationale: "Can't hear (聞こえない) からの要請なので louder。"
        },
        {
            id: 15,
            text: "A: Have you called Henry yet?<br>B: It's seven, so it's too early ( ) him. I'll call him at eight.",
            choices: ["call", "called", "to call", "calls"],
            choiceMeanings: ["電話する", "電話した", "電話すること", "電話する"],
            correctAnswer: 3,
            structure: "it [S] 's [V] too early [C] to call him [M].",
            explanation: "正解単語: to call (電話するには)。7時では早すぎるので、8時にかけると言っています。文法的には too 〜 to ... (あまりに〜なので...できない / ...するには〜すぎる) という構文です。",
            translation: {
                literal: "それは [S] です [V] 早すぎる [C] 彼に電話するには [M]。",
                natural: "彼に電話するには早すぎます。",
                intermediate: "A: もうヘンリーに電話した？\nB: 7時だから、電話するには早すぎるよ。8時にかけるよ。"
            },
            rationale: "too early to ... という形。"
        }
    ]
};
