export const grade3_2023_2Data = {
    questions: [
        {
            id: 1,
            text: "A: Thanks for lending me this book. I really enjoyed it.<br>B: You can ( ) it if you like.",
            choices: ["win", "wait", "rise", "keep"],
            choiceMeanings: ["勝つ", "待つ", "上がる", "持っておく"],
            correctAnswer: 4,
            structure: "You [S] can keep [V] it [O] if you like [M].",
            explanation: "正解単語: keep (持っておく/とっておく)。「もしよかったら、その本はあげますよ（とっておいていいですよ）」という文脈。",
            translation: {
                literal: "あなたは [S] 持っておける [V] それを [O] もしあなたが好むなら [M]。",
                natural: "もしよかったら、それをとっておいていいですよ。",
                intermediate: "A: この本を貸してくれてありがとう。すごく面白かったよ。\nB: もしよかったら、そのまま持ってていいよ（あげるよ）。"
            },
            rationale: "lending (貸した) に対する返答で、気に入ったなら keep していい、という流れ。"
        },
        {
            id: 2,
            text: "I played soccer in the rain today, so my uniform is really ( ) now.",
            choices: ["new", "dirty", "long", "quick"],
            choiceMeanings: ["新しい", "汚い", "長い", "速い"],
            correctAnswer: 2,
            structure: "my uniform [S] is [V] really dirty [C] now [M].",
            explanation: "正解単語: dirty (汚い)。雨の中でサッカーをしたので、ユニフォームが汚れた。",
            translation: {
                literal: "私のユニフォームは [S] です [V] 本当に汚い [C] 今 [M]。",
                natural: "私のユニフォームは今とても汚れています。",
                intermediate: "今日雨の中でサッカーをしたので、ユニフォームが泥だらけ（すごく汚れている）です。"
            },
            rationale: "in the rain (雨の中で) プレーしたので dirty (汚れる) が自然。"
        },
        {
            id: 3,
            text: "A: I hear you run five kilometers every morning.<br>B: That's not ( ). I usually only run three kilometers.",
            choices: ["warm", "true", "ready", "fast"],
            choiceMeanings: ["暖かい", "本当の", "準備ができている", "速い"],
            correctAnswer: 2,
            structure: "That [S] 's [V] not true [C].",
            explanation: "正解単語: true (本当の)。5km走ると聞いたが、実際は3kmしか走らないので、その噂は「本当ではない」。",
            translation: {
                literal: "それは [S] です [V] 本当ではない [C]。",
                natural: "それは本当ではありません。",
                intermediate: "A: 毎朝5キロ走ってるんだってね。\nB: それは本当じゃないよ。普段は3キロしか走らないよ。"
            },
            rationale: "5km vs 3km の対比から、否定内容を選ぶ。"
        },
        {
            id: 4,
            text: "Before I went to Japan last month, I got some good ( ) from my father. He told me to learn some simple Japanese words before my trip.",
            choices: ["sky", "meaning", "advice", "time"],
            choiceMeanings: ["空", "意味", "アドバイス/助言", "時間"],
            correctAnswer: 3,
            structure: "I [S] got [V] some good advice [O] from my father [M].",
            explanation: "正解単語: advice (助言)。日本に行く前に、父から良い「アドバイス」をもらった（日本語を学ぶように言われた）。",
            translation: {
                literal: "私は [S] もらった [V] いくつかの良いアドバイスを [O] 父から [M]。",
                natural: "私は父から良いアドバイスをもらいました。",
                intermediate: "先月日本に行く前に、父から良いアドバイスをもらいました。旅行前に簡単な日本語を覚えておくように言われたのです。"
            },
            rationale: "He told me to... はアドバイスの内容を示している。"
        },
        {
            id: 5,
            text: "It was snowing today, but Linda went out ( ) wearing warm gloves. Her hands became very cold.",
            choices: ["without", "among", "through", "between"],
            choiceMeanings: ["〜なしで", "〜の間で", "〜を通って", "〜の間に"],
            correctAnswer: 1,
            structure: "Linda [S] went out [V] without wearing warm gloves [M].",
            explanation: "正解単語: without (〜なしで)。手袋を「せずに」出かけたので、手が冷たくなった。",
            translation: {
                literal: "リンダは [S] 出かけた [V] 暖かい手袋を着用せずに [M]。",
                natural: "リンダは暖かい手袋をせずに出かけました。",
                intermediate: "今日は雪が降っていましたが、リンダは手袋をせずに出かけました。そのせいで手がとても冷たくなりました。"
            },
            rationale: "Her hands became very cold という結果につながる原因は without wearing gloves。"
        },
        {
            id: 6,
            text: "A: Are you OK, Jim?<br>B: My finger ( ). I'm going to see the school nurse.",
            choices: ["shouts", "laughs", "knows", "hurts"],
            choiceMeanings: ["叫ぶ", "笑う", "知っている", "痛む"],
            correctAnswer: 4,
            structure: "My finger [S] hurts [V].",
            explanation: "正解単語: hurts (痛む)。指が「痛い」ので保健室に行く。",
            translation: {
                literal: "私の指が [S] 痛む [V]。",
                natural: "指が痛いんだ。",
                intermediate: "A: 大丈夫、ジム？\nB: 指が痛いんだ。保健室の先生に診てもらいに行くよ。"
            },
            rationale: "保健室に行く理由として適切なのは hurts。"
        },
        {
            id: 7,
            text: "Paul ( ) nine friends to his birthday party, but only six came. The other three were too busy.",
            choices: ["invited", "introduced", "met", "felt"],
            choiceMeanings: ["招待した", "紹介した", "会った", "感じた"],
            correctAnswer: 1,
            structure: "Paul [S] invited [V] nine friends [O] to his birthday party [M].",
            explanation: "正解単語: invited (招待した)。誕生日パーティーに友達を「招待した」。",
            translation: {
                literal: "ポールは [S] 招待した [V] 9人の友人を [O] 彼の誕生日パーティーに [M]。",
                natural: "ポールは9人の友人を誕生日パーティーに招待しました。",
                intermediate: "ポールは誕生日パーティーに9人の友達を招待しましたが、6人しか来ませんでした。残りの3人は忙しすぎたのです。"
            },
            rationale: "birthday party という文脈で人を呼ぶのは invite。"
        },
        {
            id: 8,
            text: "A: How often do you go skiing?<br>B: A ( ) of times a year. I usually go once in Niigata and once in Nagano.",
            choices: ["hobby", "couple", "fact", "group"],
            choiceMeanings: ["趣味", "カップル/2つ", "事実", "グループ"],
            correctAnswer: 2,
            structure: "A couple of times [M] a year [M].",
            explanation: "正解単語: couple。a couple of times で「数回（ここでは2回）」。後ろで新潟で1回、長野で1回と言っているので合計2回。",
            translation: {
                literal: "2、3回 [M] 1年に [M]。",
                natural: "年に2、3回です。",
                intermediate: "A: どのくらいの頻度でスキーに行くの？\nB: 年に2回くらいかな。たいてい新潟で1回、長野で1回行くよ。"
            },
            rationale: "once + once = 2回なので、couple が最適。"
        },
        {
            id: 9,
            text: "A: How was Lucy's swimming race today?<br>B: She didn't win, but she did her ( ). I'm proud of her.",
            choices: ["just", "next", "first", "best"],
            choiceMeanings: ["ただ", "次の", "最初の", "最善"],
            correctAnswer: 4,
            structure: "she [S] did [V] her best [O].",
            explanation: "正解単語: best。do her best で「全力を尽くす」。勝てなかったけど頑張った。",
            translation: {
                literal: "彼女は [S] 尽くした [V] 彼女のベストを [O]。",
                natural: "彼女は全力を尽くしました。",
                intermediate: "A: ルーシーの今日の水泳大会、どうだった？\nB: 優勝はできなかったけど、彼女は全力を尽くしたよ。彼女を誇りに思うよ。"
            },
            rationale: "did her ... という形と proud of her という文脈から best。"
        },
        {
            id: 10,
            text: "A: We need to clean our house before tonight's dinner party.<br>B: Yeah. ( ) of all, let's clean the living room. Then we can clean the kitchen and bathroom after that.",
            choices: ["Right", "Straight", "Next", "First"],
            choiceMeanings: ["正しい", "真っ直ぐな", "次の", "最初の"],
            correctAnswer: 4,
            structure: "First of all [M], let's clean [V] the living room [O].",
            explanation: "正解単語: First。First of all で「まず最初に」。掃除の順番を提案している。",
            translation: {
                literal: "まず第一に [M]、掃除しましょう [V] リビングルームを [O]。",
                natural: "まず第一に、リビングを掃除しましょう。",
                intermediate: "A: 今夜のディナーパーティーの前に家を掃除しなきゃ。\nB: そうだね。まずはリビングを掃除しよう。そのあとでキッチンとお風呂場をやろう。"
            },
            rationale: "まずリビング、その後に(Then)キッチン、という順序の話。"
        },
        {
            id: 11,
            text: "Yuko's father can speak a little Spanish. He lived in Spain for a ( ) when he was a child.",
            choices: ["matter", "while", "chance", "future"],
            choiceMeanings: ["問題/事柄", "間/期間", "機会", "未来"],
            correctAnswer: 2,
            structure: "He [S] lived [V] in Spain [M] for a while [M].",
            explanation: "正解単語: while。for a while で「しばらくの間」。",
            translation: {
                literal: "彼は [S] 住んでいた [V] スペインに [M] しばらくの間 [M]。",
                natural: "彼はしばらくの間スペインに住んでいました。",
                intermediate: "ユウコのお父さんは少しスペイン語が話せます。子供の頃、しばらくスペインに住んでいたからです。"
            },
            rationale: "lived in Spain for a ... と期間を表す文脈。"
        },
        {
            id: 12,
            text: "Scott was only in Boston for one day, but he had time to look ( ) a famous art museum. He saw many beautiful paintings there.",
            choices: ["around", "against", "away", "like"],
            choiceMeanings: ["周りを", "反対して", "離れて", "〜のように"],
            correctAnswer: 1,
            structure: "he [S] had [V] time [O] to look around a famous art museum [M].",
            explanation: "正解単語: around。look around で「見て回る」。美術館を見学した。",
            translation: {
                literal: "彼は [S] 持っていた [V] 時間を [O] 有名な美術館を見て回るための [M]。",
                natural: "彼には有名な美術館を見て回る時間がありました。",
                intermediate: "スコットはボストンに1日しかいなかったが、有名な美術館を見て回る時間があった。そこでたくさんの美しい絵画を見た。"
            },
            rationale: "museum を見て回る動作。"
        },
        {
            id: 13,
            text: "A: Is that building ( ) than Tokyo Tower?<br>B: I think so.",
            choices: ["tallest", "tall", "taller", "too tall"],
            choiceMeanings: ["最も高い", "高い", "より高い", "高すぎる"],
            correctAnswer: 3,
            structure: "Is [V] that building [S] taller [C] than Tokyo Tower [M]?",
            explanation: "正解単語: taller (より高い)。than (〜より) があるので比較級。",
            translation: {
                literal: "ですか [V] あの建物は [S] より高い [C] 東京タワーよりも [M]？",
                natural: "あの建物は東京タワーより高いですか？",
                intermediate: "A: あのビルは東京タワーより高いの？\nB: そう思うよ。"
            },
            rationale: "than につながる形を選ぶ。"
        },
        {
            id: 14,
            text: "A: Is Peter coming to the 5:00 p.m. meeting?<br>B: No. He has already ( ) home. He said he wasn't feeling well.",
            choices: ["to go", "went", "go", "gone"],
            choiceMeanings: ["行くこと", "行った", "行く", "行った（完了）"],
            correctAnswer: 4,
            structure: "He [S] has already gone [V] home [M].",
            explanation: "正解単語: gone (行ってしまった)。has already ... home で「もう家に帰ってしまった（ここにはいない）」。",
            translation: {
                literal: "彼は [S] すでに行ってしまった [V] 家へ [M]。",
                natural: "彼はすでに家に帰ってしまいました。",
                intermediate: "A: ピーターは午後5時の会議に来る？\nB: ううん。彼はもう帰っちゃったよ。具合が悪いって言ってた。"
            },
            rationale: "has + 過去分詞。go home の過去分詞形。"
        },
        {
            id: 15,
            text: "Yuriko has two brothers. She enjoys ( ) video games with them every weekend.",
            choices: ["played", "playing", "plays", "play"],
            choiceMeanings: ["遊んだ", "遊ぶこと", "遊ぶ", "遊ぶ"],
            correctAnswer: 2,
            structure: "She [S] enjoys [V] playing video games [O].",
            explanation: "正解単語: playing (遊ぶこと)。enjoy は目的語に動名詞をとる動詞 (enjoy ~ing)。",
            translation: {
                literal: "彼女は [S] 楽しむ [V] テレビゲームをすることを [O]。",
                natural: "彼女は彼らとビデオゲームをして楽しみます。",
                intermediate: "ユリコには2人の兄弟がいます。彼女は毎週末、彼らとビデオゲームをして楽しみます。"
            },
            rationale: "enjoy playing は基本文法。"
        }
    ]
};
