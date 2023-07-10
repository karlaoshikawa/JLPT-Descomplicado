const n4GrammarList = [
  {
    topico: "間（あいだ）",
    romaji: "aida",
    traducao: "período de tempo; intervalo",
    explicacao:
      "Essa partícula é usada para indicar um período de tempo entre dois eventos ou a duração de uma ação.",
    exemplo: {
      frase: "昼休みの間、本を読んでいました。",
      furigana: "ちゅうきゅうみのあいだ、ほんをよんでいました。",
      romaji: "Chūkyūmi no aida, hon o yonde imashita.",
      traducao: "Durante o intervalo do almoço, eu estava lendo um livro.",
    },
  },
  {
    topico: "間に（あいだに）",
    romaji: "aida ni",
    traducao: "durante o período de tempo",
    explicacao:
      "Essa construção gramatical é usada para expressar que algo acontece durante um intervalo de tempo específico.",
    exemplo: {
      frase: "雨が降る間に、傘を買いに行きます。",
      furigana: "あめがふるあいだに、かさをかいにいきます。",
      romaji: "Ame ga furu aida ni, kasa o kai ni ikimasu.",
      traducao: "Vou comprar um guarda-chuva enquanto está chovendo.",
    },
  },
  {
    topico: "あまり～ない",
    romaji: "amari~nai",
    traducao: "não muito; não frequentemente",
    explicacao:
      "Essa estrutura é usada para indicar que algo não ocorre com frequência ou em grande quantidade.",
    exemplo: {
      frase: "彼はあまり日本語を話しません。",
      furigana: "かれはあまりにほんごをはなしません。",
      romaji: "Kare wa amari nihongo o hanashimasen.",
      traducao: "Ele não fala muito japonês.",
    },
  },
  {
    topico: "後で（あとで）",
    romaji: "ato de",
    traducao: "depois; mais tarde",
    explicacao:
      "Essa expressão é usada para indicar que algo será feito ou acontecerá em um momento posterior.",
    exemplo: {
      frase: "映画を見るのは後でいいですか？",
      furigana: "えいがをみるのはあとでいいですか？",
      romaji: "Eiga o miru no wa ato de ii desu ka?",
      traducao: "Posso assistir ao filme mais tarde?",
    },
  },
  {
    topico: "ば",
    romaji: "ba",
    traducao: "condicional",
    explicacao:
      "Essa partícula é usada para expressar uma condição ou uma suposição.",
    exemplo: {
      frase: "もし時間があれば、映画に行きましょう。",
      furigana: "もしじかんがあれば、えいがにいきましょう。",
      romaji: "Moshi jikan ga areba, eiga ni ikimashou.",
      traducao: "Se tivermos tempo, vamos ao cinema.",
    },
  },
  {
    topico: "場合は（ばあいは）",
    romaji: "baai wa",
    traducao: "no caso de; se",
    explicacao:
      "Essa expressão é usada para indicar uma condição ou situação específica em que algo ocorre.",
    exemplo: {
      frase: "雨が降る場合は、傘を持って行ってください。",
      furigana: "あめがふるばあいは、かさをもっていってください。",
      romaji: "Ame ga furu baai wa, kasa o motte itte kudasai.",
      traducao: "No caso de chover, por favor, leve um guarda-chuva.",
    },
  },
  {
    topico: "ばかり",
    romaji: "bakari",
    traducao: "apenas; somente",
    explicacao:
      "Essa partícula é usada para indicar que algo é feito exclusivamente ou em grande quantidade.",
    exemplo: {
      frase: "日本に来てばかりです。",
      furigana: "にほんにきてばかりです。",
      romaji: "Nihon ni kite bakari desu.",
      traducao: "Eu acabei de chegar ao Japão.",
    },
  },
  {
    topico: "だけで",
    romaji: "dake de",
    traducao: "somente; apenas",
    explicacao:
      "Essa construção gramatical é usada para expressar que algo é feito apenas por uma pessoa ou motivo específico.",
    exemplo: {
      frase: "彼は笑うだけで、何も言いません。",
      furigana: "かれはわらうだけで、なにもいいません。",
      romaji: "Kare wa warau dake de, nani mo iimasen.",
      traducao: "Ele apenas sorri, não diz nada.",
    },
  },
  {
    topico: "出す（だす）",
    romaji: "dasu",
    traducao: "tirar; colocar para fora",
    explicacao:
      "Esse verbo é usado para expressar a ação de tirar ou colocar algo para fora.",
    exemplo: {
      frase: "ゴミを出す前に分別してください。",
      furigana: "ごみをだすまえにぶんべつしてください。",
      romaji: "Gomi o dasu mae ni bunbetsu shite kudasai.",
      traducao:
        "Por favor, faça a separação do lixo antes de colocá-lo para fora.",
    },
  },
  {
    topico: "でございます",
    romaji: "de gozaimasu",
    traducao: "ser; estar (forma educada)",
    explicacao:
      "Essa expressão é uma forma educada de ser ou estar, usada principalmente em situações formais.",
    exemplo: {
      frase: "お名前は何でございますか？",
      furigana: "おなまえはなんでございますか？",
      romaji: "Onamae wa nan de gozaimasu ka?",
      traducao: "Qual é o seu nome? (forma educada)",
    },
  },
  {
    topico: "でも",
    romaji: "demo",
    traducao: "mas; no entanto",
    explicacao:
      "Essa partícula é usada para expressar uma concessão ou contraste entre duas ideias.",
    exemplo: {
      frase: "雨が降っていますが、出かけます。",
      furigana: "あめがふっていますが、でかけます。",
      romaji: "Ame ga futte imasu ga, dekakemasu.",
      traducao: "Está chovendo, mas vou sair.",
    },
  },
  {
    topico: "ではないか",
    romaji: "dewanai ka",
    traducao: "não é?; não é verdade?",
    explicacao:
      "Essa expressão é usada para fazer perguntas retóricas ou para pedir a opinião ou concordância do interlocutor.",
    exemplo: {
      frase: "この本は面白いではないか。",
      furigana: "このほんはおもしろいではないか。",
      romaji: "Kono hon wa omoshiroi dewa nai ka.",
      traducao: "Este livro não é interessante?",
    },
  },
  {
    topico: "が必要（がひつよう）",
    romaji: "ga hitsuyou",
    traducao: "é necessário; precisa",
    explicacao:
      "Essa expressão é usada para indicar que algo é necessário ou precisa ser feito.",
    exemplo: {
      frase: "パスポートが必要ですか？",
      furigana: "ぱすぽーとがひつようですか？",
      romaji: "Pasupōto ga hitsuyou desu ka?",
      traducao: "É necessário um passaporte?",
    },
  },
  {
    topico: "がする",
    romaji: "ga suru",
    traducao: "parece; dá a impressão de",
    explicacao:
      "Essa construção gramatical é usada para expressar que algo parece ou dá a impressão de ser de uma determinada maneira.",
    exemplo: {
      frase: "この料理は美味しそうですね。",
      furigana: "このりょうりはおいしそうですね。",
      romaji: "Kono ryouri wa oishisou desu ne.",
      traducao: "Esta comida parece deliciosa, não é?",
    },
  },
  {
    topico: "がり",
    romaji: "gari",
    traducao: "ter tendência a; ser propenso a",
    explicacao:
      "Essa partícula é usada para expressar que alguém tem uma tendência ou propensão a fazer algo.",
    exemplo: {
      frase: "彼は忘れがちです。",
      furigana: "かれはわすれがちです。",
      romaji: "Kare wa wasuregachi desu.",
      traducao: "Ele tende a esquecer.",
    },
  },
  {
    topico: "がる / がっている",
    romaji: "garu / gatte iru",
    traducao: "parece; expressar emoção",
    explicacao:
      "Essa construção gramatical é usada para expressar as emoções, sentimentos ou ações de outra pessoa com base em suas expressões faciais, tom de voz, etc.",
    exemplo: {
      frase: "彼女は疲れているがる。",
      furigana: "かのじょはつかれているがる。",
      romaji: "Kanojo wa tsukarete iru garu.",
      traducao: "Ela parece cansada.",
    },
  },
  {
    topico: "ございます",
    romaji: "gozaimasu",
    traducao: "haver; existir (forma educada)",
    explicacao:
      "Essa expressão é uma forma educada de indicar a existência de algo ou expressar posses.",
    exemplo: {
      frase: "お手洗いはどこにございますか？",
      furigana: "おてあらいはどこにございますか？",
      romaji: "Otearai wa doko ni gozaimasu ka?",
      traducao: "Onde fica o banheiro? (forma educada)",
    },
  },
  {
    topico: "始める（はじめる）",
    romaji: "hajimeru",
    traducao: "começar; iniciar",
    explicacao:
      "Esse verbo é usado para expressar o início de uma ação ou atividade.",
    exemplo: {
      frase: "明日から新しい仕事を始めます。",
      furigana: "あしたからあたらしいしごとをはじめます。",
      romaji: "Ashita kara atarashii shigoto o hajimemasu.",
      traducao: "Começarei um novo trabalho a partir de amanhã.",
    },
  },
  {
    topico: "はずだ",
    romaji: "hazu da",
    traducao: "deveria; suposto a",
    explicacao:
      "Essa expressão é usada para expressar uma expectativa, algo que deveria acontecer ou ser verdadeiro com base em informações disponíveis.",
    exemplo: {
      frase: "彼はもうここに来ているはずだ。",
      furigana: "かれはもうここにきているはずだ。",
      romaji: "Kare wa mou koko ni kite iru hazu da.",
      traducao: "Ele deveria estar aqui agora.",
    },
  },
  {
    topico: "はずがない",
    romaji: "hazu ga nai",
    traducao: "não pode ser; não é possível",
    explicacao:
      "Essa expressão é usada para expressar que algo é improvável ou não é possível com base nas informações disponíveis.",
    exemplo: {
      frase: "彼がそれを知っているはずがない。",
      furigana: "かれがそれをしっているはずがない。",
      romaji: "Kare ga sore o shitte iru hazu ga nai.",
      traducao: "Ele não pode saber disso.",
    },
  },
  {
    topico: "必要がある（ひつようがある）",
    romaji: "hitsuyou ga aru",
    traducao: "ser necessário; precisar",
    explicacao:
      "Essa expressão é usada para indicar que algo é necessário ou precisa ser feito.",
    exemplo: {
      frase: "この書類は提出が必要です。",
      furigana: "このしょるいはていしゅつがひつようです。",
      romaji: "Kono shorui wa teishutsu ga hitsuyou desu.",
      traducao: "Esse documento precisa ser entregue.",
    },
  },
  {
    topico: "意向形 （いこうけい）",
    romaji: "ikoukei",
    traducao: "forma de expressar intenção",
    explicacao:
      "Esse é o nome dado à forma de verbo usada para expressar intenção, desejo ou vontade.",
    exemplo: {
      frase: "明日、映画を見に行こうと思っています。",
      furigana: "あした、えいがをみにいこうとおもっています。",
      romaji: "Ashita, eiga o mi ni ikou to omotte imasu.",
      traducao: "Estou pensando em ir assistir um filme amanhã.",
    },
  },
  {
    topico: "いらっしゃる",
    romaji: "irassharu",
    traducao: "ir; vir; estar (forma respeitosa)",
    explicacao:
      "Essa é a forma respeitosa de verbos de movimento (ir e vir) e também pode ser usada como uma forma respeitosa de estar.",
    exemplo: {
      frase: "お客様がいらっしゃいました。",
      furigana: "おきゃくさまがいらっしゃいました。",
      romaji: "Okyakusama ga irasshaimashita.",
      traducao: "O cliente chegou.",
    },
  },
  {
    topico: "いたします",
    romaji: "itashimasu",
    traducao: "fazer; realizar (forma respeitosa)",
    explicacao:
      "Essa é a forma respeitosa de fazer ou realizar algo, usada ao se referir à própria ação de forma polida.",
    exemplo: {
      frase: "ご注文を承りましたので、すぐに準備いたします。",
      furigana:
        "ごちゅうもんをうけたまわりましたので、すぐにじゅんびいたします。",
      romaji: "Gochuumon o uketamawarimashita node, sugu ni junbi itashimasu.",
      traducao: "Recebemos seu pedido e faremos os preparativos imediatamente.",
    },
  },
  {
    topico: "じゃないか",
    romaji: "ja nai ka",
    traducao: "não é verdade?; não é?; não é que?",
    explicacao:
      "Essa expressão é usada para expressar surpresa ou enfatizar uma pergunta retórica.",
    exemplo: {
      frase: "いい天気だじゃないか！",
      furigana: "いいてんきだじゃないか！",
      romaji: "Ii tenki da ja nai ka!",
      traducao: "Que tempo bom, não é verdade?",
    },
  },
  {
    topico: "かどうか",
    romaji: "ka dou ka",
    traducao: "se; se é o caso",
    explicacao:
      "Essa expressão é usada para expressar uma pergunta sobre uma condição ou situação específica.",
    exemplo: {
      frase: "彼女は来るかどうかわかりません。",
      furigana: "かのじょはくるかどうかわかりません。",
      romaji: "Kanojo wa kuru ka dou ka wakarimasen.",
      traducao: "Não sei se ela vai vir.",
    },
  },
  {
    topico: "かしら",
    romaji: "kashira",
    traducao: "eu me pergunto; não tenho certeza",
    explicacao:
      "Essa expressão é usada para expressar uma suposição, incerteza ou questionamento sobre algo.",
    exemplo: {
      frase: "彼は何を考えているのかしら。",
      furigana: "かれはなにをかんがえているのかしら。",
      romaji: "Kare wa nani o kangaete iru no kashira.",
      traducao: "Eu me pergunto o que ele está pensando.",
    },
  },
  {
    topico: "かい",
    romaji: "kai",
    traducao: "pergunta (partícula); certo?",
    explicacao: "Essa partícula é usada para formar uma pergunta direta.",
    exemplo: {
      frase: "明日会えるかい？",
      furigana: "あしたあえるかい？",
      romaji: "Ashita aeru kai?",
      traducao: "Podemos nos encontrar amanhã, certo?",
    },
  },
  {
    topico: "かもしれない",
    romaji: "ka mo shirenai",
    traducao: "pode ser; talvez",
    explicacao:
      "Essa expressão é usada para expressar incerteza ou possibilidade de algo acontecer.",
    exemplo: {
      frase: "明日は雨かもしれません。",
      furigana: "あしたはあめかもしれません。",
      romaji: "Ashita wa ame ka mo shiremasen.",
      traducao: "Talvez chova amanhã.",
    },
  },
  {
    topico: "かな",
    romaji: "kana",
    traducao: "não sei; não tenho certeza",
    explicacao:
      "Essa expressão é usada para expressar incerteza, dúvida ou ponderação sobre algo.",
    exemplo: {
      frase: "これは何かな。",
      furigana: "これはなにかな。",
      romaji: "Kore wa nani kana.",
      traducao: "Não sei o que é isso.",
    },
  },
  {
    topico: "から作る（からつくる）",
    romaji: "kara tsukuru",
    traducao: "fazer algo a partir de; criar a partir de",
    explicacao:
      "Essa construção gramatical é usada para indicar que algo é feito ou criado a partir de certos materiais ou ingredientes.",
    exemplo: {
      frase: "手作りのケーキを卵から作りました。",
      furigana: "てづくりのけーきをたまごからつくりました。",
      romaji: "Tezukuri no keeki o tamago kara tsukurimashita.",
      traducao: "Fiz um bolo caseiro a partir de ovos.",
    },
  },
  {
    topico: "きっと",
    romaji: "kitto",
    traducao: "com certeza; certamente",
    explicacao:
      "Essa palavra é usada para expressar uma forte convicção ou certeza sobre algo.",
    exemplo: {
      frase: "明日はきっと晴れるでしょう。",
      furigana: "あしたはきっとはれるでしょう。",
      romaji: "Ashita wa kitto hareru deshou.",
      traducao: "Com certeza vai fazer sol amanhã.",
    },
  },
  {
    topico: "頃（ころ / ごろ）",
    romaji: "koro / goro",
    traducao: "por volta de; aproximadamente",
    explicacao:
      "Essa palavra é usada para indicar uma aproximação de tempo ou período.",
    exemplo: {
      frase: "夕方ごろに電話します。",
      furigana: "ゆうがたごろにでんわします。",
      romaji: "Yuugata goro ni denwa shimasu.",
      traducao: "Vou ligar por volta da tarde.",
    },
  },
  {
    topico: "こと",
    romaji: "koto",
    traducao: "coisa; fato; assunto",
    explicacao:
      "Essa palavra é usada para generalizar um conceito, ideia ou ação.",
    exemplo: {
      frase: "友達と話すことが好きです。",
      furigana: "ともだちとはなすことがすきです。",
      romaji: "Tomodachi to hanasu koto ga suki desu.",
      traducao: "Gosto de conversar com amigos.",
    },
  },
  {
    topico: "ことがある",
    romaji: "koto ga aru",
    traducao: "ter experiência de; já ter feito algo",
    explicacao:
      "Essa expressão é usada para indicar que a pessoa tem experiência ou já fez algo no passado.",
    exemplo: {
      frase: "日本に行ったことがあります。",
      furigana: "にほんにいったことがあります。",
      romaji: "Nihon ni itta koto ga arimasu.",
      traducao: "Eu já estive no Japão.",
    },
  },
  {
    topico: "ことができる",
    romaji: "koto ga dekiru",
    traducao: "ser capaz de; poder fazer algo",
    explicacao:
      "Essa expressão é usada para indicar a capacidade ou habilidade de fazer algo.",
    exemplo: {
      frase: "日本語が話せることができます。",
      furigana: "にほんごがはなせることができます。",
      romaji: "Nihongo ga hanaseru koto ga dekimasu.",
      traducao: "Eu posso falar japonês.",
    },
  },
  {
    topico: "ことになる",
    romaji: "koto ni naru",
    traducao: "ser decidido; ficar acordado; ser estabelecido",
    explicacao:
      "Essa expressão é usada para indicar que algo foi decidido ou estabelecido.",
    exemplo: {
      frase: "明日は会議があることになりました。",
      furigana: "あしたはかいぎがあることになりました。",
      romaji: "Ashita wa kaigi ga aru koto ni narimashita.",
      traducao: "Foi decidido que haverá uma reunião amanhã.",
    },
  },
  {
    topico: "ことにする",
    romaji: "koto ni suru",
    traducao: "decidir fazer algo; escolher algo",
    explicacao:
      "Essa expressão é usada para indicar que você decide fazer algo ou escolhe uma opção específica.",
    exemplo: {
      frase: "明日は休むことにしました。",
      furigana: "あしたはやすむことにしました。",
      romaji: "Ashita wa yasumu koto ni shimashita.",
      traducao: "Decidi tirar folga amanhã.",
    },
  },
  {
    topico: "くする",
    romaji: "ku suru",
    traducao: "fazer se tornar; transformar em",
    explicacao:
      "Essa construção gramatical é usada para transformar um adjetivo ou substantivo em um verbo.",
    exemplo: {
      frase: "彼は部屋をきれいにする。",
      furigana: "かれはへやをきれいにする。",
      romaji: "Kare wa heya o kirei ni suru.",
      traducao: "Ele limpa o quarto.",
    },
  },
  {
    topico: "急に（きゅうに）",
    romaji: "kyuu ni",
    traducao: "de repente; abruptamente",
    explicacao:
      "Essa expressão é usada para indicar algo que acontece de forma inesperada ou rápida.",
    exemplo: {
      frase: "彼は急に笑い出した。",
      furigana: "かれはきゅうにわらいだした。",
      romaji: "Kare wa kyuu ni waraida shita.",
      traducao: "Ele começou a rir de repente.",
    },
  },
  {
    topico: "までに",
    romaji: "made ni",
    traducao: "até (tempo limite)",
    explicacao:
      "Essa expressão é usada para indicar um tempo limite ou prazo para a realização de uma ação.",
    exemplo: {
      frase: "明日の朝までにレポートを提出してください。",
      furigana: "あしたのあさまでにれぽーとをていしゅつしてください。",
      romaji: "Ashita no asa made ni repooto o teishutsu shite kudasai.",
      traducao: "Por favor, entregue o relatório até amanhã de manhã.",
    },
  },
  {
    topico: "まま",
    romaji: "mama",
    traducao: "como está; no estado atual",
    explicacao:
      "Essa palavra é usada para indicar que algo permanece na mesma condição ou estado em que está.",
    exemplo: {
      frase: "ドアを開けたままにしないでください。",
      furigana: "どあをあけたままにしないでください。",
      romaji: "Doa o aketa mama ni shinaide kudasai.",
      traducao: "Por favor, não deixe a porta aberta.",
    },
  },
  {
    topico: "または",
    romaji: "matawa",
    traducao: "ou; ou então",
    explicacao:
      "Essa expressão é usada para indicar uma escolha entre duas opções ou alternativas.",
    exemplo: {
      frase: "あなたは犬または猫が好きですか？",
      furigana: "あなたはいぬまたはねこがすきですか？",
      romaji: "Anata wa inu matawa neko ga suki desu ka?",
      traducao: "Você gosta de cachorros ou gatos?",
    },
  },
  {
    topico: "みたいだ",
    romaji: "mitai da",
    traducao: "parece; parece que",
    explicacao:
      "Essa expressão é usada para indicar que algo parece ou se assemelha a algo.",
    exemplo: {
      frase: "彼は疲れているみたいです。",
      furigana: "かれはつかれているみたいです。",
      romaji: "Kare wa tsukarete iru mitai desu.",
      traducao: "Ele parece estar cansado.",
    },
  },
  {
    topico: "みたいな",
    romaji: "mitai na",
    traducao: "parecido com; como",
    explicacao:
      "Essa expressão é usada para fazer comparações ou descrever algo que é semelhante a algo ou alguém.",
    exemplo: {
      frase: "彼女は花のような笑顔をしています。",
      furigana: "かのじょははなのようなえがおをしています。",
      romaji: "Kanojo wa hana no you na egao o shiteimasu.",
      traducao: "Ela tem um sorriso parecido com uma flor.",
    },
  },
  {
    topico: "みたいに",
    romaji: "mitai ni",
    traducao: "como; similar a",
    explicacao:
      "Essa expressão é usada para comparar ou descrever algo que é semelhante a outra coisa ou pessoa.",
    exemplo: {
      frase: "彼女は夢の中にいるみたいに眠っていた。",
      furigana: "かのじょはゆめのなかにいるみたいにねむっていた。",
      romaji: "Kanojo wa yume no naka ni iru mitai ni nemutteita.",
      traducao: "Ela estava dormindo como se estivesse em um sonho.",
    },
  },
  {
    topico: "も",
    romaji: "mo",
    traducao: "também; inclusive",
    explicacao:
      "Essa palavra é usada para indicar que algo é adicional ou inclusivo em relação a outro.",
    exemplo: {
      frase: "私も日本料理が好きです。",
      furigana: "わたしもにほんりょうりがすきです。",
      romaji: "Watashi mo nihon ryouri ga suki desu.",
      traducao: "Eu também gosto de comida japonesa.",
    },
  },
  {
    topico: "な",
    romaji: "na",
    traducao: "atributo; adjetivo",
    explicacao:
      "Essa partícula é usada para transformar um substantivo em um adjetivo ou atribuir uma qualidade a algo.",
    exemplo: {
      frase: "新しい本を買いました。",
      furigana: "あたらしいほんをかいました。",
      romaji: "Atarashii hon o kaimashita.",
      traducao: "Comprei um livro novo.",
    },
  },
  {
    topico: "など",
    romaji: "nado",
    traducao: "e outros; e assim por diante",
    explicacao:
      "Essa palavra é usada para indicar exemplos adicionais de algo ou para listar itens de uma mesma categoria.",
    exemplo: {
      frase: "果物などを食べると健康に良いです。",
      furigana: "くだものなどをたべるとけんこうによいです。",
      romaji: "Kudamono nado o taberu to kenkou ni yoi desu.",
      traducao: "Comer frutas e outros alimentos é bom para a saúde.",
    },
  },
  {
    topico: "ながら",
    romaji: "nagara",
    traducao: "enquanto; ao mesmo tempo",
    explicacao:
      "Essa construção gramatical é usada para indicar que duas ações estão ocorrendo simultaneamente.",
    exemplo: {
      frase: "音楽を聴きながら勉強します。",
      furigana: "おんがくをききながらべんきょうします。",
      romaji: "Ongaku o kiki nagara benkyou shimasu.",
      traducao: "Estudo enquanto ouço música.",
    },
  },
  {
    topico: "なかなか～ない",
    romaji: "nakanaka ~ nai",
    traducao: "não facilmente; não muito",
    explicacao:
      "Essa expressão é usada para indicar que algo não acontece facilmente ou não é feito com frequência.",
    exemplo: {
      frase: "彼はなかなか謝りません。",
      furigana: "かれはなかなかあやまりません。",
      romaji: "Kare wa nakanaka ayamarimasen.",
      traducao: "Ele não se desculpa facilmente.",
    },
  },
  {
    topico: "なければいけない",
    romaji: "nakereba ikenai",
    traducao: "precisar; ter que",
    explicacao:
      "Essa expressão é usada para indicar uma obrigação ou necessidade de fazer algo.",
    exemplo: {
      frase: "明日までに宿題を終わらせなければいけません。",
      furigana: "あしたまでにしゅくだいをおわらせなければいけません。",
      romaji: "Ashita made ni shukudai o owarasenakereba ikemasen.",
      traducao: "Preciso terminar a lição de casa até amanhã.",
    },
  },
  {
    topico: "なければならない",
    romaji: "nakereba naranai",
    traducao: "precisar; ter que",
    explicacao:
      "Essa expressão é usada para indicar uma obrigação ou necessidade de fazer algo.",
    exemplo: {
      frase: "私は毎日日本語を勉強しなければなりません。",
      furigana: "わたしはまいにちにほんごをべんきょうしなければなりません。",
      romaji: "Watashi wa mainichi nihongo o benkyou shinakereba narimasen.",
      traducao: "Eu preciso estudar japonês todos os dias.",
    },
  },
  {
    topico: "なら",
    romaji: "nara",
    traducao: "se; caso; se for",
    explicacao:
      "Essa partícula é usada para expressar uma condição hipotética ou uma comparação.",
    exemplo: {
      frase: "お金があるなら、旅行に行きたいです。",
      furigana: "おかねがあるなら、りょこうにいきたいです。",
      romaji: "Okane ga aru nara, ryokou ni ikitai desu.",
      traducao: "Se eu tiver dinheiro, quero viajar.",
    },
  },
  {
    topico: "なさい",
    romaji: "nasai",
    traducao: "faça; por favor faça",
    explicacao:
      "Essa forma imperativa é usada para dar uma ordem ou fazer um pedido de forma polida.",
    exemplo: {
      frase: "静かにしてください。",
      furigana: "しずかにしてください。",
      romaji: "Shizuka ni shite kudasai.",
      traducao: "Por favor, fique quieto.",
    },
  },
  {
    topico: "なさる",
    romaji: "nasaru",
    traducao: "fazer (forma respeitosa)",
    explicacao:
      "Essa forma respeitosa do verbo 'fazer' é usada ao se referir à ação de alguém de forma polida.",
    exemplo: {
      frase: "お父さんがご飯を作ってくださいました。",
      furigana: "おとうさんがごはんをつくってくださいました。",
      romaji: "Otousan ga gohan o tsukutte kudasaimashita.",
      traducao: "Meu pai fez o arroz.",
    },
  },
  {
    topico: "に気がつく（にきがつく）",
    romaji: "ni ki ga tsuku",
    traducao: "notar; perceber",
    explicacao:
      "Essa expressão é usada para indicar que alguém nota ou percebe algo.",
    exemplo: {
      frase: "彼は私に気がついてくれました。",
      furigana: "かれはわたしにきがついてくれました。",
      romaji: "Kare wa watashi ni ki ga tsuite kuremashita.",
      traducao: "Ele percebeu minha presença.",
    },
  },
  {
    topico: "に見える（にみえる）",
    romaji: "ni mieru",
    traducao: "parecer; parecer que",
    explicacao:
      "Essa expressão é usada para indicar que algo parece ou aparenta ser de uma certa maneira.",
    exemplo: {
      frase: "彼女は幸せに見えます。",
      furigana: "かのじょはしあわせにみえます。",
      romaji: "Kanojo wa shiawase ni miemasu.",
      traducao: "Ela parece estar feliz.",
    },
  },
  {
    topico: "にする",
    romaji: "ni suru",
    traducao: "decidir; escolher",
    explicacao:
      "Essa expressão é usada para indicar que alguém toma uma decisão ou faz uma escolha.",
    exemplo: {
      frase: "日本語を勉強することにしました。",
      furigana: "にほんごをべんきょうすることにしました。",
      romaji: "Nihongo o benkyou suru koto ni shimashita.",
      traducao: "Decidi estudar japonês.",
    },
  },
  {
    topico: "にくい",
    romaji: "nikui",
    traducao: "difícil de; duro de",
    explicacao:
      "Essa forma adjetival é usada para indicar que algo é difícil ou desafiador.",
    exemplo: {
      frase: "この問題は難しいです。",
      furigana: "このもんだいはむずかしいです。",
      romaji: "Kono mondai wa muzukashii desu.",
      traducao: "Este problema é difícil.",
    },
  },
  {
    topico: "の中で（のなかで）",
    romaji: "no naka de",
    traducao: "dentro de; entre",
    explicacao:
      "Essa expressão é usada para indicar uma localização ou contexto específico dentro de um grupo ou situação.",
    exemplo: {
      frase: "友達の中で一番背が高いです。",
      furigana: "ともだちのなかでいちばんせがたかいです。",
      romaji: "Tomodachi no naka de ichiban sega takai desu.",
      traducao: "Sou o mais alto entre meus amigos.",
    },
  },
  {
    topico: "のに",
    romaji: "noni",
    traducao: "apesar de; embora",
    explicacao:
      "Essa expressão é usada para indicar uma contradição entre duas situações ou fatos.",
    exemplo: {
      frase: "元気なのに眠いです。",
      furigana: "げんきなのにねむいです。",
      romaji: "Genki na noni nemui desu.",
      traducao: "Embora esteja bem, estou com sono.",
    },
  },
  {
    topico: "のに",
    romaji: "noni",
    traducao: "para; a fim de",
    explicacao:
      "Essa expressão é usada para indicar o propósito ou objetivo de uma ação.",
    exemplo: {
      frase: "お風呂に入るのにお湯を準備しました。",
      furigana: "おふろにはいるのにおゆをじゅんびしました。",
      romaji: "Ofuro ni hairu noni oyu o junbi shimashita.",
      traducao: "Preparei a água quente para tomar banho.",
    },
  },
  {
    topico: "のは〜だ",
    romaji: "no wa ~ da",
    traducao: "o que é ~ é",
    explicacao:
      "Essa construção é usada para explicar ou definir o que algo é.",
    exemplo: {
      frase: "彼女の夢は医者です。",
      furigana: "かのじょのゆめはいしゃです。",
      romaji: "Kanojo no yume wa isha desu.",
      traducao: "O sonho dela é ser médica.",
    },
  },
  {
    topico: "お～ください",
    romaji: "o ~ kudasai",
    traducao: "por favor ~",
    explicacao: "Essa expressão é usada para fazer um pedido de forma educada.",
    exemplo: {
      frase: "お水をください。",
      furigana: "おみずをください。",
      romaji: "O-mizu o kudasai.",
      traducao: "Por favor, me dê água.",
    },
  },
  {
    topico: "お～になる",
    romaji: "o ~ ni naru",
    traducao: "tornar-se ~; ficar ~ (forma respeitosa)",
    explicacao:
      "Essa expressão é usada para indicar que alguém se torna ou fica de uma certa maneira de forma respeitosa.",
    exemplo: {
      frase: "お父さんは先生になりました。",
      furigana: "おとうさんはせんせいになりました。",
      romaji: "Otousan wa sensei ni narimashita.",
      traducao: "Meu pai se tornou professor.",
    },
  },
  {
    topico: "おきに",
    romaji: "oki ni",
    traducao: "a gosto; de acordo com a preferência",
    explicacao:
      "Essa expressão é usada para indicar que algo é feito de acordo com a preferência pessoal.",
    exemplo: {
      frase: "お好きなように選んでください。",
      furigana: "おすきなようにえらんでください。",
      romaji: "O-suki na you ni erande kudasai.",
      traducao: "Por favor, escolha de acordo com a sua preferência.",
    },
  },
  {
    topico: "終わる（おわる）",
    romaji: "owaru",
    traducao: "terminar; acabar",
    explicacao:
      "Esse verbo é usado para indicar o término ou conclusão de uma ação ou evento.",
    exemplo: {
      frase: "仕事が終わったら、映画を見に行きましょう。",
      furigana: "しごとがおわったら、えいがをみにいきましょう。",
      romaji: "Shigoto ga owattara, eiga o mi ni ikimashou.",
      traducao: "Vamos ao cinema depois que o trabalho terminar.",
    },
  },
  {
    topico: "られる",
    romaji: "rareru",
    traducao: "pode ser ~; pode ser feito ~",
    explicacao:
      "Esse verbo na forma passiva é usado para indicar a capacidade ou possibilidade de algo ser feito.",
    exemplo: {
      frase: "この本は日本語で読まれることができます。",
      furigana: "このほんはにほんごでよまれることができます。",
      romaji: "Kono hon wa nihongo de yomareru koto ga dekimasu.",
      traducao: "Este livro pode ser lido em japonês.",
    },
  },
  {
    topico: "らしい",
    romaji: "rashii",
    traducao: "parece; dizem que; aparentemente",
    explicacao:
      "Essa expressão é usada para indicar que algo parece ou é relatado como sendo verdadeiro.",
    exemplo: {
      frase: "彼はとても優しいらしいです。",
      furigana: "かれはとてもやさしいらしいです。",
      romaji: "Kare wa totemo yasashii rashii desu.",
      traducao: "Ele aparentemente é muito gentil.",
    },
  },
  {
    topico: "さ",
    romaji: "sa",
    traducao: "substantivo transformado em adjetivo",
    explicacao:
      "Essa partícula é usada para transformar um substantivo em um adjetivo.",
    exemplo: {
      frase: "楽しいさを感じます。",
      furigana: "たのしいさをかんじます。",
      romaji: "Tanoshii sa o kanjimasu.",
      traducao: "Sinto a diversão.",
    },
  },
  {
    topico: "さっき",
    romaji: "sakki",
    traducao: "há pouco tempo; agora mesmo",
    explicacao:
      "Essa palavra é usada para indicar um curto período de tempo que ocorreu recentemente.",
    exemplo: {
      frase: "さっき友達に会いました。",
      furigana: "さっきともだちにあいました。",
      romaji: "Sakki tomodachi ni aimashita.",
      traducao: "Encontrei meu amigo agora mesmo.",
    },
  },
  {
    topico: "させられる",
    romaji: "saserareru",
    traducao: "ser feito; ser obrigado a fazer",
    explicacao:
      "Esse verbo na forma passiva é usado para indicar que alguém é feito ou obrigado a fazer algo.",
    exemplo: {
      frase: "私は宿題をさせられました。",
      furigana: "わたしはしゅくだいをさせられました。",
      romaji: "Watashi wa shukudai o saseraremashita.",
      traducao: "Fui obrigado a fazer a lição de casa.",
    },
  },
  {
    topico: "させる",
    romaji: "saseru",
    traducao: "fazer alguém fazer; permitir",
    explicacao:
      "Esse verbo é usado para indicar que alguém faz outra pessoa realizar uma ação ou permite que ela a faça.",
    exemplo: {
      frase: "彼は私に手伝わせました。",
      furigana: "かれはわたしにてつだわせました。",
      romaji: "Kare wa watashi ni tetsudawasemashita.",
      traducao: "Ele me fez ajudar.",
    },
  },
  {
    topico: "させてください",
    romaji: "sasete kudasai",
    traducao: "por favor, me permita fazer",
    explicacao:
      "Essa expressão é usada para fazer um pedido educado para permitir que alguém faça algo.",
    exemplo: {
      frase: "電話をさせてください。",
      furigana: "でんわをさせてください。",
      romaji: "Denwa o sasete kudasai.",
      traducao: "Por favor, me permita fazer uma ligação.",
    },
  },
  {
    topico: "さすが",
    romaji: "sasuga",
    traducao: "realmente; de fato",
    explicacao:
      "Essa expressão é usada para expressar admiração ou concordância com as expectativas em relação a alguém ou algo.",
    exemplo: {
      frase: "さすがプロの料理人だけあり、料理がおいしい。",
      furigana: "さすがプロのりょうりにんだけあり、りょうりがおいしい。",
      romaji: "Sasuga puro no ryouri nin dake ari, ryouri ga oishii.",
      traducao:
        "Realmente, como esperado de um chef profissional, a comida é deliciosa.",
    },
  },
  {
    topico: "し",
    romaji: "shi",
    traducao: "e; além disso",
    explicacao: "Essa conjunção é usada para listar várias coisas ou fatos.",
    exemplo: {
      frase: "日本料理はおいしいし、健康に良いです。",
      furigana: "にほんりょうりはおいしいし、けんこうによいです。",
      romaji: "Nihon ryouri wa oishii shi, kenkou ni yoi desu.",
      traducao: "A comida japonesa é deliciosa e saudável.",
    },
  },
  {
    topico: "そんなに",
    romaji: "sonna ni",
    traducao: "tão; tão assim",
    explicacao:
      "Essa expressão é usada para indicar um grau ou quantidade de algo que é surpreendente ou além do esperado.",
    exemplo: {
      frase: "彼はそんなに速く走れるの？",
      furigana: "かれはそんなにはやくはしれるの？",
      romaji: "Kare wa sonna ni hayaku hashireru no?",
      traducao: "Ele consegue correr tão rápido assim?",
    },
  },
  {
    topico: "それでも",
    romaji: "soredemo",
    traducao: "mesmo assim; no entanto",
    explicacao:
      "Essa expressão é usada para indicar uma concessão ou contraste em relação a uma declaração anterior.",
    exemplo: {
      frase: "雨が降っているけど、それでもピクニックに行きます。",
      furigana: "あめがふっているけど、それでもぴくにっくにいきます。",
      romaji: "Ame ga futte iru kedo, soredemo pikunikku ni ikimasu.",
      traducao: "Está chovendo, mas mesmo assim irei ao piquenique.",
    },
  },
  {
    topico: "それに",
    romaji: "sore ni",
    traducao: "além disso; além do mais",
    explicacao:
      "Essa expressão é usada para adicionar informações ou argumentos que reforçam ou complementam uma declaração anterior.",
    exemplo: {
      frase:
        "このレストランは雰囲気が良いし、料理もおいしい。それに、サービスも素晴らしい。",
      furigana:
        "このれすとらんはふんいきがいいし、りょうりもおいしい。それに、さーびすもすばらしい。",
      romaji:
        "Kono resutoran wa fun'iki ga ii shi, ryouri mo oishii. Sore ni, saabisu mo subarashii.",
      traducao:
        "Este restaurante tem uma ótima atmosfera, a comida é deliciosa. Além disso, o serviço é excelente.",
    },
  },
  {
    topico: "そうだ",
    romaji: "sou da",
    traducao: "parece que; ouvi dizer que",
    explicacao:
      "Essa expressão é usada para indicar informações que você ouviu falar ou que parece ser verdade.",
    exemplo: {
      frase: "明日は雨が降るそうです。",
      furigana: "あしたはあめがふるそうです。",
      romaji: "Ashita wa ame ga furu sou desu.",
      traducao: "Parece que vai chover amanhã.",
    },
  },
  {
    topico: "そうに / そうな",
    romaji: "sou ni / sou na",
    traducao: "aparentemente; parecendo",
    explicacao:
      "Essa expressão é usada para indicar uma aparência ou impressão com base em informações visuais ou conhecimento prévio.",
    exemplo: {
      frase: "彼は疲れているそうに見えます。",
      furigana: "かれはつかれているそうにみえます。",
      romaji: "Kare wa tsukarete iru sou ni miemasu.",
      traducao: "Ele parece estar cansado.",
    },
  },
  {
    topico: "たばかり",
    romaji: "ta bakari",
    traducao: "acabou de; recentemente",
    explicacao:
      "Essa expressão é usada para indicar que uma ação ocorreu recentemente ou que algo está em um estado recém-concluído.",
    exemplo: {
      frase: "彼は旅行から帰ったばかりです。",
      furigana: "かれはりょこうからかえったばかりです。",
      romaji: "Kare wa ryokou kara kaetta bakari desu.",
      traducao: "Ele acabou de voltar de uma viagem.",
    },
  },
  {
    topico: "たところ",
    romaji: "ta tokoro",
    traducao: "logo após; imediatamente depois",
    explicacao:
      "Essa expressão é usada para indicar que algo ocorreu imediatamente após outra ação.",
    exemplo: {
      frase: "電話を切ったところで、彼からメッセージが届きました。",
      furigana: "でんわをきったところで、かれからメッセージがとどきました。",
      romaji: "Denwa o kitta tokoro de, kare kara messeeji ga todokimashita.",
      traducao: "Logo depois de desligar o telefone, recebi uma mensagem dele.",
    },
  },
  {
    topico: "他動詞 & 自動詞（たどうし & じどうし）",
    romaji: "tadoushi & jidoushi",
    traducao: "verbos transitivos e intransitivos",
    explicacao:
      "Os verbos em japonês podem ser classificados em dois tipos: transitivos (verbos que requerem um objeto direto) e intransitivos (verbos que não requerem um objeto direto).",
    exemplo: {
      frase: "この本を読みます。",
      furigana: "このほんをよみます。",
      romaji: "Kono hon o yomimasu.",
      traducao: "Eu leio este livro.",
    },
  },
  {
    topico: "たがる",
    romaji: "tagaru",
    traducao: "parecer querer; aparentar desejar",
    explicacao:
      "Esse verbo é usado para indicar que alguém parece querer fazer algo com base em suas expressões ou comportamento.",
    exemplo: {
      frase: "彼は旅行したがっています。",
      furigana: "かれはりょこうしたがっています。",
      romaji: "Kare wa ryokou shitagatte imasu.",
      traducao: "Ele parece querer viajar.",
    },
  },
  {
    topico: "たら",
    romaji: "tara",
    traducao: "se; quando",
    explicacao:
      "Essa partícula é usada para indicar uma condição ou situação hipotética em que uma ação ocorre.",
    exemplo: {
      frase: "お金があったら、旅行に行きたいです。",
      furigana: "おかねがあったら、りょこうにいきたいです。",
      romaji: "Okane ga attara, ryokou ni ikitai desu.",
      traducao: "Se eu tiver dinheiro, quero viajar.",
    },
  },
  {
    topico: "たらどう",
    romaji: "tara dou",
    traducao: "e se; o que acontece se",
    explicacao:
      "Essa expressão é usada para fazer uma pergunta hipotética sobre o que aconteceria em uma determinada situação.",
    exemplo: {
      frase: "お金がなかったらどうしますか？",
      furigana: "おかねがなかったらどうしますか？",
      romaji: "Okane ga nakattara dou shimasu ka?",
      traducao: "O que você faria se não tivesse dinheiro?",
    },
  },
  {
    topico: "たらいいですか",
    romaji: "tara ii desu ka",
    traducao: "o que devo fazer?; o que é melhor fazer?",
    explicacao:
      "Essa expressão é usada para pedir conselhos ou sugestões sobre o que fazer em uma determinada situação.",
    exemplo: {
      frase: "日本での観光は何をすればいいですか？",
      furigana: "にほんでのかんこうはなにをすればいいですか？",
      romaji: "Nihon de no kankou wa nani o sureba ii desu ka?",
      traducao: "O que devo fazer para o turismo no Japão?",
    },
  },
  {
    topico: "て / で",
    romaji: "te / de",
    traducao: "forma -te; meio; com",
    explicacao:
      "A forma -te é usada para conectar verbos ou expressar ações contínuas. A partícula で é usada para indicar meio ou instrumento, ou para indicar a localização onde uma ação ocorre.",
    exemplo: {
      frase: "友達と一緒に映画を見て、レストランで食事しました。",
      furigana:
        "ともだちといっしょにえいがをみて、れすとらんでしょくじしました。",
      romaji:
        "Tomodachi to issho ni eiga o mite, resutoran de shokuji shimashita.",
      traducao:
        "Assisti a um filme com meu amigo e depois comemos em um restaurante.",
    },
  },
  {
    topico: "てあげる",
    romaji: "te ageru",
    traducao:
      "fazer algo por alguém; dar algo a alguém (com atitude de gentileza)",
    explicacao:
      "Essa expressão é usada para indicar que você realiza uma ação em favor de alguém, demonstrando gentileza ou prestatividade.",
    exemplo: {
      frase: "友達に手伝ってあげました。",
      furigana: "ともだちにてつだってあげました。",
      romaji: "Tomodachi ni tetsudatte agemashita.",
      traducao: "Eu ajudei meu amigo.",
    },
  },
  {
    topico: "てほしい",
    romaji: "te hoshii",
    traducao: "querer que alguém faça algo por você",
    explicacao:
      "Essa expressão é usada para indicar que você deseja que alguém faça algo por você.",
    exemplo: {
      frase: "彼に手紙を書いてほしいです。",
      furigana: "かれにてがみをかいてほしいです。",
      romaji: "Kare ni tegami o kaite hoshii desu.",
      traducao: "Eu quero que ele escreva uma carta para mim.",
    },
  },
  {
    topico: "ていく",
    romaji: "te iku",
    traducao: "fazer algo e seguir em frente; continuar fazendo algo no futuro",
    explicacao:
      "Essa expressão é usada para indicar que você faz uma ação e continua a fazê-la no futuro, seguindo em frente.",
    exemplo: {
      frase: "毎日勉強していきます。",
      furigana: "まいにちべんきょうしていきます。",
      romaji: "Mainichi benkyou shite ikimasu.",
      traducao: "Eu vou estudar todos os dias (continuando no futuro).",
    },
  },
  {
    topico: "ていた",
    romaji: "te ita",
    traducao: "estar fazendo algo; ter feito algo (passado)",
    explicacao:
      "Essa forma é usada para indicar uma ação contínua que estava sendo feita no passado ou para indicar que algo foi feito no passado e ainda tem relevância no presente.",
    exemplo: {
      frase: "昨日は友達と買い物をしていた。",
      furigana: "きのうはともだちとかいものをしていた。",
      romaji: "Kinou wa tomodachi to kaimono o shite ita.",
      traducao: "Ontem eu estava fazendo compras com meu amigo.",
    },
  },
  {
    topico: "ていただけませんか",
    romaji: "te itadakemasen ka",
    traducao: "poderia fazer algo por mim? (forma educada)",
    explicacao:
      "Essa expressão é usada para fazer um pedido de forma educada, solicitando que alguém faça algo por você.",
    exemplo: {
      frase: "お手洗いの場所を教えていただけませんか？",
      furigana: "おてあらいのばしょをおしえていただけませんか？",
      romaji: "Otearai no basho o oshiete itadakemasen ka?",
      traducao: "Você poderia me dizer onde fica o banheiro?",
    },
  },
  {
    topico: "てくれる",
    romaji: "te kureru",
    traducao: "alguém faz algo por você; alguém te dá algo",
    explicacao:
      "Essa expressão é usada para indicar que alguém faz algo por você ou te dá algo, mostrando gentileza ou ajuda.",
    exemplo: {
      frase: "友達が私にプレゼントをくれました。",
      furigana: "ともだちがわたしにぷれぜんとをくれました。",
      romaji: "Tomodachi ga watashi ni purezento o kuremashita.",
      traducao: "Meu amigo me deu um presente.",
    },
  },
  {
    topico: "てくる",
    romaji: "te kuru",
    traducao: "vir fazer algo; começar a fazer algo",
    explicacao:
      "Essa expressão é usada para indicar que alguém vem fazer algo ou começa a fazer algo.",
    exemplo: {
      frase: "すぐに助けてくるよ。",
      furigana: "すぐにたすけてくるよ。",
      romaji: "Sugu ni tasukete kuru yo.",
      traducao: "Vou vir te ajudar imediatamente.",
    },
  },
  {
    topico: "てみる",
    romaji: "te miru",
    traducao: "tentar fazer algo; experimentar fazer algo",
    explicacao:
      "Essa expressão é usada para indicar que você está tentando fazer algo ou experimentando fazer algo pela primeira vez.",
    exemplo: {
      frase: "日本料理を作ってみた。",
      furigana: "にほんりょうりをつくってみた。",
      romaji: "Nihon ryouri o tsukutte mita.",
      traducao: "Eu tentei fazer comida japonesa.",
    },
  },
  {
    topico: "てもらう",
    romaji: "te morau",
    traducao: "receber algo de alguém; ter alguém fazer algo por você",
    explicacao:
      "Essa expressão é usada para indicar que você recebe algo de alguém ou tem alguém fazendo algo por você.",
    exemplo: {
      frase: "友達に手紙を書いてもらいました。",
      furigana: "ともだちにてがみをかいてもらいました。",
      romaji: "Tomodachi ni tegami o kaite moraimashita.",
      traducao:
        "Recebi um favor do meu amigo para escrever uma carta para mim.",
    },
  },
  {
    topico: "ておく",
    romaji: "teoku",
    traducao: "fazer algo antecipadamente; deixar algo como está",
    explicacao:
      "Essa expressão é usada para indicar que você faz algo antecipadamente ou deixa algo como está para o futuro.",
    exemplo: {
      frase: "明日のために食べ物を準備しておきました。",
      furigana: "あしたのためにたべものをじゅんびしておきました。",
      romaji: "Ashita no tame ni tabemono o junbi shiteokimashita.",
      traducao: "Preparei comida para amanhã com antecedência.",
    },
  },
  {
    topico: "てしまう / ちゃう",
    romaji: "teshimau / chau",
    traducao: "completar algo inesperadamente; fazer algo completamente",
    explicacao:
      "Essa expressão é usada para indicar que algo é completado inesperadamente ou que algo é feito completamente.",
    exemplo: {
      frase: "雨に濡れてしまった。",
      furigana: "あめにぬれてしまった。",
      romaji: "Ame ni nurete shimatta.",
      traducao: "Acabei me molhando na chuva.",
    },
  },
  {
    topico: "てすみません",
    romaji: "te sumimasen",
    traducao: "desculpe; desculpe-me",
    explicacao:
      "Essa expressão é usada para se desculpar ou pedir desculpas em situações informais.",
    exemplo: {
      frase: "遅くなってすみません。",
      furigana: "おそくなってすみません。",
      romaji: "Osoku natte sumimasen.",
      traducao: "Desculpe pelo atraso.",
    },
  },
  {
    topico: "てやる",
    romaji: "te yaru",
    traducao: "fazer para alguém; fazer de forma rude",
    explicacao:
      "Essa expressão é usada para indicar que você faz algo por alguém de forma rude ou despreocupada.",
    exemplo: {
      frase: "彼に手伝ってやりました。",
      furigana: "かれにてつだってやりました。",
      romaji: "Kare ni tetsudatte yarimashita.",
      traducao: "Eu fiz o favor de ajudar ele.",
    },
  },
  {
    topico: "てよかった",
    romaji: "te yokatta",
    traducao: "que bom que; foi bom que",
    explicacao:
      "Essa expressão é usada para expressar alívio ou satisfação em relação a uma ação passada.",
    exemplo: {
      frase: "電車に乗り遅れなくてよかった。",
      furigana: "でんしゃにのりおくれなくてよかった。",
      romaji: "Densha ni noriokurenakute yokatta.",
      traducao: "Que bom que eu não perdi o trem.",
    },
  },
  {
    topico: "ているところ",
    romaji: "te iru tokoro",
    traducao: "estar fazendo algo; estar no meio de fazer algo",
    explicacao:
      "Essa expressão é usada para indicar que alguém está fazendo algo ou está no meio de fazer algo.",
    exemplo: {
      frase: "友達と電話をしているところです。",
      furigana: "ともだちとでんわをしているところです。",
      romaji: "Tomodachi to denwa o shite iru tokoro desu.",
      traducao: "Estou no meio de uma ligação telefônica com meu amigo.",
    },
  },
  {
    topico: "ても",
    romaji: "te mo",
    traducao: "mesmo que; mesmo se",
    explicacao:
      "Essa conjunção é usada para indicar uma condição ou situação hipotética na qual algo ocorre, mesmo que seja improvável ou contrário à expectativa.",
    exemplo: {
      frase: "雨が降っても出かけます。",
      furigana: "あめがふってもでかけます。",
      romaji: "Ame ga futtemo dekakemasu.",
      traducao: "Vou sair mesmo que esteja chovendo.",
    },
  },
  {
    topico: "と",
    romaji: "to",
    traducao: "e; com; junto com",
    explicacao:
      "A partícula と é usada para conectar substantivos e indicar que algo é feito em conjunto com outra pessoa ou objeto.",
    exemplo: {
      frase: "友達と映画を見ました。",
      furigana: "ともだちとえいがをみました。",
      romaji: "Tomodachi to eiga o mimashita.",
      traducao: "Assisti a um filme com meu amigo.",
    },
  },
  {
    topico: "と言ってもいい（といってもいい）",
    romaji: "to itte mo ii",
    traducao: "pode-se dizer que; pode-se afirmar que",
    explicacao:
      "Essa expressão é usada para indicar que algo pode ser dito ou afirmado com segurança.",
    exemplo: {
      frase: "彼は天才と言ってもいい。",
      furigana: "かれはてんさいといってもいい。",
      romaji: "Kare wa tensai to itte mo ii.",
      traducao: "Pode-se dizer que ele é um gênio.",
    },
  },
  {
    topico: "という",
    romaji: "to iu",
    traducao: "chamado de; chamado de",
    explicacao:
      "Essa expressão é usada para introduzir uma citação ou explicar o que algo é chamado.",
    exemplo: {
      frase: "これは日本の伝統的なお菓子というものです。",
      furigana: "これはにほんのでんとうてきなおかしというものです。",
      romaji: "Kore wa Nihon no dentouteki na okashi to iu mono desu.",
      traducao: "Isso é chamado de doce tradicional japonês.",
    },
  },
  {
    topico: "ということ",
    romaji: "to iu koto",
    traducao: "o que se chama de; o que é chamado de",
    explicacao:
      "Essa expressão é usada para explicar o que é chamado ou o que se chama de algo.",
    exemplo: {
      frase: "彼女はとても優しいということです。",
      furigana: "かのじょはとてもやさしいということです。",
      romaji: "Kanojo wa totemo yasashii to iu koto desu.",
      traducao: "O que se diz é que ela é muito gentil.",
    },
  },
  {
    topico: "と言われている（といわれている）",
    romaji: "to iwarete iru",
    traducao: "diz-se que; é dito que",
    explicacao:
      "Essa expressão é usada para indicar que algo é dito ou alegado por outras pessoas.",
    exemplo: {
      frase: "このレストランは美味しいと言われています。",
      furigana: "このれすとらんはおいしいといわれています。",
      romaji: "Kono resutoran wa oishii to iwareteimasu.",
      traducao: "Dizem que este restaurante é delicioso.",
    },
  },
  {
    topico: "と聞いた（ときいた）",
    romaji: "to kiita",
    traducao: "ouvi dizer que; ouvi falar que",
    explicacao:
      "Essa expressão é usada para relatar informações que você ouviu de outras pessoas.",
    exemplo: {
      frase: "彼は結婚すると聞いた。",
      furigana: "かれはけっこんするときいた。",
      romaji: "Kare wa kekkon suru to kiita.",
      traducao: "Ouvi dizer que ele vai se casar.",
    },
  },
  {
    topico: "と思う（とおもう）",
    romaji: "to omou",
    traducao: "achar que; pensar que",
    explicacao:
      "Essa expressão é usada para expressar suas opiniões, crenças ou pensamentos sobre algo.",
    exemplo: {
      frase: "彼は頭がいいと思います。",
      furigana: "かれはあたまがいいとおもいます。",
      romaji: "Kare wa atama ga ii to omoimasu.",
      traducao: "Acho que ele é inteligente.",
    },
  },
  {
    topico: "とか～とか",
    romaji: "toka ~ toka",
    traducao: "como por exemplo; tais como",
    explicacao:
      "Essa expressão é usada para listar exemplos ou opções não exaustivas.",
    exemplo: {
      frase: "私はフランス語とかスペイン語とか話せます。",
      furigana: "わたしはふらんすごとかすぺいんごとかはなせます。",
      romaji: "Watashi wa Furansu-go toka Supeingo toka hanasemasu.",
      traducao: "Eu posso falar francês, espanhol, entre outros.",
    },
  },
  {
    topico: "ところ",
    romaji: "tokoro",
    traducao: "ponto; momento; lugar",
    explicacao:
      "Essa expressão pode ter diferentes significados dependendo do contexto, como localização, momento específico ou estágio de uma ação.",
    exemplo: {
      frase: "家を出るところです。",
      furigana: "いえをでるところです。",
      romaji: "Ie o deru tokoro desu.",
      traducao: "Estou saindo de casa (neste momento).",
    },
  },
  {
    topico: "続ける（つづける）",
    romaji: "tsuzukeru",
    traducao: "continuar; prosseguir",
    explicacao:
      "Esse verbo é usado para indicar que você continua ou prossegue com uma ação ou atividade.",
    exemplo: {
      frase: "勉強を続けています。",
      furigana: "べんきょうをつづけています。",
      romaji: "Benkyou o tsuzuketeimasu.",
      traducao: "Estou continuando meus estudos.",
    },
  },
  {
    topico: "って",
    romaji: "tte",
    traducao: "dizendo; chamado de",
    explicacao:
      "Essa partícula é usada para citar algo dito por outra pessoa ou para se referir a algo comumente chamado de determinada maneira.",
    exemplo: {
      frase: "友達がそう言っていました。",
      furigana: "ともだちがそういっていました。",
      romaji: "Tomodachi ga sou itte imashita.",
      traducao: "Meu amigo disse isso.",
    },
  },
  {
    topico: "受身形（うけみけい）",
    romaji: "ukemi kei",
    traducao: "forma passiva",
    explicacao:
      "A forma passiva é usada para indicar que a ação é realizada sobre o sujeito, em vez de o sujeito realizar a ação.",
    exemplo: {
      frase: "この本は図書館で借りられます。",
      furigana: "このほんはとしょかんでかりられます。",
      romaji: "Kono hon wa toshokan de kariraremasu.",
      traducao: "Este livro pode ser emprestado na biblioteca.",
    },
  },
  {
    topico: "は〜が… は",
    romaji: "wa ~ ga... wa",
    traducao: "embora; apesar de",
    explicacao:
      "Essa estrutura é usada para expressar uma contradição entre o que é mencionado antes e depois de 'は'.",
    exemplo: {
      frase: "雨は降っていますが、出かけます。",
      furigana: "あめはふっていますが、でかけます。",
      romaji: "Ame wa futteimasu ga, dekakemasu.",
      traducao: "Apesar de estar chovendo, vou sair.",
    },
  },
  {
    topico: "やすい",
    romaji: "yasui",
    traducao: "fácil; barato",
    explicacao:
      "O sufixo やすい é usado para indicar que algo é fácil de fazer ou de baixo custo.",
    exemplo: {
      frase: "この問題は簡単です。",
      furigana: "このもんだいはかんたんです。",
      romaji: "Kono mondai wa kantan desu.",
      traducao: "Este problema é fácil.",
    },
  },
  {
    topico: "やっと",
    romaji: "yatto",
    traducao: "finalmente; por fim",
    explicacao:
      "Essa expressão é usada para indicar que algo desejado ou esperado aconteceu por fim, após um longo tempo ou esforço.",
    exemplo: {
      frase: "やっと休みが来ました。",
      furigana: "やっとやすみがきました。",
      romaji: "Yatto yasumi ga kimashita.",
      traducao: "Finalmente, as férias chegaram.",
    },
  },
  {
    topico: "より",
    romaji: "yori",
    traducao: "do que; comparado a",
    explicacao:
      "A partícula より é usada para fazer comparações, indicando que uma coisa é superior ou inferior a outra.",
    exemplo: {
      frase: "猫より犬の方が大きいです。",
      furigana: "ねこよりいぬのほうがおおきいです。",
      romaji: "Neko yori inu no hou ga ookii desu.",
      traducao: "Os cães são maiores do que os gatos.",
    },
  },
  {
    topico: "予定だ（よていだ）",
    romaji: "yotei da",
    traducao: "estar planejado; estar previsto",
    explicacao:
      "Essa expressão é usada para indicar que algo está planejado ou previsto para acontecer.",
    exemplo: {
      frase: "明日は雨が予定です。",
      furigana: "あしたはあめがよていです。",
      romaji: "Ashita wa ame ga yotei desu.",
      traducao: "Está previsto chover amanhã.",
    },
  },
  {
    topico: "ようだ",
    romaji: "you da",
    traducao: "parecer; parecer que",
    explicacao:
      "Essa expressão é usada para indicar que algo parece ser de uma certa maneira com base nas informações ou impressões disponíveis.",
    exemplo: {
      frase: "彼は疲れているようだ。",
      furigana: "かれはつかれているようだ。",
      romaji: "Kare wa tsukarete iru you da.",
      traducao: "Parece que ele está cansado.",
    },
  },
  {
    topico: "ように / ような",
    romaji: "you ni / you na",
    traducao: "de modo a; como; semelhante a",
    explicacao:
      "Essa expressão é usada para indicar um propósito, objetivo ou semelhança.",
    exemplo: {
      frase: "毎日早く起きるようにしています。",
      furigana: "まいにちはやくおきるようにしています。",
      romaji: "Mainichi hayaku okiru you ni shiteimasu.",
      traducao: "Estou tentando acordar cedo todos os dias.",
    },
  },
  {
    topico: "ようになる",
    romaji: "you ni naru",
    traducao: "começar a; passar a; aprender a",
    explicacao:
      "Essa expressão é usada para indicar que alguém ou algo passa a ter uma nova habilidade, comportamento ou estado.",
    exemplo: {
      frase: "子供が自分で食べるようになりました。",
      furigana: "こどもがじぶんでたべるようになりました。",
      romaji: "Kodomo ga jibun de taberu you ni narimashita.",
      traducao: "A criança aprendeu a comer sozinha.",
    },
  },
  {
    topico: "ようにする",
    romaji: "you ni suru",
    traducao: "fazer um esforço para; tomar cuidado para",
    explicacao: "Essa expressão é usada para indicar que alguém faz um esforço consciente para realizar algo ou tomar cuidado com algo.",
    exemplo: {
      frase: "毎日運動するようにしています。",
      furigana: "まいにちうんどうするようにしています。",
      romaji: "Mainichi undou suru you ni shiteimasu.",
      traducao: "Estou fazendo um esforço para fazer exercícios todos os dias."
    }
  },
  {
    topico: "ようと思う（ようとおもう）",
    romaji: "you to omou",
    traducao: "estar pensando em; estar planejando",
    explicacao: "Essa expressão é usada para indicar que você está pensando em fazer algo ou planejando fazer algo.",
    exemplo: {
      frase: "来週旅行に行こうと思っています。",
      furigana: "らいしゅうりょこうにいこうとおもっています。",
      romaji: "Raishuu ryokou ni ikou to omotteimasu.",
      traducao: "Estou pensando em fazer uma viagem na próxima semana."
    }
  },
  {
    topico: "ぜひ",
    romaji: "zehi",
    traducao: "definitivamente; por todos os meios",
    explicacao: "Essa expressão é usada para enfatizar um forte desejo ou intenção de fazer algo.",
    exemplo: {
      frase: "ぜひパーティーに参加したいです。",
      furigana: "ぜひぱーてぃーにさんかしたいです。",
      romaji: "Zehi paatii ni sankashitai desu.",
      traducao: "Definitivamente quero participar da festa."
    }
  },
  {
    topico: "全然～ない（ぜんぜん～ない）",
    romaji: "zenzen ~ nai",
    traducao: "de modo algum; nada",
    explicacao: "Essa expressão é usada para enfatizar uma negação completa ou uma falta total de algo.",
    exemplo: {
      frase: "彼女は全然分かりません。",
      furigana: "かのじょはぜんぜんわかりません。",
      romaji: "Kanojo wa zenzen wakarimasen.",
      traducao: "Eu não entendo nada dela."
    }
  },
  {
    topico: "づらい",
    romaji: "zurai",
    traducao: "difícil de; complicado de",
    explicacao: "Esse sufixo é usado para expressar que algo é difícil, complicado ou inconveniente.",
    exemplo: {
      frase: "この問題は難しいですね。",
      furigana: "このもんだいはむずかしいですね。",
      romaji: "Kono mondai wa muzukashii desu ne.",
      traducao: "Este problema é difícil, não é?"
    }
  }
];

export default n4GrammarList;
