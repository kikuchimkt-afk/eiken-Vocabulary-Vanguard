// Grade Pre-1 (準1級) - 2022年度 第1回検定
export const gradePre1_2022_1Data = {
    title: "2022年度第1回検定一次試験(準1級)",
    questions: [
        {
            id: 1,
            text: "After considering the case, the judge decided to show ( ) and only gave the man a warning. She said that he was clearly very sorry for his crime.",
            choices: ["disgrace", "closure", "mercy", "seclusion"],
            choiceMeanings: ["不名誉", "閉鎖、終結", "慈悲", "隔離"],
            correctAnswer: 3,
            structure: "the judge [S] decided to show [V] mercy [O] and only gave [V] the man [IO] a warning [DO].",
            explanation: "mercy: 慈悲、情け",
            translation: {
                literal: "事件を考慮した後 [M]、裁判官は [S] 示すことに決めた [V] 慈悲を [O] そして与えた [V] 男性に [IO] 警告だけを [DO]。",
                natural: "事情を考慮して、裁判官は情状酌量し、その男性に警告を与えるだけにした。",
                intermediate: "事件を検討した後、裁判官は慈悲を示すことに決め、その男には警告だけを与えました。彼女は、彼が自分の罪を明らかに深く後悔していると言いました。"
            },
            rationale: "【文脈】only gave a warning（警告だけですませた） → mercy（慈悲）。"
        },
        {
            id: 2,
            text: "Lisa looks exactly like her twin sister, but she has a completely different ( ). She is very calm and rarely gets angry, unlike her sister.",
            choices: ["temperament", "accumulation", "veneer", "glossary"],
            choiceMeanings: ["気質", "蓄積", "うわっ面、化粧板", "用語解説"],
            correctAnswer: 1,
            structure: "she [S] has [V] a completely different temperament [O].",
            explanation: "temperament: 気質、気性",
            translation: {
                literal: "リサは双子の妹にそっくりだが、彼女は [S] 持っている [V] 全く異なる気質を [O]。",
                natural: "リサは双子の妹にそっくりだが、気質は全く異なる。",
                intermediate: "リサは双子の姉妹と見た目はそっくりですが、全く異なる気質を持っています。姉妹とは違って、彼女はとても穏やかで、めったに怒りません。"
            },
            rationale: "【文脈】very calm and rarely gets angry（穏やかで怒らない） → temperament（気質）。"
        },
        {
            id: 3,
            text: "A: Annabel, don't just ( ) your shoulders when I ask you if you've finished your homework. Give me a clear answer.<br>B: Sorry, Mom. I'm almost done with it.",
            choices: ["echo", "bow", "dump", "shrug"],
            choiceMeanings: ["反響する", "お辞儀する", "捨てる", "すくめる"],
            correctAnswer: 4,
            structure: "Don't just shrug [V] your shoulders [O] when I ask you [M].",
            explanation: "shrug: （肩を）すくめる",
            translation: {
                literal: "ただすくめるな [V] あなたの肩を [O] 私が聞くときに [M]。",
                natural: "私が聞いたときにただ肩をすくめるのはやめなさい。",
                intermediate: "A: アナベル、宿題が終わったかどうか聞いているときに、ただ肩をすくめるのはやめなさい。はっきりと答えなさい。\nB: ごめんなさい、お母さん。もうすぐ終わります。"
            },
            rationale: "【文脈】shouldersをどうするか → shrug（すくめる）。"
        },
        {
            id: 4,
            text: "When there is a big business convention in town, it is almost impossible to find a hotel with a ( ). Most hotels quickly get fully booked.",
            choices: ["sprain", "segment", "transition", "vacancy"],
            choiceMeanings: ["捻挫", "部分、区分", "移行、過渡期", "空室、空き"],
            correctAnswer: 4,
            structure: "it [S] is [V] almost impossible [C] to find a hotel with a vacancy [M].",
            explanation: "vacancy: 空室、空き、欠員",
            translation: {
                literal: "それは [S] です [V] ほぼ不可能 [C] ホテルを見つけることは 空室のある [M]。",
                natural: "空室のあるホテルを見つけるのはほぼ不可能だ。",
                intermediate: "町で大きなビジネス会議があるとき、空室のあるホテルを見つけるのはほぼ不可能です。ほとんどのホテルはすぐに満室になります。"
            },
            rationale: "【文脈】get fully booked（満室になる） → vacancy（空室）。"
        },
        {
            id: 5,
            text: "The detective ( ) the gang member for hours, but he would not say who had helped him commit the crime. Eventually, the detective stopped trying to get information from him.",
            choices: ["discharged", "converted", "interrogated", "affiliated"],
            choiceMeanings: ["解雇した、退院させた", "転換した", "尋問した", "提携させた"],
            correctAnswer: 3,
            structure: "The detective [S] interrogated [V] the gang member [O] for hours [M].",
            explanation: "interrogate: 尋問する",
            translation: {
                literal: "刑事は [S] 尋問した [V] ギャングの一員を [O] 何時間も [M]。",
                natural: "刑事はギャングの一員を何時間も尋問した。",
                intermediate: "刑事はそのギャングのメンバーを何時間も尋問しましたが、彼は誰が犯行を手助けしたか言おうとしませんでした。結局、刑事は彼から情報を得ようとするのをやめました。"
            },
            rationale: "【文脈】trying to get information（情報を得ようとする） → interrogated（尋問した）。"
        },
        {
            id: 6,
            text: "To treat an injured ankle, doctors recommend ( ). This can be done by wrapping a bandage tightly around the injury.",
            choices: ["depression", "progression", "compression", "suspicion"],
            choiceMeanings: ["憂鬱、不況", "進行", "圧迫", "疑い"],
            correctAnswer: 3,
            structure: "doctors [S] recommend [V] compression [O].",
            explanation: "compression: 圧迫",
            translation: {
                literal: "怪我した足首を治療するために [M]、医師たちは [S] 推奨する [V] 圧迫を [O]。",
                natural: "足首の怪我を治療するために、医師は圧迫を推奨する。",
                intermediate: "怪我をした足首を治療するために、医師は圧迫を勧めます。これは包帯を患部にきつく巻くことで行えます。"
            },
            rationale: "【文脈】wrapping a bandage tightly（包帯をきつく巻く） → compression（圧迫）。"
        },
        {
            id: 7,
            text: "A: It suddenly started raining heavily on my way home, and I got completely wet.<br>B: You should have ( ) my advice and taken an umbrella with you.",
            choices: ["molded", "heeded", "twisted", "yielded"],
            choiceMeanings: ["型作った", "心に留めた、従った", "ねじった", "譲った"],
            correctAnswer: 2,
            structure: "You [S] should have heeded [V] my advice [O] and taken [V] an umbrella [O].",
            explanation: "heed: （忠告などを）心に留める、従う",
            translation: {
                literal: "あなたは [S] 従うべきだった [V] 私の忠告に [O] そして持って行くべきだった [V] 傘を [O]。",
                natural: "私の忠告に従って、傘を持って行くべきだったのに。",
                intermediate: "A: 家に帰る途中、突然激しく雨が降り出して、ずぶ濡れになっちゃったよ。\nB: 私の忠告を聞いて、傘を持って行くべきだったわね。"
            },
            rationale: "【文脈】傘を持っていくべきだった → adviceに従う → heeded（従った）。"
        },
        {
            id: 8,
            text: "As a way of attracting more ( ) customers, the perfume company began advertising its products in magazines read mainly by wealthy people.",
            choices: ["theatrical", "brutal", "frantic", "affluent"],
            choiceMeanings: ["劇場の", "残忍な", "半狂乱の", "裕福な"],
            correctAnswer: 4,
            structure: "the company [S] began advertising [V].",
            explanation: "affluent: 裕福な",
            translation: {
                literal: "惹きつけるための方法として [V] より裕福な顧客を [O]、会社は [S] 宣伝を始めた [V]。",
                natural: "より裕福な顧客を惹きつけるために、会社は宣伝を始めた。",
                intermediate: "より裕福な顧客を惹きつける方法として、その香水会社は主に富裕層に読まれている雑誌で製品の宣伝を始めました。"
            },
            rationale: "【文脈】read mainly by wealthy people（主に富裕層に読まれる） → affluent（裕福な）。"
        },
        {
            id: 9,
            text: "The teacher said that, apart from a few ( ) errors, the student's essay was perfect. He gave it the highest score possible.",
            choices: ["trivial", "conclusive", "palatial", "offensive"],
            choiceMeanings: ["些細な", "決定的な", "宮殿のような", "不快な"],
            correctAnswer: 1,
            structure: "the student's essay [S] was [V] perfect [C].",
            explanation: "trivial: 些細な、つまらない",
            translation: {
                literal: "教師は [S] 言った [V]、いくつかの些細な間違いを除いて [M]、生徒のエッセイは [S'] 完璧だったと [C']。",
                natural: "教師は、いくつかの些細な間違いを除けば、その生徒のエッセイは完璧だと言った。",
                intermediate: "先生は、いくつかの些細な間違いを除けば、その生徒のエッセイは完璧だと言いました。彼はそれに考えうる最高点を与えました。"
            },
            rationale: "【文脈】essay was perfect（完璧だった）、highest score（最高点） → errorsは些細なもの → trivial（些細な）。"
        },
        {
            id: 10,
            text: "The injured soccer player watched ( ) as his replacement played in the final game. He had really wanted to continue playing.",
            choices: ["substantially", "previously", "enviously", "relevantly"],
            choiceMeanings: ["実質的に", "以前に", "うらやましく", "関連して"],
            correctAnswer: 3,
            structure: "The injured soccer player [S] watched [V] enviously [M] as his replacement played [M].",
            explanation: "enviously: うらやましく、ねたんで",
            translation: {
                literal: "怪我をしたサッカー選手は [S] 見つめた [V] うらやましげに [M] 彼の交代要員がプレーするのを [M]。",
                natural: "怪我をした選手は、交代要員がプレーするのをうらやましげに見つめていた。",
                intermediate: "怪我をしたサッカー選手は、決勝戦で交代要員がプレーするのをうらやましそうに見ていました。彼は本当にプレーを続けたかったのです。"
            },
            rationale: "【文脈】wanted to continue playing（プレーし続けたかった） → watched enviously（うらやましく見た）。"
        },
        {
            id: 11,
            text: "The new hotel in front of Abraham's apartment building is not tall enough to ( ) his view of the mountains beyond the city. He can still see them clearly.",
            choices: ["obstruct", "delegate", "entangle", "boost"],
            choiceMeanings: ["ふさぐ、妨害する", "委任する", "もつれさせる", "高める"],
            correctAnswer: 1,
            structure: "The new hotel [S] is not tall enough to obstruct [V] his view [O] of the mountains [M].",
            explanation: "obstruct: （視界・通路などを）ふさぐ、妨害する",
            translation: {
                literal: "新しいホテルは [S] 高くない ふさぐほど [V] 彼の眺めを [O] 山々の [M]。",
                natural: "新しいホテルは山々の眺めをふさぐほど高くはない。",
                intermediate: "アブラハムのアパートの前の新しいホテルは、街の向こうにある山々の彼の眺めを遮るほど高くはありません。彼はまだ山々をはっきりと見ることができます。"
            },
            rationale: "【文脈】still see them clearly（まだはっきり見える） → obstruct（ふさぐ）ほど高くない。"
        },
        {
            id: 12,
            text: "Having spilled red wine on the white carpet, Martha tried to remove the ( ) with soap and water. However, she could not remove it completely.",
            choices: ["stain", "slit", "bump", "blaze"],
            choiceMeanings: ["染み、汚れ", "裂け目", "コブ、衝突", "炎"],
            correctAnswer: 1,
            structure: "Martha [S] tried to remove [V] the stain [O] with soap and water [M].",
            explanation: "stain: 染み、汚れ",
            translation: {
                literal: "マーサは [S] 取り除こうとした [V] 染みを [O] 石鹸と水で [M]。",
                natural: "マーサは石鹸と水で染みを取り除こうとした。",
                intermediate: "白いカーペットに赤ワインをこぼしてしまったので、マーサは石鹸と水でその染みを取り除こうとしました。しかし、完全には消せませんでした。"
            },
            rationale: "【文脈】spilled red wine（赤ワインをこぼした） → stain（染み）。"
        },
        {
            id: 13,
            text: "The war continued for a year, but neither side could ( ). With victory seemingly impossible, the two countries agreed to stop fighting.",
            choices: ["devise", "prevail", "evolve", "reconstruct"],
            choiceMeanings: ["考案する", "勝つ、普及する", "進化する", "再建する"],
            correctAnswer: 2,
            structure: "neither side [S] could prevail [V].",
            explanation: "prevail: 勝つ、優勢である",
            translation: {
                literal: "戦争は一年続いたが、どちら側も [S] 勝てなかった [V]。",
                natural: "どちら側も勝つことができなかった。",
                intermediate: "戦争は1年間続きましたが、どちらの側も勝つことはできませんでした。勝利は不可能に思えたため、両国は戦闘を停止することに合意しました。"
            },
            rationale: "【文脈】victory seemingly impossible（勝利は不可能に見える） → prevail（勝つ）。"
        },
        {
            id: 14,
            text: "The leader used the political instability in his country as a ( ) for introducing strict new laws aimed at preventing any opposition to his rule.",
            choices: ["trance", "downfall", "rampage", "pretext"],
            choiceMeanings: ["トランス状態", "転落、滅亡", "暴れ回ること", "口実"],
            correctAnswer: 4,
            structure: "The leader [S] used [V] the political instability [O] as a pretext [M] for introducing strict new laws [M].",
            explanation: "pretext: 口実、名目",
            translation: {
                literal: "指導者は [S] 利用した [V] 政治的不安定さを [O] 口実として [M] 厳しい新法を導入するための [M]。",
                natural: "指導者は政治的不安定さを、厳しい新法を導入するための口実として利用した。",
                intermediate: "その指導者は、自国の政治的不安定さを、自分の支配に対するあらゆる反対を防ぐことを目的とした厳しい新しい法律を導入するための口実として利用しました。"
            },
            rationale: "【文脈】used AS A ... for introducing laws（法律導入の～として利用した） → pretext（口実）。"
        },
        {
            id: 15,
            text: "The suspect continued to ( ) his innocence to the police. He told them repeatedly he had been nowhere near the place where the crime had occurred.",
            choices: ["conceal", "counter", "expire", "assert"],
            choiceMeanings: ["隠す", "対抗する", "期限が切れる", "主張する、断言する"],
            correctAnswer: 4,
            structure: "The suspect [S] continued to assert [V] his innocence [O] to the police [M].",
            explanation: "assert: 主張する、断言する",
            translation: {
                literal: "容疑者は [S] 主張し続けた [V] 彼の無実を [O] 警察に [M]。",
                natural: "容疑者は警察に自身の無実を主張し続けた。",
                intermediate: "容疑者は警察に対して自分の無実を主張し続けました。彼は、犯罪が起きた場所の近くにはいなかったと繰り返し彼らに言いました。"
            },
            rationale: "【文脈】repeatedly told them he had been nowhere near（現場の近くにいなかったと繰り返した） → assert（主張する）。"
        },
        {
            id: 16,
            text: "Good writers make every effort to ( ) mistakes from their work, but occasionally they miss some errors and have to make corrections later.",
            choices: ["eliminate", "expend", "stabilize", "oppress"],
            choiceMeanings: ["排除する", "費やす", "安定させる", "抑圧する"],
            correctAnswer: 1,
            structure: "Good writers [S] make every effort to eliminate [V] mistakes [O] from their work [M].",
            explanation: "eliminate: 排除する、取り除く",
            translation: {
                literal: "良い作家は [S] あらゆる努力をする 排除するために [V] 間違いを [O] 彼らの作品から [M]。",
                natural: "良い作家は作品から間違いを排除するためにあらゆる努力をする。",
                intermediate: "優れた作家は自分の作品から間違いをなくすためにあらゆる努力をしますが、時折エラーを見逃してしまい、後で修正しなければならないことがあります。"
            },
            rationale: "【文脈】miss some errors and make corrections（エラーを見逃して修正する）の逆 → eliminate（排除する）。"
        },
        {
            id: 17,
            text: "After the kidnappers returned the child to its parents in exchange for a large ( ), they tried to escape with the money. Police soon caught them, however, and returned the money to the couple.",
            choices: ["ransom", "applause", "monopoly", "prank"],
            choiceMeanings: ["身代金", "拍手", "独占", "いたずら"],
            correctAnswer: 1,
            structure: "the kidnappers [S] returned [V] the child [O] in exchange for a large ransom [M].",
            explanation: "ransom: 身代金",
            translation: {
                literal: "誘拐犯は [S] 返した [V] 子供を [O] 多額の身代金と引き換えに [M]。",
                natural: "誘拐犯は多額の身代金と引き換えに子供を返した。",
                intermediate: "誘拐犯たちは多額の身代金と引き換えに子供を両親に返した後、その金を持って逃げようとしました。しかし、警察はすぐに彼らを捕まえ、夫婦にお金を返しました。"
            },
            rationale: "【文脈】kidnappers（誘拐犯）、exchange for money（金との交換） → ransom（身代金）。"
        },
        {
            id: 18,
            text: "Gaspar applied to go to a ( ) university. Unfortunately, his grades were not good enough, so he had to go to a lesser-known one.",
            choices: ["prestigious", "spontaneous", "cordial", "petty"],
            choiceMeanings: ["名門の、一流の", "自発的な", "心からの", "些細な"],
            correctAnswer: 1,
            structure: "Gaspar [S] applied to go [V] to a prestigious university [M].",
            explanation: "prestigious: 名声のある、一流の",
            translation: {
                literal: "ガスパールは [S] 行くために出願した [V] 名門大学へ [M]。",
                natural: "ガスパールは名門大学に出願した。",
                intermediate: "ガスパールは名門大学への進学を志願しました。残念ながら、彼の成績は十分ではなく、知名度の低い大学に行かなければなりませんでした。"
            },
            rationale: "【文脈】opposite of lesser-known（知名度が低い） → prestigious（名門の）。"
        },
        {
            id: 19,
            text: "The spies ( ) themselves as army officers in an attempt to enter the military base without being noticed.",
            choices: ["chronicled", "disguised", "rendered", "revitalized"],
            choiceMeanings: ["年代記に載せた", "変装させた", "（～の状態に）した", "活性化した"],
            correctAnswer: 2,
            structure: "The spies [S] disguised [V] themselves [O] as army officers [C].",
            explanation: "disguise: 変装させる",
            translation: {
                literal: "スパイたちは [S] 変装させた [V] 自分自身を [O] 軍の将校として [C]。",
                natural: "スパイたちは軍の将校に変装した。",
                intermediate: "スパイたちは気づかれずに軍事基地に侵入しようとして、軍の将校に変装しました。"
            },
            rationale: "【文脈】enter without being noticed（気づかれずに入る） → disguised（変装した）。"
        },
        {
            id: 20,
            text: "Timothy is a very ( ) employee. He is reliable and eager to help, and he always shows loyalty to his company and coworkers.",
            choices: ["grotesque", "defiant", "devoted", "feeble"],
            choiceMeanings: ["グロテスクな", "反抗的な", "献身的な", "弱々しい"],
            correctAnswer: 3,
            structure: "Timothy [S] is [V] a very devoted employee [C].",
            explanation: "devoted: 献身的な、忠実な",
            translation: {
                literal: "ティモシーは [S] である [V] とても献身的な従業員 [C]。",
                natural: "ティモシーはとても献身的な従業員だ。",
                intermediate: "ティモシーは非常に献身的な従業員です。彼は信頼でき、熱心に手助けし、常に会社や同僚に忠誠心を示しています。"
            },
            rationale: "【文脈】reliable, eager to help, shows loyalty（信頼できる、熱心、忠誠心） → devoted（献身的な）。"
        },
        {
            id: 21,
            text: "To help Paul lose weight, his doctor recommended that he ( ) his diet. Specifically, she suggested that he eat fewer fatty foods and more fiber.",
            choices: ["modify", "pluck", "exclaim", "distill"],
            choiceMeanings: ["修正する、変更する", "むしる", "叫ぶ", "蒸留する"],
            correctAnswer: 1,
            structure: "he [S] modify [V] his diet [O].",
            explanation: "modify: 修正する、変更する",
            translation: {
                literal: "彼の医師は [S] 推奨した [V] 彼が修正することを [V'] 食事を [O']。",
                natural: "医師は彼に食事を改善するように勧めた。",
                intermediate: "ポールが体重を減らすのを助けるために、医師は彼に食事を改善するように勧めました。具体的には、脂肪分の多い食品を減らし、繊維質を多く摂るように提案しました。"
            },
            rationale: "【文脈】eat fewer fatty foods...（食事内容を変える） → modify（修正する）。"
        },
        {
            id: 22,
            text: "A: I've been so busy at work, and now I have to ( ) training our newest employee.<br>B: That's too much. You should ask your boss if someone else can do it instead.",
            choices: ["turn over", "contend with", "prop up", "count off"],
            choiceMeanings: ["ひっくり返す", "～に対処する、取り組む", "支える", "数え上げる"],
            correctAnswer: 2,
            structure: "now I [S] have to contend with [V] training our newest employee [O].",
            explanation: "contend with: （困難・問題などに）対処する、取り組む",
            translation: {
                literal: "今私は [S] 対処しなければならない [V] 新入社員の教育に [O]。",
                natural: "今、私は新入社員の教育に取り組まなければならない。",
                intermediate: "A: 仕事がとても忙しいのに、今度は新入社員の教育もしなければならないんだ。\nB: それは大変すぎるわ。上司に代わりに誰か他の人ができないか聞いてみるべきよ。"
            },
            rationale: "【文脈】busy work + new task（大変なこと） → contend with（対処する）。"
        },
        {
            id: 23,
            text: "The young boy tried to blame his dog for the broken vase. However, his mother did not ( ) the lie and sent him to his room.",
            choices: ["fall for", "hang on", "see out", "flag down"],
            choiceMeanings: ["だまされる", "しがみつく、待つ", "見届ける", "（合図して）止める"],
            correctAnswer: 1,
            structure: "his mother [S] did not fall for [V] the lie [O].",
            explanation: "fall for: （嘘・策略などに）だまされる、引っかかる",
            translation: {
                literal: "母親は [S] 引っ掛からなかった [V] その嘘に [O]。",
                natural: "母親はその嘘にだまされなかった。",
                intermediate: "少年は割れた花瓶を犬のせいにしようとしました。しかし、母親はその嘘にだまされず、彼を自分の部屋に行かせました。"
            },
            rationale: "【文脈】blame dog (lie) -> mother sent him to room (punished) -> didn't believe -> fall for（だまされる）。"
        },
        {
            id: 24,
            text: "In his speech, the CEO ( ) his plan for the company's development over the next five years. He hoped this would help guide everyone's work as the company grew.",
            choices: ["mapped out", "leaped in", "racked up", "spaced out"],
            choiceMeanings: ["詳細に計画する", "飛び込む", "獲得する", "ぼんやりする"],
            correctAnswer: 1,
            structure: "the CEO [S] mapped out [V] his plan [O] for the company's development [M].",
            explanation: "map out: ～を詳細に計画する",
            translation: {
                literal: "CEOは [S] 詳細に計画した [V] 彼の計画を [O] 会社の発展のための [M]。",
                natural: "CEOは会社の発展のための計画を詳細に説明した。",
                intermediate: "スピーチの中で、CEOは今後5年間の会社の発展に向けた計画を詳細に説明しました。彼は、会社が成長するにつれて、これが皆の仕事の指針になることを望んでいました。"
            },
            rationale: "【文脈】plan for development（発展のための計画） → mapped out（詳細に計画した）。"
        },
        {
            id: 25,
            text: "Last year, Harold spent all his money buying shares in various companies. He was ( ) the stock market performing well over the next few years.",
            choices: ["casting away", "putting down", "stepping up", "betting on"],
            choiceMeanings: ["捨てる", "置く、書き留める", "強化する、進み出る", "賭ける、当てにする"],
            correctAnswer: 4,
            structure: "He [S] was betting on [V] the stock market performing well [O].",
            explanation: "bet on: ～に賭ける、～を当てにする",
            translation: {
                literal: "彼は [S] 賭けていた [V] 株式市場が好調であることに [O]。",
                natural: "彼は株式市場が好調に推移することを当てにしていた。",
                intermediate: "昨年、ハロルドは様々な会社の株を買うのに全財産を使いました。彼は今後数年間、株式市場が好調であることを当てにしていました。"
            },
            rationale: "【文脈】spent all money buying shares（株に全財産を使った） → betting on（賭けている、当てにしている）。"
        }
    ]
};
