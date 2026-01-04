// Grade Pre-1 (準1級) - 2023年度 第2回検定
// structure: フィールド分離形式（複雑な文構造対応）
export const gradePre1_2023_2Data = {
    title: "2023年度第2回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "Layla found the workouts in the advanced class too ( ), so she decided to change to an easier class.",
            choices: ["subtle", "contrary", "strenuous", "cautious"],
            choiceMeanings: ["微妙な", "反対の", "激しい、きつい", "用心深い"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Layla found the workouts in the advanced class too (strenuous), so she decided to change to an easier class.",
                mainClause: "Layla [S] found [V] the workouts [O] in the advanced class [M] too strenuous [C]",
                resultClause: "so she [S'] decided [V'] to change to an easier class [O':to不定詞] → 結果",
                grammarPoint: "find + O + C（SVOC構文）"
            },
            explanation: "strenuous: 激しい、きつい、精力的な",
            translation: {
                literal: "レイラは [S] わかった [V] ワークアウトが [O] きつすぎると [C]。",
                natural: "レイラはワークアウトがきつすぎると感じた。",
                intermediate: "レイラは上級クラスのワークアウトがきつすぎると感じたので、より簡単なクラスに変更することにしました。"
            },
            rationale: "【文脈】きつすぎるので簡単なクラスへ → strenuous（激しい、きつい）。"
        },
        {
            id: 2,
            text: "The tax accountant asked the woman to ( ) all her financial records over the past year. He needed to see them before he could begin preparing her tax forms.",
            choices: ["punctuate", "compile", "bleach", "obsess"],
            choiceMeanings: ["句読点をつける", "まとめる、編集する", "漂白する", "取りつく"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The tax accountant asked the woman to (compile) all her financial records over the past year.",
                mainClause: "The tax accountant [S] asked [V] the woman [O] to compile all her financial records [C:to不定詞]",
                timePhrase: "over the past year [M:時] → 「過去1年間の」",
                reasonClause: "He needed to see them before he could begin preparing her tax forms → compile が必要な理由",
                grammarPoint: "ask + O + to do"
            },
            explanation: "compile: （資料などを）まとめる、編集する",
            translation: {
                literal: "税理士は [S] 頼んだ [V] その女性に [O] 全ての財務記録をまとめるよう [C]。",
                natural: "税理士はその女性に全ての財務記録をまとめるよう頼んだ。",
                intermediate: "税理士はその女性に、過去1年間のすべての財務記録をまとめるように頼みました。彼は彼女の税務申告書の作成を始める前にそれらを見る必要がありました。"
            },
            rationale: "【文脈】記録をまとめて見せる必要がある → compile（まとめる）。"
        },
        {
            id: 3,
            text: "Emilio discovered a small leak in one of the water pipes in his house. To be safe, he turned off the ( ) to stop the water until he knew exactly what the problem was.",
            choices: ["depot", "canal", "valve", "panel"],
            choiceMeanings: ["倉庫、駅", "運河", "弁、バルブ", "パネル"],
            correctAnswer: 3,
            structure: {
                fullSentence: "To be safe, he turned off the (valve) to stop the water until he knew exactly what the problem was.",
                contextClause: "Emilio discovered a small leak in one of the water pipes → 状況説明",
                purposePhrase: "To be safe [M:目的] → 「念のため」",
                mainClause: "he [S] turned off [V] the valve [O]",
                purposeClause: "to stop the water [M:目的] → 「水を止めるために」",
                untilClause: "until he [S'] knew [V'] exactly what the problem was [O'] → 時を表すuntil節"
            },
            explanation: "valve: 弁、バルブ",
            translation: {
                literal: "彼は [S] 閉めた [V] バルブを [O] 水を止めるために [M]。",
                natural: "彼は水を止めるためにバルブを閉めた。",
                intermediate: "エミリオは家の水道管の1つに小さな水漏れを発見しました。念のため、問題が正確に何かわかるまで、彼は水を止めるためにバルブを閉めました。"
            },
            rationale: "【文脈】水を止めるもの → valve（弁、バルブ）。"
        },
        {
            id: 4,
            text: "A: How long have you and Linda been ( ), Bill?<br>B: Oh, we've known each other for at least 10 years, maybe longer.",
            choices: ["acquainted", "discharged", "emphasized", "subdued"],
            choiceMeanings: ["知り合いで", "退院した、解雇された", "強調された", "抑制された"],
            correctAnswer: 1,
            structure: {
                fullSentence: "How long have you and Linda been (acquainted), Bill?",
                mainClause: "How long have you and Linda [S] been [V] acquainted [C]?",
                evidenceContext: "we've known each other for at least 10 years → acquainted の確認",
                grammarPoint: "be acquainted with = 「～と知り合いである」"
            },
            explanation: "acquainted: 知り合いで、面識があって",
            translation: {
                literal: "あなたとリンダは [S] どのくらい知り合いですか [C]？",
                natural: "あなたとリンダはどのくらい知り合いですか？",
                intermediate: "A: ビル、あなたとリンダはどのくらい知り合いなんですか？\nB: ああ、私たちは少なくとも10年、たぶんそれ以上お互いを知っています。"
            },
            rationale: "【文脈】お互いを知っている期間を聞く → acquainted（知り合いで）。"
        },
        {
            id: 5,
            text: "Our local community center usually has one main room, but when necessary, we can close the ( ) and create two smaller rooms.",
            choices: ["estimation", "partition", "assumption", "notion"],
            choiceMeanings: ["推定", "仕切り", "仮定", "概念"],
            correctAnswer: 2,
            structure: {
                fullSentence: "When necessary, we can close the (partition) and create two smaller rooms.",
                contextClause: "Our local community center usually has one main room → 通常の状態",
                whenPhrase: "when necessary [M:条件] → 「必要なときに」",
                mainClause: "we [S] can close [V] the partition [O] and create [V'] two smaller rooms [O']"
            },
            explanation: "partition: 仕切り、分割",
            translation: {
                literal: "私たちは [S] 閉じることができる [V] 仕切りを [O] そして作る [V'] 2つの小さな部屋を [O']。",
                natural: "私たちは仕切りを閉じて2つの小さな部屋を作ることができる。",
                intermediate: "私たちの地域のコミュニティセンターには通常1つのメインルームがありますが、必要な場合は仕切りを閉じて2つの小さな部屋を作ることができます。"
            },
            rationale: "【文脈】部屋を2つに分けるもの → partition（仕切り）。"
        },
        {
            id: 6,
            text: "Tyler's father suggested that he get some foreign ( ) from his local bank before his vacation because changing money abroad is often more expensive.",
            choices: ["tactic", "bait", "currency", "menace"],
            choiceMeanings: ["戦術", "餌", "通貨", "脅威"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Tyler's father suggested that he get some foreign (currency) from his local bank before his vacation.",
                mainClause: "Tyler's father [S] suggested [V] that-clause [O]",
                thatClause: "he [S'] get [V':仮定法現在] some foreign currency [O'] from his local bank [M] → 提案の内容",
                becauseClause: "because changing money abroad [S''] is [V''] often more expensive [C''] → 理由節",
                grammarPoint: "suggest + that + S + (should) + 原形（仮定法現在）"
            },
            explanation: "currency: 通貨",
            translation: {
                literal: "タイラーの父親は [S] 提案した [V] 彼が外貨を手に入れるようにと [O]。",
                natural: "タイラーの父親は彼に外貨を手に入れるよう提案した。",
                intermediate: "タイラーの父親は、海外での両替は割高になることが多いため、休暇前に地元の銀行で外貨を手に入れておくよう彼に提案しました。"
            },
            rationale: "【文脈】海外でお金を使う、両替 → currency（通貨）。"
        },
        {
            id: 7,
            text: "Thanks to the country's ( ) natural resources, it is able to earn a great deal of money through exports such as metals, coal, and natural gas.",
            choices: ["unjust", "insubstantial", "elastic", "abundant"],
            choiceMeanings: ["不当な", "実体のない", "弾力のある", "豊富な"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Thanks to the country's (abundant) natural resources, it is able to earn a great deal of money through exports.",
                thanksToPhrase: "Thanks to the country's abundant natural resources [M:理由] → 「豊富な天然資源のおかげで」",
                mainClause: "it [S] is able to earn [V] a great deal of money [O] through exports [M]",
                examplePhrase: "such as metals, coal, and natural gas → 資源の例"
            },
            explanation: "abundant: 豊富な",
            translation: {
                literal: "その国の豊富な天然資源のおかげで [M]、それは [S] 稼ぐことができる [V] 多額のお金を [O]。",
                natural: "豊富な天然資源のおかげで、多額の収入を得られる。",
                intermediate: "その国の豊富な天然資源のおかげで、金属、石炭、天然ガスなどの輸出を通じて多額の資金を得ることができます。"
            },
            rationale: "【文脈】資源を輸出して稼ぐ → abundant（豊富な）。"
        },
        {
            id: 8,
            text: "At first, Enzo listed all six of his previous jobs on his résumé. He had to remove two of them, however, in order to ( ) the document into one page.",
            choices: ["dispute", "mumble", "mistrust", "condense"],
            choiceMeanings: ["論争する", "つぶやく", "疑う", "凝縮する、要約する"],
            correctAnswer: 4,
            structure: {
                fullSentence: "He had to remove two of them, however, in order to (condense) the document into one page.",
                contextClause: "At first, Enzo listed all six of his previous jobs on his résumé → 最初の状態",
                mainClause: "He [S] had to remove [V] two of them [O]",
                purposeClause: "in order to condense the document into one page [M:目的] → 「1ページにまとめるために」",
                grammarPoint: "in order to do = 「～するために」"
            },
            explanation: "condense: 凝縮する、要約する",
            translation: {
                literal: "彼は [S] 削除しなければならなかった [V] そのうちの2つを [O] まとめるために [M] 書類を1ページに [M]。",
                natural: "彼は書類を1ページにまとめるために2つを削除しなければならなかった。",
                intermediate: "最初、エンゾは履歴書に以前の6つの仕事をすべて記載しました。しかし、書類を1ページにまとめるために、そのうちの2つを削除しなければなりませんでした。"
            },
            rationale: "【文脈】情報を減らしてまとめる → condense（要約する、凝縮する）。"
        },
        {
            id: 9,
            text: "In most countries, foreigners working without a proper visa are ( ) if they are discovered. However, sending them home can cost a lot of money.",
            choices: ["mended", "deported", "perceived", "distributed"],
            choiceMeanings: ["修繕された", "国外追放された", "知覚された", "分配された"],
            correctAnswer: 2,
            structure: {
                fullSentence: "In most countries, foreigners working without a proper visa are (deported) if they are discovered.",
                mainClause: "foreigners [S] working without a proper visa [M:現在分詞] are deported [V:受動態]",
                conditionalClause: "if they [S'] are discovered [V':受動態] → 条件節",
                contrastClause: "However, sending them home can cost a lot of money → 対比（費用がかかる）"
            },
            explanation: "deport: 国外追放する",
            translation: {
                literal: "外国人は [S] 国外追放される [V] もし発見されれば [条件]。",
                natural: "外国人は発見されれば国外追放される。",
                intermediate: "ほとんどの国では、適切なビザなしで働いている外国人は、発見された場合、国外追放されます。しかし、彼らを母国に送り返すには多額の費用がかかる場合があります。"
            },
            rationale: "【文脈】不法就労、母国に送り返す → deport（国外追放する）。"
        },
        {
            id: 10,
            text: "Tim is worried that he is spending too much time using his smartphone. He feels a strong ( ) to check his e-mail every few minutes.",
            choices: ["suspension", "extension", "seclusion", "compulsion"],
            choiceMeanings: ["一時停止", "延長", "隔離", "衝動、強制"],
            correctAnswer: 4,
            structure: {
                fullSentence: "He feels a strong (compulsion) to check his e-mail every few minutes.",
                contextClause: "Tim is worried that he is spending too much time using his smartphone → 背景",
                mainClause: "He [S] feels [V] a strong compulsion [O] to check his e-mail [M:to不定詞]",
                timePhrase: "every few minutes [M:頻度] → 「数分ごとに」"
            },
            explanation: "compulsion: 衝動、強制",
            translation: {
                literal: "彼は [S] 感じる [V] 強い衝動を [O] メールをチェックしたいという [M]。",
                natural: "彼はメールをチェックしたいという強い衝動を感じる。",
                intermediate: "ティムはスマートフォンに時間を使いすぎていることを心配しています。彼は数分ごとにメールをチェックしたいという強い衝動を感じています。"
            },
            rationale: "【文脈】やめられない、ついしてしまう → compulsion（衝動）。"
        },
        {
            id: 11,
            text: "A: Did you make a New Year's ( ) this year, Serena?<br>B: Yes, I decided to start eating healthy snacks instead of sweets between meals. It's been difficult to keep away from the chocolate and candy, though.",
            choices: ["astonishment", "resolution", "vulnerability", "repression"],
            choiceMeanings: ["驚き", "決意", "脆弱性", "抑圧"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Did you make a New Year's (resolution) this year, Serena?",
                mainClause: "Did you [S] make [V] a New Year's resolution [O] this year [M]?",
                evidenceContext: "I decided to start eating healthy snacks instead of sweets → resolution の内容",
                grammarPoint: "New Year's resolution = 「新年の抱負」（コロケーション）"
            },
            explanation: "resolution: 決意、（新年の）抱負",
            translation: {
                literal: "あなたは [S] 立てましたか [V] 新年の抱負を [O] 今年 [M]？",
                natural: "今年は新年の抱負を立てましたか？",
                intermediate: "A: セレナ、今年は新年の抱負を立てた？\nB: ええ、食事の間にお菓子の代わりに健康的なスナックを食べ始めることにしたわ。でも、チョコレートやキャンディーを避けるのは難しいわね。"
            },
            rationale: "【コロケーション】New Year's resolution = 新年の抱負。"
        },
        {
            id: 12,
            text: "Miranda noticed that the amount of money in her savings account was ( ), so she decided to start spending less every month.",
            choices: ["grazing", "dwindling", "browsing", "rebounding"],
            choiceMeanings: ["草を食べている", "だんだん減少している", "閲覧している", "跳ね返っている"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Miranda noticed that the amount of money in her savings account was (dwindling).",
                mainClause: "Miranda [S] noticed [V] that-clause [O]",
                thatClause: "the amount of money [S'] in her savings account [M] was dwindling [V'] → 「貯金が減ってきている」",
                resultClause: "so she decided to start spending less every month → 結果（支出を減らす）"
            },
            explanation: "dwindle: だんだん減少する、低下する",
            translation: {
                literal: "ミランダは [S] 気づいた [V] 貯金の金額が減ってきていると [O]。",
                natural: "ミランダは貯金が減ってきていることに気づいた。",
                intermediate: "ミランダは貯金口座の金額が減ってきていることに気づいたので、毎月の支出を減らすことにしました。"
            },
            rationale: "【文脈】お金が減る、支出を減らす → dwindle（減少する）。"
        },
        {
            id: 13,
            text: "The girl was scared of high places, so she ( ) her father's hand. She held it tightly as they looked out the window from the top of the tower.",
            choices: ["harassed", "breached", "drained", "gripped"],
            choiceMeanings: ["悩ませた", "破った", "排水した", "握った"],
            correctAnswer: 4,
            structure: {
                fullSentence: "The girl was scared of high places, so she (gripped) her father's hand.",
                becauseClause: "The girl [S] was [V] scared [C] of high places [M] → 理由",
                mainClause: "she [S'] gripped [V'] her father's hand [O']",
                evidenceClause: "She held it tightly as they looked out the window → gripped の詳細"
            },
            explanation: "grip: 握る、しっかりつかむ",
            translation: {
                literal: "彼女は [S'] 握った [V'] 父親の手を [O']。",
                natural: "彼女は父親の手を握った。",
                intermediate: "その少女は高い場所が怖かったので、父親の手を握りました。塔の上から窓の外を見ている間、彼女はそれをしっかりと握っていました。"
            },
            rationale: "【文脈】怖くて手を握る → grip（握る）。"
        },
        {
            id: 14,
            text: "Akiko could not help but be ( ) when she saw her colleagues having a quiet conversation. She moved closer to them to hear what they were talking about.",
            choices: ["obedient", "flexible", "sinful", "nosy"],
            choiceMeanings: ["従順な", "柔軟な", "罪深い", "詮索好きな"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Akiko could not help but be (nosy) when she saw her colleagues having a quiet conversation.",
                mainClause: "Akiko [S] could not help but be [V] nosy [C]",
                whenClause: "when she [S'] saw [V'] her colleagues [O'] having a quiet conversation [C':分詞] → 時を表すwhen節",
                evidenceClause: "She moved closer to them to hear what they were talking about → nosy の根拠",
                grammarPoint: "cannot help but do = 「～せずにはいられない」"
            },
            explanation: "nosy: 詮索好きな、おせっかいな",
            translation: {
                literal: "アキコは [S] ～せずにはいられなかった [V] 詮索好きに [C]。",
                natural: "アキコは詮索せずにはいられなかった。",
                intermediate: "アキコは同僚たちが静かに会話をしているのを見たとき、詮索せずにはいられませんでした。彼女は彼らが何について話しているのか聞くために彼らに近づきました。"
            },
            rationale: "【文脈】会話を聞きに行く、気になる → nosy（詮索好きな）。"
        },
        {
            id: 15,
            text: "Due to the snowstorm, the climbers were unable to reach the mountain's ( ). They had to turn around just a few hundred meters from the top.",
            choices: ["subsidy", "mirage", "summit", "crutch"],
            choiceMeanings: ["補助金", "蜃気楼", "頂上", "松葉杖"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Due to the snowstorm, the climbers were unable to reach the mountain's (summit).",
                dueToPhrase: "Due to the snowstorm [M:理由] → 「吹雪のために」",
                mainClause: "the climbers [S] were unable to reach [V] the mountain's summit [O]",
                evidenceClause: "They had to turn around just a few hundred meters from the top → 頂上に到達できなかった根拠"
            },
            explanation: "summit: （山の）頂上、首脳会談",
            translation: {
                literal: "登山者たちは [S] 到達できなかった [V] 山の頂上に [O]。",
                natural: "登山者たちは山の頂上に到達できなかった。",
                intermediate: "吹雪のため、登山者たちは山の頂上に到達できませんでした。彼らは頂上からわずか数百メートルのところで引き返さなければなりませんでした。"
            },
            rationale: "【文脈】山を登る、頂上付近で引き返す → summit（頂上）。"
        },
        {
            id: 16,
            text: "When Jonathan started at his company, he was often ( ) all day. However, after a few months, he took on more tasks and now has little free time.",
            choices: ["idle", "agile", "sane", "needy"],
            choiceMeanings: ["何もしていない、暇な", "機敏な", "正気の", "困窮している"],
            correctAnswer: 1,
            structure: {
                fullSentence: "When Jonathan started at his company, he was often (idle) all day.",
                whenClause: "When Jonathan [S'] started [V'] at his company [M] → 時を表すwhen節",
                mainClause: "he [S] was [V] often idle [C] all day [M]",
                contrastClause: "However, after a few months, he took on more tasks and now has little free time → 対比（今は忙しい）"
            },
            explanation: "idle: 何もしていない、稼働していない",
            translation: {
                literal: "彼は [S] だった [V] しばしば暇 [C] 一日中 [M]。",
                natural: "彼は一日中しばしば暇だった。",
                intermediate: "ジョナサンが会社に入った当初、彼は一日中何もしていないことがよくありました。しかし、数ヶ月後、彼はより多くの仕事を引き受け、今では自由な時間はほとんどありません。"
            },
            rationale: "【文脈】昔は暇、今は忙しい → idle（何もしていない）。"
        },
        {
            id: 17,
            text: "A: Guess what? I've got an interview for that job as a TV announcer!<br>B: That's great, but don't be too ( ) just yet. There'll be a lot of competition for that position.",
            choices: ["courteous", "optimistic", "suspicious", "flustered"],
            choiceMeanings: ["礼儀正しい", "楽観的な", "疑い深い", "狼狽した"],
            correctAnswer: 2,
            structure: {
                fullSentence: "That's great, but don't be too (optimistic) just yet.",
                firstClause: "That's great → 肯定的な反応",
                mainClause: "don't be [V] too optimistic [C] just yet [M]",
                reasonClause: "There'll be a lot of competition for that position → 楽観視できない理由"
            },
            explanation: "optimistic: 楽観的な",
            translation: {
                literal: "あまり楽観的になりすぎないで [C] まだ [M]。",
                natural: "まだあまり楽観的になりすぎないで。",
                intermediate: "A: 聞いて！テレビアナウンサーの仕事の面接が決まったよ！\nB: それはすごいね、でもまだあまり楽観的になりすぎないで。そのポジションには多くの競争相手がいるだろうから。"
            },
            rationale: "【文脈】競争が激しいから、まだ安心できない → optimistic（楽観的な）。"
        },
        {
            id: 18,
            text: "During her commute, Josie found the noise from the earphones of the train passenger next to her so ( ) that she decided to move to another seat.",
            choices: ["bothersome", "compelling", "flattering", "daring"],
            choiceMeanings: ["迷惑な、厄介な", "強制的な、説得力のある", "お世辞の", "大胆な"],
            correctAnswer: 1,
            structure: {
                fullSentence: "During her commute, Josie found the noise from the earphones so (bothersome) that she decided to move to another seat.",
                timePhrase: "During her commute [M:時] → 「通勤中」",
                mainClause: "Josie [S] found [V] the noise [O] from the earphones [M] so bothersome [C]",
                resultClause: "that she [S'] decided [V'] to move to another seat [O':to不定詞] → so...that構文",
                grammarPoint: "find + O + C / so...that = 「とても～なので...」"
            },
            explanation: "bothersome: 迷惑な、厄介な",
            translation: {
                literal: "ジョシーは [S] 感じた [V] 騒音が [O] とても迷惑だと [C] 席を移動するほど [result]。",
                natural: "ジョシーは騒音がとても迷惑だと感じ、席を移動した。",
                intermediate: "通勤中、ジョシーは隣の乗客のイヤホンからの騒音がとても迷惑だと感じたので、別の席に移動することにしました。"
            },
            rationale: "【文脈】うるさい、席を移動する → bothersome（迷惑な）。"
        },
        {
            id: 19,
            text: "A: I couldn't believe how crowded this year's summer parade was.<br>B: I know! There were so many ( ) in the streets I could barely move.",
            choices: ["patriots", "spectators", "mimics", "executives"],
            choiceMeanings: ["愛国者", "観客", "物まね師", "重役"],
            correctAnswer: 2,
            structure: {
                fullSentence: "There were so many (spectators) in the streets I could barely move.",
                mainClause: "There were [V] so many spectators [S] in the streets [M]",
                resultClause: "I could barely move → 混雑の結果（so...that省略形）",
                contextClause: "I couldn't believe how crowded this year's summer parade was → 混雑の説明"
            },
            explanation: "spectator: 観客（スポーツやイベントの）",
            translation: {
                literal: "いた [V] とても多くの観客が [S] 通りに [M]。",
                natural: "通りにはとても多くの観客がいた。",
                intermediate: "A: 今年のサマーパレードがどれほど混雑していたか信じられなかったよ。\nB: そうだね！通りにはとても多くの観客がいて、ほとんど動けなかったよ。"
            },
            rationale: "【文脈】パレード、混雑、見ている人 → spectators（観客）。"
        },
        {
            id: 20,
            text: "Joseph was not sure if he could afford a taxi home from work, but after checking his wallet, he found that he had ( ) money for the ride.",
            choices: ["ample", "regal", "vain", "crafty"],
            choiceMeanings: ["十分な", "王の", "無駄な、うぬぼれた", "ずる賢い"],
            correctAnswer: 1,
            structure: {
                fullSentence: "After checking his wallet, he found that he had (ample) money for the ride.",
                contextClause: "Joseph was not sure if he could afford a taxi home from work → 不確かだった",
                afterPhrase: "after checking his wallet [M:時] → 「財布を確認した後」",
                mainClause: "he [S] found [V] that-clause [O]",
                thatClause: "he [S'] had [V'] ample money [O'] for the ride [M] → 「十分なお金があった」"
            },
            explanation: "ample: 十分な、豊富な",
            translation: {
                literal: "彼は [S'] 持っていた [V'] 十分なお金を [O'] 乗車のために [M]。",
                natural: "彼は乗車に十分なお金を持っていた。",
                intermediate: "ジョセフは仕事から家までタクシーに乗る余裕があるかどうかわかりませんでしたが、財布を確認した後、乗車するのに十分なお金を持っていることがわかりました。"
            },
            rationale: "【文脈】タクシー代があるか確認 → あった → ample（十分な）。"
        },
        {
            id: 21,
            text: "( ) involvement has been shown to enhance student performance in school. One example is helping children with schoolwork at home.",
            choices: ["Obsolete", "Numb", "Parental", "Infamous"],
            choiceMeanings: ["時代遅れの", "感覚のない", "親の", "悪名高い"],
            correctAnswer: 3,
            structure: {
                fullSentence: "(Parental) involvement has been shown to enhance student performance in school.",
                mainClause: "Parental involvement [S] has been shown [V:受動態] to enhance student performance [C:to不定詞] in school [M]",
                exampleClause: "One example is helping children with schoolwork at home → parental involvement の具体例"
            },
            explanation: "parental: 親の",
            translation: {
                literal: "親の関与は [S] 示されている [V] 向上させると [C] 生徒の成績を [O]。",
                natural: "親の関与は生徒の成績を向上させると示されている。",
                intermediate: "親の関与は、学校での生徒の成績を向上させることが示されています。その一例は、家で子供の勉強を手伝うことです。"
            },
            rationale: "【文脈】子供の宿題を手伝う → parent（親） → parental。"
        },
        {
            id: 22,
            text: "Over the past few decades, many species have nearly been ( ) by pollution. However, recent conservation efforts are helping some of them to recover.",
            choices: ["wiped out", "broken up", "fixed up", "turned down"],
            choiceMeanings: ["絶滅させられた", "解散した", "修理した", "断られた"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Over the past few decades, many species have nearly been (wiped out) by pollution.",
                timePhrase: "Over the past few decades [M:時] → 「過去数十年の間に」",
                mainClause: "many species [S] have nearly been wiped out [V:受動態] by pollution [M]",
                contrastClause: "However, recent conservation efforts are helping some of them to recover → 対比（回復している）",
                grammarPoint: "wipe out = 「全滅させる」"
            },
            explanation: "wipe out: 全滅させる、一掃する",
            translation: {
                literal: "多くの種が [S] ほぼ全滅させられた [V] 汚染によって [M]。",
                natural: "多くの種が汚染によってほぼ絶滅しかけた。",
                intermediate: "過去数十年の間に、多くの種が汚染によってほぼ絶滅しかけました。しかし、最近の保護活動により、その一部は回復しつつあります。"
            },
            rationale: "【文脈】汚染で種が消える → recover（回復する）の逆 → wipe out（全滅させる）。"
        },
        {
            id: 23,
            text: "Dave was happy when his neighbor gave him a basket of fresh vegetables, but when he got home, he realized he did not know how to ( ) cooking them.",
            choices: ["go about", "pull out", "take in", "bring down"],
            choiceMeanings: ["〜に取り掛かる", "引き出す", "取り入れる", "下ろす"],
            correctAnswer: 1,
            structure: {
                fullSentence: "He realized he did not know how to (go about) cooking them.",
                contextClause: "Dave was happy when his neighbor gave him a basket of fresh vegetables → 最初は嬉しかった",
                whenClause: "when he [S'] got [V'] home [M] → 時を表すwhen節",
                mainClause: "he [S] realized [V] he did not know [O:that節]",
                indirectQuestion: "how to go about cooking them → 間接疑問（how to do）",
                grammarPoint: "go about + -ing = 「～に取り掛かる」"
            },
            explanation: "go about: 〜に取り掛かる、〜を始める",
            translation: {
                literal: "彼は [S] 気づいた [V] 知らないと [O] どのように取り掛かるか [間接疑問] それらを料理することに [O']。",
                natural: "彼はそれらをどう料理すればいいかわからないことに気づいた。",
                intermediate: "デイブは隣人が新鮮な野菜のバスケットをくれたときは嬉しかったですが、家に帰ったとき、それらをどう料理すればいいかわからないことに気づきました。"
            },
            rationale: "【熟語】go about doing = 〜に取り掛かる、〜を始める。"
        },
        {
            id: 24,
            text: "A: Our company allows employees to wear comfortable clothes, as long as they don't look too unprofessional.<br>B: That's new for me. Wearing casual clothes was ( ) at my last job.",
            choices: ["frowned upon", "carried on", "entered into", "crossed off"],
            choiceMeanings: ["眉をひそめられた（難色を示された）", "続けられた", "参入した", "線を引いて消した"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Wearing casual clothes was (frowned upon) at my last job.",
                mainClause: "Wearing casual clothes [S:動名詞句] was frowned upon [V:受動態] at my last job [M]",
                contrastContext: "allows employees to wear comfortable clothes → 今の会社との対比",
                grammarPoint: "frown upon = 「～に難色を示す」"
            },
            explanation: "frown upon: 〜に難色を示す、眉をひそめる",
            translation: {
                literal: "カジュアルな服を着ることは [S] 難色を示された [V] 前の職場では [M]。",
                natural: "カジュアルな服を着ることは前の職場では好ましく思われていなかった。",
                intermediate: "A: 私たちの会社では、あまりプロらしくなく見えない限り、従業員が楽な服を着ることを許可しています。\nB: それは私にとって新しいことです。前の職場では、カジュアルな服を着ることは好ましく思われていませんでした。"
            },
            rationale: "【熟語】frown upon = 難色を示す、不賛成である。"
        },
        {
            id: 25,
            text: "The regional manager visited the small branch office last week and ( ) a few meetings to observe how things were going there.",
            choices: ["went back on", "sat in on", "spoke down to", "looked up to"],
            choiceMeanings: ["（約束などを）破った", "〜に同席した、傍聴した", "〜を見下したように話した", "〜を尊敬した"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The regional manager visited the small branch office last week and (sat in on) a few meetings to observe how things were going there.",
                mainClause: "The regional manager [S] visited [V1] the small branch office [O1] last week [M] and sat in on [V2] a few meetings [O2]",
                purposeClause: "to observe how things were going there [M:目的] → 「物事がどう進んでいるか観察するために」",
                grammarPoint: "sit in on = 「～に同席する、傍聴する」"
            },
            explanation: "sat in on: 〜に参加する、傍聴する、見学する",
            translation: {
                literal: "地域マネージャーは [S] 訪問し [V1] 小さな支店を [O1]、同席した [V2] いくつかの会議に [O2]。",
                natural: "地域マネージャーは小さな支店を訪問し、いくつかの会議に同席した。",
                intermediate: "地域マネージャーは先週小さな支店を訪れ、そこで物事がどのように進んでいるかを観察するためにいくつかの会議に同席しました。"
            },
            rationale: "【熟語】sit in on = （会議などに）同席する、傍聴する。"
        }
    ]
};
