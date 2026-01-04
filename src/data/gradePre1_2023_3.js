// Grade Pre-1 (準1級) - 2023年度 第3回検定
// structure: フィールド分離形式（複雑な文構造対応）
export const gradePre1_2023_3Data = {
    title: "2023年度第3回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "The factories in the valley are a major source of environmental pollution. Their chimneys ( ) thick black smoke into the atmosphere.",
            choices: ["ascribe", "emit", "rattle", "allocate"],
            choiceMeanings: ["〜のせいにする", "排出する", "ガタガタ鳴る", "割り当てる"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Their chimneys (emit) thick black smoke into the atmosphere.",
                mainClause: "Their chimneys [S] emit [V] thick black smoke [O] into the atmosphere [M]",
                contextClause: "The factories in the valley are a major source of environmental pollution → 文脈説明"
            },
            explanation: "emit: （光・熱・ガスなどを）出す、排出する",
            translation: {
                literal: "それらの煙突は [S] 排出する [V] 厚い黒い煙を [O] 大気中に [M]。",
                natural: "それらの煙突は大気中に厚い黒い煙を排出している。",
                intermediate: "谷にある工場は環境汚染の主要な発生源です。それらの煙突は厚い黒い煙を大気中に排出しています。"
            },
            rationale: "【文脈】工場、煙、大気へ → emit（排出する）。"
        },
        {
            id: 2,
            text: "Rainforests are disappearing faster than ever, but many environmental groups are working to save them from being ( ) by agriculture.",
            choices: ["interpreted", "facilitated", "reprimanded", "devastated"],
            choiceMeanings: ["解釈された", "促進された", "叱責された", "荒廃させられた"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Many environmental groups are working to save them from being (devastated) by agriculture.",
                mainClause: "many environmental groups [S] are working [V] to save them [O:to不定詞] from being devastated [M]",
                fromPhrase: "from being devastated by agriculture [M:目的] → 「農業によって荒廃させられることから」",
                contextClause: "Rainforests are disappearing faster than ever → 問題の背景",
                grammarPoint: "save A from B = 「AをBから救う」/ 受動態の動名詞"
            },
            explanation: "devastate: 荒廃させる、徹底的に破壊する",
            translation: {
                literal: "多くの環境団体は [S] 活動している [V] 救うために [O] それらを荒廃から [M]。",
                natural: "多くの環境団体が農業による荒廃から熱帯雨林を救うために活動している。",
                intermediate: "熱帯雨林はかつてないほどの速さで消失していますが、多くの環境団体が農業によって荒廃させられることからそれらを守るために活動しています。"
            },
            rationale: "【文脈】森が消えている、救う → 破壊されることから → devastated（荒廃させられた）。"
        },
        {
            id: 3,
            text: "Carly ( ) over the decision about whether to accept the new job. She knew it would be a huge benefit to her career, but she did not want to move to another city.",
            choices: ["agonized", "delighted", "expanded", "generated"],
            choiceMeanings: ["苦悩した", "喜んだ", "拡大した", "生成した"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Carly (agonized) over the decision about whether to accept the new job.",
                mainClause: "Carly [S] agonized [V] over the decision [M]",
                aboutPhrase: "about whether to accept the new job [M] → 間接疑問（whether to do）",
                contrastClause: "She knew it would be a huge benefit... but she did not want to move → 苦悩の理由（ジレンマ）",
                grammarPoint: "agonize over = 「～について思い悩む」"
            },
            explanation: "agonize: 苦悩する、思い悩む",
            translation: {
                literal: "カーリーは [S] 苦悩した [V] 決定について [M]。",
                natural: "カーリーはその決定について思い悩んだ。",
                intermediate: "カーリーは新しい仕事を引き受けるかどうかの決定について思い悩みました。彼女はそれがキャリアにとって大きな利益になることを知っていましたが、別の都市に引っ越したくはありませんでした。"
            },
            rationale: "【文脈】キャリアには良いが引っ越したくない（ジレンマ） → agonize（苦悩する）。"
        },
        {
            id: 4,
            text: "The hotel has a swimming pool, free Internet access, large flat-screen TVs, and many other ( ).",
            choices: ["entrepreneurs", "amenities", "leftovers", "receptacles"],
            choiceMeanings: ["起業家", "アメニティ（快適な設備）", "残り物", "容器"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The hotel has a swimming pool, free Internet access, large flat-screen TVs, and many other (amenities).",
                mainClause: "The hotel [S] has [V] a swimming pool, free Internet access, large flat-screen TVs, and many other amenities [O]",
                parallelStructure: "A, B, C, and D → 並列構造（amenitiesの例示）"
            },
            explanation: "amenity: （ホテルなどの）快適な設備、アメニティ",
            translation: {
                literal: "そのホテルは [S] 持っている [V] プール、ネット、テレビ、その他多くのアメニティを [O]。",
                natural: "そのホテルにはプール、ネット、テレビなど多くの設備がある。",
                intermediate: "そのホテルには、水泳プール、無料のインターネットアクセス、大型薄型テレビ、その他多くの快適な設備があります。"
            },
            rationale: "【文脈】プール、ネット、テレビなどの設備 → amenity（アメニティ）。"
        },
        {
            id: 5,
            text: "The discovery of a 2,000-year-old clay pot provided valuable ( ) into the city's ancient past. Historians said the pot gave them important clues about how people used to live.",
            choices: ["misery", "insight", "hassle", "literacy"],
            choiceMeanings: ["惨めさ", "洞察、見識", "面倒なこと", "読み書きの能力"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The discovery of a 2,000-year-old clay pot provided valuable (insight) into the city's ancient past.",
                mainClause: "The discovery [S] of a 2,000-year-old clay pot [M] provided [V] valuable insight [O] into the city's ancient past [M]",
                evidenceClause: "Historians said the pot gave them important clues about how people used to live → insight の具体例",
                grammarPoint: "insight into = 「～への洞察」/ used to do = 「かつて～していた」"
            },
            explanation: "insight: 洞察、見識、理解",
            translation: {
                literal: "発見は [S] 提供した [V] 貴重な洞察を [O] 都市の古代の過去への [M]。",
                natural: "発見は都市の古代の過去への貴重な洞察を与えた。",
                intermediate: "2000年前の粘土製の壺の発見は、都市の古代の過去への貴重な洞察を与えました。歴史家たちは、その壺が人々がかつてどのように暮らしていたかについての重要な手がかりを与えてくれたと述べました。"
            },
            rationale: "【文脈】過去を知る手がかり、理解 → insight（洞察）。"
        },
        {
            id: 6,
            text: "When she first became famous, the actor loved the media attention she received. Soon, however, she grew tired of reporters ( ) on her private life.",
            choices: ["deforming", "investing", "discarding", "intruding"],
            choiceMeanings: ["変形させる", "投資する", "捨てる", "侵入する、立ち入る"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Soon, however, she grew tired of reporters (intruding) on her private life.",
                firstClause: "When she first became famous, the actor loved the media attention → 最初は好きだった",
                mainClause: "she [S] grew [V] tired [C] of reporters intruding on her private life [M:動名詞句]",
                contrastDetail: "loved ↔ grew tired of の対比（however）",
                grammarPoint: "grow + 形容詞 = 「～になる」/ intrude on = 「～に立ち入る」"
            },
            explanation: "intrude: 侵入する、邪魔する、立ち入る",
            translation: {
                literal: "彼女は [S] なった [V] うんざりに [C] レポーターが私生活に立ち入ることに [M]。",
                natural: "彼女はレポーターが私生活に立ち入ることにうんざりするようになった。",
                intermediate: "その俳優は最初に有名になったとき、受けるメディアの注目を愛していました。しかし、すぐに彼女はレポーターが彼女の私生活に立ち入ることにうんざりするようになりました。"
            },
            rationale: "【文脈】私生活に...うんざりする → intrude on（〜に立ち入る）。"
        },
        {
            id: 7,
            text: "The mayor announced that in the ( ) of the huge storm, government offices and schools would be closed until the town was cleaned up.",
            choices: ["treaty", "inclusion", "fortune", "aftermath"],
            choiceMeanings: ["条約", "包含", "富、運勢", "余波、直後"],
            correctAnswer: 4,
            structure: {
                fullSentence: "The mayor announced that in the (aftermath) of the huge storm, government offices and schools would be closed.",
                mainClause: "The mayor [S] announced [V] that-clause [O]",
                thatClause: "government offices and schools [S'] would be closed [V':受動態] → 発表の内容",
                inPhrase: "in the aftermath of the huge storm [M:時] → 「巨大な嵐の直後に」",
                untilClause: "until the town [S''] was cleaned up [V''] → 時を表すuntil節"
            },
            explanation: "aftermath: （災害などの）直後、余波",
            translation: {
                literal: "市長は [S] 発表した [V] 巨大な嵐の直後に役所と学校が閉鎖されると [O]。",
                natural: "市長は巨大な嵐の直後に役所と学校を閉鎖すると発表した。",
                intermediate: "市長は、巨大な嵐の余波を受けて（直後に）、町が片付くまで役所と学校を閉鎖すると発表しました。"
            },
            rationale: "【文脈】嵐の後、町が片付くまで → aftermath（直後、余波）。"
        },
        {
            id: 8,
            text: "As Kiernan hiked along the mountain ( ), he could see that there was a large lake to the east, and that the valley to the west was covered mostly by forest.",
            choices: ["pledge", "ridge", "quota", "stock"],
            choiceMeanings: ["誓約", "尾根", "ノルマ", "在庫"],
            correctAnswer: 2,
            structure: {
                fullSentence: "As Kiernan hiked along the mountain (ridge), he could see that there was a large lake to the east.",
                asClause: "As Kiernan [S'] hiked [V'] along the mountain ridge [M] → 時を表すas節",
                mainClause: "he [S] could see [V] that-clause [O]",
                thatClause1: "there was a large lake to the east → 東に湖",
                thatClause2: "the valley to the west was covered mostly by forest → 西に森"
            },
            explanation: "ridge: 尾根、稜線",
            translation: {
                literal: "キアナンが [S'] ハイキングしていると [V'] 山の尾根に沿って [M]、彼は見えた [V]。",
                natural: "山の尾根に沿ってハイキングしていると、彼には見えた。",
                intermediate: "キアナンが山の尾根に沿ってハイキングしていると、東には大きな湖があり、西の谷はほとんど森で覆われているのが見えました。"
            },
            rationale: "【文脈】山を歩く、東と西が見える高い場所 → ridge（尾根）。"
        },
        {
            id: 9,
            text: "Cathy felt ( ) after lunch, so she drank some coffee to help her stay awake for the rest of the day.",
            choices: ["rigid", "notable", "acute", "drowsy"],
            choiceMeanings: ["厳格な", "注目すべき", "急性の", "眠い"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Cathy felt (drowsy) after lunch, so she drank some coffee to help her stay awake.",
                mainClause: "Cathy [S] felt [V] drowsy [C] after lunch [M]",
                resultClause: "so she [S'] drank [V'] some coffee [O'] → 結果",
                purposeClause: "to help her stay awake for the rest of the day [M:目的] → 「起きているために」",
                grammarPoint: "help + O + 原形不定詞"
            },
            explanation: "drowsy: 眠い",
            translation: {
                literal: "キャシーは [S] 感じた [V] 眠く [C] 昼食後 [M]。",
                natural: "キャシーは昼食後眠気を感じた。",
                intermediate: "キャシーは昼食後に眠気を感じたので、残りの一日起きているためにコーヒーを飲みました。"
            },
            rationale: "【文脈】起きておくためにコーヒーを飲む → drowsy（眠い）。"
        },
        {
            id: 10,
            text: "All the staff members at the hotel are very ( ), so famous people who book rooms there know that nothing about their stays will be told to the media.",
            choices: ["discreet", "artificial", "realistic", "temporary"],
            choiceMeanings: ["口が堅い、慎重な", "人工的な", "現実的な", "一時的な"],
            correctAnswer: 1,
            structure: {
                fullSentence: "All the staff members at the hotel are very (discreet), so famous people who book rooms there know that nothing about their stays will be told to the media.",
                mainClause: "All the staff members [S] at the hotel [M] are [V] very discreet [C]",
                resultClause: "so famous people [S'] know [V'] that-clause [O'] → 結果",
                relativeClause: "who [S''] book [V''] rooms [O''] there [M] → 関係代名詞節",
                thatClause: "nothing about their stays will be told to the media → 「滞在についてメディアに漏れない」"
            },
            explanation: "discreet: 分別のある、口が堅い、慎重な",
            translation: {
                literal: "全てのスタッフは [S] である [V] とても口が堅い [C]。",
                natural: "スタッフは全員とても口が堅い。",
                intermediate: "そのホテルのスタッフ全員が非常に口が堅いため、そこで部屋を予約する有名人は、滞在について何もメディアに語られないことを知っています。"
            },
            rationale: "【文脈】メディアに漏らさない → discreet（口が堅い）。"
        },
        {
            id: 11,
            text: "Hundreds of fans waited for hours outside the band's hotel hoping to get even a brief ( ) of the famous rock stars.",
            choices: ["couch", "sip", "glimpse", "pinch"],
            choiceMeanings: ["カウチ", "ひとくち", "ちらりと見ること", "つまむこと"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Hundreds of fans waited for hours outside the band's hotel hoping to get even a brief (glimpse) of the famous rock stars.",
                mainClause: "Hundreds of fans [S] waited [V] for hours [M] outside the band's hotel [M]",
                participlePhrase: "hoping to get even a brief glimpse [M:分詞構文] → 「一目だけでも見ようと期待して」",
                grammarPoint: "get a glimpse of = 「～をちらりと見る」"
            },
            explanation: "glimpse: ちらりと見ること",
            translation: {
                literal: "何百人ものファンが [S] 待った [V] 何時間も [M] 一目見ようと期待して [M]。",
                natural: "何百人ものファンが一目見ようと何時間も待った。",
                intermediate: "何百人ものファンが、有名なロックスターを一目だけでも見ようと期待して、バンドのホテルの外で何時間も待ちました。"
            },
            rationale: "【コロケーション】get a glimpse of = 〜をちらりと見る。"
        },
        {
            id: 12,
            text: "A: I'm glad you finally made it, Carl. Did you receive any ( ) from the airline because your flight was canceled?<br>B: Well, they paid for a hotel for the night, but that's all.",
            choices: ["glances", "fabric", "installations", "compensation"],
            choiceMeanings: ["一瞥", "布地", "設置", "補償"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Did you receive any (compensation) from the airline because your flight was canceled?",
                mainClause: "Did you [S] receive [V] any compensation [O] from the airline [M]?",
                becauseClause: "because your flight [S'] was canceled [V':受動態] → 理由を表すbecause節",
                evidenceContext: "they paid for a hotel for the night → compensation の例"
            },
            explanation: "compensation: 補償、賠償",
            translation: {
                literal: "あなたは [S] 受け取りましたか [V] 何らかの補償を [O] 航空会社から [M]？",
                natural: "航空会社から何か補償を受け取りましたか？",
                intermediate: "A: やっと着いてよかったよ、カール。フライトがキャンセルされたから、航空会社から何か補償は受け取った？\nB: まあ、彼らは一泊分のホテル代を払ってくれたけど、それだけだよ。"
            },
            rationale: "【文脈】フライトキャンセル、ホテル代支払い → compensation（補償）。"
        },
        {
            id: 13,
            text: "Killing another human being is generally considered to be a crime unless it is ( ), as in the case of self-defense.",
            choices: ["adjacent", "justified", "integral", "peculiar"],
            choiceMeanings: ["隣接し​​た", "正当化される", "不可欠な", "奇妙な"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Killing another human being is generally considered to be a crime unless it is (justified).",
                mainClause: "Killing another human being [S] is [V] generally considered [C] to be a crime [C']",
                unlessClause: "unless it [S'] is [V'] justified [C'] → 条件を表すunless節「正当化されない限り」",
                examplePhrase: "as in the case of self-defense → 正当防衛の例",
                grammarPoint: "unless = 「～でない限り」/ be considered to be"
            },
            explanation: "justified: 正当化された、正当な",
            translation: {
                literal: "それが [S'] 正当化されない限り [C']。",
                natural: "それが正当化されない限り。",
                intermediate: "他の人間を殺すことは、正当防衛の場合のように正当化されない限り、一般的に犯罪であると考えられています。"
            },
            rationale: "【文脈】人を殺すのは犯罪だが、正当防衛なら？ → justified（正当化される）。"
        },
        {
            id: 14,
            text: "For people trying to lose weight, many doctors advise choosing ( ) meats, such as chicken breast, over meats that are fatty.",
            choices: ["sacred", "grim", "sheer", "lean"],
            choiceMeanings: ["神聖な", "暗い、厳しい", "全くの", "脂肪の少ない"],
            correctAnswer: 4,
            structure: {
                fullSentence: "For people trying to lose weight, many doctors advise choosing (lean) meats, such as chicken breast, over meats that are fatty.",
                forPhrase: "For people trying to lose weight [M:対象] → 「減量しようとしている人々に対して」",
                mainClause: "many doctors [S] advise [V] choosing lean meats [O:動名詞]",
                examplePhrase: "such as chicken breast → lean meats の例",
                contrastDetail: "lean ↔ fatty の対比",
                grammarPoint: "advise + -ing / A over B = 「BよりもAを」"
            },
            explanation: "lean: （肉が）脂肪の少ない",
            translation: {
                literal: "多くの医師は [S] 助言する [V] 脂肪の少ない肉を選ぶことを [O]。",
                natural: "多くの医師は脂肪の少ない肉を選ぶよう助言する。",
                intermediate: "体重を減らそうとしている人々に対して、多くの医師は脂肪の多い肉よりも、鶏の胸肉のような脂肪の少ない肉を選ぶよう助言しています。"
            },
            rationale: "【文脈】脂肪の多い肉（fatty）の反対 → lean（脂肪の少ない）。"
        },
        {
            id: 15,
            text: "KBC is an organization that helps children who lost their parents. It helps these ( ) find new homes where they can be well cared for.",
            choices: ["orphans", "phases", "leases", "allies"],
            choiceMeanings: ["孤児", "段階", "賃貸借契約", "同盟国"],
            correctAnswer: 1,
            structure: {
                fullSentence: "It helps these (orphans) find new homes where they can be well cared for.",
                contextClause: "KBC is an organization that helps children who lost their parents → orphans の定義",
                mainClause: "It [S] helps [V] these orphans [O] find new homes [C:原形不定詞]",
                relativeClause: "where they [S'] can be well cared for [V':受動態] → 関係副詞節（homesを修飾）",
                grammarPoint: "help + O + 原形不定詞"
            },
            explanation: "orphan: 孤児",
            translation: {
                literal: "それは [S] 助ける [V] これらの孤児たちが [O] 新しい家を見つけるのを [C]。",
                natural: "それはこれらの孤児たちが新しい家を見つけるのを助ける。",
                intermediate: "KBCは両親を亡くした子供たちを助ける組織です。それは、これらの孤児たちが手厚い世話を受けられる新しい家を見つけるのを助けています。"
            },
            rationale: "【文脈】両親を亡くした子供たち → orphans（孤児）。"
        },
        {
            id: 16,
            text: "The man ( ) himself in the crime when he lied about where he was on the night of the murder.",
            choices: ["discriminated", "implicated", "eliminated", "constrained"],
            choiceMeanings: ["差別した", "巻き込んだ、関係させた", "排除した", "拘束した"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The man (implicated) himself in the crime when he lied about where he was on the night of the murder.",
                mainClause: "The man [S] implicated [V] himself [O] in the crime [M]",
                whenClause: "when he [S'] lied [V'] about where he was [M] on the night of the murder [M] → 時を表すwhen節",
                grammarPoint: "implicate oneself in = 「自分を～に関与させる」/ lie about = 「～について嘘をつく」"
            },
            explanation: "implicate: （犯罪などに）巻き込む、関係させる",
            translation: {
                literal: "その男は [S] 巻き込んだ [V] 自分自身を [O] 犯罪に [M]。",
                natural: "その男は自分自身を犯罪に関連付けた。",
                intermediate: "その男は、殺人のあった夜にどこにいたかについて嘘をついたとき、自分自身を犯罪に関与させました（疑いを招きました）。"
            },
            rationale: "【文脈】嘘をついて疑われる → implicate oneself（自分が関与していると示す）。"
        },
        {
            id: 17,
            text: "While borrowing books is free, most libraries will charge a late fee for those that are ( ).",
            choices: ["furious", "bilateral", "potent", "overdue"],
            choiceMeanings: ["激怒した", "二国間の", "強力な", "期限を過ぎた"],
            correctAnswer: 4,
            structure: {
                fullSentence: "While borrowing books is free, most libraries will charge a late fee for those that are (overdue).",
                whileClause: "While borrowing books [S'] is [V'] free [C'] → 譲歩のwhile節",
                mainClause: "most libraries [S] will charge [V] a late fee [O] for those [M]",
                relativeClause: "that [S''] are [V''] overdue [C''] → 関係代名詞節（thoseを修飾）"
            },
            explanation: "overdue: （支払・返却）期限の過ぎた",
            translation: {
                literal: "それらは [S''] である [V''] 期限切れ [C'']。",
                natural: "期限を過ぎたもの。",
                intermediate: "本を借りるのは無料ですが、ほとんどの図書館では期限を過ぎたものに対して延滞料を請求します。"
            },
            rationale: "【文脈】延滞料が発生する → overdue（期限を過ぎた）。"
        },
        {
            id: 18,
            text: "John and Tina made the ( ) decision to end their relationship. Neither one was happy, and they both wanted to start dating other people.",
            choices: ["monetary", "judicial", "mutual", "indifferent"],
            choiceMeanings: ["金銭的な", "司法の", "相互の", "無関心な"],
            correctAnswer: 3,
            structure: {
                fullSentence: "John and Tina made the (mutual) decision to end their relationship.",
                mainClause: "John and Tina [S] made [V] the mutual decision [O] to end their relationship [M:to不定詞]",
                evidenceClause: "Neither one was happy, and they both wanted to start dating other people → mutual の根拠",
                grammarPoint: "mutual decision = 「お互いの合意による決定」"
            },
            explanation: "mutual: 相互の、共通の",
            translation: {
                literal: "ジョンとティナは [S] した [V] 相互の決定を [O] 関係を終わらせるという [M]。",
                natural: "ジョンとティナはお互いの合意で関係を終わらせることを決めた。",
                intermediate: "ジョンとティナは関係を終わらせるという相互の決定を下しました。どちらも幸せではなく、二人とも他の人とデートを始めたいと思っていました。"
            },
            rationale: "【文脈】二人ともそう思っていた → mutual（相互の）。"
        },
        {
            id: 19,
            text: "Before cooking a potato, its skin should be ( ) with a fork. This lets steam escape from the small holes, preventing the potato from exploding.",
            choices: ["pierced", "radiated", "ceased", "rejected"],
            choiceMeanings: ["穴を開けられた", "放射された", "やんだ", "拒絶された"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Before cooking a potato, its skin should be (pierced) with a fork.",
                beforePhrase: "Before cooking a potato [M:時] → 「ジャガイモを調理する前に」",
                mainClause: "its skin [S] should be pierced [V:受動態] with a fork [M]",
                resultClause: "This lets steam escape from the small holes → 穴を開ける効果",
                participlePhrase: "preventing the potato from exploding [M:分詞構文] → 「爆発を防いで」",
                grammarPoint: "let + O + 原形不定詞 / prevent A from B"
            },
            explanation: "pierce: 穴を開ける、突き刺す",
            translation: {
                literal: "その皮は [S] 穴を開けられるべきである [V] フォークで [M]。",
                natural: "フォークで穴を開けるべきである。",
                intermediate: "ジャガイモを調理する前に、フォークで皮に穴を開けるべきです。これにより、小さな穴から蒸気が逃げ、ジャガイモが爆発するのを防ぎます。"
            },
            rationale: "【文脈】小さな穴から蒸気を逃がす → pierce（穴を開ける）。"
        },
        {
            id: 20,
            text: "After trimming the tree, the men gathered up the cut branches and placed them all in one big ( ).",
            choices: ["bid", "heap", "vice", "grain"],
            choiceMeanings: ["入札", "山（積み重ね）", "悪徳", "穀物"],
            correctAnswer: 2,
            structure: {
                fullSentence: "After trimming the tree, the men gathered up the cut branches and placed them all in one big (heap).",
                afterPhrase: "After trimming the tree [M:時] → 「木を剪定した後」",
                mainClause: "the men [S] gathered up [V1] the cut branches [O1] and placed [V2] them [O2] all in one big heap [M]"
            },
            explanation: "heap: 山、積み重ね",
            translation: {
                literal: "男たちは [S] 集め [V1] 切った枝を [O1]、置いた [V2] それらを [O2] 一つの大きな山に [M]。",
                natural: "男たちは切った枝を集めて一つの大きな山に積んだ。",
                intermediate: "木を剪定した後、男たちは切り取った枝を集め、それらをすべて一つの大きな山にしました。"
            },
            rationale: "【文脈】刈った枝を集めて積む → heap（山）。"
        },
        {
            id: 21,
            text: "In English, the ( ) form of a noun is usually created by adding an \"s\" to the end of it. However, there are some exceptions, like \"feet\" and \"mice.\"",
            choices: ["empirical", "fiscal", "verbal", "plural"],
            choiceMeanings: ["経験的な", "財政の", "言葉の", "複数の"],
            correctAnswer: 4,
            structure: {
                fullSentence: "In English, the (plural) form of a noun is usually created by adding an \"s\" to the end of it.",
                mainClause: "the plural form [S] of a noun [M] is usually created [V:受動態]",
                meansPhrase: "by adding an \"s\" to the end of it [M:手段] → 「sを加えることで」",
                exceptionClause: "However, there are some exceptions, like \"feet\" and \"mice\" → 例外の説明"
            },
            explanation: "plural: 複数の（⇔singular）",
            translation: {
                literal: "名詞の [M] 複数形は [S] 通常作られる [V]。",
                natural: "名詞の複数形は通常作られる。",
                intermediate: "英語では、名詞の複数形は通常、語尾に「s」を加えることで作られます。しかし、「feet」や「mice」のようないくつかの例外があります。"
            },
            rationale: "【文脈】sをつける、feetやmice → plural（複数形）。"
        },
        {
            id: 22,
            text: "As the man walked up into the hills, the noises of the city began to ( ) until the only thing he could hear was the birds singing.",
            choices: ["die away", "rub down", "back out", "call off"],
            choiceMeanings: ["消えていく", "こすってきれいにする", "手を引く", "中止する"],
            correctAnswer: 1,
            structure: {
                fullSentence: "As the man walked up into the hills, the noises of the city began to (die away).",
                asClause: "As the man [S'] walked up [V'] into the hills [M] → 時を表すas節",
                mainClause: "the noises [S] of the city [M] began [V] to die away [O:to不定詞]",
                untilClause: "until the only thing he could hear was the birds singing → 完全に消えた状態",
                grammarPoint: "die away = 「（音などが）徐々に消える」"
            },
            explanation: "die away: （音や光などが）徐々に消える、薄れる",
            translation: {
                literal: "街の騒音が [S] 始めた [V] 徐々に消えることを [O]。",
                natural: "街の騒音が徐々に消え始めた。",
                intermediate: "男が丘へと歩いて登っていくにつれて、鳥のさえずりだけが聞こえるようになるまで、街の騒音は徐々に消えていきました。"
            },
            rationale: "【文脈】聞こえなくなるまで → die away（消えていく）。"
        },
        {
            id: 23,
            text: "Scientists have yet to ( ) an exact cause for food allergies, but they believe that both genetics and the environment play a role.",
            choices: ["see out", "pin down", "juice up", "book in"],
            choiceMeanings: ["見送る", "突き止める、特定する", "活気づける", "予約する"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Scientists have yet to (pin down) an exact cause for food allergies.",
                mainClause: "Scientists [S] have yet to pin down [V] an exact cause [O] for food allergies [M]",
                contrastClause: "but they [S'] believe [V'] that-clause [O'] → 対比（まだ特定していないが信じている）",
                thatClause: "both genetics and the environment play a role → 「遺伝と環境の両方が役割を果たす」",
                grammarPoint: "have yet to do = 「まだ～していない」/ pin down = 「突き止める」"
            },
            explanation: "pin down: 突き止める、特定する",
            translation: {
                literal: "科学者たちは [S] まだ突き止めていない [V] 正確な原因を [O]。",
                natural: "科学者たちはまだ正確な原因を突き止めていない。",
                intermediate: "科学者たちは食物アレルギーの正確な原因をまだ突き止めていませんが、遺伝と環境の両方が役割を果たしていると信じています。"
            },
            rationale: "【文脈】原因を...まだできていない → pin down（突き止める）。"
        },
        {
            id: 24,
            text: "The manager interviewed several applicants, but he has yet to find someone who ( ) to his standards for the job.",
            choices: ["sends off", "measures up", "knuckles down", "sums up"],
            choiceMeanings: ["発送する", "（基準などに）達する", "真剣に取り組む", "要約する"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The manager interviewed several applicants, but he has yet to find someone who (measures up) to his standards for the job.",
                firstClause: "The manager [S] interviewed [V] several applicants [O]",
                contrastClause: "but he [S'] has yet to find [V'] someone [O'] → 対比（面接したがまだ見つからない）",
                relativeClause: "who [S''] measures up [V''] to his standards [M] for the job [M] → 関係代名詞節",
                grammarPoint: "have yet to do / measure up to = 「～に達する」"
            },
            explanation: "measure up: （基準・期待などに）達する、かなう",
            translation: {
                literal: "誰か [who] 達する [V''] 彼の基準に [M]。",
                natural: "彼の基準に達する人。",
                intermediate: "マネージャーは何人かの応募者と面接しましたが、その仕事に対する彼の基準に達する人物をまだ見つけていません。"
            },
            rationale: "【熟語】measure up to = 基準に達する。"
        },
        {
            id: 25,
            text: "Laura thought the dog looked friendly, so she walked toward it. She ( ) in shock, however, when it started barking at her.",
            choices: ["drew back", "made up", "pulled through", "cooled off"],
            choiceMeanings: ["後退した（身を引いた）", "作り上げた", "切り抜けた", "冷えた"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Laura thought the dog looked friendly, so she walked toward it. She (drew back) in shock, however, when it started barking at her.",
                firstClause: "Laura [S] thought [V] the dog looked friendly [O:that節] → 最初の印象",
                resultClause: "so she [S'] walked [V'] toward it [M] → 結果（近づいた）",
                mainClause: "She [S''] drew back [V''] in shock [M]",
                whenClause: "when it [S'''] started [V'''] barking at her [O''':動名詞] → 時を表すwhen節",
                grammarPoint: "draw back = 「身を引く、後退する」"
            },
            explanation: "draw back: 後退する、身を引く",
            translation: {
                literal: "彼女は [S''] 身を引いた [V''] 驚いて [M]。",
                natural: "彼女は驚いて身を引いた。",
                intermediate: "ローラはその犬が友好的に見えたので、近づいて歩いていきました。しかし、犬が彼女に吠え始めたとき、彼女は驚いて身を引きました。"
            },
            rationale: "【文脈】吠えられて驚く → 身を引く → draw back。"
        }
    ]
};
