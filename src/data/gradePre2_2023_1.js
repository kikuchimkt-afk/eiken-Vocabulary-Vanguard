// Grade Pre-2 (準2級) - 2023年度 第1回検定
export const gradePre2_2023_1Data = {
    questions: [
        {
            id: 1,
            text: "The teacher ( ) his notes from the blackboard before Ruth was able to finish copying them into her notebook. She had to ask another student for help.",
            choices: ["erased", "excused", "escaped", "extended"],
            choiceMeanings: ["消した", "許した", "逃げた", "延長した"],
            correctAnswer: 1,
            structure: "The teacher [S] erased [V] his notes [O] from the blackboard [M].",
            explanation: "erase: 消す。黒板からノートを書き写す前に消されてしまった。",
            translation: {
                literal: "先生は [S] 消した [V] ノート（メモ）を [O] 黒板から [M]。",
                natural: "先生はルースがノートに書き写す前に黒板のメモを消してしまった。",
                intermediate: "先生はルースがノートに書き写し終わる前に黒板からメモを消してしまった。彼女は他の生徒に助けを求めなければならなかった。"
            },
            rationale: "【動詞】黒板の文字を「消す」のは erase。"
        },
        {
            id: 2,
            text: "A: Why did you cancel the picnic? I was looking forward to it.<br>B: So was I, but it's going to rain. We have no ( ) over the weather.",
            choices: ["issue", "grade", "fever", "control"],
            choiceMeanings: ["問題", "成績", "熱", "コントロール"],
            correctAnswer: 4,
            structure: "We [S] have [V] no control [O] over the weather [M].",
            explanation: "control: 支配、コントロール。天気をコントロールできない。",
            translation: {
                literal: "私たちは [S] 持っていない [V] コントロールを [O] 天気に対して [M]。",
                natural: "私たちは天気をコントロールできない。",
                intermediate: "A: なぜピクニックをキャンセルしたの？楽しみにしてたのに。\nB: 私もよ。でも雨が降るの。天気はコントロールできないから。"
            },
            rationale: "【名詞】have control over で「～をコントロールする」。"
        },
        {
            id: 3,
            text: "A: It's really cold this winter, isn't it?<br>B: I know! I have four ( ) on my bed, and I am still cold at night.",
            choices: ["locks", "blankets", "moments", "husbands"],
            choiceMeanings: ["錠前", "毛布", "瞬間", "夫"],
            correctAnswer: 2,
            structure: "I [S] have [V] four blankets [O] on my bed [M].",
            explanation: "blanket: 毛布。寒いからベッドに掛けるもの。",
            translation: {
                literal: "私は [S] 持っている [V] 4枚の毛布を [O] ベッドの上に [M]。",
                natural: "私はベッドに4枚の毛布をかけている。",
                intermediate: "A: 今年の冬は本当に寒いね。\nB: そうね！ベッドに毛布を4枚かけてるけど、夜はまだ寒いの。"
            },
            rationale: "【名詞】寒くてベッドに掛けるものは blankets。"
        },
        {
            id: 4,
            text: "The new TV show <i>Amazing Plants</i> is very ( ). Children who watch it can learn about lots of strange plants.",
            choices: ["modern", "lonely", "violent", "educational"],
            choiceMeanings: ["現代的な", "孤独な", "暴力的な", "教育的な"],
            correctAnswer: 4,
            structure: "The new TV show [S] is [V] very educational [C].",
            explanation: "educational: 教育的な。子供が植物について学べる番組。",
            translation: {
                literal: "新しいテレビ番組は [S] です [V] とても教育的な [C]。",
                natural: "新しいテレビ番組「Amazing Plants」はとても教育的だ。",
                intermediate: "新しいテレビ番組「Amazing Plants」はとても教育的だ。見る子供たちはたくさんの不思議な植物について学ぶことができる。"
            },
            rationale: "【形容詞】learn about（学ぶ）という文脈から educational。"
        },
        {
            id: 5,
            text: "Mr. Suzuki's vacation in Hawaii was like a wonderful dream. However, he knew that he would have to go back to the ( ) of his job in Tokyo.",
            choices: ["origin", "suggestion", "reality", "coast"],
            choiceMeanings: ["起源", "提案", "現実", "海岸"],
            correctAnswer: 3,
            structure: "he [S] would have to go back to [V] the reality of his job [O].",
            explanation: "reality: 現実。ハワイの夢のような休暇と東京の仕事の「現実」の対比。",
            translation: {
                literal: "彼は [S] 戻らなければならない [V] 彼の仕事の現実に [O]。",
                natural: "彼は東京での仕事の現実に戻らなければならなかった。",
                intermediate: "鈴木さんのハワイでの休暇は素晴らしい夢のようだった。しかし、東京での仕事の現実に戻らなければならないことを知っていた。"
            },
            rationale: "【名詞】dream（夢）と対比される reality（現実）。"
        },
        {
            id: 6,
            text: "Wesley offered to buy Sarah's guitar from her, but she ( ). She did not want to sell it because it was a gift from her father.",
            choices: ["employed", "existed", "retired", "refused"],
            choiceMeanings: ["雇った", "存在した", "引退した", "断った"],
            correctAnswer: 4,
            structure: "she [S] refused [V].",
            explanation: "refuse: 断る。父からの贈り物だから売りたくなかった。",
            translation: {
                literal: "彼女は [S] 断った [V]。",
                natural: "彼女は断った。",
                intermediate: "ウェスリーはサラからギターを買うと申し出たが、彼女は断った。父からの贈り物だったので売りたくなかった。"
            },
            rationale: "【動詞】売りたくない→申し出を refuse（断る）。"
        },
        {
            id: 7,
            text: "Andrew looks forward to visiting his grandparents on the weekend because he always has interesting ( ) with them. They always talk about history.",
            choices: ["consumers", "approaches", "muscles", "discussions"],
            choiceMeanings: ["消費者", "アプローチ", "筋肉", "議論"],
            correctAnswer: 4,
            structure: "he [S] always has [V] interesting discussions [O] with them [M].",
            explanation: "discussion: 議論、話し合い。歴史について話す。",
            translation: {
                literal: "彼は [S] いつも持っている [V] 興味深い議論を [O] 彼らと [M]。",
                natural: "彼はいつも祖父母と興味深い話し合いをする。",
                intermediate: "アンドリューは週末に祖父母を訪ねるのを楽しみにしている。いつも彼らと興味深い話し合いができるからだ。いつも歴史について話している。"
            },
            rationale: "【名詞】talk about（話す）の文脈から discussions。"
        },
        {
            id: 8,
            text: "Simon's homework is to write about someone who he ( ). Simon has decided to write about his favorite baseball player because he is Simon's hero.",
            choices: ["respects", "locates", "assists", "combines"],
            choiceMeanings: ["尊敬する", "位置を見つける", "手伝う", "組み合わせる"],
            correctAnswer: 1,
            structure: "someone who he [S] respects [V].",
            explanation: "respect: 尊敬する。ヒーローについて書く。",
            translation: {
                literal: "誰か [O] 彼が [S] 尊敬する [V]。",
                natural: "彼が尊敬する誰かについて書く。",
                intermediate: "サイモンの宿題は彼が尊敬する人について書くこと。サイモンはヒーローであるお気に入りの野球選手について書くことにした。"
            },
            rationale: "【動詞】hero（ヒーロー）について書く → respects（尊敬する）人。"
        },
        {
            id: 9,
            text: "When Dennis arrived at his aunt's house, she ( ) him at the door with a hug.",
            choices: ["greeted", "promised", "required", "interviewed"],
            choiceMeanings: ["出迎えた", "約束した", "要求した", "面接した"],
            correctAnswer: 1,
            structure: "she [S] greeted [V] him [O] at the door [M] with a hug [M].",
            explanation: "greet: 出迎える、挨拶する。玄関でハグで迎えた。",
            translation: {
                literal: "彼女は [S] 出迎えた [V] 彼を [O] 玄関で [M] ハグで [M]。",
                natural: "彼女は玄関でハグで彼を出迎えた。",
                intermediate: "デニスが叔母の家に着くと、彼女は玄関でハグで彼を出迎えた。"
            },
            rationale: "【動詞】玄関でハグで「出迎える」のは greet。"
        },
        {
            id: 10,
            text: "A: I think you're sitting in the seat that I reserved.<br>B: Oh! I'm ( ) sorry. I'll find somewhere else to sit.",
            choices: ["equally", "terribly", "calmly", "safely"],
            choiceMeanings: ["等しく", "ひどく", "穏やかに", "安全に"],
            correctAnswer: 2,
            structure: "I [S] 'm [V] terribly sorry [C].",
            explanation: "terribly: ひどく、とても。謝罪を強調する副詞。",
            translation: {
                literal: "私は [S] です [V] ひどく申し訳ない [C]。",
                natural: "本当に申し訳ありません。",
                intermediate: "A: 私が予約した席に座っていると思います。\nB: ああ！本当に申し訳ありません。他の席を探します。"
            },
            rationale: "【副詞】sorry を強調する terribly sorry。"
        },
        {
            id: 11,
            text: "Casey and his sister ( ) washing the dishes. He washes them after breakfast and she washes them after dinner.",
            choices: ["take turns", "give applause", "pass around", "have faith"],
            choiceMeanings: ["交代でする", "拍手する", "回す", "信頼している"],
            correctAnswer: 1,
            structure: "Casey and his sister [S] take turns [V] washing the dishes [O].",
            explanation: "take turns: 交代でする。朝と夜で交代して皿洗いをしている。",
            translation: {
                literal: "ケイシーと姉は [S] 交代でする [V] 皿洗いを [O]。",
                natural: "ケイシーと姉は交代で皿洗いをしている。",
                intermediate: "ケイシーと姉は交代で皿洗いをしている。彼は朝食後、彼女は夕食後に洗う。"
            },
            rationale: "【熟語】交代で役割を分担 → take turns。"
        },
        {
            id: 12,
            text: "Alan went to Hawaii last week, but he could not enjoy any of the beaches because he was there ( ).",
            choices: ["at least", "by heart", "for good", "on business"],
            choiceMeanings: ["少なくとも", "暗記で", "永久に", "仕事で"],
            correctAnswer: 4,
            structure: "he [S] was [V] there [M] on business [M].",
            explanation: "on business: 仕事で。ビーチを楽しめなかった理由。",
            translation: {
                literal: "彼は [S] いた [V] そこに [M] 仕事で [M]。",
                natural: "彼は仕事でそこにいた。",
                intermediate: "アランは先週ハワイに行ったが、仕事で行ったのでビーチを楽しめなかった。"
            },
            rationale: "【熟語】ビーチを楽しめなかった理由 → on business（仕事で）。"
        },
        {
            id: 13,
            text: "After work on Friday night, Jason did not want to cook at home. He ( ) having dinner with his friends, so he invited three of them to a restaurant.",
            choices: ["looked like", "felt like", "passed by", "ran by"],
            choiceMeanings: ["～のように見えた", "～したい気分だった", "通り過ぎた", "走り過ぎた"],
            correctAnswer: 2,
            structure: "He [S] felt like [V] having dinner with his friends [O].",
            explanation: "feel like: ～したい気分。友達と夕食を食べたい気分だった。",
            translation: {
                literal: "彼は [S] したい気分だった [V] 友達と夕食を食べることを [O]。",
                natural: "彼は友達と夕食を食べたい気分だった。",
                intermediate: "金曜の夜、仕事の後、ジェイソンは家で料理したくなかった。友達と夕食を食べたい気分だったので、3人をレストランに誘った。"
            },
            rationale: "【熟語】feel like ～ing で「～したい気分だ」。"
        },
        {
            id: 14,
            text: "A: Gina, could I go to one of your photography club meetings and see what it's like?<br>B: Sure. Our meetings ( ) on the first Saturday of each month.",
            choices: ["take place", "grow up", "come true", "put off"],
            choiceMeanings: ["行われる", "成長する", "実現する", "延期する"],
            correctAnswer: 1,
            structure: "Our meetings [S] take place [V] on the first Saturday [M].",
            explanation: "take place: 行われる、開催される。ミーティングの日程。",
            translation: {
                literal: "私たちのミーティングは [S] 行われる [V] 毎月第1土曜日に [M]。",
                natural: "私たちのミーティングは毎月第1土曜日に行われます。",
                intermediate: "A: ジーナ、写真部のミーティングに参加してどんな感じか見てもいい？\nB: もちろん。ミーティングは毎月第1土曜日に行われるよ。"
            },
            rationale: "【熟語】ミーティングが「行われる」のは take place。"
        },
        {
            id: 15,
            text: "After Suzanne graduated from college, she did not plan to ( ) her parents. She got a job so she could live by herself.",
            choices: ["lay out", "rely on", "turn in", "get over"],
            choiceMeanings: ["並べる", "頼る", "提出する", "乗り越える"],
            correctAnswer: 2,
            structure: "she [S] did not plan to rely on [V] her parents [O].",
            explanation: "rely on: 頼る。自立して暮らすために仕事を得た。",
            translation: {
                literal: "彼女は [S] 計画しなかった [V] 両親に頼ることを [O]。",
                natural: "彼女は両親に頼るつもりはなかった。",
                intermediate: "スザンヌは大学を卒業した後、両親に頼るつもりはなかった。一人で暮らせるように仕事を得た。"
            },
            rationale: "【熟語】親に「頼る」のは rely on。"
        },
        {
            id: 16,
            text: "A: What are you going to wear at the Christmas party?<br>B: I'm going to ( ) as a snowman. My mom is helping me to make my costume.",
            choices: ["turn off", "hold back", "dress up", "break out"],
            choiceMeanings: ["消す", "控える", "仮装する", "勃発する"],
            correctAnswer: 3,
            structure: "I [S] 'm going to dress up [V] as a snowman [M].",
            explanation: "dress up: 仮装する、着飾る。雪だるまのコスチューム。",
            translation: {
                literal: "私は [S] 仮装するつもり [V] 雪だるまとして [M]。",
                natural: "私は雪だるまに仮装するつもり。",
                intermediate: "A: クリスマスパーティーで何を着るの？\nB: 雪だるまに仮装するつもり。お母さんが衣装を作るのを手伝ってくれてるの。"
            },
            rationale: "【熟語】コスチュームを着る → dress up as（～に仮装する）。"
        },
        {
            id: 17,
            text: "Dan gave a presentation in his science class today. He ( ) his main ideas with data from research.",
            choices: ["pulled away", "called out", "wished for", "backed up"],
            choiceMeanings: ["引き離した", "叫んだ", "願った", "裏付けた"],
            correctAnswer: 4,
            structure: "He [S] backed up [V] his main ideas [O] with data [M].",
            explanation: "back up: 裏付ける、支持する。データで主張を裏付けた。",
            translation: {
                literal: "彼は [S] 裏付けた [V] 彼の主なアイデアを [O] データで [M]。",
                natural: "彼はデータで自分の主なアイデアを裏付けた。",
                intermediate: "ダンは今日、理科の授業でプレゼンテーションをした。研究データで自分の主なアイデアを裏付けた。"
            },
            rationale: "【熟語】データで主張を「裏付ける」のは back up。"
        },
        {
            id: 18,
            text: "Mike cried when he broke the toy truck that his mother ( ) him for his birthday.",
            choices: ["has given", "was giving", "was given", "had given"],
            choiceMeanings: ["あげた（現在完了）", "あげていた", "あげられた", "あげていた（過去完了）"],
            correctAnswer: 4,
            structure: "the toy truck that his mother [S] had given [V] him [IO] for his birthday [M].",
            explanation: "had given: 過去完了形。壊した時点より前に母がプレゼントしていた。",
            translation: {
                literal: "おもちゃのトラック [O] 彼の母が [S] あげていた [V] 彼の誕生日に [M]。",
                natural: "母が誕生日にくれたおもちゃのトラック。",
                intermediate: "マイクは母が誕生日にくれたおもちゃのトラックを壊したとき泣いた。"
            },
            rationale: "【文法】壊す(過去)より前にもらった(大過去)ので had given。"
        },
        {
            id: 19,
            text: "Bobby wanted to play catch, so he asked his parents, his brother, and his sister if they had time to play with him. However, ( ) did because they were all too busy.",
            choices: ["nobody", "everybody", "anybody", "somebody"],
            choiceMeanings: ["誰も～ない", "みんな", "誰か", "誰か"],
            correctAnswer: 1,
            structure: "nobody [S] did [V].",
            explanation: "nobody: 誰も～ない。みんな忙しくて遊べなかった。",
            translation: {
                literal: "誰も [S] しなかった [V]。",
                natural: "誰も遊べなかった。",
                intermediate: "ボビーはキャッチボールをしたかったので、両親、兄、姉に一緒に遊ぶ時間があるか聞いた。しかし、みんな忙しすぎて誰も遊べなかった。"
            },
            rationale: "【代名詞】all too busy（みんな忙しい）→ nobody did（誰もしなかった）。"
        },
        {
            id: 20,
            text: "On Saturdays, Beth volunteers at her local community center. She enjoys ( ) with events for the people in her area.",
            choices: ["to help", "helps", "helping", "helped"],
            choiceMeanings: ["手伝うこと（不定詞）", "手伝う（動詞）", "手伝うこと（動名詞）", "手伝った"],
            correctAnswer: 3,
            structure: "She [S] enjoys [V] helping [O] with events [M].",
            explanation: "helping: enjoy は動名詞を目的語に取る。",
            translation: {
                literal: "彼女は [S] 楽しんでいる [V] 手伝うことを [O] イベントで [M]。",
                natural: "彼女はイベントの手伝いを楽しんでいる。",
                intermediate: "土曜日、ベスは地元のコミュニティセンターでボランティアをしている。地域の人々のためのイベントを手伝うことを楽しんでいる。"
            },
            rationale: "【文法】enjoy の後は動名詞（～ing）が続く。"
        }
    ]
};
