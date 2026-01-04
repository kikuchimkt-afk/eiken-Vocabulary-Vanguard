// Grade 2 (2級) - 2023年度 第3回検定
export const grade2_2023_3Data = {
    title: "2023年度第3回検定一次試験",
    questions: [
        {
            id: 1,
            text: "A: Ellen, could you hold these glasses for me while I ( ) wine into them for our guests?<br>B: Sure. That bottle looks heavy. Be careful not to spill any!",
            choices: ["drown", "grab", "hit", "pour"],
            choiceMeanings: ["溺れさせる", "つかむ", "打つ", "注ぐ"],
            correctAnswer: 4,
            structure: "I [S] pour [V] wine [O] into them.",
            explanation: "pour: 注ぐ",
            translation: {
                literal: "私は [S] 注ぐ [V] ワインを [O] グラスに。",
                natural: "グラスにワインを注ぐ。",
                intermediate: "A: エレン、ゲストのためにワインをグラスに注ぐ間、このグラスを持っていてくれる？ B: いいわよ。そのボトル重そうね。こぼさないように気をつけて！"
            },
            rationale: "【文脈】グラスにワインを入れる動作→「注ぐ」。"
        },
        {
            id: 2,
            text: "Many scientists do their work in ( ). These places allow them to do experiments or work with animals.",
            choices: ["triangles", "conclusions", "incidents", "laboratories"],
            choiceMeanings: ["三角形", "結論", "事件", "研究所"],
            correctAnswer: 4,
            structure: "Scientists [S] do [V] their work [O] in laboratories.",
            explanation: "laboratories: 研究所",
            translation: {
                literal: "科学者は [S] する [V] 仕事を [O] 研究所で。",
                natural: "多くの科学者は研究所で仕事をする。",
                intermediate: "多くの科学者は研究所で仕事をしています。これらの場所では実験をしたり、動物を扱ったりすることができます。"
            },
            rationale: "【文脈】実験や動物を扱う場所→「研究所」。"
        },
        {
            id: 3,
            text: "A: Wow, Lisa! It's ( ) how quickly your son has grown.<br>B: I know. I can't believe he grew 15 centimeters last year.",
            choices: ["remarkable", "nutritious", "commercial", "artificial"],
            choiceMeanings: ["驚くべき", "栄養価の高い", "商業的な", "人工的な"],
            correctAnswer: 1,
            structure: {
                fullSentence: "It's remarkable how quickly your son has grown.",
                mainClause: "It [S:形式主語] is [V] remarkable [C]",
                howClause: "how quickly your son [S'] has grown [V'] → how節（感嘆的意味）= 「どれほど早く」",
                grammarPoint: "It is + 形容詞 + how節"
            },
            explanation: "remarkable: 驚くべき、注目に値する",
            translation: {
                literal: "それは [S] である [V] 驚くべき [C] 彼がどれほど早く成長したか。",
                natural: "彼がこんなに早く成長したのは驚くべきことだ。",
                intermediate: "A: わあ、リサ！息子さんがこんなに早く成長したのは驚きね。 B: そうなの。去年15センチも伸びたなんて信じられないわ。"
            },
            rationale: "【文脈】子供の急成長に驚いている→「驚くべき」。"
        },
        {
            id: 4,
            text: "A: Can you ( ) your umbrella among the ones on this shelf?<br>B: Yes. Mine is the red-and-white one.",
            choices: ["negotiate", "identify", "translate", "revise"],
            choiceMeanings: ["交渉する", "特定する", "翻訳する", "修正する"],
            correctAnswer: 2,
            structure: "Can you [S] identify [V] your umbrella [O]?",
            explanation: "identify: 特定する、見分ける",
            translation: {
                literal: "あなたは [S] 特定できる [V] あなたの傘を [O]？",
                natural: "この棚の中から自分の傘を見つけられますか？",
                intermediate: "A: この棚にある傘の中から自分の傘を見分けられますか？ B: はい。赤と白のやつが私のです。"
            },
            rationale: "【文脈】たくさんの傘の中から自分のものを「特定する」。"
        },
        {
            id: 5,
            text: "Bob wanted to know the ( ) of food that he needed to buy for his wife's party, so he asked her how many guests were coming.",
            choices: ["opportunity", "quantity", "security", "gravity"],
            choiceMeanings: ["機会", "量", "安全", "重力"],
            correctAnswer: 2,
            structure: "Bob [S] wanted to know [V] the quantity of food [O].",
            explanation: "quantity: 量",
            translation: {
                literal: "ボブは [S] 知りたかった [V] 食べ物の量を [O]。",
                natural: "ボブはどれくらいの量の食べ物を買う必要があるか知りたかった。",
                intermediate: "ボブは妻のパーティーのためにどれくらいの量の食べ物を買う必要があるか知りたかったので、何人のゲストが来るか彼女に聞きました。"
            },
            rationale: "【文脈】ゲストの人数を聞く→必要な食べ物の「量」を知りたい。"
        },
        {
            id: 6,
            text: "After the soccer game had to be canceled, people with tickets were ( ) the cost of buying them.",
            choices: ["refunded", "indicated", "alerted", "displayed"],
            choiceMeanings: ["返金された", "示された", "警告された", "展示された"],
            correctAnswer: 1,
            structure: "People [S] were refunded [V] the cost [O].",
            explanation: "refunded: 返金された",
            translation: {
                literal: "人々は [S] 返金された [V] 費用を [O]。",
                natural: "チケット購入費用が返金された。",
                intermediate: "サッカーの試合が中止になった後、チケットを持っている人々は購入費用を返金されました。"
            },
            rationale: "【文脈】試合中止→チケット代を「返金された」。"
        },
        {
            id: 7,
            text: "In order to reduce the number of customer inquiries, Yamakom Inc. has added a page to its website with answers to the questions that customers ask most ( ).",
            choices: ["directly", "severely", "frequently", "probably"],
            choiceMeanings: ["直接的に", "厳しく", "頻繁に", "おそらく"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Yamakom Inc. has added a page with answers to the questions that customers ask most frequently.",
                mainClause: "Yamakom Inc. [S] has added [V] a page [O] with answers to the questions [M]",
                relativeClause: "that customers [S'] ask [V'] most frequently [M] → 関係代名詞節（questionsを修飾）",
                grammarPoint: "FAQ = Frequently Asked Questions"
            },
            explanation: "frequently: 頻繁に",
            translation: {
                literal: "顧客が [S] 尋ねる [V] 最も頻繁に質問。",
                natural: "顧客が最も頻繁に尋ねる質問。",
                intermediate: "顧客からの問い合わせを減らすため、ヤマコム社はウェブサイトに顧客が最も頻繁に尋ねる質問への回答を掲載したページを追加しました。"
            },
            rationale: "【文脈】よくある質問（FAQ）のページ→「頻繁に」尋ねられる質問。"
        },
        {
            id: 8,
            text: "Ben's flight from New York to Tokyo will take about 14 hours. He will try to sleep on the plane so that he will not be tired when he reaches his ( ).",
            choices: ["celebration", "reservation", "generation", "destination"],
            choiceMeanings: ["お祝い", "予約", "世代", "目的地"],
            correctAnswer: 4,
            structure: "He [S] reaches [V] his destination [O].",
            explanation: "destination: 目的地",
            translation: {
                literal: "彼は [S] 到着する [V] 目的地に [O]。",
                natural: "彼は目的地に着く。",
                intermediate: "ベンのニューヨークから東京へのフライトは約14時間かかります。目的地に着いたときに疲れていないよう、機内で寝ようとするでしょう。"
            },
            rationale: "【文脈】東京へのフライト→到着する場所＝「目的地」。"
        },
        {
            id: 9,
            text: "The law in this country does not ( ) drivers to cross railway tracks without stopping first. Anyone who breaks this rule will get a fine.",
            choices: ["deserve", "announce", "operate", "permit"],
            choiceMeanings: ["値する", "発表する", "操作する", "許可する"],
            correctAnswer: 4,
            structure: {
                fullSentence: "The law does not permit drivers to cross railway tracks without stopping first.",
                mainClause: "The law [S] does not permit [V] drivers [O] to cross railway tracks [C:to不定詞]",
                withoutPhrase: "without stopping first [M] → 「まず止まらずに」",
                grammarPoint: "permit + O + to do = 「Oが～することを許可する」"
            },
            explanation: "permit: 許可する",
            translation: {
                literal: "法律は [S] 許可しない [V] 運転者が [O] 渡ることを。",
                natural: "法律は運転者が踏切を一時停止なしで渡ることを許可していない。",
                intermediate: "この国の法律は、運転者が一時停止せずに踏切を渡ることを許可していません。このルールを破った人は罰金を科されます。"
            },
            rationale: "【文脈】踏切で止まらないと罰金→法律が「許可していない」。"
        },
        {
            id: 10,
            text: "Every morning, Zach goes for a run and then takes a shower before he eats breakfast. He follows the same ( ) each day.",
            choices: ["despair", "exchange", "routine", "minority"],
            choiceMeanings: ["絶望", "交換", "習慣", "少数派"],
            correctAnswer: 3,
            structure: "He [S] follows [V] the same routine [O] each day.",
            explanation: "routine: 日課、習慣",
            translation: {
                literal: "彼は [S] 従う [V] 同じ日課に [O] 毎日。",
                natural: "彼は毎日同じ日課に従っている。",
                intermediate: "毎朝、ザックはランニングをしてからシャワーを浴び、朝食を食べます。彼は毎日同じ日課に従っています。"
            },
            rationale: "【文脈】毎日同じことをする→「日課・習慣」。"
        },
        {
            id: 11,
            text: "Angela caught a cold, so she could not ( ) the school singing contest this year. She hopes to be able to take part next year.",
            choices: ["rely on", "participate in", "bump into", "turn off"],
            choiceMeanings: ["頼る", "参加する", "偶然出会う", "消す"],
            correctAnswer: 2,
            structure: "She [S] could not participate in [V] the contest [O].",
            explanation: "participate in: 参加する",
            translation: {
                literal: "彼女は [S] 参加できなかった [V] コンテストに [O]。",
                natural: "彼女はコンテストに参加できなかった。",
                intermediate: "アンジェラは風邪をひいたので、今年の学校の歌唱コンテストに参加できませんでした。来年は参加できることを願っています。"
            },
            rationale: "【文脈】風邪で出られなかった＋来年は take part したい→「参加する」。"
        },
        {
            id: 12,
            text: "A: Would you like to go to Donna's birthday party with me on Friday night?<br>B: I'm not sure. Can I think it ( ) and let you know tomorrow?",
            choices: ["over", "along", "down", "around"],
            choiceMeanings: ["じっくり", "一緒に", "下に", "周りに"],
            correctAnswer: 1,
            structure: "Can I [S] think it over [V]?",
            explanation: "think it over: よく考える",
            translation: {
                literal: "私は [S] よく考えていい [V]？",
                natural: "よく考えていい？",
                intermediate: "A: 金曜の夜、ドナの誕生日パーティーに一緒に行かない？ B: ちょっとわからないな。よく考えて明日連絡してもいい？"
            },
            rationale: "【文脈】明日返事する→今は「よく考えたい」。think it over = じっくり考える。"
        },
        {
            id: 13,
            text: "A: I think we should ( ) books completely and learn everything from computers.<br>B: I disagree. I think we still need to use books, especially in schools.",
            choices: ["go on about", "look forward to", "come out of", "do away with"],
            choiceMeanings: ["について話し続ける", "楽しみにする", "から出てくる", "廃止する"],
            correctAnswer: 4,
            structure: "We [S] should do away with [V] books [O].",
            explanation: "do away with: 廃止する、なくす",
            translation: {
                literal: "私たちは [S] 廃止すべきだ [V] 本を [O]。",
                natural: "本を完全に廃止すべきだ。",
                intermediate: "A: 本を完全に廃止して、すべてをコンピュータから学ぶべきだと思う。 B: 反対だな。特に学校ではまだ本を使う必要があると思う。"
            },
            rationale: "【文脈】本をやめてコンピュータにする→本を「廃止する」。"
        },
        {
            id: 14,
            text: "A: How's your new apartment, George?<br>B: Well, it's a little far from the station, but ( ), I think it's pretty good. It's a nice size, and my neighbors are very friendly.",
            choices: ["back and forth", "touch and go", "by and large", "give and take"],
            choiceMeanings: ["行ったり来たり", "危険な状態", "概して", "妥協"],
            correctAnswer: 3,
            structure: "By and large, I [S] think [V] it's pretty good [O].",
            explanation: "by and large: 概して、全体的に",
            translation: {
                literal: "概して、私は [S] 思う [V] かなり良いと [O]。",
                natural: "概して、かなり良いと思う。",
                intermediate: "A: 新しいアパートはどう、ジョージ？ B: 駅からちょっと遠いけど、概してかなり良いと思うよ。広さもちょうどいいし、近所の人もとても親切だよ。"
            },
            rationale: "【文脈】駅から遠いけど全体的には良い→「概して」良い。"
        },
        {
            id: 15,
            text: "A: I can't believe it, Mom! I finished fourth in the marathon again. That's the third time in three races.<br>B: Keep trying, Billy, and ( ), your luck will change. I'm sure you'll get a medal very soon.",
            choices: ["at the moment", "at a distance", "one of these days", "one after another"],
            choiceMeanings: ["今のところ", "離れて", "いつか", "次々と"],
            correctAnswer: 3,
            structure: "One of these days, your luck [S] will change [V].",
            explanation: "one of these days: いつか、近いうちに",
            translation: {
                literal: "いつか、あなたの運は [S] 変わる [V]。",
                natural: "いつか運が変わるよ。",
                intermediate: "A: 信じられない、お母さん！また4位だった。3回連続で3回目だよ。 B: 諦めないで、ビリー。いつか運が変わるよ。すぐにメダルを取れると思うわ。"
            },
            rationale: "【文脈】頑張り続ければ「いつか」運が変わる。"
        },
        {
            id: 16,
            text: "A: I'm ( ) all the rain we've been getting lately.<br>B: Me, too. It feels like weeks since we last had any sunshine.",
            choices: ["fed up with", "gone out for", "made out of", "wrapped up in"],
            choiceMeanings: ["うんざりして", "〜を求めて外出する", "〜で作られた", "〜に夢中で"],
            correctAnswer: 1,
            structure: "I [S] am [V] fed up with [C] all the rain.",
            explanation: "fed up with: うんざりして、飽き飽きして",
            translation: {
                literal: "私は [S] である [V] うんざりして [C] この雨に。",
                natural: "最近ずっと降っている雨にうんざりしている。",
                intermediate: "A: 最近ずっと降っている雨にうんざりだよ。 B: 私も。最後に晴れたのがもう何週間も前のような気がする。"
            },
            rationale: "【文脈】雨続きで嫌になっている→「うんざりして」。"
        },
        {
            id: 17,
            text: "A: Mom, this milk doesn't smell fresh.<br>B: Throw it away, Johnny. It has probably ( ). I'll get some more when I go to the supermarket later.",
            choices: ["come close", "broken out", "gone bad", "passed away"],
            choiceMeanings: ["近づいた", "発生した", "腐った", "亡くなった"],
            correctAnswer: 3,
            structure: "It [S] has probably gone bad [V].",
            explanation: "gone bad: 腐った、傷んだ",
            translation: {
                literal: "それは [S] おそらく腐った [V]。",
                natural: "おそらく腐ったね。",
                intermediate: "A: お母さん、この牛乳新鮮じゃないにおいがする。 B: 捨てて、ジョニー。おそらく腐ったのよ。後でスーパーに行ったときに買ってくるわ。"
            },
            rationale: "【文脈】牛乳のにおいがおかしい→「腐った」。"
        },
        {
            id: 18,
            text: "Isaac's mother asked him ( ) he was hungry, and he said no. He had already eaten a sandwich.",
            choices: ["when", "if", "how", "as"],
            choiceMeanings: ["いつ", "〜かどうか", "どのように", "〜として"],
            correctAnswer: 2,
            structure: "She [S] asked [V] him [O] if he was hungry.",
            explanation: "if: 〜かどうか（名詞節を導く）",
            translation: {
                literal: "彼女は [S] 尋ねた [V] 彼に [O] お腹が空いているかどうか。",
                natural: "彼女は彼にお腹が空いているかどうか尋ねた。",
                intermediate: "アイザックの母親は彼にお腹が空いているかどうか尋ね、彼は空いていないと答えました。彼はすでにサンドイッチを食べていました。"
            },
            rationale: "【文法】ask if ～ = 〜かどうか尋ねる。Yes/Noで答えられる質問の間接疑問。"
        },
        {
            id: 19,
            text: "A: Mom, can we go to Europe for our vacation this summer?<br>B: That would be nice, Vicky. But we don't have enough money this year to go to the beach, ( ) overseas.",
            choices: ["much more", "much less", "less than", "more than"],
            choiceMeanings: ["ましてや（肯定）", "ましてや（否定）", "〜より少なく", "〜より多く"],
            correctAnswer: 2,
            structure: "We don't have enough money to go to the beach, much less overseas.",
            explanation: "much less: まして〜ない（否定文に続く）",
            translation: {
                literal: "ビーチに行くお金もない、まして海外など。",
                natural: "ビーチにも行けないのに、ましてや海外なんて。",
                intermediate: "A: お母さん、今年の夏はヨーロッパに行ける？ B: いいわね、ヴィッキー。でも今年はビーチに行くお金もないのよ、ましてや海外なんて。"
            },
            rationale: "【文法】否定文 + much less ～ = 〜はなおさらできない。"
        },
        {
            id: 20,
            text: "A: Kelsey, I'm going out to lunch now. ( ) Mr. Anderson stop by the office while I'm away, please tell him that I'll be back by 1 p.m.<br>B: Yes, Mrs. Allen.",
            choices: ["Shall", "Should", "Could", "Can"],
            choiceMeanings: ["〜しましょうか", "万が一〜なら", "〜できますか", "〜できる"],
            correctAnswer: 2,
            structure: "Should Mr. Anderson stop by, please tell him...",
            explanation: "Should: 万が一〜なら（仮定法の倒置）",
            translation: {
                literal: "万が一アンダーソン氏が立ち寄ったら、伝えてください...",
                natural: "万が一アンダーソン氏が来たら、伝えてください。",
                intermediate: "A: ケルシー、今からランチに行ってくるわ。万が一私がいない間にアンダーソン氏がオフィスに来たら、1時までには戻ると伝えて。 B: はい、アレンさん。"
            },
            rationale: "【文法】Should S V = If S should V の倒置形。万が一〜なら。"
        }
    ]
};
