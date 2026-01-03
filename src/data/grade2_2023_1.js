export const grade2Data = {
    title: "2023年度第1回検定一次試験(2級)",
    questions: [
        {
            id: 1,
            text: "A: Dave asked me to marry him. Do you think I should say yes?<br>B: You have to use your own ( ) to decide. No one else can do it for you.",
            choices: ["income", "convention", "judgment", "geography"],
            choiceMeanings: ["収入", "慣習", "判断", "地理"],
            correctAnswer: 3,
            structure: "You [S] have to use [V] your own judgment [O] to decide [M].",
            explanation: "judgment: 判断",
            translation: {
                literal: "あなたは [S] 使う必要がある [V] 、あなた自身の判断を [O] 、決めるために [M] 。",
                natural: "決めるためには、あなた自身の判断を使わなければなりません。",
                intermediate: "A: デイブに結婚を申し込まれたの。イエスと言うべきかしら？\nB: 決めるためには、あなた自身の判断を使わなければなりません。他の誰もあなたの代わりにそれはできないのですから。"
            },
            rationale: "【文脈からの判断】\n空所後の to decide（決めるために）と、後半の No one else can do it for you（他の誰もあなたの代わりにそれはできない）という文脈から、「自ら決断を下すこと」に関連する語が必要。\n\n【語彙のネットワーク】\nchoices の income（収入）、convention（慣習）、geography（地理）は文脈に合わない。\njudgment（判断）を選ぶことで、「自分の判断を使って決める」という意味が通る。\n\n【指導ポイント】\n「decide（決定する）するために必要なのは judgment（判断）」という論理的なつながりを意識させる。"
        },
        {
            id: 2,
            text: "A: What did you think of my essay, Jill?<br>B: Well, some of the explanations you gave are a bit ( ). Maybe you should make those parts clearer.",
            choices: ["harmful", "previous", "certain", "vague"],
            choiceMeanings: ["有害な", "以前の", "特定の", "曖昧な"],
            correctAnswer: 4,
            structure: "some of the explanations [S] you gave [M] are [V] a bit vague [C]. Maybe you should make those parts clearer.",
            explanation: "vague: 曖昧な",
            translation: {
                literal: "説明のいくつかは [S] （あなたがした） [M] 、です [V] 少し曖昧 [C] 。",
                natural: "あなたがした説明の中には、少し曖昧なものがあります。",
                intermediate: "A: ジェーン、私のエッセイについてどう思った？\nB: ええと、あなたがした説明のいくつかは少し曖昧ね。たぶん、それらの部分をもっと明確にするべきだと思うわ。"
            },
            rationale: "【対比構造の発見】\n空欄のある文の後に Maybe you should make those parts clearer.（それらの部分をもっと明確にするべきだ）とある。\nここから、「現状は clear（明確）ではない」＝「vague（曖昧な）」であると推測できる。\n\n【語彙】\nvague は「漠然とした、曖昧な」という意味の重要語。\nopposite（反意語）の関係： clear ⇔ vague をセットで覚えるように指導する。"
        },
        {
            id: 3,
            text: "Colin had been getting bad grades in math for a long time, but he did not do anything about it. Finally, he decided to ( ) the problem and ask his teacher for help.",
            choices: ["alter", "impress", "honor", "confront"],
            choiceMeanings: ["変える", "感銘を与える", "称える", "立ち向かう"],
            correctAnswer: 4,
            structure: "he [S] decided [V] to confront [O] the problem and ask his teacher for help.",
            explanation: "confront: 直面する、立ち向かう",
            translation: {
                literal: "彼は [S] 決めた [V] 、問題に立ち向かうことを [O] 。",
                natural: "彼はその問題に立ち向かうことを決心しました。",
                intermediate: "コリンは長い間数学で悪い成績をとっていましたが、それについて何もしませんでした。\nしかしついに、彼はその問題に立ち向かい、先生に助けを求めることに決めました。"
            },
            rationale: "【文脈の流れ】\n前半で「悪い成績をとっていたが、何もしなかった(did not do anything)」とあり、Finally（ついに）で行動の変化が示唆されている。\n\n【コロケーション】\nproblem（問題）に対してどうするか？\nalter（変える）、impress（感動させる）、honor（称える）ではなく、confront（直面する、立ち向かう）が文脈として適切。\n\n【成句】\nconfront the problem（問題に立ち向かう）をひとかたまりのフレーズとして押さえる。"
        },
        {
            id: 4,
            text: "The St. Patrick's Day parade started on 10th Avenue and ( ) slowly to the center of town.",
            choices: ["illustrated", "reminded", "proceeded", "defended"],
            choiceMeanings: ["説明した", "思い出させた", "進んだ", "守った"],
            correctAnswer: 3,
            structure: "The St. Patrick's Day parade [S] started [V] ... and proceeded [V] slowly [M].",
            explanation: "proceeded: 進んだ",
            translation: {
                intermediate: "セントパトリックスデーのパレードは10番通りで始まり、町の中心へゆっくりと進みました。"
            },
            rationale: "【文脈からの推測】\n「パレードが〜で始まり、町の中心へ（to the center of town）ゆっくりと ( ) した」という文脈。\nstart（始まる）に続く動作として、目的地に向かって「進む」という意味が自然。\n\n【語彙】\nproceed は「（特定の方向へ）進む、続行する」という意味の動詞。\nillustrated（説明した）、reminded（思い出させた）、defended（守った）は文脈に合わない。"
        },
        {
            id: 5,
            text: "Before there were motor vehicles, people often used ( ) that were pulled by horses to make long journeys.",
            choices: ["carriages", "fantasies", "puzzles", "luxuries"],
            choiceMeanings: ["馬車", "空想", "パズル", "贅沢品"],
            correctAnswer: 1,
            structure: "people [S] often used [V] carriages [O] that were pulled by horses [M].",
            explanation: "carriages: 馬車",
            translation: {
                intermediate: "自動車が存在する前、人々は長い旅をするために、馬に引かれる馬車をよく使いました。"
            },
            rationale: "【手がかりの特定】\n関係代名詞節 that were pulled by horses（馬に引かれる）が直前の空所を修飾している。\n「馬に引かれる乗り物」＝ carriage（馬車）と判断できる。\n\n【語彙】\nfantasies（空想）、puzzles（パズル）、luxuries（贅沢品）は「馬に引かれる」ものとして不適切。"
        },
        {
            id: 6,
            text: "Jane bought five silk handkerchiefs. Because she was going to give each one to a different friend, she asked the salesclerk to wrap them ( ).",
            choices: ["legally", "financially", "accidentally", "individually"],
            choiceMeanings: ["法的に", "財政的に", "偶然に", "個別に"],
            correctAnswer: 4,
            structure: "she [S] asked [V] the salesclerk [O] to wrap them individually [C].",
            explanation: "individually: 個別に",
            translation: {
                intermediate: "彼女はそれぞれのハンカチを別々の友人に贈るつもりだったので、店員にそれらを個別に包むように頼みました。"
            },
            rationale: "【文脈の論理】\nBecause 節で「それぞれ(each one)を違う友人(different friend)にあげるつもりだ」と書かれている。\nしたがって、まとめてではなく「個別に(individually)」包む必要がある。\n\n【語彙】\nindividually（個別に）は individual（個人の）の副詞形。\nlegally（法的に）、financially（財政的に）、accidentally（偶然に）は文脈に合わない。"
        },
        {
            id: 7,
            text: "In the first lecture, Professor Smith ( ) how important it was to take good notes. He mentioned it three or four times.",
            choices: ["engaged", "divided", "buried", "stressed"],
            choiceMeanings: ["従事させた", "分けた", "埋めた", "強調した"],
            correctAnswer: 4,
            structure: "Professor Smith [S] stressed [V] how important it was to take good notes [O].",
            explanation: "stressed: 強調した",
            translation: {
                intermediate: "最初の講義で、スミス教授は良いノートを取ることがいかに重要であるかを強調しました。"
            },
            rationale: "【言い換えの発見】\n第二文の He mentioned it three or four times.（彼はそれに3、4回言及した）がヒント。\n何度も言うということは、その重要性を「強調した（stressed）」ということ。\n\n【語彙】\nstress は名詞で「ストレス」だが、動詞では「強調する」という意味になる重要語。"
        },
        {
            id: 8,
            text: "Yesterday, there was a small fire at a house on the street where Ben lives. Firefighters ( ) water onto the fire and soon put it out.",
            choices: ["sprayed", "demanded", "awarded", "punished"],
            choiceMeanings: ["噴射した", "要求した", "授与した", "罰した"],
            correctAnswer: 1,
            structure: "Firefighters [S] sprayed [V] water [O] onto the fire [M].",
            explanation: "sprayed: 噴射した（スプレーした）",
            translation: {
                intermediate: "消防士たちは火に水を噴射し、すぐに消し止めました。"
            },
            rationale: "【状況からの推測】\n主語は Firefighters（消防士）、目的語は water（水）、対象は onto the fire（火へ）。\n消防士が火に水をどうするかを考えれば、spray（（液体を）吹きかける、噴射する）が適切。\n日本語の「スプレー」と同じ語源。"
        },
        {
            id: 9,
            text: "In the game <i>Invasion!</i>, each player tries to take over other countries and build an ( ).",
            choices: ["urgency", "offspring", "empire", "impulse"],
            choiceMeanings: ["緊急", "子孫", "帝国", "衝動"],
            correctAnswer: 3,
            structure: "each player [S] tries [V] to ... build [V] an empire [O].",
            explanation: "empire: 帝国",
            translation: {
                intermediate: "『Invasion!』というゲームでは、各プレイヤーは他の国を乗っ取り、帝国を築こうとします。"
            },
            rationale: "【コロケーションと文脈】\ntake over other countries（他国を乗っ取る）というゲームの目的から、build an empire（帝国を築く）という表現が結びつく。\n\n【語彙】\nInvasion（侵略）というゲームタイトルもヒントになる。\nurgency（緊急）、offspring（子孫）、impulse（衝動）は文脈に合わない。"
        },
        {
            id: 10,
            text: "In science class, Ms. Dixon lit a candle and asked her students to look at the ( ). She told them that the hottest part was where it was blue.",
            choices: ["triumph", "religion", "flame", "luggage"],
            choiceMeanings: ["勝利", "宗教", "炎", "荷物"],
            correctAnswer: 3,
            structure: "Ms. Dixon ... asked [V] her students [O] to look at the flame [C].",
            explanation: "flame: 炎",
            translation: {
                intermediate: "理科の授業で、ディクソン先生はろうそくに火をつけ、生徒たちにその炎を見るように言いました。"
            },
            rationale: "【文脈の照応】\nlit a candle（ろうそくに火をつけた）という動作の直後なので、見る対象は flame（炎）。\nさらに後続文の the hottest part is where it was blue（最も熱い部分は青いところだ）は炎の説明になっている。\n\n【語彙】\ntriumph（勝利）、religion（宗教）、luggage（荷物）はろうそくとは無関係。"
        },
        {
            id: 11,
            text: "Margaret's parents finally bought her a piano after she promised to practice every day, but she quit playing after just two months. They were very ( ) her.",
            choices: ["capable of", "inspired by", "attracted to", "disappointed in"],
            choiceMeanings: ["〜の能力がある", "〜に触発される", "〜に惹かれる", "〜に失望して"],
            correctAnswer: 4,
            structure: "They [S] were [V] very disappointed in [C] her.",
            explanation: "disappointed in: 〜に失望して",
            translation: {
                intermediate: "彼女は毎日練習すると約束した後わずか2ヶ月でピアノを辞めてしまったので、両親は彼女にとても失望しました。"
            },
            rationale: "【因果関係の理解】\n「約束したのに、すぐに辞めてしまった」というネガティブな状況。\n両親の感情として最も適切なのは disappointed in（〜にがっかりしている、失望している）。\n\n【熟語】\nbe disappointed in [person] で「（人）に失望する」という意味。"
        },
        {
            id: 12,
            text: "A: I'm sorry that I came home late. Did you have dinner without me?<br>B: Yes. We were very hungry, but I ( ) some food for you. I'll heat it up now.",
            choices: ["cut down", "hung up", "took after", "set aside"],
            choiceMeanings: ["〜を減らす", "電話を切る", "〜に似る", "〜を取っておく"],
            correctAnswer: 4,
            structure: "I [S] set aside [V] some food [O] for you [M].",
            explanation: "set aside: （のけて）取っておく",
            translation: {
                intermediate: "A: 帰りが遅くなってごめんなさい。私なしで夕食食べた？\nB: うん。すごくお腹が空いてたから。でもあなたのために少し食事を取っておいたよ。今温めるね。"
            },
            rationale: "【文脈からの判断】\n「遅く帰ってきた相手のために食事をどうしたか」という場面。\nI'll heat it up now.（今温めるね）と言っていることから、食事を残しておいたことがわかる。\nset aside は「（後で使うために）〜を取っておく、脇に置く」という意味。"
        },
        {
            id: 13,
            text: "Due to construction work on Bayside Street, the electricity to the houses on the street had to be ( ) for two hours.",
            choices: ["heard of", "turned over", "shut off", "ruled out"],
            choiceMeanings: ["〜のことを聞く", "ひっくり返す", "止める（遮断する）", "除外する"],
            correctAnswer: 3,
            structure: "the electricity ... [S] had to be shut off [V] for two hours [M].",
            explanation: "shut off: 止められる（遮断される）",
            translation: {
                intermediate: "ベイサイドストリートでの工事のため、その通りの家への電気は2時間遮断されなければなりませんでした。"
            },
            rationale: "【文脈の推理】\nDue to construction work（工事のため）という理由から、safetyのために電気がどうされたかを考える。\nshut off（（電気・ガスなどを）止める、遮断する）が適切。\n\n【語彙】\nturn on（つける）/ turn off（消す）に近いが、供給元から遮断する場合は shut off がよく使われる。"
        },
        {
            id: 14,
            text: "Tau Electronics has confirmed that it will be ( ) its new smartphone next month. The release has been delayed for several months due to technical issues.",
            choices: ["bringing out", "falling for", "picking on", "giving off"],
            choiceMeanings: ["発売する（世に出す）", "騙される", "いじめる", "（においなどを）発する"],
            correctAnswer: 1,
            structure: "it [S] will be bringing out [V] its new smartphone [O] next month [M].",
            explanation: "bringing out: 発売する（世に出す）",
            translation: {
                intermediate: "タウ・エレクトロニクスは、来月新しいスマートフォンを発売することを確認しました。"
            },
            rationale: "【ビジネス文脈の句動詞】\n企業が新製品（new smartphone）をどうするか。\nThe release has been delayed（発売が遅れていた）という後続文からも、bring out（市場に出す、発売する）が正解。\n\n【類義語】\nrelease, launch, publish などと言い換えられる。"
        },
        {
            id: 15,
            text: "Water that falls as snow and rain in the Andes Mountains travels thousands of kilometers down the Amazon River and eventually ( ) the Atlantic Ocean.",
            choices: ["flows into", "runs across", "hands over", "digs up"],
            choiceMeanings: ["〜に流れ込む", "偶然出会う", "手渡す", "掘り起こす"],
            correctAnswer: 1,
            structure: "Water ... [S] eventually flows into [V] the Atlantic Ocean [O].",
            explanation: "flows into: 〜に流れ込む",
            translation: {
                intermediate: "アンデス山脈に雪や雨として降る水は、何千キロもアマゾン川を下り、最終的に大西洋に流れ込みます。"
            },
            rationale: "【自然現象の描写】\n主語は Water（水）。川を下って海（Atlantic Ocean）にどうなるか。\n川が海に注ぐことは flow into（〜に流れ込む）で表す。\n\n【語彙】\nflow（流れる）＋ into（中へ）のイメージを持つ。"
        },
        {
            id: 16,
            text: "Applicants for jobs at Swandon Foods must apply ( ). They are not allowed to mail their application forms. Instead, they must take them to the store manager or his assistant.",
            choices: ["at ease", "at length", "in person", "in detail"],
            choiceMeanings: ["気楽に", "詳細に（長々と）", "直接（本人が）", "詳細に"],
            correctAnswer: 3,
            structure: "Applicants ... [S] must apply [V] in person [M].",
            explanation: "in person: 直接（本人が）",
            translation: {
                intermediate: "スワンドン・フーズの求職者は、直接応募しなければなりません（郵送は許可されていません）。"
            },
            rationale: "【対比による推測】\nThey are not allowed to mail（郵送は許可されない）と対比されている。\n郵送の反対は「直接行く」こと。\nAlso, take them to the store manager（店長に持っていく）とも整合する。\n\n【熟語】\nin person は「代理でなく本人が直接」という意味の最重要熟語。"
        },
        {
            id: 17,
            text: "The students in Jason's class take turns to look after things in the classroom. This week, Jason is ( ) of checking that there is no trash on the floor at the end of each day.",
            choices: ["for fear", "in charge", "on behalf", "by way"],
            choiceMeanings: ["〜を恐れて", "〜を担当して", "〜を代表して", "〜を経由して"],
            correctAnswer: 2,
            structure: "Jason [S] is [V] in charge [C] of checking ...",
            explanation: "in charge (of): （〜の）担当で",
            translation: {
                intermediate: "今週、ジェイソンは毎日終わりに床にゴミがないか確認する担当です。"
            },
            rationale: "【文脈把握】\n「クラスで（当番で）何かを世話する(look after)」という文脈。\nJason is ( ) of checking... で、確認する「係・担当」であることを表す表現が必要。\nbe in charge of 〜（〜の担当である、責任者である）が適切。"
        },
        {
            id: 18,
            text: "Jenny is an excellent cook. Her soups and stews are as good as ( ) that are served in a restaurant.",
            choices: ["none", "any", "other", "few"],
            choiceMeanings: ["どれも〜ない", "いかなるもの", "他の", "ほとんど〜ない"],
            correctAnswer: 2,
            structure: "Her soups and stews [S] are [V] as good as any [C] that are served...",
            explanation: "any: いかなるもの（肯定文での強調）",
            translation: {
                intermediate: "彼女のスープやシチューは、レストランで出されるどんなものにも劣らず美味しいです。"
            },
            rationale: "【比較構文の慣用表現】\nas good as any (...) は「（...する）どれにも劣らず良い」「（...する）どんなものと同じくらい良い」という意味。\nany が肯定文で使われると「どれでも、いかなる」という強調の意味を持つ。\n「プロの料理（レストラン）と同じくらい美味しい」という褒め言葉。"
        },
        {
            id: 19,
            text: "A: Mom, can I go to the park to play with Jimmy later?<br>B: Yes, ( ) you finish your homework first.",
            choices: ["provide", "provided", "to provide", "only provide"],
            choiceMeanings: ["提供する", "〜という条件で", "提供するために", "提供するだけ"],
            correctAnswer: 2,
            structure: "provided [M] (that) you [S] finish [V] your homework [O] first.",
            explanation: "provided (that): 〜という条件で（もし〜なら）",
            translation: {
                intermediate: "A: お母さん、後でジミーと遊びに公園に行ってもいい？\nB: ええ、最初に宿題を終わらせるという条件ならね。"
            },
            rationale: "【接続詞的用法の分詞】\n空所の位置は接続詞が入るべき場所（S+Vがつながっている）。\nprovided (that) ... は if ...（もし〜ならば、〜という条件で）と同様に使える。\n文脈的にも「宿題を終わらせるなら（行ってもいい）」という条件付けが自然。"
        },
        {
            id: 20,
            text: "Ms. Misawa is very rich and lives in a huge house. Her kitchen is four times ( ) other people's kitchens.",
            choices: ["large from", "size from", "the large of", "the size of"],
            choiceMeanings: ["（文法的に不適）", "（文法的に不適）", "（文法的に不適）", "〜の大きさ"],
            correctAnswer: 4,
            structure: "Her kitchen [S] is [V] four times the size of [C] other people's kitchens.",
            explanation: "times the size of: 〜の倍の大きさ",
            translation: {
                intermediate: "彼女のキッチンは、他の人々のキッチンの4倍の大きさです。"
            },
            rationale: "【倍数表現】\n「AはBのX倍の大きさだ」という表現。\nX times as large as B や\nX times the size of B\nという形をとる。\n選択肢の中で文法的に正しいのは the size of のみ。\nChoice 1 (large from), 2 (size from), 3 (the large of) は英語として不自然または誤り。"
        }
    ]
};
