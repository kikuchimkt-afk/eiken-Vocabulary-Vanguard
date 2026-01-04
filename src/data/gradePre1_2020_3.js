// Grade Pre-1 (準1級) - 2020年度 第3回検定
// structure: フィールド分離形式（詳細解説対応）
export const gradePre1_2020_3Data = {
    title: "2020年度第3回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "Miriam tries to use healthy ( ) when preparing food. For example, instead of using butter to make cookies, she uses olive oil.",
            choices: ["ingredients", "attributes", "perimeters", "surroundings"],
            choiceMeanings: ["材料", "属性", "周囲", "環境"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Miriam tries to use healthy (ingredients) when preparing food.",
                mainClause: "Miriam [S] tries [V] to use healthy ingredients [O:to不定詞句]",
                modifierDetail: "when preparing food [M:分詞構文] → 「料理を作るとき」"
            },
            explanation: "ingredient: 材料、成分",
            translation: {
                literal: "ミリアムは [S] 試みる [V] 健康的な材料を使うことを [O]。",
                natural: "ミリアムは料理を作るとき、健康的な材料を使うようにしている。",
                intermediate: "ミリアムは料理を作るとき健康的な材料を使うようにしている。例えば、クッキーを作るときはバターの代わりにオリーブオイルを使う。"
            },
            rationale: "【文脈】butter, olive oil（バター、オリーブオイル）→ 料理の「材料」= ingredients。"
        },
        {
            id: 2,
            text: "The board members failed to reach a ( ) on how much to pay the new CEO. Some felt the initial figure suggested was too high.",
            choices: ["ratio", "preview", "consensus", "simulation"],
            choiceMeanings: ["比率", "プレビュー", "合意", "シミュレーション"],
            correctAnswer: 3,
            structure: {
                fullSentence: "The board members failed to reach a (consensus) on how much to pay the new CEO.",
                mainClause: "The board members [S] failed [V] to reach a consensus [O:to不定詞句]",
                modifierDetail: "on how much to pay [M:前置詞句+間接疑問] → 「いくら払うかについて」",
                grammarPoint: "fail to do = 「～できない」"
            },
            explanation: "consensus: 合意、総意",
            translation: {
                literal: "取締役会メンバーは [S] 失敗した [V] 合意に達することに [O]。",
                natural: "取締役会メンバーは新CEOへの支払い額について合意できなかった。",
                intermediate: "取締役会メンバーは新CEOへいくら払うかについて合意に達することができなかった。最初に提示された金額が高すぎると感じる者もいた。"
            },
            rationale: "【文脈】failed to reach... how much to pay（達することに失敗...いくら払うか）→ consensus（合意）。"
        },
        {
            id: 3,
            text: "Ellen's apartment was cheap, but living there quickly became ( ). There was no air conditioning, the roof leaked, and the baby next door often cried.",
            choices: ["decent", "crucial", "gracious", "intolerable"],
            choiceMeanings: ["まともな", "重要な", "優雅な", "耐えられない"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Ellen's apartment was cheap, but living there quickly became (intolerable).",
                mainClause: "living there [S:動名詞句] quickly became [V] intolerable [C]",
                contrast: "cheap [安い] ↔ intolerable [耐えられない] の対比（逆接 but）"
            },
            explanation: "intolerable: 耐えられない、我慢できない",
            translation: {
                literal: "そこに住むことは [S] すぐに [M] なった [V] 耐えられない [C]。",
                natural: "そこに住むことはすぐに耐えられなくなった。",
                intermediate: "エレンのアパートは安かったが、そこでの生活はすぐに耐えられなくなった。エアコンがなく、屋根から雨漏りし、隣の赤ちゃんがよく泣いていた。"
            },
            rationale: "【文脈】no air conditioning, roof leaked, baby cried（エアコンなし、雨漏り、赤ちゃんが泣く）→ intolerable（耐えられない）。"
        },
        {
            id: 4,
            text: "The deep ocean is a very ( ) environment with cold temperatures, high pressure, and no sunlight. In spite of this, many creatures manage to survive there.",
            choices: ["quaint", "inhospitable", "dignified", "confidential"],
            choiceMeanings: ["趣のある", "過酷な", "威厳のある", "機密の"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The deep ocean is a very (inhospitable) environment with cold temperatures, high pressure, and no sunlight.",
                mainClause: "The deep ocean [S] is [V] a very inhospitable environment [C]",
                modifierDetail: "with cold temperatures, high pressure, and no sunlight [M:付帯状況] → 並列構造（3要素）"
            },
            explanation: "inhospitable: 過酷な、住みにくい",
            translation: {
                literal: "深海は [S] です [V] とても過酷な環境 [C]。",
                natural: "深海は冷たい温度、高い圧力、日光のない、とても過酷な環境だ。",
                intermediate: "深海は冷たい温度、高い圧力、日光がないという、とても過酷な環境だ。それにもかかわらず、多くの生物がそこで生き延びている。"
            },
            rationale: "【文脈】cold, high pressure, no sunlight（寒い、高圧、日光なし）→ inhospitable（過酷な）。"
        },
        {
            id: 5,
            text: "As his grandmother's physical ( ) became more of a concern, Stuart encouraged her to move into a nursing home.",
            choices: ["haze", "canal", "frailty", "statistic"],
            choiceMeanings: ["霞", "運河", "虚弱さ", "統計"],
            correctAnswer: 3,
            structure: {
                fullSentence: "As his grandmother's physical (frailty) became more of a concern, Stuart encouraged her to move into a nursing home.",
                asClause: "As his grandmother's physical frailty [S'] became [V'] more of a concern [C'] → 理由を表すas節",
                mainClause: "Stuart [S] encouraged [V] her [O] to move into a nursing home [C:to不定詞]",
                grammarPoint: "encourage + O + to do = 「Oに～するよう勧める」"
            },
            explanation: "frailty: 虚弱さ、もろさ",
            translation: {
                literal: "祖母の身体的な虚弱さが [S'] より心配になるにつれ [V']、スチュアートは [S] 勧めた [V]。",
                natural: "祖母の身体的な虚弱さがより心配になってきたので、スチュアートは彼女に老人ホームに入ることを勧めた。",
                intermediate: "祖母の身体的な虚弱さがより心配事になってきたので、スチュアートは彼女に老人ホームに入るよう勧めた。"
            },
            rationale: "【文脈】physical... nursing home（身体的...老人ホーム）→ frailty（虚弱さ）。"
        },
        {
            id: 6,
            text: "In order to study various organisms, scientists have ( ) them according to differences and similarities. Each species is placed into a specific group.",
            choices: ["saluted", "classified", "personified", "extinguished"],
            choiceMeanings: ["敬礼した", "分類した", "擬人化した", "消した"],
            correctAnswer: 2,
            structure: {
                fullSentence: "In order to study various organisms, scientists have (classified) them according to differences and similarities.",
                purposeClause: "In order to study various organisms [M:目的] → 「様々な生物を研究するために」",
                mainClause: "scientists [S] have classified [V] them [O] according to differences and similarities [M]",
                grammarPoint: "in order to do = 「～するために」（目的）"
            },
            explanation: "classify: 分類する",
            translation: {
                literal: "科学者たちは [S] 分類してきた [V] それらを [O] 違いと類似点に従って [M]。",
                natural: "科学者たちは違いと類似点に従って生物を分類してきた。",
                intermediate: "様々な生物を研究するために、科学者たちは違いと類似点に従って分類してきた。各種はそれぞれ特定のグループに分けられる。"
            },
            rationale: "【文脈】differences and similarities, specific group（違いと類似点、特定のグループ）→ classified（分類した）。"
        },
        {
            id: 7,
            text: "A: James, our supplier said they didn't receive a payment this month.<br>B: Yes, I know. There was an ( ) by the accounting department. I'll call the supplier and apologize.",
            choices: ["underdog", "overhead", "upheaval", "oversight"],
            choiceMeanings: ["負け犬", "間接費", "大変動", "見落とし"],
            correctAnswer: 4,
            structure: {
                fullSentence: "There was an (oversight) by the accounting department.",
                mainClause: "There [形式主語] was [V] an oversight [S:真主語] by the accounting department [M]",
                grammarPoint: "There is/was... = 存在文"
            },
            explanation: "oversight: 見落とし、手抜かり",
            translation: {
                literal: "あった [V] 見落としが [S] 経理部による [M]。",
                natural: "経理部の見落としがあった。",
                intermediate: "A: ジェームズ、供給業者が今月支払いを受け取っていないと言っています。\nB: はい、知っています。経理部の見落としがありました。供給業者に電話して謝罪します。"
            },
            rationale: "【文脈】didn't receive a payment... apologize（支払いを受け取っていない...謝罪）→ oversight（見落とし）。"
        },
        {
            id: 8,
            text: "The man and his friend ( ) to rob a local bank. However, someone else found out and told the police, so they were caught before they could do anything.",
            choices: ["conspired", "inhaled", "diminished", "identified"],
            choiceMeanings: ["共謀した", "吸い込んだ", "減少した", "特定した"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The man and his friend (conspired) to rob a local bank.",
                mainClause: "The man and his friend [S] conspired [V] to rob a local bank [O:to不定詞句]",
                grammarPoint: "conspire to do = 「～しようと共謀する」"
            },
            explanation: "conspire: 共謀する、陰謀を企てる",
            translation: {
                literal: "その男と友人は [S] 共謀した [V] 地元の銀行を強盗するために [O]。",
                natural: "その男と友人は地元の銀行を強盗しようと共謀した。",
                intermediate: "その男と友人は地元の銀行を強盗しようと共謀した。しかし、他の誰かが発見して警察に通報したため、何もする前に捕まった。"
            },
            rationale: "【文脈】rob a bank... police, caught（銀行強盗...警察、捕まった）→ conspired（共謀した）。"
        },
        {
            id: 9,
            text: "Domingo's boss told him his plan for a new factory was not ( ). It would cost too much and take too long to finish.",
            choices: ["feasible", "fierce", "inventive", "eventful"],
            choiceMeanings: ["実現可能な", "激しい", "発明的な", "波乱に富んだ"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Domingo's boss told him his plan for a new factory was not (feasible).",
                mainClause: "Domingo's boss [S] told [V] him [IO] that-clause [DO]",
                thatClause: "his plan [S'] was [V'] not feasible [C'] → 「計画は実現可能でなかった」"
            },
            explanation: "feasible: 実現可能な、実行可能な",
            translation: {
                literal: "ドミンゴの上司は [S] 伝えた [V] 彼に [IO] 計画が実現可能でないと [DO]。",
                natural: "ドミンゴの上司は彼に計画が実現可能でないと伝えた。",
                intermediate: "ドミンゴの上司は新工場の計画が実現可能でないと伝えた。コストがかかりすぎ、完成までに時間がかかりすぎるだろうと。"
            },
            rationale: "【文脈】cost too much, take too long（コストがかかりすぎ、時間がかかりすぎ）→ not feasible（実現可能でない）。"
        },
        {
            id: 10,
            text: "The new mayor said he was looking forward to his first day in office, when he could begin ( ) some of the problems that faced the city.",
            choices: ["inserting", "tackling", "triggering", "generating"],
            choiceMeanings: ["挿入する", "取り組む", "引き起こす", "生成する"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The new mayor said he was looking forward to his first day in office, when he could begin (tackling) some of the problems that faced the city.",
                mainClause: "The new mayor [S] said [V] that-clause [O]",
                thatClause: "he [S'] was looking forward [V'] to his first day [O']",
                whenClause: "when he [S''] could begin [V''] tackling [O'':動名詞] → 関係副詞節（継続用法）",
                relativeClause: "that [S'''] faced [V'''] the city [O'''] → 関係代名詞節（problemsを修飾）",
                grammarPoint: "begin + -ing / look forward to + -ing"
            },
            explanation: "tackle: 取り組む、処理する",
            translation: {
                literal: "新市長は [S] 言った [V] 彼は楽しみにしていると [O]。",
                natural: "新市長は初日を楽しみにしていると語った。",
                intermediate: "新市長は、市が直面する問題に取り組み始められる初日の出勤を楽しみにしていると語った。"
            },
            rationale: "【文脈】problems that faced the city（市が直面する問題）→ tackling（取り組む）。"
        },
        {
            id: 11,
            text: "When a person has major surgery, ( ) such as infection and nerve damage are possible, so operations are usually performed only when there are no other treatment options.",
            choices: ["denials", "domains", "comparisons", "complications"],
            choiceMeanings: ["否定", "領域", "比較", "合併症"],
            correctAnswer: 4,
            structure: {
                fullSentence: "When a person has major surgery, (complications) such as infection and nerve damage are possible.",
                whenClause: "When a person [S'] has [V'] major surgery [O'] → 時を表すwhen節",
                mainClause: "complications [S] such as infection and nerve damage [M:例示] are [V] possible [C]",
                grammarPoint: "such as = 「～のような」（例示）"
            },
            explanation: "complication: 合併症",
            translation: {
                literal: "合併症 [S] 感染症や神経損傷のような [M] は可能である [C]。",
                natural: "感染症や神経損傷のような合併症が起こりうる。",
                intermediate: "大きな手術を受けるとき、感染症や神経損傷のような合併症が起こりうるため、他に治療法がない場合にのみ手術は行われる。"
            },
            rationale: "【文脈】surgery, infection, nerve damage（手術、感染症、神経損傷）→ complications（合併症）。"
        },
        {
            id: 12,
            text: "Henrietta is a very ( ) reader. She loves books, and it is not unusual for her to finish several in a week.",
            choices: ["passionate", "obscure", "uncomfortable", "feeble"],
            choiceMeanings: ["情熱的な", "あいまいな", "不快な", "弱い"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Henrietta is a very (passionate) reader.",
                mainClause: "Henrietta [S] is [V] a very passionate reader [C]",
                evidenceClause: "it [形式S] is not unusual [C] for her to finish several in a week [真S:to不定詞句] → 証拠文",
                grammarPoint: "it is (not) unusual for O to do = 「Oが～することは珍しくない」"
            },
            explanation: "passionate: 情熱的な、熱心な",
            translation: {
                literal: "ヘンリエッタは [S] です [V] とても情熱的な読者 [C]。",
                natural: "ヘンリエッタはとても情熱的な読者だ。",
                intermediate: "ヘンリエッタはとても情熱的な読者だ。本が大好きで、1週間に数冊読み終えることも珍しくない。"
            },
            rationale: "【文脈】loves books, finish several in a week（本が好き、1週間に数冊）→ passionate（情熱的な）。"
        },
        {
            id: 13,
            text: "On the trail, hikers may occasionally ( ) wild animals. However, it is important not to get too close to them or to offer them food.",
            choices: ["scrap", "propel", "encounter", "seal"],
            choiceMeanings: ["廃棄する", "推進する", "遭遇する", "封印する"],
            correctAnswer: 3,
            structure: {
                fullSentence: "On the trail, hikers may occasionally (encounter) wild animals.",
                mainClause: "hikers [S] may occasionally encounter [V] wild animals [O]",
                modifierDetail: "On the trail [M:場所] → 「トレイル上で」",
                grammarPoint: "may + 動詞原形 = 可能性「～かもしれない」"
            },
            explanation: "encounter: 遭遇する、出くわす",
            translation: {
                literal: "ハイカーたちは [S] 時々遭遇するかもしれない [V] 野生動物に [O]。",
                natural: "ハイカーたちは時々野生動物に遭遇することがある。",
                intermediate: "トレイル上で、ハイカーたちは時々野生動物に遭遇することがある。しかし、彼らに近づきすぎたり、餌を与えたりしないことが重要だ。"
            },
            rationale: "【文脈】wild animals, not get too close（野生動物、近づきすぎない）→ encounter（遭遇する）。"
        },
        {
            id: 14,
            text: "Following his ( ) from the company, Todd collected unemployment insurance for a few months until he found a new job.",
            choices: ["testimony", "tremor", "dismissal", "glossary"],
            choiceMeanings: ["証言", "振動", "解雇", "用語集"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Following his (dismissal) from the company, Todd collected unemployment insurance for a few months.",
                modifierClause: "Following his dismissal from the company [M:分詞構文] → 「会社を解雇された後」",
                mainClause: "Todd [S] collected [V] unemployment insurance [O] for a few months [M]",
                grammarPoint: "following = 「～の後」（前置詞）"
            },
            explanation: "dismissal: 解雇、免職",
            translation: {
                literal: "彼の解雇に続いて [M]、トッドは [S] 受け取った [V] 失業保険を [O]。",
                natural: "解雇された後、トッドは数ヶ月間失業保険を受け取った。",
                intermediate: "会社を解雇された後、トッドは新しい仕事が見つかるまで数ヶ月間失業保険を受け取った。"
            },
            rationale: "【文脈】unemployment insurance, new job（失業保険、新しい仕事）→ dismissal（解雇）。"
        },
        {
            id: 15,
            text: "After most of the votes were counted, it was clear the candidate could not win. He decided to ( ) the election to his opponent.",
            choices: ["concede", "consolidate", "foster", "plaster"],
            choiceMeanings: ["譲歩する", "統合する", "育てる", "塗る"],
            correctAnswer: 1,
            structure: {
                fullSentence: "After most of the votes were counted, it was clear the candidate could not win. He decided to (concede) the election to his opponent.",
                afterClause: "After most of the votes [S'] were counted [V'] → 時を表すafter節（受動態）",
                mainClause: "He [S] decided [V] to concede the election [O:to不定詞句] to his opponent [M]",
                grammarPoint: "concede + 名詞 + to 人 = 「人に～を譲る」"
            },
            explanation: "concede: 譲歩する、敗北を認める",
            translation: {
                literal: "彼は [S] 決めた [V] 選挙を譲歩することを [O] 対立候補に [M]。",
                natural: "彼は対立候補に選挙の敗北を認めることにした。",
                intermediate: "票の大部分が数えられた後、その候補者は勝てないことが明らかになった。彼は対立候補に選挙の敗北を認めることにした。"
            },
            rationale: "【文脈】could not win, opponent（勝てない、対立候補）→ concede（敗北を認める）。"
        },
        {
            id: 16,
            text: "Kelly ( ) upset her host family by taking long showers. She did not realize until her host father told her they were unhappy about her using so much water.",
            choices: ["sympathetically", "typically", "unwittingly", "diagonally"],
            choiceMeanings: ["同情的に", "典型的に", "知らずに", "対角線に"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Kelly (unwittingly) upset her host family by taking long showers.",
                mainClause: "Kelly [S] unwittingly [M:副詞] upset [V] her host family [O]",
                meansClause: "by taking long showers [M:手段] → 「長いシャワーを浴びることで」",
                evidenceClause: "She did not realize until... → 「気づかなかった」= unwittingly の根拠"
            },
            explanation: "unwittingly: 知らずに、無意識に",
            translation: {
                literal: "ケリーは [S] 知らずに [M] 怒らせた [V] ホストファミリーを [O]。",
                natural: "ケリーは知らずにホストファミリーを怒らせた。",
                intermediate: "ケリーは長いシャワーを浴びることでホストファミリーを知らずに怒らせていた。ホストファザーが彼女の水の使いすぎに不満を伝えるまで気づかなかった。"
            },
            rationale: "【文脈】did not realize（気づかなかった）→ unwittingly（知らずに）。"
        },
        {
            id: 17,
            text: "One side effect of the medicine is the occurrence of ( ) dreams. About 5 percent of people who take it report having intense, realistic experiences during their sleep.",
            choices: ["allied", "vivid", "stout", "fluent"],
            choiceMeanings: ["同盟の", "鮮明な", "頑丈な", "流暢な"],
            correctAnswer: 2,
            structure: {
                fullSentence: "One side effect of the medicine is the occurrence of (vivid) dreams.",
                mainClause: "One side effect [S] is [V] the occurrence of vivid dreams [C]",
                evidenceClause: "About 5 percent... report having intense, realistic experiences → vivid の説明"
            },
            explanation: "vivid: 鮮明な、生き生きとした",
            translation: {
                literal: "薬の副作用の一つは [S] です [V] 鮮明な夢の発生 [C]。",
                natural: "この薬の副作用の一つは鮮明な夢を見ることだ。",
                intermediate: "この薬の副作用の一つは鮮明な夢を見ることだ。服用者の約5%が睡眠中に激しくリアルな体験をすると報告している。"
            },
            rationale: "【文脈】intense, realistic experiences（激しく、リアルな体験）→ vivid（鮮明な）。"
        },
        {
            id: 18,
            text: "Before a match, the boy always asks famous soccer players for their ( ). He waits near the locker room entrance hoping they will sign their names in his notebook.",
            choices: ["telegraphs", "autographs", "editorials", "exhibits"],
            choiceMeanings: ["電報", "サイン", "社説", "展示品"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Before a match, the boy always asks famous soccer players for their (autographs).",
                mainClause: "the boy [S] always asks [V] famous soccer players [O] for their autographs [M]",
                modifierDetail: "Before a match [M:時] → 「試合前に」",
                grammarPoint: "ask + 人 + for ~ = 「人に～を求める」"
            },
            explanation: "autograph: サイン、署名",
            translation: {
                literal: "少年は [S] いつも求める [V] 有名なサッカー選手に [O] サインを [M]。",
                natural: "試合前、少年はいつも有名なサッカー選手にサインを求める。",
                intermediate: "試合前、少年はいつも有名なサッカー選手にサインを求める。彼はロッカールームの入口近くで、選手がノートに名前を書いてくれることを願って待っている。"
            },
            rationale: "【文脈】sign their names in his notebook（ノートに名前を書く）→ autographs（サイン）。"
        },
        {
            id: 19,
            text: "Many airlines require young children to have the permission of a parent or ( ) if the child is going to travel alone on an airplane.",
            choices: ["guardian", "defendant", "servant", "commuter"],
            choiceMeanings: ["保護者", "被告", "召使い", "通勤者"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Many airlines require young children to have the permission of a parent or (guardian).",
                mainClause: "Many airlines [S] require [V] young children [O] to have the permission [C:to不定詞]",
                modifierDetail: "of a parent or guardian [M:所有格] → 「親または保護者の」",
                conditionalClause: "if the child is going to travel alone [条件節]",
                grammarPoint: "require + O + to do = 「Oに～することを要求する」"
            },
            explanation: "guardian: 保護者、後見人",
            translation: {
                literal: "多くの航空会社は [S] 要求する [V] 幼い子供に [O] 許可を得ることを [C]。",
                natural: "多くの航空会社は幼い子供に親または保護者の許可を得ることを要求する。",
                intermediate: "多くの航空会社は、子供が飛行機で一人で旅行する場合、親または保護者の許可を得ることを要求している。"
            },
            rationale: "【文脈】parent（親）と並列 → guardian（保護者）。"
        },
        {
            id: 20,
            text: "Many visitors to the theater complained that the stage was so low they could not see the performers. The management decided to have the stage ( ) by a meter.",
            choices: ["snatched", "appreciated", "elevated", "donated"],
            choiceMeanings: ["ひったくった", "感謝した", "高くした", "寄付した"],
            correctAnswer: 3,
            structure: {
                fullSentence: "The management decided to have the stage (elevated) by a meter.",
                mainClause: "The management [S] decided [V] to have the stage elevated [O:to不定詞句]",
                causativeDetail: "have + the stage [O'] + elevated [C':過去分詞] → 使役構文「ステージを高くしてもらう」",
                grammarPoint: "have + O + 過去分詞 = 「Oを～してもらう/される」（使役）"
            },
            explanation: "elevate: 高くする、持ち上げる",
            translation: {
                literal: "経営陣は [S] 決めた [V] ステージを高くしてもらうことを [O]。",
                natural: "経営陣はステージを1メートル高くすることにした。",
                intermediate: "劇場の多くの来場者がステージが低すぎて演者が見えないと苦情を言った。経営陣はステージを1メートル高くすることにした。"
            },
            rationale: "【文脈】stage was so low, could not see（ステージが低すぎて見えなかった）→ elevated（高くした）。"
        },
        {
            id: 21,
            text: "In ancient times, some people thought earthquakes were a ( ) warning. They believed God was telling them to change their behavior.",
            choices: ["divine", "dutiful", "sparse", "lively"],
            choiceMeanings: ["神の", "義務感の強い", "まばらな", "活発な"],
            correctAnswer: 1,
            structure: {
                fullSentence: "In ancient times, some people thought earthquakes were a (divine) warning.",
                mainClause: "some people [S] thought [V] that-clause [O]",
                thatClause: "earthquakes [S'] were [V'] a divine warning [C']",
                evidenceClause: "They believed God was telling them... → divine の根拠"
            },
            explanation: "divine: 神の、神聖な",
            translation: {
                literal: "古代では、人々は [S] 思った [V] 地震は神の警告だと [O]。",
                natural: "古代では、地震は神の警告だと考える人もいた。",
                intermediate: "古代では、地震は神の警告だと考える人もいた。神が行動を変えるよう伝えていると信じていた。"
            },
            rationale: "【文脈】God was telling them（神が伝えていた）→ divine（神の）。"
        },
        {
            id: 22,
            text: "The runner ( ) early from the other runners to lead the race. When she crossed the finish line to win, there was a large distance between her and the next runner.",
            choices: ["broke away", "held down", "bottomed out", "turned back"],
            choiceMeanings: ["離脱した", "押さえつけた", "底を打った", "引き返した"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The runner (broke away) early from the other runners to lead the race.",
                mainClause: "The runner [S] broke away [V] early [M] from the other runners [M]",
                purposeClause: "to lead the race [M:目的のto不定詞] → 「レースをリードするために」",
                grammarPoint: "break away from = 「～から離脱する」"
            },
            explanation: "break away: 離脱する、抜け出す",
            translation: {
                literal: "ランナーは [S] 離脱した [V] 早い段階で [M] 他のランナーから [M]。",
                natural: "そのランナーは早い段階で他のランナーから離脱した。",
                intermediate: "そのランナーはレースをリードするために早い段階で他のランナーから離脱した。ゴールラインを越えて勝ったとき、彼女と次のランナーとの間には大きな差があった。"
            },
            rationale: "【文脈】lead the race, large distance（レースをリード、大きな差）→ broke away（離脱した）。"
        },
        {
            id: 23,
            text: "The web developer hired to update the company's website did a terrible job. It took months to ( ) all the problems he had caused.",
            choices: ["stumble on", "trade in", "rip off", "straighten out"],
            choiceMeanings: ["偶然見つける", "下取りに出す", "だまし取る", "解決する"],
            correctAnswer: 4,
            structure: {
                fullSentence: "It took months to (straighten out) all the problems he had caused.",
                mainClause: "It [形式S] took [V] months [O] to straighten out all the problems [真S:to不定詞句]",
                relativeClause: "he [S'] had caused [V'] → 関係代名詞節（problemsを修飾）",
                grammarPoint: "It takes + 時間 + to do = 「～するのに時間がかかる」"
            },
            explanation: "straighten out: 解決する、正す",
            translation: {
                literal: "それは [形式S] かかった [V] 数ヶ月 [O] 問題を解決するのに [真S]。",
                natural: "問題を解決するのに数ヶ月かかった。",
                intermediate: "会社のウェブサイトを更新するために雇われたウェブ開発者はひどい仕事をした。彼が引き起こしたすべての問題を解決するのに数ヶ月かかった。"
            },
            rationale: "【文脈】terrible job, problems（ひどい仕事、問題）→ straighten out（解決する）。"
        },
        {
            id: 24,
            text: "Marcia went upstairs to ( ) her son, and she was very angry to find him playing video games instead of doing his homework.",
            choices: ["check up on", "go through with", "get away with", "fall back on"],
            choiceMeanings: ["様子を見る", "やり遂げる", "罰を免れる", "頼る"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Marcia went upstairs to (check up on) her son, and she was very angry to find him playing video games.",
                firstClause: "Marcia [S] went [V] upstairs [M] to check up on her son [M:目的のto不定詞]",
                secondClause: "she [S] was [V] very angry [C] to find [M:感情の原因のto不定詞]",
                perceptionDetail: "find [知覚動詞] + him [O] + playing [C:現在分詞] → 「彼がゲームしているのを見つけた」",
                grammarPoint: "check up on = 「～の様子を見る」/ find + O + -ing = 知覚動詞構文"
            },
            explanation: "check up on: 様子を見る、確認する",
            translation: {
                literal: "マルシアは [S] 行った [V] 2階へ [M] 息子の様子を見るために [M]。",
                natural: "マルシアは息子の様子を見るために2階へ行った。",
                intermediate: "マルシアは息子の様子を見るために2階へ行き、宿題をせずにビデオゲームをしている彼を見てとても怒った。"
            },
            rationale: "【文脈】went upstairs... her son（2階へ行った...息子）→ check up on（様子を見る）。"
        },
        {
            id: 25,
            text: "After the two friends had a terrible argument, they did not speak to each other for a month. Eventually, though, they ( ), and now they spend even more time together.",
            choices: ["kept away", "made up", "worked up", "played out"],
            choiceMeanings: ["避けた", "仲直りした", "興奮させた", "展開した"],
            correctAnswer: 2,
            structure: {
                fullSentence: "After the two friends had a terrible argument, they did not speak to each other for a month. Eventually, though, they (made up).",
                afterClause: "After the two friends [S'] had [V'] a terrible argument [O'] → 時を表すafter節",
                mainClause1: "they [S] did not speak [V] to each other [M] for a month [M]",
                mainClause2: "they [S] made up [V] → 「仲直りした」",
                grammarPoint: "make up = 「仲直りする」（句動詞）"
            },
            explanation: "make up: 仲直りする",
            translation: {
                literal: "結局、でも、彼らは [S] 仲直りした [V]。",
                natural: "結局、彼らは仲直りした。",
                intermediate: "2人の友人がひどい口論をした後、1ヶ月間お互いに話さなかった。しかし結局、彼らは仲直りし、今では以前より多くの時間を一緒に過ごしている。"
            },
            rationale: "【文脈】terrible argument → did not speak → spend more time together（ひどい口論→話さなかった→一緒に過ごす）→ made up（仲直りした）。"
        }
    ]
};
