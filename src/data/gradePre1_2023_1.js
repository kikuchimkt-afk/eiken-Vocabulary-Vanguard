// Grade Pre-1 (準1級) - 2023年度 第1回検定
// structure: フィールド分離形式（複雑な文構造対応）
export const gradePre1_2023_1Data = {
    title: "2023年度第1回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "At first, Mick was ( ) by the idea of going to live abroad by himself. Once he did it, however, it was less difficult than he had feared.",
            choices: ["pacified", "restored", "daunted", "tackled"],
            choiceMeanings: ["なだめられた", "回復した", "怖気づいた、ひるんだ", "取り組んだ"],
            correctAnswer: 3,
            structure: {
                fullSentence: "At first, Mick was (daunted) by the idea of going to live abroad by himself.",
                timePhrase: "At first [M:時] → 「最初は」",
                mainClause: "Mick [S] was daunted [V:受動態] by the idea [M]",
                ideaContent: "of going to live abroad by himself → 「一人で海外に住むという」",
                contrastClause: "Once he did it, however, it was less difficult than he had feared → 対比（実際はそれほど難しくなかった）"
            },
            explanation: "daunt: ひるませる、怖気づかせる",
            translation: {
                literal: "ミックは [S] ひるまされた [V] その考えによって [M]。",
                natural: "ミックはその考えに怖気づいた。",
                intermediate: "最初は、ミックは一人で海外に住むという考えに怖気づいていました。しかし、一度やってみると、それは彼が恐れていたほど難しくはありませんでした。"
            },
            rationale: "【文脈】最初は恐れていたが、実際はそれほどでもなかった → daunted（怖気づいた）。"
        },
        {
            id: 2,
            text: "Students are advised to pace their studying throughout the semester instead of ( ) right before their exams.",
            choices: ["cramming", "detaining", "swelling", "embracing"],
            choiceMeanings: ["詰め込み勉強をする", "引き留める", "膨らむ", "抱きしめる"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Students are advised to pace their studying throughout the semester instead of (cramming) right before their exams.",
                mainClause: "Students [S] are advised [V:受動態] to pace their studying [C:to不定詞]",
                timePhrase: "throughout the semester [M:時] → 「学期を通して」",
                contrastPhrase: "instead of cramming right before their exams [M] → 対比「試験直前の詰め込みの代わりに」",
                grammarPoint: "instead of + -ing = 「～する代わりに」"
            },
            explanation: "cram: 詰め込み勉強をする",
            translation: {
                literal: "学生は [S] 忠告される [V] ペース配分するように [C] 詰め込み勉強する代わりに [M]。",
                natural: "学生は詰め込み勉強の代わりにペース配分するよう忠告される。",
                intermediate: "学生は、試験の直前に詰め込み勉強をするのではなく、学期を通して勉強のペース配分をするように忠告されています。"
            },
            rationale: "【文脈】学期を通して勉強する ⇔ 直前に詰め込む → cramming。"
        },
        {
            id: 3,
            text: "The two candidates' tempers ( ) during the presidential debate. They angrily attacked each other's positions on issues throughout the night.",
            choices: ["flared", "digested", "professed", "tumbled"],
            choiceMeanings: ["（怒りなどが）燃え上がった", "消化した", "公言した", "転げ落ちた"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The two candidates' tempers (flared) during the presidential debate.",
                mainClause: "The two candidates' tempers [S] flared [V]",
                timePhrase: "during the presidential debate [M:時] → 「大統領討論会の間」",
                evidenceClause: "They angrily attacked each other's positions on issues throughout the night → 怒りの根拠",
                grammarPoint: "tempers flare = 「怒りが爆発する」（コロケーション）"
            },
            explanation: "flare: （怒りなどが）燃え上がる、ぱっと燃える",
            translation: {
                literal: "二人の候補者の怒りが [S] 燃え上がった [V]。",
                natural: "二人の候補者の怒りが燃え上がった。",
                intermediate: "大統領候補討論会の間、二人の候補者の怒りが燃え上がりました。彼らは一晩中、問題に対するお互いの立場を激しく攻撃し合いました。"
            },
            rationale: "【文脈】怒って攻撃し合った → tempers flared（怒りが爆発した）。"
        },
        {
            id: 4,
            text: "Many banks required government ( ) to stay in business after the stock market crash. The help mostly came in the form of large loans.",
            choices: ["intervention", "appreciation", "accumulation", "starvation"],
            choiceMeanings: ["介入", "感謝、鑑賞", "蓄積", "飢餓"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Many banks required government (intervention) to stay in business after the stock market crash.",
                mainClause: "Many banks [S] required [V] government intervention [O]",
                purposeClause: "to stay in business [M:目的] → 「事業を継続するために」",
                timePhrase: "after the stock market crash [M:時] → 「株式市場の暴落後」",
                evidenceClause: "The help mostly came in the form of large loans → intervention の具体例（融資）"
            },
            explanation: "intervention: 介入",
            translation: {
                literal: "多くの銀行は [S] 必要とした [V] 政府の介入を [O] 事業を継続するために [M]。",
                natural: "多くの銀行は事業継続のために政府の介入を必要とした。",
                intermediate: "多くの銀行は、株式市場の暴落後、事業を継続するために政府の介入を必要としました。その支援は主に多額の融資という形で行われました。"
            },
            rationale: "【文脈】助けが必要だった → intervention（介入）。"
        },
        {
            id: 5,
            text: "Police must follow strict ( ) at a crime scene to make sure the evidence is not damaged or altered in any way.",
            choices: ["tributes", "protocols", "reservoirs", "portions"],
            choiceMeanings: ["賛辞", "手順、プロトコル", "貯水池", "部分"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Police must follow strict (protocols) at a crime scene to make sure the evidence is not damaged or altered.",
                mainClause: "Police [S] must follow [V] strict protocols [O] at a crime scene [M]",
                purposeClause: "to make sure the evidence is not damaged or altered in any way [M:目的] → 「証拠が損傷・改ざんされないように」",
                grammarPoint: "make sure (that) = 「～を確実にする」"
            },
            explanation: "protocol: 手順、規定、プロトコル",
            translation: {
                literal: "警察は [S] 従わなければならない [V] 厳格な手順に [O] 犯罪現場で [M]。",
                natural: "警察は犯罪現場で厳格な手順に従わなければならない。",
                intermediate: "警察は、証拠がいかなる形でも損傷したり改ざんされたりしないようにするために、犯罪現場では厳格な手順に従わなければなりません。"
            },
            rationale: "【文脈】証拠を守るための決まり事 → protocols（手順）。"
        },
        {
            id: 6,
            text: "The umpire ( ) the two players for fighting. They were not allowed to play in the rest of the game.",
            choices: ["slaughtered", "administered", "ejected", "conceived"],
            choiceMeanings: ["虐殺した", "管理した", "退場させた", "思いついた"],
            correctAnswer: 3,
            structure: {
                fullSentence: "The umpire (ejected) the two players for fighting.",
                mainClause: "The umpire [S] ejected [V] the two players [O]",
                reasonPhrase: "for fighting [M:理由] → 「喧嘩したため」",
                evidenceClause: "They were not allowed to play in the rest of the game → ejected の結果"
            },
            explanation: "eject: 退場させる、排出する",
            translation: {
                literal: "審判は [S] 退場させた [V] その二人の選手を [O] 喧嘩したため [M]。",
                natural: "審判は喧嘩したため二人の選手を退場させた。",
                intermediate: "審判は喧嘩をしたため、その二人の選手を退場させました。彼らは残りの試合でプレーすることを許されませんでした。"
            },
            rationale: "【文脈】プレーを許されなかった → ejected（退場させた）。"
        },
        {
            id: 7,
            text: "Cats are known to be protective of their ( ). They often attack other animals that they think could be a threat to their kittens.",
            choices: ["prey", "offspring", "rituals", "remains"],
            choiceMeanings: ["獲物", "子孫、子供", "儀式", "残り物、遺体"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Cats are known to be protective of their (offspring).",
                mainClause: "Cats [S] are known [V:受動態] to be protective [C:to不定詞] of their offspring [M]",
                evidenceClause: "They often attack other animals that they think could be a threat to their kittens → offspring = kittens",
                relativeClause: "that they [S'] think [V'] could be a threat [C'] → 関係代名詞節"
            },
            explanation: "offspring: （人・動物の）子、子孫",
            translation: {
                literal: "猫は [S] 知られている [V] 守ろうとすることで [C] 自分たちの子を [M]。",
                natural: "猫は自分たちの子を守ろうとすることで知られている。",
                intermediate: "猫は自分たちの子を守ろうとすることで知られています。彼らはしばしば、子猫にとって脅威になり得ると考える他の動物を攻撃します。"
            },
            rationale: "【文脈】kittens（子猫）を守る → offspring（子）。"
        },
        {
            id: 8,
            text: "Fans of Greenville United were disappointed when the team's poor performance throughout the season led to its ( ) from the A-League to the B-League.",
            choices: ["demotion", "craving", "aggravation", "hassle"],
            choiceMeanings: ["降格", "渇望", "悪化", "面倒"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The team's poor performance throughout the season led to its (demotion) from the A-League to the B-League.",
                mainClause: "Fans [S] of Greenville United [M] were disappointed [V]",
                whenClause: "when the team's poor performance [S'] led to [V'] its demotion [O'] → 時を表すwhen節",
                fromToPhrase: "from the A-League to the B-League → 「AリーグからBリーグへ」",
                grammarPoint: "lead to = 「～につながる」"
            },
            explanation: "demotion: 降格",
            translation: {
                literal: "チームの成績不振は [S'] つながった [V'] その降格に [O']。",
                natural: "チームの成績不振は降格につながった。",
                intermediate: "グリーンビル・ユナイテッドのファンは、シーズンを通したチームの成績不振がAリーグからBリーグへの降格につながったとき、失望しました。"
            },
            rationale: "【文脈】AリーグからBリーグへ落ちる → demotion（降格）。"
        },
        {
            id: 9,
            text: "Bibi loves hiking and playing sports, so she needs clothes that do not wear out too quickly. When she goes shopping, she generally buys clothing that is ( ).",
            choices: ["swift", "aloof", "shallow", "durable"],
            choiceMeanings: ["素早い", "よそよそしい", "浅い", "耐久性のある"],
            correctAnswer: 4,
            structure: {
                fullSentence: "When she goes shopping, she generally buys clothing that is (durable).",
                contextClause: "Bibi loves hiking and playing sports → アクティブなライフスタイル",
                reasonClause: "she needs clothes that do not wear out too quickly → durable の定義",
                whenClause: "When she [S'] goes shopping [V'] → 時を表すwhen節",
                mainClause: "she [S] generally buys [V] clothing [O]",
                relativeClause: "that [S''] is [V''] durable [C''] → 関係代名詞節"
            },
            explanation: "durable: 耐久性のある、長持ちする",
            translation: {
                literal: "彼女は [S] 一般的に買う [V] 服を [O] 耐久性のある [C'']。",
                natural: "彼女は一般的に耐久性のある服を買う。",
                intermediate: "ビビはハイキングやスポーツをするのが大好きなので、すぐに擦り切れない服を必要としています。買い物に行くとき、彼女は一般的に耐久性のある服を買います。"
            },
            rationale: "【文脈】すぐに擦り切れない（not wear out too quickly） → durable（耐久性のある）。"
        },
        {
            id: 10,
            text: "Consumers should not ( ) any personal information to callers claiming to be from the bank, as such calls are sometimes from criminals.",
            choices: ["sway", "detest", "contemplate", "disclose"],
            choiceMeanings: ["揺れる", "ひどく嫌う", "熟考する", "開示する"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Consumers should not (disclose) any personal information to callers claiming to be from the bank.",
                mainClause: "Consumers [S] should not disclose [V] any personal information [O] to callers [M]",
                participlePhrase: "claiming to be from the bank [M:現在分詞] → 「銀行からだと名乗る」",
                asClause: "as such calls [S'] are [V'] sometimes from criminals [C'] → 理由を表すas節"
            },
            explanation: "disclose: 開示する、明かす",
            translation: {
                literal: "消費者は [S] 開示すべきではない [V] いかなる個人情報も [O] 電話の相手に [M]。",
                natural: "消費者は電話の相手に個人情報を開示すべきではない。",
                intermediate: "銀行を名乗る電話の相手に個人情報を開示してはいけません。そのような電話は犯罪者からのものであることがあるからです。"
            },
            rationale: "【文脈】情報を教えるべきではない → disclose（開示する）。"
        },
        {
            id: 11,
            text: "Because the tennis champion is unfriendly to other players and claims he is the greatest player who has ever lived, he is often criticized for his ( ).",
            choices: ["commodity", "arrogance", "neutrality", "specimen"],
            choiceMeanings: ["商品", "傲慢さ", "中立", "標本"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Because the tennis champion is unfriendly to other players and claims he is the greatest player, he is often criticized for his (arrogance).",
                becauseClause: "Because the tennis champion [S'] is [V'] unfriendly [C'] to other players [M] and claims he is the greatest player → 理由節",
                mainClause: "he [S] is often criticized [V:受動態] for his arrogance [M]",
                relativeClause: "who [S''] has ever lived [V''] → 関係代名詞節（最上級を強調）"
            },
            explanation: "arrogance: 傲慢さ",
            translation: {
                literal: "彼は [S] しばしば批判される [V] 彼の傲慢さのために [M]。",
                natural: "彼はしばしば傲慢さを批判される。",
                intermediate: "そのテニスチャンピオンは他の選手に対して非友好的であり、自分が史上最高の選手であると主張しているため、しばしばその傲慢さを批判されます。"
            },
            rationale: "【文脈】非友好的で自慢する態度 → arrogance（傲慢さ）。"
        },
        {
            id: 12,
            text: "Many readers found the author's novels ( ). He was known for writing long, confusing sentences that had no clear meaning.",
            choices: ["genuine", "impending", "subdued", "incomprehensible"],
            choiceMeanings: ["本物の", "差し迫った", "控えめな", "理解不能な"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Many readers found the author's novels (incomprehensible).",
                mainClause: "Many readers [S] found [V] the author's novels [O] incomprehensible [C]",
                evidenceClause: "He was known for writing long, confusing sentences that had no clear meaning → incomprehensible の根拠",
                grammarPoint: "find + O + C（SVOC構文）"
            },
            explanation: "incomprehensible: 理解できない、不可解な",
            translation: {
                literal: "多くの読者は [S] 感じた [V] 著者の小説が [O] 理解不能だと [C]。",
                natural: "多くの読者は著者の小説が理解不能だと感じた。",
                intermediate: "多くの読者はその著者の小説が理解不能だと感じました。彼は意味が不明確で長く混乱した文を書くことで知られていました。"
            },
            rationale: "【文脈】confusing, no clear meaning → incomprehensible（理解不能な）。"
        },
        {
            id: 13,
            text: "\"Class, I want you all to listen very ( ),\" the teacher said. \"Much of what I will say is not in the textbook but will be on the test.\"",
            choices: ["attentively", "consecutively", "wearily", "eloquently"],
            choiceMeanings: ["注意深く", "連続して", "疲れ果てて", "雄弁に"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Class, I want you all to listen very (attentively).",
                mainClause: "I [S] want [V] you all [O] to listen very attentively [C:to不定詞+副詞]",
                reasonContext: "Much of what I will say is not in the textbook but will be on the test → attentively の理由",
                grammarPoint: "want + O + to do"
            },
            explanation: "attentively: 注意深く",
            translation: {
                literal: "私は [S] 欲しい [V] 皆さん全員に [O] とても注意深く聞くことを [C]。",
                natural: "皆さん全員にとても注意深く聞いてほしい。",
                intermediate: "「皆さん、とても注意深く聞いてほしい」と先生は言いました。「私がこれから話すことの多くは教科書には載っていませんが、テストには出ます。」"
            },
            rationale: "【文脈】テストに出る大事な話 → attentively（注意深く）。"
        },
        {
            id: 14,
            text: "The school is known for being at the ( ) of education. Its teachers use the newest teaching methods and the latest technology in the classroom.",
            choices: ["forefront", "lapse", "doctrine", "myth"],
            choiceMeanings: ["最前線", "経過、過失", "教義", "神話"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The school is known for being at the (forefront) of education.",
                mainClause: "The school [S] is known [V:受動態] for being at the forefront [C] of education [M]",
                evidenceClause: "Its teachers use the newest teaching methods and the latest technology in the classroom → forefront の根拠",
                grammarPoint: "be at the forefront of = 「～の最前線にいる」"
            },
            explanation: "forefront: 最前線、先頭",
            translation: {
                literal: "その学校は [S] 知られている [V] 最前線にいることで [C] 教育の [M]。",
                natural: "その学校は教育の最前線にいることで知られている。",
                intermediate: "その学校は教育の最前線にいることで知られています。教師たちは教室で最新の教授法と最新の技術を使用しています。"
            },
            rationale: "【文脈】最新のメソッドと技術を使う → forefront（最前線）。"
        },
        {
            id: 15,
            text: "The mayor used ( ) language in his speech because he thought it was extremely important that the citizens support his plan for public transportation.",
            choices: ["forceful", "merciful", "futile", "tranquil"],
            choiceMeanings: ["力強い", "慈悲深い", "無益な", "穏やかな"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The mayor used (forceful) language in his speech because he thought it was extremely important that the citizens support his plan.",
                mainClause: "The mayor [S] used [V] forceful language [O] in his speech [M]",
                becauseClause: "because he [S'] thought [V'] it was extremely important that-clause [O'] → 理由節",
                thatClause: "the citizens support his plan for public transportation → 仮定法現在（重要性）"
            },
            explanation: "forceful: 力強い、説得力のある",
            translation: {
                literal: "市長は [S] 使った [V] 力強い言葉を [O] 演説で [M]。",
                natural: "市長は演説で力強い言葉を使った。",
                intermediate: "市長は演説で力強い言葉を使いました。なぜなら、公共交通機関に関する彼の計画を市民が支持することが極めて重要だと考えたからです。"
            },
            rationale: "【文脈】支持を得るために重要 → forceful（力強い）。"
        },
        {
            id: 16,
            text: "When the pop singer died, she left her favorite charity a ( ) of over $10 million. \"We are so grateful for her generosity,\" said a charity spokesperson.",
            choices: ["rhyme", "justice", "legacy", "majority"],
            choiceMeanings: ["韻", "正義", "遺産", "大多数"],
            correctAnswer: 3,
            structure: {
                fullSentence: "When the pop singer died, she left her favorite charity a (legacy) of over $10 million.",
                whenClause: "When the pop singer [S'] died [V'] → 時を表すwhen節",
                mainClause: "she [S] left [V] her favorite charity [O1] a legacy [O2] of over $10 million [M]",
                evidenceContext: "We are so grateful for her generosity → legacy の具体的金額と感謝",
                grammarPoint: "leave + O1 + O2（SVOO構文）"
            },
            explanation: "legacy: 遺産",
            translation: {
                literal: "彼女は [S] 残した [V] お気に入りの慈善団体に [O1] 遺産を [O2]。",
                natural: "彼女はお気に入りの慈善団体に遺産を残した。",
                intermediate: "そのポップ歌手が亡くなったとき、彼女はお気に入りの慈善団体に1000万ドル以上の遺産を残しました。「彼女の寛大さにとても感謝しています」と慈善団体の広報担当者は述べました。"
            },
            rationale: "【文脈】死後に残すお金 → legacy（遺産）。"
        },
        {
            id: 17,
            text: "As they approached the top of the mountain, some of the hikers began to feel sick because of the low oxygen levels at the high ( ).",
            choices: ["apparatus", "equation", "altitude", "mileage"],
            choiceMeanings: ["器具", "方程式", "高度、海抜", "走行距離"],
            correctAnswer: 3,
            structure: {
                fullSentence: "As they approached the top of the mountain, some of the hikers began to feel sick because of the low oxygen levels at the high (altitude).",
                asClause: "As they [S'] approached [V'] the top of the mountain [O'] → 時を表すas節",
                mainClause: "some of the hikers [S] began [V] to feel sick [O:to不定詞]",
                becauseOfPhrase: "because of the low oxygen levels at the high altitude [M:理由] → 「高い高度での低酸素のため」"
            },
            explanation: "altitude: 高度、海抜",
            translation: {
                literal: "ハイカーの一部は [S] 始めた [V] 気分が悪くなることを [O] 高い高度での低酸素のため [M]。",
                natural: "ハイカーの一部は高い高度での低酸素のため気分が悪くなり始めた。",
                intermediate: "彼らが山の頂上に近づくにつれて、高い高度での酸素濃度の低さのために、ハイカーの何人かが気分が悪くなり始めました。"
            },
            rationale: "【文脈】山の上、酸素が薄い → altitude（高度）。"
        },
        {
            id: 18,
            text: "Ted lives on a ( ) income. He makes just enough to afford a small apartment, pay his bills, and occasionally go out for dinner.",
            choices: ["blissful", "modest", "showy", "sturdy"],
            choiceMeanings: ["至福の", "控えめな、質素な", "派手な", "頑丈な"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Ted lives on a (modest) income.",
                mainClause: "Ted [S] lives [V] on a modest income [M]",
                evidenceClause: "He makes just enough to afford a small apartment, pay his bills, and occasionally go out for dinner → modest の定義（ちょうど十分なだけ）"
            },
            explanation: "modest: （量や程度が）控えめな、並の、謙虚な",
            translation: {
                literal: "テッドは [S] 生活している [V] 控えめな収入で [M]。",
                natural: "テッドは控えめな収入で生活している。",
                intermediate: "テッドは控えめな収入で生活しています。彼は小さなアパートを借り、請求書を支払い、時々夕食に出かけるのにちょうど十分なだけ稼いでいます。"
            },
            rationale: "【文脈】ちょうど〜できるくらい → 金持ちではない → modest（控えめな）。"
        },
        {
            id: 19,
            text: "The carpenter was careful to choose a ( ) piece of wood for the table. There would be problems if it did not have the same thickness throughout.",
            choices: ["reckless", "gaping", "dreary", "uniform"],
            choiceMeanings: ["無謀な", "口を大きく開けた", "わびしい", "均一な"],
            correctAnswer: 4,
            structure: {
                fullSentence: "The carpenter was careful to choose a (uniform) piece of wood for the table.",
                mainClause: "The carpenter [S] was careful [V] to choose a uniform piece of wood [C:to不定詞] for the table [M]",
                evidenceClause: "There would be problems if it did not have the same thickness throughout → uniform = same thickness throughout",
                conditionalClause: "if it [S'] did not have [V'] the same thickness [O'] throughout [M] → 仮定法過去"
            },
            explanation: "uniform: 均一な、一定の",
            translation: {
                literal: "大工は [S] 注意していた [V] 均一な木片を選ぶように [C]。",
                natural: "大工は均一な木片を選ぶように注意した。",
                intermediate: "大工はテーブル用に均一な木片を選ぶように注意しました。全体を通して同じ厚さでなければ問題が生じるでしょう。"
            },
            rationale: "【文脈】same thickness throughout → uniform（均一な）。"
        },
        {
            id: 20,
            text: "Although Pieter was a private, quiet man who rarely showed his ( ) for his children, they knew that he truly loved them.",
            choices: ["affection", "circulation", "oppression", "coalition"],
            choiceMeanings: ["愛情", "循環", "抑圧", "提携、連立"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Although Pieter was a private, quiet man who rarely showed his (affection) for his children, they knew that he truly loved them.",
                althoughClause: "Although Pieter [S'] was [V'] a private, quiet man [C'] who rarely showed his affection [関係代名詞節] → 譲歩節",
                mainClause: "they [S] knew [V] that he truly loved them [O:that節]",
                contrastDetail: "rarely showed ↔ truly loved の対比"
            },
            explanation: "affection: 愛情",
            translation: {
                literal: "ピーターは [S'] めったに見せなかったが [V''] 彼の愛情を [O''] 子供たちに [M]。",
                natural: "ピーターは子供たちへの愛情をめったに見せなかった。",
                intermediate: "ピーターは内気で静かな男性で、子供たちへの愛情をめったに見せませんでしたが、子供たちは彼が本当に自分たちを愛していることを知っていました。"
            },
            rationale: "【文脈】loved them → affection（愛情）。"
        },
        {
            id: 21,
            text: "Anton heard a strange ( ) coming from his speakers, so he checked to make sure all the cables were properly connected.",
            choices: ["buzz", "peck", "thorn", "core"],
            choiceMeanings: ["ブーンという音", "ついばむこと", "とげ", "核心"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Anton heard a strange (buzz) coming from his speakers.",
                mainClause: "Anton [S] heard [V] a strange buzz [O]",
                participlePhrase: "coming from his speakers [M:現在分詞] → 「スピーカーから来ている」",
                resultClause: "so he checked to make sure all the cables were properly connected → 結果（確認した）"
            },
            explanation: "buzz: ブーン（ブンブン）という音、雑音",
            translation: {
                literal: "アントンは [S] 聞いた [V] 奇妙なブーンという音を [O] スピーカーから来ている [M]。",
                natural: "アントンはスピーカーから奇妙なブーンという音を聞いた。",
                intermediate: "アントンはスピーカーから奇妙なブーンという音が聞こえたので、すべてのケーブルが正しく接続されているか確認しました。"
            },
            rationale: "【文脈】スピーカーから聞こえる音、ケーブル確認 → buzz（雑音）。"
        },
        {
            id: 22,
            text: "Late last night, a man was caught trying to ( ) a convenience store. The police forced him to drop his weapon and arrested him.",
            choices: ["shrug off", "sit out", "run against", "hold up"],
            choiceMeanings: ["〜を無視する", "〜に参加しない", "〜に対抗して立候補する", "強盗に入る"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Late last night, a man was caught trying to (hold up) a convenience store.",
                timePhrase: "Late last night [M:時] → 「昨夜遅く」",
                mainClause: "a man [S] was caught [V:受動態] trying to hold up a convenience store [C:分詞]",
                evidenceClause: "The police forced him to drop his weapon and arrested him → 武器を持っていた証拠",
                grammarPoint: "hold up = 「（暴力で）強盗に入る」"
            },
            explanation: "hold up: （暴力で）強盗に入る、遅らせる",
            translation: {
                literal: "男は [S] 捕まった [V] 強盗に入ろうとして [C] コンビニに [O]。",
                natural: "男はコンビニに強盗に入ろうとして捕まった。",
                intermediate: "昨夜遅く、男がコンビニに強盗に入ろうとして捕まりました。警察は彼に武器を捨てさせ、逮捕しました。"
            },
            rationale: "【文脈】武器を持ってコンビニに押し入る → hold up（強盗に入る）。"
        },
        {
            id: 23,
            text: "Jill had always loved France, so when there was a chance to work in her company's Paris office, she ( ) it. In fact, she was the first to apply.",
            choices: ["plowed through", "pulled on", "threw off", "jumped at"],
            choiceMeanings: ["〜を骨折って進んだ", "〜を引っ張った", "〜を脱ぎ捨てた", "〜に飛びついた"],
            correctAnswer: 4,
            structure: {
                fullSentence: "When there was a chance to work in her company's Paris office, she (jumped at) it.",
                contextClause: "Jill had always loved France → 背景（フランスが好き）",
                whenClause: "when there [S'] was [V'] a chance [真S'] to work in her company's Paris office [M] → 時を表すwhen節",
                mainClause: "she [S] jumped at [V] it [O]",
                evidenceClause: "In fact, she was the first to apply → 即座に飛びついた証拠",
                grammarPoint: "jump at = 「（チャンスなどに）飛びつく」"
            },
            explanation: "jump at: （チャンスなどに）飛びつく",
            translation: {
                literal: "彼女は [S] 飛びついた [V] それに [O]。",
                natural: "彼女はそれに飛びついた。",
                intermediate: "ジルはずっとフランスが大好きだったので、会社のパリ支店で働く機会があったとき、彼女はすぐに飛びつきました。実際、彼女は最初に応募しました。"
            },
            rationale: "【文脈】フランスが大好き、チャンス → jumped at（飛びついた）。"
        },
        {
            id: 24,
            text: "A: How's the class you signed up for going to ( ) with your work schedule?<br>B: It's online, and I can study at my own pace. I can read the material when I get home from work, so it should be fine.",
            choices: ["get over", "fit in", "hold onto", "take after"],
            choiceMeanings: ["乗り越える", "うまく合う", "しがみつく", "似ている"],
            correctAnswer: 2,
            structure: {
                fullSentence: "How's the class you signed up for going to (fit in) with your work schedule?",
                mainClause: "How is the class [S] going to fit in [V] with your work schedule [M]?",
                relativeClause: "you [S'] signed up for [V'] → 関係代名詞節（classを修飾）",
                evidenceContext: "It's online, and I can study at my own pace → fit in できる理由",
                grammarPoint: "fit in with = 「～とうまく合う」"
            },
            explanation: "fit in with: 〜とうまく合う、調和する",
            translation: {
                literal: "そのクラスは [S] どうやってうまく合うつもりか [V] 仕事のスケジュールと [M]？",
                natural: "そのクラスは仕事のスケジュールとどうやってうまく合わせるの？",
                intermediate: "A: 申し込んだクラスは、仕事のスケジュールとどうやってうまく合わせるつもり？\nB: オンラインだし、自分のペースで勉強できるんだ。仕事から帰ってから教材を読めるから、大丈夫なはずだよ。"
            },
            rationale: "【文脈】仕事と勉強の両立 → fit in（うまく合う）。"
        },
        {
            id: 25,
            text: "Before moving to her new section, Betty will ( ) all of her current projects to the person who will be doing her job from now on.",
            choices: ["beef up", "bank on", "hand over", "slip by"],
            choiceMeanings: ["強化する", "当てにする", "引き渡す", "いつの間にか過ぎる"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Before moving to her new section, Betty will (hand over) all of her current projects to the person who will be doing her job from now on.",
                beforePhrase: "Before moving to her new section [M:時] → 「新しい部署に異動する前に」",
                mainClause: "Betty [S] will hand over [V] all of her current projects [O] to the person [M]",
                relativeClause: "who [S'] will be doing [V'] her job [O'] from now on [M] → 関係代名詞節（personを修飾）",
                grammarPoint: "hand over = 「引き渡す」"
            },
            explanation: "hand over: （権限・責任・物などを）引き渡す、譲り渡す",
            translation: {
                literal: "ベティは [S] 引き渡すだろう [V] 彼女の現在のプロジェクト全てを [O] その人に [M]。",
                natural: "ベティは現在のプロジェクトを全てその人に引き渡すだろう。",
                intermediate: "新しい部署に異動する前に、ベティは現在のプロジェクトをすべて、これから彼女の仕事を担当する人に引き渡す予定です。"
            },
            rationale: "【文脈】異動する、後任者に仕事を渡す → hand over（引き渡す）。"
        }
    ]
};
