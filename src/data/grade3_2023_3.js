export const grade3_2023_3Data = {
    questions: [
        {
            id: 1,
            text: "A: How was your fishing trip last weekend, Ann?<br>B: Well, I didn't catch any fish. But I learned a lot, so it was an interesting ( ).",
            choices: ["experience", "sound", "fact", "fashion"],
            choiceMeanings: ["経験", "音", "事実", "流行"],
            correctAnswer: 1,
            structure: "it [S] was [V] an interesting experience [C].",
            explanation: "正解単語: experience (経験)。釣れなかったが面白い「経験」だった。",
            translation: {
                literal: "それは [S] でした [V] 面白い経験 [C]。",
                natural: "それは面白い経験でした。",
                intermediate: "A: 先週末の釣り旅行はどうだった、アン？\nB: うーん、魚は釣れなかったけど、たくさん学べたから面白い経験になったよ。"
            },
            rationale: "文脈から、旅行全体の感想を表す語を選ぶ。「面白い経験」が適切。"
        },
        {
            id: 2,
            text: "A: You work too much. You should ( ) more.<br>B: I know. I'll take a vacation soon.",
            choices: ["belong", "return", "relax", "last"],
            choiceMeanings: ["所属する", "戻る", "リラックスする", "続く"],
            correctAnswer: 3,
            structure: "You [S] should relax [V] more [M].",
            explanation: "正解単語: relax (リラックスする)。働きすぎているので「もっとリラックスすべき」。",
            translation: {
                literal: "あなたは [S] リラックスすべきです [V] もっと [M]。",
                natural: "あなたはもっとリラックスすべきです。",
                intermediate: "A: 働きすぎだよ。もっとリラックスしなきゃ。\nB: わかってる。もうすぐ休暇を取るよ。"
            },
            rationale: "「働きすぎ」という指摘と「休暇を取る」という返答から、休息を勧める relax が適切。"
        },
        {
            id: 3,
            text: "Ken's sister is a ( ). She writes for a newspaper in New York.",
            choices: ["dentist", "coach", "journalist", "performer"],
            choiceMeanings: ["歯医者", "コーチ", "ジャーナリスト", "パフォーマー"],
            correctAnswer: 3,
            structure: "She [S] writes [V] for a newspaper [M] in New York [M].",
            explanation: "正解単語: journalist (ジャーナリスト)。新聞記事を書いているのでジャーナリスト。",
            translation: {
                literal: "彼女は [S] 書いています [V] 新聞のために [M] ニューヨークで [M]。",
                natural: "彼女はニューヨークの新聞社で記事を書いています。",
                intermediate: "ケンの姉はジャーナリストです。彼女はニューヨークの新聞社で記事を書いています。"
            },
            rationale: "「新聞のために書いている」という職業説明に合致するのは journalist。"
        },
        {
            id: 4,
            text: "The boy wanted to fly his ( ) in the park, but there was no wind.",
            choices: ["castle", "paper", "kite", "field"],
            choiceMeanings: ["城", "紙", "凧（たこ）", "野原"],
            correctAnswer: 3,
            structure: "The boy [S] wanted to fly [V] his kite [O] in the park [M].",
            explanation: "正解単語: kite (凧)。風がなくて飛ばせなかったものと言えば「凧」。fly a kite で「凧揚げをする」。",
            translation: {
                literal: "その少年は [S] 飛ばしたかった [V] 彼の凧を [O] 公園で [M]。",
                natural: "その少年は公園で凧揚げをしたかったです。",
                intermediate: "その少年は公園で凧揚げをしたかったのですが、風がありませんでした。"
            },
            rationale: "fly（飛ばす）と no wind（風がない）という文脈から kite が正解。"
        },
        {
            id: 5,
            text: "A: Did someone just ( ) on the door?<br>B: I'll go and check.",
            choices: ["knock", "tell", "feel", "drop"],
            choiceMeanings: ["ノックする", "話す", "感じる", "落とす"],
            correctAnswer: 1,
            structure: "Did someone [S] just knock [V] on the door [M]?",
            explanation: "正解単語: knock (ノックする)。ドアについて行う動作であり、確認しに行く文脈から「ノック」が適切。",
            translation: {
                literal: "誰かが [S] ちょうどノックしましたか [V] ドアを [M]？",
                natural: "今誰かドアをノックしましたか？",
                intermediate: "A: 今誰かドアをノックした？\nB: 見てくるよ。"
            },
            rationale: "on the door と共に使い、誰かが来た合図となるのは knock。"
        },
        {
            id: 6,
            text: "Some people go home on December 25 because they want to ( ) Christmas with their families.",
            choices: ["protect", "celebrate", "touch", "invite"],
            choiceMeanings: ["守る", "祝う", "触る", "招待する"],
            correctAnswer: 2,
            structure: "they [S] want to celebrate [V] Christmas [O] with their families [M].",
            explanation: "正解単語: celebrate (祝う)。クリスマスを家族と「祝う」ために帰省する。",
            translation: {
                literal: "彼らは [S] 祝いたい [V] クリスマスを [O] 家族と一緒に [M]。",
                natural: "彼らは家族と一緒にクリスマスを祝いたいのです。",
                intermediate: "12月25日に帰省する人もいます、家族と一緒にクリスマスを祝いたいからです。"
            },
            rationale: "クリスマス等の行事を行う動きは celebrate。"
        },
        {
            id: 7,
            text: "A: Why didn't you go to the movies with your friends?<br>B: ( ) could go with me. They were busy.",
            choices: ["Nothing", "Nobody", "Somewhere", "Anyone"],
            choiceMeanings: ["何も〜ない", "誰も〜ない", "どこか", "誰か"],
            correctAnswer: 2,
            structure: "Nobody [S] could go [V] with me [M].",
            explanation: "正解単語: Nobody (誰も〜ない)。友達が忙しかったので、「誰も」一緒に行けなかった。",
            translation: {
                literal: "誰も [S] 行くことができなかった [V] 私と一緒に [M]。",
                natural: "誰も私と一緒には行けませんでした。",
                intermediate: "A: なんで友達と映画に行かなかったの？\nB: 誰も一緒に行けなかったんだ。みんな忙しくて。"
            },
            rationale: "They were busy (みんな忙しかった) という理由から、行ける人がいなかったことを示す Nobody を選ぶ。"
        },
        {
            id: 8,
            text: "A: It takes at ( ) six hours to drive to Tokyo from here, so you should leave early.<br>B: I'll leave at seven.",
            choices: ["point", "least", "date", "market"],
            choiceMeanings: ["点", "最も少ない（littleの最上級）", "日付", "市場"],
            correctAnswer: 2,
            structure: "It [S] takes [V] at least six hours [O].",
            explanation: "正解単語: least。at least で「少なくとも」という熟語。",
            translation: {
                literal: "それは [S] かかります [V] 少なくとも6時間 [O]。",
                natural: "それは少なくとも6時間はかかります。",
                intermediate: "A: ここから東京まで車で少なくとも6時間はかかるから、早く出たほうがいいよ。\nB: 7時に出るよ。"
            },
            rationale: "at least (少なくとも) は頻出熟語。"
        },
        {
            id: 9,
            text: "A: Can I put my jacket in your bag?<br>B: No. It's full ( ) books.",
            choices: ["of", "in", "on", "to"],
            choiceMeanings: ["〜の", "〜の中に", "〜の上に", "〜へ"],
            correctAnswer: 1,
            structure: "It [S] is [V] full [C] of books [M].",
            explanation: "正解単語: of。be full of 〜 で「〜で満たされている、いっぱいだ」。",
            translation: {
                literal: "それは [S] です [V] いっぱい [C] 本で [M]。",
                natural: "それは本でいっぱいです。",
                intermediate: "A: あなたのバッグに上着を入れてもいい？\nB: だめ。本でいっぱいだから。"
            },
            rationale: "It is full of ... という形を覚えているかが鍵。"
        },
        {
            id: 10,
            text: "A: Many people don't like the new action movie, but in my ( ), it's great.<br>B: I really enjoyed it, too.",
            choices: ["opinion", "goal", "purpose", "guess"],
            choiceMeanings: ["意見", "目標", "目的", "推測"],
            correctAnswer: 1,
            structure: "in my opinion [M], it [S] 's [V] great [C].",
            explanation: "正解単語: opinion (意見)。in my opinion で「私の意見では」という定型表現。",
            translation: {
                literal: "私の意見では [M]、それは [S] です [V] 素晴らしい [C]。",
                natural: "私の意見では、それは素晴らしいです。",
                intermediate: "A: あの新しいアクション映画、嫌いな人が多いけど、私の意見では最高だよ。\nB: 私もすごく楽しめたよ。"
            },
            rationale: "in my ... と続き、自分の考えを述べる文脈なので opinion。"
        },
        {
            id: 11,
            text: "Fiona was sick in ( ) all day, so her mother made her some hot soup.",
            choices: ["dictionary", "place", "bed", "space"],
            choiceMeanings: ["辞書", "場所", "ベッド", "空間"],
            correctAnswer: 3,
            structure: "Fiona [S] was [V] sick [C] in bed [M] all day [M].",
            explanation: "正解単語: bed (ベッド)。sick in bed で「病気で寝込んでいる」。",
            translation: {
                literal: "フィオナは [S] でした [V] 病気 [C] 寝込んで [M] 一日中 [M]。",
                natural: "フィオナは一日中病気で寝込んでいました。",
                intermediate: "フィオナは一日中病気で寝込んでいたので、お母さんが温かいスープを作ってくれました。"
            },
            rationale: "sick と共に使い、寝込んでいることを表すのは in bed。"
        },
        {
            id: 12,
            text: "When Tom woke up on Christmas Day, he saw a box by his bed. He opened it and found ( ) there was a camera inside.",
            choices: ["of", "under", "for", "out"],
            choiceMeanings: ["〜の", "〜の下に", "〜のために", "外へ"],
            correctAnswer: 4,
            structure: "he [S] found out [V] there was a camera inside [O].",
            explanation: "正解単語: out。found out (that) ... で「...ということがわかった」。",
            translation: {
                literal: "彼は [S] 気がついた [V] 中にカメラがあると [O]。",
                natural: "彼は中にカメラが入っているとわかりました。",
                intermediate: "クリスマスの朝、トムが起きると枕元に箱があった。開けてみると、中にカメラが入っているのがわかった。"
            },
            rationale: "find out = discover (発見する、知る)。"
        },
        {
            id: 13,
            text: "Stephen's sister will move the boxes in Stephen's room because she's ( ) than him.",
            choices: ["strongest", "strong", "strongly", "stronger"],
            choiceMeanings: ["最も強い", "強い", "強く", "より強い"],
            correctAnswer: 4,
            structure: "she [S] 's [V] stronger [C] than him [M].",
            explanation: "正解単語: stronger (より強い)。than (〜より) があるので比較級。",
            translation: {
                literal: "彼女は [S] です [V] より強い [C] 彼よりも [M]。",
                natural: "彼女のほうが彼よりも強いです。",
                intermediate: "スティーブンの姉（妹）がスティーブンの部屋の箱を運んでくれる。彼女のほうが力持ちだからだ。"
            },
            rationale: "than に呼応する比較級 stronger が正解。"
        },
        {
            id: 14,
            text: "Mr. Morris has ( ) many different kinds of flowers during his trip to Japan.",
            choices: ["see", "seen", "saw", "seeing"],
            choiceMeanings: ["見る", "見た（過去分詞）", "見た（過去形）", "見ること"],
            correctAnswer: 2,
            structure: "Mr. Morris [S] has seen [V] many different kinds of flowers [O].",
            explanation: "正解単語: seen (見た)。has + 過去分詞で現在完了形（経験）を作る。",
            translation: {
                literal: "モリス氏は [S] 見たことがあります [V] 多くの異なる種類の花を [O]。",
                natural: "モリス氏は多くの種類の花を見ました。",
                intermediate: "モリス氏は日本旅行中に多くの種類の花を見ました。"
            },
            rationale: "助動詞hasがあるので現在完了形。seeの過去分詞seenを選ぶ。"
        },
        {
            id: 15,
            text: "This is the oldest picture in the museum. It was ( ) more than 500 years ago.",
            choices: ["paint", "painting", "paints", "painted"],
            choiceMeanings: ["描く", "描いている", "描く（三人称）", "描かれた"],
            correctAnswer: 4,
            structure: "It [S] was painted [V] more than 500 years ago [M].",
            explanation: "正解単語: painted (描かれた)。絵は「描かれる」ものなので受動態。",
            translation: {
                literal: "それは [S] 描かれました [V] 500年以上前に [M]。",
                natural: "それは500年以上前に描かれました。",
                intermediate: "これはこの博物館で最も古い絵です。500年以上前に描かれました。"
            },
            rationale: "It (絵) が主語なので、受動態 was painted が適切。"
        }
    ]
};
