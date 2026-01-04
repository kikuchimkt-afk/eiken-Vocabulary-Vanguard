// Grade 2 (2級) - 2023年度 第3回検定（準会場）
export const grade2_2023_3_subData = {
    title: "2023年度第3回検定一次試験(2級・準会場)",
    questions: [
        {
            id: 1,
            text: "A new mayor was ( ) yesterday. In his first speech, he promised to have a new train station built in the center of the city.",
            choices: ["elected", "submitted", "detected", "revised"],
            choiceMeanings: ["選出された", "提出された", "検出された", "修正された"],
            correctAnswer: 1,
            structure: "A new mayor [S] was elected [V] yesterday.",
            explanation: "elected: 選出された",
            translation: {
                literal: "新しい市長が [S] 選出された [V] 昨日。",
                natural: "昨日新しい市長が選出された。",
                intermediate: "昨日新しい市長が選出されました。最初のスピーチで、彼は市の中心に新しい鉄道駅を建設することを約束しました。"
            },
            rationale: "【文脈】市長→「選出された」。"
        },
        {
            id: 2,
            text: "( ) increased in Neesetown after an interesting documentary about it was shown on national TV. Over 10,000 people visited the town last summer.",
            choices: ["Marriage", "Snowfall", "Patience", "Tourism"],
            choiceMeanings: ["結婚", "降雪", "忍耐", "観光"],
            correctAnswer: 4,
            structure: "Tourism [S] increased [V] in Neesetown.",
            explanation: "Tourism: 観光",
            translation: {
                literal: "観光が [S] 増加した [V] ニーズタウンで。",
                natural: "ニーズタウンで観光が増加した。",
                intermediate: "ニーズタウンについての興味深いドキュメンタリーが全国テレビで放映された後、観光が増加しました。昨夏、1万人以上がこの町を訪れました。"
            },
            rationale: "【文脈】ドキュメンタリー放映後に人が訪れる→「観光」増加。"
        },
        {
            id: 3,
            text: "<i>Romeo and Juliet</i> is a famous love story with a ( ) ending. The two young lovers end up dying as they try to escape from the fighting between their families.",
            choices: ["tragic", "constant", "humble", "grateful"],
            choiceMeanings: ["悲劇的な", "絶え間ない", "謙虚な", "感謝している"],
            correctAnswer: 1,
            structure: "It [S] is [V] a love story with a tragic ending [C].",
            explanation: "tragic: 悲劇的な",
            translation: {
                literal: "それは [S] である [V] 悲劇的な結末の恋物語 [C]。",
                natural: "それは悲劇的な結末の恋物語だ。",
                intermediate: "『ロミオとジュリエット』は悲劇的な結末の有名な恋物語です。二人の若い恋人たちは、家族間の争いから逃げようとして死んでしまいます。"
            },
            rationale: "【文脈】恋人たちが死ぬ→「悲劇的な」結末。"
        },
        {
            id: 4,
            text: "Most people ( ) that Matt is in his 30s because he looks very young. Actually, he is in his 40s.",
            choices: ["enlarge", "assume", "facilitate", "compensate"],
            choiceMeanings: ["拡大する", "思い込む", "促進する", "補償する"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Most people (assume) that Matt is in his 30s because he looks very young.",
                mainClause: "Most people [S] assume [V] that節 [O]",
                thatClause: "Matt [S'] is [V'] in his 30s [C'] → that節",
                reasonClause: "because he [S''] looks [V''] very young [C''] → 理由のbecause節",
                grammarPoint: "assume that = 「～だと思い込む」"
            },
            explanation: "assume: 思い込む、推測する",
            translation: {
                literal: "ほとんどの人は [S] 思い込む [V] マットが30代だと。",
                natural: "ほとんどの人はマットが30代だと思い込んでいる。",
                intermediate: "ほとんどの人はマットがとても若く見えるので30代だと思い込んでいます。実際には40代です。"
            },
            rationale: "【文脈】若く見える→30代と「思い込む」。"
        },
        {
            id: 5,
            text: "Fritz checks the ( ) every morning before getting dressed because he wants to wear clothes that are suitable for the weather.",
            choices: ["symptom", "forecast", "progress", "background"],
            choiceMeanings: ["症状", "天気予報", "進歩", "背景"],
            correctAnswer: 2,
            structure: "Fritz [S] checks [V] the forecast [O] every morning.",
            explanation: "forecast: 天気予報",
            translation: {
                literal: "フリッツは [S] チェックする [V] 天気予報を [O] 毎朝。",
                natural: "フリッツは毎朝天気予報をチェックする。",
                intermediate: "フリッツは天気に適した服を着たいので、毎朝着替える前に天気予報をチェックします。"
            },
            rationale: "【文脈】天気に合った服→「天気予報」をチェック。"
        },
        {
            id: 6,
            text: "Tim used his smartphone for two hours straight, but he had to ( ) for a while when the screen became too hot to touch.",
            choices: ["pause", "convert", "confirm", "protect"],
            choiceMeanings: ["一時停止する", "変換する", "確認する", "保護する"],
            correctAnswer: 1,
            structure: "He [S] had to pause [V] for a while.",
            explanation: "pause: 一時停止する",
            translation: {
                literal: "彼は [S] 一時停止しなければならなかった [V] しばらく。",
                natural: "彼はしばらく一時停止しなければならなかった。",
                intermediate: "ティムはスマートフォンを2時間続けて使いましたが、画面が熱くて触れなくなったので、しばらく一時停止しなければなりませんでした。"
            },
            rationale: "【文脈】画面が熱い→使用を「一時停止」。"
        },
        {
            id: 7,
            text: "The captain of Flight 136 announced that the airplane would be landing ( ). He asked the passengers to return to their seats as soon as possible.",
            choices: ["powerfully", "fearfully", "shortly", "neatly"],
            choiceMeanings: ["力強く", "恐ろしく", "まもなく", "きちんと"],
            correctAnswer: 3,
            structure: "The airplane [S] would be landing [V] shortly.",
            explanation: "shortly: まもなく",
            translation: {
                literal: "飛行機は [S] 着陸する [V] まもなく。",
                natural: "飛行機はまもなく着陸する。",
                intermediate: "フライト136の機長は飛行機がまもなく着陸すると発表しました。彼は乗客にできるだけ早く席に戻るよう求めました。"
            },
            rationale: "【文脈】着陸前に席に戻る→「まもなく」着陸。"
        },
        {
            id: 8,
            text: "A: Are you going to accept the job offer from the electronics company?<br>B: I don't know. The salary is great, but there are other ( ) of the job that don't sound so good. For example, they want me to work on Saturdays.",
            choices: ["fortunes", "scales", "aspects", "exhibits"],
            choiceMeanings: ["財産", "規模", "側面", "展示品"],
            correctAnswer: 3,
            structure: {
                fullSentence: "There are other (aspects) of the job that don't sound so good.",
                mainClause: "There are [V] other aspects [S] of the job [M]",
                relativeClause: "that [S'] don't sound [V'] so good [C'] → 関係代名詞節（aspectsを修飾）",
                grammarPoint: "there are + 名詞 + that節"
            },
            explanation: "aspects: 側面",
            translation: {
                literal: "他の側面がある [S] 仕事の、良くないように聞こえる。",
                natural: "仕事の他の側面で良くないものがある。",
                intermediate: "A: 電子機器会社からの仕事のオファーを受けますか？ B: わからない。給料は素晴らしいけど、あまり良くない仕事の他の側面がある。例えば、土曜日に働くことを求められている。"
            },
            rationale: "【文脈】仕事の良い点と悪い点→仕事の「側面」。"
        },
        {
            id: 9,
            text: "Heather was thirsty during her train journey, so she took a drink from her bottle of tea. Unfortunately, the train stopped suddenly, and she ( ) some tea on her dress.",
            choices: ["argued", "spilled", "convinced", "maintained"],
            choiceMeanings: ["議論した", "こぼした", "説得した", "維持した"],
            correctAnswer: 2,
            structure: "She [S] spilled [V] some tea [O] on her dress.",
            explanation: "spilled: こぼした",
            translation: {
                literal: "彼女は [S] こぼした [V] お茶を [O] ドレスに。",
                natural: "彼女はドレスにお茶をこぼした。",
                intermediate: "ヘザーは電車の旅の途中で喉が渇いたので、お茶のボトルから飲みました。残念ながら、電車が突然止まり、彼女はドレスにお茶をこぼしてしまいました。"
            },
            rationale: "【文脈】電車が急停止→お茶を「こぼした」。"
        },
        {
            id: 10,
            text: "When Martin wants to take a day off work, he has to get his boss's ( ). Most of the time, she says it is no problem.",
            choices: ["furniture", "approval", "rhythm", "triumph"],
            choiceMeanings: ["家具", "承認", "リズム", "勝利"],
            correctAnswer: 2,
            structure: "He [S] has to get [V] his boss's approval [O].",
            explanation: "approval: 承認",
            translation: {
                literal: "彼は [S] 得なければならない [V] 上司の承認を [O]。",
                natural: "彼は上司の承認を得なければならない。",
                intermediate: "マーティンが仕事を休みたいとき、彼は上司の承認を得なければなりません。ほとんどの場合、彼女は問題ないと言います。"
            },
            rationale: "【文脈】休みを取る→上司の「承認」が必要。"
        },
        {
            id: 11,
            text: "Alex studied hard for the English test, but his effort was all ( ) nothing. The teacher decided to cancel the test.",
            choices: ["to", "by", "for", "with"],
            choiceMeanings: ["〜へ", "〜によって", "〜のために", "〜と"],
            correctAnswer: 3,
            structure: "His effort [S] was [V] all for nothing [C].",
            explanation: "all for nothing: 全て無駄に",
            translation: {
                literal: "彼の努力は [S] だった [V] 全て無駄 [C]。",
                natural: "彼の努力は全て無駄だった。",
                intermediate: "アレックスは英語のテストのために一生懸命勉強しましたが、彼の努力は全て無駄でした。先生がテストをキャンセルすることにしたからです。"
            },
            rationale: "【イディオム】all for nothing = 全て無駄に。"
        },
        {
            id: 12,
            text: "A: Ken, I've decided to rent a car when I go to Los Angeles next month.<br>B: You should visit the Grand Canyon. It ( ) to get there, but if you don't mind the long drive, the view is fantastic.",
            choices: ["makes noise", "takes time", "pays attention", "gives confidence"],
            choiceMeanings: ["音を立てる", "時間がかかる", "注意を払う", "自信を与える"],
            correctAnswer: 2,
            structure: "It [S] takes time [V] to get there.",
            explanation: "takes time: 時間がかかる",
            translation: {
                literal: "それは [S] 時間がかかる [V] そこに行くのに。",
                natural: "そこに行くのに時間がかかる。",
                intermediate: "A: ケン、来月ロサンゼルスに行くときレンタカーを借りることにしたよ。 B: グランドキャニオンを訪れるべきだよ。そこに行くのに時間がかかるけど、長いドライブを気にしないなら、景色は素晴らしいよ。"
            },
            rationale: "【文脈】長いドライブ→「時間がかかる」。"
        },
        {
            id: 13,
            text: "A: Excuse me, sir. Do you know, by any ( ), where I could find a post office near here?<br>B: I'm sorry, but I don't know this neighborhood very well either.",
            choices: ["hope", "chance", "use", "reason"],
            choiceMeanings: ["希望", "機会", "使用", "理由"],
            correctAnswer: 2,
            structure: "Do you know, by any chance, where I could find a post office?",
            explanation: "by any chance: ひょっとして",
            translation: {
                literal: "ひょっとして、どこで郵便局を見つけられるか知っていますか？",
                natural: "ひょっとして、近くの郵便局がどこか知っていますか？",
                intermediate: "A: すみません。ひょっとして、このあたりで郵便局がどこにあるかご存知ですか？ B: すみませんが、私もこの近所はあまり詳しくないんです。"
            },
            rationale: "【イディオム】by any chance = ひょっとして。"
        },
        {
            id: 14,
            text: "Mark had a free afternoon during his business trip to Paris, so he decided to ( ) one of the city's famous art museums.",
            choices: ["think the world of", "make a living by", "get the better of", "pay a visit to"],
            choiceMeanings: ["〜を非常に尊敬する", "〜で生計を立てる", "〜に打ち勝つ", "〜を訪問する"],
            correctAnswer: 4,
            structure: "He [S] decided to pay a visit to [V] one of the city's famous art museums [O].",
            explanation: "pay a visit to: 〜を訪問する",
            translation: {
                literal: "彼は [S] 訪問することにした [V] 市の有名な美術館の一つを [O]。",
                natural: "彼は市の有名な美術館の一つを訪問することにした。",
                intermediate: "マークはパリへの出張中に自由な午後があったので、市の有名な美術館の一つを訪問することにしました。"
            },
            rationale: "【文脈】自由時間→美術館を「訪問する」。"
        },
        {
            id: 15,
            text: "A: Have you read Austin Grover's new novel yet? It's amazing!<br>B: No, not yet. ( ) books, I should return the ones I borrowed from the library soon.",
            choices: ["Comparing with", "Insisting on", "Objecting to", "Speaking of"],
            choiceMeanings: ["〜と比較すると", "〜を主張する", "〜に反対する", "〜と言えば"],
            correctAnswer: 4,
            structure: "Speaking of books, I should return the ones I borrowed.",
            explanation: "Speaking of: 〜と言えば",
            translation: {
                literal: "本と言えば、借りた本を返さなきゃ。",
                natural: "本と言えば、図書館から借りた本をそろそろ返さなきゃ。",
                intermediate: "A: オースティン・グローバーの新しい小説はもう読んだ？ すごいよ！ B: いや、まだ。本と言えば、図書館から借りた本をそろそろ返さなきゃ。"
            },
            rationale: "【イディオム】Speaking of = 〜と言えば。"
        },
        {
            id: 16,
            text: "The store was having a huge sale, so customers ( ) outside before it opened. Some people waited for three hours to get in.",
            choices: ["lined up", "saved up", "called back", "brought back"],
            choiceMeanings: ["列を作った", "貯金した", "電話をかけ直した", "持ち帰った"],
            correctAnswer: 1,
            structure: "Customers [S] lined up [V] outside.",
            explanation: "lined up: 列を作った",
            translation: {
                literal: "客は [S] 列を作った [V] 外で。",
                natural: "客は外で列を作った。",
                intermediate: "店は大セールをしていたので、開店前に客が外で列を作りました。入店するのに3時間待った人もいました。"
            },
            rationale: "【文脈】セールで開店前に待つ→「列を作った」。"
        },
        {
            id: 17,
            text: "The weather was very hot in July, and, ( ), it will be even hotter in August.",
            choices: ["in all likelihood", "by no means", "on the contrary", "all at once"],
            choiceMeanings: ["おそらく", "決して〜ない", "それどころか", "突然"],
            correctAnswer: 1,
            structure: "In all likelihood, it [S] will be [V] even hotter [C].",
            explanation: "in all likelihood: おそらく",
            translation: {
                literal: "おそらく、それは [S] なるだろう [V] さらに暑く [C]。",
                natural: "おそらく、さらに暑くなるだろう。",
                intermediate: "7月の天気はとても暑かったし、おそらく8月はさらに暑くなるでしょう。"
            },
            rationale: "【イディオム】in all likelihood = おそらく。"
        },
        {
            id: 18,
            text: "John's history test last week was very easy. He got a perfect score without even ( ) the textbook before the test.",
            choices: ["opened", "opening", "opens", "open"],
            choiceMeanings: ["開いた（過去形）", "開くこと（動名詞）", "開く（三人称単数）", "開く（原形）"],
            correctAnswer: 2,
            structure: "He [S] got a perfect score without even opening [V] the textbook.",
            explanation: "without + 動名詞：〜せずに",
            translation: {
                literal: "彼は [S] 満点を取った [V] 教科書を開くことさえなく。",
                natural: "彼は教科書を開くことさえなく満点を取った。",
                intermediate: "ジョンの先週の歴史のテストはとても簡単でした。彼はテスト前に教科書を開くことさえなく満点を取りました。"
            },
            rationale: "【文法】without + 動名詞（-ing）。"
        },
        {
            id: 19,
            text: "A: Thanks for helping me with my homework. If it ( ) for you, I wouldn't have been able to do it.<br>B: You're welcome.",
            choices: ["weren't", "didn't", "hadn't", "couldn't"],
            choiceMeanings: ["〜でなかったら（現在）", "〜しなかった", "〜していなかった（過去）", "〜できなかった"],
            correctAnswer: 1,
            structure: "If it weren't for you, I [S] wouldn't have been able [V] to do it.",
            explanation: "If it weren't for: もし〜がなかったら（仮定法現在）",
            translation: {
                literal: "もしあなたがいなかったら、私は [S] できなかっただろう [V] それを。",
                natural: "あなたがいなかったら、私はそれができなかっただろう。",
                intermediate: "A: 宿題を手伝ってくれてありがとう。あなたがいなかったら、私はそれをできなかっただろう。 B: どういたしまして。"
            },
            rationale: "【文法】If it weren't for = もし〜がなかったら。"
        },
        {
            id: 20,
            text: "Cindy was not feeling well, so she told her friends that she would rather ( ) camping with them.",
            choices: ["have not go", "not going", "not to going", "not go"],
            choiceMeanings: ["行かないことを持つ", "行かないこと", "行かないことに", "行かない"],
            correctAnswer: 4,
            structure: "She [S] would rather not go [V] camping with them.",
            explanation: "would rather not + 原形：むしろ〜したくない",
            translation: {
                literal: "彼女は [S] むしろ行きたくない [V] 彼らとキャンプに。",
                natural: "彼女はむしろ彼らとキャンプに行きたくなかった。",
                intermediate: "シンディは体調が良くなかったので、友人たちに一緒にキャンプに行きたくないと言いました。"
            },
            rationale: "【文法】would rather not + 動詞の原形。"
        }
    ]
};
