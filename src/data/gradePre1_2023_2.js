// Grade Pre-1 (準1級) - 2023年度 第2回検定
export const gradePre1_2023_2Data = {
    title: "2023年度第2回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "Layla found the workouts in the advanced class too ( ), so she decided to change to an easier class.",
            choices: ["subtle", "contrary", "strenuous", "cautious"],
            choiceMeanings: ["微妙な", "反対の", "激しい、きつい", "用心深い"],
            correctAnswer: 3,
            structure: "found [V] the workouts [O] too strenuous [C].",
            explanation: "strenuous: 激しい、きつい、精力的な",
            translation: {
                literal: "レイラはわかった [V] ワークアウトが [O] きつすぎると [C]。",
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
            structure: "to compile [V] all her financial records [O].",
            explanation: "compile: （資料などを）まとめる、編集する",
            translation: {
                literal: "まとめるように [V] 彼女の全ての財務記録を [O]。",
                natural: "全ての財務記録をまとめるように。",
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
            structure: "he turned off [V] the valve [O].",
            explanation: "valve: 弁、バルブ",
            translation: {
                literal: "彼は閉めた [V] バルブを [O]。",
                natural: "彼はバルブを閉めた。",
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
            structure: "been acquainted [C].",
            explanation: "acquainted: 知り合いで、面識があって",
            translation: {
                literal: "知り合いであったか [C]。",
                natural: "知り合いだったか。",
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
            structure: "close [V] the partition [O].",
            explanation: "partition: 仕切り、分割",
            translation: {
                literal: "閉じる [V] 仕切りを [O]。",
                natural: "仕切りを閉じる。",
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
            structure: "get [V] some foreign currency [O].",
            explanation: "currency: 通貨",
            translation: {
                literal: "手に入れる [V] いくらかの外貨を [O]。",
                natural: "外貨を手に入れる。",
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
            structure: "Thanks to the country's abundant natural resources [M].",
            explanation: "abundant: 豊富な",
            translation: {
                literal: "国の豊富な天然資源のおかげで [M]。",
                natural: "国の豊富な天然資源のおかげで。",
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
            structure: "in order to condense [V] the document [O] into one page [M].",
            explanation: "condense: 凝縮する、要約する",
            translation: {
                literal: "凝縮するために [V] 書類を [O] 1ページに [M]。",
                natural: "書類を1ページにまとめるために。",
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
            structure: "foreigners [S] ... are deported [V].",
            explanation: "deport: 国外追放する",
            translation: {
                literal: "外国人は [S] 国外追放される [V]。",
                natural: "外国人は国外追放される。",
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
            structure: "feels [V] a strong compulsion [O].",
            explanation: "compulsion: 衝動、強制",
            translation: {
                literal: "感じる [V] 強い衝動を [O]。",
                natural: "強い衝動を感じる。",
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
            structure: "make [V] a New Year's resolution [O].",
            explanation: "resolution: 決意、（新年の）抱負",
            translation: {
                literal: "立てたか [V] 新年の抱負を [O]。",
                natural: "新年の抱負を立てたか。",
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
            structure: "money [S] was dwindling [V].",
            explanation: "dwindle: だんだん減少する、低下する",
            translation: {
                literal: "お金が [S] だんだん減少していた [V]。",
                natural: "お金が減ってきていた。",
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
            structure: "she [S] gripped [V] her father's hand [O].",
            explanation: "grip: 握る、しっかりつかむ",
            translation: {
                literal: "彼女は [S] 握った [V] 父親の手を [O]。",
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
            structure: "could not help but be [V] nosy [C].",
            explanation: "nosy: 詮索好きな、おせっかいな",
            translation: {
                literal: "詮索好きにならずにはいられなかった [V] [C]。",
                natural: "詮索好きにならずにはいられなかった（気になって仕方なかった）。",
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
            structure: "reach [V] the mountain's summit [O].",
            explanation: "summit: （山の）頂上、首脳会談",
            translation: {
                literal: "到達する [V] 山の頂上に [O]。",
                natural: "山の頂上に到達する。",
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
            structure: "he [S] was [V] often idle [C].",
            explanation: "idle: 何もしていない、稼働していない",
            translation: {
                literal: "彼は [S] だった [V] しばしば暇 [C]。",
                natural: "彼はしばしば暇だった。",
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
            structure: "don't be [V] too optimistic [C].",
            explanation: "optimistic: 楽観的な",
            translation: {
                literal: "なるな [V] あまりに楽観的に [C]。",
                natural: "あまり楽観的になりすぎるな。",
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
            structure: "found [V] the noise [O] ... so bothersome [C].",
            explanation: "bothersome: 迷惑な、厄介な",
            translation: {
                literal: "わかった [V] 騒音が [O] とても迷惑だと [C]。",
                natural: "騒音がとても迷惑だと感じた。",
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
            structure: "There were [V] so many spectators [S].",
            explanation: "spectator: 観客（スポーツやイベントの）",
            translation: {
                literal: "いた [V] とても多くの観客が [S]。",
                natural: "とても多くの観客がいた。",
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
            structure: "he [S] had [V] ample money [O].",
            explanation: "ample: 十分な、豊富な",
            translation: {
                literal: "彼は [S] 持っていた [V] 十分なお金を [O]。",
                natural: "彼は十分なお金を持っていた。",
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
            structure: "Parental involvement [S] has been shown [V] to enhance [C]...",
            explanation: "parental: 親の",
            translation: {
                literal: "親の関与は [S] 示されている [V] 高めると [C]...",
                natural: "親の関与は〜を高めると示されている。",
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
            structure: "have nearly been wiped out [V] (passive).",
            explanation: "wipe out: 全滅させる、一掃する",
            translation: {
                literal: "ほぼ全滅させられそうになった [V]。",
                natural: "ほぼ絶滅しかけた。",
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
            structure: "how to go about [V] cooking them [O].",
            explanation: "go about: 〜に取り掛かる、〜を始める",
            translation: {
                literal: "どのように取り掛かるか [V] それらを料理することに [O]。",
                natural: "それらをどう料理すればいいか。",
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
            structure: "Wearing casual clothes [S] was frowned upon [V].",
            explanation: "frown upon: 〜に難色を示す、眉をひそめる",
            translation: {
                literal: "カジュアルな服を着ることは [S] 眉をひそめられた [V]。",
                natural: "カジュアルな服を着ることは好ましく思われていなかった。",
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
            structure: "sat in on [V] a few meetings [O].",
            explanation: "sat in on: 〜に参加する、傍聴する、見学する",
            translation: {
                literal: "同席した [V] いくつかの会議に [O]。",
                natural: "いくつかの会議に同席した。",
                intermediate: "地域マネージャーは先週小さな支店を訪れ、そこで物事がどのように進んでいるかを観察するためにいくつかの会議に同席しました。"
            },
            rationale: "【熟語】sit in on = （会議などに）同席する、傍聴する。"
        }
    ]
};
