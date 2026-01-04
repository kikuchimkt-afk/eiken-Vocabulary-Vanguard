// Grade Pre-1 (準1級) - 2025年度 第2回検定
// structure: フィールド分離形式（複雑な文構造対応）
export const gradePre1Data = {
    title: "2025年度第2回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "The couple decided not to buy the house in the countryside because it was so ( ). The nearest town was over two hours away by car.",
            choices: ["stocky", "cheery", "ambitious", "remote"],
            choiceMeanings: ["ずんぐりした", "陽気な", "野心的な", "遠い、辺鄙な"],
            correctAnswer: 4,
            structure: {
                fullSentence: "The couple decided not to buy the house in the countryside because it was so (remote).",
                mainClause: "The couple [S] decided [V] not to buy the house [O:to不定詞句]",
                becauseClause: "because it [S'] was [V'] so remote [C'] → 理由を表すbecause節"
            },
            explanation: "remote: 遠い、辺鄙な（人里離れた）",
            translation: {
                literal: "夫婦は [S] 決めた [V] 買わないことを [O]、それは辺鄙だったから [理由]。",
                natural: "夫婦はその家を買わないことにした。とても辺鄙だったから。",
                intermediate: "夫婦は田舎の家を買わないことにしました。とても辺鄙で、最寄りの町まで車で2時間以上かかるからです。"
            },
            rationale: "【文脈】最寄りの町まで2時間以上 → remote（辺鄙な）が適切。"
        },
        {
            id: 2,
            text: "Dogs have excellent hearing compared with humans. There are many sounds that cannot be heard by people but are ( ) to dogs.",
            choices: ["commendable", "impressionable", "audible", "eligible"],
            choiceMeanings: ["称賛に値する", "影響を受けやすい", "聞こえる", "資格がある"],
            correctAnswer: 3,
            structure: {
                fullSentence: "There are many sounds that cannot be heard by people but are (audible) to dogs.",
                mainClause: "There [形式S] are [V] many sounds [真S]",
                relativeClause: "that [S'] cannot be heard [V':受動態] by people [M] but are [V'] audible [C'] to dogs [M] → 関係代名詞節（soundsを修飾）",
                grammarPoint: "受動態 + but 対比構造"
            },
            explanation: "audible: 聞こえる",
            translation: {
                literal: "多くの音がある [V] 人には聞こえないが [関係詞節] 犬には聞こえる [対比]。",
                natural: "人には聞こえないが犬には聞こえる音がたくさんある。",
                intermediate: "犬は人間と比べて優れた聴覚を持っています。人間には聞こえないが、犬には聞こえる音がたくさんあります。"
            },
            rationale: "【文脈】人間には聞こえないが犬には聞こえる → audible（聞こえる）。"
        },
        {
            id: 3,
            text: "The new highway should be good for ( ) who drive to work from the suburbs. The amount of time needed to drive into the city is expected to drop by 10 percent.",
            choices: ["invaders", "commuters", "composers", "installers"],
            choiceMeanings: ["侵略者", "通勤者", "作曲家", "設置者"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The new highway should be good for (commuters) who drive to work from the suburbs.",
                mainClause: "The new highway [S] should be [V] good [C] for commuters [M]",
                relativeClause: "who [S'] drive [V'] to work [M] from the suburbs [M] → 関係代名詞節（commutersを修飾）"
            },
            explanation: "commuter: 通勤者",
            translation: {
                literal: "新しい高速道路は [S] 良いはずだ [V] 通勤者にとって [M] 郊外から車で通う [関係詞節]。",
                natural: "新しい高速道路は郊外から車で通勤する人にとって良いはずだ。",
                intermediate: "新しい高速道路は郊外から車で通勤する人にとって良いはずです。市内までの運転時間が10％短縮されると予想されています。"
            },
            rationale: "【文脈】郊外から車で通勤する人 → commuters（通勤者）。"
        },
        {
            id: 4,
            text: "Roger was eager to sell as many cars as possible because he earned a 20 percent ( ) on every sale. He planned to use the extra money to travel around the world.",
            choices: ["commission", "script", "fragment", "molecule"],
            choiceMeanings: ["手数料", "台本", "断片", "分子"],
            correctAnswer: 1,
            structure: {
                fullSentence: "Roger was eager to sell as many cars as possible because he earned a 20 percent (commission) on every sale.",
                mainClause: "Roger [S] was [V] eager [C] to sell as many cars as possible [M:to不定詞]",
                becauseClause: "because he [S'] earned [V'] a 20 percent commission [O'] on every sale [M] → 理由節"
            },
            explanation: "commission: 手数料、歩合",
            translation: {
                literal: "ロジャーは [S] だった [V] 熱心 [C] できるだけ多くの車を売ることに [M]、手数料を稼いでいたから [理由]。",
                natural: "ロジャーは売上ごとに20%の手数料を稼いでいたので、できるだけ多くの車を売りたがっていた。",
                intermediate: "ロジャーはできるだけ多くの車を売りたがっていました。売上ごとに20%の手数料が入るからです。彼はその余分なお金で世界中を旅行する予定でした。"
            },
            rationale: "【文脈】売上に応じて稼ぐ金額 → commission（手数料、歩合）。"
        },
        {
            id: 5,
            text: "The doctor told Emma she was suffering from ( ) due to overwork. He said that with a break and plenty of rest, however, she would recover quickly.",
            choices: ["virtue", "fatigue", "oversight", "perception"],
            choiceMeanings: ["美徳", "疲労", "見落とし", "認識"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The doctor told Emma she was suffering from (fatigue) due to overwork.",
                mainClause: "The doctor [S] told [V] Emma [IO] that-clause [DO]",
                thatClause: "she [S'] was suffering [V'] from fatigue [M] due to overwork [M] → 「彼女は疲労に苦しんでいた」",
                grammarPoint: "tell + O + that節 / suffer from = 「～に苦しむ」"
            },
            explanation: "fatigue: 疲労",
            translation: {
                literal: "医者は [S] 伝えた [V] エマに [IO] 彼女が疲労に苦しんでいると [DO]。",
                natural: "医者はエマに疲労で苦しんでいると伝えた。",
                intermediate: "医者はエマに、働きすぎによる疲労に苦しんでいると言いました。しかし、休憩と十分な休息を取れば、すぐに回復するだろうと言いました。"
            },
            rationale: "【文脈】働きすぎ、休息で回復 → fatigue（疲労）。"
        },
        {
            id: 6,
            text: "Kevin nearly drove into the truck in front of him when it stopped ( ). He stepped hard on the brakes and just managed to avoid crashing into it.",
            choices: ["indifferently", "appealingly", "abruptly", "timidly"],
            choiceMeanings: ["無関心に", "懇願するように", "突然", "臆病に"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Kevin nearly drove into the truck in front of him when it stopped (abruptly).",
                mainClause: "Kevin [S] nearly drove [V] into the truck [M]",
                whenClause: "when it [S'] stopped [V'] abruptly [M] → 時を表すwhen節"
            },
            explanation: "abruptly: 突然",
            translation: {
                literal: "ケビンは [S] もう少しで突っ込みそうだった [V] トラックに [M]、それが突然止まったとき [when節]。",
                natural: "トラックが突然止まったとき、ケビンはもう少しで追突するところだった。",
                intermediate: "ケビンは前のトラックが突然止まった時、もう少しで追突するところでした。彼はブレーキを強く踏み、なんとか衝突を避けました。"
            },
            rationale: "【文脈】急ブレーキが必要な状況 → abruptly（突然）。"
        },
        {
            id: 7,
            text: "The professor told the class that she would not ( ) lateness. She said that any papers not turned in on time would receive a failing grade.",
            choices: ["clarify", "implement", "tolerate", "humiliate"],
            choiceMeanings: ["明確にする", "実施する", "許容する", "恥をかかせる"],
            correctAnswer: 3,
            structure: {
                fullSentence: "The professor told the class that she would not (tolerate) lateness.",
                mainClause: "The professor [S] told [V] the class [IO] that-clause [DO]",
                thatClause: "she [S'] would not tolerate [V'] lateness [O'] → 「遅刻を許容しない」"
            },
            explanation: "tolerate: 許容する、我慢する",
            translation: {
                literal: "教授は [S] 伝えた [V] クラスに [IO] 遅刻を許容しないと [DO]。",
                natural: "教授はクラスに遅刻を許容しないと伝えた。",
                intermediate: "教授はクラスに、遅刻は許容しないと言いました。期限内に提出されない論文は不合格になると言いました。"
            },
            rationale: "【文脈】遅刻は認めない → tolerate（許容する）の否定。"
        },
        {
            id: 8,
            text: "While the sun may look small from Earth, it is ( ). In fact, it is many times bigger than any planet in the solar system.",
            choices: ["massive", "amusing", "graceful", "hesitant"],
            choiceMeanings: ["巨大な", "面白い", "優雅な", "ためらいがちな"],
            correctAnswer: 1,
            structure: {
                fullSentence: "While the sun may look small from Earth, it is (massive).",
                whileClause: "While the sun [S'] may look [V'] small [C'] from Earth [M] → 譲歩のwhile節",
                mainClause: "it [S] is [V] massive [C]",
                grammarPoint: "While = 「～だが」（譲歩）"
            },
            explanation: "massive: 巨大な",
            translation: {
                literal: "太陽は小さく見えるかもしれないが [while節]、それは [S] である [V] 巨大 [C]。",
                natural: "太陽は地球から見ると小さく見えるかもしれないが、実際は巨大だ。",
                intermediate: "太陽は地球から見ると小さく見えるかもしれませんが、実際は巨大です。太陽系のどの惑星よりも何倍も大きいのです。"
            },
            rationale: "【文脈】どの惑星よりも何倍も大きい → massive（巨大な）。"
        },
        {
            id: 9,
            text: "A: Majid, remind me how many people we can ( ) in Conference Room B.<br>B: Fifteen, so it should be fine for today's meeting.",
            choices: ["outlaw", "elevate", "plead", "accommodate"],
            choiceMeanings: ["禁止する", "上げる", "嘆願する", "収容する"],
            correctAnswer: 4,
            structure: {
                fullSentence: "remind me how many people we can (accommodate) in Conference Room B.",
                mainClause: "remind [V] me [O] how-clause [O:間接疑問]",
                indirectQuestion: "how many people [O'] we [S'] can accommodate [V'] → 間接疑問文",
                grammarPoint: "remind + O + wh-節 / how many = 「いくつ」"
            },
            explanation: "accommodate: 収容する、対応する",
            translation: {
                literal: "教えて [V] 私に [O] 何人収容できるか [間接疑問]。",
                natural: "会議室Bに何人収容できるか教えて。",
                intermediate: "A: マジド、会議室Bに何人収容できるか教えて。\nB: 15人だから、今日の会議には十分だよ。"
            },
            rationale: "【文脈】会議室に入れる人数 → accommodate（収容する）。"
        },
        {
            id: 10,
            text: "The company president was not ( ) about the reasons for the layoffs. When asked, he gave only vague answers and avoided any direct comments.",
            choices: ["alleged", "forthcoming", "blissful", "fainthearted"],
            choiceMeanings: ["申し立てられた", "率直な", "幸せな", "臆病な"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The company president was not (forthcoming) about the reasons for the layoffs.",
                mainClause: "The company president [S] was [V] not forthcoming [C] about the reasons [M]",
                evidenceClause: "When asked, he gave only vague answers... → not forthcoming の根拠"
            },
            explanation: "forthcoming: 率直な、オープンな",
            translation: {
                literal: "会社の社長は [S] ではなかった [V] 率直 [C] 理由について [M]。",
                natural: "会社の社長は解雇の理由について率直ではなかった。",
                intermediate: "会社の社長は解雇の理由について率直ではありませんでした。聞かれても曖昧な答えしかせず、直接的なコメントを避けました。"
            },
            rationale: "【文脈】曖昧な答え、直接的なコメントを避ける → not forthcoming（率直ではない）。"
        },
        {
            id: 11,
            text: "The politician claimed he was ( ) to no one, but everyone knew he had received donations from many companies to help his campaign.",
            choices: ["sinister", "indebted", "perilous", "doomed"],
            choiceMeanings: ["不吉な", "恩義がある", "危険な", "運命づけられた"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The politician claimed he was (indebted) to no one, but everyone knew he had received donations.",
                mainClause: "The politician [S] claimed [V] that-clause [O]",
                thatClause: "he [S'] was [V'] indebted [C'] to no one [M] → 「彼は誰にも恩義がない」",
                contrastClause: "but everyone [S''] knew [V''] that-clause [O''] → 対比（逆接）",
                grammarPoint: "claim + that節 / be indebted to = 「～に恩義がある」"
            },
            explanation: "indebted: 恩義がある、借りがある",
            translation: {
                literal: "政治家は [S] 主張した [V] 誰にも恩義がないと [O]。",
                natural: "その政治家は誰にも恩義がないと主張した。",
                intermediate: "その政治家は誰にも恩義がないと主張しましたが、選挙活動のために多くの企業から寄付を受けていたことは皆知っていました。"
            },
            rationale: "【文脈】寄付を受けている = 恩義がある → indebted（恩義がある）。"
        },
        {
            id: 12,
            text: "Parents were asked to ( ) their children to and from the school dance. Since the event would be held in the evening, school officials did not want children going on their own.",
            choices: ["appoint", "import", "acquaint", "escort"],
            choiceMeanings: ["任命する", "輸入する", "知らせる", "付き添う"],
            correctAnswer: 4,
            structure: {
                fullSentence: "Parents were asked to (escort) their children to and from the school dance.",
                mainClause: "Parents [S] were asked [V:受動態] to escort their children [O:to不定詞]",
                sinceClause: "Since the event [S'] would be held [V'] in the evening [M] → 理由を表すsince節",
                grammarPoint: "ask + O + to do（受動態）/ escort + O + to/from"
            },
            explanation: "escort: 付き添う、護衛する",
            translation: {
                literal: "親は [S] 頼まれた [V] 付き添うよう、子供たちに [O]。",
                natural: "親は子供たちに付き添うよう頼まれた。",
                intermediate: "親は学校のダンスパーティーへの行き帰りに子供に付き添うよう頼まれました。イベントは夕方に開催されるため、学校側は子供だけで行くことを望んでいませんでした。"
            },
            rationale: "【文脈】子供だけで行かせたくない → escort（付き添う）。"
        },
        {
            id: 13,
            text: "The cookie factory made one ( ) of cookies with salt instead of sugar. They had to throw the entire lot away.",
            choices: ["aggression", "substitute", "relegation", "batch"],
            choiceMeanings: ["攻撃", "代用品", "降格", "一回分の生産量"],
            correctAnswer: 4,
            structure: {
                fullSentence: "The cookie factory made one (batch) of cookies with salt instead of sugar.",
                mainClause: "The cookie factory [S] made [V] one batch of cookies [O] with salt [M]",
                modifierDetail: "instead of sugar [M:対比] → 「砂糖の代わりに」"
            },
            explanation: "batch: 一回分の生産量、ひとまとまり",
            translation: {
                literal: "クッキー工場は [S] 作った [V] 一回分のクッキーを [O] 塩で [M]。",
                natural: "クッキー工場は塩を使って一回分のクッキーを作った。",
                intermediate: "クッキー工場は砂糖の代わりに塩を使ってクッキーを一回分作ってしまいました。その全部を捨てなければなりませんでした。"
            },
            rationale: "【文脈】一度に作った量を全部捨てた → batch（一回分の生産量）。"
        },
        {
            id: 14,
            text: "The documentary on the war was so powerful that it ( ) strong feelings of sadness and anger in the viewers.",
            choices: ["dehydrated", "evoked", "acquired", "posed"],
            choiceMeanings: ["脱水させた", "呼び起こした", "獲得した", "ポーズを取った"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The documentary on the war was so powerful that it (evoked) strong feelings of sadness and anger in the viewers.",
                mainClause: "The documentary [S] was [V] so powerful [C]",
                resultClause: "that it [S'] evoked [V'] strong feelings [O'] in the viewers [M] → 結果を表すso...that構文",
                grammarPoint: "so + 形容詞 + that = 「とても～なので...」"
            },
            explanation: "evoke: 呼び起こす、喚起する",
            translation: {
                literal: "ドキュメンタリーは [S] だった [V] とても力強い [C]、強い感情を呼び起こすほど [結果節]。",
                natural: "そのドキュメンタリーはとても力強く、視聴者に強い感情を呼び起こした。",
                intermediate: "戦争についてのドキュメンタリーはとても力強く、視聴者に強い悲しみと怒りの感情を呼び起こしました。"
            },
            rationale: "【文脈】感情を引き起こす → evoke（呼び起こす）。"
        },
        {
            id: 15,
            text: "The travel agent warned the couple not to ( ) the discount airline's flights being on time. They were often delayed or canceled.",
            choices: ["take in", "even out", "figure on", "make do"],
            choiceMeanings: ["騙す", "均等にする", "当てにする", "間に合わせる"],
            correctAnswer: 3,
            structure: {
                fullSentence: "The travel agent warned the couple not to (figure on) the discount airline's flights being on time.",
                mainClause: "The travel agent [S] warned [V] the couple [O] not to figure on... [C:to不定詞]",
                objectClause: "the flights [S'] being [V':動名詞] on time [C'] → 動名詞句が目的語",
                grammarPoint: "warn + O + (not) to do / figure on = 「当てにする」"
            },
            explanation: "figure on: 当てにする、予想する",
            translation: {
                literal: "旅行代理店は [S] 警告した [V] 夫婦に [O] 当てにしないよう [C]。",
                natural: "旅行代理店は夫婦にフライトが定刻であることを当てにしないよう警告した。",
                intermediate: "旅行代理店はその夫婦に、格安航空会社のフライトが定刻通りであることを当てにしないよう警告しました。よく遅延やキャンセルがあるからです。"
            },
            rationale: "【熟語】figure on = 当てにする。よく遅延するので当てにするな。"
        },
        {
            id: 16,
            text: "The country's military was able to ( ) the enemy's spy drone before it could gather any information about the country's defenses.",
            choices: ["hold out", "shoot down", "get over", "snap up"],
            choiceMeanings: ["持ちこたえる", "撃墜する", "乗り越える", "飛びつく"],
            correctAnswer: 2,
            structure: {
                fullSentence: "The country's military was able to (shoot down) the enemy's spy drone before it could gather any information.",
                mainClause: "The country's military [S] was able to shoot down [V] the enemy's spy drone [O]",
                beforeClause: "before it [S'] could gather [V'] any information [O'] → 時を表すbefore節",
                grammarPoint: "be able to do / shoot down = 「撃墜する」"
            },
            explanation: "shoot down: 撃墜する",
            translation: {
                literal: "その国の軍隊は [S] 撃墜できた [V] 敵のスパイドローンを [O]。",
                natural: "その国の軍隊は敵のスパイドローンを撃墜できた。",
                intermediate: "その国の軍隊は、敵のスパイドローンが国の防衛に関する情報を収集する前に撃墜することができました。"
            },
            rationale: "【熟語】shoot down = 撃墜する。ドローンを撃ち落とす。"
        },
        {
            id: 17,
            text: "The city plans to ( ) the old theater and build a new one in the same place, but many residents are unhappy about the plan.",
            choices: ["tune up", "touch on", "tear down", "free up"],
            choiceMeanings: ["調整する", "触れる", "取り壊す", "解放する"],
            correctAnswer: 3,
            structure: {
                fullSentence: "The city plans to (tear down) the old theater and build a new one in the same place.",
                mainClause: "The city [S] plans [V] to tear down the old theater and build a new one [O:to不定詞句]",
                contrastClause: "but many residents [S'] are [V'] unhappy [C'] about the plan [M] → 対比（逆接）",
                grammarPoint: "plan to do / tear down = 「取り壊す」"
            },
            explanation: "tear down: 取り壊す",
            translation: {
                literal: "市は [S] 計画している [V] 取り壊すことと建てることを [O]。",
                natural: "市は古い劇場を取り壊して新しいものを建てる計画だ。",
                intermediate: "市は古い劇場を取り壊して同じ場所に新しいものを建てる計画ですが、多くの住民はこの計画に不満を持っています。"
            },
            rationale: "【熟語】tear down = 取り壊す。古い建物を壊して新しいものを建てる。"
        },
        {
            id: 18,
            text: "A: How long will it take to ( ) from the mountaintop, Jane?<br>B: About three hours, but it will take longer if we walk at a slow pace.",
            choices: ["get down", "round out", "die away", "lay out"],
            choiceMeanings: ["降りる", "完成させる", "消えていく", "並べる"],
            correctAnswer: 1,
            structure: {
                fullSentence: "How long will it take to (get down) from the mountaintop?",
                mainClause: "How long [M] will it [形式S] take [V] to get down [真S:to不定詞句]",
                conditionalClause: "if we [S'] walk [V'] at a slow pace [M] → 条件節",
                grammarPoint: "It takes + 時間 + to do / get down = 「降りる」"
            },
            explanation: "get down: 降りる",
            translation: {
                literal: "どのくらい [M] かかりますか [V] 降りるのに [真S]？",
                natural: "山頂から降りるのにどのくらいかかりますか？",
                intermediate: "A: 山頂から降りるのにどのくらいかかる、ジェーン？\nB: 約3時間よ。でもゆっくり歩けばもっとかかるわ。"
            },
            rationale: "【熟語】get down = 降りる。山頂から下山する。"
        }
    ]
};
