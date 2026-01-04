// Grade Pre-1 (準1級) - 2021年度 第1回検定
export const gradePre1_2021_1Data = {
    title: "2021年度第1回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "A: Thanks for showing me the outline of your sales presentation. It's good, but it's a bit ( ) in some places.<br>B: I guess I do repeat some information too much. I'll try to take some of it out.",
            choices: ["decisive", "subjective", "redundant", "distinct"],
            choiceMeanings: ["決定的な", "主観的な", "冗長な", "明確な"],
            correctAnswer: 3,
            structure: "it [S] 's [V] a bit redundant [C] in some places [M].",
            explanation: "redundant: 冗長な、余分な",
            translation: {
                literal: "それは [S] です [V] 少し冗長 [C] いくつかの場所で [M]。",
                natural: "いくつかの場所で少し冗長です。",
                intermediate: "A: 営業プレゼンのアウトラインを見せてくれてありがとう。良いけど、いくつかの場所で少し冗長だね。\nB: 確かに情報を繰り返しすぎているね。いくつか削除してみるよ。"
            },
            rationale: "【文脈】repeat some information too much（情報を繰り返しすぎている） → redundant（冗長な）。"
        },
        {
            id: 2,
            text: "Lisa went to the interview even though she thought there was a low ( ) of her getting the job. As she expected, she was not hired.",
            choices: ["restoration", "credibility", "contention", "probability"],
            choiceMeanings: ["修復", "信頼性", "論争", "可能性"],
            correctAnswer: 4,
            structure: "there [S] was [V] a low probability [C] of her getting the job [M].",
            explanation: "probability: 可能性、確率",
            translation: {
                literal: "あった [V] 低い可能性が [C] 彼女が仕事を得る [M]。",
                natural: "仕事を得られる可能性は低かった。",
                intermediate: "リサは仕事を得られる可能性が低いと思っていたが、面接に行った。予想通り、彼女は採用されなかった。"
            },
            rationale: "【文脈】As she expected, she was not hired（予想通り採用されなかった） → probability（可能性）が低い。"
        },
        {
            id: 3,
            text: "It is sadly ( ) that, in developing countries, many of the farmers who grow nutritious crops for export do not have enough food to feed their own families.",
            choices: ["indefinite", "ironic", "restless", "superficial"],
            choiceMeanings: ["不定の", "皮肉な", "落ち着かない", "表面的な"],
            correctAnswer: 2,
            structure: "It [S] is [V] sadly ironic [C] that... [M].",
            explanation: "ironic: 皮肉な",
            translation: {
                literal: "それは [S] です [V] 悲しいことに皮肉な [C]。",
                natural: "悲しいことに皮肉だ。",
                intermediate: "開発途上国では、輸出用の栄養価の高い作物を育てている農家の多くが、自分の家族を養うのに十分な食料がないというのは、悲しいことに皮肉なことだ。"
            },
            rationale: "【文脈】grow nutritious crops for export... do not have enough food（輸出用作物を育てる...食料が足りない） → ironic（皮肉な）。"
        },
        {
            id: 4,
            text: "The explosion at the chemical factory ( ) great damage on the local environment. It will take years for wildlife to fully recover in the region.",
            choices: ["inflicted", "enhanced", "vanished", "perceived"],
            choiceMeanings: ["与えた", "高めた", "消えた", "認識した"],
            correctAnswer: 1,
            structure: "The explosion [S] inflicted [V] great damage [O] on the local environment [M].",
            explanation: "inflict: （損害・苦痛を）与える",
            translation: {
                literal: "爆発は [S] 与えた [V] 大きな損害を [O] 地域の環境に [M]。",
                natural: "爆発は地域の環境に大きな損害を与えた。",
                intermediate: "化学工場での爆発は地域の環境に大きな損害を与えた。この地域で野生生物が完全に回復するには何年もかかるだろう。"
            },
            rationale: "【文脈】great damage... take years to recover（大きな損害...回復に何年も） → inflicted（与えた）。"
        },
        {
            id: 5,
            text: "Some say the best way to overcome a ( ) is to expose oneself to what one fears. For example, people who are afraid of mice should try holding one.",
            choices: ["temptation", "barricade", "phobia", "famine"],
            choiceMeanings: ["誘惑", "バリケード", "恐怖症", "飢饉"],
            correctAnswer: 3,
            structure: "the best way to overcome a phobia [S] is [V] to expose oneself to what one fears [C].",
            explanation: "phobia: 恐怖症",
            translation: {
                literal: "恐怖症を克服する最良の方法は [S] です [V] 恐れるものに自分をさらすこと [C]。",
                natural: "恐怖症を克服する最良の方法は恐れるものに自分をさらすことだ。",
                intermediate: "恐怖症を克服する最良の方法は恐れるものに自分をさらすことだと言う人もいる。例えば、ネズミが怖い人は手に持ってみるべきだ。"
            },
            rationale: "【文脈】afraid of mice... expose oneself to what one fears（ネズミが怖い...恐れるものにさらす） → phobia（恐怖症）。"
        },
        {
            id: 6,
            text: "English classes at the university were required, but students were ( ) from them if they could prove they had advanced ability in the language.",
            choices: ["exempted", "prosecuted", "commanded", "quantified"],
            choiceMeanings: ["免除された", "起訴された", "命令された", "数量化された"],
            correctAnswer: 1,
            structure: "students [S] were exempted [V] from them [M].",
            explanation: "exempt: 免除する",
            translation: {
                literal: "学生たちは [S] 免除された [V] それらから [M]。",
                natural: "学生たちはそれらから免除された。",
                intermediate: "大学では英語の授業は必修だったが、言語の高度な能力を証明できれば学生は免除された。"
            },
            rationale: "【文脈】required, but... if they could prove advanced ability（必修だが...高度な能力を証明できれば） → exempted（免除された）。"
        },
        {
            id: 7,
            text: "E-mail and text messaging have ( ) the way people write. Many people shorten words and ignore traditional rules of grammar.",
            choices: ["transformed", "officiated", "synthesized", "disarmed"],
            choiceMeanings: ["変革した", "司会した", "合成した", "武装解除した"],
            correctAnswer: 1,
            structure: "E-mail and text messaging [S] have transformed [V] the way people write [O].",
            explanation: "transform: 変革する、変える",
            translation: {
                literal: "Eメールとテキストメッセージは [S] 変革した [V] 人々の書き方を [O]。",
                natural: "Eメールとテキストメッセージは人々の書き方を変革した。",
                intermediate: "Eメールとテキストメッセージは人々の書き方を変革した。多くの人が単語を短くし、伝統的な文法のルールを無視している。"
            },
            rationale: "【文脈】shorten words and ignore traditional rules（単語を短くし、伝統的なルールを無視） → transformed（変革した）。"
        },
        {
            id: 8,
            text: "Some analysts think the new treaty on CO₂ emissions is a ( ) in the fight against global warming. \"This is the most important environmental treaty ever signed,\" said one.",
            choices: ["milestone", "vigor", "backlog", "confession"],
            choiceMeanings: ["画期的な出来事", "活力", "未処理の仕事", "告白"],
            correctAnswer: 1,
            structure: "the new treaty [S] is [V] a milestone [C] in the fight against global warming [M].",
            explanation: "milestone: 画期的な出来事、マイルストーン",
            translation: {
                literal: "新しい条約は [S] です [V] 画期的な出来事 [C] 地球温暖化との戦いにおいて [M]。",
                natural: "新しい条約は地球温暖化との戦いにおいて画期的な出来事だ。",
                intermediate: "一部のアナリストは、CO₂排出に関する新しい条約は地球温暖化との戦いにおいて画期的な出来事だと考えている。「これは今まで署名された中で最も重要な環境条約だ」と一人は言った。"
            },
            rationale: "【文脈】most important environmental treaty ever signed（これまでで最も重要な環境条約） → milestone（画期的な出来事）。"
        },
        {
            id: 9,
            text: "Lying on the sunny beach with her husband on their vacation, Roberta felt ( ) happy. She had never been so content.",
            choices: ["barely", "profoundly", "improperly", "harshly"],
            choiceMeanings: ["かろうじて", "深く", "不適切に", "厳しく"],
            correctAnswer: 2,
            structure: "Roberta [S] felt [V] profoundly happy [C].",
            explanation: "profoundly: 深く、心から",
            translation: {
                literal: "ロベルタは [S] 感じた [V] 深く幸せだと [C]。",
                natural: "ロベルタは深く幸せを感じた。",
                intermediate: "休暇中、夫と一緒に日当たりの良いビーチに横たわりながら、ロベルタは深く幸せを感じた。彼女はこれほど満足したことがなかった。"
            },
            rationale: "【文脈】never been so content（これほど満足したことがない） → profoundly（深く）。"
        },
        {
            id: 10,
            text: "Nadine spends an hour thoroughly cleaning her apartment every day, so the entire place is ( ).",
            choices: ["spotless", "minute", "rugged", "impartial"],
            choiceMeanings: ["染み一つない", "微小な", "ごつごつした", "公平な"],
            correctAnswer: 1,
            structure: "the entire place [S] is [V] spotless [C].",
            explanation: "spotless: 染み一つない、清潔な",
            translation: {
                literal: "場所全体は [S] です [V] 染み一つない [C]。",
                natural: "場所全体が染み一つない。",
                intermediate: "ナディーンは毎日1時間かけてアパートを徹底的に掃除しているので、場所全体が染み一つない。"
            },
            rationale: "【文脈】an hour thoroughly cleaning every day（毎日1時間徹底的に掃除） → spotless（染み一つない）。"
        },
        {
            id: 11,
            text: "After many poor performances, the rugby player was ( ) from his club's first team to its second team.",
            choices: ["inclined", "clinched", "demoted", "adapted"],
            choiceMeanings: ["傾いた", "確定した", "降格させられた", "適応した"],
            correctAnswer: 3,
            structure: "the rugby player [S] was demoted [V] from his club's first team to its second team [M].",
            explanation: "demote: 降格させる",
            translation: {
                literal: "ラグビー選手は [S] 降格させられた [V] クラブの1軍から2軍に [M]。",
                natural: "ラグビー選手はクラブの1軍から2軍に降格させられた。",
                intermediate: "多くの不振なパフォーマンスの後、ラグビー選手はクラブの1軍から2軍に降格させられた。"
            },
            rationale: "【文脈】poor performances... first team to second team（不振なパフォーマンス...1軍から2軍へ） → demoted（降格させられた）。"
        },
        {
            id: 12,
            text: "With no clear winner in the election, the new government consists of a ( ) that includes socialist, liberal, and green parties.",
            choices: ["gradation", "casualty", "coalition", "warranty"],
            choiceMeanings: ["段階", "死傷者", "連立", "保証"],
            correctAnswer: 3,
            structure: "the new government [S] consists of [V] a coalition [O].",
            explanation: "coalition: 連立、連合",
            translation: {
                literal: "新政府は [S] 構成されている [V] 連立から [O]。",
                natural: "新政府は連立で構成されている。",
                intermediate: "選挙で明確な勝者がいなかったため、新政府は社会党、自由党、緑の党を含む連立で構成されている。"
            },
            rationale: "【文脈】no clear winner... includes socialist, liberal, and green parties（明確な勝者なし...社会党、自由党、緑の党を含む） → coalition（連立）。"
        },
        {
            id: 13,
            text: "Mark spent more than a month in the hospital after becoming the victim of a ( ) bear attack.",
            choices: ["dazed", "vicious", "heartfelt", "superior"],
            choiceMeanings: ["ぼんやりした", "凶暴な", "心からの", "優れた"],
            correctAnswer: 2,
            structure: "a vicious bear attack [S].",
            explanation: "vicious: 凶暴な、悪意のある",
            translation: {
                literal: "凶暴なクマの攻撃 [S]。",
                natural: "凶暴なクマの攻撃。",
                intermediate: "マークは凶暴なクマの攻撃の犠牲者になった後、1か月以上入院した。"
            },
            rationale: "【文脈】spent more than a month in the hospital（1か月以上入院） → vicious（凶暴な）攻撃。"
        },
        {
            id: 14,
            text: "People have been growing a variety of plants for thousands of years, but wheat was one of the first food crops to be ( ) by humans.",
            choices: ["omitted", "thawed", "cultivated", "harassed"],
            choiceMeanings: ["省略された", "解凍された", "栽培された", "嫌がらせを受けた"],
            correctAnswer: 3,
            structure: "wheat [S] was [V] one of the first food crops to be cultivated [C] by humans [M].",
            explanation: "cultivate: 栽培する、耕す",
            translation: {
                literal: "小麦は [S] だった [V] 人間によって栽培された最初の食用作物の一つ [C]。",
                natural: "小麦は人間によって栽培された最初の食用作物の一つだった。",
                intermediate: "人々は何千年もの間さまざまな植物を育ててきたが、小麦は人間によって栽培された最初の食用作物の一つだった。"
            },
            rationale: "【文脈】growing plants for thousands of years... first food crops（何千年も植物を育てる...最初の食用作物） → cultivated（栽培された）。"
        },
        {
            id: 15,
            text: "A: Jan, how much of a tip do you think I should leave the waiter?<br>B: The ( ) has already been added to the bill, so you don't have to leave anything.",
            choices: ["gratuity", "module", "arsenal", "allotment"],
            choiceMeanings: ["チップ", "モジュール", "武器庫", "割り当て"],
            correctAnswer: 1,
            structure: "The gratuity [S] has already been added [V] to the bill [M].",
            explanation: "gratuity: チップ、心づけ",
            translation: {
                literal: "チップは [S] すでに追加された [V] 請求書に [M]。",
                natural: "チップはすでに請求書に追加されている。",
                intermediate: "A: ジャン、ウェイターにどのくらいのチップを残すべきだと思う？\nB: チップはすでに請求書に追加されているから、何も残す必要はないよ。"
            },
            rationale: "【文脈】tip... already been added to the bill（チップ...すでに請求書に追加） → gratuity（チップ）。"
        },
        {
            id: 16,
            text: "Glenn had no choice but to borrow money from his father to pay his rent. He had ( ) all his other options.",
            choices: ["delighted", "retraced", "revolted", "exhausted"],
            choiceMeanings: ["喜ばせた", "たどり直した", "反乱を起こした", "使い果たした"],
            correctAnswer: 4,
            structure: "He [S] had exhausted [V] all his other options [O].",
            explanation: "exhaust: 使い果たす、疲弊させる",
            translation: {
                literal: "彼は [S] 使い果たした [V] 他のすべての選択肢を [O]。",
                natural: "彼は他のすべての選択肢を使い果たした。",
                intermediate: "グレンは家賃を払うために父親からお金を借りるしかなかった。彼は他のすべての選択肢を使い果たしていた。"
            },
            rationale: "【文脈】had no choice but to... all his other options（...するしかなかった...他のすべての選択肢） → exhausted（使い果たした）。"
        },
        {
            id: 17,
            text: "Although a smile generally ( ) happiness, some people also smile to cover up negative emotions, such as anger.",
            choices: ["monitors", "signifies", "vomits", "regulates"],
            choiceMeanings: ["監視する", "意味する", "嘔吐する", "規制する"],
            correctAnswer: 2,
            structure: "a smile [S] generally signifies [V] happiness [O].",
            explanation: "signify: 意味する、示す",
            translation: {
                literal: "笑顔は [S] 一般的に意味する [V] 幸福を [O]。",
                natural: "笑顔は一般的に幸福を意味する。",
                intermediate: "笑顔は一般的に幸福を意味するが、怒りなどの否定的な感情を隠すために笑う人もいる。"
            },
            rationale: "【文脈】smile... happiness（笑顔...幸福） → signifies（意味する）。"
        },
        {
            id: 18,
            text: "The supermarket chain's expansion plans are based on the ( ) that consumer spending will continue to increase for the next five years at least.",
            choices: ["malfunction", "institution", "assumption", "transcription"],
            choiceMeanings: ["故障", "機関", "仮定", "転写"],
            correctAnswer: 3,
            structure: "The expansion plans [S] are based on [V] the assumption [O].",
            explanation: "assumption: 仮定、想定",
            translation: {
                literal: "拡大計画は [S] 基づいている [V] 仮定に [O]。",
                natural: "拡大計画は仮定に基づいている。",
                intermediate: "スーパーマーケットチェーンの拡大計画は、少なくとも今後5年間は消費者支出が増加し続けるという仮定に基づいている。"
            },
            rationale: "【文脈】expansion plans... consumer spending will continue to increase（拡大計画...消費者支出が増加し続ける） → assumption（仮定）。"
        },
        {
            id: 19,
            text: "Some of the people living on the tropical island are the ( ) of French sailors who arrived there 200 years ago.",
            choices: ["garments", "descendants", "inhabitants", "compartments"],
            choiceMeanings: ["衣服", "子孫", "住民", "区画"],
            correctAnswer: 2,
            structure: "Some of the people [S] are [V] the descendants of French sailors [C].",
            explanation: "descendant: 子孫",
            translation: {
                literal: "人々の一部は [S] です [V] フランス人船乗りの子孫 [C]。",
                natural: "一部の人々はフランス人船乗りの子孫だ。",
                intermediate: "熱帯の島に住むの一部の人々は、200年前にそこに到着したフランス人船乗りの子孫だ。"
            },
            rationale: "【文脈】French sailors who arrived there 200 years ago（200年前に到着したフランス人船乗り） → descendants（子孫）。"
        },
        {
            id: 20,
            text: "In the past, many people believed the sun ( ) around the earth. Advances in science and math eventually proved that, in fact, the earth moves around the sun.",
            choices: ["revolved", "renewed", "relieved", "restrained"],
            choiceMeanings: ["回転した", "更新した", "安堵した", "抑えた"],
            correctAnswer: 1,
            structure: "the sun [S] revolved [V] around the earth [M].",
            explanation: "revolve: 回転する、公転する",
            translation: {
                literal: "太陽は [S] 回転した [V] 地球の周りを [M]。",
                natural: "太陽は地球の周りを回転した。",
                intermediate: "過去には、多くの人が太陽が地球の周りを回っていると信じていた。科学と数学の進歩により、実際は地球が太陽の周りを回っていることが証明された。"
            },
            rationale: "【文脈】moves around（周りを回る） → revolved（回転した）。"
        },
        {
            id: 21,
            text: "A: Why are you so ( ) to accept the job offer at DTP?<br>B: Well, I'm concerned that I'd be even busier than I am now, so I'd really like something that'd give me a better work-life balance.",
            choices: ["frank", "reluctant", "spiteful", "righteous"],
            choiceMeanings: ["率直な", "気が進まない", "意地悪な", "正義の"],
            correctAnswer: 2,
            structure: "Why [S] are [V] you so reluctant [C] to accept the job offer [M]?",
            explanation: "reluctant: 気が進まない、しぶしぶの",
            translation: {
                literal: "なぜ [S] ですか [V] あなたはそれほど気が進まない [C] 仕事のオファーを受けることに [M]？",
                natural: "なぜ仕事のオファーを受けることに気が進まないの？",
                intermediate: "A: なぜDTPの仕事のオファーを受けることにそんなに気が進まないの？\nB: えーと、今よりもっと忙しくなるのではないかと心配なので、もっとワークライフバランスの良いものが欲しいの。"
            },
            rationale: "【文脈】I'm concerned that I'd be even busier（もっと忙しくなるのが心配） → reluctant（気が進まない）。"
        },
        {
            id: 22,
            text: "A: If you don't come to the party tomorrow night, you'll ( ) on all the fun.<br>B: Sorry, I really have to finish my presentation. You can tell me about the party later.",
            choices: ["miss out", "add up", "get over", "join in"],
            choiceMeanings: ["逃す", "合計する", "乗り越える", "参加する"],
            correctAnswer: 1,
            structure: "you [S] 'll miss out [V] on all the fun [M].",
            explanation: "miss out: 逃す、見逃す",
            translation: {
                literal: "あなたは [S] 逃す [V] すべての楽しみを [M]。",
                natural: "すべての楽しみを逃すよ。",
                intermediate: "A: 明日の夜のパーティーに来ないと、すべての楽しみを逃すよ。\nB: ごめん、プレゼンを仕上げなきゃいけないの。パーティーのことは後で教えて。"
            },
            rationale: "【文脈】If you don't come to the party... all the fun（パーティーに来ないと...すべての楽しみ） → miss out（逃す）。"
        },
        {
            id: 23,
            text: "Marty spent many hours ( ) the problem before he realized that the solution was much simpler than he thought.",
            choices: ["living down", "clearing out", "snapping off", "wrestling with"],
            choiceMeanings: ["忘れさせる", "片付ける", "折る", "取り組む"],
            correctAnswer: 4,
            structure: "Marty [S] spent [V] many hours wrestling with the problem [O].",
            explanation: "wrestle with: ～に取り組む、格闘する",
            translation: {
                literal: "マーティは [S] 費やした [V] 問題に取り組むのに何時間も [O]。",
                natural: "マーティは問題に取り組むのに何時間も費やした。",
                intermediate: "マーティは解決策が思ったよりずっと単純だと気づく前に、問題に取り組むのに何時間も費やした。"
            },
            rationale: "【文脈】the problem... the solution（問題...解決策） → wrestling with（取り組む）。"
        },
        {
            id: 24,
            text: "As the suspect was being arrested by the police, he ( ) an officer's gun. Luckily, he was stopped before he could get it.",
            choices: ["went for", "let up", "picked over", "set off"],
            choiceMeanings: ["～に向かって行った", "弱まった", "選び取った", "出発した"],
            correctAnswer: 1,
            structure: "he [S] went for [V] an officer's gun [O].",
            explanation: "go for: ～に向かって行く、～を取ろうとする",
            translation: {
                literal: "彼は [S] 向かって行った [V] 警官の銃に [O]。",
                natural: "彼は警官の銃を取ろうとした。",
                intermediate: "容疑者が警察に逮捕されているとき、彼は警官の銃を取ろうとした。幸いにも、取る前に止められた。"
            },
            rationale: "【文脈】was stopped before he could get it（取る前に止められた） → went for（取ろうとした）。"
        },
        {
            id: 25,
            text: "After living in a remote jungle for three months, the researcher was glad when he could finally access the Internet and ( ) the news in his home country.",
            choices: ["catch up on", "change out of", "open up to", "put up with"],
            choiceMeanings: ["～に追いつく", "～から着替える", "～に心を開く", "～を我慢する"],
            correctAnswer: 1,
            structure: "he [S] could finally access the Internet and catch up on [V] the news [O].",
            explanation: "catch up on: ～に追いつく、遅れを取り戻す",
            translation: {
                literal: "彼は [S] ついにインターネットにアクセスでき、追いつける [V] ニュースに [O]。",
                natural: "彼はついにインターネットにアクセスして、ニュースに追いつくことができた。",
                intermediate: "辺鄙なジャングルで3か月過ごした後、研究者はついにインターネットにアクセスして母国のニュースに追いつくことができて嬉しかった。"
            },
            rationale: "【文脈】After living in a remote jungle for three months... the news（3か月辺鄙なジャングルで過ごした後...ニュース） → catch up on（追いつく）。"
        }
    ]
};
