// Grade 2 (2級) - 2024年度 第2回検定（準会場）
export const grade2_2024_2_subData = {
    title: "2024年度第2回検定一次試験(2級・準会場)",
    questions: [
        {
            id: 1,
            text: "Jane and the other scientists in her laboratory are doing an experiment to test one of her ( ) about how to make plants grow more quickly.",
            choices: ["dinosaurs", "counters", "theories", "victims"],
            choiceMeanings: ["恐竜", "カウンター", "理論", "犠牲者"],
            correctAnswer: 3,
            structure: "They [S] are doing an experiment to test [V] one of her theories [O].",
            explanation: "theories: 理論",
            translation: {
                literal: "彼らは [S] 実験をしている [V] 彼女の理論の1つをテストするために [O]。",
                natural: "彼女の理論の1つをテストする実験をしている。",
                intermediate: "ジェーンと研究室の他の科学者たちは、植物をより早く成長させる方法についての彼女の理論の1つをテストする実験をしています。"
            },
            rationale: "【文脈】実験でテストする→「理論」。"
        },
        {
            id: 2,
            text: "A new sign was put up in Greenfeld Park after a young girl got hurt in a skateboarding accident. It ( ) skateboarders to be careful when they ride in the park.",
            choices: ["succeeds", "extends", "urges", "balances"],
            choiceMeanings: ["成功する", "延長する", "促す", "バランスを取る"],
            correctAnswer: 3,
            structure: "It [S] urges [V] skateboarders [O] to be careful.",
            explanation: "urges: 促す、強く勧める",
            translation: {
                literal: "それは [S] 促す [V] スケートボーダーに [O] 注意するよう。",
                natural: "その看板はスケートボーダーに注意するよう促している。",
                intermediate: "グリーンフェルド公園で少女がスケートボードの事故で怪我をした後、新しい看板が設置されました。それは公園で乗るときに注意するようスケートボーダーに促しています。"
            },
            rationale: "【文脈】事故後に看板設置→注意するよう「促す」。"
        },
        {
            id: 3,
            text: "A: How did you know that Timmy stole the money from your wallet?<br>B: Well, one ( ) was that he knew exactly how much was stolen, even though I hadn't told him.",
            choices: ["shadow", "footstep", "clue", "genius"],
            choiceMeanings: ["影", "足音", "手がかり", "天才"],
            correctAnswer: 3,
            structure: {
                fullSentence: "One (clue) was that he knew exactly how much was stolen, even though I hadn't told him.",
                mainClause: "One clue [S] was [V] that節 [C]",
                thatClause: "he [S'] knew [V'] exactly how much was stolen [O'] → that節（補語）",
                concessionClause: "even though I [S''] hadn't told [V''] him [O''] → 譲歩のeven though節",
                grammarPoint: "A is that S+V / even though = 「～にもかかわらず」"
            },
            explanation: "clue: 手がかり",
            translation: {
                literal: "1つの手がかりは [S] だった [V] 彼が正確に盗まれた金額を知っていたこと。",
                natural: "1つの手がかりは、彼が盗まれた金額を正確に知っていたことだ。",
                intermediate: "A: ティミーが財布からお金を盗んだとどうしてわかったの？ B: 彼に言っていないのに、盗まれた金額を正確に知っていたという手がかりがあったんだ。"
            },
            rationale: "【文脈】犯人を特定する証拠→「手がかり」。"
        },
        {
            id: 4,
            text: "Last week, the bookstore near my house sold more than 200 ( ) of a new book about our town's history.",
            choices: ["zones", "menus", "lists", "copies"],
            choiceMeanings: ["地域", "メニュー", "リスト", "部（冊数）"],
            correctAnswer: 4,
            structure: "The bookstore [S] sold [V] more than 200 copies [O].",
            explanation: "copies: 部、冊",
            translation: {
                literal: "本屋は [S] 売った [V] 200部以上 [O]。",
                natural: "本屋は200部以上売った。",
                intermediate: "先週、私の家の近くの本屋は、私たちの町の歴史についての新しい本を200部以上売りました。"
            },
            rationale: "【文脈】本を売る→「部」（冊数）。"
        },
        {
            id: 5,
            text: "The museum has been closed ( ) for repairs, but it will open again in two weeks.",
            choices: ["jealously", "hesitantly", "measurably", "temporarily"],
            choiceMeanings: ["嫉妬深く", "ためらいながら", "測定可能なほど", "一時的に"],
            correctAnswer: 4,
            structure: "The museum [S] has been closed [V] temporarily.",
            explanation: "temporarily: 一時的に",
            translation: {
                literal: "博物館は [S] 閉館している [V] 一時的に。",
                natural: "博物館は一時的に閉館している。",
                intermediate: "博物館は修理のため一時的に閉館していますが、2週間後に再開します。"
            },
            rationale: "【文脈】2週間後に再開→「一時的に」閉館。"
        },
        {
            id: 6,
            text: "In some religions, the ( ) of certain foods is not allowed. For example, followers of Judaism and Islam are not supposed to eat pork.",
            choices: ["probability", "symptom", "maximum", "consumption"],
            choiceMeanings: ["確率", "症状", "最大値", "消費"],
            correctAnswer: 4,
            structure: "The consumption of certain foods [S] is not allowed [V].",
            explanation: "consumption: 消費、摂取",
            translation: {
                literal: "特定の食品の消費は [S] 許可されていない [V]。",
                natural: "特定の食品の摂取は許可されていない。",
                intermediate: "一部の宗教では、特定の食品の摂取が許可されていません。例えば、ユダヤ教やイスラム教の信者は豚肉を食べてはいけません。"
            },
            rationale: "【文脈】食品を食べることが禁止→「消費・摂取」。"
        },
        {
            id: 7,
            text: "During hide-and-seek, the children tried to ( ) themselves so that the other players could not find them.",
            choices: ["disappoint", "decrease", "conceal", "determine"],
            choiceMeanings: ["失望させる", "減少する", "隠す", "決定する"],
            correctAnswer: 3,
            structure: "The children [S] tried to conceal [V] themselves [O].",
            explanation: "conceal: 隠す",
            translation: {
                literal: "子供たちは [S] 隠そうとした [V] 自分たちを [O]。",
                natural: "子供たちは自分たちを隠そうとした。",
                intermediate: "かくれんぼ中、子供たちは他のプレイヤーに見つからないよう自分たちを隠そうとしました。"
            },
            rationale: "【文脈】かくれんぼ→見つからないよう「隠す」。"
        },
        {
            id: 8,
            text: "Hiroshi and his friends are going to climb Mt. Fuji in August. Hiroshi will ( ) the trip. He will make sure everyone knows when and where to meet.",
            choices: ["clarify", "coordinate", "recover", "expand"],
            choiceMeanings: ["明確にする", "調整する", "回復する", "拡大する"],
            correctAnswer: 2,
            structure: "Hiroshi [S] will coordinate [V] the trip [O].",
            explanation: "coordinate: 調整する、まとめる",
            translation: {
                literal: "ヒロシは [S] 調整する [V] 旅行を [O]。",
                natural: "ヒロシが旅行を調整する。",
                intermediate: "ヒロシと友人たちは8月に富士山に登る予定です。ヒロシが旅行を調整します。いつどこで集合するか全員に確認します。"
            },
            rationale: "【文脈】集合場所・時間を確認→旅行を「調整する」。"
        },
        {
            id: 9,
            text: "The workers at Smithson's factory are very ( ). They always finish making the products before the deadline.",
            choices: ["efficient", "sufficient", "convenient", "comprehensive"],
            choiceMeanings: ["効率的な", "十分な", "便利な", "包括的な"],
            correctAnswer: 1,
            structure: "The workers [S] are [V] very efficient [C].",
            explanation: "efficient: 効率的な",
            translation: {
                literal: "作業員は [S] である [V] とても効率的 [C]。",
                natural: "作業員はとても効率的だ。",
                intermediate: "スミソン工場の作業員はとても効率的です。彼らは常に締め切り前に製品を完成させます。"
            },
            rationale: "【文脈】締め切り前に完成→「効率的」。"
        },
        {
            id: 10,
            text: "Many people from the small country of Lutania have decided to ( ) to other countries where they think they can find better jobs.",
            choices: ["melt", "reflect", "emigrate", "publish"],
            choiceMeanings: ["溶ける", "反映する", "移住する", "出版する"],
            correctAnswer: 3,
            structure: {
                fullSentence: "Many people from Lutania have decided to (emigrate) to other countries where they think they can find better jobs.",
                mainClause: "Many people [S] have decided [V] to emigrate [O:to不定詞] to other countries [M]",
                relativeClause: "where they [S'] think [V'] they can find better jobs [O'] → 関係副詞節（countriesを修飾）",
                grammarPoint: "whereは場所を表す関係副詞 / decide to do"
            },
            explanation: "emigrate: 移住する（自国から出る）",
            translation: {
                literal: "多くの人々は [S] 移住することにした [V] 他国へ。",
                natural: "多くの人が他国へ移住することにした。",
                intermediate: "小国ルタニアの多くの人々は、より良い仕事が見つかると思う他国へ移住することにしました。"
            },
            rationale: "【文脈】他国へ移る→「移住する」。"
        },
        {
            id: 11,
            text: "Karen had to ( ) many forms when she applied to college. She asked her teacher for help because some of the forms were very confusing.",
            choices: ["fill out", "pass by", "let down", "roll over"],
            choiceMeanings: ["記入する", "通り過ぎる", "がっかりさせる", "転がる"],
            correctAnswer: 1,
            structure: "Karen [S] had to fill out [V] many forms [O].",
            explanation: "fill out: 記入する",
            translation: {
                literal: "カレンは [S] 記入しなければならなかった [V] 多くの書類を [O]。",
                natural: "カレンは多くの書類を記入しなければならなかった。",
                intermediate: "カレンは大学に出願するとき、多くの書類を記入しなければなりませんでした。書類の一部がとても分かりにくかったので、先生に助けを求めました。"
            },
            rationale: "【文脈】大学出願→書類を「記入する」。"
        },
        {
            id: 12,
            text: "Many places around the world have rainy seasons. During this time, rain is more frequent, and it can even rain for days ( ).",
            choices: ["in order", "in return", "on air", "on end"],
            choiceMeanings: ["順番に", "お返しに", "放送中", "続けて"],
            correctAnswer: 4,
            structure: "It [S] can rain [V] for days on end.",
            explanation: "on end: 続けて、連続して",
            translation: {
                literal: "雨が降る [V] 何日も続けて。",
                natural: "何日も続けて雨が降ることがある。",
                intermediate: "世界中の多くの場所に雨季があります。この時期、雨がより頻繁になり、何日も続けて降ることさえあります。"
            },
            rationale: "【文脈】何日も連続→「続けて」。"
        },
        {
            id: 13,
            text: "Yesterday, Sharon had a meeting with her boss. He did not say it clearly, but ( ), it seemed like he was thinking of making her a manager soon.",
            choices: ["holding the line", "reading between the lines", "getting into difficulties", "getting into shape"],
            choiceMeanings: ["電話を切らずに待つ", "行間を読む", "困難に陥る", "体調を整える"],
            correctAnswer: 2,
            structure: "Reading between the lines, it [S] seemed [V] like he was thinking of making her a manager.",
            explanation: "reading between the lines: 行間を読む、言外の意味を読み取る",
            translation: {
                literal: "行間を読むと、それは [S] 思われた [V] 彼が彼女をマネージャーにしようと考えているように。",
                natural: "行間を読むと、彼は彼女をマネージャーにしようと考えているようだった。",
                intermediate: "昨日、シャロンは上司とミーティングをしました。彼ははっきりとは言いませんでしたが、行間を読むと、彼女をすぐにマネージャーにしようと考えているようでした。"
            },
            rationale: "【文脈】はっきり言わなかったが→「行間を読む」と意図がわかる。"
        },
        {
            id: 14,
            text: "Ayumi asked her American friend Janet to check her English essay. She wanted to be sure that it was ( ) errors.",
            choices: ["free of", "guilty of", "similar to", "accustomed to"],
            choiceMeanings: ["〜がない", "〜の罪がある", "〜に似ている", "〜に慣れている"],
            correctAnswer: 1,
            structure: "She [S] wanted it to be [V] free of errors [C].",
            explanation: "free of: 〜がない",
            translation: {
                literal: "彼女は [S] それが〜であることを望んだ [V] エラーがない [C]。",
                natural: "彼女はエラーがないことを確認したかった。",
                intermediate: "あゆみはアメリカ人の友人ジャネットに英語のエッセイをチェックしてもらいました。エラーがないことを確認したかったのです。"
            },
            rationale: "【文脈】エッセイをチェック→エラー「がない」ことを確認。"
        },
        {
            id: 15,
            text: "A: How's your project going, Alice?<br>B: Not very well, I'm afraid. I'm already two days ( ), and I need to finish it by Friday.",
            choices: ["in control", "on vacation", "on purpose", "behind schedule"],
            choiceMeanings: ["制御されて", "休暇中", "わざと", "予定より遅れて"],
            correctAnswer: 4,
            structure: "I [S] am [V] two days behind schedule [C].",
            explanation: "behind schedule: 予定より遅れて",
            translation: {
                literal: "私は [S] である [V] 2日遅れで [C]。",
                natural: "2日遅れている。",
                intermediate: "A: プロジェクトはどう、アリス？ B: あまり良くないの。もう2日遅れていて、金曜日までに終わらせなきゃいけないの。"
            },
            rationale: "【文脈】金曜までに終わらせなきゃ→「予定より遅れて」いる。"
        },
        {
            id: 16,
            text: "The new tax law is expected to ( ) many complaints from the general public. Many people think that their taxes will be too high.",
            choices: ["give rise to", "make fun of", "take part in", "look forward to"],
            choiceMeanings: ["〜を引き起こす", "〜をバカにする", "〜に参加する", "〜を楽しみにする"],
            correctAnswer: 1,
            structure: "The new law [S] is expected to give rise to [V] many complaints [O].",
            explanation: "give rise to: 〜を引き起こす",
            translation: {
                literal: "新法は [S] 引き起こすと予想される [V] 多くの苦情を [O]。",
                natural: "新しい税法は多くの苦情を引き起こすと予想される。",
                intermediate: "新しい税法は一般市民から多くの苦情を引き起こすと予想されています。多くの人が税金が高すぎると考えています。"
            },
            rationale: "【文脈】税法→苦情を「引き起こす」。"
        },
        {
            id: 17,
            text: "When the teacher started talking about the school trip, the students were ( ). They wanted to hear everything she had to say about it.",
            choices: ["at risk", "on average", "all ears", "of late"],
            choiceMeanings: ["危険にさらされて", "平均して", "熱心に聞いて", "最近"],
            correctAnswer: 3,
            structure: "The students [S] were [V] all ears [C].",
            explanation: "all ears: 熱心に聞いて",
            translation: {
                literal: "生徒たちは [S] だった [V] 熱心に聞いて [C]。",
                natural: "生徒たちは熱心に聞いていた。",
                intermediate: "先生が修学旅行について話し始めると、生徒たちは熱心に聞いていました。彼女がそれについて言うことをすべて聞きたかったのです。"
            },
            rationale: "【文脈】全部聞きたい→「熱心に聞いて」いる。"
        }
    ]
};
