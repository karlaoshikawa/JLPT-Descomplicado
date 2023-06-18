const n5GrammarList = [
  {
    topico: "いつも",
    romaji: "itsumo",
    traducao: "sempre; geralmente; habitualmente",
    explicacao:
      "Nesse exemplo, a expressão 'いつも' é usada para agradecer a alguém, significando 'obrigado sempre' ou 'obrigado habitualmente'. É uma maneira educada de expressar gratidão constante.",
    exemplo: {
      frase: "いつもありがとう。",
      furigana: "いつもありがとう。",
      romaji: "itsumo arigatou.",
      traducao: "Obrigado sempre.",
    },
  },
  {
    topico: "お / ご",
    romaji: "o / go",
    traducao: "marcador polido; partícula de prefixo honorífico",
    explicacao:
      "Neste exemplo, o prefixo honorífico 'お' é usado antes da palavra 'はよう' para expressar cortesia ao cumprimentar alguém. É uma forma educada de dizer 'bom dia'. O mesmo princípio se aplica ao prefixo honorífico 'ご' utilizado em palavras como 'ご飯' (gohan) para 'refeição'.",
    exemplo: {
      frase: "おはようございます。",
      furigana: "おはようございます。",
      romaji: "ohayou gozaimasu.",
      traducao: "Bom dia.",
    },
  },
  {
    topico: "か",
    romaji: "ka",
    traducao: "partícula de questão",
    explicacao:
      "A partícula 'か' é usada para formular uma pergunta em japonês. É adicionada ao final da frase para indicar que é uma pergunta.",
    exemplo: {
      frase: "元気ですか？",
      furigana: "げんきですか？",
      romaji: "genki desu ka?",
      traducao: "Como você está?",
    },
  },
  {
    topico: "が",
    romaji: "ga",
    traducao: "marcador de assunto; contudo; mas ~",
    explicacao:
      "A partícula 'が' é usada como marcador de sujeito em uma frase em japonês. Também pode ser usado para expressar contraste ou adversidade.",
    exemplo: {
      frase: "私は学生ですが、日本語が話せます。",
      furigana: "わたしはがくせいですが、にほんごがはなせます。",
      romaji: "Watashi wa gakusei desu ga, nihongo ga hanasemasu.",
      traducao: "Eu sou estudante, mas falo japonês.",
    },
  },
  {
    topico: "か～か",
    romaji: "ka~ka",
    traducao: "ou",
    explicacao:
      "Neste exemplo, a expressão 'か～か' é usada para apresentar duas opções e perguntar qual delas é melhor. Significa 'ou' e é usado para indicar uma escolha entre duas possibilidades.",
    exemplo: {
      frase: "本を買うか、貸してもらうか、どちらがいいですか？",
      furigana: "ほんをかうか、かしてもらうか、どちらがいいですか？",
      romaji: "Hon o kau ka, kashite morau ka, dochira ga ii desu ka?",
      traducao: "Comprar um livro ou pegar emprestado, qual é melhor?",
    },
  },
  {
    topico: "があります",
    romaji: "ga arimasu",
    traducao: "há sim; é (coisas não vivas)",
    explicacao:
      "Nesse exemplo, a expressão 'があります' é usada para indicar a existência de algo. É usada para se referir a coisas não vivas.",
    exemplo: {
      frase: "机の上に本があります。",
      furigana: "つくえのうえにほんがあります。",
      romaji: "Tsukue no ue ni hon ga arimasu.",
      traducao: "Há um livro em cima da mesa.",
    },
  },
  {
    topico: "がいます",
    romaji: "ga imasu",
    traducao: "há sim; ser estar; é (coisas vivas)",
    explicacao:
      "Nesse exemplo, a expressão 'がいます' é usada para indicar a existência de algo. É usada para se referir a seres vivos.",
    exemplo: {
      frase: "家に猫がいます。",
      furigana: "いえにねこがいます。",
      romaji: "Ie ni neko ga imasu.",
      traducao: "Há um gato em casa.",
    },
  },
  {
    topico: "がほしい",
    romaji: "ga hoshii",
    traducao: "querer algo",
    explicacao:
      "Nesse exemplo, a expressão 'がほしい' é usada para expressar desejo ou vontade de possuir algo.",
    exemplo: {
      frase: "新しい車がほしいです。",
      furigana: "あたらしいくるまがほしいです。",
      romaji: "Atarashii kuruma ga hoshii desu.",
      traducao: "Eu quero um carro novo.",
    },
  },
  {
    topico: "から",
    romaji: "kara",
    traducao: "porque; desde a; de",
    explicacao:
      "A partícula 'から' é usada para indicar a razão ou a causa de algo. Também pode ser usada para indicar um ponto de partida ou origem.",
    exemplo: {
      frase: "雨が降っているから傘を持って行きます。",
      furigana: "あめがふっているからかさをもっていきます。",
      romaji: "Ame ga futte iru kara kasa o motte ikimasu.",
      traducao: "Vou levar um guarda-chuva porque está chovendo.",
    },
  },
  {
    topico: "けど",
    romaji: "kedo",
    traducao: "mas; contudo; embora ~",
    explicacao:
      "A partícula 'けど' é usada para expressar uma ideia de contraste ou concessão. É semelhante a 'mas' em português.",
    exemplo: {
      frase: "忙しいけど、頑張ります。",
      furigana: "いそがしいけど、がんばります。",
      romaji: "Isogashii kedo, ganbarimasu.",
      traducao: "Estou ocupado, mas vou me esforçar.",
    },
  },
  {
    topico: "けれども",
    romaji: "keredo mo",
    traducao: "mas; contudo; embora ~",
    explicacao:
      "A partícula 'けれども' é usada para expressar uma ideia de contraste ou concessão. É semelhante a 'mas' em português.",
    exemplo: {
      frase: "高いけれども、とても美味しいです。",
      furigana: "たかいけれども、とてもおいしいです。",
      romaji: "Takai keredo mo, totemo oishii desu.",
      traducao: "É caro, mas é muito saboroso.",
    },
  },
  {
    topico: "しかし",
    romaji: "shikashi",
    traducao: "mas; entretanto ~",
    explicacao:
      "A palavra 'しかし' é usada para expressar um contraste ou uma mudança inesperada na situação.",
    exemplo: {
      frase: "天気は悪いです。しかし、出かけます。",
      furigana: "てんきはわるいです。しかし、でかけます。",
      romaji: "Tenki wa warui desu. Shikashi, dekakemasu.",
      traducao: "O tempo está ruim. No entanto, vou sair.",
    },
  },
  {
    topico: "じゃない・ではない",
    romaji: "janai / dewa nai",
    traducao: "não ser (não sou; não é; não sou)",
    explicacao:
      "As expressões 'じゃない' ou 'ではない' são usadas para negar uma afirmação em japonês. Ambas significam 'não ser' ou 'não ser'",
    exemplo: {
      frase: "彼は学生じゃないです。",
      furigana: "かれはがくせいじゃないです。",
      romaji: "Kare wa gakusei janai desu.",
      traducao: "Ele não é estudante.",
    },
  },
  {
    topico: "すぎる",
    romaji: "sugiru",
    traducao: "demais",
    explicacao:
      "A palavra 'すぎる' é usada para indicar que algo é excessivo ou demais. É anexada ao final de um verbo ou adjetivo para expressar a ideia de 'demais'.",
    exemplo: {
      frase: "食べすぎると太ります。",
      furigana: "たべすぎるとふとります。",
      romaji: "Tabesugiru to futorimasu.",
      traducao: "Se você comer demais, vai engordar.",
    },
  },
  {
    topico: "と",
    romaji: "to",
    traducao: "e; com",
    explicacao:
      "A partícula 'と' é usada para conectar substantivos ou frases e indicar uma lista de itens ou ações simultâneas.",
    exemplo: {
      frase: "りんごとオレンジを買いました。",
      furigana: "りんごとオレンジをかいました。",
      romaji: "Ringo to orenji o kaimashita.",
      traducao: "Comprei maçãs e laranjas.",
    },
  },
  {
    topico: "どうして",
    romaji: "doushite",
    traducao: "porque; por que razão; como",
    explicacao:
      "A expressão 'どうして' é usada para perguntar a razão ou o motivo de algo. É semelhante a 'por que' em português.",
    exemplo: {
      frase: "どうして遅れたのですか？",
      furigana: "どうしておくれたのですか？",
      romaji: "Doushite okureta no desu ka?",
      traducao: "Por que você se atrasou?",
    },
  },
  {
    topico: "どうやって",
    romaji: "douyatte",
    traducao: "como; de que maneira; pelo que significa",
    explicacao:
      "A expressão 'どうやって' é usada para perguntar sobre o método ou a maneira de fazer algo.",
    exemplo: {
      frase: "どうやってこの問題を解決しますか？",
      furigana: "どうやってこのもんだいをかいけつしますか？",
      romaji: "Douyatte kono mondai o kaiketsu shimasu ka?",
      traducao: "Como você vai resolver esse problema?",
    },
  },
  {
    topico: "とき",
    romaji: "toki",
    traducao: "quando; nesse momento",
    explicacao:
      "A palavra 'とき' é usada para indicar um momento específico ou uma ocasião em que algo acontece.",
    exemplo: {
      frase: "雨が降るとき、傘を持って行きます。",
      furigana: "あめがふるとき、かさをもっていきます。",
      romaji: "Ame ga furu toki, kasa o motte ikimasu.",
      traducao: "Quando está chovendo, eu levo um guarda-chuva.",
    },
  },
  {
    topico: "とても",
    romaji: "totemo",
    traducao: "muito; muito; extremamente",
    explicacao:
      "A palavra 'とても' é usada para enfatizar a intensidade de um adjetivo ou advérbio.",
    exemplo: {
      frase: "この映画はとても面白いです。",
      furigana: "このえいがはとてもおもしろいです。",
      romaji: "Kono eiga wa totemo omoshiroi desu.",
      traducao: "Este filme é muito interessante.",
    },
  },
  {
    topico: "どんな",
    romaji: "donna",
    traducao: "que tipo de; que tipo de",
    explicacao:
      "A palavra 'どんな' é usada para fazer perguntas sobre a natureza ou características de algo.",
    exemplo: {
      frase: "どんな本が好きですか？",
      furigana: "どんなほんがすきですか？",
      romaji: "Donna hon ga suki desu ka?",
      traducao: "Que tipo de livros você gosta?",
    },
  },
  {
    topico: "ないで",
    romaji: "naide",
    traducao: "sem fazer ~; para fazer [b] sem fazer [a]",
    explicacao:
      "A expressão 'ないで' é usada para indicar ação subsequente sem realizar a ação anterior.",
    exemplo: {
      frase: "食べないで帰ってください。",
      furigana: "たべないでかえってください。",
      romaji: "Tabenaide kaette kudasai.",
      traducao: "Por favor, vá embora sem comer.",
    },
  },
  {
    topico: "ないでください",
    romaji: "naide kudasai",
    traducao: "por favor não faça",
    explicacao:
      "A expressão 'ないでください' é usada para fazer um pedido ou instrução para não fazer algo.",
    exemplo: {
      frase: "静かにしてください。",
      furigana: "しずかにしてください。",
      romaji: "Shizuka ni shite kudasai.",
      traducao: "Por favor, fique quieto.",
    },
  },
  {
    topico: "ないといけない",
    romaji: "naito ikenai",
    traducao: "deve fazer; tem a obrigação de fazer",
    explicacao:
      "A expressão 'ないといけない' é usada para indicar que algo deve ser feito ou que há uma obrigação de fazer algo.",
    exemplo: {
      frase: "宿題をしないといけない。",
      furigana: "しゅくだいをしないといけない。",
      romaji: "Shukudai o shinai to ikenai.",
      traducao: "Devo fazer a lição de casa.",
    },
  },
  {
    topico: "なくちゃ",
    romaji: "nakucha",
    traducao: "deve fazer; preciso; tenho que fazer",
    explicacao:
      "A expressão 'なくちゃ' é uma forma informal de 'なくては' e é usada para indicar a necessidade ou a obrigação de fazer algo.",
    exemplo: {
      frase: "早く出なくちゃ。",
      furigana: "はやくでなくちゃ。",
      romaji: "Hayaku denakucha.",
      traducao: "Preciso sair mais cedo.",
    },
  },
  {
    topico: "なくてはいけない",
    romaji: "nakute wa ikenai",
    traducao: "deve fazer; necessário fazer",
    explicacao:
      "A expressão 'なくてはいけない' é usada para indicar que algo deve ser feito ou é necessário fazer algo.",
    exemplo: {
      frase: "毎日勉強しなくてはいけない。",
      furigana: "まいにちべんきょうしなくてはいけない。",
      romaji: "Mainichi benkyou shinakute wa ikenai.",
      traducao: "Tenho que estudar todos os dias.",
    },
  },
  {
    topico: "なくてもいい",
    romaji: "naku temo ii",
    traducao: "não tem que",
    explicacao:
      "A expressão 'なくてもいい' é usada para indicar que algo não é necessário ou não precisa ser feito.",
    exemplo: {
      frase: "お金がなくてもいい。",
      furigana: "おかねがなくてもいい。",
      romaji: "Okane ga nakute mo ii.",
      traducao: "Não precisa ter dinheiro.",
    },
  },
  {
    topico: "なる",
    romaji: "naru",
    traducao: "tornar-se",
    explicacao:
      "O verbo 'なる' é usado para expressar a mudança de estado ou a transformação de algo.",
    exemplo: {
      frase: "夢が現実になる。",
      furigana: "ゆめがげんじつになる。",
      romaji: "Yume ga genjitsu ni naru.",
      traducao: "Os sonhos se tornam realidade.",
    },
  },
  {
    topico: "に",
    romaji: "ni",
    traducao: "partícula de destino; no; em; em; para",
    explicacao:
      "A partícula 'に' tem vários usos, incluindo indicar o destino de uma ação, o local onde algo está localizado e o tempo em que algo ocorre.",
    exemplo: {
      frase: "友達に手紙を送りました。",
      furigana: "ともだちにてがみをおくりました。",
      romaji: "Tomodachi ni tegami o okurimashita.",
      traducao: "Enviei uma carta para meu amigo.",
    },
  },
  {
    topico: "に/へ",
    romaji: "ni/e",
    traducao: "para (indica direção / destino)",
    explicacao:
      "As partículas 'に' e 'へ' são usadas para indicar direção ou destino, geralmente em termos de movimento físico.",
    exemplo: {
      frase: "駅に行く。",
      furigana: "えきにいく。",
      romaji: "Eki ni iku.",
      traducao: "Vou para a estação.",
    },
  },
  {
    topico: "にいく",
    romaji: "ni iku",
    traducao: "vai fazer",
    explicacao:
      "A expressão 'にいく' é usada para indicar que alguém está indo fazer algo em um determinado lugar.",
    exemplo: {
      frase: "買い物に行く。",
      furigana: "かいものにいく。",
      romaji: "Kaimono ni iku.",
      traducao: "Vou fazer compras.",
    },
  },
  {
    topico: "にする",
    romaji: "ni suru",
    traducao: "decidir sobre",
    explicacao:
      "A expressão 'にする' é usada para indicar que alguém decide ou escolhe algo.",
    exemplo: {
      frase: "明日の予定を決めましょう。",
      furigana: "あしたのよていをきめましょう。",
      romaji: "Ashita no yotei o kimemashou.",
      traducao: "Vamos decidir os planos para amanhã.",
    },
  },
  {
    topico: "によって",
    romaji: "ni yotte",
    traducao: "dependendo de; através de; por meio de",
    explicacao:
      "A expressão 'によって' é usada para indicar que algo depende de certas circunstâncias ou é feito através de um determinado meio.",
    exemplo: {
      frase: "天気によって計画が変わる。",
      furigana: "てんきによってけいかくがかわる。",
      romaji: "Tenki ni yotte keikaku ga kawaru.",
      traducao: "Os planos mudam dependendo do tempo.",
    },
  },
  {
    topico: "にすると",
    romaji: "ni suru to",
    traducao: "se você considerar; se você olhar para",
    explicacao:
      "A expressão 'にすると' é usada para indicar uma opinião pessoal ou perspectiva sobre algo.",
    exemplo: {
      frase: "田中さんにすると、それは問題ではありません。",
      furigana: "たなかさんにすると、それはもんだいではありません。",
      romaji: "Tanaka-san ni suru to, sore wa mondai dewa arimasen.",
      traducao: "Se você perguntar ao Sr. Tanaka, isso não é um problema.",
    },
  },
  {
    topico: "の",
    romaji: "no",
    traducao: "partícula possessiva; de; 's",
    explicacao:
      "A partícula 'の' é usada para indicar posse ou pertencimento. Também pode ser usada para substituir um substantivo.",
    exemplo: {
      frase: "私の本",
      furigana: "わたしのほん",
      romaji: "Watashi no hon",
      traducao: "Meu livro",
    },
  },
  {
    topico: "のが上手（のがじょうず）",
    romaji: "no ga jouzu",
    traducao: "ser bom em",
    explicacao:
      "A expressão 'のが上手' é usada para descrever alguém que é habilidoso ou bom em algo.",
    exemplo: {
      frase: "彼は料理が上手です。",
      furigana: "かれはりょうりがじょうずです。",
      romaji: "Kare wa ryouri ga jouzu desu.",
      traducao: "Ele é bom em cozinhar.",
    },
  },
  {
    topico: "のが下手（のがへた）",
    romaji: "no ga heta",
    traducao: "ser ruim em fazer algo",
    explicacao:
      "A expressão 'のが下手' é usada para descrever alguém que é ruim em fazer algo.",
    exemplo: {
      frase: "彼女は歌が下手です。",
      furigana: "かのじょはうたがへたです。",
      romaji: "Kanojo wa uta ga heta desu.",
      traducao: "Ela é ruim em cantar.",
    },
  },
  {
    topico: "のが好き（のがすき）",
    romaji: "no ga suki",
    traducao: "gostar de fazer algo",
    explicacao:
      "A expressão 'のが好き' é usada para descrever algo que alguém gosta de fazer.",
    exemplo: {
      frase: "私は旅行が好きです。",
      furigana: "わたしはりょこうがすきです。",
      romaji: "Watashi wa ryokou ga suki desu.",
      traducao: "Eu gosto de viajar.",
    },
  },
  {
    topico: "ので",
    romaji: "node",
    traducao: "por causa de; dado que; desde a",
    explicacao:
      "A partícula 'ので' é usada para indicar a razão ou causa de algo.",
    exemplo: {
      frase: "雨が降っているので、傘を持って行きます。",
      furigana: "あめがふっているので、かさをもっていきます。",
      romaji: "Ame ga futteiru node, kasa o motte ikimasu.",
      traducao: "Como está chovendo, vou levar um guarda-chuva.",
    },
  },
  {
    topico: "のです",
    romaji: "no desu",
    traducao: "para explicar algo; mostrar ênfase",
    explicacao:
      "A expressão 'のです' é usada para explicar ou fornecer uma explicação sobre algo.",
    exemplo: {
      frase: "遅れたのです、ごめんなさい。",
      furigana: "おくれたのです、ごめんなさい。",
      romaji: "Okureta no desu, gomen nasai.",
      traducao: "Eu estou atrasado, desculpe.",
    },
  },
  {
    topico: "の中で[a]が一番（のなかで[a]がいちばん）",
    romaji: "no naka de [a] ga ichiban",
    traducao: "fora deste grupo, [a] é o melhor",
    explicacao:
      "A expressão 'の中で[a]が一番' é usada para indicar que, entre um grupo de coisas, [a] é o melhor.",
    exemplo: {
      frase: "このレストランの中で、この料理が一番美味しいです。",
      furigana: "このレストランのなかで、このりょうりがいちばんおいしいです。",
      romaji: "Kono resutoran no naka de, kono ryouri ga ichiban oishii desu.",
      traducao:
        "Dentre todos os pratos deste restaurante, este é o mais delicioso.",
    },
  },
  {
    topico: "は",
    romaji: "wa - marcador de tópico",
    traducao: "marcador de tópico",
    explicacao:
      "A partícula 'は' é usada para marcar o tópico ou tema da frase.",
    exemplo: {
      frase: "私は日本人です。",
      furigana: "わたしはにほんじんです。",
      romaji: "Watashi wa nihonjin desu.",
      traducao: "Eu sou japonês.",
    },
  },
  {
    topico: "は〜より・・・です",
    romaji: "wa ~yori... desu",
    traducao: "[a] é mais ~ do que [b]",
    explicacao:
      "A estrutura 'は〜より・・・です' é usada para fazer comparações, indicando que [a] é mais ~ do que [b].",
    exemplo: {
      frase: "彼は私より背が高いです。",
      furigana: "かれはわたしよりせがたかいです。",
      romaji: "Kare wa watashi yori se ga takai desu.",
      traducao: "Ele é mais alto do que eu.",
    },
  },
  {
    topico: "はどうですか",
    romaji: "wa dou desu ka",
    traducao: "E quanto a...? Como é...?",
    explicacao:
      "A expressão 'はどうですか' é usada para fazer perguntas sobre a opinião ou estado de algo ou alguém.",
    exemplo: {
      frase: "このレストランはどうですか？",
      furigana: "このレストランはどうですか？",
      romaji: "Kono resutoran wa dou desu ka?",
      traducao: "E quanto a este restaurante? Como é?",
    },
  },
  {
    topico: "ほうがいい",
    romaji: "hou ga ii",
    traducao: "Seria melhor... Deveria...",
    explicacao:
      "A expressão 'ほうがいい' é usada para indicar que algo seria melhor ou que alguém deveria fazer algo.",
    exemplo: {
      frase: "明日は雨が降るので、傘を持ったほうがいいです。",
      furigana: "あしたはあめがふるので、かさをもったほうがいいです。",
      romaji: "Ashita wa ame ga furu node, kasa o motta hou ga ii desu.",
      traducao: "Como vai chover amanhã, seria melhor trazer um guarda-chuva.",
    },
  },
  {
    topico: "ましょう",
    romaji: "mashou",
    traducao: "Vamos... Devemos...",
    explicacao:
      "A forma 'ましょう' é usada para sugerir ou convidar alguém para fazer algo juntos.",
    exemplo: {
      frase: "映画を見ましょう。",
      furigana: "えいがをみましょう。",
      romaji: "Eiga o mimashou.",
      traducao: "Vamos assistir a um filme.",
    },
  },
  {
    topico: "ましょうか",
    romaji: "mashouka",
    traducao: "Devo...? Você gostaria de...?",
    explicacao:
      "A forma 'ましょうか' é usada para oferecer ajuda ou sugerir algo ao ouvinte.",
    exemplo: {
      frase: "一緒に食事に行きましょうか？",
      furigana: "いっしょにしょくじにいきましょうか？",
      romaji: "Issho ni shokuji ni ikimashou ka?",
      traducao: "Devo ir comer juntos?",
    },
  },
  {
    topico: "ませんか",
    romaji: "masen ka",
    traducao: "Você gostaria de...? Devemos...?",
    explicacao:
      "A forma 'ませんか' é usada para fazer convites ou oferecer sugestões ao ouvinte.",
    exemplo: {
      frase: "コーヒーを飲みませんか？",
      furigana: "コーヒーをのみませんか？",
      romaji: "Koohii o nomimasen ka?",
      traducao: "Você gostaria de tomar um café?",
    },
  },
  {
    topico: "まだ",
    romaji: "mada",
    traducao: "Ainda... Ainda não...",
    explicacao:
      "A palavra 'まだ' é usada para indicar que algo ainda não ocorreu ou que algo ainda está em andamento.",
    exemplo: {
      frase: "彼はまだ帰ってきません。",
      furigana: "かれはまだかえってきません。",
      romaji: "Kare wa mada kaettekimasen.",
      traducao: "Ele ainda não voltou.",
    },
  },
  {
    topico: "まだ～ていません",
    romaji: "mada ~te imasen",
    traducao: "Ainda não ~",
    explicacao:
      "A estrutura 'まだ～ていません' é usada para indicar que algo ainda não foi concluído ou que algo ainda não ocorreu.",
    exemplo: {
      frase: "宿題をまだやっていません。",
      furigana: "しゅくだいをまだやっていません。",
      romaji: "Shukudai o mada yatte imasen.",
      traducao: "Ainda não fiz a lição de casa.",
    },
  },
  {
    topico: "まで",
    romaji: "made",
    traducao: "Até...; Tão longe quanto...; Até certo ponto...",
    explicacao:
      "A partícula 'まで' é usada para indicar um limite, um ponto final ou uma extensão temporal.",
    exemplo: {
      frase: "彼は学校まで走って行きました。",
      furigana: "かれはがっこうまではしっていきました。",
      romaji: "Kare wa gakkou made hashitte ikimashita.",
      traducao: "Ele correu até a escola.",
    },
  },
  {
    topico: "も",
    romaji: "mo",
    traducao: "Também...; Além disso...; Também",
    explicacao:
      "A partícula 'も' é usada para indicar inclusão ou adição de algo à lista de coisas mencionadas.",
    exemplo: {
      frase: "私も行きます。",
      furigana: "わたしもいきます。",
      romaji: "Watashi mo ikimasu.",
      traducao: "Eu também vou.",
    },
  },
  {
    topico: "もう",
    romaji: "mou",
    traducao: "Já...; Não mais...; Novamente...; De outros...",
    explicacao:
      "A palavra 'もう' é usada para indicar que algo já ocorreu, que algo não acontece mais, que algo acontece novamente ou que algo é diferente.",
    exemplo: {
      frase: "もう食べましたか？",
      furigana: "もうたべましたか？",
      romaji: "Mou tabemashita ka?",
      traducao: "Você já comeu?",
    },
  },
  {
    topico: "や",
    romaji: "ya",
    traducao: "E...; Ou...",
    explicacao:
      "A partícula 'や' é usada para listar exemplos de uma categoria ou para indicar escolhas múltiplas.",
    exemplo: {
      frase: "果物や野菜を買いました。",
      furigana: "くだものややさいをかいました。",
      romaji: "Kudamono ya yasai o kaimashita.",
      traducao: "Comprei frutas e vegetais.",
    },
  },
  {
    topico: "やすい",
    romaji: "yasui",
    traducao: "Barato...; Fácil...",
    explicacao:
      "A palavra 'やすい' é usada para descrever algo que é barato ou fácil.",
    exemplo: {
      frase: "この店の服は安いです。",
      furigana: "このみせのふくはやすいです。",
      romaji: "Kono mise no fuku wa yasui desu.",
      traducao: "As roupas desta loja são baratas.",
    },
  },
  {
    topico: "より",
    romaji: "yori",
    traducao: "Do que...; Mais do que...",
    explicacao:
      "A partícula 'より' é usada para fazer comparações e indicar uma comparação relativa.",
    exemplo: {
      frase: "彼は私より背が高いです。",
      furigana: "かれはわたしよりせがたかいです。",
      romaji: "Kare wa watashi yori se ga takai desu.",
      traducao: "Ele é mais alto do que eu.",
    },
  },
  {
    topico: "より~ほうが~",
    romaji: "yori ~hou ga~",
    traducao: "É melhor...; É mais...",
    explicacao:
      "A estrutura 'より～ほうが～' é usada para indicar uma comparação de preferência ou superioridade.",
    exemplo: {
      frase: "コーヒーより紅茶のほうが好きです。",
      furigana: "コーヒーよりこうちゃのほうがすきです。",
      romaji: "Koohii yori koucha no hou ga suki desu.",
      traducao: "Eu gosto mais de chá do que de café.",
    },
  },
  {
    topico: "よると",
    romaji: "yoru to",
    traducao: "De acordo com...; Segundo...",
    explicacao:
      "A expressão 'よると' é usada para indicar informações baseadas em algo ou alguém.",
    exemplo: {
      frase: "天気予報によると、明日は雨です。",
      furigana: "てんきよほうによると、あしたはあめです。",
      romaji: "Tenkiyohou ni yoru to, ashita wa ame desu.",
      traducao: "De acordo com a previsão do tempo, amanhã vai chover.",
    },
  },
  {
    topico: "らしい",
    romaji: "rashii",
    traducao: "Parece...; Parece que...",
    explicacao:
      "A palavra 'らしい' é usada para expressar uma suposição ou julgamento com base em evidências ou informações.",
    exemplo: {
      frase: "彼は病気らしいです。",
      furigana: "かれはびょうきらしいです。",
      romaji: "Kare wa byouki rashii desu.",
      traducao: "Ele parece estar doente.",
    },
  },
  {
    topico: "ります",
    romaji: "rimasu",
    traducao: "Verbo na forma polida presente...",
    explicacao:
      "A forma 'ます' é usada para expressar um verbo na forma polida presente.",
    exemplo: {
      frase: "食べます。",
      furigana: "たべます。",
      romaji: "Tabemasu.",
      traducao: "Eu como.",
    },
  },
  {
    topico: "る",
    romaji: "ru",
    traducao: "Verbo na forma de dicionário...",
    explicacao:
      "A forma de dicionário 'る' é usada para expressar um verbo na forma de dicionário.",
    exemplo: {
      frase: "食べる",
      furigana: "たべる",
      romaji: "Taberu",
      traducao: "Comer",
    },
  },
  {
    topico: "れる/られる",
    romaji: "reru/rareru",
    traducao: "Verbo na forma passiva...",
    explicacao:
      "A forma passiva 'れる/られる' é usada para expressar um verbo na forma passiva.",
    exemplo: {
      frase: "書かれました。",
      furigana: "かかれました。",
      romaji: "Kakaremashita.",
      traducao: "Foi escrito.",
    },
  },
  {
    topico: "んです",
    romaji: "n desu",
    traducao: "É que...; Porque...; Explicação...",
    explicacao:
      "A expressão 'んです' é usada para dar uma explicação ou justificar algo.",
    exemplo: {
      frase: "遅れました。電車が遅れたんです。",
      furigana: "おくれました。でんしゃがおくれたんです。",
      romaji: "Okuremashita. Densha ga okureta n desu.",
      traducao: "Cheguei atrasado. É que o trem atrasou.",
    },
  },
  {
    topico: "一番（いちばん）",
    romaji: "ichiban",
    traducao: "A maioria...; O melhor...",
    explicacao:
      "A expressão '一番（いちばん）' é usada para indicar a maioria de algo ou o melhor em uma determinada categoria.",
    exemplo: {
      frase: "この店の商品は一番安いです。",
      furigana: "このみせのしょうひんはいちばんやすいです。",
      romaji: "Kono mise no shouhin wa ichiban yasui desu.",
      traducao: "Os produtos desta loja são os mais baratos.",
    },
  },
  {
    topico: "一緒に（いっしょに）",
    romaji: "issho ni",
    traducao: "Juntos...",
    explicacao:
      "A expressão '一緒に（いっしょに）' é usada para indicar que duas ou mais pessoas fazem algo juntas.",
    exemplo: {
      frase: "映画を一緒に見ましょう。",
      furigana: "えいがをいっしょにみましょう。",
      romaji: "Eiga o issho ni mimashou.",
      traducao: "Vamos assistir ao filme juntos.",
    },
  },
  {
    topico: "前に（まえに）",
    romaji: "mae ni",
    traducao: "Antes...; Na frente de...",
    explicacao:
      "A expressão '前に（まえに）' é usada para indicar que algo acontece antes de outra ação ou que algo está na frente de algo.",
    exemplo: {
      frase: "食事の前に手を洗ってください。",
      furigana: "しょくじのまえにてをあらってください。",
      romaji: "Shokuji no mae ni te o aratte kudasai.",
      traducao: "Por favor, lave as mãos antes de comer.",
    },
  },
  {
    topico: "方（かた）",
    romaji: "kata",
    traducao: "A maneira de...; Como...",
    explicacao:
      "A palavra '方（かた）' é usada para indicar a maneira de fazer algo ou perguntar como fazer algo.",
    exemplo: {
      frase: "日本語の勉強の仕方を教えてください。",
      furigana: "にほんごのべんきょうのしかたをおしえてください。",
      romaji: "Nihongo no benkyou no shikata o oshiete kudasai.",
      traducao: "Por favor, me ensine como estudar japonês.",
    },
  },
  {
    topico: "なあ",
    romaji: "naa",
    traducao: "Partícula de final de frase...",
    explicacao:
      "A partícula 'なあ' é usada no final de uma frase para expressar confirmação, admiração ou outras emoções.",
    exemplo: {
      frase: "美しいなあ。",
      furigana: "うつくしいなあ。",
      romaji: "Utsukushii naa.",
      traducao: "É tão bonito.",
    },
  },
];

 
export default n5GrammarList;