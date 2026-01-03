export const grade3Data = {
    title: "2025年度第2回検定一次試験(3級)",
    questions: [
        {
            id: 1,
            text: "A: Can I borrow your book?<br>B: Sure. I'll ( ) it to you, but please give it back to me next week.",
            choices: ["lend", "catch", "cost", "close"],
            choiceMeanings: ["貸す", "捕まえる", "費用がかかる", "閉じる"],
            correctAnswer: 1,
            structure: "I [S] 'll lend [V] it [O] to you [M].",
            explanation: "lend: 貸す（lend A to B = AをBに貸す）",
            translation: {
                literal: "私は [S] 貸すつもりだ [V] それを [O] あなたに [M]。",
                natural: "それをあなたに貸してあげるね。",
                intermediate: "A: 本を借りてもいい？\nB: いいよ。貸してあげるけど、来週返してね。"
            },
            rationale: "【文脈】borrow（借りる）に対する返答として lend（貸す）が適切。"
        },
        {
            id: 2,
            text: "A: This pool is so ( ) that I can't see the bottom.<br>B: Don't get into it. It can be dangerous.",
            choices: ["high", "cold", "short", "deep"],
            choiceMeanings: ["高い", "冷たい", "短い", "深い"],
            correctAnswer: 4,
            structure: "This pool [S] is [V] so deep [C] that ...",
            explanation: "deep: 深い（so ... that 〜 = とても...なので〜）",
            translation: {
                literal: "このプールは [S] ある [V] とても深く [C] 〜なので...",
                natural: "このプールはとても深いので...。",
                intermediate: "A: このプールはとても深くて底が見えないよ。\nB: 入らないで。危険かもしれないから。"
            },
            rationale: "【文脈】底が見えない（can't see the bottom）原因として deep（深い）が最適。"
        },
        {
            id: 3,
            text: "A: What was my ( ) score on the test, Ms. Green?<br>B: It was 80 points, John.",
            choices: ["quick", "clean", "happy", "total"],
            choiceMeanings: ["速い", "きれいな", "幸せな", "合計の"],
            correctAnswer: 4,
            structure: "What was [V] my total score [S]?",
            explanation: "total score: 合計点",
            translation: {
                literal: "何でしたか [V] 私の合計点は [S]？",
                natural: "私の合計点は何点でしたか？",
                intermediate: "A: グリーン先生、私のテストの合計点は何点でしたか？\nB: 80点だったわ、ジョン。"
            },
            rationale: "【コロケーション】テストの「何の」スコアか。total score（合計点）が自然。"
        },
        {
            id: 4,
            text: "A: Let's go to the new ( ) and see the fish.<br>B: Good idea! I want to see the dolphins.",
            choices: ["aquarium", "cafeteria", "stadium", "university"],
            choiceMeanings: ["水族館", "カフェテリア", "スタジアム", "大学"],
            correctAnswer: 1,
            structure: "Let's go [V] to the new aquarium [M].",
            explanation: "aquarium: 水族館",
            translation: {
                literal: "行こう [V] 新しい水族館へ [M]。",
                natural: "新しい水族館に行こう。",
                intermediate: "A: 新しい水族館に行って魚を見ようよ。\nB: いいね！イルカを見たいな。"
            },
            rationale: "【文脈】魚やイルカを見る場所＝aquarium（水族館）。"
        },
        {
            id: 5,
            text: "Mr. Yamamoto is a very busy man. He doesn't have ( ) time to read newspapers.",
            choices: ["many", "high", "enough", "little"],
            choiceMeanings: ["たくさんの", "高い", "十分な", "少しの"],
            correctAnswer: 3,
            structure: "He [S] doesn't have [V] enough time [O].",
            explanation: "enough: 十分な（enough time = 十分な時間）",
            translation: {
                literal: "彼は [S] 持っていない [V] 十分な時間を [O]。",
                natural: "彼は十分な時間がない。",
                intermediate: "山本さんはとても忙しい人です。彼は新聞を読む十分な時間がありません。"
            },
            rationale: "【文脈】忙しい（busy）から時間がない。doesn't have enough time で「十分な時間がない」。"
        },
        {
            id: 6,
            text: "A: It's getting cold. Do you need a ( )?<br>B: Yes, please.",
            choices: ["cousin", "bottle", "blanket", "castle"],
            choiceMeanings: ["いとこ", "ボトル", "毛布", "城"],
            correctAnswer: 3,
            structure: "Do you need [V] a blanket [O]?",
            explanation: "blanket: 毛布",
            translation: {
                literal: "あなたは必要ですか [V] 毛布を [O]？",
                natural: "毛布は必要？",
                intermediate: "A: 寒くなってきたね。毛布いる？\nB: うん、お願い。"
            },
            rationale: "【常識的判断】寒くなってきた時に必要なもの＝blanket（毛布）。"
        },
        {
            id: 7,
            text: "Yumi ( ) a video of her dance class. She sent it to her grandfather.",
            choices: ["recorded", "opened", "painted", "celebrated"],
            choiceMeanings: ["録画した", "開けた", "描いた", "祝った"],
            correctAnswer: 1,
            structure: "Yumi [S] recorded [V] a video [O].",
            explanation: "record: 録画する",
            translation: {
                literal: "ユミは [S] 録画した [V] 動画を [O]。",
                natural: "ユミは動画を録画した。",
                intermediate: "ユミはダンス教室の動画を録画しました。彼女はそれを祖父に送りました。"
            },
            rationale: "【コロケーション】video（動画）を「どうした」か。record（録画する）が適切。"
        },
        {
            id: 8,
            text: "A: Did you ask your boss about the new project?<br>B: Not yet. She's always in a ( ), so I never have a chance to talk to her.",
            choices: ["hurry", "promise", "calendar", "package"],
            choiceMeanings: ["急ぎ", "約束", "カレンダー", "荷物"],
            correctAnswer: 1,
            structure: "She [S] 's [V] always in a hurry [C].",
            explanation: "in a hurry: 急いでいる",
            translation: {
                literal: "彼女は [S] いる [V] いつも急いでいる状態に [C]。",
                natural: "彼女はいつも急いでいる。",
                intermediate: "A: 新しいプロジェクトについて上司に聞いた？\nB: まだ。彼女はいつも急いでいて、話す機会がないんだ。"
            },
            rationale: "【熟語】in a hurry = 急いでいる。話す機会がない理由として適切。"
        },
        {
            id: 9,
            text: "Jenny saw her grandparents ( ) the first time in years. She missed them very much.",
            choices: ["for", "from", "out", "over"],
            choiceMeanings: ["〜のために", "〜から", "〜の外に", "〜を越えて"],
            correctAnswer: 1,
            structure: "Jenny [S] saw [V] her grandparents [O] for the first time [M].",
            explanation: "for the first time: 初めて（in years = 何年かぶりに）",
            translation: {
                literal: "ジェニーは [S] 会った [V] 祖父母に [O] 初めて [M]。",
                natural: "ジェニーは祖父母に初めて会った。",
                intermediate: "ジェニーは何年かぶりに初めて祖父母に会いました。彼女はとても会いたかったのです。"
            },
            rationale: "【熟語】for the first time in years = 何年かぶりに初めて。"
        },
        {
            id: 10,
            text: "Jeff plays video games ( ) the time, so his mother always gets angry with him.",
            choices: ["both", "all", "that", "our"],
            choiceMeanings: ["両方の", "すべての", "あの", "私たちの"],
            correctAnswer: 2,
            structure: "Jeff [S] plays [V] video games [O] all the time [M].",
            explanation: "all the time: いつも、常に",
            translation: {
                literal: "ジェフは [S] する [V] ビデオゲームを [O] いつも [M]。",
                natural: "ジェフはいつもビデオゲームをしている。",
                intermediate: "ジェフはいつもビデオゲームをしているので、母親はいつも彼に怒っています。"
            },
            rationale: "【熟語】all the time = いつも。母親が怒る理由として適切。"
        },
        {
            id: 11,
            text: "Tim was ( ) from school for a week because he was sick, but he feels much better now.",
            choices: ["silent", "narrow", "straight", "absent"],
            choiceMeanings: ["静かな", "狭い", "まっすぐな", "欠席の"],
            correctAnswer: 4,
            structure: "Tim [S] was [V] absent [C] from school [M].",
            explanation: "absent: 欠席の（be absent from = 〜を欠席している）",
            translation: {
                literal: "ティムは [S] だった [V] 欠席 [C] 学校から [M]。",
                natural: "ティムは学校を欠席していた。",
                intermediate: "ティムは病気で1週間学校を休んでいましたが、今はずっと良くなっています。"
            },
            rationale: "【熟語】be absent from school = 学校を休む。病気が理由として適切。"
        },
        {
            id: 12,
            text: "Yuki was looking ( ) to going to the concert with her friends.",
            choices: ["right", "forward", "up", "after"],
            choiceMeanings: ["右に", "前に", "上に", "後に"],
            correctAnswer: 2,
            structure: "Yuki [S] was looking forward [V] to going [O].",
            explanation: "look forward to: 〜を楽しみにする",
            translation: {
                literal: "ユキは [S] 楽しみにしていた [V] 行くことを [O]。",
                natural: "ユキは行くことを楽しみにしていた。",
                intermediate: "ユキは友達とコンサートに行くことを楽しみにしていました。"
            },
            rationale: "【熟語】look forward to ...ing = 〜することを楽しみにする。"
        },
        {
            id: 13,
            text: "A: Do you have anything ( )?<br>B: Yes. I have some tea.",
            choices: ["drank", "drinking", "to drink", "drinks"],
            choiceMeanings: ["飲んだ（過去形）", "飲んでいる", "飲むための", "飲む（三単現）"],
            correctAnswer: 3,
            structure: "Do you have [V] anything to drink [O]?",
            explanation: "anything to drink: 何か飲むもの（to不定詞の形容詞用法）",
            translation: {
                literal: "あなたは持っていますか [V] 何か飲むものを [O]？",
                natural: "何か飲むものはありますか？",
                intermediate: "A: 何か飲むものはありますか？\nB: はい、お茶があります。"
            },
            rationale: "【文法】anything to + 動詞原形 = 何か〜するもの。"
        },
        {
            id: 14,
            text: "Nancy is happy because the tomato plant she has ( ) in her garden is very big.",
            choices: ["grown", "grew", "grow", "grows"],
            choiceMeanings: ["育てた（過去分詞）", "育てた（過去形）", "育てる（原形）", "育てる（三単現）"],
            correctAnswer: 1,
            structure: "the tomato plant [S] (that) she has grown [V].",
            explanation: "has grown: 育てた（現在完了形）",
            translation: {
                literal: "トマトの苗は [S] 彼女が育てた [V]。",
                natural: "彼女が育てたトマトの苗。",
                intermediate: "ナンシーは庭で育てたトマトの苗がとても大きくなって喜んでいます。"
            },
            rationale: "【文法】has + 過去分詞 = 現在完了形。she has grown = 彼女が育てた。"
        },
        {
            id: 15,
            text: "A: Bob, you walked the dog, ( ) you?<br>B: No, Mom. I'll do it after dinner.",
            choices: ["weren't", "couldn't", "didn't", "shouldn't"],
            choiceMeanings: ["〜でなかった", "〜できなかった", "〜しなかった", "〜すべきでなかった"],
            correctAnswer: 3,
            structure: "you walked the dog, didn't you?",
            explanation: "付加疑問文: 肯定文 + didn't you?（〜したよね？）",
            translation: {
                literal: "あなたは散歩させた、犬を、〜だよね？",
                natural: "犬の散歩したよね？",
                intermediate: "A: ボブ、犬の散歩はしたよね？\nB: いいえ、お母さん。夕食後にするよ。"
            },
            rationale: "【文法】付加疑問文。walked（過去形・肯定）に対して didn't you? を付ける。"
        }
    ]
};
