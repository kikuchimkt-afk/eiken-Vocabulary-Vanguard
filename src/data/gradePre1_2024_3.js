// Grade Pre-1 (準1級) - 2024年度 第3回検定
// structure: フィールド分離形式（複雑な文構造対応）
export const gradePre1_2024_3Data = {
    title: "2024年度第3回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "Walter's soccer team lost the game because they did not play ( ) enough. If they had worried less about defense and had tried to score more goals, they probably would have won.",
            choices: ["needlessly", "aggressively", "cautiously", "helplessly"],
            choiceMeanings: ["不必要に", "攻撃的に", "慎重に", "無力に"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Walter's soccer team lost the game because they did not play (aggressively) enough.",
                mainClause: "Walter's soccer team [S] lost [V] the game [O]",
                becauseClause: "because they [S'] did not play [V'] aggressively enough [M] → 理由を表すbecause節",
                conditionalClause: "If they had worried less about defense and had tried to score more goals, they probably would have won → 仮定法過去完了",
                grammarPoint: "仮定法過去完了（過去の事実に反する仮定）"
            },
            explanation: "aggressively: 攻撃的に、積極的に",
            translation: {
                literal: "彼らは [S'] プレーしなかった [V'] 十分に攻撃的に [M]。",
                natural: "彼らは十分に攻撃的にプレーしなかった。",
                intermediate: "ウォルターのサッカーチームは、十分に攻撃的にプレーしなかったために試合に負けました。もし守備のことを心配しすぎず、もっと得点を取ろうとしていれば、おそらく勝てていたでしょう。"
            },
            rationale: "【文脈】守備を心配しすぎた、得点を取ろうとすべきだった → aggressively（攻撃的に）。"
        },
        {
            id: 2,
            text: "Tom is very bright for his age. He is able to do math problems of some ( ) although his classmates are still learning the basics.",
            choices: ["appliance", "generosity", "clearance", "complexity"],
            choiceMeanings: ["器具", "寛大さ", "除去", "複雑さ"],
            correctAnswer: 4,
            structure: {
                fullSentence: "He is able to do math problems of some (complexity) although his classmates are still learning the basics.",
                mainClause: "He [S] is able to do [V] math problems [O] of some complexity [M]",
                althoughClause: "although his classmates [S'] are still learning [V'] the basics [O'] → 譲歩のalthough節",
                contrastDetail: "complexity ↔ basics の対比"
            },
            explanation: "complexity: 複雑さ",
            translation: {
                literal: "彼は [S] できる [V] 数学の問題を [O] ある程度の複雑さの [M]。",
                natural: "彼はある程度複雑な数学の問題を解くことができる。",
                intermediate: "トムは年齢の割にとても聡明です。クラスメートはまだ基礎を学んでいますが、彼はある程度複雑な数学の問題を解くことができます。"
            },
            rationale: "【文脈】基礎を学んでいる他人とは違い、難しいことができる → complexity（複雑さ）。"
        },
        {
            id: 3,
            text: "Annual floods along the Nile River make the soil there extremely ( ). This made it possible for an agricultural civilization to develop there around 5,000 years ago.",
            choices: ["devout", "wretched", "earnest", "fertile"],
            choiceMeanings: ["敬虔な", "悲惨な", "熱心な", "肥沃な"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Annual floods along the Nile River make the soil there extremely (fertile).",
                mainClause: "Annual floods [S] along the Nile River [M] make [V] the soil [O] extremely fertile [C]",
                resultClause: "This made it possible for an agricultural civilization to develop there → 結果（形式目的語構文）",
                grammarPoint: "make + O + C（SVOC構文）/ make it possible for O to do"
            },
            explanation: "fertile: （土地が）肥沃な",
            translation: {
                literal: "毎年の洪水は [S] する [V] 土壌を [O] 非常に肥沃に [C]。",
                natural: "毎年の洪水は土壌を非常に肥沃にする。",
                intermediate: "ナイル川沿いの毎年の洪水は、そこの土壌を非常に肥沃にします。これにより、約5000年前にそこで農業文明が発展することが可能になりました。"
            },
            rationale: "【文脈】農業文明が発展する → 土壌が良い → fertile（肥沃な）。"
        },
        {
            id: 4,
            text: "The children could not ( ) opening their presents on Christmas morning. They got up early and began opening them before their parents had awoken.",
            choices: ["resist", "dispute", "flourish", "drain"],
            choiceMeanings: ["我慢する（抵抗する）", "論争する", "繁栄する", "排出する"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The children could not (resist) opening their presents on Christmas morning.",
                mainClause: "The children [S] could not resist [V] opening their presents [O:動名詞] on Christmas morning [M]",
                evidenceClause: "They got up early and began opening them before their parents had awoken → resist できなかった根拠",
                grammarPoint: "resist + -ing = 「～するのを我慢する」/ 過去完了（awoken）"
            },
            explanation: "resist: 我慢する、抵抗する",
            translation: {
                literal: "子供たちは [S] 我慢できなかった [V] プレゼントを開けることを [O]。",
                natural: "子供たちはプレゼントを開けるのを我慢できなかった。",
                intermediate: "子供たちはクリスマスの朝にプレゼントを開けるのを我慢できませんでした。彼らは早起きして、両親が起きる前にプレゼントを開け始めました。"
            },
            rationale: "【文脈】親が起きる前に開け始めた → 我慢できなかった → resist（我慢する）。"
        },
        {
            id: 5,
            text: "A man was arrested at the airport yesterday for attempting to ( ) illegal drugs into the country.",
            choices: ["erupt", "smuggle", "reign", "infest"],
            choiceMeanings: ["噴火する", "密輸する", "統治する", "はびこる"],
            correctAnswer: 2,
            structure: {
                fullSentence: "A man was arrested at the airport yesterday for attempting to (smuggle) illegal drugs into the country.",
                mainClause: "A man [S] was arrested [V:受動態] at the airport [M] yesterday [M]",
                reasonPhrase: "for attempting to smuggle illegal drugs into the country [M:理由] → 「違法薬物を密輸しようとしたため」",
                grammarPoint: "be arrested for + -ing = 「～したために逮捕される」"
            },
            explanation: "smuggle: 密輸する",
            translation: {
                literal: "男性が [S] 逮捕された [V] 空港で [M] 密輸しようと試みたため [理由]。",
                natural: "男性が空港で密輸しようとしたために逮捕された。",
                intermediate: "昨日、空港で違法薬物を国内に密輸しようとした男が逮捕されました。"
            },
            rationale: "【文脈】空港で逮捕、違法薬物 → smuggle（密輸する）。"
        },
        {
            id: 6,
            text: "Soon after they met, the young couple became ( ). They spent all of their free time together.",
            choices: ["implicit", "inedible", "immature", "inseparable"],
            choiceMeanings: ["暗黙の", "食べられない", "未熟な", "切り離せない（いつも一緒にいる）"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Soon after they met, the young couple became (inseparable).",
                timePhrase: "Soon after they met [M:時] → 「出会ってすぐに」",
                mainClause: "the young couple [S] became [V] inseparable [C]",
                evidenceClause: "They spent all of their free time together → inseparable の根拠"
            },
            explanation: "inseparable: 切り離せない、片時も離れない",
            translation: {
                literal: "若いカップルは [S] なった [V] 切り離せない状態に [C]。",
                natural: "若いカップルは片時も離れなくなった。",
                intermediate: "出会ってすぐに、その若いカップルは片時も離れなくなりました。彼らは自由時間のすべてを一緒に過ごしました。"
            },
            rationale: "【文脈】ずっと一緒にいる → inseparable（切り離せない）。"
        },
        {
            id: 7,
            text: "Although the medicine did not completely relieve Frank's headache, it made the pain more ( ), and he was able to continue working.",
            choices: ["tolerable", "slippery", "militant", "abrupt"],
            choiceMeanings: ["我慢できる", "滑りやすい", "好戦的な", "突然の"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Although the medicine did not completely relieve Frank's headache, it made the pain more (tolerable).",
                althoughClause: "Although the medicine [S'] did not completely relieve [V'] Frank's headache [O'] → 譲歩のalthough節",
                mainClause: "it [S] made [V] the pain [O] more tolerable [C]",
                resultClause: "he was able to continue working → tolerable の結果",
                grammarPoint: "make + O + C（SVOC構文）"
            },
            explanation: "tolerable: 我慢できる、許容できる",
            translation: {
                literal: "それは [S] した [V] 痛みを [O] より我慢できるものに [C]。",
                natural: "それは痛みをより我慢できるものにした。",
                intermediate: "薬はフランクの頭痛を完全には取り除きませんでしたが、痛みをより我慢できるものにし、彼は仕事を続けることができました。"
            },
            rationale: "【文脈】完全に治ってはいないが仕事はできる → tolerable（我慢できる）。"
        },
        {
            id: 8,
            text: "The man was in ( ) that his marriage was over. Even after his wife left and filed for divorce, he insisted it was possible to get back together.",
            choices: ["denial", "contradiction", "majesty", "prejudice"],
            choiceMeanings: ["否認（現実を受け入れないこと）", "矛盾", "威厳", "偏見"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The man was in (denial) that his marriage was over.",
                mainClause: "The man [S] was [V] in denial [C]",
                thatClause: "that his marriage [S'] was [V'] over [C'] → 同格のthat節（denialの内容）",
                evidenceClause: "Even after his wife left and filed for divorce, he insisted it was possible to get back together → denial の根拠",
                grammarPoint: "be in denial = 「現実を認めない」/ even after = 「～した後でさえ」"
            },
            explanation: "denial: 否認、否定（特に、辛い現実を認めようとしないこと）",
            translation: {
                literal: "その男は [S] だった [V] 否認の状態に [C] 結婚が終わったという [that節]。",
                natural: "その男は結婚が終わったという現実を受け入れようとしなかった。",
                intermediate: "その男は結婚生活が終わったという現実を受け入れようとしませんでした（否認の状態でした）。妻が家を出て離婚を申請した後でさえ、彼は復縁可能だと主張しました。"
            },
            rationale: "【文脈】離婚申請されても復縁できると主張 → denial（否認）。"
        },
        {
            id: 9,
            text: "The walls inside the city hall building are decorated with ( ) painted by famous artists. The huge paintings never fail to impress visitors.",
            choices: ["memoirs", "margins", "monarchies", "murals"],
            choiceMeanings: ["回想録", "余白", "君主制", "壁画"],
            correctAnswer: 4,
            structure: {
                fullSentence: "The walls inside the city hall building are decorated with (murals) painted by famous artists.",
                mainClause: "The walls [S] inside the city hall building [M] are decorated [V:受動態] with murals [M]",
                participlePhrase: "painted by famous artists [M:過去分詞] → 「有名な芸術家によって描かれた」（muralsを修飾）",
                evidenceClause: "The huge paintings never fail to impress visitors → murals の根拠"
            },
            explanation: "mural: 壁画",
            translation: {
                literal: "壁は [S] 装飾されている [V] 壁画で [M] 有名な芸術家によって描かれた [M]。",
                natural: "壁は有名な芸術家によって描かれた壁画で装飾されている。",
                intermediate: "市庁舎の建物の内部の壁は、有名な芸術家によって描かれた壁画で装飾されています。その巨大な絵画は、訪問者を常に感動させます。"
            },
            rationale: "【文脈】壁に描かれた巨大な絵画 → mural（壁画）。"
        },
        {
            id: 10,
            text: "The Ferris wheel began to ( ) slowly, lifting the carriages and their passengers high above the city and then down again.",
            choices: ["revolve", "digest", "compile", "afflict"],
            choiceMeanings: ["回転する", "消化する", "編集する", "苦しめる"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The Ferris wheel began to (revolve) slowly, lifting the carriages and their passengers high above the city.",
                mainClause: "The Ferris wheel [S] began [V] to revolve slowly [O:to不定詞]",
                participlePhrase: "lifting the carriages and their passengers high above the city and then down again [M:分詞構文] → 「ゴンドラと乗客を持ち上げながら」",
                grammarPoint: "begin to do / 分詞構文（付帯状況）"
            },
            explanation: "revolve: 回転する",
            translation: {
                literal: "観覧車は [S] 始めた [V] ゆっくりと回転することを [O]。",
                natural: "観覧車はゆっくりと回転し始めた。",
                intermediate: "観覧車はゆっくりと回転し始め、ゴンドラと乗客を街の上空高く持ち上げ、そして再び下ろしました。"
            },
            rationale: "【文脈】観覧車の動き → revolve（回転する）。"
        },
        {
            id: 11,
            text: "Yesterday, a ( ) broke out in the state prison. According to reports, the prisoners reacted violently in protest to overcrowding and poor food quality.",
            choices: ["flurry", "cascade", "swirl", "riot"],
            choiceMeanings: ["突風、動揺", "滝", "渦", "暴動"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Yesterday, a (riot) broke out in the state prison.",
                mainClause: "a riot [S] broke out [V] in the state prison [M] yesterday [M]",
                evidenceClause: "the prisoners reacted violently in protest to overcrowding and poor food quality → riot の具体的内容",
                grammarPoint: "break out = 「（暴動・戦争などが）発生する」"
            },
            explanation: "riot: 暴動",
            translation: {
                literal: "暴動が [S] 発生した [V] 州刑務所で [M]。",
                natural: "州刑務所で暴動が発生した。",
                intermediate: "昨日、州刑務所で暴動が発生しました。報告によると、囚人たちは過密状態と食事の質の悪さに抗議して暴力的に反応しました。"
            },
            rationale: "【文脈】刑務所で暴力的な抗議 → riot（暴動）。"
        },
        {
            id: 12,
            text: "Brad drove so carelessly that it was ( ) he would have an accident. And last week, that exact situation occurred.",
            choices: ["crucial", "debatable", "inevitable", "sacrificial"],
            choiceMeanings: ["重要な", "議論の余地がある", "避けられない（必然の）", "犠牲の"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Brad drove so carelessly that it was (inevitable) he would have an accident.",
                mainClause: "Brad [S] drove [V] so carelessly [M]",
                resultClause: "that it [形式S] was [V'] inevitable [C'] he would have an accident [真S] → so...that構文",
                evidenceClause: "And last week, that exact situation occurred → 実際に事故が起きた",
                grammarPoint: "so + 副詞 + that = 「とても～なので...」"
            },
            explanation: "inevitable: 避けられない、必然の",
            translation: {
                literal: "ブラッドは [S] 運転した [V] とても不注意に [M] 避けられなかったほど [result] 彼が事故を起こすことが [真S]。",
                natural: "ブラッドはあまりに不注意に運転したので、事故は避けられなかった。",
                intermediate: "ブラッドはあまりに不注意に運転していたので、事故を起こすのは避けられませんでした（時間の問題でした）。そして先週、まさにその状況が起こりました。"
            },
            rationale: "【文脈】不注意な運転 → 事故は当然 → inevitable（避けられない）。"
        },
        {
            id: 13,
            text: "Although her son claims he broke the vase by accident, Anika thinks he did it ( ) because he was angry at her for making him clean his room.",
            choices: ["loyally", "deliberately", "spatially", "expansively"],
            choiceMeanings: ["忠実に", "故意に（わざと）", "空間的に", "広範囲に"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Although her son claims he broke the vase by accident, Anika thinks he did it (deliberately).",
                althoughClause: "Although her son [S'] claims [V'] he broke the vase by accident [O':that節] → 譲歩のalthough節",
                mainClause: "Anika [S] thinks [V] he did it deliberately [O:that節]",
                becauseClause: "because he [S''] was [V''] angry [C''] at her [M] for making him clean his room [M] → 理由節",
                contrastDetail: "by accident ↔ deliberately の対比"
            },
            explanation: "deliberately: 故意に、わざと",
            translation: {
                literal: "アニカは [S] 思っている [V] 彼がそれを故意にやったと [O]。",
                natural: "アニカは彼がわざとやったと思っている。",
                intermediate: "息子は花瓶をうっかり割ったと主張していますが、アニカは彼が部屋の掃除をさせられたことに腹を立てていたため、わざとやったと考えています。"
            },
            rationale: "【文脈】怒っていたからやった、事故ではない → deliberately（故意に）。"
        },
        {
            id: 14,
            text: "Many residents wanted to ( ) the town hall as a historic building since it was over one hundred years old.",
            choices: ["designate", "assemble", "undertake", "compromise"],
            choiceMeanings: ["指定する", "組み立てる", "引き受ける", "妥協する"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Many residents wanted to (designate) the town hall as a historic building since it was over one hundred years old.",
                mainClause: "Many residents [S] wanted [V] to designate the town hall as a historic building [O:to不定詞句]",
                sinceClause: "since it [S'] was [V'] over one hundred years old [C'] → 理由を表すsince節",
                grammarPoint: "designate A as B = 「AをBとして指定する」"
            },
            explanation: "designate: 指定する",
            translation: {
                literal: "多くの住民は [S] 望んだ [V] 指定することを [O] 市庁舎を [O'] 歴史的建造物として [M]。",
                natural: "多くの住民は市庁舎を歴史的建造物として指定することを望んだ。",
                intermediate: "多くの住民は、市庁舎が100年以上前のものであるため、歴史的建造物として指定することを望んでいました。"
            },
            rationale: "【文脈】古い建物を歴史的建造物にする → designate（指定する）。"
        },
        {
            id: 15,
            text: "As soon as they heard police sirens, the thieves ( ) into the woods to avoid being caught.",
            choices: ["took off", "missed out", "wore out", "passed over"],
            choiceMeanings: ["急いで去った（逃げた）", "逃した", "すり減った", "無視した"],
            correctAnswer: 1,
            structure: {
                fullSentence: "As soon as they heard police sirens, the thieves (took off) into the woods to avoid being caught.",
                asSoonAsClause: "As soon as they [S'] heard [V'] police sirens [O'] → 「サイレンを聞くとすぐに」",
                mainClause: "the thieves [S] took off [V] into the woods [M]",
                purposeClause: "to avoid being caught [M:目的] → 「捕まるのを避けるために」",
                grammarPoint: "as soon as = 「～するとすぐに」/ take off = 「急いで去る」"
            },
            explanation: "take off: 急いで立ち去る、逃げる",
            translation: {
                literal: "泥棒たちは [S] 急いで去った [V] 森の中へ [M]。",
                natural: "泥棒たちは森の中へ逃げた。",
                intermediate: "パトカーのサイレンを聞くとすぐに、泥棒たちは捕まるのを避けるために森の中へ逃げ込みました。"
            },
            rationale: "【熟語】捕まらないように逃げる → take off（急いで去る）。"
        },
        {
            id: 16,
            text: "The Nelsons tried to sell their house earlier this year, but few people were interested in buying it. They have decided to ( ) until the market improves.",
            choices: ["turn over", "ring in", "hold off", "rain down"],
            choiceMeanings: ["ひっくり返す", "（新年などを）迎える", "延期する（見合わせる）", "雨のように降る"],
            correctAnswer: 3,
            structure: {
                fullSentence: "The Nelsons tried to sell their house earlier this year, but few people were interested. They have decided to (hold off) until the market improves.",
                firstClause: "The Nelsons [S] tried [V] to sell their house [O:to不定詞] earlier this year [M]",
                contrastClause: "but few people [S'] were [V'] interested [C'] in buying it [M] → 対比",
                mainClause: "They [S''] have decided [V''] to hold off [O'':to不定詞]",
                untilClause: "until the market [S'''] improves [V'''] → 時を表すuntil節",
                grammarPoint: "hold off = 「延期する、見合わせる」"
            },
            explanation: "hold off: 延期する、見合わせる、保留にする",
            translation: {
                literal: "彼らは [S''] 決めた [V''] 見合わせることを [O''] 市場が改善するまで [until節]。",
                natural: "彼らは市場が改善するまで見合わせることにした。",
                intermediate: "ネルソン一家は今年初めに家を売ろうとしましたが、購入に興味を持つ人はほとんどいませんでした。彼らは市場が改善するまで売却を見合わせることにしました。"
            },
            rationale: "【文脈】今は売れないから待つ → hold off（見合わせる）。"
        },
        {
            id: 17,
            text: "At the start of every meeting, the team leader quickly ( ) a list of topics that will be discussed so that everyone knows what to expect.",
            choices: ["plays out", "smooths over", "runs through", "clears out"],
            choiceMeanings: ["展開する", "取り繕う", "ざっと目を通す（読み上げる）", "空にする"],
            correctAnswer: 3,
            structure: {
                fullSentence: "At the start of every meeting, the team leader quickly (runs through) a list of topics that will be discussed.",
                timePhrase: "At the start of every meeting [M:時] → 「毎回の会議の開始時に」",
                mainClause: "the team leader [S] quickly runs through [V] a list of topics [O]",
                relativeClause: "that [S'] will be discussed [V':受動態] → 関係代名詞節（topicsを修飾）",
                purposeClause: "so that everyone [S''] knows [V''] what to expect [O''] → 目的を表すso that節",
                grammarPoint: "run through = 「ざっと確認する」/ so that = 「～するために」"
            },
            explanation: "run through: （リストなどを）ざっと読み上げる、確認する、目を通す",
            translation: {
                literal: "チームリーダーは [S] 素早くざっと読み上げる [V] トピックのリストを [O]。",
                natural: "チームリーダーはトピックのリストを素早く確認する。",
                intermediate: "毎回の会議の開始時に、チームリーダーは全員が何を予期すべきかわかるように、議論されるトピックのリストを素早く読み上げます（確認します）。"
            },
            rationale: "【文脈】会議の始めにトピックを確認する → run through。"
        },
        {
            id: 18,
            text: "Neither side was willing to ( ) during the trade negotiations, so the two countries could not reach an agreement.",
            choices: ["catch on", "throw off", "fix up", "back down"],
            choiceMeanings: ["理解する", "振り払う", "修理する", "折れる（撤回する）"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Neither side was willing to (back down) during the trade negotiations, so the two countries could not reach an agreement.",
                mainClause: "Neither side [S] was [V] willing [C] to back down [M:to不定詞]",
                timePhrase: "during the trade negotiations [M:時] → 「貿易交渉の間」",
                resultClause: "so the two countries [S'] could not reach [V'] an agreement [O'] → 結果",
                grammarPoint: "be willing to do = 「～する意思がある」/ back down = 「引き下がる」"
            },
            explanation: "back down: （主張などを）撤回する、折れる、引き下がる",
            translation: {
                literal: "どちら側も [S] 意思がなかった [V] 折れることに [M]。",
                natural: "どちら側も引こうとしなかった。",
                intermediate: "貿易交渉の間、どちら側も引こうとしなかったため（主張を曲げようとしなかったため）、両国は合意に達することができませんでした。"
            },
            rationale: "【文脈】合意できない → 双方が譲らない → back down（引き下がる）しない。"
        }
    ]
};
