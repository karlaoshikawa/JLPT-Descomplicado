const n1GrammarList = [
  {
    topico: "いわゆる",
    romaji: "iwayuru",
    traducao: "o chamado; o que é conhecido como",
    explicacao:
      "A expressão いわゆる (iwayuru) é usada para apresentar um termo que é popularmente conhecido ou chamado de determinada maneira, embora possa não ser seu nome oficial ou formal.",
    exemplo: {
      frase: "彼はいわゆる天才と呼ばれています。",
      furigana: "かれはいわゆるてんさいとよばれています。",
      romaji: "Kare wa iwayuru tensai to yobareteimasu.",
      traducao: "Ele é chamado de gênio, por assim dizer.",
    },
  },
  {
    topico: "敢えて（あえて）",
    romaji: "aete",
    traducao: "ousar fazer algo; fazer de propósito",
    explicacao:
      "O termo 敢えて (aete) é usado quando alguém decide fazer algo de propósito, mesmo que seja desafiador ou contra as expectativas.",
    exemplo: {
      frase: "彼は敢えて遅刻した。",
      furigana: "かれはあえてちこくした。",
      romaji: "Kare wa aete chikoku shita.",
      traducao: "Ele ousou chegar atrasado de propósito.",
    },
  },
  {
    topico: "あくまでも",
    romaji: "akuma demo",
    traducao: "a todo custo; a qualquer preço",
    explicacao:
      "A expressão あくまでも (akuma demo) é usada para enfatizar que alguém fará algo até o fim, independentemente das circunstâncias ou dificuldades.",
    exemplo: {
      frase: "彼女はあくまでも勝ちたいと思っている。",
      furigana: "かのじょはあくまでもかちたいとおもっている。",
      romaji: "Kanojo wa akuma demo kachitai to omotteiru.",
      traducao: "Ela está determinada a vencer a qualquer custo.",
    },
  },
  {
    topico: "案の定（あんのじょう）",
    romaji: "an no jou",
    traducao: "como esperado; conforme previsto",
    explicacao:
      "A expressão 案の定 (an no jou) é usada para indicar que algo aconteceu exatamente como era esperado ou previsto.",
    exemplo: {
      frase: "彼は案の定遅刻してきた。",
      furigana: "かれはあんのじょうちこくしてきた。",
      romaji: "Kare wa an no jou chikoku shitekita.",
      traducao: "Ele chegou atrasado, como era de se esperar.",
    },
  },
  {
    topico: "あらかじめ",
    romaji: "arakajime",
    traducao: "antecipadamente; de antemão",
    explicacao:
      "A expressão あらかじめ (arakajime) é usada para se referir a algo que é feito, preparado ou decidido antecipadamente, antes que algo aconteça.",
    exemplo: {
      frase: "詳細はあらかじめお知らせします。",
      furigana: "しょうさいはあらかじめおしらせします。",
      romaji: "Shousai wa arakajime oshirase shimasu.",
      traducao: "Vamos informar os detalhes antecipadamente.",
    },
  },
  {
    topico: "あっての",
    romaji: "atte no",
    traducao: "graças a; devido a",
    explicacao:
      "A expressão あっての (atte no) é usada para indicar que algo é possível ou tem valor devido a uma determinada condição ou circunstância.",
    exemplo: {
      frase: "彼女は経験あっての意見を述べた。",
      furigana: "かのじょはけいけんあってのいけんをのべた。",
      romaji: "Kanojo wa keiken atte no iken o nobeta.",
      traducao: "Ela expressou sua opinião com base em sua experiência.",
    },
  },
  {
    topico: "ばこそ",
    romaji: "bakoso",
    traducao: "justamente porque; exatamente por isso",
    explicacao:
      "A expressão ばこそ (bakoso) é usada para enfatizar que algo é verdadeiro ou acontece exatamente por causa de uma determinada razão ou condição.",
    exemplo: {
      frase: "彼女は努力したばこそ成功したのだ。",
      furigana: "かのじょはどりょくしたばこそのせいこうしたのだ。",
      romaji: "Kanojo wa doryoku shita bakoso seikou shita no da.",
      traducao: "Ela teve sucesso justamente porque se esforçou.",
    },
  },
  {
    topico: "ばそれまでだ / たらそれまでだ",
    romaji: "ba sore made da / tara sore made da",
    traducao: "se for o caso, é só isso",
    explicacao:
      "A expressão ばそれまでだ (ba sore made da) ou たらそれまでだ (tara sore made da) é usada para indicar que, se uma determinada condição ou circunstância ocorrer, não haverá outra opção além de aceitá-la ou lidar com ela.",
    exemplo: {
      frase: "明日雨が降るなら、ピクニックはばそれまでだ。",
      furigana: "あしたあめがふるなら、ぴくにっくはばそれまでだ。",
      romaji: "Ashita ame ga furu nara, pikunikku wa ba sore made da.",
      traducao: "Se chover amanhã, o piquenique é só isso.",
    },
  },
  {
    topico: "べからず / べからざる",
    romaji: "bekarazu / bekarazaru",
    traducao: "não se deve; não é permitido",
    explicacao:
      "A expressão べからず (bekarazu) ou べからざる (bekarazaru) é usada para indicar que algo não é permitido ou não deve ser feito.",
    exemplo: {
      frase: "ここでは喫煙べからずです。",
      furigana: "ここではきつえんべからずです。",
      romaji: "Koko de wa kitsuen bekarazu desu.",
      traducao: "Não é permitido fumar aqui.",
    },
  },
  {
    topico: "べく",
    romaji: "beku",
    traducao: "com o objetivo de; a fim de",
    explicacao:
      "A partícula べく (beku) é usada para indicar o propósito, a intenção ou a finalidade de uma ação.",
    exemplo: {
      frase: "努力を重ねるべく頑張ります。",
      furigana: "どりょくをかさねるべくがんばります。",
      romaji: "Doryoku o kasaneru beku ganbarimasu.",
      traducao: "Vou me esforçar com o objetivo de me aprimorar.",
    },
  },
  {
    topico: "べくもない",
    romaji: "beku mo nai",
    traducao: "ser impossível; não ter como",
    explicacao:
      "A expressão べくもない (beku mo nai) é usada para indicar que algo é impossível de ser realizado ou que não há como fazer algo.",
    exemplo: {
      frase: "彼にはそれを理解するべくもない。",
      furigana: "かれにはそれをりかいするべくもない。",
      romaji: "Kare ni wa sore o rikai suru beku mo nai.",
      traducao: "É impossível para ele entender isso.",
    },
  },
  {
    topico: "べくして",
    romaji: "beku shite",
    traducao: "naturalmente; inevitavelmente",
    explicacao:
      "A expressão べくして (beku shite) é usada para indicar que algo aconteceu como era esperado ou inevitável com base em uma determinada condição ou circunstância.",
    exemplo: {
      frase: "彼は努力を続けたべくして成功した。",
      furigana: "かれはどりょくをつづけたべくしてせいこうした。",
      romaji: "Kare wa doryoku o tsuzuketa beku shite seikou shita.",
      traducao:
        "Ele teve sucesso porque continuou se esforçando, como era esperado.",
    },
  },
  {
    topico: "びる / びて / びた",
    romaji: "biru / bite / bita",
    traducao: "ficar surpreso(a); ficar impressionado(a)",
    explicacao:
      "Os verbos びる (biru), びて (bite) e びた (bita) são usados para expressar a sensação de ficar surpreso(a) ou impressionado(a) com algo.",
    exemplo: {
      frase: "彼のパフォーマンスにはびっくりした。",
      furigana: "かれのぱふぉーまんすにはびっくりした。",
      romaji: "Kare no pafōmansu ni wa bikkuri shita.",
      traducao: "Fiquei impressionado(a) com a performance dele.",
    },
  },
  {
    topico: "ぶり / っぷり",
    romaji: "buri / ppuri",
    traducao: "estilo; jeito; comportamento",
    explicacao:
      "Os sufixos ぶり (buri) ou っぷり (ppuri) são usados para descrever o estilo, jeito ou comportamento característico de uma pessoa.",
    exemplo: {
      frase: "彼は子供っぽいぶりが可愛い。",
      furigana: "かれはこどもっぽいぶりがかわいい。",
      romaji: "Kare wa kodomoppoi buri ga kawaii.",
      traducao: "O jeito infantil dele é fofo.",
    },
  },
  {
    topico: "ぶる / ぶって / ぶった",
    romaji: "buru / butte / butta",
    traducao: "fingir; agir como se; comportar-se como",
    explicacao:
      "Os verbos ぶる (buru), ぶって (butte) e ぶった (butta) são usados para expressar a ação de fingir, agir como se ou comportar-se como algo ou alguém.",
    exemplo: {
      frase: "彼は大人ぶっているけど実はまだ若い。",
      furigana: "かれはおとなぶっているけどじつはまだわかい。",
      romaji: "Kare wa otona butteiru kedo jitsu wa mada wakai.",
      traducao: "Ele está agindo como um adulto, mas na verdade ainda é jovem.",
    },
  },
  {
    topico: "だに / だにしない",
    romaji: "da ni / da ni shinai",
    traducao: "nem sequer; nem ao menos",
    explicacao:
      "A expressão だに (da ni) é usada para indicar que algo não acontece nem sequer uma vez, ou seja, é uma negação forte. Quando seguida por しない (shinai), enfatiza que algo não é feito nem ao menos uma vez.",
    exemplo: {
      frase: "彼女は一度だに笑わなかった。",
      furigana: "かのじょはいちどだにわらなかった。",
      romaji: "Kanojo wa ichido da ni waranakatta.",
      traducao: "Ela nem ao menos sorriu uma vez.",
    },
  },
  {
    topico: "だの～だの",
    romaji: "da no ~ da no",
    traducao: "como ~ e ~; tais como ~ e ~",
    explicacao:
      "A expressão だの (da no) é usada para listar exemplos ou coisas específicas, dando a ideia de 'como' ou 'tais como'. Pode ser repetida várias vezes para listar diferentes elementos.",
    exemplo: {
      frase: "店ではりんごだの、みかんだのが売られている。",
      furigana: "みせではりんごだの、みかんだのがうられている。",
      romaji: "Mise de wa ringo da no, mikan da no ga urarete iru.",
      traducao: "Na loja, estão à venda coisas como maçãs e tangerinas.",
    },
  },
  {
    topico: "だろうに",
    romaji: "darou ni",
    traducao: "apesar de ser; embora seja",
    explicacao:
      "A expressão だろうに (darou ni) é usada para expressar desapontamento, frustração ou indignação em relação à discrepância entre o que é esperado ou óbvio e a realidade.",
    exemplo: {
      frase: "彼は勉強しないだろうに試験でいい点を取った。",
      furigana: "かれはべんきょうしないだろうにしけんでいいてんをとった。",
      romaji: "Kare wa benkyou shinai darou ni shiken de ii ten o totta.",
      traducao: "Embora ele não estude, obteve uma boa nota no exame.",
    },
  },
  {
    topico: "であれ / であろうと",
    romaji: "de are / de arou to",
    traducao: "seja ~ ou; mesmo que seja ~",
    explicacao:
      "A expressão であれ (de are) ou であろうと (de arou to) é usada para expressar que uma condição é verdadeira ou aplicável, independentemente de qual opção ou circunstância seja escolhida.",
    exemplo: {
      frase: "雨であれ雪であれ、出かけなければならない。",
      furigana: "あめであれゆきであれ、でかけなければならない。",
      romaji: "Ame de are yuki de are, dekakenakereba naranai.",
      traducao: "Seja chuva ou neve, tenho que sair.",
    },
  },
  {
    topico: "であれ～であれ",
    romaji: "de are ~ de are",
    traducao: "seja ~ ou ~; tanto ~ quanto ~",
    explicacao:
      "A expressão であれ～であれ (de are ~ de are) é usada para enfatizar que algo é válido ou aplicável, não importa qual opção ou elemento específico seja escolhido.",
    exemplo: {
      frase: "果物であれ野菜であれ、健康に良い。",
      furigana: "くだものであれやさいであれ、けんこうによい。",
      romaji: "Kudamono de are yasai de are, kenkou ni yoi.",
      traducao: "Seja fruta ou vegetal, é bom para a saúde.",
    },
  },
  {
    topico: "でもあり～でもある",
    romaji: "demo ari ~ demo aru",
    traducao: "ser um pouco ~; ser também ~",
    explicacao:
      "A expressão でもあり～でもある (demo ari ~ demo aru) é usada para descrever algo que é um pouco ou também uma determinada característica ou qualidade.",
    exemplo: {
      frase: "彼は天才でもあり、努力家でもある。",
      furigana: "かれはてんさいでもあり、どりょくかでもある。",
      romaji: "Kare wa tensai demo ari, doryokuka demo aru.",
      traducao: "Ele é um pouco gênio e também trabalhador.",
    },
  },
  {
    topico: "でも何でもない / くも何ともない",
    romaji: "demo nan demo nai / kumo nan to mo nai",
    traducao: "não ser nada especial; não ser nada em particular",
    explicacao:
      "As expressões でも何でもない (demo nan demo nai) ou くも何ともない (kumo nan to mo nai) são usadas para enfatizar que algo não é nada especial ou não tem nenhum valor ou importância particular.",
    exemplo: {
      frase: "この本はただの小説でも何でもない。",
      furigana: "このほんはただのしょうせつでもなんでもない。",
      romaji: "Kono hon wa tada no shousetsu demo nan demo nai.",
      traducao: "Este livro não é nada mais do que uma mera história.",
    },
  },
  {
    topico: "でなくてなんだろう",
    romaji: "de nakute nan darou",
    traducao: "não ser ~; se não for ~, o que seria?",
    explicacao:
      "A expressão でなくてなんだろう (de nakute nan darou) é usada para expressar dúvida ou incerteza em relação à descrição ou categorização de algo, sugerindo a necessidade de uma alternativa ou explicação adequada.",
    exemplo: {
      frase: "彼女はただの友達でなくてなんだろう？",
      furigana: "かのじょはただのともだちでなくてなんだろう？",
      romaji: "Kanojo wa tada no tomodachi de nakute nan darou?",
      traducao: "O que ela é, se não apenas uma amiga?",
    },
  },
  {
    topico: "ではあるまいか",
    romaji: "de wa aru mai ka",
    traducao: "será que não é ~?; pode não ser ~?",
    explicacao:
      "A expressão ではあるまいか (de wa aru mai ka) é usada para fazer uma pergunta retórica ou sugerir que algo é possível ou provável.",
    exemplo: {
      frase: "彼の言うことは本当ではあるまいか？",
      furigana: "かれのいうことはほんとうではあるまいか？",
      romaji: "Kare no iu koto wa hontou de wa aru mai ka?",
      traducao: "Será que o que ele diz não é verdade?",
    },
  },
  {
    topico: "ではあるまいし",
    romaji: "de wa aru mai shi",
    traducao: "não ser ~; além disso, não ser ~",
    explicacao:
      "A expressão ではあるまいし (de wa aru mai shi) é usada para negar ou enfatizar que algo não é verdade ou não é aplicável, além de destacar outras razões para isso.",
    exemplo: {
      frase: "彼は勉強もしないではあるまいし、努力もしない。",
      furigana: "かれはべんきょうもしないではあるまいし、どりょくもしない。",
      romaji: "Kare wa benkyou mo shinai de wa aru mai shi, doryoku mo shinai.",
      traducao: "Além de não estudar, ele também não se esforça.",
    },
  },
  {
    topico: "では済まない（ではすまない）",
    romaji: "de wa sumanai",
    traducao: "não ser suficiente; não se resolver apenas com ~",
    explicacao:
      "A expressão では済まない (de wa sumanai) é usada para expressar que algo não pode ser resolvido ou solucionado apenas com uma ação ou medida.",
    exemplo: {
      frase: "謝罪だけでは済まない。",
      furigana: "しゃざいだけではすまない。",
      romaji: "Shazai dake de wa sumanai.",
      traducao: "Desculpar-se não é suficiente.",
    },
  },
  {
    topico: "どうにも～ない",
    romaji: "dou ni mo ~ nai",
    traducao: "não importa o que ~; de forma alguma ~",
    explicacao:
      "A expressão どうにも～ない (dou ni mo ~ nai) é usada para expressar que não importa o que seja feito ou tentado, algo não é possível ou não pode ser mudado.",
    exemplo: {
      frase: "どうにも気持ちが晴れない。",
      furigana: "どうにもきもちがはれない。",
      romaji: "Dou ni mo kimochi ga hare nai.",
      traducao: "Não importa o que eu faça, não consigo me sentir melhor.",
    },
  },
  {
    topico: "が早いか（がはやいか）",
    romaji: "ga hayai ka",
    traducao: "assim que ~; logo que ~",
    explicacao:
      "A expressão が早いか (ga hayai ka) é usada para descrever uma ação que ocorre imediatamente após outra, indicando um intervalo de tempo muito curto entre as ações.",
    exemplo: {
      frase: "彼は家に帰るが早いか、ゲームを始めた。",
      furigana: "かれはいえにかえるがはやいか、げーむをはじめた。",
      romaji: "Kare wa ie ni kaeru ga hayai ka, geemu o hajimeta.",
      traducao: "Assim que ele chegou em casa, começou a jogar.",
    },
  },
  {
    topico: "が/も～なら、～も～だ",
    romaji: "ga/mo ~ nara, ~ mo ~ da",
    traducao: "se ~, então ~ também ~",
    explicacao:
      "A expressão が/も～なら、～も～だ (ga/mo ~ nara, ~ mo ~ da) é usada para expressar que, se uma determinada condição for verdadeira, então outra condição também será verdadeira.",
    exemplo: {
      frase: "彼が言うなら、それも本当だ。",
      furigana: "かれがいうなら、それもほんとうだ。",
      romaji: "Kare ga iu nara, sore mo hontou da.",
      traducao: "Se ele diz, então isso também é verdade.",
    },
  },
  {
    topico: "がましい",
    romaji: "gamashii",
    traducao: "presunçoso; pretensioso",
    explicacao:
      "A expressão がましい (gamashii) é usada para descrever alguém que é presunçoso ou exagera em suas ações ou atitudes.",
    exemplo: {
      frase: "彼の態度はがましい。",
      furigana: "かれのたいどはがましい。",
      romaji: "Kare no taido wa gamashii.",
      traducao: "Atitude dele é presunçosa.",
    },
  },
  {
    topico: "がてら",
    romaji: "gatera",
    traducao: "ao fazer ~; enquanto ~",
    explicacao:
      "A expressão がてら (gatera) é usada para indicar que, enquanto se faz uma determinada ação, também se realiza outra ação simultaneamente.",
    exemplo: {
      frase: "散歩がてら買い物に行った。",
      furigana: "さんぽがてらかいものにいった。",
      romaji: "Sanpo gatera kaimono ni itta.",
      traducao: "Fui fazer compras enquanto dava um passeio.",
    },
  },
  {
    topico: "ごとき / ごとく / ごとし",
    romaji: "gotoki / gotoku / gotoshi",
    traducao: "como ~; tal como ~; similar a ~",
    explicacao:
      "As expressões ごとき (gotoki), ごとく (gotoku) e ごとし (gotoshi) são usadas para expressar que algo é semelhante a algo ou alguém.",
    exemplo: {
      frase: "彼の言葉などごときは信じない。",
      furigana: "かれのことばなどごときはしんじない。",
      romaji: "Kare no kotoba nado gotoki wa shinjinai.",
      traducao: "Não acredito em palavras como as dele.",
    },
  },
  {
    topico: "ぐるみ",
    romaji: "gurumi",
    traducao: "incluir tudo; envolver completamente",
    explicacao:
      "A expressão ぐるみ (gurumi) é usada para descrever que algo inclui ou envolve completamente tudo dentro de um grupo, categoria ou escopo.",
    exemplo: {
      frase: "この問題は経済ぐるみで考えなければならない。",
      furigana: "このもんだいはけいざいぐるみでかんがえなければならない。",
      romaji: "Kono mondai wa keizai gurumi de kangaenakereba naranai.",
      traducao:
        "Este problema deve ser considerado levando em conta todos os aspectos econômicos.",
    },
  },
  {
    topico: "羽目になる（はめになる）",
    romaji: "hame ni naru",
    traducao: "se meter em apuros; ficar em uma situação difícil",
    explicacao:
      "A expressão 羽目になる (hame ni naru) é usada para descrever o ato de se envolver em uma situação difícil, problemática ou embaraçosa.",
    exemplo: {
      frase: "彼はその事件に関わって羽目になった。",
      furigana: "かれはそのじけんにかかわってはめになった。",
      romaji: "Kare wa sono jiken ni kakawatte hame ni natta.",
      traducao: "Ele se meteu em apuros se envolvendo naquele incidente.",
    },
  },
  {
    topico: "ほどのことではない",
    romaji: "hodo no koto de wa nai",
    traducao: "não ser tão ~; não ser algo tão grave",
    explicacao:
      "A expressão ほどのことではない (hodo no koto de wa nai) é usada para expressar que algo não é tão ~ ou não é algo tão grave quanto pode parecer.",
    exemplo: {
      frase: "あの失敗はほどのことではない。",
      furigana: "あのしっぱいはほどのことではない。",
      romaji: "Ano shippai wa hodo no koto de wa nai.",
      traducao: "Aquela falha não é algo tão grave.",
    },
  },
  {
    topico: "ほうがましだ",
    romaji: "hou ga mashi da",
    traducao: "ser preferível; ser melhor do que",
    explicacao:
      "A expressão ほうがましだ (hou ga mashi da) é usada para expressar que algo é preferível ou melhor do que outra coisa.",
    exemplo: {
      frase: "遅刻したけど、来ないほうがましだ。",
      furigana: "ちこくしたけど、こないほうがましだ。",
      romaji: "Chikoku shita kedo, konai hou ga mashi da.",
      traducao: "Embora eu tenha me atrasado, é melhor do que não vir.",
    },
  },
  {
    topico: "放題（ほうだい）",
    romaji: "houdai",
    traducao: "à vontade; à vontade para ~",
    explicacao:
      "A expressão 放題 (houdai) é usada para indicar que algo pode ser feito ou consumido livremente, sem restrições ou limitações.",
    exemplo: {
      frase: "食べ放題のレストランに行きたい。",
      furigana: "たべほうだいのレストランにいきたい。",
      romaji: "Tabehoudai no resutoran ni ikitai.",
      traducao: "Quero ir a um restaurante de comida à vontade.",
    },
  },
  {
    topico: "いかんだ / いかんでは / いかんによっては",
    romaji: "ikan da / ikan de wa / ikan ni yotte wa",
    traducao: "dependendo da situação; dependendo das circunstâncias",
    explicacao:
      "As expressões いかんだ (ikan da), いかんでは (ikan de wa) e いかんによっては (ikan ni yotte wa) são usadas para indicar que algo pode variar ou depender da situação ou circunstâncias específicas.",
    exemplo: {
      frase: "結果はいかんによっては変わるかもしれない。",
      furigana: "けっかはいかんによってはかわるかもしれない。",
      romaji: "Kekka wa ikan ni yotte wa kawaru kamoshirenai.",
      traducao: "O resultado pode variar dependendo das circunstâncias.",
    },
  },
  {
    topico: "いかんにかかわらず / いかんによらず / いかんをとわず",
    romaji: "ikan ni kakawarazu / ikan ni yorazu / ikan o towazu",
    traducao: "independentemente; sem importar; não importa ~",
    explicacao:
      "As expressões いかんにかかわらず (ikan ni kakawarazu), いかんによらず (ikan ni yorazu) e いかんをとわず (ikan o towazu) são usadas para indicar que algo não é afetado ou não importa a situação, circunstâncias ou condição.",
    exemplo: {
      frase: "天候のいかんにかかわらず、イベントは開催されます。",
      furigana: "てんこうのいかんにかかわらず、イベントはかいさいされます。",
      romaji: "Tenkou no ikan ni kakawarazu, ibento wa kaisai saremasu.",
      traducao:
        "O evento será realizado independentemente das condições climáticas.",
    },
  },
  {
    topico: "いかなる",
    romaji: "ikanaru",
    traducao: "qualquer; de qualquer tipo",
    explicacao:
      "A expressão いかなる (ikanaru) é usada para indicar que algo é de qualquer tipo ou forma, independentemente das características específicas.",
    exemplo: {
      frase: "いかなる状況においても冷静でいなければならない。",
      furigana: "いかなるじょうきょうにおいてもれいせいでいなければならない。",
      romaji: "Ikanaru joukyou ni oite mo reisei de inakereba naranai.",
      traducao: "Devemos ser calmos em qualquer situação.",
    },
  },
  {
    topico: "いかに",
    romaji: "ikani",
    traducao: "de que maneira; como",
    explicacao:
      "A expressão いかに (ikani) é usada para perguntar ou expressar sobre a maneira ou método de algo.",
    exemplo: {
      frase: "いかにして成功するか、計画を立てなければならない。",
      furigana: "いかにしてせいこうするか、けいかくをたてなければならない。",
      romaji: "Ikani shite seikou suru ka, keikaku o tatenakereba naranai.",
      traducao: "Devemos fazer um plano sobre como ter sucesso.",
    },
  },
  {
    topico: "いかにも",
    romaji: "ikanimo",
    traducao: "realmente; de fato; verdadeiramente",
    explicacao:
      "A expressão いかにも (ikanimo) é usada para enfatizar que algo é realmente, de fato ou verdadeiramente como se espera.",
    exemplo: {
      frase: "彼はいかにも天才だ。",
      furigana: "かれはいかにもてんさいだ。",
      romaji: "Kare wa ikanimo tensai da.",
      traducao: "Ele é verdadeiramente um gênio.",
    },
  },
  {
    topico: "いずれにしても / いずれにしろ / いずれにせよ",
    romaji: "izure ni shitemo / izure ni shiro / izure ni seyo",
    traducao: "de qualquer forma; seja como for; em todo caso",
    explicacao:
      "As expressões いずれにしても (izure ni shitemo), いずれにしろ (izure ni shiro) e いずれにせよ (izure ni seyo) são usadas para indicar que, independentemente da situação ou circunstâncias, algo é válido ou verdadeiro.",
    exemplo: {
      frase: "いずれにしても、計画を立てる必要がある。",
      furigana: "いずれにしても、けいかくをたてるひつようがある。",
      romaji: "Izure ni shitemo, keikaku o tateru hitsuyou ga aru.",
      traducao: "De qualquer forma, é necessário fazer um plano.",
    },
  },
  {
    topico: "じみた",
    romaji: "jimita",
    traducao: "modesto; simples; comum",
    explicacao:
      "A expressão じみた (jimita) é usada para descrever algo que é modesto, simples ou comum.",
    exemplo: {
      frase: "彼はじみた生活を送っている。",
      furigana: "かれはじみたせいかつをおくっている。",
      romaji: "Kare wa jimita seikatsu o okutte iru.",
      traducao: "Ele leva uma vida simples.",
    },
  },
  {
    topico: "か否か（かいなか）",
    romaji: "ka inaka",
    traducao: "se ~ ou não; se é o caso ou não",
    explicacao:
      "A expressão か否か (ka inaka) é usada para expressar dúvida ou incerteza sobre se algo é verdadeiro ou não.",
    exemplo: {
      frase: "その情報は真実か否か確認しなければならない。",
      furigana: "そのじょうほうはしんじつかいなかかくにんしなければならない。",
      romaji: "Sono jouhou wa shinjitsu ka inaka kakunin shinakereba naranai.",
      traducao: "Devemos verificar se aquela informação é verdadeira ou não.",
    },
  },
  {
    topico: "かと思いきや（かとおもいきや）",
    romaji: "ka to omoikiya",
    traducao: "pensar que ~, mas na verdade ~; pensar que ~, mas aconteceu ~",
    explicacao:
      "A expressão かと思いきや (ka to omoikiya) é usada para descrever uma situação em que algo inesperado acontece, apesar do que se esperava inicialmente.",
    exemplo: {
      frase: "晴れるかと思いきや、雨が降り始めた。",
      furigana: "はれるかとおもいきや、あめがふりはじめた。",
      romaji: "Hareru ka to omoikiya, ame ga furihajimeta.",
      traducao: "Pensei que ia fazer sol, mas começou a chover.",
    },
  },
  {
    topico: "限りだ（かぎりだ）",
    romaji: "kagiri da",
    traducao: "ser extremamente ~; ser o máximo ~",
    explicacao:
      "A expressão 限りだ (kagiri da) é usada para expressar que algo é extremamente ~ ou é o máximo ~ em termos de qualidade, quantidade, etc.",
    exemplo: {
      frase: "喜びの限りだ。",
      furigana: "よろこびのかぎりだ。",
      romaji: "Yorokobi no kagiri da.",
      traducao: "É alegria em seu máximo.",
    },
  },
  {
    topico: "甲斐もなく（かいもなく）",
    romaji: "kai mo naku",
    traducao: "sem valer a pena; sem resultado",
    explicacao:
      "A expressão 甲斐もなく (kai mo naku) é usada para expressar que algo não vale a pena ou não tem resultado.",
    exemplo: {
      frase: "一生懸命頑張ったけれど、甲斐もなく失敗した。",
      furigana: "いっしょうけんめいがんばったけれど、かいもなくしっぱいした。",
      romaji: "Isshoukenmei ganbatta keredo, kai mo naku shippai shita.",
      traducao: "Mesmo tendo se esforçado muito, não valeu a pena e falhou.",
    },
  },
  {
    topico: "可能性がある（かのうせいがある）",
    romaji: "kanousei ga aru",
    traducao: "haver possibilidade; ser possível",
    explicacao:
      "A expressão 可能性がある (kanousei ga aru) é usada para expressar que há uma possibilidade ou é possível que algo aconteça ou seja verdadeiro.",
    exemplo: {
      frase: "彼が勝つ可能性がある。",
      furigana: "かれがかつかのうせいがある。",
      romaji: "Kare ga katsu kanousei ga aru.",
      traducao: "Há possibilidade dele vencer.",
    },
  },
  {
    topico: "からある / からする / からの",
    romaji: "kara aru / kara suru / kara no",
    traducao: "baseado em ~; devido a ~; por causa de ~",
    explicacao:
      "As expressões からある (kara aru), からする (kara suru) e からの (kara no) são usadas para expressar que algo é baseado em algo, devido a algo ou por causa de algo.",
    exemplo: {
      frase: "彼の発言からすると、彼は怒っているようだ。",
      furigana: "かれのはつげんからすると、かれはおこっているようだ。",
      romaji: "Kare no hatsugen kara suru to, kare wa okotte iru you da.",
      traducao: "Com base no que ele disse, parece que ele está zangado.",
    },
  },
  {
    topico: "かれ～かれ",
    romaji: "kare ~ kare",
    traducao: "alguns ~; uns ~; uns ~ e outros ~",
    explicacao:
      "A expressão かれ～かれ (kare ~ kare) é usada para indicar que há vários exemplos, situações ou pessoas que são mencionados, onde cada um deles tem características semelhantes.",
    exemplo: {
      frase: "かれにかれに批判の声が上がった。",
      furigana: "かれにかれにひはんのこえがあがった。",
      romaji: "Kare ni kare ni hihan no koe ga agatta.",
      traducao: "Críticas surgiram sobre alguns e outros.",
    },
  },
  {
    topico: "かたがた",
    romaji: "katagata",
    traducao: "ao mesmo tempo que ~; enquanto ~",
    explicacao:
      "A expressão かたがた (katagata) é usada para indicar que algo acontece ou é feito ao mesmo tempo que outra ação ou evento.",
    exemplo: {
      frase: "結婚式のご祝儀とかたがた、プレゼントを贈りました。",
      furigana:
        "けっこんしきのごしゅうぎとかたがた、プレゼントをおくりました。",
      romaji: "Kekkonshiki no go-shugi to katagata, purezento o okurimashita.",
      traducao:
        "Enquanto parabenizava pelo casamento, também enviei um presente.",
    },
  },
  {
    topico: "かたわら",
    romaji: "katawara",
    traducao: "enquanto ~; além de ~",
    explicacao:
      "A expressão かたわら (katawara) é usada para indicar que algo é feito ou acontece ao mesmo tempo que outra atividade ou situação.",
    exemplo: {
      frase: "勉強のかたわら、アルバイトをしています。",
      furigana: "べんきょうのかたわら、アルバイトをしています。",
      romaji: "Benkyou no katawara, arubaito o shiteimasu.",
      traducao: "Além de estudar, também trabalho meio período.",
    },
  },
  {
    topico: "かつて",
    romaji: "katsute",
    traducao: "uma vez; antigamente",
    explicacao:
      "A expressão かつて (katsute) é usada para se referir a algo que aconteceu no passado, antigamente ou em algum momento específico no passado.",
    exemplo: {
      frase: "かつてはこの地域に住んでいました。",
      furigana: "かつてはこのちいきにすんでいました。",
      romaji: "Katsute wa kono chiiki ni sunde imashita.",
      traducao: "Eu morava nesta região antigamente.",
    },
  },
  {
    topico: "嫌いがある（きらいがある）",
    romaji: "kirai ga aru",
    traducao: "ter aversão a ~; não gostar de ~",
    explicacao:
      "A expressão 嫌いがある (kirai ga aru) é usada para expressar que alguém tem aversão ou não gosta de algo.",
    exemplo: {
      frase: "彼には犬が嫌いがあります。",
      furigana: "かれにはいぬがきらいがあります。",
      romaji: "Kare ni wa inu ga kirai ga arimasu.",
      traducao: "Ele tem aversão a cachorros.",
    },
  },
  {
    topico: "切りがない（きりがない）",
    romaji: "kiri ga nai",
    traducao: "ser interminável; não ter fim",
    explicacao:
      "A expressão 切りがない (kiri ga nai) é usada para descrever algo que é interminável ou não tem fim.",
    exemplo: {
      frase: "この仕事は切りがない。",
      furigana: "このしごとはきりがない。",
      romaji: "Kono shigoto wa kiri ga nai.",
      traducao: "Este trabalho não tem fim.",
    },
  },
  {
    topico: "きっての",
    romaji: "kitte no",
    traducao: "o melhor; o mais famoso",
    explicacao:
      "A expressão きっての (kitte no) é usada para descrever algo que é o melhor ou o mais famoso em sua categoria.",
    exemplo: {
      frase: "彼はきってのピアニストです。",
      furigana: "かれはきってのピアニストです。",
      romaji: "Kare wa kitte no pianisuto desu.",
      traducao: "Ele é o pianista mais famoso.",
    },
  },
  {
    topico: "極まる / 極まりない（きわまる / きわまりない）",
    romaji: "kiwamaru / kiwamari nai",
    traducao: "atingir o máximo; extremamente",
    explicacao:
      "As expressões 極まる (kiwamaru) e 極まりない (kiwamari nai) são usadas para descrever algo que atingiu o máximo ou é extremamente intenso.",
    exemplo: {
      frase: "彼の無礼さには極まりない。",
      furigana: "かれのぶれいさにはきわまりない。",
      romaji: "Kare no burei-sa ni wa kiwamari nai.",
      traducao: "A falta de educação dele é extrema.",
    },
  },
  {
    topico: "こそあれ",
    romaji: "koso are",
    traducao: "embora ~; apesar de ~",
    explicacao:
      "A expressão こそあれ (koso are) é usada para introduzir uma ideia oposta ou contraditória a algo mencionado anteriormente.",
    exemplo: {
      frase: "彼は積極的な人で、こそあれ人見知りもする。",
      furigana: "かれはせっきょくてきなひとで、こそあれひとみしりもする。",
      romaji: "Kare wa sekkyokuteki na hito de, koso are hitomishiri mo suru.",
      traducao: "Ele é uma pessoa extrovertida, embora também seja tímido.",
    },
  },
  {
    topico: "こそすれ",
    romaji: "koso sure",
    traducao: "embora ~; mesmo que ~",
    explicacao:
      "A expressão こそすれ (koso sure) é usada para introduzir uma ideia oposta ou contraditória a algo mencionado anteriormente.",
    exemplo: {
      frase: "彼は忙しいことこそすれ、手伝ってくれる。",
      furigana: "かれはいそがしいことこそすれ、てつだってくれる。",
      romaji: "Kare wa isogashii koto koso sure, tetsudatte kureru.",
      traducao: "Mesmo que ele esteja ocupado, ele me ajuda.",
    },
  },
  {
    topico: "こそ「～が・けれど」",
    romaji: "koso「~ga / keredo」",
    traducao: "embora ~; apesar de ~",
    explicacao:
      "A expressão こそ「～が・けれど」 (koso「~ga / keredo」) é usada para expressar uma ideia contraditória ou oposta a algo mencionado anteriormente.",
    exemplo: {
      frase: "彼女は緊張しているこそするが、落ち着いている。",
      furigana: "かのじょはきんちょうしているこそするが、おちついている。",
      romaji: "Kanojo wa kinchou shite iru koso suru ga, ochitsuite iru.",
      traducao: "Embora ela esteja nervosa, ela está calma.",
    },
  },
  {
    topico: "ことごとく",
    romaji: "koto gotoku",
    traducao: "todos; completamente",
    explicacao:
      "A expressão ことごとく (koto gotoku) é usada para indicar que algo acontece ou se aplica a tudo ou a todos.",
    exemplo: {
      frase: "彼の計画はことごとく失敗に終わった。",
      furigana: "かれのけいかくはことごとくしっぱいにおわった。",
      romaji: "Kare no keikaku wa koto gotoku shippai ni owatta.",
      traducao: "Todos os planos dele acabaram em falha.",
    },
  },
  {
    topico: "ことこの上ない / この上ない / この上なく",
    romaji: "koto kono ue nai / kono ue nai / kono ue naku",
    traducao: "nada melhor; o auge",
    explicacao:
      "A expressão ことこの上ない (koto kono ue nai), この上ない (kono ue nai) e この上なく (kono ue naku) são usadas para expressar que algo é o auge, o ponto mais alto ou que não há nada melhor.",
    exemplo: {
      frase: "彼女の優しさにはこの上ない幸せを感じる。",
      furigana: "かのじょのやさしさにはこのうえないしあわせをかんじる。",
      romaji: "Kanojo no yasashisa ni wa kono ue nai shiawase o kanjiru.",
      traducao: "Sinto uma felicidade incomparável com a gentileza dela.",
    },
  },
  {
    topico: "こともあって",
    romaji: "koto mo atte",
    traducao: "por causa de ~; devido a ~",
    explicacao:
      "A expressão こともあって (koto mo atte) é usada para indicar que algo acontece ou é causado por causa de uma circunstância específica.",
    exemplo: {
      frase: "仕事が忙しかったこともあって、彼と会えませんでした。",
      furigana: "しごとがいそがしかったこともあって、かれとあえませんでした。",
      romaji: "Shigoto ga isogashikatta koto mo atte, kare to aemasen deshita.",
      traducao: "Por causa do trabalho estar ocupado, não pude encontrá-lo.",
    },
  },
  {
    topico: "ことなしに",
    romaji: "koto nashi ni",
    traducao: "sem ~; sem precisar ~",
    explicacao:
      "A expressão ことなしに (koto nashi ni) é usada para indicar que algo é feito sem a necessidade de ~.",
    exemplo: {
      frase: "言われることなしに、彼は自分の仕事を完了した。",
      furigana: "いわれることなしに、かれはじぶんのしごとをかんりょうした。",
      romaji:
        "Iwareru koto nashi ni, kare wa jibun no shigoto o kanryou shita.",
      traducao: "Sem precisar ser dito, ele concluiu seu trabalho.",
    },
  },
  {
    topico: "ことのないように",
    romaji: "koto no nai you ni",
    traducao: "para evitar ~; de forma a não ~",
    explicacao:
      "A expressão ことのないように (koto no nai you ni) é usada para indicar que algo é feito para evitar que algo aconteça.",
    exemplo: {
      frase: "事故が起こることのないように、安全運転を心がけてください。",
      furigana:
        "じこがおこることのないように、あんぜんうんてんをこころがけてください。",
      romaji:
        "Jiko ga okoru koto no nai you ni, anzen unten o kokorogakete kudasai.",
      traducao: "Por favor, dirija com segurança para evitar acidentes.",
    },
  },
  {
    topico: "こととて",
    romaji: "koto tote",
    traducao: "por causa de ~; devido a ~",
    explicacao:
      "A expressão こととて (koto tote) é usada para indicar que algo acontece ou é causado por causa de uma circunstância específica.",
    exemplo: {
      frase: "彼女の病気のこととて、パーティーには出席できませんでした。",
      furigana:
        "かのじょのびょうきのこととて、パーティーにはしゅっせきできませんでした。",
      romaji:
        "Kanojo no byouki no koto tote, paatii ni wa shusseki dekimasen deshita.",
      traducao: "Devido à doença dela, não pude comparecer à festa.",
    },
  },
  {
    topico: "くらいなら",
    romaji: "kurai nara",
    traducao: "se for ~; antes ~ do que",
    explicacao:
      "A expressão くらいなら (kurai nara) é usada para indicar preferência ou escolha entre duas opções, enfatizando que algo é melhor do que a outra opção.",
    exemplo: {
      frase: "食べ物がまずいくらいなら、食べないほうがいい。",
      furigana: "たべものがまずいくらいなら、たべないほうがいい。",
      romaji: "Tabemono ga mazui kurai nara, tabenai hou ga ii.",
      traducao: "Se a comida estiver ruim, é melhor não comer.",
    },
  },
  {
    topico: "くらいのものだ",
    romaji: "kurai no mono da",
    traducao: "ser apenas ~; ser aproximadamente ~",
    explicacao:
      "A expressão くらいのものだ (kurai no mono da) é usada para indicar que algo é apenas ~ ou aproximadamente ~ em termos de quantidade, tamanho, etc.",
    exemplo: {
      frase: "この地域の冬はマイナス10度くらいのものだ。",
      furigana: "このちいきのふゆはマイナス10どくらいのものだ。",
      romaji: "Kono chiiki no fuyu wa mainasu 10-do kurai no mono da.",
      traducao: "O inverno nesta região é aproximadamente -10 graus.",
    },
  },
  {
    topico: "までだ",
    romaji: "made da",
    traducao: "é suficiente; é tudo",
    explicacao:
      "A expressão までだ (made da) é usada para indicar que algo é suficiente ou que é tudo o que precisa ser feito.",
    exemplo: {
      frase: "もう頑張ったから、これでまでだ。",
      furigana: "もうがんばったから、これでまでだ。",
      romaji: "Mou ganbatta kara, kore de made da.",
      traducao: "Já fiz meu melhor, é suficiente.",
    },
  },
  {
    topico: "までのことだ",
    romaji: "made no koto da",
    traducao: "é apenas uma questão de ~",
    explicacao:
      "A expressão までのことだ (made no koto da) é usada para indicar que algo é apenas uma questão de ~ ou uma simples ação a ser tomada.",
    exemplo: {
      frase: "勇気を出すまでのことだ。やってみなさい。",
      furigana: "ゆうきをだすまでのことだ。やってみなさい。",
      romaji: "Yuuki o dasu made no koto da. Yatte minasai.",
      traducao: "É apenas uma questão de ter coragem. Tente fazer.",
    },
  },
  {
    topico: "までもない",
    romaji: "made mo nai",
    traducao: "não é necessário; não é preciso",
    explicacao:
      "A expressão までもない (made mo nai) é usada para indicar que algo não é necessário ou não é preciso ser feito.",
    exemplo: {
      frase: "そこまで言うまでもないでしょう。",
      furigana: "そこまでいうまでもないでしょう。",
      romaji: "Soko made iu made mo nai deshou.",
      traducao: "Não é necessário ir tão longe e dizer isso.",
    },
  },
  {
    topico: "までもなく",
    romaji: "made mo naku",
    traducao: "sem nem mesmo ~",
    explicacao:
      "A expressão までもなく (made mo naku) é usada para indicar que algo acontece ou é verdadeiro sem nem mesmo ~.",
    exemplo: {
      frase: "言われるまでもなく、私はそのことを理解しています。",
      furigana: "いわれるまでもなく、わたしはそのことをりかいしています。",
      romaji: "Iwareru made mo naku, watashi wa sono koto o rikai shiteimasu.",
      traducao: "Sem nem mesmo ser dito, eu entendo isso.",
    },
  },
  {
    topico: "まじき",
    romaji: "majiki",
    traducao: "inadequado; impróprio",
    explicacao:
      "A expressão まじき (majiki) é usada para descrever algo que é inadequado ou impróprio em uma determinada situação.",
    exemplo: {
      frase: "そのような言葉は公の場ではまじきです。",
      furigana: "そのようなことばはおおやけのばではまじきです。",
      romaji: "Sono you na kotoba wa oo-yake no ba de wa majiki desu.",
      traducao: "Essas palavras são inadequadas em um ambiente público.",
    },
  },
  {
    topico: "まくる",
    romaji: "maku ru",
    traducao: "enrolar; cobrir completamente",
    explicacao:
      "A expressão まくる (maku ru) é usada para descrever o ato de enrolar algo ou cobrir completamente algo com algum material.",
    exemplo: {
      frase: "布団にくるまって寝ています。",
      furigana: "ふとんにくるまってねています。",
      romaji: "Futon ni kurumatte neteimasu.",
      traducao: "Eu durmo enrolado em um futon.",
    },
  },
  {
    topico: "まみれ",
    romaji: "mamire",
    traducao: "coberto por ~; sujo de ~",
    explicacao:
      "A expressão まみれ (mamire) é usada para descrever algo que está coberto ou sujo com alguma substância.",
    exemplo: {
      frase: "子供たちは泥まみれになって遊んでいた。",
      furigana: "こどもたちはどろまみれになってあそんでいた。",
      romaji: "Kodomo-tachi wa doro mamire ni natte asonde ita.",
      traducao: "As crianças estavam brincando cobertas de lama.",
    },
  },
  {
    topico: "まるっきり",
    romaji: "marukkiri",
    traducao: "completamente; totalmente",
    explicacao:
      "A expressão まるっきり (marukkiri) é usada para indicar que algo é completamente ou totalmente de uma certa maneira.",
    exemplo: {
      frase: "彼はまるっきり私のことを忘れてしまった。",
      furigana: "かれはまるっきりわたしのことをわすれてしまった。",
      romaji: "Kare wa marukkiri watashi no koto o wasurete shimatta.",
      traducao: "Ele completamente esqueceu de mim.",
    },
  },
  {
    topico: "めく",
    romaji: "meku",
    traducao: "virar; dobrar",
    explicacao:
      "A expressão めく (meku) é usada para descrever o ato de virar ou dobrar algo.",
    exemplo: {
      frase: "風に吹かれて新聞のページがめくれた。",
      furigana: "かぜにふかれてしんぶんのぺーじがめくれた。",
      romaji: "Kaze ni fukarete shinbun no peeji ga mekureta.",
      traducao: "As páginas do jornal viraram ao serem sopradas pelo vento.",
    },
  },
  {
    topico: "も同然だ（もどうぜんだ）",
    romaji: "mo douzen da",
    traducao: "é praticamente o mesmo que ~; é equivalente a ~",
    explicacao:
      "A expressão も同然だ (mo douzen da) é usada para indicar que algo é praticamente o mesmo que outra coisa ou é equivalente a outra coisa.",
    exemplo: {
      frase: "彼女は家族の一員と同然だ。",
      furigana: "かのじょはかぞくのいちいんとどうぜんだ。",
      romaji: "Kanojo wa kazoku no ichiin to douzen da.",
      traducao: "Ela é praticamente um membro da família.",
    },
  },
  {
    topico: "もさることながら",
    romaji: "mo saru koto nagara",
    traducao: "além de ~; além do mais",
    explicacao:
      "A expressão もさることながら (mo saru koto nagara) é usada para adicionar uma informação adicional ou enfatizar algo que é além de ~.",
    exemplo: {
      frase: "彼の成果もさることながら、その努力ぶりに感心する。",
      furigana:
        "かれのせいかもさることながら、そのどりょくぶりにかんしんする。",
      romaji:
        "Kare no seika mo saru koto nagara, sono doryoku-buri ni kanshin suru.",
      traducao: "Além dos resultados dele, eu admiro muito o esforço dele.",
    },
  },
  {
    topico: "もしないで",
    romaji: "moshi naide",
    traducao: "sem fazer ~; sem ~",
    explicacao:
      "A expressão もしないで (moshi naide) é usada para indicar que algo é feito sem fazer ou sem a presença de algo mencionado.",
    exemplo: {
      frase: "調べもしないで結論を出すのは危険です。",
      furigana: "しらべもしないでけつろんをだすのはきけんです。",
      romaji: "Shirabe mo shinaide ketsuron o dasu no wa kiken desu.",
      traducao: "É perigoso chegar a uma conclusão sem fazer uma pesquisa.",
    },
  },
  {
    topico: "もはや",
    romaji: "mohaya",
    traducao: "já; agora",
    explicacao:
      "A expressão もはや (mohaya) é usada para indicar que algo já ocorreu ou mudou em relação ao passado.",
    exemplo: {
      frase: "彼の人気はもはや国境を越えている。",
      furigana: "かれのにんきはもはやこっきょうをこえている。",
      romaji: "Kare no ninki wa mohaya kokkyou o koete iru.",
      traducao: "A popularidade dele já ultrapassou as fronteiras.",
    },
  },
  {
    topico: "もので",
    romaji: "mono de",
    traducao: "por causa de ~; devido a ~",
    explicacao:
      "A expressão もので (mono de) é usada para indicar a razão ou causa de algo.",
    exemplo: {
      frase: "彼は忙しいもので、会議には出席できません。",
      furigana: "かれはいそがしいもので、かいぎにはしゅっせきできません。",
      romaji: "Kare wa isogashii mono de, kaigi ni wa shusseki dekimasen.",
      traducao: "Por causa da sua ocupação, ele não pode comparecer à reunião.",
    },
  },
  {
    topico: "ものを",
    romaji: "mono o",
    traducao: "embora; apesar de ~",
    explicacao:
      "A expressão ものを (mono o) é usada para indicar uma contradição ou frustração em relação a uma ação ou situação.",
    exemplo: {
      frase: "早く出かけるものを、電車が遅れてしまった。",
      furigana: "はやくでかけるものを、でんしゃがおくれてしまった。",
      romaji: "Hayaku dekakeru mono o, densha ga okurete shimatta.",
      traducao: "Embora eu quisesse sair cedo, o trem atrasou.",
    },
  },
  {
    topico: "ものと思われる / ものと見られる",
    romaji: "mono to omowareru / mono to mirareru",
    traducao: "é considerado como ~; é visto como ~",
    explicacao:
      "As expressões ものと思われる (mono to omowareru) e ものと見られる (mono to mirareru) são usadas para indicar que algo é considerado ou visto como ~.",
    exemplo: {
      frase: "彼女は優秀な学生とものと思われる。",
      furigana: "かのじょはゆうしゅうながくせいとものとおもわれる。",
      romaji: "Kanojo wa yuushuu na gakusei to mono to omowareru.",
      traducao: "Ela é considerada uma estudante excelente.",
    },
  },
  {
    topico: "ものとする",
    romaji: "mono to suru",
    traducao: "considerar como ~; assumir como ~",
    explicacao:
      "A expressão ものとする (mono to suru) é usada para indicar que algo é considerado ou assumido como ~.",
    exemplo: {
      frase: "この報告書をもとに、次の手順をものとしましょう。",
      furigana: "このほうこくしょをもとに、つぎのてじゅんをものとしましょう。",
      romaji: "Kono houkokusho o moto ni, tsugi no tejun o mono to shimashou.",
      traducao:
        "Vamos considerar este relatório como base e seguir as próximas etapas.",
    },
  },
  {
    topico: "ものとして",
    romaji: "mono to shite",
    traducao: "como; na qualidade de ~",
    explicacao:
      "A expressão ものとして (mono to shite) é usada para indicar o papel, função ou posição de alguém ou algo em uma determinada situação.",
    exemplo: {
      frase: "彼は専門家とものとして、この問題を解決しました。",
      furigana:
        "かれはせんもんかとものとして、このもんだいをかいけつしました。",
      romaji:
        "Kare wa senmonka to mono to shite, kono mondai o kaiketsu shimashita.",
      traducao: "Ele resolveu este problema como especialista.",
    },
  },
  {
    topico: "もしくは",
    romaji: "moshikuwa",
    traducao: "ou; ou então",
    explicacao:
      "A expressão もしくは (moshikuwa) é usada para apresentar uma escolha entre duas opções ou para indicar alternativas.",
    exemplo: {
      frase: "この本は英語もしくは日本語で読むことができます。",
      furigana: "このほんはえいごもしくはにほんごでよむことができます。",
      romaji: "Kono hon wa eigo moshikuwa nihongo de yomu koto ga dekimasu.",
      traducao: "Este livro pode ser lido em inglês ou em japonês.",
    },
  },
  {
    topico: "んばかりに",
    romaji: "nba kari ni",
    traducao: "quase como se ~; como se ~",
    explicacao:
      "A expressão んばかりに (nba kari ni) é usada para indicar que algo é quase como se estivesse ~ ou dá a impressão de que algo está prestes a acontecer.",
    exemplo: {
      frase: "彼は幸せんばかりに笑顔でした。",
      furigana: "かれはしあわせんばかりにえがおでした。",
      romaji: "Kare wa shiawase nba kari ni egao deshita.",
      traducao: "Ele estava sorrindo como se estivesse extremamente feliz.",
    },
  },
  {
    topico: "んがために",
    romaji: "n ga tame ni",
    traducao: "por causa de ~; devido a ~",
    explicacao:
      "A expressão んがために (n ga tame ni) é usada para indicar a causa ou razão de algo.",
    exemplo: {
      frase: "学業に専念するんがために、彼はサークル活動を辞めた。",
      furigana:
        "がくぎょうにせんねんするんがために、かれはさーくるかつどうをやめた。",
      romaji:
        "Gakugyou ni sennen suru n ga tame ni, kare wa saakuru katsudou o yameta.",
      traducao:
        "Ele deixou as atividades do clube para se dedicar aos estudos.",
    },
  },
  {
    topico: "ながらに / ながらの",
    romaji: "nagara ni / nagara no",
    traducao: "enquanto ~; durante ~",
    explicacao:
      "As expressões ながらに (nagara ni) e ながらの (nagara no) são usadas para indicar que duas ações ocorrem simultaneamente ou que uma ação ocorre enquanto outra ação está em andamento.",
    exemplo: {
      frase: "音楽を聴きながら勉強する。",
      furigana: "おんがくをききながらべんきょうする。",
      romaji: "Ongaku o kiki nagara benkyou suru.",
      traducao: "Estudar enquanto ouve música.",
    },
  },
  {
    topico: "ないまでも",
    romaji: "nai made mo",
    traducao: "pelo menos ~; mesmo que não seja ~",
    explicacao:
      "A expressão ないまでも (nai made mo) é usada para indicar um mínimo ou uma condição que deve ser atendida, mesmo que não seja o ideal ou perfeito.",
    exemplo: {
      frase: "時間がないまでも、できるだけ手伝います。",
      furigana: "じかんがないまでも、できるだけてつだいます。",
      romaji: "Jikan ga nai made mo, dekiru dake tetsudaimasu.",
      traducao:
        "Eu vou te ajudar o máximo que puder, mesmo que não tenha muito tempo.",
    },
  },
  {
    topico: "ないものでもない",
    romaji: "nai mono demo nai",
    traducao: "não é impossível; não é inexistente",
    explicacao:
      "A expressão ないものでもない (nai mono demo nai) é usada para indicar que algo não é impossível ou inexistente, embora possa ser difícil ou raro.",
    exemplo: {
      frase: "彼の話は信じがたいが、ないものでもない。",
      furigana: "かれのはなしはしんじがたいが、ないものでもない。",
      romaji: "Kare no hanashi wa shinji gatai ga, nai mono demo nai.",
      traducao:
        "Embora seja difícil de acreditar na história dele, não é impossível.",
    },
  },
  {
    topico: "ないものか / ないものだろうか",
    romaji: "nai mono ka / nai mono darou ka",
    traducao: "será que não ~?; não seria possível ~?",
    explicacao:
      "As expressões ないものか (nai mono ka) e ないものだろうか (nai mono darou ka) são usadas para expressar um desejo forte ou uma esperança de que algo aconteça ou uma situação mude.",
    exemplo: {
      frase: "もう少し時間があればいいのにないものか。",
      furigana: "もうすこしじかんがあればいいのにないものか。",
      romaji: "Mou sukoshi jikan ga areba ii noni nai mono ka.",
      traducao: "Será que não seria bom ter um pouco mais de tempo?",
    },
  },
  {
    topico: "ないとも限らない",
    romaji: "nai to mo kagiranai",
    traducao: "não necessariamente ~; pode não ser ~",
    explicacao:
      "A expressão ないとも限らない (nai to mo kagiranai) é usada para indicar que algo não é necessariamente verdadeiro ou não é uma conclusão definitiva.",
    exemplo: {
      frase: "彼が本当のことを言っているとは限らない。",
      furigana: "かれがほんとうのことをいっているとはかぎらない。",
      romaji: "Kare ga hontou no koto o itte iru to wa kagiranai.",
      traducao: "Não necessariamente ele está dizendo a verdade.",
    },
  },
  {
    topico: "なくしては",
    romaji: "nakushite wa",
    traducao: "sem ~; não é possível sem ~",
    explicacao:
      "A expressão なくしては (nakushite wa) é usada para indicar que algo não é possível ou não pode ser realizado sem a presença ou existência de algo mencionado.",
    exemplo: {
      frase: "努力なくしては成功はあり得ない。",
      furigana: "どりょくなくしてはせいこうはありえない。",
      romaji: "Doryoku nakushite wa seikou wa arienai.",
      traducao: "Não é possível ter sucesso sem esforço.",
    },
  },
  {
    topico: "並み（なみ）",
    romaji: "nami",
    traducao: "padrão; comum",
    explicacao:
      "A expressão 並み (nami) é usada para descrever algo que está em um nível padrão ou comum.",
    exemplo: {
      frase: "彼の実力は並みではなく、抜群だ。",
      furigana: "かれのじつりょくはなみではなく、ばつぐんだ。",
      romaji: "Kare no jitsuryoku wa nami de wa naku, batsugun da.",
      traducao: "O nível de habilidade dele não é comum, é excelente.",
    },
  },
  {
    topico: "なんという / なんと / なんて",
    romaji: "nanto iu / nanto / nante",
    traducao: "como; que tipo de ~",
    explicacao:
      "As expressões なんという (nanto iu), なんと (nanto) e なんて (nante) são usadas para expressar surpresa, admiração ou ênfase em relação a algo.",
    exemplo: {
      frase: "なんという美しい景色だろう！",
      furigana: "なんといううつくしいけしきだろう！",
      romaji: "Nanto iu utsukushii keshiki darou!",
      traducao: "Que tipo de paisagem bonita!",
    },
  },
  {
    topico: "何しろ（なにしろ）",
    romaji: "nani shiro",
    traducao: "afinal de contas; de qualquer forma",
    explicacao:
      "A expressão 何しろ (nani shiro) é usada para introduzir uma explicação ou justificativa para algo que é óbvio ou amplamente conhecido.",
    exemplo: {
      frase: "何しろ彼は大物だ。",
      furigana: "なにしろかれはおおものだ。",
      romaji: "Nani shiro kare wa oomono da.",
      traducao: "Afinal de contas, ele é uma pessoa influente.",
    },
  },
  {
    topico: "ならでは",
    romaji: "nara dewa",
    traducao: "próprio de ~; típico de ~",
    explicacao:
      "A expressão ならでは (nara dewa) é usada para indicar algo que é característico ou único de uma determinada pessoa, lugar ou situação.",
    exemplo: {
      frase: "彼ならではのユーモアがある。",
      furigana: "かれならではのゆーもあがある。",
      romaji: "Kare nara dewa no yuumoa ga aru.",
      traducao: "Ele tem um senso de humor próprio dele.",
    },
  },
  {
    topico: "ならいざしらず / はいざしらず",
    romaji: "nara izashirazu / haizashirazu",
    traducao: "exceto; não mencionando",
    explicacao:
      "As expressões ならいざしらず (nara izashirazu) e はいざしらず (haizashirazu) são usadas para indicar que algo é aceitável ou compreensível em certas circunstâncias, mas não em outras.",
    exemplo: {
      frase: "彼女ならいざしらず、彼がそんなことをするとは思えない。",
      furigana:
        "かのじょならいざしらず、かれがそんなことをするとはおもえない。",
      romaji:
        "Kanojo nara izashirazu, kare ga sonna koto o suru to wa omoenai.",
      traducao:
        "Eu posso entender se ela fizer isso, mas não consigo acreditar que ele faria algo assim.",
    },
  },
  {
    topico: "なり",
    romaji: "nari",
    traducao: "seja ~; seja como ~",
    explicacao:
      "A expressão なり (nari) é usada para indicar uma condição, qualidade ou papel específico que alguém ou algo assume.",
    exemplo: {
      frase: "彼女は主役なりの魅力を持っている。",
      furigana: "かのじょはしゅやくなりのみりょくをもっている。",
      romaji: "Kanojo wa shuyaku nari no miryoku o motte iru.",
      traducao: "Ela tem o charme próprio da protagonista.",
    },
  },
  {
    topico: "なりに / なりの",
    romaji: "nari ni / nari no",
    traducao: "de acordo com ~; à sua maneira ~",
    explicacao:
      "As expressões なりに (nari ni) e なりの (nari no) são usadas para indicar que alguém ou algo age de acordo com uma determinada condição, padrão ou maneira.",
    exemplo: {
      frase: "彼は自分なりにベストを尽くした。",
      furigana: "かれはじぶんなりにべすとをつくした。",
      romaji: "Kare wa jibun nari ni besuto o tsukushita.",
      traducao: "Ele fez o seu melhor à sua maneira.",
    },
  },
  {
    topico: "なりとも",
    romaji: "nari tomo",
    traducao: "mesmo que seja ~; qualquer que seja ~",
    explicacao:
      "A expressão なりとも (nari tomo) é usada para indicar que algo é aceitável ou possível, mesmo que seja uma pequena quantidade ou condição.",
    exemplo: {
      frase: "彼の幸福な笑顔を見るなりとも、私は嬉しい。",
      furigana: "かれのこうふくなえがおをみるなりとも、わたしはうれしい。",
      romaji: "Kare no koufuku na egao o miru nari tomo, watashi wa ureshii.",
      traducao: "Fico feliz só de ver o sorriso feliz dele.",
    },
  },
  {
    topico: "なり～なり",
    romaji: "nari ~ nari",
    traducao: "seja ~ ou ~; tanto faz ~ ou ~",
    explicacao:
      "A expressão なり～なり (nari ~ nari) é usada para indicar várias possibilidades ou opções, sendo indiferente qual delas aconteça.",
    exemplo: {
      frase: "彼は休みの日は家にいるなり、友達と遊びに行くなりしている。",
      furigana:
        "かれはやすみのひはいえにいるなり、ともだちとあそびにいくなりしている。",
      romaji:
        "Kare wa yasumi no hi wa ie ni iru nari, tomodachi to asobi ni iku nari shite iru.",
      traducao:
        "Nos dias de folga, ele tanto fica em casa quanto sai para se divertir com os amigos.",
    },
  },
  {
    topico: "なしに / なしで",
    romaji: "nashi ni / nashi de",
    traducao: "sem ~; sem precisar ~",
    explicacao:
      "As expressões なしに (nashi ni) e なしで (nashi de) são usadas para indicar que algo é feito ou acontece sem a necessidade ou presença de algo mencionado.",
    exemplo: {
      frase: "彼女は辞書なしにその難しい漢字を読んだ。",
      furigana: "かのじょはじしょなしにそのむずかしいかんじをよんだ。",
      romaji: "Kanojo wa jisho nashi ni sono muzukashii kanji o yonda.",
      traducao: "Ela leu aqueles kanjis difíceis sem um dicionário.",
    },
  },
  {
    topico: "に",
    romaji: "ni",
    traducao: "em; para",
    explicacao:
      "A partícula に (ni) é usada para indicar o local, o destino ou a direção de uma ação ou movimento.",
    exemplo: {
      frase: "友達に手紙を送った。",
      furigana: "ともだちにてがみをおくった。",
      romaji: "Tomodachi ni tegami o okutta.",
      traducao: "Eu enviei uma carta para um amigo.",
    },
  },
  {
    topico: "に値する（にあたいする）",
    romaji: "ni ataisuru",
    traducao: "merecer; ser digno de",
    explicacao:
      "A expressão に値する (ni ataisuru) é usada para indicar que alguém ou algo merece ou é digno de algo.",
    exemplo: {
      frase: "彼女の努力は称賛に値する。",
      furigana: "かのじょのどりょくはしょうさんにあたいする。",
      romaji: "Kanojo no doryoku wa shousan ni ataisuru.",
      traducao: "Os esforços dela merecem elogios.",
    },
  },
  {
    topico: "にあって",
    romaji: "ni atte",
    traducao: "em meio a ~; em situações ~",
    explicacao:
      "A expressão にあって (ni atte) é usada para indicar uma situação ou circunstância em que algo ocorre ou acontece.",
    exemplo: {
      frase: "経済危機にあっても、彼は前向きに頑張っている。",
      furigana: "けいざいききにあっても、かれはまえむきにがんばっている。",
      romaji: "Keizai kiki ni atte mo, kare wa maemuki ni ganbatte iru.",
      traducao:
        "Mesmo em meio a uma crise econômica, ele está se esforçando positivamente.",
    },
  },
  {
    topico: "に引き換え（にひきかえ）",
    romaji: "ni hikikae",
    traducao: "em troca de ~; comparado a ~",
    explicacao:
      "A expressão に引き換え (ni hikikae) é usada para indicar uma troca ou comparação entre duas coisas ou situações.",
    exemplo: {
      frase: "苦労に引き換え、彼は成功を手にした。",
      furigana: "くろうにひきかえ、かれはせいこうをてにした。",
      romaji: "Kurou ni hikikae, kare wa seikou o te ni shita.",
      traducao: "Ele obteve sucesso em troca de dificuldades.",
    },
  },
  {
    topico: "に至る / に至った（にいたる / にいたった）",
    romaji: "ni itaru / ni itatta",
    traducao: "chegar a ~; alcançar ~",
    explicacao:
      "As expressões に至る (ni itaru) e に至った (ni itatta) são usadas para indicar o ponto em que algo chega ou alcança.",
    exemplo: {
      frase: "彼の努力が実を結び、成功に至った。",
      furigana: "かれのどりょくがみをむすび、せいこうにいたった。",
      romaji: "Kare no doryoku ga mi o musubi, seikou ni itatta.",
      traducao: "Os esforços dele deram frutos e levaram ao sucesso.",
    },
  },
  {
    topico: "に至るまで（にいたるまで）",
    romaji: "ni itaru made",
    traducao: "até ~; até chegar a ~",
    explicacao:
      "A expressão に至るまで (ni itaru made) é usada para indicar a extensão máxima ou o ponto final em que algo ocorre ou se aplica.",
    exemplo: {
      frase: "この道は山の頂上に至るまで続いている。",
      furigana: "このみちはやまのちょうじょうにいたるまでつづいている。",
      romaji: "Kono michi wa yama no choujou ni itaru made tsuzuite iru.",
      traducao: "Esta estrada continua até o topo da montanha.",
    },
  },
  {
    topico: "に至っても（にいたっても）",
    romaji: "ni itatte mo",
    traducao: "mesmo quando ~; mesmo em ~",
    explicacao:
      "A expressão に至っても (ni itatte mo) é usada para indicar que algo continua a ser verdadeiro ou relevante mesmo em uma determinada situação ou circunstância.",
    exemplo: {
      frase: "彼女は年を取っても美しさに至っても変わらない。",
      furigana: "かのじょはとしをとってもうつくしさにいたってもかわらない。",
      romaji: "Kanojo wa toshi o totte mo utsukushisa ni itatte mo kawaranai.",
      traducao: "Ela não muda, mesmo quando envelhece ou alcança beleza.",
    },
  },
  {
    topico: "に至っては（にいたっては）",
    romaji: "ni itatte wa",
    traducao: "quando se trata de ~; em relação a ~",
    explicacao:
      "A expressão に至っては (ni itatte wa) é usada para introduzir um ponto importante ou uma consideração especial sobre algo que está sendo mencionado.",
    exemplo: {
      frase: "そのプロジェクトに至っては、チーム全員の協力が必要だ。",
      furigana:
        "そのぷろじぇくとにいたっては、ちーむぜんいんのきょうりょくがひつようだ。",
      romaji:
        "Sono purojekuto ni itatte wa, chiimu zen'in no kyouryoku ga hitsuyou da.",
      traducao:
        "Quando se trata desse projeto, é necessária a cooperação de todos os membros da equipe.",
    },
  },
  {
    topico: "に言わせれば（にいわせれば）",
    romaji: "ni iwasereba",
    traducao: "segundo ~; de acordo com ~",
    explicacao:
      "A expressão に言わせれば (ni iwasereba) é usada para indicar uma opinião ou ponto de vista de acordo com alguém ou algo mencionado.",
    exemplo: {
      frase: "彼に言わせれば、この問題は容易だと言っている。",
      furigana: "かれにいわせれば、このもんだいはよういだといっている。",
      romaji: "Kare ni iwasereba, kono mondai wa youi da to itte iru.",
      traducao: "Segundo ele, esse problema é fácil.",
    },
  },
  {
    topico: "に限ったことではない（にかぎったことではない）",
    romaji: "ni kagitta koto dewa nai",
    traducao: "não se limita a ~; não se restringe a ~",
    explicacao:
      "A expressão に限ったことではない (ni kagitta koto dewa nai) é usada para indicar que algo não se limita apenas a uma situação específica, mas pode ser aplicado de maneira mais geral.",
    exemplo: {
      frase: "この問題は彼に限ったことではない。",
      furigana: "このもんだいはかれにかぎったことではない。",
      romaji: "Kono mondai wa kare ni kagitta koto dewa nai.",
      traducao: "Este problema não se restringe apenas a ele.",
    },
  },
  {
    topico: "にかかっては / にかかったら / にかかると / かかれば",
    romaji: "ni kakatte wa / ni kagattara / ni kakaru to / kakareba",
    traducao: "quando se trata de ~; se depender de ~; se ~ acontecer",
    explicacao:
      "As expressões にかかっては (ni kakatte wa), にかかったら (ni kagattara), にかかると (ni kakaru to) e かかれば (kakareba) são usadas para indicar uma condição ou situação específica em que algo acontece ou é determinado.",
    exemplo: {
      frase: "成績にかかっては彼女が一番優れている。",
      furigana: "せいせきにかかってはかのじょがいちばんすぐれている。",
      romaji: "Seiseki ni kakatte wa kanojo ga ichiban sugurete iru.",
      traducao: "Quando se trata de notas, ela é a melhor.",
    },
  },
  {
    topico: "にかかっている",
    romaji: "ni kakatte iru",
    traducao: "depender de ~; estar nas mãos de ~",
    explicacao:
      "A expressão にかかっている (ni kakatte iru) é usada para indicar que algo depende de alguém ou de uma determinada situação.",
    exemplo: {
      frase: "結果は君次第にかかっている。",
      furigana: "けっかはきみしだいにかかっている。",
      romaji: "Kekka wa kimi shidai ni kakatte iru.",
      traducao: "O resultado está nas suas mãos.",
    },
  },
  {
    topico: "にかこつけて",
    romaji: "ni kakotsukete",
    traducao: "usando ~ como pretexto; sob o pretexto de ~",
    explicacao:
      "A expressão にかこつけて (ni kakotsukete) é usada para indicar que alguém usa algo como uma desculpa ou pretexto para fazer ou dizer algo.",
    exemplo: {
      frase: "彼は仕事が忙しいにかこつけて、予定をキャンセルした。",
      furigana:
        "かれはしごとがいそがしいにかこつけて、よていをきゃんせるした。",
      romaji:
        "Kare wa shigoto ga isogashii ni kakotsukete, yotei o kyanseru shita.",
      traducao:
        "Ele cancelou os planos sob a desculpa de estar ocupado com o trabalho.",
    },
  },
  {
    topico: "にかまけて",
    romaji: "ni kamakete",
    traducao: "em detrimento de ~; à custa de ~",
    explicacao:
      "A expressão にかまけて (ni kamakete) é usada para indicar que alguém ou algo prioriza ou se dedica excessivamente a uma coisa, negligenciando outras coisas.",
    exemplo: {
      frase: "彼は仕事にかまけて家族との時間を失った。",
      furigana: "かれはしごとにかまけてかぞくとのじかんをうしなった。",
      romaji: "Kare wa shigoto ni kamakete kazoku to no jikan o ushinatta.",
      traducao: "Ele perdeu tempo com a família por causa do trabalho.",
    },
  },
  {
    topico: "に難くない（にかたくない）",
    romaji: "ni kataku nai",
    traducao: "não é difícil de ~; fácil de ~",
    explicacao:
      "A expressão に難くない (ni kataku nai) é usada para indicar que algo não é difícil de realizar ou alcançar.",
    exemplo: {
      frase: "彼女の話は理解に難くない。",
      furigana: "かのじょのはなしはりかいにかたくない。",
      romaji: "Kanojo no hanashi wa rikai ni kataku nai.",
      traducao: "Não é difícil entender o que ela está dizendo.",
    },
  },
  {
    topico: "にまつわる",
    romaji: "ni matsuwaru",
    traducao: "estar relacionado a ~; envolver ~",
    explicacao:
      "A expressão にまつわる (ni matsuwaru) é usada para indicar que algo está relacionado a um determinado assunto ou envolve uma certa situação.",
    exemplo: {
      frase: "この事件にまつわる情報が公開された。",
      furigana: "このじけんにまつわるじょうほうがこうかいされた。",
      romaji: "Kono jiken ni matsuwaru joho ga koukai sareta.",
      traducao:
        "As informações relacionadas a esse incidente foram divulgadas.",
    },
  },
  {
    topico: "に則って（にのっとって）",
    romaji: "ni nottotte",
    traducao: "de acordo com ~; seguindo ~",
    explicacao:
      "A expressão に則って (ni nottotte) é usada para indicar que algo é feito de acordo com uma determinada regra, princípio ou diretriz.",
    exemplo: {
      frase: "このガイドラインに則って手続きを行ってください。",
      furigana: "このがいどらいんにのっとっててつづきをおこなってください。",
      romaji: "Kono gaidorain ni nottotte tetsuzuki o okonatte kudasai.",
      traducao:
        "Por favor, siga os procedimentos de acordo com estas diretrizes.",
    },
  },
  {
    topico: "に先駆けて（にさきがけて）",
    romaji: "ni sakigakete",
    traducao: "antecipando ~; antes de ~",
    explicacao:
      "A expressão に先駆けて (ni sakigakete) é usada para indicar que algo ocorre ou é feito antes de outra coisa.",
    exemplo: {
      frase: "プレスリリースに先駆けて情報を公開した。",
      furigana: "ぷれすりりーすにさきがけてじょうほうをこうかいした。",
      romaji: "Puresu rirīsu ni sakigakete joho o koukai shita.",
      traducao: "Divulgamos as informações antes do comunicado de imprensa.",
    },
  },
  {
    topico: "に忍びない（にしのびない）",
    romaji: "ni shinobinai",
    traducao: "não suportar ~; não tolerar ~",
    explicacao:
      "A expressão に忍びない (ni shinobinai) é usada para indicar que alguém não pode suportar ou tolerar algo.",
    exemplo: {
      frase: "彼女の態度には我慢ができずに忍びない。",
      furigana: "かのじょのたいどにはがまんができずにしのびない。",
      romaji: "Kanojo no taido ni wa gaman ga dekizu ni shinobinai.",
      traducao: "Não posso suportar a atitude dela.",
    },
  },
  {
    topico: "にしたところで / としたところで",
    romaji: "ni shita tokoro de / to shita tokoro de",
    traducao: "mesmo que ~; mesmo assim ~",
    explicacao:
      "As expressões にしたところで (ni shita tokoro de) e としたところで (to shita tokoro de) são usadas para indicar que, mesmo que uma ação seja realizada ou uma situação ocorra, o resultado ou efeito permanece o mesmo.",
    exemplo: {
      frase: "どんなに頑張ったところで結果は変わらない。",
      furigana: "どんなにがんばったところでけっかはかわらない。",
      romaji: "Donnani ganbatta tokoro de kekka wa kawaranai.",
      traducao: "Mesmo que você se esforce muito, o resultado não muda.",
    },
  },
  {
    topico: "にして",
    romaji: "ni shite",
    traducao: "mesmo sendo ~; mesmo que seja ~",
    explicacao:
      "A expressão にして (ni shite) é usada para indicar uma condição ou qualidade especial que é aplicada a algo mencionado.",
    exemplo: {
      frase: "彼は若いにして非常に成熟している。",
      furigana: "かれはわかいにしてひじょうにせいじゅくしている。",
      romaji: "Kare wa wakai ni shite hijou ni seijuku shite iru.",
      traducao: "Mesmo sendo jovem, ele é extremamente maduro.",
    },
  },
  {
    topico: "に即して（にそくして）",
    romaji: "ni sokushite",
    traducao: "em conformidade com ~; de acordo com ~",
    explicacao:
      "A expressão に即して (ni sokushite) é usada para indicar que algo está em conformidade com uma determinada regra, princípio ou padrão.",
    exemplo: {
      frase: "この報告書は法律に即して作成された。",
      furigana: "このほうこくしょはほうりつにそくしてさくせいされた。",
      romaji: "Kono houkokusho wa houritsu ni sokushite sakusei sareta.",
      traducao: "Este relatório foi elaborado de acordo com a lei.",
    },
  },
  {
    topico: "に耐える / に耐えない（にたえる / にたえない）",
    romaji: "ni taeru / ni taenai",
    traducao: "suportar ~; aguentar ~ / não suportar ~; não aguentar ~",
    explicacao:
      "As expressões に耐える (ni taeru) e に耐えない (ni taenai) são usadas para indicar a capacidade de suportar ou aguentar algo, ou a falta dessa capacidade.",
    exemplo: {
      frase: "彼は困難に耐えて成功を収めた。",
      furigana: "かれはこんなんにたえてせいこうをおさめた。",
      romaji: "Kare wa konnan ni taete seikou o osameta.",
      traducao: "Ele suportou as dificuldades e obteve sucesso.",
    },
  },
  {
    topico: "に足らない / に足りない（にたらない / にたりない）",
    romaji: "ni taranai / ni tarinai",
    traducao: "não ser suficiente ~; não ser satisfatório ~",
    explicacao:
      "As expressões に足らない (ni taranai) e に足りない (ni tarinai) são usadas para indicar que algo não é suficiente ou satisfatório.",
    exemplo: {
      frase: "この結果は期待に足りない。",
      furigana: "このけっかはきたいにたりない。",
      romaji: "Kono kekka wa kitai ni tarinai.",
      traducao: "Este resultado não atende às expectativas.",
    },
  },
  {
    topico: "に足る / に足りる（にたる / にたりる）",
    romaji: "ni taru / ni tariru",
    traducao: "ser suficiente ~; ser satisfatório ~",
    explicacao:
      "As expressões に足る (ni taru) e に足りる (ni tariru) são usadas para indicar que algo é suficiente ou satisfatório.",
    exemplo: {
      frase: "彼の努力は称賛に足る。",
      furigana: "かれのどりょくはしょうさんにたる。",
      romaji: "Kare no doryoku wa shousan ni taru.",
      traducao: "Os esforços dele são dignos de elogio.",
    },
  },
  {
    topico: "に照らして（にてらして）",
    romaji: "ni terashite",
    traducao: "em relação a ~; à luz de ~",
    explicacao:
      "A expressão に照らして (ni terashite) é usada para indicar que algo é considerado ou avaliado em relação a uma determinada condição ou contexto.",
    exemplo: {
      frase: "この問題は法律に照らして判断されるべきだ。",
      furigana: "このもんだいはほうりつにてらしてはんだんされるべきだ。",
      romaji: "Kono mondai wa houritsu ni terashite handan sareru beki da.",
      traducao: "Este problema deve ser avaliado à luz da lei.",
    },
  },
  {
    topico: "にとどまらず",
    romaji: "ni todomarazu",
    traducao: "não se limitar a ~; não se restringir a ~",
    explicacao:
      "A expressão にとどまらず (ni todomarazu) é usada para indicar que algo não se limita apenas a uma situação específica, mas vai além disso.",
    exemplo: {
      frase: "彼の影響は国内にとどまらず、国際的にも大きい。",
      furigana:
        "かれのえいきょうはこくないにとどまらず、こくさいてきにもおおきい。",
      romaji:
        "Kare no eikyou wa kokunai ni todomarazu, kokusaiteki ni mo ookii.",
      traducao:
        "A influência dele não se limita apenas ao país, mas também é significativa internacionalmente.",
    },
  },
  {
    topico: "には無理がある（にはむりがある）",
    romaji: "ni wa muri ga aru",
    traducao: "ser impossível de ~; ser irrealista ~",
    explicacao:
      "A expressão には無理がある (ni wa muri ga aru) é usada para indicar que algo é impossível de realizar ou irrealista.",
    exemplo: {
      frase: "その要求は時間的には無理がある。",
      furigana: "そのようきゅうはじかんてきにはむりがある。",
      romaji: "Sono youkyuu wa jikanteki ni wa muri ga aru.",
      traducao:
        "Essa exigência é impossível de ser cumprida em termos de tempo.",
    },
  },
  {
    topico: "によらず",
    romaji: "ni yorazu",
    traducao: "independentemente de ~; não importa ~",
    explicacao:
      "A expressão によらず (ni yorazu) é usada para indicar que algo não depende de uma determinada condição ou fator.",
    exemplo: {
      frase: "成功は努力によらず、運に左右されることもある。",
      furigana: "せいこうはどりょくによらず、うんにさゆうされることもある。",
      romaji: "Seikou wa doryoku ni yorazu, un ni sayuu sareru koto mo aru.",
      traducao:
        "O sucesso não depende apenas do esforço, às vezes é influenciado pela sorte.",
    },
  },
  {
    topico: "に～を重ねて（に～をかさねて）",
    romaji: "ni ~ o kasanete",
    traducao: "acrescentar ~ repetidamente; acumular ~ repetidamente",
    explicacao:
      "A expressão に～を重ねて (ni ~ o kasanete) é usada para indicar que algo é repetidamente adicionado ou acumulado.",
    exemplo: {
      frase: "彼は努力を重ねて成功を手に入れた。",
      furigana: "かれはどりょくをかさねてせいこうをてにいれた。",
      romaji: "Kare wa doryoku o kasanete seikou o te ni ireta.",
      traducao: "Ele alcançou o sucesso ao repetidamente se esforçar.",
    },
  },
  {
    topico: "にもほどがある",
    romaji: "ni mo hodo ga aru",
    traducao: "haver um limite para ~; ir longe demais com ~",
    explicacao:
      "A expressão にもほどがある (ni mo hodo ga aru) é usada para indicar que algo atinge ou ultrapassa um limite, sugerindo que é exagerado ou inadequado.",
    exemplo: {
      frase: "彼の行動にもほどがある。",
      furigana: "かれのこうどうにもほどがある。",
      romaji: "Kare no koudou ni mo hodo ga aru.",
      traducao: "Ele vai longe demais em suas ações.",
    },
  },
  {
    topico: "にも増して（にもまして）",
    romaji: "ni mo mashite",
    traducao: "ainda mais do que ~; especialmente ~",
    explicacao:
      "A expressão にも増して (ni mo mashite) é usada para enfatizar que algo é ainda mais intenso ou significativo do que algo mencionado anteriormente.",
    exemplo: {
      frase: "今年の夏は暑さにも増して湿度が高い。",
      furigana: "ことしのなつはあつさにもましてしつどがたかい。",
      romaji: "Kotoshi no natsu wa atsusa ni mo mashite shitsudo ga takai.",
      traducao: "Este verão está especialmente quente e úmido.",
    },
  },
  {
    topico: "には当たらない（にはあたらない）",
    romaji: "ni wa ataranai",
    traducao: "não se aplicar a ~; não ser adequado para ~",
    explicacao:
      "A expressão には当たらない (ni wa ataranai) é usada para indicar que algo não se aplica a uma determinada situação ou não é adequado para algo.",
    exemplo: {
      frase: "このルールは彼には当たらない。",
      furigana: "このるーるはかれにはあたらない。",
      romaji: "Kono ru-ru wa kare ni wa ataranai.",
      traducao: "Essa regra não se aplica a ele.",
    },
  },
  {
    topico: "には及ばない（にはおよばない）",
    romaji: "ni wa oyobanai",
    traducao: "não estar à altura de ~; não se comparar com ~",
    explicacao:
      "A expressão には及ばない (ni wa oyobanai) é usada para indicar que algo não está à altura de algo mencionado anteriormente ou não se compara a algo.",
    exemplo: {
      frase: "彼の実力には及ばない。",
      furigana: "かれのじつりょくにはおよばない。",
      romaji: "Kare no jitsuryoku ni wa oyobanai.",
      traducao: "Ele não está à altura do talento dele.",
    },
  },
  {
    topico: "の至り（のいたり）",
    romaji: "no itari",
    traducao: "ao extremo de ~; até o ponto máximo de ~",
    explicacao:
      "A expressão の至り (no itari) é usada para indicar que algo atingiu o ponto máximo ou extremo de uma determinada condição ou estado.",
    exemplo: {
      frase: "感謝の至りです。",
      furigana: "かんしゃのいたりです。",
      romaji: "Kansha no itari desu.",
      traducao: "Estou extremamente grato.",
    },
  },
  {
    topico: "の極み（のきわみ）",
    romaji: "no kiwami",
    traducao: "o auge de ~; a essência de ~",
    explicacao:
      "A expressão の極み (no kiwami) é usada para indicar que algo alcançou o auge ou a essência de algo.",
    exemplo: {
      frase: "美食の極みを味わう。",
      furigana: "びしょくのきわみをあじわう。",
      romaji: "Bishoku no kiwami o ajiwau.",
      traducao: "Desfrutar do auge da culinária.",
    },
  },
  {
    topico: "のなんのって",
    romaji: "no nan no tte",
    traducao: "além de ~; não há nada como ~",
    explicacao:
      "A expressão のなんのって (no nan no tte) é usada para enfatizar que algo é incomparável ou excepcionalmente notável.",
    exemplo: {
      frase: "彼の才能はのなんのってすごい。",
      furigana: "かれのさいのうはのなんのってすごい。",
      romaji: "Kare no sainou wa no nan no tte sugoi.",
      traducao: "O talento dele é incrível além de qualquer comparação.",
    },
  },
  {
    topico: "のやら / ものやら / ことやら",
    romaji: "no yara / mono yara / koto yara",
    traducao: "coisas como ~; coisas do tipo ~; coisas diversas como ~",
    explicacao:
      "As expressões のやら (no yara), ものやら (mono yara) e ことやら (koto yara) são usadas para indicar uma lista não exaustiva de coisas ou exemplos relacionados a algo mencionado anteriormente.",
    exemplo: {
      frase: "彼女は旅行のやら買い物のやら忙しい。",
      furigana: "かのじょはりょこうのやらかいもののやらいそがしい。",
      romaji: "Kanojo wa ryokou no yara kaimono no yara isogashii.",
      traducao:
        "Ela está ocupada com coisas como viagens, compras e assim por diante.",
    },
  },
  {
    topico: "のやら～のやら",
    romaji: "no yara ~ no yara",
    traducao: "entre ~ e ~; tanto ~ como ~",
    explicacao:
      "A expressão のやら～のやら (no yara ~ no yara) é usada para listar várias opções ou exemplos relacionados a algo mencionado anteriormente.",
    exemplo: {
      frase: "彼はパーティーでケーキのやらアイスクリームのやら食べていた。",
      furigana:
        "かれはぱーてぃーでけーきのやらあいすくりーむのやらたべていた。",
      romaji: "Kare wa paatii de keeki no yara aisukuriimu no yara tabete ita.",
      traducao:
        "Ele estava comendo coisas como bolo, sorvete e assim por diante na festa.",
    },
  },
  {
    topico: "を踏まえて（をふまえて）",
    romaji: "o fumaete",
    traducao: "com base em ~; levando em consideração ~",
    explicacao:
      "A expressão を踏まえて (o fumaete) é usada para indicar que algo é feito ou decidido com base em uma determinada informação, contexto ou consideração.",
    exemplo: {
      frase: "計画を踏まえて進める。",
      furigana: "けいかくをふまえてすすめる。",
      romaji: "Keikaku o fumaete susumeru.",
      traducao: "Avançar com base no planejamento.",
    },
  },
  {
    topico: "を経て（をへて）",
    romaji: "o hete",
    traducao: "através de ~; passando por ~",
    explicacao:
      "A expressão を経て (o hete) é usada para indicar que algo ocorre ou é alcançado passando por um determinado processo ou estágio.",
    exemplo: {
      frase: "苦労を経て成功を手に入れる。",
      furigana: "くろうをへてせいこうをてにいれる。",
      romaji: "Kurou o hete seikou o te ni ireru.",
      traducao: "Alcançar o sucesso através do esforço.",
    },
  },
  {
    topico: "を控えて（をひかえて）",
    romaji: "o hikaete",
    traducao: "aguardando ~; em preparação para ~",
    explicacao:
      "A expressão を控えて (o hikaete) é usada para indicar que algo está aguardando ou se preparando para algo que acontecerá no futuro.",
    exemplo: {
      frase: "大会を控えて練習を intensificar.",
      furigana: "たいかいをひかえてれんしゅうを intensificar.",
      romaji: "Taikai o hikaete renshuu o intensificar.",
      traducao: "Intensificar os treinos em preparação para o torneio.",
    },
  },
  {
    topico: "をいいことに",
    romaji: "o ii koto ni",
    traducao: "aproveitando ~; usando ~ a seu favor",
    explicacao:
      "A expressão をいいことに (o ii koto ni) é usada para indicar que alguém está aproveitando uma oportunidade ou usando algo a seu favor.",
    exemplo: {
      frase: "彼は知識をいいことに他人を上から見下す。",
      furigana: "かれはちしきをいいことにたにんをうえからみくだす。",
      romaji: "Kare wa chishiki o ii koto ni tanin o ue kara mikudasu.",
      traducao:
        "Ele aproveita seu conhecimento para olhar os outros de cima para baixo.",
    },
  },
  {
    topico: "を顧みず / も顧みず（をかえりみず / もかえりみず）",
    romaji: "o kaerimizu / mo kaerimizu",
    traducao: "sem se importar com ~; sem considerar ~",
    explicacao:
      "As expressões を顧みず (o kaerimizu) e も顧みず (mo kaerimizu) são usadas para indicar que alguém não se importa ou não considera algo.",
    exemplo: {
      frase: "彼は他人の意見を顧みず自分のやり方を貫いた。",
      furigana:
        "かれはたにんのいけんをかえりみずじぶんのやりかたをつらぬいた。",
      romaji:
        "Kare wa tanin no iken o kaerimizu jibun no yarikata o tsuranuita.",
      traducao:
        "Ele seguiu seu próprio caminho sem se importar com as opiniões dos outros.",
    },
  },
  {
    topico: "を限りに（をかぎりに）",
    romaji: "o kagiri ni",
    traducao: "a partir de ~; a contar de ~",
    explicacao:
      "A expressão を限りに (o kagiri ni) é usada para indicar que algo ocorre a partir de um determinado momento ou data.",
    exemplo: {
      frase: "今日を限りに禁煙する。",
      furigana: "きょうをかぎりにきんえんする。",
      romaji: "Kyou o kagiri ni kin'en suru.",
      traducao: "A partir de hoje, vou parar de fumar.",
    },
  },
  {
    topico: "を兼ねて（をかねて）",
    romaji: "o kanete",
    traducao: "ao mesmo tempo que ~; combinando ~ com ~",
    explicacao:
      "A expressão を兼ねて (o kanete) é usada para indicar que algo é feito ou ocorre ao mesmo tempo que outra coisa, combinando duas funções ou propósitos.",
    exemplo: {
      frase: "祝賀会を兼ねて歓迎会を開く。",
      furigana: "しゅくがかいをかねてかんげいかいをひらく。",
      romaji: "Shukugakai o kanete kangeikai o hiraku.",
      traducao:
        "Realizar uma festa de boas-vindas combinada com uma celebração.",
    },
  },
  {
    topico: "を皮切りに（をかわきりに）",
    romaji: "o kawakiri ni",
    traducao: "começando com ~; iniciando com ~",
    explicacao:
      "A expressão を皮切りに (o kawakiri ni) é usada para indicar que algo começa ou inicia com um determinado evento, ação ou item.",
    exemplo: {
      frase: "このプロジェクトを皮切りに新しい計画が始まった。",
      furigana: "このぷろじぇくとをかわきりにあたらしいけいかくがはじまった。",
      romaji: "Kono purojekuto o kawakiri ni atarashii keikaku ga hajimatta.",
      traducao: "Um novo plano começou com este projeto.",
    },
  },
  {
    topico: "を機に（をきに）",
    romaji: "o ki ni",
    traducao: "como uma oportunidade para ~; usando ~ como uma chance",
    explicacao:
      "A expressão を機に (o ki ni) é usada para indicar que algo é feito ou ocorre aproveitando uma oportunidade ou usando algo como uma chance.",
    exemplo: {
      frase: "転職を機にスキルを磨く。",
      furigana: "てんしょくをきにスキルをみがく。",
      romaji: "Tenshoku o ki ni sukiru o migaku.",
      traducao:
        "Aprimorar as habilidades aproveitando a oportunidade da mudança de emprego.",
    },
  },
  {
    topico: "を禁じ得ない（をきんじえない）",
    romaji: "o kinjienai",
    traducao: "não poder deixar de ~; inevitavelmente ~",
    explicacao:
      "A expressão を禁じ得ない (o kinjienai) é usada para indicar que algo é inevitável ou que não pode ser evitado.",
    exemplo: {
      frase: "彼女の美しさを見たら感嘆を禁じ得ない。",
      furigana: "かのじょのうつくしさをみたらかんたんをきんじえない。",
      romaji: "Kanojo no utsukushisa o mitara kantan o kinjienai.",
      traducao: "Não posso deixar de me maravilhar com a beleza dela.",
    },
  },
  {
    topico: "をものともせずに",
    romaji: "o mono tomo sezu ni",
    traducao: "sem se deixar abalar por ~; sem se render a ~",
    explicacao:
      "A expressão をものともせずに (o mono tomo sezu ni) é usada para indicar que alguém não é afetado ou não se rende diante de algo.",
    exemplo: {
      frase: "困難をものともせずに前に進む。",
      furigana: "こんなんをものともせずにまえにすすむ。",
      romaji: "Konnan o mono tomo sezu ni mae ni susumu.",
      traducao: "Avançar sem se deixar abalar pelas dificuldades.",
    },
  },
  {
    topico: "をもって / をもちまして",
    romaji: "o motte / o chimashite",
    traducao: "usando ~; com ~",
    explicacao:
      "As expressões をもって (o motte) e をもちまして (o chimashite) são usadas para indicar que algo é feito ou realizado usando algo específico.",
    exemplo: {
      frase: "このメールをもちまして連絡完了とさせていただきます。",
      furigana:
        "このめーるをもちましてれんらくかんりょうとさせていただきます。",
      romaji: "Kono meeru o chimashite renraku kanryou to sasete itadakimasu.",
      traducao:
        "Gostaria de considerar esta mensagem como uma conclusão de contato.",
    },
  },
  {
    topico: "をおいて～ない",
    romaji: "o oite ~nai",
    traducao: "além de ~; sem ~",
    explicacao:
      "A expressão をおいて～ない (o oite ~nai) é usada para indicar que algo não acontece ou não existe além de uma determinada condição ou fator.",
    exemplo: {
      frase: "努力をおいて成功はない。",
      furigana: "どりょくをおいてせいこうはない。",
      romaji: "Doryoku o oite seikou wa nai.",
      traducao: "Não há sucesso sem esforço.",
    },
  },
  {
    topico: "を押して / を押し切って（をおして / をおしきって）",
    romaji: "o oshite / o oshikitte",
    traducao: "superando ~; passando por ~; atravessando ~",
    explicacao:
      "As expressões を押して (o oshite) e を押し切って (o oshikitte) são usadas para indicar que alguém supera, passa por cima ou atravessa uma dificuldade, obstáculo ou oposição.",
    exemplo: {
      frase: "困難を押して目標を達成する。",
      furigana: "こんなんをおしてもくひょうをたっせいする。",
      romaji: "Konnan o oshite mokuhyou o tassei suru.",
      traducao: "Alcançar metas superando as dificuldades.",
    },
  },
  {
    topico: "を境に（をさかいに）",
    romaji: "o sakai ni",
    traducao: "a partir de ~; com a chegada de ~",
    explicacao:
      "A expressão を境に (o sakai ni) é usada para indicar que algo acontece ou muda a partir de um determinado momento ou evento.",
    exemplo: {
      frase: "引っ越しを境に生活環境が変わった。",
      furigana: "ひっこしをさかいにせいかつかんきょうがかわった。",
      romaji: "Hikkoshi o sakai ni seikatsu kankyou ga kawatta.",
      traducao: "A vida mudou com a chegada da mudança.",
    },
  },
  {
    topico: "を余儀なくされる（をよぎなくされる）",
    romaji: "o yogi naku sareru",
    traducao: "ser obrigado a ~; ser forçado a ~",
    explicacao:
      "A expressão を余儀なくされる (o yogi naku sareru) é usada para indicar que alguém é obrigado ou forçado a fazer algo devido a circunstâncias ou situações.",
    exemplo: {
      frase: "天候の悪化でイベントの中止を余儀なくされた。",
      furigana: "てんこうのあっかでいべんとのちゅうしをよぎなくされた。",
      romaji: "Tenkou no akka de ibento no chuushi o yogi naku sareta.",
      traducao:
        "Devido à piora das condições climáticas, fomos obrigados a cancelar o evento.",
    },
  },
  {
    topico: "をよそに",
    romaji: "o yoso ni",
    traducao: "ignorando ~; apesar de ~; ao contrário de ~",
    explicacao:
      "A expressão をよそに (o yoso ni) é usada para indicar que alguém ignora, vai contra ou não é afetado por algo que normalmente teria impacto ou influência.",
    exemplo: {
      frase: "批判をよそに自信を持ち続ける。",
      furigana: "ひはんをよそにじしんをもちつづける。",
      romaji: "Hihan o yoso ni jishin o mochitsuzukeru.",
      traducao: "Continuar a ter confiança, apesar das críticas.",
    },
  },
  {
    topico: "を前提として（をぜんていとして）",
    romaji: "o zentei to shite",
    traducao: "com base em ~; assumindo ~ como premissa",
    explicacao:
      "A expressão を前提として (o zentei to shite) é usada para indicar que algo é feito ou considerado com base em uma determinada condição ou premissa.",
    exemplo: {
      frase: "計画を前提として行動する。",
      furigana: "けいかくをぜんていとしてこうどうする。",
      romaji: "Keikaku o zentei to shite koudou suru.",
      traducao: "Agir com base no plano.",
    },
  },
  {
    topico: "に先駆けて（にさきがけて）",
    romaji: "ni sakikakete",
    traducao: "antes de ~; antecipando ~",
    explicacao:
      "A expressão に先駆けて (ni sakikakete) é usada para indicar que algo acontece ou é feito antes de outra coisa, antecipando-se a ela.",
    exemplo: {
      frase: "開幕式に先駆けてパフォーマンスを披露する。",
      furigana: "かいまくしきにさきがけてぱふぉーまんすをひろうする。",
      romaji: "Kaimaku-shiki ni sakikakete pafōmansu o hirou suru.",
      traducao: "Apresentar uma performance antes da cerimônia de abertura.",
    },
  },
  {
    topico: "に忍びない（にしのびない）",
    romaji: "ni shinobinai",
    traducao: "não poder suportar ~; não ser capaz de tolerar ~",
    explicacao:
      "A expressão に忍びない (ni shinobinai) é usada para indicar que alguém não pode suportar ou tolerar algo devido a desagrado, aversão ou dificuldade.",
    exemplo: {
      frase: "不正は許せない。それに忍びない。",
      furigana: "ふせいはゆるせない。それにしのびない。",
      romaji: "Fusei wa yurusenai. Sore ni shinobinai.",
      traducao: "Não posso tolerar a desonestidade. É insuportável.",
    },
  },
  {
    topico: "にしたところで / としたところで",
    romaji: "ni shita tokoro de / to shita tokoro de",
    traducao: "mesmo se ~; não importa se ~",
    explicacao:
      "As expressões にしたところで (ni shita tokoro de) e としたところで (to shita tokoro de) são usadas para indicar que algo não faz diferença ou não importa, mesmo se certas condições ou circunstâncias forem atendidas.",
    exemplo: {
      frase: "勉強したところで試験に合格できるかどうかわからない。",
      furigana:
        "べんきょうしたところでしけんにごうかくできるかどうかわからない。",
      romaji:
        "Benkyou shita tokoro de shiken ni goukaku dekiru ka douka wakaranai.",
      traducao: "Não importa se você estuda, não se sabe se passará no exame.",
    },
  },
  {
    topico: "にして",
    romaji: "ni shite",
    traducao: "sendo ~; mesmo sendo ~",
    explicacao:
      "A expressão にして (ni shite) é usada para descrever algo que é verdadeiro ou aplicável a um certo grau, mesmo considerando outras circunstâncias ou comparações.",
    exemplo: {
      frase: "彼は若くして成功を収めた。",
      furigana: "かれはわかくしてせいこうをおさめた。",
      romaji: "Kare wa wakaku shite seikou o osameta.",
      traducao: "Ele obteve sucesso sendo jovem.",
    },
  },
  {
    topico: "に即して（にそくして）",
    romaji: "ni sokushite",
    traducao: "de acordo com ~; seguindo ~",
    explicacao:
      "A expressão に即して (ni sokushite) é usada para indicar que algo é feito ou realizado de acordo com um padrão, regra ou diretriz.",
    exemplo: {
      frase: "法律に即してビジネスを運営する。",
      furigana: "ほうりつにそくしてびじねすをうんえいする。",
      romaji: "Houritsu ni sokushite bijinesu o un'ei suru.",
      traducao: "Operar negócios de acordo com a lei.",
    },
  },
  {
    topico: "に耐える / に耐えない（にたえる / にたえない）",
    romaji: "ni taeru / ni taenai",
    traducao: "suportar ~; aguentar ~ / não suportar ~; não aguentar ~",
    explicacao:
      "As expressões に耐える (ni taeru) e に耐えない (ni taenai) são usadas para indicar que alguém suporta ou aguenta algo ou, no caso de に耐えない, não suporta ou não aguenta algo.",
    exemplo: {
      frase: "過酷な状況に耐える力を持っている。",
      furigana: "かこくなじょうきょうにたえるちからをもっている。",
      romaji: "Kakoku na joukyou ni taeru chikara o motte iru.",
      traducao: "Tenho a força para suportar condições difíceis.",
    },
  },
  {
    topico: "に足らない / に足りない（にたらない / にたりない）",
    romaji: "ni taranai / ni tarinai",
    traducao: "não ser suficiente ~; ser insuficiente ~",
    explicacao:
      "As expressões に足らない (ni taranai) e に足りない (ni tarinai) são usadas para indicar que algo não é suficiente ou é insuficiente para uma determinada finalidade ou objetivo.",
    exemplo: {
      frase: "知識だけでは実力に足りない。",
      furigana: "ちしきだけではじつりょくにたりない。",
      romaji: "Chishiki dake dewa jitsuryoku ni tarinai.",
      traducao: "Apenas conhecimento não é suficiente para habilidade real.",
    },
  },
  {
    topico: "に足る / に足りる（にたる / にたりる）",
    romaji: "ni taru / ni tariru",
    traducao: "ser digno de ~; merecer ~",
    explicacao:
      "As expressões に足る (ni taru) e に足りる (ni tariru) são usadas para indicar que algo é digno ou merece ser considerado ou reconhecido por uma determinada qualidade ou valor.",
    exemplo: {
      frase: "彼の功績は称賛に足る。",
      furigana: "かれのこうせきはしょうさんにたる。",
      romaji: "Kare no kouseki wa shousan ni taru.",
      traducao: "Suas conquistas são dignas de elogios.",
    },
  },
  {
    topico: "に照らして（にてらして）",
    romaji: "ni terashite",
    traducao: "com base em ~; à luz de ~; considerando ~",
    explicacao:
      "A expressão に照らして (ni terashite) é usada para indicar que algo é feito, decidido ou considerado com base em um determinado critério, situação ou perspectiva.",
    exemplo: {
      frase: "経験に照らして最適な選択をする。",
      furigana: "けいけんにてらしてさいてきなせんたくをする。",
      romaji: "Keiken ni terashite saiteki na sentaku o suru.",
      traducao: "Fazer a escolha ideal com base na experiência.",
    },
  },
  {
    topico: "にとどまらず",
    romaji: "ni todomarazu",
    traducao: "não se limitar a ~; não se restringir a ~",
    explicacao:
      "A expressão にとどまらず (ni todomarazu) é usada para indicar que algo vai além de um limite esperado, abrangendo mais do que o esperado.",
    exemplo: {
      frase: "彼の影響は国内にとどまらず、国際的にも大きい。",
      furigana:
        "かれのえいきょうはこくないにとどまらず、こくさいてきにもおおきい。",
      romaji:
        "Kare no eikyou wa kokunai ni todomarazu, kokusaiteki ni mo ookii.",
      traducao:
        "A influência dele não se limita ao país, é também significativa internacionalmente.",
    },
  },
  {
    topico: "には無理がある（にはむりがある）",
    romaji: "ni wa muri ga aru",
    traducao: "ser impraticável ~; ser impossível ~",
    explicacao:
      "A expressão には無理がある (ni wa muri ga aru) é usada para indicar que algo é impraticável, impossível ou não viável em determinada situação ou circunstância.",
    exemplo: {
      frase: "1日でその仕事を終わらせるのは時間的には無理がある。",
      furigana:
        "いちにちでそのしごとをおわらせるのはじかんてきにはむりがある。",
      romaji:
        "Ichinichi de sono shigoto o owaraseru no wa jikanteki ni wa muri ga aru.",
      traducao:
        "Concluir esse trabalho em um dia é impraticável em termos de tempo.",
    },
  },
  {
    topico: "によらず",
    romaji: "ni yorazu",
    traducao: "independentemente de ~; sem depender de ~",
    explicacao:
      "A expressão によらず (ni yorazu) é usada para indicar que algo ocorre ou é verdadeiro independentemente de um determinado fator ou condição.",
    exemplo: {
      frase: "経験の有無によらず、全ての応募者にチャンスを与える。",
      furigana:
        "けいけんのうむによらず、すべてのおうぼしゃにちゃんすをあたえる。",
      romaji: "Keiken no umu ni yorazu, subete no oubo-sha ni chansu o ataeru.",
      traducao:
        "Dar oportunidade a todos os candidatos, independentemente da experiência.",
    },
  },
  {
    topico: "に～を重ねて（に～をかさねて）",
    romaji: "ni ~ o kasanete",
    traducao: "acumulando ~; empilhando ~; repetidamente ~",
    explicacao:
      "A expressão に～を重ねて (ni ~ o kasanete) é usada para indicar que algo é repetido, acumulado ou empilhado ao longo do tempo.",
    exemplo: {
      frase: "試行錯誤を重ねて最終的な解決策を見つけた。",
      furigana:
        "しこうさくごをかさねてさいしゅうてきなかいけつさくをみつけた。",
      romaji:
        "Shikou sakugo o kasanete saishuuteki na kaiketsu-saku o mitsuketa.",
      traducao:
        "Encontramos uma solução final após repetidas tentativas e erros.",
    },
  },
  {
    topico: "にもほどがある",
    romaji: "ni mo hodo ga aru",
    traducao: "haver limites ~; ser excessivo ~",
    explicacao:
      "A expressão にもほどがある (ni mo hodo ga aru) é usada para indicar que algo é excessivo ou vai além dos limites esperados, sugerindo que é inapropriado ou demais.",
    exemplo: {
      frase: "冗談にもほどがある。今はそんなことを言わないで。",
      furigana: "じょうだんにもほどがある。いまはそんなことをいわないで。",
      romaji: "Joudan ni mo hodo ga aru. Ima wa sonna koto o iwanai de.",
      traducao: "Há limites para brincadeiras. Não diga essas coisas agora.",
    },
  },
  {
    topico: "にも増して（にもまして）",
    romaji: "ni mo mashite",
    traducao: "mais do que nunca ~; ainda mais ~",
    explicacao:
      "A expressão にも増して (ni mo mashite) é usada para indicar que algo se torna ainda mais intenso, forte ou pronunciado do que antes.",
    exemplo: {
      frase: "彼女の美しさは年々にも増している。",
      furigana: "かのじょのうつくしさはねんねんにもましている。",
      romaji: "Kanojo no utsukushisa wa nennen ni mo mashite iru.",
      traducao:
        "A beleza dela está se tornando cada vez mais intensa a cada ano.",
    },
  },
  {
    topico: "には当たらない（にはあたらない）",
    romaji: "ni wa ataranai",
    traducao: "não se aplicar a ~; não ser adequado para ~",
    explicacao:
      "A expressão には当たらない (ni wa ataranai) é usada para indicar que algo não se aplica ou não é adequado para uma determinada situação, pessoa ou contexto.",
    exemplo: {
      frase: "この規則は彼には当たらない。",
      furigana: "このきそくはかれにはあたらない。",
      romaji: "Kono kisoku wa kare ni wa ataranai.",
      traducao: "Essa regra não se aplica a ele.",
    },
  },
  {
    topico: "には及ばない（にはおよばない）",
    romaji: "ni wa oyobanai",
    traducao: "não chegar a ~; não ser suficiente para ~",
    explicacao:
      "A expressão には及ばない (ni wa oyobanai) é usada para indicar que algo não chega ou não é suficiente para atingir um determinado nível, padrão ou expectativa.",
    exemplo: {
      frase: "私の努力は彼の才能には及ばない。",
      furigana: "わたしのどりょくはかれのさいのうにはおよばない。",
      romaji: "Watashi no doryoku wa kare no sainou ni wa oyobanai.",
      traducao: "Meu esforço não chega ao nível do talento dele.",
    },
  },
  {
    topico: "の至り（のいたり）",
    romaji: "no itari",
    traducao: "o auge de ~; o máximo de ~",
    explicacao:
      "A expressão の至り (no itari) é usada para indicar que algo atinge o seu auge, o ponto mais alto ou o máximo de algo.",
    exemplo: {
      frase: "喜びの至りでした。",
      furigana: "よろこびのいたりでした。",
      romaji: "Yorokobi no itari deshita.",
      traducao: "Foi o auge da felicidade.",
    },
  },
  {
    topico: "の極み（のきわみ）",
    romaji: "no kiwami",
    traducao: "o auge de ~; o ápice de ~",
    explicacao:
      "A expressão の極み (no kiwami) é usada para indicar que algo atinge o seu auge, o ponto mais alto ou o ápice de algo.",
    exemplo: {
      frase: "料理の技術の極みを見せてくれました。",
      furigana: "りょうりのぎじゅつのきわみをみせてくれました。",
      romaji: "Ryouri no gijutsu no kiwami o misete kuremashita.",
      traducao: "Ele mostrou o ápice das habilidades culinárias.",
    },
  },
  {
    topico: "のなんのって",
    romaji: "no nan no tte",
    traducao: "mais do que qualquer coisa ~; extremamente ~",
    explicacao:
      "A expressão のなんのって (no nan no tte) é usada para enfatizar a intensidade, magnitude ou ênfase de algo.",
    exemplo: {
      frase: "彼女の美しさはのなんのってだ。",
      furigana: "かのじょのうつくしさはのなんのってだ。",
      romaji: "Kanojo no utsukushisa wa no nan no tte da.",
      traducao: "A beleza dela é extremamente impressionante.",
    },
  },
  {
    topico: "のやら / ものやら / ことやら",
    romaji: "no yara / mono yara / koto yara",
    traducao: "coisas como ~; algo como ~; várias coisas como ~",
    explicacao:
      "As expressões のやら (no yara), ものやら (mono yara) e ことやら (koto yara) são usadas para indicar uma lista de coisas ou exemplos não específicos, enfatizando a variedade ou incerteza.",
    exemplo: {
      frase: "彼の部屋には本やら雑誌やらが散らかっている。",
      furigana: "かれのへやにはほんやらざっしやらがちらかっている。",
      romaji: "Kare no heya ni wa hon yara zasshi yara ga chirakatte iru.",
      traducao:
        "Livros, revistas e coisas assim estão espalhados pelo quarto dele.",
    },
  },
  {
    topico: "のやら～のやら",
    romaji: "no yara ~ no yara",
    traducao: "coisas como ~ e ~; algo como ~ e ~",
    explicacao:
      "A expressão のやら～のやら (no yara ~ no yara) é usada para indicar uma lista de coisas ou exemplos não específicos, enfatizando a variedade ou incerteza, onde são mencionadas duas ou mais coisas.",
    exemplo: {
      frase: "彼の話は面白いのやらくだらないのやら。",
      furigana: "かれのはなしはおもしろいのやらくだらないのやら。",
      romaji: "Kare no hanashi wa omoshiroi no yara kudaranai no yara.",
      traducao: "As histórias dele são tanto interessantes quanto sem graça.",
    },
  },
  {
    topico: "を踏まえて（をふまえて）",
    romaji: "o fumaete",
    traducao: "com base em ~; levando em consideração ~",
    explicacao:
      "A expressão を踏まえて (o fumaete) é usada para indicar que algo é feito ou decidido com base em uma certa consideração, informação ou circunstância.",
    exemplo: {
      frase: "最新の研究結果を踏まえて報告を行った。",
      furigana: "さいしんのけんきゅうけっかをふまえてほうこくをおこなった。",
      romaji: "Saihin no kenkyuu kekka o fumaete houkoku o okonatta.",
      traducao:
        "Realizamos um relatório com base nos resultados mais recentes da pesquisa.",
    },
  },
  {
    topico: "を経て（をへて）",
    romaji: "o hete",
    traducao: "passando por ~; ao longo de ~; por meio de ~",
    explicacao:
      "A expressão を経て (o hete) é usada para indicar um processo ou trajetória em que algo ou alguém passa por várias etapas, experiências ou eventos.",
    exemplo: {
      frase: "彼は大学を経て研究者として活躍している。",
      furigana: "かれはだいがくをへてけんきゅうしゃとしてかつやくしている。",
      romaji: "Kare wa daigaku o hete kenkyuusha toshite katsuyaku shite iru.",
      traducao:
        "Ele está ativo como pesquisador depois de passar pela universidade.",
    },
  },
  {
    topico: "を控えて（をひかえて）",
    romaji: "o hikaete",
    traducao: "em preparação para ~; à espera de ~",
    explicacao:
      "A expressão を控えて (o hikaete) é usada para indicar que algo está em preparação ou aguardando um evento ou situação específica.",
    exemplo: {
      frase: "試験を控えて一生懸命勉強している。",
      furigana: "しけんをひかえていっしょうけんめいべんきょうしている。",
      romaji: "Shiken o hikaete isshoukenmei benkyou shite iru.",
      traducao: "Estou estudando intensamente em preparação para o exame.",
    },
  },
  {
    topico: "をいいことに",
    romaji: "o ii koto ni",
    traducao: "aproveitando ~; usando ~ a seu favor",
    explicacao:
      "A expressão をいいことに (o ii koto ni) é usada para indicar que alguém está aproveitando uma situação, evento ou condição a seu favor ou benefício pessoal.",
    exemplo: {
      frase: "彼は他人の不注意をいいことに盗みを働いた。",
      furigana: "かれはたにんのふちゅういをいいことにぬすみをはたらいた。",
      romaji: "Kare wa tanin no fuchuui o ii koto ni nusumi o hataraita.",
      traducao:
        "Ele aproveitou a distração de outra pessoa para cometer um roubo.",
    },
  },
  {
    topico: "を顧みず / も顧みず（をかえりみず / もかえりみず）",
    romaji: "o kaerimizu / mo kaerimizu",
    traducao: "sem olhar para trás ~; sem se preocupar com ~",
    explicacao:
      "A expressão を顧みず (o kaerimizu) ou も顧みず (mo kaerimizu) é usada para indicar que alguém age ou decide algo sem olhar para trás ou sem se preocupar com as consequências.",
    exemplo: {
      frase: "彼は自分の利益を顧みず、他人を裏切った。",
      furigana: "かれはじぶんのりえきをかえりみず、たにんをうらぎった。",
      romaji: "Kare wa jibun no rieki o kaerimizu, tanin o uragitta.",
      traducao:
        "Ele traiu outras pessoas sem se preocupar com seu próprio benefício.",
    },
  },
  {
    topico: "を限りに（をかぎりに）",
    romaji: "o kagiri ni",
    traducao: "a partir de ~; a partir de agora ~",
    explicacao:
      "A expressão を限りに (o kagiri ni) é usada para indicar que algo acontece a partir de um determinado ponto ou momento, geralmente usado para indicar uma mudança ou transição.",
    exemplo: {
      frase: "退職を限りに新しいキャリアをスタートした。",
      furigana: "たいしょくをかぎりにあたらしいきゃりあをすたーとした。",
      romaji: "Taishoku o kagiri ni atarashii kyaria o sutaato shita.",
      traducao: "Comecei uma nova carreira a partir da minha aposentadoria.",
    },
  },
  {
    topico: "を兼ねて（をかねて）",
    romaji: "o kanete",
    traducao: "ao mesmo tempo ~; simultaneamente ~",
    explicacao:
      "A expressão を兼ねて (o kanete) é usada para indicar que algo acontece ou é feito ao mesmo tempo, cumprindo várias funções ou propósitos simultaneamente.",
    exemplo: {
      frase: "結婚式を兼ねて家族の集まりを開いた。",
      furigana: "けっこんしきをかねてかぞくのあつまりをひらいた。",
      romaji: "Kekkonshiki o kanete kazoku no atsumari o hiraita.",
      traducao:
        "Realizamos uma reunião familiar ao mesmo tempo que o casamento.",
    },
  },
  {
    topico: "を皮切りに（をかわきりに）",
    romaji: "o kawakiri ni",
    traducao: "começando com ~; a partir de ~",
    explicacao:
      "A expressão を皮切りに (o kawakiri ni) é usada para indicar que algo começa com uma determinada coisa ou evento, geralmente usado para indicar o início de uma série de ações ou eventos.",
    exemplo: {
      frase: "彼の演説を皮切りにデモが始まった。",
      furigana: "かれのえんぜつをかわきりにデモがはじまった。",
      romaji: "Kare no enzetsu o kawakiri ni demo ga hajimatta.",
      traducao: "Os protestos começaram com o discurso dele.",
    },
  },
  {
    topico: "を機に（をきに）",
    romaji: "o kini",
    traducao: "aproveitando a oportunidade de ~; com base em ~",
    explicacao:
      "A expressão を機に (o kini) é usada para indicar que algo acontece aproveitando uma oportunidade ou situação específica, ou com base em algo que aconteceu.",
    exemplo: {
      frase: "留学を機に日本語を学び始めた。",
      furigana: "りゅうがくをきににほんごをまなびはじめた。",
      romaji: "Ryuugaku o kini nihongo o manabi hajimeta.",
      traducao:
        "Comecei a aprender japonês aproveitando a oportunidade de estudar no exterior.",
    },
  },
  {
    topico: "を禁じ得ない（をきんじえない）",
    romaji: "o kinjienai",
    traducao: "não pode ser evitado ~; inevitável ~",
    explicacao:
      "A expressão を禁じ得ない (o kinjienai) é usada para indicar que algo não pode ser evitado ou é inevitável dadas as circunstâncias ou condições.",
    exemplo: {
      frase: "彼の才能は称賛を禁じ得ない。",
      furigana: "かれのさいのうはしょうさんをきんじえない。",
      romaji: "Kare no sainou wa shousan o kinjienai.",
      traducao: "O talento dele é indiscutível e digno de elogios.",
    },
  },
  {
    topico: "をものともせずに",
    romaji: "o mono to mo sezu ni",
    traducao: "sem se deixar intimidar por ~; sem se render a ~",
    explicacao:
      "A expressão をものともせずに (o mono to mo sezu ni) é usada para indicar que alguém não se deixa intimidar ou se rende diante de uma situação desafiadora ou difícil.",
    exemplo: {
      frase: "彼は困難にものともせずに目標を達成した。",
      furigana: "かれはこんなんにものともせずにもくひょうをたっせいした。",
      romaji: "Kare wa konnan ni mono to mo sezu ni mokuhyou o tassei shita.",
      traducao:
        "Ele alcançou suas metas sem se deixar intimidar pelas dificuldades.",
    },
  },
  {
    topico: "をもって / をもちまして",
    romaji: "o motte / o mochimashite",
    traducao: "usando ~ como ~; com ~ como ~",
    explicacao:
      "A expressão をもって (o motte) ou をもちまして (o mochimashite) é usada para indicar que algo é realizado, usado ou considerado como algo específico ou oficial, geralmente usado em documentos formais ou anúncios.",
    exemplo: {
      frase: "本契約をもって双方の同意が成立します。",
      furigana: "ほんけいやくをもってそうほうのどういがせいりつします。",
      romaji: "Honkeiyaku o motte souhou no doui ga seiritsu shimasu.",
      traducao:
        "O acordo será estabelecido com o contrato oficial de ambas as partes.",
    },
  },
  {
    topico: "をおいて～ない",
    romaji: "o oite ~nai",
    traducao: "além de ~; sem ~",
    explicacao:
      "A expressão をおいて (o oite) seguida de uma forma negativa (~nai) é usada para indicar que algo não existe ou não é feito além de uma determinada coisa ou situação.",
    exemplo: {
      frase: "彼女は学業をおいて何も考えていない。",
      furigana: "かのじょはがくぎょうをおいてなにもかんがえていない。",
      romaji: "Kanojo wa gakugyou o oite nani mo kangaete inai.",
      traducao: "Ela não pensa em mais nada além dos estudos.",
    },
  },
  {
    topico: "を押して / を押し切って（をおして / をおしきって）",
    romaji: "o oshite / o oshikitte",
    traducao: "superar ~; vencer ~; avançar contra ~",
    explicacao:
      "A expressão を押して (o oshite) ou を押し切って (o oshikitte) é usada para indicar que alguém supera, vence ou avança contra uma dificuldade, obstáculo ou resistência.",
    exemplo: {
      frase: "彼は困難を押して目標を達成した。",
      furigana: "かれはこんなんをおしてもくひょうをたっせいした。",
      romaji: "Kare wa konnan o oshite mokuhyou o tassei shita.",
      traducao: "Ele alcançou suas metas superando as dificuldades.",
    },
  },
  {
    topico: "を境に（をさかいに）",
    romaji: "o sakai ni",
    traducao: "a partir de ~; com base em ~",
    explicacao:
      "A expressão を境に (o sakai ni) é usada para indicar que algo muda ou acontece a partir de um determinado ponto ou evento.",
    exemplo: {
      frase: "彼の人生はその事件を境に一変した。",
      furigana: "かれのじんせいはそのじけんをさかいにいっぺんした。",
      romaji: "Kare no jinsei wa sono jiken o sakai ni ippen shita.",
      traducao: "A vida dele mudou completamente a partir daquele incidente.",
    },
  },
  {
    topico: "を余儀なくされる（をよぎなくされる）",
    romaji: "o yogi naku sareru",
    traducao: "ser forçado a ~; ser obrigado a ~",
    explicacao:
      "A expressão を余儀なくされる (o yogi naku sareru) é usada para indicar que alguém é forçado ou obrigado a fazer algo devido a circunstâncias inevitáveis ou externas.",
    exemplo: {
      frase: "天候の変化により、試合は延期を余儀なくされた。",
      furigana: "てんこうのへんかにより、しあいはえんきをよぎなくされた。",
      romaji: "Tenkou no henka ni yori, shiai wa enki o yogi naku sareta.",
      traducao:
        "Devido à mudança climática, o jogo foi adiado por necessidade.",
    },
  },
  {
    topico: "をよそに",
    romaji: "o yoso ni",
    traducao: "ignorando ~; apesar de ~",
    explicacao:
      "A expressão をよそに (o yoso ni) é usada para indicar que alguém ou algo age ou se comporta de uma maneira oposta ou indiferente a uma determinada situação ou expectativa.",
    exemplo: {
      frase: "彼は忠告をよそに自分のやり方でやり続けた。",
      furigana: "かれはちゅうこくをよそにじぶんのやりかたでやりつづけた。",
      romaji: "Kare wa chuukoku o yoso ni jibun no yarikata de yaritsuzuketa.",
      traducao:
        "Ele continuou fazendo as coisas à sua maneira, ignorando os conselhos.",
    },
  },
  {
    topico: "を前提として（をぜんていとして）",
    romaji: "o zentei to shite",
    traducao: "com base em ~; assumindo ~ como premissa",
    explicacao:
      "A expressão を前提として (o zentei to shite) é usada para indicar que algo é feito ou considerado com base em uma suposição ou premissa específica.",
    exemplo: {
      frase: "この計画は予算の制約を前提として立案された。",
      furigana:
        "このけいかくはよさんのせいやくをぜんていとしてりつあんされた。",
      romaji: "Kono keikaku wa yosan no seiyaku o zentei to shite rian sareta.",
      traducao:
        "Esse plano foi elaborado com base nas restrições orçamentárias.",
    },
  },
  {
    topico: "といい～といい",
    romaji: "to ii ~ to ii",
    traducao: "tanto ~ quanto ~; tanto em ~ quanto em ~",
    explicacao:
      "A expressão といい～といい (to ii ~ to ii) é usada para indicar que tanto um elemento quanto o outro são desejáveis, favoráveis ou notáveis.",
    exemplo: {
      frase: "このレストランは料理とサービスといい、素晴らしいです。",
      furigana: "このレストランはりょうりとサービスといい、すばらしいです。",
      romaji: "Kono resutoran wa ryouri to saabisu to ii, subarashii desu.",
      traducao: "Este restaurante é ótimo tanto em comida quanto em serviço.",
    },
  },
  {
    topico: "といったらない",
    romaji: "to ittara nai",
    traducao: "incrivelmente ~; inigualável ~",
    explicacao:
      "A expressão といったらない (to ittara nai) é usada para enfatizar o grau extremo de algo, indicando que não há palavras suficientes para descrever sua intensidade ou qualidade.",
    exemplo: {
      frase: "彼の演技は素晴らしかったといったらない。",
      furigana: "かれのえんぎはすばらしかったといったらない。",
      romaji: "Kare no engi wa subarashikatta to ittara nai.",
      traducao: "Sua atuação foi incrível, não há palavras para descrever.",
    },
  },
  {
    topico: "という",
    romaji: "to iu",
    traducao: "chamado ~; denominado ~",
    explicacao:
      "A expressão という (to iu) é usada para fornecer uma explicação ou descrição do que se segue. Ela é frequentemente usada para indicar como algo é chamado ou denominado.",
    exemplo: {
      frase: "彼は“ボス”というあだ名で呼ばれています。",
      furigana: "かれは“ボス”というあだなでよばれています。",
      romaji: "Kare wa 'bosu' to iu adana de yobarete imasu.",
      traducao: "Ele é chamado de 'Chefe' como um apelido.",
    },
  },
  {
    topico: "というか～というか",
    romaji: "to iu ka ~ to iu ka",
    traducao: "seja ~ ou ~; tanto ~ como ~",
    explicacao:
      "A expressão というか～というか (to iu ka ~ to iu ka) é usada para indicar incerteza, sugerindo duas ou mais possibilidades ou descrições alternativas para algo.",
    exemplo: {
      frase: "彼の態度は失礼というか無礼というか、どちらかと言えば両方だ。",
      furigana:
        "かれのたいどはしつれいというかぶれいというか、どちらかといえばりょうほうだ。",
      romaji:
        "Kare no taido wa shitsurei to iu ka burei to iu ka, dochira ka to ieba ryohou da.",
      traducao:
        "Sua atitude é mais como falta de educação ou rudeza, na verdade, é um pouco dos dois.",
    },
  },
  {
    topico: "というもの",
    romaji: "to iu mono",
    traducao: "algo chamado ~; uma coisa chamada ~",
    explicacao:
      "A expressão というもの (to iu mono) é usada para enfatizar a existência ou a natureza de algo, geralmente enfatizando sua singularidade, qualidade ou característica distintiva.",
    exemplo: {
      frase: "人生というものは予測できないものだ。",
      furigana: "じんせいというものはよそくできないものだ。",
      romaji: "Jinsei to iu mono wa yosoku dekinai mono da.",
      traducao: "A vida é algo que não pode ser previsto.",
    },
  },
  {
    topico: "というところだ / といったところだ",
    romaji: "to iu tokoro da / to itta tokoro da",
    traducao: "em suma ~; em resumo ~; pode-se dizer que ~",
    explicacao:
      "A expressão というところだ (to iu tokoro da) ou といったところだ (to itta tokoro da) é usada para fornecer uma conclusão, resumo ou síntese de algo que foi discutido ou mencionado anteriormente.",
    exemplo: {
      frase: "彼女は努力家であり、才能もある。というところだ。",
      furigana: "かのじょはどりょくかであり、さいのうもある。というところだ。",
      romaji: "Kanojo wa doryoku-ka de ari, sainou mo aru. To iu tokoro da.",
      traducao: "Ela é trabalhadora e talentosa. Em suma, é isso.",
    },
  },
  {
    topico: "というわけだ",
    romaji: "to iu wake da",
    traducao: "isso significa que ~; então ~",
    explicacao:
      "A expressão というわけだ (to iu wake da) é usada para fornecer uma explicação ou conclusão lógica, indicando que algo é o resultado ou a consequência de algo mencionado anteriormente.",
    exemplo: {
      frase: "彼は忙しいから会議に参加できない。というわけだ。",
      furigana: "かれはいそがしいからかいぎにさんかできない。というわけだ。",
      romaji: "Kare wa isogashii kara kaigi ni sanka dekinai. To iu wake da.",
      traducao:
        "Ele não pode participar da reunião porque está ocupado. Então é isso.",
    },
  },
  {
    topico: "というわけではない",
    romaji: "to iu wake dewa nai",
    traducao: "não significa que ~; não é o caso de ~",
    explicacao:
      "A expressão というわけではない (to iu wake dewa nai) é usada para negar ou refutar uma afirmação ou implicação anterior, indicando que algo não significa necessariamente o que foi sugerido ou inferido.",
    exemplo: {
      frase: "彼女が笑っているから幸せだというわけではない。",
      furigana: "かのじょがわらっているからしあわせだというわけではない。",
      romaji: "Kanojo ga waratte iru kara shiawase da to iu wake dewa nai.",
      traducao: "Não significa que ela está feliz só porque está sorrindo.",
    },
  },
  {
    topico: "といわず～といわず",
    romaji: "to iu wazu ~ to iu wazu",
    traducao: "sem exceção ~; não apenas ~, mas também ~",
    explicacao:
      "A expressão といわず～といわず (to iu wazu ~ to iu wazu) é usada para indicar que algo se aplica sem exceção a várias pessoas, coisas ou situações.",
    exemplo: {
      frase: "彼の作品は子どもといわず大人にも人気です。",
      furigana: "かれのさくひんはこどもといわずおとなにもにんきです。",
      romaji: "Kare no sakuhin wa kodomo to iu wazu otona ni mo ninki desu.",
      traducao:
        "As obras dele são populares não apenas entre as crianças, mas também entre os adultos.",
    },
  },
  {
    topico: "ときている",
    romaji: "toki te iru",
    traducao: "estar ocorrendo ~; estar na moda ~",
    explicacao:
      "A expressão ときている (toki te iru) é usada para indicar que algo está ocorrendo ou está na moda no momento presente.",
    exemplo: {
      frase: "この映画は現在、大ヒットときている。",
      furigana: "このえいがはげんざい、だいひっとときている。",
      romaji: "Kono eiga wa genzai, dai hitto toki te iru.",
      traducao: "Este filme está atualmente fazendo muito sucesso.",
    },
  },
  {
    topico: "とみると",
    romaji: "to miru to",
    traducao: "ao ver ~; ao olhar ~",
    explicacao:
      "A expressão とみると (to miru to) é usada para indicar uma conclusão ou impressão obtida ao ver ou olhar para algo.",
    exemplo: {
      frase: "彼の笑顔をみると、とても幸せな気分になる。",
      furigana: "かれのえがおをみると、とてもしあわせなきぶんになる。",
      romaji: "Kare no egao o miru to, totemo shiawase na kibun ni naru.",
      traducao: "Ao ver o sorriso dele, eu me sinto muito feliz.",
    },
  },
  {
    topico: "と見るや（とみるや）",
    romaji: "to miru ya",
    traducao: "assim que ~; no momento em que ~",
    explicacao:
      "A expressão と見るや (to miru ya) é usada para indicar que algo ocorre ou acontece imediatamente após ou no momento em que outra coisa é vista ou observada.",
    exemplo: {
      frase: "彼女が部屋に入るや、会話は途切れた。",
      furigana: "かのじょがへやにはいるや、かいわはとぎれた。",
      romaji: "Kanojo ga heya ni hairu ya, kaiwa wa togireta.",
      traducao: "Assim que ela entrou na sala, a conversa parou.",
    },
  },
  {
    topico: "となると / となれば",
    romaji: "to naru to / to nareba",
    traducao: "quando se trata de ~; em relação a ~",
    explicacao:
      "A expressão となると (to naru to) ou となれば (to nareba) é usada para indicar que algo é verdadeiro, relevante ou se aplica especialmente quando se trata de uma determinada situação ou tópico.",
    exemplo: {
      frase: "日本料理となると、彼女は本当に詳しい。",
      furigana: "にほんりょうりとなると、かのじょはほんとうにくわしい。",
      romaji: "Nihon ryouri to naru to, kanojo wa hontou ni kuwashii.",
      traducao:
        "Quando se trata de culinária japonesa, ela realmente entende muito.",
    },
  },
  {
    topico: "とされる",
    romaji: "to sareru",
    traducao: "é considerado ~; é visto como ~",
    explicacao:
      "A expressão とされる (to sareru) é usada para indicar que algo é considerado ou visto de uma determinada maneira.",
    exemplo: {
      frase: "この地域は美しい自然で知られているとされています。",
      furigana: "このちいきはうつくしいしぜんでしられているとされています。",
      romaji:
        "Kono chiiki wa utsukushii shizen de shirarete iru to sarete imasu.",
      traducao: "Esta região é considerada conhecida por sua bela natureza.",
    },
  },
  {
    topico: "ときたら",
    romaji: "to kitara",
    traducao: "falando de ~; quando se trata de ~",
    explicacao:
      "A expressão ときたら (to kitara) é usada para chamar a atenção para um assunto ou tópico específico, enfatizando sua importância ou destacando sua característica distintiva.",
    exemplo: {
      frase: "彼女の料理ときたら、本当に美味しい。",
      furigana: "かのじょのりょうりときたら、ほんとうにおいしい。",
      romaji: "Kanojo no ryouri to kitara, hontou ni oishii.",
      traducao: "Falando da cozinha dela, é realmente deliciosa.",
    },
  },
  {
    topico: "ところを",
    romaji: "tokoro o",
    traducao: "no momento em que ~; apesar de ~",
    explicacao:
      "A expressão ところを (tokoro o) é usada para indicar uma circunstância ou evento que ocorre no momento em que outra ação ou situação ocorre, ou para expressar uma surpresa ou objeção relacionada a algo mencionado anteriormente.",
    exemplo: {
      frase: "彼は食べるところを、急な電話で中断した。",
      furigana: "かれはたべるところを、きゅうなでんわでちゅうだんした。",
      romaji: "Kare wa taberu tokoro o, kyuuna denwa de chuudan shita.",
      traducao:
        "Ele foi interrompido por uma ligação telefônica repentina no momento em que estava comendo.",
    },
  },
  {
    topico: "ともあろうものが",
    romaji: "tomo arou mono ga",
    traducao: "embora seja ~; apesar de ser ~",
    explicacao:
      "A expressão ともあろうものが (tomo arou mono ga) é usada para expressar surpresa, indignação ou ironia ao se referir a alguém ou algo que se espera que seja melhor ou mais adequado, mas que mostra uma falha, erro ou comportamento inesperado.",
    exemplo: {
      frase: "彼は医者ともあろうものが、自分の健康に気を使っていない。",
      furigana:
        "かれはいしゃともあろうものが、じぶんのけんこうにきをつかっていない。",
      romaji:
        "Kare wa isha tomo arou mono ga, jibun no kenkou ni ki o tsukatte inai.",
      traducao:
        "Embora ele seja um médico, ele não cuida de sua própria saúde.",
    },
  },
  {
    topico: "ともなく / ともなしに",
    romaji: "tomo naku / tomo nashi ni",
    traducao: "sem pensar ~; sem motivo aparente ~",
    explicacao:
      "A expressão ともなく (tomo naku) ou ともなしに (tomo nashi ni) é usada para indicar que algo é feito sem pensar ou sem motivo aparente, de forma casual ou inconsciente.",
    exemplo: {
      frase: "彼は歩きながらともなく歌を口ずさむ。",
      furigana: "かれはあるきながらともなくうたをくちずさむ。",
      romaji: "Kare wa aruki nagara tomo naku uta o kuchizusamu.",
      traducao: "Ele canta casualmente enquanto caminha, sem pensar.",
    },
  },
  {
    topico: "ともすれば",
    romaji: "tomo sureba",
    traducao: "se descuidar ~; se não tiver cuidado ~",
    explicacao:
      "A expressão ともすれば (tomo sureba) é usada para indicar uma tendência ou propensão a algo negativo, sugerindo que alguém pode se envolver em um comportamento indesejável ou inadequado se não tomar cuidado ou se descuidar.",
    exemplo: {
      frase: "彼はともすれば感情的になりがちだ。",
      furigana: "かれはともすればかんじょうてきになりがちだ。",
      romaji: "Kare wa tomo sureba kanjouteki ni nari gachi da.",
      traducao: "Ele tende a se tornar emocional se não tiver cuidado.",
    },
  },
  {
    topico: "とも～とも",
    romaji: "tomo ~ tomo",
    traducao: "tanto ~ como ~; tanto faz ~ como ~",
    explicacao:
      "A expressão とも～とも (tomo ~ tomo) é usada para indicar que algo é verdadeiro ou aplicável em ambos os casos mencionados, enfatizando a igualdade ou equivalência entre duas opções ou condições.",
    exemplo: {
      frase: "彼は和食とも洋食とも好きだ。",
      furigana: "かれはわしょくともようしょくともすきだ。",
      romaji: "Kare wa washoku tomo youshoku tomo suki da.",
      traducao:
        "Ele gosta tanto de comida japonesa quanto de comida ocidental.",
    },
  },
  {
    topico: "とりわけ",
    romaji: "toriwake",
    traducao: "especialmente ~; principalmente ~",
    explicacao:
      "A expressão とりわけ (toriwake) é usada para indicar que algo é particularmente verdadeiro, notável ou importante em relação a outras coisas mencionadas.",
    exemplo: {
      frase: "この地域は自然が美しいとりわけ、山々の景色が素晴らしい。",
      furigana:
        "このちいきはしぜんがうつくしいとりわけ、やまやまのけしきがすばらしい。",
      romaji:
        "Kono chiiki wa shizen ga utsukushii toriwake, yamayama no keshiki ga subarashii.",
      traducao:
        "Esta região é especialmente bela pela natureza, com paisagens de montanhas maravilhosas.",
    },
  },
  {
    topico: "とは",
    romaji: "to wa",
    traducao: "significa ~; quer dizer ~",
    explicacao:
      "A expressão とは (to wa) é usada para introduzir uma definição, explicação ou significado de um termo ou conceito.",
    exemplo: {
      frase: "恋とは人生の喜びと悲しみを経験することだ。",
      furigana: "こいとはじんせいのよろこびとかなしみをけいけんすることだ。",
      romaji:
        "Koi to wa jinsei no yorokobi to kanashimi o keiken suru koto da.",
      traducao: "Amor significa experimentar as alegrias e tristezas da vida.",
    },
  },
  {
    topico: "とはいえ",
    romaji: "to wa ie",
    traducao: "apesar de ~; embora ~",
    explicacao:
      "A expressão とはいえ (to wa ie) é usada para apresentar uma concessão ou contraste em relação a uma afirmação anterior, indicando que algo é verdadeiro ou válido, embora haja uma condição, restrição ou ponto de vista oposto.",
    exemplo: {
      frase: "彼は若いとはいえ、非常に経験豊富だ。",
      furigana: "かれはわかいとはいえ、ひじょうにけいけんほうふだ。",
      romaji: "Kare wa wakai to wa ie, hijou ni keiken houfu da.",
      traducao: "Embora ele seja jovem, ele tem muita experiência.",
    },
  },
  {
    topico: "とは比べものにならない（とはくらべものにならない）",
    romaji: "to wa kurabe mono ni naranai",
    traducao: "não se compara a ~; não é comparável a ~",
    explicacao:
      "A expressão とは比べものにならない (to wa kurabe mono ni naranai) é usada para enfatizar que algo é tão extraordinário, notável ou excepcional que não pode ser comparado com outra coisa.",
    exemplo: {
      frase: "彼女の美しさは他とは比べものにならない。",
      furigana: "かのじょのうつくしさはほかとはくらべものにならない。",
      romaji: "Kanojo no utsukushisa wa hoka to wa kurabe mono ni naranai.",
      traducao: "Sua beleza não se compara a nenhuma outra.",
    },
  },
  {
    topico:
      "とは打って変わって / とは打って変わり（とはうってかわって / とはうってかわり）",
    romaji: "to wa utte kawatte",
    traducao:
      "ao contrário do que se esperava ~; em contraste com o que se esperava ~",
    explicacao:
      "A expressão とは打って変わって (to wa utte kawatte) ou とは打って変わり (to wa utte kawari) é usada para indicar uma mudança ou contraste inesperado em relação a uma situação, comportamento ou expectativa anteriormente estabelecida.",
    exemplo: {
      frase: "彼は普段は穏やかだが、試合中とは打って変わって激しくなる。",
      furigana:
        "かれはふだんはおだやかだが、しあいちゅうとはうってかわってはげしくなる。",
      romaji:
        "Kare wa fudan wa odayaka da ga, shiai-chuu to wa utte kawatte hageshiku naru.",
      traducao:
        "Ele geralmente é calmo, mas durante a partida ele fica agressivo, ao contrário do que se esperava.",
    },
  },
  {
    topico: "つ～つ",
    romaji: "tsu ~ tsu",
    traducao: "tanto ~ como ~; tanto faz ~ como ~",
    explicacao:
      "A expressão つ～つ (tsu ~ tsu) é usada para indicar que duas ou mais coisas ocorrem ou estão presentes simultaneamente, geralmente com um sentido de paralelismo ou equivalência.",
    exemplo: {
      frase: "彼はつまらないことにも笑い、悲しいことにも泣く。",
      furigana: "かれはつまらないことにもわらい、かなしいことにもなく。",
      romaji: "Kare wa tsumaranai koto ni mo warai, kanashii koto ni mo naku.",
      traducao: "Ele ri das coisas chatas e chora nas coisas tristes.",
    },
  },
  {
    topico: "尽くす（つくす）",
    romaji: "tsukusu",
    traducao: "dedicar-se a ~; fazer tudo por ~",
    explicacao:
      "A expressão 尽くす (tsukusu) é usada para descrever a ação de se dedicar completamente a algo ou alguém, fazendo tudo o que é possível para alcançar um objetivo ou satisfazer uma pessoa.",
    exemplo: {
      frase: "彼は家族のために全力で尽くした。",
      furigana: "かれはかぞくのためにぜんりょくでつくした。",
      romaji: "Kare wa kazoku no tame ni zenryoku de tsukushita.",
      traducao: "Ele se dedicou totalmente à sua família.",
    },
  },
  {
    topico: "ってば / ったら",
    romaji: "tte ba / ttara",
    traducao: "dizer ~; falar ~",
    explicacao:
      "As expressões ってば (tte ba) ou ったら (ttara) são usadas para indicar descontentamento, frustração ou exasperação em relação às palavras ou ações de alguém.",
    exemplo: {
      frase: "言ったってば、聞かなかったでしょう？",
      furigana: "いったってば、きかなかったでしょう？",
      romaji: "Itta tte ba, kikanakatta deshou?",
      traducao: "Eu disse para você, não é mesmo? Você não ouviu?",
    },
  },
  {
    topico: "うちに入らない（うちにはいらない）",
    romaji: "uchi ni hairanai",
    traducao: "não caber em ~; não estar incluído em ~",
    explicacao:
      "A expressão うちに入らない (uchi ni hairanai) é usada para indicar que algo não está incluído em uma categoria, definição ou limite.",
    exemplo: {
      frase: "これらの問題は話し合いの範囲うちにはいらない。",
      furigana: "これらのもんだいははなしあいのはんいうちにはいらない。",
      romaji: "Korera no mondai wa hanashiai no han'i uchi ni hairanai.",
      traducao: "Esses problemas não estão incluídos no âmbito da discussão.",
    },
  },
  {
    topico: "わ",
    romaji: "wa",
    traducao: "partícula temática (tópico)",
    explicacao:
      "A partícula わ (wa) é uma partícula temática que é usada para indicar o tópico da conversa, trazendo atenção para o assunto discutido.",
    exemplo: {
      frase: "私は音楽が好きです。特にクラシック音楽はわ、大好きです。",
      furigana:
        "わたしはおんがくがすきです。とくにくらしっくおんがくはわ、だいすきです。",
      romaji:
        "Watashi wa ongaku ga suki desu. Tokuni kurashikku ongaku wa wa, daisuki desu.",
      traducao: "Eu gosto de música. Especialmente música clássica, eu amo.",
    },
  },
  {
    topico: "としたことが",
    romaji: "to shita koto ga",
    traducao: "algo que aconteceu; algo que foi realizado",
    explicacao:
      "A expressão としたことが (to shita koto ga) é usada para se referir a algo que aconteceu ou foi realizado com sucesso.",
    exemplo: {
      frase: "彼は意志を強く持ち、目標達成としたことがすごい。",
      furigana:
        "かれはいしをつよくもち、もくひょうたっせいとしたことがすごい。",
      romaji:
        "Kare wa ishi o tsuyoku mochi, mokuhyou tassei to shita koto ga sugoi.",
      traducao:
        "Ele é incrível por ter uma forte determinação e alcançar seus objetivos.",
    },
  },
  {
    topico: "とっさに",
    romaji: "tossa ni",
    traducao: "instantaneamente; no calor do momento",
    explicacao:
      "A expressão とっさに (tossa ni) é usada para descrever uma ação ou reação que ocorre instantaneamente ou no calor do momento.",
    exemplo: {
      frase: "彼女は危険を感じるとっさに逃げ出した。",
      furigana: "かのじょはきけんをかんじるとっさににげだした。",
      romaji: "Kanojo wa kiken o kanjiru tossa ni nigedashita.",
      traducao: "Ela fugiu instantaneamente assim que sentiu perigo.",
    },
  },
  {
    topico: "とて",
    romaji: "tote",
    traducao: "de forma alguma; impossível",
    explicacao:
      "A expressão とて (tote) é usada para enfatizar que algo é completamente impossível ou inaceitável.",
    exemplo: {
      frase: "彼の要求はとても受け入れられない。",
      furigana: "かれのようきゅうはとてもうけいれられない。",
      romaji: "Kare no youkyuu wa tote ukeirerarenai.",
      traducao: "Suas demandas são completamente inaceitáveis.",
    },
  },
  {
    topico: "はどうであれ",
    romaji: "wa dou de are",
    traducao: "seja como for; de qualquer maneira",
    explicacao:
      "A expressão はどうであれ (wa dou de are) é usada para indicar que algo é verdadeiro, independentemente das circunstâncias ou condições.",
    exemplo: {
      frase: "彼女の言葉はどうであれ、私は彼女を信じています。",
      furigana:
        "かのじょのことばははどうであれ、わたしはかのじょをしんじています。",
      romaji:
        "Kanojo no kotoba wa wa dou de are, watashi wa kanojo o shinjite imasu.",
      traducao: "De qualquer maneira, eu acredito nela.",
    },
  },
  {
    topico: "はおろか",
    romaji: "wa oroka",
    traducao: "muito menos; para não mencionar",
    explicacao:
      "A expressão はおろか (wa oroka) é usada para indicar que algo é ainda mais improvável ou inaceitável do que algo já mencionado anteriormente.",
    exemplo: {
      frase:
        "彼は基本的なルールを守れるはずない。はおろか、高度なルールを理解することさえできない。",
      furigana:
        "かれはきほんてきなるーるをまもれるはずない。はおろか、こうどなるーるをりかいすることさえできない。",
      romaji:
        "Kare wa kihonteki na ruuru o mamoreru hazu nai. Wa oroka, koudo na ruuru o rikai suru koto sae dekinai.",
      traducao:
        "Ele não consegue seguir as regras básicas, muito menos entender regras avançadas.",
    },
  },
  {
    topico: "はさておき",
    romaji: "wa sateoki",
    traducao: "deixando de lado; independente disso",
    explicacao:
      "A expressão はさておき (wa sateoki) é usada para indicar que algo é deixado de lado ou não levado em consideração ao discutir ou abordar um assunto.",
    exemplo: {
      frase: "彼の過去の失敗はさておき、彼は優秀なリーダーです。",
      furigana:
        "かれのかこのしっぱいはさておき、かれはゆうしゅうなりーだーです。",
      romaji:
        "Kare no kako no shippai wa sateoki, kare wa yuushuu na riidaa desu.",
      traducao:
        "Deixando de lado seus fracassos passados, ele é um líder excelente.",
    },
  },
  {
    topico: "はそっちのけで / をそっちのけで",
    romaji: "wa socchi noke de / o socchi noke de",
    traducao: "ignorando; deixando de lado",
    explicacao:
      "A expressão はそっちのけで (wa socchi noke de) ou をそっちのけで (o socchi noke de) é usada para descrever a ação de ignorar algo ou deixar de lado algo para se concentrar em outra coisa.",
    exemplo: {
      frase: "彼は他の人の意見をそっちのけで、自分のやり方を貫いた。",
      furigana:
        "かれはほかのひとのいけんをそっちのけで、じぶんのやりかたをつらぬいた。",
      romaji:
        "Kare wa hoka no hito no iken o socchi noke de, jibun no yarikata o tsuranuita.",
      traducao:
        "Ele ignorou as opiniões dos outros e seguiu seu próprio caminho.",
    },
  },
  {
    topico: "わ〜わで",
    romaji: "wa ~ wa de",
    traducao: "entre ~ e",
    explicacao:
      "A expressão わ〜わで (wa ~ wa de) é usada para indicar um intervalo ou variedade de coisas ou eventos.",
    exemplo: {
      frase: "彼はわ仕事わ旅行で忙しい。",
      furigana: "かれはわしごとわりょこうでいそがしい。",
      romaji: "Kare wa wa shigoto wa ryokou de isogashii.",
      traducao: "Ele está ocupado com trabalho e viagens.",
    },
  },
  {
    topico: "や否や（やいなや）",
    romaji: "ya inaya",
    traducao: "assim que; no momento em que",
    explicacao:
      "A expressão や否や (ya inaya) é usada para indicar que uma ação ocorre imediatamente após outra ação ou evento.",
    exemplo: {
      frase: "彼は会議が終わるや否や、急いで退室した。",
      furigana: "かれはかいぎがおわるやいなや、いそいでたいしつした。",
      romaji: "Kare wa kaigi ga owaru ya inaya, isoide taishitsu shita.",
      traducao: "Assim que a reunião acabou, ele saiu apressadamente da sala.",
    },
  },
  {
    topico: "やしない",
    romaji: "ya shinai",
    traducao: "nem mesmo; não fazer",
    explicacao:
      "A expressão やしない (ya shinai) é usada para enfatizar que algo não é feito ou realizado, mesmo em circunstâncias específicas.",
    exemplo: {
      frase: "彼女は一度も謝るやしない。",
      furigana: "かのじょはいちどもあやまるやしない。",
      romaji: "Kanojo wa ichido mo ayamaru ya shinai.",
      traducao: "Ela nem mesmo se desculpa uma vez.",
    },
  },
  {
    topico: "といい〜といい",
    romaji: "to ii ~ to ii",
    traducao: "seja ~ ou",
    explicacao:
      "A expressão といい〜といい (to ii ~ to ii) é usada para indicar que duas ou mais coisas são desejáveis ou favoráveis.",
    exemplo: {
      frase: "彼女は見た目と性格といい、素晴らしい人だ。",
      furigana: "かのじょはみためとせいかくといい、すばらしいひとだ。",
      romaji: "Kanojo wa mitame to seikaku to ii, subarashii hito da.",
      traducao:
        "Ela é uma pessoa maravilhosa, tanto em aparência quanto em personalidade.",
    },
  },
  {
    topico: "といったらない",
    romaji: "to ittara nai",
    traducao: "indescritível; além das palavras",
    explicacao:
      "A expressão といったらない (to ittara nai) é usada para descrever algo que é tão incrível, surpreendente ou intenso que é difícil de descrever com palavras.",
    exemplo: {
      frase: "彼の演技は言葉にできないほど素晴らしかった。",
      furigana: "かれのえんぎはことばにできないほどすばらしかった。",
      romaji: "Kare no engi wa kotoba ni dekinai hodo subarashikatta.",
      traducao: "Sua atuação foi tão incrível que é indescritível.",
    },
  },
  {
    topico: "という",
    romaji: "to iu",
    traducao: "chamado; chamado de",
    explicacao:
      "A expressão という (to iu) é usada para apresentar algo que é chamado ou conhecido por um determinado nome ou termo.",
    exemplo: {
      frase: "彼はいわゆる天才という才能を持っている。",
      furigana: "かれはいわゆるてんさいというさいのうをもっている。",
      romaji: "Kare wa iwayuru tensai to iu sainou o motte iru.",
      traducao: "Ele tem o que é chamado de talento genial.",
    },
  },
  {
    topico: "というか〜というか",
    romaji: "to iu ka ~ to iu ka",
    traducao: "quer dizer; ou melhor; em outras palavras",
    explicacao:
      "A expressão というか〜というか (to iu ka ~ to iu ka) é usada para indicar uma explicação alternativa ou uma maneira diferente de expressar algo.",
    exemplo: {
      frase: "彼の行動は子供というか、猿というか、何かよくわからない。",
      furigana:
        "かれのこうどうはこどもというか、さるというか、なにかよくわからない。",
      romaji:
        "Kare no koudou wa kodomo to iu ka, saru to iu ka, nanika yoku wakaranai.",
      traducao:
        "Suas ações são difíceis de entender, parecendo uma criança ou um macaco.",
    },
  },
  {
    topico: "というもの",
    romaji: "to iu mono",
    traducao: "coisa chamada; coisa chamada de",
    explicacao:
      "A expressão というもの (to iu mono) é usada para apresentar algo que é chamado ou conhecido por um determinado nome ou termo.",
    exemplo: {
      frase: "この映画は恋愛というものを新しい角度から描いている。",
      furigana:
        "このえいがはれんあいというものをあたらしいかくどからえがいている。",
      romaji:
        "Kono eiga wa ren'ai to iu mono o atarashii kakudo kara kaite iru.",
      traducao: "Este filme retrata o amor de uma nova perspectiva.",
    },
  },
  {
    topico: "というところだ / といったところだ",
    romaji: "to iu tokoro da",
    traducao: "em resumo; em suma",
    explicacao:
      "A expressão というところだ (to iu tokoro da) ou といったところだ (to itta tokoro da) é usada para resumir ou dar uma conclusão sobre algo que foi discutido ou explicado anteriormente.",
    exemplo: {
      frase: "彼はまだ学習中ですが、成績は上がってきたというところです。",
      furigana:
        "かれはまだがくしゅうちゅうですが、せいせきはあがってきたというところです。",
      romaji:
        "Kare wa mada gakushuu-chuu desu ga, seiseki wa agatte kita to iu tokoro desu.",
      traducao: "Ele ainda está estudando, mas suas notas estão melhorando.",
    },
  },
  {
    topico: "というわけだ",
    romaji: "to iu wake da",
    traducao: "então; portanto; assim",
    explicacao:
      "A expressão というわけだ (to iu wake da) é usada para apresentar uma conclusão ou resultado lógico com base no que foi mencionado anteriormente.",
    exemplo: {
      frase:
        "私たちは時間がないので、急いで行かなければならないというわけです。",
      furigana:
        "わたしたちはじかんがないので、いそいでいかなければならないというわけです。",
      romaji:
        "Watashitachi wa jikan ga nai node, isoide ikanakereba naranai to iu wake desu.",
      traducao: "Nós não temos tempo, então precisamos ir rapidamente.",
    },
  },
  {
    topico: "というわけではない",
    romaji: "to iu wake dewa nai",
    traducao: "não significa que; não é o caso de",
    explicacao:
      "A expressão というわけではない (to iu wake dewa nai) é usada para negar uma interpretação errônea ou uma conclusão precipitada sobre algo que foi mencionado anteriormente.",
    exemplo: {
      frase:
        "彼女が遅れたというわけではありません。ただ、交通渋滞があっただけです。",
      furigana:
        "かのじょがおくれたというわけではありません。ただ、こうつうじゅうたいがあっただけです。",
      romaji:
        "Kanojo ga okureta to iu wake dewa arimasen. Tada, koutsuu juutai ga atta dake desu.",
      traducao:
        "Não significa que ela esteja atrasada. Apenas houve um congestionamento de trânsito.",
    },
  },
  {
    topico: "といわず〜といわず",
    romaji: "to iwazu ~ to iwazu",
    traducao: "sem exceção; tanto X como Y",
    explicacao:
      "A expressão といわず〜といわず (to iwazu ~ to iwazu) é usada para indicar que algo se aplica sem exceção a várias coisas ou situações.",
    exemplo: {
      frase: "彼女の料理は味といわず、見た目といわず、すべてが素晴らしい。",
      furigana:
        "かのじょのりょうりはあじといわず、みためといわず、すべてがすばらしい。",
      romaji:
        "Kanojo no ryouri wa aji to iwa zu, mitame to iwa zu, subete ga subarashii.",
      traducao:
        "A comida dela é incrível em termos de sabor, aparência e tudo mais.",
    },
  },
  {
    topico: "ときている",
    romaji: "tokiteiru",
    traducao: "está acontecendo; está em progresso",
    explicacao:
      "A expressão ときている (tokiteiru) é usada para indicar que algo está acontecendo ou em progresso.",
    exemplo: {
      frase: "日本ではオリンピックが開催されている。",
      furigana: "にほんではオリンピックがかいさいされている。",
      romaji: "Nihon de wa orinpikku ga kaisai sarete iru.",
      traducao: "Os Jogos Olímpicos estão sendo realizados no Japão.",
    },
  },
  {
    topico: "とみると",
    romaji: "to miru to",
    traducao: "ao observar; ao olhar para",
    explicacao:
      "A expressão とみると (to miru to) é usada para indicar uma conclusão ou percepção ao observar ou olhar para algo.",
    exemplo: {
      frase: "その成績を見ると、彼はかなり頑張ったようだ。",
      furigana: "そのせいせきをみると、かれはかなりがんばったようだ。",
      romaji: "Sono seiseki o miru to, kare wa kanari ganbatta you da.",
      traducao:
        "Ao observar esses resultados, parece que ele se esforçou muito.",
    },
  },
  {
    topico: "と見るや（とみるや）",
    romaji: "to miru ya",
    traducao: "ao ver; ao perceber",
    explicacao:
      "A expressão と見るや (to miru ya) é usada para expressar uma reação imediata ou surpresa ao ver ou perceber algo.",
    exemplo: {
      frase: "彼が突然現れると見るや、皆びっくりした。",
      furigana: "かれがとつぜんあらわれるとみるや、みなびっくりした。",
      romaji: "Kare ga totsuzen arawareru to miru ya, mina bikkuri shita.",
      traducao: "Todos ficaram surpresos ao vê-lo aparecer de repente.",
    },
  },
  {
    topico: "となると / となれば",
    romaji: "to naru to / to nareba",
    traducao: "quando se trata de; no caso de",
    explicacao:
      "As expressões となると (to naru to) e となれば (to nareba) são usadas para indicar uma situação ou condição específica em que algo é verdadeiro ou aplicável.",
    exemplo: {
      frase: "仕事となると、彼は本当に真剣に取り組む。",
      furigana: "しごととなると、かれはほんとうにしんけんにとりくむ。",
      romaji: "Shigoto to naru to, kare wa hontou ni shinken ni torikumu.",
      traducao:
        "Quando se trata de trabalho, ele realmente se dedica seriamente.",
    },
  },
  {
    topico: "とされる",
    romaji: "to sareru",
    traducao: "é considerado; é visto como",
    explicacao:
      "A expressão とされる (to sareru) é usada para indicar que algo é considerado ou visto de uma determinada maneira.",
    exemplo: {
      frase: "彼は教育界で専門家とされている。",
      furigana: "かれはきょういくかいでせんもんかとされている。",
      romaji: "Kare wa kyouiku kai de senmonka to sarete iru.",
      traducao: "Ele é considerado um especialista no campo da educação.",
    },
  },
  {
    topico: "ときたら",
    romaji: "tokitara",
    traducao: "falando de; quando se trata de",
    explicacao:
      "A expressão ときたら (tokitara) é usada para introduzir um tópico ou assunto e expressar uma reação ou opinião enfática sobre ele.",
    exemplo: {
      frase: "彼の遅刻ぶりときたら、本当にひどいものだ。",
      furigana: "かれのちこくぶりときたら、ほんとうにひどいものだ。",
      romaji: "Kare no chikoku buri tokitara, hontou ni hidoi mono da.",
      traducao: "Falando do seu hábito de se atrasar, é realmente terrível.",
    },
  },
  {
    topico: "ところを",
    romaji: "tokorowo",
    traducao: "apesar de; embora",
    explicacao:
      "A expressão ところを (tokorowo) é usada para indicar uma situação inesperada ou contrária ao que se espera.",
    exemplo: {
      frase: "彼は怪我をしているところを、走り出した。",
      furigana: "かれはけがをしているところを、はしりだした。",
      romaji: "Kare wa kega o shite iru tokorowo, hashiri dashita.",
      traducao: "Embora ele estivesse ferido, ele começou a correr.",
    },
  },
  {
    topico: "ともあろうものが",
    romaji: "tomoaroumonoga",
    traducao: "mesmo sendo; apesar de ser",
    explicacao:
      "A expressão ともあろうものが (tomoaroumonoga) é usada para expressar surpresa ou decepção em relação a alguém ou algo que se espera que seja melhor ou tenha um bom desempenho.",
    exemplo: {
      frase:
        "彼は優秀な学生と思っていたが、試験で低い点を取ったとはともあろうものが。",
      furigana:
        "かれはゆうしゅうながくせいとおもっていたが、しけんでひくいてんをとったとはともあろうものが。",
      romaji:
        "Kare wa yuushuu na gakusei to omotte ita ga, shiken de hikui ten o totta to wa tomoaroumonoga.",
      traducao:
        "Eu achava que ele era um aluno excelente, mas tirar uma nota baixa no teste, isso é decepcionante.",
    },
  },
  {
    topico: "ともなく / ともなしに",
    romaji: "tomonaku / tomonashini",
    traducao: "sem intenção; sem pensar",
    explicacao:
      "As expressões ともなく (tomonaku) e ともなしに (tomonashini) são usadas para indicar que algo é feito sem intenção ou sem pensar.",
    exemplo: {
      frase: "彼女は突然笑ってしまい、周りの人々もともなく笑った。",
      furigana:
        "かのじょはとつぜんわらってしまい、まわりのひとびともともなくわらった。",
      romaji:
        "Kanojo wa totsuzen waratte shimai, mawari no hitobito mo tomonaku waratta.",
      traducao:
        "Ela riu de repente e as pessoas ao seu redor riram sem pensar.",
    },
  },
  {
    topico: "ともすれば",
    romaji: "tomo sureba",
    traducao: "tendendo a; inclinado a",
    explicacao:
      "A expressão ともすれば (tomo sureba) é usada para indicar uma tendência ou propensão a agir ou pensar de uma certa maneira.",
    exemplo: {
      frase: "彼は人の話を聞かないともすれば、自分勝手な行動を取ることもある。",
      furigana:
        "かれはひとのはなしをきかないともすれば、じぶんかってなこうどうをとることもある。",
      romaji:
        "Kare wa hito no hanashi o kikanai tomo sureba, jibun katte na koudou o toru koto mo aru.",
      traducao:
        "Ele tem a tendência de não ouvir as pessoas e agir egoisticamente às vezes.",
    },
  },
  {
    topico: "とも～とも",
    romaji: "tomo ~ tomo",
    traducao: "tanto ~ como",
    explicacao:
      "A expressão とも～とも (tomo ~ tomo) é usada para indicar que algo é aplicável ou válido tanto para um item mencionado anteriormente quanto para outro item.",
    exemplo: {
      frase: "彼女は勉強することも大切だし、休息することも大切だ。",
      furigana:
        "かのじょはべんきょうすることもたいせつだし、きゅうそくすることもたいせつだ。",
      romaji:
        "Kanojo wa benkyou suru koto mo taisetsu da shi, kyuusoku suru koto mo taisetsu da.",
      traducao: "Tanto estudar quanto descansar são importantes para ela.",
    },
  },
  {
    topico: "とりわけ",
    romaji: "toriwake",
    traducao: "especialmente; em particular",
    explicacao:
      "A expressão とりわけ (toriwake) é usada para indicar que algo é especialmente verdadeiro ou se aplica de forma mais proeminente em relação a outras coisas.",
    exemplo: {
      frase: "彼女は音楽が好きですが、クラシック音楽とりわけ興味があります。",
      furigana:
        "かのじょはおんがくがすきですが、くらしっくおんがくとりわけきょうみがあります。",
      romaji:
        "Kanojo wa ongaku ga suki desu ga, kurashikku ongaku toriwake kyomi ga arimasu.",
      traducao: "Ela gosta de música, especialmente música clássica.",
    },
  },
  {
    topico: "としたことが",
    romaji: "toshitakotoga",
    traducao: "ter feito algo; ter experimentado algo",
    explicacao:
      "A expressão としたことが (toshitakotoga) é usada para indicar que alguém já fez algo ou teve uma experiência específica.",
    exemplo: {
      frase: "彼は苦労したことがあるので、人の気持ちがわかる。",
      furigana: "かれはくろうしたことがあるので、ひとのきもちがわかる。",
      romaji:
        "Kare wa kurou shita koto ga aru node, hito no kimochi ga wakaru.",
      traducao:
        "Ele entende os sentimentos das pessoas porque já passou por dificuldades.",
    },
  },
  {
    topico: "とっさに",
    romaji: "tossani",
    traducao: "instantaneamente; de repente",
    explicacao:
      "A expressão とっさに (tossani) é usada para indicar que algo é feito de forma rápida e instintiva, sem pensar.",
    exemplo: {
      frase: "危険なことが起こったとき、彼女はとっさに逃げ出した。",
      furigana: "きけんなことがおこったとき、かのじょはとっさににげだした。",
      romaji: "Kiken na koto ga okotta toki, kanojo wa tossani nigedashita.",
      traducao: "Quando algo perigoso aconteceu, ela fugiu instantaneamente.",
    },
  },
  {
    topico: "とて",
    romaji: "tote",
    traducao: "mesmo que; apesar de",
    explicacao:
      "A expressão とて (tote) é usada para expressar uma situação inesperada, contrária à expectativa ou difícil de acreditar.",
    exemplo: {
      frase: "彼は見た目は小さいが、力がとて大きい。",
      furigana: "かれはみためはちいさいが、ちからがとておおきい。",
      romaji: "Kare wa mitame wa chiisai ga, chikara ga tote ookii.",
      traducao: "Ele parece pequeno, mas sua força é incrível.",
    },
  },
  {
    topico: "とは",
    romaji: "towa",
    traducao: "é; significa",
    explicacao:
      "A partícula とは (towa) é usada para definir ou explicar o significado de algo.",
    exemplo: {
      frase: "友達とは、互いに支え合う存在だと思います。",
      furigana: "ともだちとは、たがいにささえあうそんざいだとおもいます。",
      romaji: "Tomodachi towa, tagai ni sasaeau sonzai da to omoimasu.",
      traducao: "Eu acredito que amigos são aqueles que se apoiam mutuamente.",
    },
  },
  {
    topico: "とはいえ",
    romaji: "towaie",
    traducao: "embora; mesmo que",
    explicacao:
      "A expressão とはいえ (towaie) é usada para expressar uma concessão ou uma ressalva em relação a algo que foi mencionado anteriormente.",
    exemplo: {
      frase: "彼は若いとはいえ、仕事がとてもできる。",
      furigana: "かれはわかいとはいえ、しごとがとてもできる。",
      romaji: "Kare wa wakai towaie, shigoto ga totemo dekiru.",
      traducao: "Embora ele seja jovem, ele é muito capaz no trabalho.",
    },
  },
  {
    topico: "とは比べものにならない",
    romaji: "towakurabemononinaranai",
    traducao: "não se compara a; não se pode comparar com",
    explicacao:
      "A expressão とは比べものにならない (towakurabemononinaranai) é usada para enfatizar que algo é tão excepcional ou diferente que não pode ser comparado com qualquer outra coisa.",
    exemplo: {
      frase: "彼の技術は他の人とは比べものにならない。",
      furigana: "かれのぎじゅつはほかのひととはくらべものにならない。",
      romaji: "Kare no gijutsu wa hoka no hito towa kurabemononinaranai.",
      traducao: "As habilidades dele não se comparam às de outras pessoas.",
    },
  },
  {
    topico: "とは打って変わって",
    romaji: "towauttekawatte",
    traducao: "ao contrário do que se esperava; inesperadamente",
    explicacao:
      "A expressão とは打って変わって (towauttekawatte) é usada para indicar uma mudança drástica ou uma surpresa em relação ao que se esperava ou estava acontecendo anteriormente.",
    exemplo: {
      frase: "彼は元気だと思っていたが、病気だとは打って変わって。",
      furigana:
        "かれはげんきだとおもっていたが、びょうきだとはうってかわって。",
      romaji: "Kare wa genki da to omotte ita ga, byouki da towa utte kawatte.",
      traducao:
        "Eu achava que ele estava saudável, mas ao contrário do que se esperava, ele estava doente.",
    },
  },
  {
    topico: "つ～つ",
    romaji: "tsu~tsu",
    traducao: "tanto ~ quanto",
    explicacao:
      "A estrutura つ～つ (tsu~tsu) é usada para indicar uma série de coisas, características ou ações semelhantes.",
    exemplo: {
      frase: "彼女は歌うつ喜びつ、踊るつ楽しみだ。",
      furigana: "かのじょはうたうつよろこびつ、おどるつたのしみだ。",
      romaji: "Kanojo wa utau tsu yorokobitsu, odoru tsu tanoshimi da.",
      traducao: "Ela tem prazer tanto em cantar quanto em dançar.",
    },
  },
  {
    topico: "尽くす（つくす）",
    romaji: "tsukusu",
    traducao: "dedicar-se; servir",
    explicacao:
      "O verbo 尽くす (tsukusu) é usado para expressar o ato de se dedicar inteiramente a algo ou alguém, servindo-os de todo o coração.",
    exemplo: {
      frase: "彼は家族を尽くすために一生懸命働いています。",
      furigana:
        "かれはかぞくをつくすためにいっしょうけんめいはたらいています。",
      romaji: "Kare wa kazoku o tsukusu tame ni isshoukenmei hataraiteimasu.",
      traducao: "Ele trabalha arduamente para servir sua família.",
    },
  },
  {
    topico: "ってば / ったら",
    romaji: "tteba / ttara",
    traducao: "expressão de surpresa ou exasperação",
    explicacao:
      "As expressões ってば (tteba) e ったら (ttara) são usadas para expressar surpresa, exasperação ou para enfatizar um sentimento.",
    exemplo: {
      frase: "あなたってば、いつも遅刻するんだから。",
      furigana: "あなたってば、いつもちこくするんだから。",
      romaji: "Anata tteba, itsumo chikoku suru ndakara.",
      traducao: "Você sempre está atrasado, não é?",
    },
  },
  {
    topico: "うちに入らない（うちにはいらない）",
    romaji: "uchinihairanai",
    traducao: "não entrar em consideração",
    explicacao:
      "A expressão うちに入らない (uchinihairanai) é usada para indicar que algo está fora de consideração, não é relevante ou não deve ser levado em conta.",
    exemplo: {
      frase: "彼の意見はうちに入らないと思います。",
      furigana: "かれのいけんはうちにはいらないとおもいます。",
      romaji: "Kare no iken wa uchinihairanai to omoimasu.",
      traducao: "Eu acho que a opinião dele não é relevante.",
    },
  },
  {
    topico: "わ",
    romaji: "wa",
    traducao: "partícula que indica ênfase",
    explicacao:
      "A partícula わ (wa) é usada para enfatizar uma declaração, expressar uma emoção ou dar uma opinião pessoal.",
    exemplo: {
      frase: "今日の天気はいいわ。",
      furigana: "きょうのてんきはいいわ。",
      romaji: "Kyou no tenki wa ii wa.",
      traducao: "O tempo hoje está bom!",
    },
  },
  {
    topico: "はどうであれ",
    romaji: "hadoudoare",
    traducao: "seja como for; de qualquer forma",
    explicacao:
      "A expressão はどうであれ (hadoudoare) é usada para indicar que algo é verdadeiro ou válido, independentemente das circunstâncias.",
    exemplo: {
      frase: "彼は才能があるから、どんな困難でも乗り越えられるはどうであれ。",
      furigana:
        "かれはさいのうがあるから、どんなこんなんでものりこえられるはどうであれ。",
      romaji:
        "Kare wa sainou ga aru kara, donna konnan demo norikoerareru hadoudoare.",
      traducao:
        "Ele tem talento, então ele pode superar qualquer dificuldade, seja como for.",
    },
  },
  {
    topico: "はおろか",
    romaji: "haoroka",
    traducao: "muito menos; quanto mais",
    explicacao:
      "A expressão はおろか (haoroka) é usada para indicar que algo é ainda mais impossível ou improvável do que outra coisa mencionada anteriormente.",
    exemplo: {
      frase: "彼は英語ができない。日本語はおろか、他の外国語も話せない。",
      furigana:
        "かれはえいごができない。にほんごはおろか、ほかのがいこくごもはなせない。",
      romaji:
        "Kare wa eigo ga dekinai. Nihongo haoroka, hoka no gaikokugo mo hanasenai.",
      traducao:
        "Ele não sabe inglês. Muito menos japonês, ele também não fala nenhum outro idioma estrangeiro.",
    },
  },
  {
    topico: "はさておき",
    romaji: "hasateoki",
    traducao: "deixando isso de lado; independentemente disso",
    explicacao:
      "A expressão はさておき (hasateoki) é usada para indicar que algo será deixado de lado ou ignorado por enquanto, enquanto se discute ou se concentra em outra coisa.",
    exemplo: {
      frase: "彼の態度はさておき、この問題について話し合いましょう。",
      furigana:
        "かれのたいどはさておき、このもんだいについてはなしあいましょう。",
      romaji: "Kare no taido hasateoki, kono mondai ni tsuite hanashiaimashou.",
      traducao:
        "Deixando de lado a atitude dele, vamos discutir sobre esse problema.",
    },
  },
  {
    topico: "はそっちのけで / をそっちのけで",
    romaji: "hasocchinoekide / wosocchinoekide",
    traducao: "ignorar completamente; deixar de lado",
    explicacao:
      "A expressão はそっちのけで (hasocchinoekide) ou をそっちのけで (wosocchinoekide) é usada para indicar que algo é completamente ignorado ou deixado de lado, sem receber atenção.",
    exemplo: {
      frase: "彼女は忙しさに追われていて、友達の相談をはそっちのけでした。",
      furigana:
        "かのじょはいそがしさにおわれていて、ともだちのそうだんをはそっちのけでした。",
      romaji:
        "Kanojo wa isogashisa ni owarete ite, tomodachi no soudan wo hasocchinoekideshita.",
      traducao:
        "Ela estava ocupada e ignorou completamente o conselho de seu amigo.",
    },
  },
  {
    topico: "わ〜わで",
    romaji: "wa~wade",
    traducao: "vários; diversos",
    explicacao:
      "A expressão わ〜わで (wa~wade) é usada para indicar que há uma variedade de coisas dentro de um determinado grupo ou categoria.",
    exemplo: {
      frase:
        "彼女はわざとらしい笑顔や態度を使って男性を誘惑するわ〜わで、みんなに嫌われている。",
      furigana:
        "かのじょはわざとらしいえがおやたいどをつかってだんせいをゆうわくするわ〜わで、みんなにきらわれている。",
      romaji:
        "Kanojo wa wazatorashii egao ya taido wo tsukatte dansei wo yuuwaku suru wa~wade, minna ni kirawarete iru.",
      traducao:
        "Ela é odiada por todos, pois usa sorrisos e atitudes falsas para seduzir homens.",
    },
  },
  {
    topico: "や否や（やいなや）",
    romaji: "yainaya",
    traducao: "assim que; imediatamente após",
    explicacao:
      "A expressão や否や (yainaya) é usada para indicar que algo acontece imediatamente após ou logo depois de outra coisa.",
    exemplo: {
      frase: "部屋を出た瞬間、や否や雨が降り始めた。",
      furigana: "へやをでたしゅんかん、やいなやあめがふりはじめた。",
      romaji: "Heya wo deta shunkan, yainaya ame ga furihajimeta.",
      traducao: "Assim que saí do quarto, começou a chover imediatamente.",
    },
  },
  {
    topico: "やしない",
    romaji: "yashinai",
    traducao: "nunca; jamais",
    explicacao:
      "A expressão やしない (yashinai) é usada para indicar que algo nunca acontece ou nunca será feito.",
    exemplo: {
      frase: "彼はその約束をやしないだろう。",
      furigana: "かれはそのやくそくをやしないだろう。",
      romaji: "Kare wa sono yakusoku wo yashinai darou.",
      traducao: "Ele nunca cumprirá essa promessa.",
    },
  },
];

export default n1GrammarList;