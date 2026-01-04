// Grade 2 (2級) - 2023年度 第2回検定
export const grade2_2023_2Data = {
    title: "2023年度第2回検定一次試験",
    questions: [
        {
            id: 1,
            text: "A: What do you think of your new high school, Paula?<br>B: It's great, Mr. Morgan. I like it better than my ( ) school.",
            choices: ["neutral", "exact", "previous", "appropriate"],
            choiceMeanings: ["中立的な", "正確な", "以前の", "適切な"],
            correctAnswer: 3,
            structure: "I [S] like [V] it [O] better than my previous school.",
            explanation: "previous: 以前の",
            translation: {
                literal: "私は [S] 好む [V] それを [O] 以前の学校よりも。",
                natural: "以前の学校より今の学校の方が好きです。",
                intermediate: "A: 新しい高校はどう思う、ポーラ？ B: 素晴らしいです、モーガン先生。以前の学校より好きです。"
            },
            rationale: "【文脈】新しい高校と比べて「以前の」学校より良い。"
        },
        {
            id: 2,
            text: "Having a part-time job is good for Kaoru because she needs extra money to spend, but one ( ) is that she cannot go out with her friends on weekends.",
            choices: ["structure", "baggage", "disadvantage", "lecture"],
            choiceMeanings: ["構造", "荷物", "欠点", "講義"],
            correctAnswer: 3,
            structure: {
                fullSentence: "One disadvantage is that she cannot go out with her friends on weekends.",
                mainClause: "One disadvantage [S] is [V] that節 [C]",
                thatClause: "she [S'] cannot go out [V'] with her friends [M] on weekends [M] → that節（補語）",
                grammarPoint: "A is that S+V （that節が補語になる構文）"
            },
            explanation: "disadvantage: 欠点、デメリット",
            translation: {
                literal: "1つの欠点は [S] である [V] 彼女が出かけられないこと [C]。",
                natural: "1つの欠点は、週末に友達と出かけられないことです。",
                intermediate: "カオルにとってアルバイトは良いことです。使うお金が必要だからです。しかし、1つの欠点は週末に友達と出かけられないことです。"
            },
            rationale: "【文脈】アルバイトは良いが、1つの「欠点」は週末に友達と出かけられないこと。"
        },
        {
            id: 3,
            text: "After a series of financial scandals, many people began to demand that the government make rules to ( ) banks more strictly.",
            choices: ["regulate", "reproduce", "irritate", "impress"],
            choiceMeanings: ["規制する", "再生産する", "苛立たせる", "感動させる"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Many people began to demand that the government make rules to regulate banks more strictly.",
                mainClause: "Many people [S] began [V] to demand [O:to不定詞]",
                thatClause: "the government [S'] make [V':仿定法現在] rules [O'] to regulate banks [M:to不定詞] → demandのthat節",
                grammarPoint: "demand that S (should) do （要求のthat節：仿定法現在）"
            },
            explanation: "regulate: 規制する",
            translation: {
                literal: "多くの人々は [S] 要求し始めた [V] 政府が銀行を規制すること [O]。",
                natural: "多くの人々が、政府に銀行をより厳しく規制するルールを作るよう要求し始めた。",
                intermediate: "一連の金融スキャンダルの後、多くの人々が政府に銀行をより厳しく規制するルールを作るよう要求し始めました。"
            },
            rationale: "【文脈】金融スキャンダル後、銀行をより厳しく「規制」するルールを求めた。"
        },
        {
            id: 4,
            text: "David felt the job interview had gone badly, so he thought that the letter from the company would be a ( ). He was surprised to find he had actually got the job.",
            choices: ["symptom", "rejection", "biography", "contribution"],
            choiceMeanings: ["症状", "不採用（拒絶）", "伝記", "貢献"],
            correctAnswer: 2,
            structure: "He [S] thought [V] the letter would be a rejection [O].",
            explanation: "rejection: 拒絶、不採用通知",
            translation: {
                literal: "彼は [S] 思った [V] 手紙は不採用通知だろうと [O]。",
                natural: "彼は会社からの手紙が不採用通知だと思った。",
                intermediate: "デビッドは面接がうまくいかなかったと感じたので、会社からの手紙は不採用通知だと思いました。実際に採用されたことを知って驚きました。"
            },
            rationale: "【文脈】面接がうまくいかなかったので「不採用」通知だと思った。"
        },
        {
            id: 5,
            text: "When the police found the escaped criminal hiding in an old warehouse, they approached him ( ).",
            choices: ["partially", "temporarily", "regionally", "cautiously"],
            choiceMeanings: ["部分的に", "一時的に", "地域的に", "慎重に"],
            correctAnswer: 4,
            structure: "They [S] approached [V] him [O] cautiously.",
            explanation: "cautiously: 慎重に",
            translation: {
                literal: "彼らは [S] 近づいた [V] 彼に [O] 慎重に。",
                natural: "警察は慎重に彼に近づいた。",
                intermediate: "警察が逃亡犯が古い倉庫に隠れているのを見つけたとき、慎重に彼に近づきました。"
            },
            rationale: "【文脈】逃亡犯に「慎重に」近づいた。"
        },
        {
            id: 6,
            text: "Chris ( ) his invitation to the barbecue party to friends, neighbors, and relatives. He wanted as many people as possible to come.",
            choices: ["removed", "extended", "compared", "proved"],
            choiceMeanings: ["取り除いた", "拡大した", "比較した", "証明した"],
            correctAnswer: 2,
            structure: "Chris [S] extended [V] his invitation [O] to friends.",
            explanation: "extended: 拡大した、広げた",
            translation: {
                literal: "クリスは [S] 広げた [V] 招待を [O] 友人たちに。",
                natural: "クリスは友人、近所の人、親戚にバーベキューパーティーへの招待を広げた。",
                intermediate: "クリスは友人、近所の人、親戚にバーベキューパーティーへの招待を広げました。できるだけ多くの人に来てほしかったのです。"
            },
            rationale: "【文脈】多くの人に来てほしいので招待を「拡大した」。"
        },
        {
            id: 7,
            text: "The rock band's ( ) only lasted a few months. After radio stations stopped playing the band's songs, people soon forgot about it.",
            choices: ["shade", "area", "fame", "origin"],
            choiceMeanings: ["影", "エリア", "名声", "起源"],
            correctAnswer: 3,
            structure: "The band's fame [S] only lasted [V] a few months.",
            explanation: "fame: 名声",
            translation: {
                literal: "バンドの名声は [S] 続いただけ [V] 数か月。",
                natural: "そのロックバンドの名声は数か月しか続かなかった。",
                intermediate: "そのロックバンドの名声は数か月しか続きませんでした。ラジオ局がバンドの曲を流すのをやめた後、人々はすぐに忘れてしまいました。"
            },
            rationale: "【文脈】バンドの「名声」は数か月しか続かなかった。"
        },
        {
            id: 8,
            text: "Whenever Keith goes traveling, he ( ) his luggage very carefully. He once had a bag stolen on a train, so he always keeps his things where he can see them.",
            choices: ["guards", "carves", "divorces", "accelerates"],
            choiceMeanings: ["守る", "彫る", "離婚する", "加速する"],
            correctAnswer: 1,
            structure: "He [S] guards [V] his luggage [O] very carefully.",
            explanation: "guards: 守る、見張る",
            translation: {
                literal: "彼は [S] 守る [V] 荷物を [O] とても慎重に。",
                natural: "彼は荷物をとても慎重に見守る。",
                intermediate: "キースは旅行するときはいつも、荷物をとても慎重に見守ります。電車で一度カバンを盗まれたので、いつも目の届く場所に荷物を置いています。"
            },
            rationale: "【文脈】荷物を盗まれた経験があるので、荷物を「守る」。"
        },
        {
            id: 9,
            text: "Louis has worked at the same company since he graduated from college. This year, after four ( ) of working there, he is going to retire.",
            choices: ["jails", "decades", "principles", "societies"],
            choiceMeanings: ["刑務所", "10年間", "原則", "社会"],
            correctAnswer: 2,
            structure: "After four decades [副詞句], he [S] is going to retire [V].",
            explanation: "decades: 10年間（4 decades = 40年）",
            translation: {
                literal: "4つの10年間の後、彼は [S] 退職する予定だ [V]。",
                natural: "40年間働いた後、彼は退職する予定です。",
                intermediate: "ルイスは大学卒業以来、同じ会社で働いてきました。今年、40年間働いた後で退職する予定です。"
            },
            rationale: "【文脈】大学卒業後働き続け、4「decade（10年間）」後に退職。"
        },
        {
            id: 10,
            text: "Kate took a walk by the sea yesterday. Some of the rocks were wet and slippery, so she often had to ( ) herself to avoid falling into the water.",
            choices: ["punish", "defeat", "filter", "steady"],
            choiceMeanings: ["罰する", "打ち負かす", "ろ過する", "安定させる"],
            correctAnswer: 4,
            structure: "She [S] had to steady [V] herself [O] to avoid falling.",
            explanation: "steady: 安定させる、しっかりさせる",
            translation: {
                literal: "彼女は [S] 安定させなければならなかった [V] 自分を [O] 落ちないために。",
                natural: "彼女は水に落ちないように自分の体勢を安定させなければならなかった。",
                intermediate: "ケイトは昨日海辺を散歩しました。岩のいくつかは濡れて滑りやすかったので、水に落ちないよう頻繁に体勢を安定させなければなりませんでした。"
            },
            rationale: "【文脈】岩が滑りやすいので、自分を「安定させて」転落を防いだ。"
        },
        {
            id: 11,
            text: "Olivia worked for her father for eight years and eventually ( ) his business. She ran the company very successfully and even opened a branch overseas.",
            choices: ["wrote up", "took over", "kept off", "fell through"],
            choiceMeanings: ["書き上げた", "引き継いだ", "離れていた", "失敗に終わった"],
            correctAnswer: 2,
            structure: "Olivia [S] eventually took over [V] his business [O].",
            explanation: "took over: 引き継いだ",
            translation: {
                literal: "オリビアは [S] 最終的に引き継いだ [V] 彼の事業を [O]。",
                natural: "オリビアは最終的に父親の事業を引き継いだ。",
                intermediate: "オリビアは8年間父親のもとで働き、最終的に事業を引き継ぎました。彼女は会社をとても成功裏に経営し、海外にも支店を開きました。"
            },
            rationale: "【文脈】父のもとで8年働いた後、事業を「引き継いだ」。"
        },
        {
            id: 12,
            text: "A: Well, tomorrow our vacation ( ) an end, and we have to fly back home.<br>B: I know. I don't want to leave. I wish we could stay here longer.",
            choices: ["goes for", "brings up", "takes out", "comes to"],
            choiceMeanings: ["目指す", "育てる", "取り出す", "到来する"],
            correctAnswer: 4,
            structure: "Our vacation [S] comes to [V] an end.",
            explanation: "comes to: ～になる（come to an end = 終わる）",
            translation: {
                literal: "私たちの休暇は [S] 到来する [V] 終わりに。",
                natural: "明日、私たちの休暇が終わります。",
                intermediate: "A: 明日、休暇が終わって帰らなければなりません。 B: わかっています。帰りたくないです。もっと長く滞在できたらいいのに。"
            },
            rationale: "【文脈】明日休暇が「終わりを迎える」。"
        },
        {
            id: 13,
            text: "Gary has been having problems with his knees ( ) for several months. Yesterday, they were really painful. They are better today, but he has decided to see his doctor anyway.",
            choices: ["on and off", "up and down", "side by side", "one by one"],
            choiceMeanings: ["時々", "上下に", "並んで", "一つずつ"],
            correctAnswer: 1,
            structure: "Gary [S] has been having [V] problems [O] on and off.",
            explanation: "on and off: 時々、断続的に",
            translation: {
                literal: "ゲイリーは [S] 抱えている [V] 問題を [O] 時々。",
                natural: "ゲイリーは数か月間、時々膝に問題を抱えている。",
                intermediate: "ゲイリーは数か月間、時々膝に問題を抱えています。昨日はとても痛かったです。今日は良くなっていますが、とにかく医者に診てもらうことにしました。"
            },
            rationale: "【文脈】膝の問題が数か月間「時々」起きている。"
        },
        {
            id: 14,
            text: "A storm caused the power to go off in Greenville yesterday. Residents had to ( ) electricity for two hours before the supply was restored.",
            choices: ["drop by", "come across", "go against", "do without"],
            choiceMeanings: ["立ち寄る", "偶然見つける", "反対する", "なしで済ます"],
            correctAnswer: 4,
            structure: "Residents [S] had to do without [V] electricity [O].",
            explanation: "do without: ～なしで済ます",
            translation: {
                literal: "住民は [S] なしで済まさなければならなかった [V] 電気を [O]。",
                natural: "住民は2時間電気なしで過ごさなければならなかった。",
                intermediate: "昨日、嵐でグリーンビルの電力が止まりました。住民は供給が復旧するまで2時間電気なしで過ごさなければなりませんでした。"
            },
            rationale: "【文脈】2時間電気「なしで過ごさなければ」ならなかった。"
        },
        {
            id: 15,
            text: "A: Where's Gerald? He should have been here half an hour ago.<br>B: That's ( ) him. I don't think he ever arrives on time.",
            choices: ["typical of", "inferior to", "grateful for", "patient with"],
            choiceMeanings: ["典型的な", "劣る", "感謝して", "忍耐強い"],
            correctAnswer: 1,
            structure: "That [S] is [V] typical of him [C].",
            explanation: "typical of: ～らしい、典型的な",
            translation: {
                literal: "それは [S] である [V] 彼に典型的な [C]。",
                natural: "それは彼らしいね。",
                intermediate: "A: ジェラルドはどこ？30分前に来ているはずだったのに。 B: それは彼らしいね。彼が時間通りに来たことないと思う。"
            },
            rationale: "【文脈】遅刻は彼「らしい」こと。That's typical of him。"
        },
        {
            id: 16,
            text: "Ms. Williams said that her students could have one more week to finish their history assignments, but anyone who ( ) their work late would be in trouble.",
            choices: ["brought down", "brought out", "turned in", "turned on"],
            choiceMeanings: ["下げた", "出した", "提出した", "つけた"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Anyone who turned in their work late would be in trouble.",
                mainClause: "Anyone [S] would be [V] in trouble [C]",
                relativeClause: "who [S'] turned in [V'] their work [O'] late [M] → 関係代名詞節（Anyoneを修飾）",
                grammarPoint: "turn in = 「提出する」"
            },
            explanation: "turned in: 提出した",
            translation: {
                literal: "遅れて課題を提出した人は [S] になる [V] 問題に [C]。",
                natural: "課題を遅れて提出した人は問題になります。",
                intermediate: "ウィリアムズ先生は、生徒たちに歴史の課題を終えるためにあと1週間与えると言いましたが、遅れて提出した人は問題になると言いました。"
            },
            rationale: "【文脈】課題を遅れて「提出した」人は問題になる。"
        },
        {
            id: 17,
            text: "Because Angela's family was ( ), she did not have to worry about the cost of going to university.",
            choices: ["close up", "next up", "far off", "well off"],
            choiceMeanings: ["近い", "次の", "遠い", "裕福な"],
            correctAnswer: 4,
            structure: "Angela's family [S] was [V] well off [C].",
            explanation: "well off: 裕福な",
            translation: {
                literal: "アンジェラの家族は [S] だった [V] 裕福な [C]。",
                natural: "アンジェラの家族は裕福だった。",
                intermediate: "アンジェラの家族は裕福だったので、大学に行く費用を心配する必要がありませんでした。"
            },
            rationale: "【文脈】家族が「裕福」だったので大学費用の心配がなかった。"
        },
        {
            id: 18,
            text: "Eisuke is the fastest runner at his school. He is sure ( ) the 100-meter race at the sports festival.",
            choices: ["to win", "win", "will win", "won"],
            choiceMeanings: ["勝つ（不定詞）", "勝つ（原形）", "勝つ（未来形）", "勝った（過去形）"],
            correctAnswer: 1,
            structure: "He [S] is sure [V] to win [C].",
            explanation: "to win: be sure to do = きっと～する",
            translation: {
                literal: "彼は [S] 確実だ [V] 勝つことが [C]。",
                natural: "彼はきっと勝つだろう。",
                intermediate: "エイスケは学校で一番速いランナーです。彼は体育祭の100メートル走できっと勝つでしょう。"
            },
            rationale: "【文法】be sure to do（きっと～する）の形。"
        },
        {
            id: 19,
            text: "A: Brian, you ( ) put so much salt on your food. Eating too much salt can be bad for you.<br>B: OK, Mom. I won't.",
            choices: ["to not ought", "not ought to", "ought not to", "to ought not"],
            choiceMeanings: ["（誤った語順）", "（誤った語順）", "～すべきでない", "（誤った語順）"],
            correctAnswer: 3,
            structure: "You [S] ought not to put [V] so much salt [O].",
            explanation: "ought not to: ～すべきでない",
            translation: {
                literal: "あなたは [S] 入れるべきではない [V] たくさんの塩を [O]。",
                natural: "食べ物にそんなにたくさん塩を入れるべきではない。",
                intermediate: "A: ブライアン、食べ物にそんなにたくさん塩を入れるべきではないよ。塩の取りすぎは体に悪いよ。 B: わかった、お母さん。やめるよ。"
            },
            rationale: "【文法】ought not to do（～すべきでない）の正しい語順。"
        },
        {
            id: 20,
            text: "Miranda screamed for joy ( ) moment she heard that she had got into Budgeforth College.",
            choices: ["the", "on", "at", "a"],
            choiceMeanings: ["the", "on", "at", "a"],
            correctAnswer: 1,
            structure: "Miranda [S] screamed [V] the moment she heard.",
            explanation: "the moment: ～した瞬間に",
            translation: {
                literal: "ミランダは [S] 叫んだ [V] 聞いた瞬間に。",
                natural: "ミランダは聞いた瞬間、喜びの声を上げた。",
                intermediate: "ミランダはバッジフォース大学に合格したと聞いた瞬間、喜びの声を上げました。"
            },
            rationale: "【文法】the moment S+V = ～した瞬間に（接続詞的用法）。"
        }
    ]
};
