// Grade Pre-1 (準1級) - 2024年度 第1回検定
// structure: フィールド分離形式（複雑な文構造対応）
export const gradePre1_2024_1Data = {
    title: "2024年度第1回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "All of Raoul's coworkers respect him for his ( ) ideas. He has suggested many new and creative ways to improve his team's performance.",
            choices: ["defensive", "innovative", "abrupt", "mournful"],
            choiceMeanings: ["防御的な", "革新的な", "突然の", "悲しげな"],
            correctAnswer: 2,
            structure: {
                fullSentence: "All of Raoul's coworkers respect him for his (innovative) ideas.",
                mainClause: "All of Raoul's coworkers [S] respect [V] him [O] for his innovative ideas [M]",
                evidenceClause: "He has suggested many new and creative ways... → innovative の根拠"
            },
            explanation: "innovative: 革新的な",
            translation: {
                literal: "ラウールの同僚は皆 [S] 尊敬している [V] 彼を [O] 彼の革新的なアイデアのために [M]。",
                natural: "ラウールの同僚は皆、彼の革新的なアイデアのために彼を尊敬している。",
                intermediate: "ラウールの同僚は皆、彼の革新的なアイデアのために彼を尊敬しています。彼はチームのパフォーマンスを向上させるための多くの新しい創造的な方法を提案してきました。"
            },
            rationale: "【文脈】新しく創造的な方法 → innovative（革新的な）。"
        },
        {
            id: 2,
            text: "The doctor was unable to give a specific ( ) of what was causing the woman's headaches. He decided to send her to a specialist for further tests.",
            choices: ["execution", "vaccination", "diagnosis", "tendency"],
            choiceMeanings: ["処刑、実行", "予防接種", "診断", "傾向"],
            correctAnswer: 3,
            structure: {
                fullSentence: "The doctor was unable to give a specific (diagnosis) of what was causing the woman's headaches.",
                mainClause: "The doctor [S] was [V] unable [C] to give a specific diagnosis [M:to不定詞]",
                indirectQuestion: "of what [S'] was causing [V'] the woman's headaches [O'] → 間接疑問（原因について）",
                resultClause: "He decided to send her to a specialist for further tests → 結果"
            },
            explanation: "diagnosis: 診断",
            translation: {
                literal: "医師は [S] だった [V] できない [C] 具体的な診断を与えることが [M]。",
                natural: "医師は具体的な診断を下すことができなかった。",
                intermediate: "医師はその女性の頭痛の原因について具体的な診断を下すことができませんでした。彼はさらなる検査のために彼女を専門医に送ることにしました。"
            },
            rationale: "【文脈】頭痛の原因、専門医への紹介 → diagnosis（診断）。"
        },
        {
            id: 3,
            text: "The kids did not ( ) a single word after they broke the lamp. They remained silent until their mom came and asked what had happened.",
            choices: ["scorch", "intensify", "exceed", "utter"],
            choiceMeanings: ["焦がす", "強める", "超える", "発する（言葉を）"],
            correctAnswer: 4,
            structure: {
                fullSentence: "The kids did not (utter) a single word after they broke the lamp.",
                mainClause: "The kids [S] did not utter [V] a single word [O]",
                afterClause: "after they [S'] broke [V'] the lamp [O'] → 時を表すafter節",
                evidenceClause: "They remained silent until... → utter しなかったことの根拠"
            },
            explanation: "utter: （言葉を）発する",
            translation: {
                literal: "子供たちは [S] 発しなかった [V] 一言も [O]。",
                natural: "子供たちは一言も発しなかった。",
                intermediate: "子供たちはランプを壊した後、一言も発しませんでした。彼らは母親が来て何が起こったのか尋ねるまで黙ったままでした。"
            },
            rationale: "【文脈】黙っていた → 言葉を発しなかった → utter（発する）。"
        },
        {
            id: 4,
            text: "Various environmental groups are ( ) the government to pass laws that will do more to prevent pollution.",
            choices: ["resigning", "lobbying", "violating", "exhibiting"],
            choiceMeanings: ["辞職している", "ロビー活動をしている（働きかけている）", "違反している", "展示している"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Various environmental groups are (lobbying) the government to pass laws that will do more to prevent pollution.",
                mainClause: "Various environmental groups [S] are lobbying [V] the government [O] to pass laws [C:to不定詞]",
                relativeClause: "that [S'] will do [V'] more [O'] to prevent pollution [M] → 関係代名詞節（lawsを修飾）",
                grammarPoint: "lobby + O + to do = 「Oに～するよう働きかける」"
            },
            explanation: "lobby: ロビー活動をする、働きかける",
            translation: {
                literal: "グループは [S] 働きかけている [V] 政府に [O] 法律を通すよう [C]。",
                natural: "グループは政府に法律を通すよう働きかけている。",
                intermediate: "様々な環境団体が、公害を防ぐためにもっと多くのことをする法律を可決するよう政府に働きかけています（ロビー活動をしています）。"
            },
            rationale: "【文脈】法律を通してほしいと政府に頼む → lobby（ロビー活動をする）。"
        },
        {
            id: 5,
            text: "Jaina often gives talks at business conferences because of her ( ). She has started many companies and successfully manages some of them herself.",
            choices: ["pasture", "notation", "expertise", "stimulus"],
            choiceMeanings: ["牧草地", "表記法", "専門知識", "刺激"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Jaina often gives talks at business conferences because of her (expertise).",
                mainClause: "Jaina [S] often gives [V] talks [O] at business conferences [M]",
                becausePhrase: "because of her expertise [M:理由] → 「彼女の専門知識のために」",
                evidenceClause: "She has started many companies and successfully manages some of them herself → expertise の根拠"
            },
            explanation: "expertise: 専門知識、専門技術",
            translation: {
                literal: "ジャイナは [S] よく行う [V] 講演を [O] ビジネス会議で [M] 専門知識のため [M]。",
                natural: "ジャイナは専門知識があるため、ビジネス会議でよく講演を行う。",
                intermediate: "ジャイナは多くの企業を立ち上げ、そのいくつかを自ら成功裏に経営しているという専門知識があるため、ビジネス会議でよく講演を行います。"
            },
            rationale: "【文脈】多くの会社を経営、講演をする → expertise（専門知識）。"
        },
        {
            id: 6,
            text: "The goalkeeper jumped and tried to ( ) the soccer ball with his hand to prevent the other team from scoring a goal, but the ball went into the net anyway.",
            choices: ["deflect", "devour", "deprive", "deploy"],
            choiceMeanings: ["逸らす（そらす）", "貪り食う", "奪う", "配備する"],
            correctAnswer: 1,
            structure: {
                fullSentence: "The goalkeeper jumped and tried to (deflect) the soccer ball with his hand to prevent the other team from scoring a goal.",
                mainClause: "The goalkeeper [S] jumped and tried [V] to deflect the soccer ball [O:to不定詞] with his hand [M]",
                purposeClause: "to prevent the other team from scoring a goal [M:目的] → 「得点を防ぐために」",
                contrastClause: "but the ball went into the net anyway → 対比（結果は失敗）",
                grammarPoint: "try to do / prevent O from -ing"
            },
            explanation: "deflect: （進路を）逸らす、かわす",
            translation: {
                literal: "ゴールキーパーは [S] ジャンプして試みた [V] 逸らすことを [O] サッカーボールを手で [M]。",
                natural: "ゴールキーパーはジャンプして手でサッカーボールを逸らそうとした。",
                intermediate: "ゴールキーパーはジャンプして、相手チームの得点を防ぐために手でサッカーボールを逸らそうとしましたが、ボールはとにかくネットに入ってしまいました。"
            },
            rationale: "【文脈】ゴールを防ぐためにボールの軌道を変える → deflect（逸らす）。"
        },
        {
            id: 7,
            text: "A: It seems strange that Susan is so shy, considering her family.<br>B: I know. Both of her parents are so ( ), but Susan hardly ever speaks in class.",
            choices: ["inept", "outgoing", "awkward", "precise"],
            choiceMeanings: ["不適切な、不器用な", "社交的な", "不器用な、気まずい", "正確な"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Both of her parents are so (outgoing), but Susan hardly ever speaks in class.",
                mainClause: "Both of her parents [S] are [V] so outgoing [C]",
                contrastClause: "but Susan [S'] hardly ever speaks [V'] in class [M] → 対比（逆接but）",
                contrastDetail: "shy ↔ outgoing の対比"
            },
            explanation: "outgoing: 社交的な",
            translation: {
                literal: "彼女の両親は両方とも [S] である [V] とても社交的 [C]。",
                natural: "彼女の両親は二人ともとても社交的だ。",
                intermediate: "A: スーザンの家族を考えると、彼女がとても内気なのは奇妙だね。\nB: そうだね。彼女の両親は二人ともとても社交的なのに、スーザンは授業中めったに話さないんだ。"
            },
            rationale: "【文脈】スーザンは内気（shy）だが親は...（逆） → outgoing（社交的な）。"
        },
        {
            id: 8,
            text: "By ( ), Sarah met an old high school friend from England while she was on vacation in Australia. She was surprised to meet someone she knew so far from home.",
            choices: ["coincidence", "symptom", "limitation", "recession"],
            choiceMeanings: ["偶然（の一致）", "症状", "制限", "不況"],
            correctAnswer: 1,
            structure: {
                fullSentence: "By (coincidence), Sarah met an old high school friend from England while she was on vacation in Australia.",
                modifierPhrase: "By coincidence [M:方法・状況] → 「偶然に」",
                mainClause: "Sarah [S] met [V] an old high school friend [O] from England [M]",
                whileClause: "while she [S'] was [V'] on vacation [C'] in Australia [M] → 時を表すwhile節",
                evidenceClause: "She was surprised to meet someone she knew so far from home → coincidence の根拠"
            },
            explanation: "coincidence: 偶然の一致",
            translation: {
                literal: "偶然に [M]、サラは [S] 会った [V] 高校時代の古い友人に [O]。",
                natural: "偶然、サラは高校時代の古い友人に会った。",
                intermediate: "偶然にも、サラはオーストラリアでの休暇中にイギリスからの高校時代の古い友人に会いました。彼女は家からこんなに離れた場所で知り合いに会って驚きました。"
            },
            rationale: "【文脈】遠く離れた場所で知り合いに会う → coincidence（偶然）。"
        },
        {
            id: 9,
            text: "The man was in a lot of pain after surgery, but the medication he took made it ( ). He was finally able to rest a bit once the pills took effect.",
            choices: ["admissible", "animate", "bearable", "coherent"],
            choiceMeanings: ["許容される", "活気のある", "耐えられる", "首尾一貫した"],
            correctAnswer: 3,
            structure: {
                fullSentence: "The man was in a lot of pain after surgery, but the medication he took made it (bearable).",
                firstClause: "The man [S] was [V] in a lot of pain [C] after surgery [M]",
                mainClause: "the medication [S'] he took [関係詞節] made [V'] it [O'] bearable [C']",
                evidenceClause: "He was finally able to rest a bit once the pills took effect → bearable の根拠",
                grammarPoint: "make + O + C（SVOC構文）"
            },
            explanation: "bearable: 耐えられる",
            translation: {
                literal: "薬は [S'] した [V'] それを [O'] 耐えられるものに [C']。",
                natural: "薬はそれを耐えられるものにした。",
                intermediate: "その男性は手術後、激しい痛みに襲われましたが、飲んだ薬のおかげで痛みは耐えられるものになりました。薬が効いてくると、ようやく少し休むことができました。"
            },
            rationale: "【文脈】激しい痛みが薬で... → bearable（耐えられる）。"
        },
        {
            id: 10,
            text: "A: Should we use ( ) plates for the barbecue?<br>B: Yeah. It'll make cleaning up really simple as we can just throw them away after they've been used.",
            choices: ["imposing", "disposable", "elaborate", "reluctant"],
            choiceMeanings: ["堂々とした", "使い捨ての", "手の込んだ", "気の進まない"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Should we use (disposable) plates for the barbecue?",
                mainClause: "Should we [S] use [V] disposable plates [O] for the barbecue [M]?",
                evidenceClause: "we can just throw them away after they've been used → disposable の根拠",
                resultDetail: "It'll make cleaning up really simple → 使い捨てを使う理由"
            },
            explanation: "disposable: 使い捨ての",
            translation: {
                literal: "私たちは使うべきか [V] 使い捨ての皿を [O] バーベキューのために [M]？",
                natural: "バーベキューには使い捨ての皿を使うべきかな？",
                intermediate: "A: バーベキューには使い捨ての皿を使うべきかな？\nB: うん。使い終わったら捨てるだけだから、片付けが本当に簡単になるよ。"
            },
            rationale: "【文脈】使い終わったら捨てる、片付けが簡単 → disposable（使い捨ての）。"
        },
        {
            id: 11,
            text: "A: Akari has a real ( ) for math, but I don't think her current class is challenging enough.<br>B: I agree. Let's look into moving her to an advanced class.",
            choices: ["misfortune", "dialect", "aptitude", "thorn"],
            choiceMeanings: ["不運", "方言", "才能、適性", "とげ"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Akari has a real (aptitude) for math, but I don't think her current class is challenging enough.",
                mainClause: "Akari [S] has [V] a real aptitude [O] for math [M]",
                contrastClause: "but I [S'] don't think [V'] her current class is challenging enough [O':that節] → 対比",
                resultClause: "Let's look into moving her to an advanced class → 上級クラスへ移動を検討"
            },
            explanation: "aptitude: 才能、適性",
            translation: {
                literal: "アカリは [S] 持っている [V] 本当の才能を [O] 数学の [M]。",
                natural: "アカリには数学の本当の才能がある。",
                intermediate: "A: アカリには数学の本当の才能があるけど、今のクラスは十分なやりがいがないと思うんだ。\nB: 同感だね。彼女を上級クラスに移すことを検討しよう。"
            },
            rationale: "【文脈】数学が得意、上級クラスへ → aptitude（才能）。"
        },
        {
            id: 12,
            text: "Kenji's wet shirt ( ) to his skin as he ran home in the rain without an umbrella.",
            choices: ["clung", "ground", "strained", "posed"],
            choiceMeanings: ["張り付いた", "挽いた", "緊張させた", "ポーズをとった"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Kenji's wet shirt (clung) to his skin as he ran home in the rain without an umbrella.",
                mainClause: "Kenji's wet shirt [S] clung [V] to his skin [M]",
                asClause: "as he [S'] ran [V'] home [M] in the rain [M] without an umbrella [M] → 時・状況を表すas節",
                grammarPoint: "cling to = 「～にくっつく」（過去形：clung）"
            },
            explanation: "cling: ぴったりくっつく、張り付く（過去形：clung）",
            translation: {
                literal: "ケンジの濡れたシャツは [S] 張り付いた [V] 彼の肌に [M]。",
                natural: "ケンジの濡れたシャツは肌に張り付いた。",
                intermediate: "傘を持たずに雨の中を走って家に帰る途中、ケンジの濡れたシャツは肌に張り付きました。"
            },
            rationale: "【文脈】濡れたシャツが肌に... → clung（張り付いた）。"
        },
        {
            id: 13,
            text: "A: Ms. Jones, why do I need to rewrite this paper?<br>B: Your writing is too similar to the sources you used. You need to ( ) those ideas into your own words.",
            choices: ["moderate", "conform", "paraphrase", "decipher"],
            choiceMeanings: ["和らげる", "従う", "言い換える", "解読する"],
            correctAnswer: 3,
            structure: {
                fullSentence: "You need to (paraphrase) those ideas into your own words.",
                mainClause: "You [S] need [V] to paraphrase those ideas [O:to不定詞句] into your own words [M]",
                contextClause: "Your writing is too similar to the sources you used → 言い換えが必要な理由",
                grammarPoint: "need to do / paraphrase A into B = 「AをBに言い換える」"
            },
            explanation: "paraphrase: （分かりやすく）言い換える",
            translation: {
                literal: "あなたは [S] 言い換える必要がある [V] それらのアイデアを [O] 自分の言葉に [M]。",
                natural: "あなたはそれらのアイデアを自分の言葉で言い換える必要がある。",
                intermediate: "A: ジョーンズ先生、なぜ私はこの論文を書き直す必要があるのですか？\nB: あなたの文章は使用した情報源に似すぎています。それらのアイデアを自分の言葉で言い換える必要があります。"
            },
            rationale: "【文脈】自分の言葉にする → paraphrase（言い換える）。"
        },
        {
            id: 14,
            text: "Caleb slowly and carefully picked up all the ( ) of the glass bowl that had dropped on the floor. He wanted to make sure he did not miss any pieces.",
            choices: ["fragments", "sermons", "mergers", "garments"],
            choiceMeanings: ["破片", "説教", "合併", "衣服"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Caleb slowly and carefully picked up all the (fragments) of the glass bowl that had dropped on the floor.",
                mainClause: "Caleb [S] slowly and carefully picked up [V] all the fragments [O] of the glass bowl [M]",
                relativeClause: "that [S'] had dropped [V'] on the floor [M] → 関係代名詞節（glass bowlを修飾）",
                evidenceClause: "He wanted to make sure he did not miss any pieces → fragments を残さず拾う理由"
            },
            explanation: "fragment: 破片、断片",
            translation: {
                literal: "カレブは [S] 拾い上げた [V] 全ての破片を [O] ガラスボウルの [M]。",
                natural: "カレブはガラスボウルの全ての破片を拾い上げた。",
                intermediate: "カレブは床に落ちたガラスボウルのすべての破片をゆっくりと慎重に拾い上げました。彼はかけらを一つも見逃さないようにしたかったのです。"
            },
            rationale: "【文脈】割れたガラスボウル → fragments（破片）。"
        },
        {
            id: 15,
            text: "A: I really ( ) Amy. She's so upset.<br>B: Yeah. Breaking her arm is bad enough, but right before her important baseball game is even worse.",
            choices: ["tear into", "get by", "part with", "feel for"],
            choiceMeanings: ["〜を激しく攻撃する", "何とかやっていく", "〜を手放す", "〜に同情する（かわいそうに思う）"],
            correctAnswer: 4,
            structure: {
                fullSentence: "I really (feel for) Amy. She's so upset.",
                mainClause: "I [S] really feel for [V] Amy [O]",
                evidenceClause: "She's so upset → 同情する理由",
                additionalContext: "Breaking her arm is bad enough, but right before her important baseball game is even worse → さらなる理由",
                grammarPoint: "feel for = 「～に同情する」"
            },
            explanation: "feel for: 〜に同情する、〜を思いやる",
            translation: {
                literal: "私は [S] 本当に同情する [V] エイミーに [O]。",
                natural: "エイミーが本当にかわいそうだ。",
                intermediate: "A: エイミーが本当にかわいそうだ。彼女はとても落ち込んでいる。\nB: そうだね。腕を折るだけでも十分悪いけど、重要な野球の試合の直前というのはさらに悪いね。"
            },
            rationale: "【熟語】feel for = 同情する。かわいそうに思う。"
        },
        {
            id: 16,
            text: "Kelsey took a client to dinner to discuss a new project, but they only ( ) business after they finished their meal.",
            choices: ["ran out of", "came up with", "got down to", "looked in on"],
            choiceMeanings: ["〜を使い果たす", "〜を思いつく", "〜に本腰を入れて取り組む", "〜を訪ねる"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Kelsey took a client to dinner to discuss a new project, but they only (got down to) business after they finished their meal.",
                firstClause: "Kelsey [S] took [V] a client [O] to dinner [M] to discuss a new project [M:目的]",
                mainClause: "they [S'] only got down to [V'] business [O']",
                afterClause: "after they [S''] finished [V''] their meal [O''] → 時を表すafter節",
                grammarPoint: "get down to = 「～に本腰を入れて取り組む」"
            },
            explanation: "get down to: 〜に本腰を入れて取り組む、〜を始める",
            translation: {
                literal: "彼らは [S'] ようやく本腰を入れた [V'] ビジネスに [O']。",
                natural: "彼らはようやくビジネスの話を始めた。",
                intermediate: "ケルシーは新しいプロジェクトについて話し合うためにクライアントを夕食に連れて行きましたが、彼らが食事を終えた後にようやくビジネスの話に入りました。"
            },
            rationale: "【熟語】get down to business = 本題に入る、仕事に取り掛かる。"
        },
        {
            id: 17,
            text: "Noah knew he needed to ( ) more effort on the final exam if he wanted to get a good grade in his history class.",
            choices: ["grow into", "put forth", "answer for", "turn away"],
            choiceMeanings: ["〜になる（成長して）", "出す（力を発揮する）", "〜の責任を負う", "追い払う"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Noah knew he needed to (put forth) more effort on the final exam if he wanted to get a good grade.",
                mainClause: "Noah [S] knew [V] that-clause [O]",
                thatClause: "he [S'] needed [V'] to put forth more effort [O':to不定詞句] on the final exam [M]",
                conditionalClause: "if he [S''] wanted [V''] to get a good grade [O''] in his history class [M] → 条件節",
                grammarPoint: "put forth effort = 「努力を払う」"
            },
            explanation: "put forth: （力などを）出す、発揮する",
            translation: {
                literal: "ノアは [S] 知っていた [V] 彼が必要だと [O] もっと努力を出すことが [O']。",
                natural: "ノアはもっと努力する必要があることを知っていた。",
                intermediate: "ノアは、歴史のクラスで良い成績を取りたいなら、期末試験でもっと努力する必要があることを知っていました。"
            },
            rationale: "【熟語】put forth effort = 努力する。"
        },
        {
            id: 18,
            text: "When Larry was criticized for not working hard enough, Alice ( ) him. She said he often stayed late to help others with their work.",
            choices: ["stuck up for", "got around to", "fell back on", "went in with"],
            choiceMeanings: ["〜をかばった（弁護した）", "〜に取り掛かった", "〜に頼った（最後の手段として）", "〜と組んだ"],
            correctAnswer: 1,
            structure: {
                fullSentence: "When Larry was criticized for not working hard enough, Alice (stuck up for) him.",
                whenClause: "When Larry [S'] was criticized [V':受動態] for not working hard enough [M] → 時・状況を表すwhen節",
                mainClause: "Alice [S] stuck up for [V] him [O]",
                evidenceClause: "She said he often stayed late to help others with their work → 弁護の内容",
                grammarPoint: "stick up for = 「～をかばう、弁護する」"
            },
            explanation: "stick up for: 〜をかばう、弁護する、支持する",
            translation: {
                literal: "アリスは [S] かばった [V] 彼を [O]。",
                natural: "アリスは彼をかばった。",
                intermediate: "ラリーが十分に一生懸命働いていないと批判されたとき、アリスは彼をかばいました。彼女は、彼が他の人の仕事を手伝うためにしばしば遅くまで残っていたと言いました。"
            },
            rationale: "【熟語】stick up for = かばう、味方する。"
        }
    ]
};
