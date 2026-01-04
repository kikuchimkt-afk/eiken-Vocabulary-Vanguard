// Grade Pre-1 (準1級) - 2024年度 第2回検定
// structure: フィールド分離形式（複雑な文構造対応）
export const gradePre1_2024_2Data = {
    title: "2024年度第2回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "A few characters in the new movie are based on real people, but most of the characters are completely ( ).",
            choices: ["tender", "vigorous", "influential", "fictitious"],
            choiceMeanings: ["優しい", "精力的な", "影響力のある", "架空の"],
            correctAnswer: 4,
            structure: {
                fullSentence: "A few characters in the new movie are based on real people, but most of the characters are completely (fictitious).",
                firstClause: "A few characters [S] in the new movie [M] are based [V] on real people [M]",
                mainClause: "most of the characters [S] are [V] completely fictitious [C]",
                contrastDetail: "real people ↔ fictitious の対比（逆接but）"
            },
            explanation: "fictitious: 架空の、創作の",
            translation: {
                literal: "登場人物のほとんどは [S] である [V] 完全に架空 [C]。",
                natural: "登場人物のほとんどは完全に架空のものだ。",
                intermediate: "新しい映画の数人の登場人物は実在の人物に基づいていますが、登場人物のほとんどは完全に架空のものです。"
            },
            rationale: "【文脈】実在の人物に基づいているが、ほとんどは... → fictitious（架空の）。"
        },
        {
            id: 2,
            text: "To protect government secrets, high-level workers must complete a security check before they can view ( ) documents.",
            choices: ["shrewd", "defective", "serene", "classified"],
            choiceMeanings: ["抜け目のない", "欠陥のある", "穏やかな", "機密扱いの"],
            correctAnswer: 4,
            structure: {
                fullSentence: "To protect government secrets, high-level workers must complete a security check before they can view (classified) documents.",
                purposeClause: "To protect government secrets [M:目的] → 「政府の秘密を守るために」",
                mainClause: "high-level workers [S] must complete [V] a security check [O]",
                beforeClause: "before they [S'] can view [V'] classified documents [O'] → 時を表すbefore節"
            },
            explanation: "classified: 機密扱いの",
            translation: {
                literal: "彼らが [S'] 見ることができる前に [V'] 機密文書を [O']。",
                natural: "彼らが機密文書を閲覧できるようになる前に。",
                intermediate: "政府の秘密を守るため、高レベルの職員は機密文書を閲覧できるようになる前に、セキュリティチェックを完了しなければなりません。"
            },
            rationale: "【文脈】政府の秘密を守るための文書 → classified（機密扱いの）。"
        },
        {
            id: 3,
            text: "Rashid was hoping to stay in his university dormitory for two weeks after classes ended, but he was told that all students had to ( ) their rooms immediately.",
            choices: ["vacate", "pledge", "offend", "squeeze"],
            choiceMeanings: ["立ち退く（空ける）", "誓う", "気分を害する", "搾る"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Rashid was hoping to stay in his university dormitory for two weeks after classes ended, but he was told that all students had to (vacate) their rooms immediately.",
                firstClause: "Rashid [S] was hoping [V] to stay [O:to不定詞] in his university dormitory [M] for two weeks [M]",
                contrastClause: "but he [S'] was told [V':受動態] that-clause [O'] → 対比（逆接but）",
                thatClause: "all students [S''] had to vacate [V''] their rooms [O''] immediately [M] → 「全員すぐに退去しなければならない」"
            },
            explanation: "vacate: （部屋などを）空ける、立ち退く",
            translation: {
                literal: "全ての学生は [S''] 空けなければならなかった [V''] 部屋を [O'']。",
                natural: "全ての学生は部屋を空けなければならなかった。",
                intermediate: "ラシードは授業終了後も2週間大学の寮に滞在することを望んでいましたが、全ての学生は直ちに部屋を空けなければならないと言われました。"
            },
            rationale: "【文脈】寮に残りたかったがダメだった → vacate（立ち退く）。"
        },
        {
            id: 4,
            text: "Ethan's wife believes he ( ) their daughter. He often allows the girl to do whatever she wants, and he rarely punishes her when she misbehaves.",
            choices: ["harbors", "defies", "retains", "spoils"],
            choiceMeanings: ["かくまう", "反抗する", "保持する", "甘やかす"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Ethan's wife believes he (spoils) their daughter.",
                mainClause: "Ethan's wife [S] believes [V] that-clause [O]",
                thatClause: "he [S'] spoils [V'] their daughter [O'] → 「彼が娘を甘やかしている」",
                evidenceClause: "He often allows the girl to do whatever she wants, and he rarely punishes her → spoils の根拠"
            },
            explanation: "spoil: 甘やかす、台無しにする",
            translation: {
                literal: "彼は [S'] 甘やかしている [V'] 娘を [O']。",
                natural: "彼は娘を甘やかしている。",
                intermediate: "イーサンの妻は、彼が娘を甘やかしていると信じています。彼はよく娘に好きなことを何でもさせ、彼女が行儀悪くしてもめったに罰しません。"
            },
            rationale: "【文脈】好きなことをさせる、罰しない → spoil（甘やかす）。"
        },
        {
            id: 5,
            text: "Two students were caught fighting in the school hallway. They were sent to the principal's office for ( ) action.",
            choices: ["tranquil", "conceptual", "disciplinary", "discriminatory"],
            choiceMeanings: ["穏やかな", "概念的な", "懲戒の", "差別的な"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Two students were caught fighting in the school hallway. They were sent to the principal's office for (disciplinary) action.",
                firstClause: "Two students [S] were caught [V:受動態] fighting [C:分詞] in the school hallway [M]",
                mainClause: "They [S'] were sent [V':受動態] to the principal's office [M] for disciplinary action [M:目的]",
                grammarPoint: "be caught + -ing = 「～しているところを見つかる」"
            },
            explanation: "disciplinary: 懲戒の、規律上の",
            translation: {
                literal: "彼らは [S'] 送られた [V'] 校長室へ [M] 懲戒処分のために [M]。",
                natural: "彼らは懲戒処分のために校長室へ送られた。",
                intermediate: "2人の生徒が学校の廊下で喧嘩しているところを見つかりました。彼らは懲戒処分のために校長室へ送られました。"
            },
            rationale: "【文脈】喧嘩をして校長室へ → disciplinary action（懲戒処分）。"
        },
        {
            id: 6,
            text: "A report that one of the company's products was dangerous caused ( ) in the office. Many employees were fired, and others worked nonstop to address the legal problems caused by the report.",
            choices: ["turmoil", "sarcasm", "upkeep", "heritage"],
            choiceMeanings: ["騒乱、混乱", "皮肉", "維持管理", "遺産"],
            correctAnswer: 1,
            structure: {
                fullSentence: "A report that one of the company's products was dangerous caused (turmoil) in the office.",
                mainClause: "A report [S] caused [V] turmoil [O] in the office [M]",
                thatClause: "that one of the company's products [S'] was [V'] dangerous [C'] → 同格のthat節（reportの内容）",
                evidenceClause: "Many employees were fired, and others worked nonstop... → turmoil の具体的内容"
            },
            explanation: "turmoil: 騒乱、大混乱",
            translation: {
                literal: "報告は [S] 引き起こした [V] 混乱を [O] オフィスで [M]。",
                natural: "報告はオフィスに混乱を引き起こした。",
                intermediate: "会社の製品の1つが危険であるという報告は、オフィスに大混乱を引き起こしました。多くの従業員が解雇され、他の従業員はその報告によって引き起こされた法的問題に対処するために休むことなく働きました。"
            },
            rationale: "【文脈】危険な製品、解雇、休みなく働く → turmoil（混乱）。"
        },
        {
            id: 7,
            text: "After the hockey team won the tournament, they celebrated their ( ) by going out to a local pizza restaurant.",
            choices: ["corridor", "tag", "triumph", "clarity"],
            choiceMeanings: ["廊下", "タグ", "勝利", "明快さ"],
            correctAnswer: 3,
            structure: {
                fullSentence: "After the hockey team won the tournament, they celebrated their (triumph) by going out to a local pizza restaurant.",
                afterClause: "After the hockey team [S'] won [V'] the tournament [O'] → 時を表すafter節",
                mainClause: "they [S] celebrated [V] their triumph [O]",
                meansClause: "by going out to a local pizza restaurant [M:手段] → 「ピザレストランに行くことで」"
            },
            explanation: "triumph: 勝利、大成功",
            translation: {
                literal: "彼らは [S] 祝った [V] 彼らの勝利を [O]。",
                natural: "彼らは勝利を祝った。",
                intermediate: "ホッケーチームはトーナメントで優勝した後、地元のピザレストランに行って勝利を祝いました。"
            },
            rationale: "【文脈】トーナメントで優勝して祝う → triumph（勝利）。"
        },
        {
            id: 8,
            text: "A: Please ( ) my best wishes to your husband.<br>B: Thank you. I will. He's away now, but I'll tell him when he gets back.",
            choices: ["command", "convey", "install", "prescribe"],
            choiceMeanings: ["命令する", "伝える", "設置する", "処方する"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Please (convey) my best wishes to your husband.",
                mainClause: "Please convey [V] my best wishes [O] to your husband [M]",
                responseContext: "I'll tell him when he gets back → convey の確認",
                grammarPoint: "convey A to B = 「AをBに伝える」"
            },
            explanation: "convey: 伝える、運ぶ",
            translation: {
                literal: "伝えてください [V] 私の幸運の祈りを [O] あなたの夫に [M]。",
                natural: "ご主人によろしくお伝えください。",
                intermediate: "A: ご主人によろしくお伝えください。\nB: ありがとう。そうします。彼は今留守ですが、戻ったら彼に伝えます。"
            },
            rationale: "【熟語】convey one's best wishes = よろしくと伝える。"
        },
        {
            id: 9,
            text: "A: Angus, where's that terrible ( ) coming from?<br>B: Sorry, Salma, that's the garbage. I haven't taken it out in a few days.",
            choices: ["strain", "obedience", "temper", "odor"],
            choiceMeanings: ["重圧", "従順", "気質", "臭い"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Where's that terrible (odor) coming from?",
                mainClause: "that terrible odor [S] is coming [V] from where [M] → 疑問文",
                evidenceContext: "that's the garbage, I haven't taken it out → odor の原因"
            },
            explanation: "odor: （特に不快な）臭い",
            translation: {
                literal: "そのひどい臭いは [S] どこから [M] 来ているのか [V]？",
                natural: "そのひどい臭いはどこから来ているの？",
                intermediate: "A: アンガス、そのひどい臭いはどこから来ているの？\nB: ごめん、サルマ、それはゴミだ。数日間出していないんだ。"
            },
            rationale: "【文脈】ゴミを出していない → terrible odor（ひどい臭い）。"
        },
        {
            id: 10,
            text: "After growing up in a small village, it was a big shock for Shiori to move to a ( ) populated city like Tokyo.",
            choices: ["densely", "virtually", "flexibly", "suspiciously"],
            choiceMeanings: ["密集して", "実質的に", "柔軟に", "疑わしげに"],
            correctAnswer: 1,
            structure: {
                fullSentence: "After growing up in a small village, it was a big shock for Shiori to move to a (densely) populated city like Tokyo.",
                afterClause: "After growing up [V':動名詞] in a small village [M] → 「小さな村で育った後」",
                mainClause: "it [形式S] was [V] a big shock [C] for Shiori [M] to move to a densely populated city [真S]",
                contrastDetail: "small village ↔ densely populated city の対比",
                grammarPoint: "It is + 名詞 + for O + to do（形式主語構文）"
            },
            explanation: "densely populated: 人口密度の高い",
            translation: {
                literal: "それは [形式S] だった [V] 大きなショック [C] シオリにとって [M] 人口密度の高い都市に引っ越すことは [真S]。",
                natural: "シオリにとって人口密度の高い都市に引っ越すことは大きなショックだった。",
                intermediate: "小さな村で育ったシオリにとって、東京のような人口密度の高い都市に引っ越すことは大きなショックでした。"
            },
            rationale: "【コロケーション】densely populated = 人口密度の高い。"
        },
        {
            id: 11,
            text: "Pedro has a ( ) way of eating waffles. Instead of using something sweet, such as maple syrup, he likes eating them with mustard.",
            choices: ["charitable", "numb", "surplus", "bizarre"],
            choiceMeanings: ["慈悲深い", "感覚のない", "過剰な", "奇妙な"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Pedro has a (bizarre) way of eating waffles.",
                mainClause: "Pedro [S] has [V] a bizarre way [O] of eating waffles [M]",
                evidenceClause: "Instead of using something sweet, such as maple syrup, he likes eating them with mustard → bizarre の根拠",
                contrastDetail: "maple syrup ↔ mustard の対比（甘いもの vs マスタード）"
            },
            explanation: "bizarre: 奇妙な、風変わりな",
            translation: {
                literal: "ペドロは [S] 持っている [V] 奇妙な方法を [O] ワッフルを食べる [M]。",
                natural: "ペドロはワッフルの奇妙な食べ方をする。",
                intermediate: "ペドロはワッフルの奇妙な食べ方をします。メープルシロップのような甘いものを使う代わりに、マスタードをつけて食べるのが好きなのです。"
            },
            rationale: "【文脈】シロップの代わりにマスタード → bizarre（奇妙な）。"
        },
        {
            id: 12,
            text: "Kevin could not untie the ( ) in his shoelace, so he asked his father to help him with it.",
            choices: ["flock", "knot", "gleam", "doom"],
            choiceMeanings: ["群れ", "結び目", "きらめき", "破滅"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Kevin could not untie the (knot) in his shoelace, so he asked his father to help him with it.",
                mainClause: "Kevin [S] could not untie [V] the knot [O] in his shoelace [M]",
                resultClause: "so he [S'] asked [V'] his father [O'] to help him [C':to不定詞] → 結果",
                grammarPoint: "ask + O + to do = 「Oに～するよう頼む」"
            },
            explanation: "knot: 結び目",
            translation: {
                literal: "ケビンは [S] 解けなかった [V] 結び目を [O] 靴紐の [M]。",
                natural: "ケビンは靴紐の結び目を解けなかった。",
                intermediate: "ケビンは靴紐の結び目を解くことができなかったので、父親に手伝ってくれるよう頼みました。"
            },
            rationale: "【文脈】靴紐、解けない → knot（結び目）。"
        },
        {
            id: 13,
            text: "There was a ( ) silence in the room after the company president suddenly announced that she was quitting. No one could believe it was really happening.",
            choices: ["dutiful", "nutritious", "stunned", "cherished"],
            choiceMeanings: ["忠実な", "栄養のある", "呆然とした", "大切にされた"],
            correctAnswer: 3,
            structure: {
                fullSentence: "There was a (stunned) silence in the room after the company president suddenly announced that she was quitting.",
                mainClause: "There [形式S] was [V] a stunned silence [真S] in the room [M]",
                afterClause: "after the company president [S'] suddenly announced [V'] that-clause [O'] → 時を表すafter節",
                thatClause: "she [S''] was quitting [V''] → 「彼女が辞任する」",
                evidenceClause: "No one could believe it was really happening → stunned の根拠"
            },
            explanation: "stunned: 呆然とした、驚いて声も出ない",
            translation: {
                literal: "あった [V] 呆然とした沈黙が [真S] 部屋の中に [M]。",
                natural: "部屋に呆然とした沈黙が流れた。",
                intermediate: "社長が突然辞任すると発表した後、部屋には呆然とした沈黙が流れました。誰もそれが本当に起きていることだと信じられませんでした。"
            },
            rationale: "【文脈】突然の辞任発表、信じられない → stunned silence（呆然とした沈黙）。"
        },
        {
            id: 14,
            text: "In one part of the cave, the ceiling was so low that Vikram had to ( ) on his hands and knees for about ten meters.",
            choices: ["crawl", "mourn", "meditate", "haunt"],
            choiceMeanings: ["這う", "嘆き悲しむ", "瞑想する", "出没する"],
            correctAnswer: 1,
            structure: {
                fullSentence: "In one part of the cave, the ceiling was so low that Vikram had to (crawl) on his hands and knees for about ten meters.",
                locationPhrase: "In one part of the cave [M:場所] → 「洞窟の一部では」",
                mainClause: "the ceiling [S] was [V] so low [C]",
                resultClause: "that Vikram [S'] had to crawl [V'] on his hands and knees [M] for about ten meters [M] → so...that構文",
                grammarPoint: "so + 形容詞 + that = 「とても～なので...」"
            },
            explanation: "crawl: 這う",
            translation: {
                literal: "天井が [S] だった [V] とても低かった [C] ビクラムが這わなければならないほど [result]。",
                natural: "天井がとても低かったのでビクラムは這わなければならなかった。",
                intermediate: "洞窟のある部分では天井がとても低かったので、ビクラムは約10メートルにわたって手と膝をついて這わなければなりませんでした。"
            },
            rationale: "【文脈】天井が低い、手と膝をついて → crawl（這う）。"
        },
        {
            id: 15,
            text: "A: I can't believe you ( ) the ending of the movie!<br>B: Sorry, I thought you had seen it before.",
            choices: ["phased out", "shook up", "burned off", "gave away"],
            choiceMeanings: ["段階的に廃止した", "動揺させた", "焼き払った", "漏らした（ネタバレした）"],
            correctAnswer: 4,
            structure: {
                fullSentence: "I can't believe you (gave away) the ending of the movie!",
                mainClause: "I [S] can't believe [V] that-clause [O]",
                thatClause: "you [S'] gave away [V'] the ending [O'] of the movie [M] → 「あなたが結末を漏らした」",
                responseContext: "I thought you had seen it before → 弁解（過去完了形）",
                grammarPoint: "give away = 「（秘密などを）漏らす」"
            },
            explanation: "give away: （秘密などを）漏らす、ネタバレする",
            translation: {
                literal: "あなたが [S'] 漏らした [V'] 結末を [O'] なんて信じられない！",
                natural: "映画の結末をネタバレするなんて信じられない！",
                intermediate: "A: 映画の結末をネタバレするなんて信じられない！\nB: ごめん、前に見たことがあると思ってたんだ。"
            },
            rationale: "【熟語】give away = 秘密を漏らす、ネタバレする。"
        },
        {
            id: 16,
            text: "Daisuke's parents are very strict, and it can be difficult for him to ( ) their expectations. He needs to spend a lot of time studying to get grades that will satisfy them.",
            choices: ["live up to", "hold off on", "meet up with", "break in on"],
            choiceMeanings: ["（期待などに）応える", "〜を延期する", "〜と会う", "〜に割り込む"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Daisuke's parents are very strict, and it can be difficult for him to (live up to) their expectations.",
                firstClause: "Daisuke's parents [S] are [V] very strict [C]",
                mainClause: "it [形式S] can be [V] difficult [C] for him [M] to live up to their expectations [真S]",
                evidenceClause: "He needs to spend a lot of time studying to get grades that will satisfy them → 期待に応えるのが難しい根拠",
                grammarPoint: "It is + 形容詞 + for O + to do / live up to = 「～に応える」"
            },
            explanation: "live up to: （期待や要求に）応える、沿う",
            translation: {
                literal: "それは [形式S] 難しいことがある [V] 彼にとって [M] 彼らの期待に応えることは [真S]。",
                natural: "彼にとって彼らの期待に応えるのは難しいことがある。",
                intermediate: "ダイスケの両親はとても厳しく、彼が両親の期待に応えるのは難しいことがあります。彼は両親を満足させる成績を取るために、多くの時間を勉強に費やす必要があります。"
            },
            rationale: "【コロケーション】live up to expectations = 期待に応える。"
        },
        {
            id: 17,
            text: "Though some of the other students found the class difficult, Deepak ( ) it easily. He was able to get a very high grade despite hardly studying at all.",
            choices: ["happened upon", "stayed off", "sailed through", "glared at"],
            choiceMeanings: ["偶然出会った", "近づかなかった", "楽々と切り抜けた", "睨みつけた"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Though some of the other students found the class difficult, Deepak (sailed through) it easily.",
                thoughClause: "Though some of the other students [S'] found [V'] the class [O'] difficult [C'] → 譲歩のthough節",
                mainClause: "Deepak [S] sailed through [V] it [O] easily [M]",
                evidenceClause: "He was able to get a very high grade despite hardly studying at all → sailed through の根拠",
                grammarPoint: "find + O + C（SVOC）/ sail through = 「楽々とこなす」"
            },
            explanation: "sail through: （試験や困難なことなどを）楽々と切り抜ける、容易にパスする",
            translation: {
                literal: "ディーパクは [S] 楽々と切り抜けた [V] それを [O] 簡単に [M]。",
                natural: "ディーパクはそれを簡単にこなした。",
                intermediate: "他の生徒の中にはその授業を難しいと感じる者もいましたが、ディーパクはそれを簡単にこなしました（楽々とパスしました）。彼はほとんど勉強しなかったにもかかわらず、非常に高い成績を取ることができました。"
            },
            rationale: "【熟語】sail through = 楽々とこなす。"
        },
        {
            id: 18,
            text: "Mark began his speech with jokes and funny stories to ( ) his audience. Once they were listening carefully, he began talking about what he really wanted to say.",
            choices: ["scratch out", "win over", "rack up", "indulge in"],
            choiceMeanings: ["削除する", "味方につける", "獲得する", "ふける"],
            correctAnswer: 2,
            structure: {
                fullSentence: "Mark began his speech with jokes and funny stories to (win over) his audience.",
                mainClause: "Mark [S] began [V] his speech [O] with jokes and funny stories [M]",
                purposeClause: "to win over [V'] his audience [O'] → 目的を表すto不定詞「聴衆を味方につけるために」",
                onceClause: "Once they [S''] were listening [V''] carefully [M] → 時を表すonce節「一旦～すると」",
                grammarPoint: "win over = 「味方につける、心を掴む」"
            },
            explanation: "win over: （人を）説得する、味方につける、魅了する",
            translation: {
                literal: "マークは [S] 始めた [V] スピーチを [O] ジョークや面白い話で [M] 味方につけるために [目的]。",
                natural: "マークは聴衆を味方につけるためにジョークや面白い話でスピーチを始めた。",
                intermediate: "マークは聴衆を味方につけるために、ジョークや面白い話でスピーチを始めました。彼らが注意深く聞き始めると、彼は本当に言いたかったことについて話し始めました。"
            },
            rationale: "【熟語】win over = 味方につける、心を掴む。"
        }
    ]
};
