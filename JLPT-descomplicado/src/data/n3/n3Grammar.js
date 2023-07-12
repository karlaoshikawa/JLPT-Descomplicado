const n3GrammarList = [
  {
    topico: "上げる（あげる）",
    romaji: "ageru",
    traducao: "dar; elevar",
    explicacao:
      "O verbo 上げる (ageru) é usado para indicar a ação de dar ou elevar algo. Também pode ser usado para expressar a ação de oferecer ou apresentar algo a alguém.",
    exemplo: {
      frase: "プレゼントを友達に上げました。",
      furigana: "ぷれぜんとをともだちにあげました。",
      romaji: "Purezento o tomodachi ni agemashita.",
      traducao: "Eu dei um presente ao meu amigo.",
    },
  },
  {
    topico: "あまり",
    romaji: "amari",
    traducao: "não muito; não tanto",
    explicacao:
      "A partícula あまり (amari) é usada para expressar que algo não é muito ou não é tão intenso quanto se espera. É frequentemente usada com verbos negativos.",
    exemplo: {
      frase: "このレストランの料理はあまりおいしくなかった。",
      furigana: "このれすとらんのりょうりはあまりおいしくなかった。",
      romaji: "Kono resutoran no ryouri wa amari oishikunakatta.",
      traducao: "A comida deste restaurante não estava muito gostosa.",
    },
  },
  {
    topico: "あまりにも",
    romaji: "amari ni mo",
    traducao: "demais; excessivamente",
    explicacao:
      "A expressão あまりにも (amari ni mo) é usada para enfatizar que algo é excessivo, além do esperado ou fora do comum.",
    exemplo: {
      frase: "彼の言葉はあまりにも失礼だった。",
      furigana: "かれのことばはあまりにもしつれいだった。",
      romaji: "Kare no kotoba wa amari ni mo shitsurei datta.",
      traducao: "Suas palavras foram extremamente desrespeitosas.",
    },
  },
  {
    topico: "合う（あう）",
    romaji: "au",
    traducao: "encontrar-se; adequar-se",
    explicacao:
      "O verbo 合う (au) pode ser usado para expressar o encontro com alguém ou algo, bem como para indicar que algo se adequa a determinada situação.",
    exemplo: {
      frase: "明日、友達と公園で合います。",
      furigana: "あした、ともだちとこうえんであいます。",
      romaji: "Ashita, tomodachi to kouen de aimasu.",
      traducao: "Vou encontrar-me com meu amigo no parque amanhã.",
    },
  },
  {
    topico: "ばいい",
    romaji: "ba ii",
    traducao: "seria bom; deveria",
    explicacao:
      "A expressão ばいい (ba ii) é usada para sugerir que seria bom fazer algo ou expressar uma opinião sobre o que alguém deveria fazer.",
    exemplo: {
      frase: "もっと早く寝ればいいですよ。",
      furigana: "もっとはやくねればいいですよ。",
      romaji: "Motto hayaku nereba ii desu yo.",
      traducao: "Você deveria dormir mais cedo.",
    },
  },
  {
    topico: "ばよかった",
    romaji: "ba yokatta",
    traducao: "deveria ter feito",
    explicacao:
      "A expressão ばよかった (ba yokatta) é usada para expressar arrependimento por não ter feito algo no passado.",
    exemplo: {
      frase: "もっと勉強すればよかったです。",
      furigana: "もっとべんきょうすればよかったです。",
      romaji: "Motto benkyou sureba yokatta desu.",
      traducao: "Deveria ter estudado mais.",
    },
  },
  {
    topico: "ば～ほど",
    romaji: "ba ~ hodo",
    traducao: "quanto mais ~, tanto mais ~",
    explicacao:
      "A estrutura ば～ほど (ba ~ hodo) é usada para indicar que, quanto mais uma condição é satisfeita, mais intensa ou pronunciada é outra condição.",
    exemplo: {
      frase: "時間があれば、旅行へ行くほど嬉しいです。",
      furigana: "じかんがあれば、りょこうへいくほどうれしいです。",
      romaji: "Jikan ga areba, ryokou e iku hodo ureshii desu.",
      traducao: "Quanto mais tempo livre eu tiver, mais feliz fico em viajar.",
    },
  },
  {
    topico: "ば～のに",
    romaji: "ba ~ noni",
    traducao: "embora apesar de ~",
    explicacao:
      "A estrutura ば～のに (ba ~ noni) é usada para expressar uma contradição entre duas cláusulas, em que a segunda cláusula contradiz ou está em desacordo com a primeira cláusula.",
    exemplo: {
      frase: "お金があるばかりのに、買い物に行けない。",
      furigana: "おかねがあるばかりのに、かいものにいけない。",
      romaji: "Okane ga aru bakari noni, kaimono ni ikenai.",
      traducao: "Embora eu tenha dinheiro, não posso fazer compras.",
    },
  },
  {
    topico: "ばかりで",
    romaji: "bakari de",
    traducao: "apenas, somente",
    explicacao:
      "A expressão ばかりで (bakari de) é usada para indicar que algo é feito com frequência ou de maneira excessiva, dando a ideia de sempre ou somente.",
    exemplo: {
      frase: "彼は仕事ばかりで、遊びに行かない。",
      furigana: "かれはしごとばかりで、あそびにいかない。",
      romaji: "Kare wa shigoto bakari de, asobi ni ikanai.",
      traducao: "Ele só trabalha e não sai para se divertir.",
    },
  },
  {
    topico: "ばかりでなく",
    romaji: "bakari de naku",
    traducao: "não apenas, não somente",
    explicacao:
      "A expressão ばかりでなく (bakari de naku) é usada para enfatizar que algo não se limita a uma única coisa, mas também inclui outras coisas ou aspectos.",
    exemplo: {
      frase: "彼は日本語ばかりでなく、英語も話せます。",
      furigana: "かれはにほんごばかりでなく、えいごもはなせます。",
      romaji: "Kare wa nihongo bakari de naku, eigo mo hanasemasu.",
      traducao: "Ele não fala apenas japonês, mas também inglês.",
    },
  },
  {
    topico: "べきだ",
    romaji: "beki da",
    traducao: "deveria; deve",
    explicacao:
      "A expressão べきだ (beki da) é usada para expressar uma obrigação moral ou um julgamento pessoal sobre o que se deve ou não fazer.",
    exemplo: {
      frase: "早く寝るべきだ。",
      furigana: "はやくねるべきだ。",
      romaji: "Hayaku neru beki da.",
      traducao: "Deveria dormir cedo.",
    },
  },
  {
    topico: "べきではない",
    romaji: "beki dewa nai",
    traducao: "não deve; não deveria",
    explicacao:
      "A expressão べきではない (beki dewa nai) é usada para expressar uma proibição ou para indicar algo que não se deve ou não se deveria fazer.",
    exemplo: {
      frase: "試験前に遊ぶべきではない。",
      furigana: "しけんまえにあそぶべきではない。",
      romaji: "Shiken mae ni asobu beki dewa nai.",
      traducao: "Não deve sair para se divertir antes da prova.",
    },
  },
  {
    topico: "別に～ない（べつに～ない）",
    romaji: "betsu ni ~nai",
    traducao: "não é necessário; não é preciso",
    explicacao:
      "A estrutura 別に～ない (betsu ni ~nai) é usada para expressar que algo não é necessário ou não é preciso, enfatizando a falta de importância ou necessidade.",
    exemplo: {
      frase: "別に急いでいるわけではない。",
      furigana: "べつにいそいでいるわけではない。",
      romaji: "Betsu ni isoi de iru wake dewa nai.",
      traducao: "Não é necessário ter pressa.",
    },
  },
  {
    topico: "ぶりに",
    romaji: "buri ni",
    traducao: "depois de ~ (passado um certo tempo)",
    explicacao:
      "A expressão ぶりに (buri ni) é usada para indicar que algo acontece depois de um certo tempo que passou desde a última vez em que ocorreu.",
    exemplo: {
      frase: "5年ぶりに日本に帰りました。",
      furigana: "ごねんぶりににほんにかえりました。",
      romaji: "Gonen buri ni Nihon ni kaerimashita.",
      traducao: "Voltei para o Japão depois de 5 anos.",
    },
  },
  {
    topico: "中（ちゅう）",
    romaji: "chuu",
    traducao: "no meio de; durante",
    explicacao:
      "A palavra 中 (chuu) é usada para indicar que algo acontece durante um período de tempo ou no meio de uma ação.",
    exemplo: {
      frase: "映画の中で泣きました。",
      furigana: "えいがのちゅうでなきました。",
      romaji: "Eiga no chuu de nakimashita.",
      traducao: "Eu chorei durante o filme.",
    },
  },
  {
    topico: "だけ",
    romaji: "dake",
    traducao: "somente apenas",
    explicacao:
      "A partícula だけ (dake) é usada para indicar uma quantidade limitada ou uma condição de exclusividade, significando somente ou apenas.",
    exemplo: {
      frase: "この本だけ貸してください。",
      furigana: "このほんだけかしてください。",
      romaji: "Kono hon dake kashite kudasai.",
      traducao: "Por favor, empreste apenas este livro.",
    },
  },
  {
    topico: "だけでなく",
    romaji: "dake de naku",
    traducao: "não apenas; não só",
    explicacao:
      "A expressão だけでなく (dake de naku) é usada para indicar que algo se aplica não apenas a uma coisa, mas também a outras.",
    exemplo: {
      frase: "彼女は美しいだけでなく、頭も良い。",
      furigana: "かのじょはうつくしいだけでなく、あたまもよい。",
      romaji: "Kanojo wa utsukushii dake de naku, atama mo yoi.",
      traducao: "Ela não é apenas bonita, mas também inteligente.",
    },
  },
  {
    topico: "だけど",
    romaji: "dakedo",
    traducao: "mas; contudo",
    explicacao:
      "A conjunção だけど (dakedo) é usada para expressar uma oposição ou contradição em uma frase. É semelhante a mas ou contudo em português.",
    exemplo: {
      frase: "忙しいだけど、楽しいです。",
      furigana: "いそがしいだけど、たのしいです。",
      romaji: "Isogashii dakedo, tanoshii desu.",
      traducao: "Estou ocupado, mas é divertido.",
    },
  },
  {
    topico: "だらけ",
    romaji: "darake",
    traducao: "cheio de; repleto de",
    explicacao:
      "A palavra だらけ (darake) é usada para indicar que algo está cheio de algo ou repleto de algo negativo.",
    exemplo: {
      frase: "部屋はゴミだらけだ。",
      furigana: "へやはごみだらけだ。",
      romaji: "Heya wa gomi darake da.",
      traducao: "O quarto está cheio de lixo.",
    },
  },
  {
    topico: "どんなに～ても",
    romaji: "donna ni ~te mo",
    traducao: "por mais que; não importa o quanto",
    explicacao:
      "A estrutura どんなに～ても (donna ni ~te mo) é usada para expressar que algo ocorre ou é verdadeiro, não importando o quão intenso ou extremo seja o esforço ou a ação.",
    exemplo: {
      frase: "どんなに頑張っても成功しないかもしれない。",
      furigana: "どんなにがんばってもせいこうしないかもしれない。",
      romaji: "Donna ni ganbatte mo seikou shinai kamoshirenai.",
      traducao: "Por mais que eu me esforce, talvez eu não tenha sucesso.",
    },
  },
  {
    topico: "どうしても",
    romaji: "doushitemo",
    traducao: "de qualquer maneira; não importa o quê",
    explicacao:
      "A expressão どうしても (doushitemo) é usada para expressar uma forte determinação ou a necessidade de fazer algo, não importa o quê.",
    exemplo: {
      frase: "どうしても行きたいので、参加します。",
      furigana: "どうしてもいきたいので、さんかします。",
      romaji: "Doushitemo ikitai node, sankashimasu.",
      traducao: "Vou participar, porque eu realmente quero ir.",
    },
  },
  {
    topico: "ふりをする",
    romaji: "furi o suru",
    traducao: "fingir; simular",
    explicacao:
      "A expressão ふりをする (furi o suru) é usada para indicar que alguém está fingindo ou simulando algo.",
    exemplo: {
      frase: "彼女は元気なふりをしている。",
      furigana: "かのじょはげんきなふりをしている。",
      romaji: "Kanojo wa genki na furi o shite iru.",
      traducao: "Ela está fingindo estar bem.",
    },
  },
  {
    topico: "ふと",
    romaji: "futo",
    traducao: "de repente; sem pensar",
    explicacao:
      "A palavra ふと (futo) é usada para indicar que algo acontece de repente ou sem pensar.",
    exemplo: {
      frase: "ふと窓の外を見ると、美しい景色が広がっていた。",
      furigana: "ふとまどのそとをみると、うつくしいけしきがひろがっていた。",
      romaji:
        "Futo mado no soto o miru to, utsukushii keshiki ga hirogatteita.",
      traducao:
        "De repente, quando olhei pela janela, havia uma bela paisagem se estendendo.",
    },
  },
  {
    topico: "がち",
    romaji: "gachi",
    traducao: "tendência a; propenso a",
    explicacao:
      "O sufixo がち (gachi) é usado para indicar uma tendência ou propensão a fazer algo ou ter uma característica específica.",
    exemplo: {
      frase: "彼は怒りっぽいがちだ。",
      furigana: "かれはいかりっぽいがちだ。",
      romaji: "Kare wa ikarippoi gachi da.",
      traducao: "Ele tende a ficar irritado facilmente.",
    },
  },
  {
    topico: "がたい",
    romaji: "gatai",
    traducao: "difícil de; duro de",
    explicacao:
      "O sufixo がたい (gatai) é usado para indicar que algo é difícil de ser realizado ou realizado com dificuldade.",
    exemplo: {
      frase: "この問題は難しいがたい。",
      furigana: "このもんだいはむずかしいがたい。",
      romaji: "Kono mondai wa muzukashii gatai.",
      traducao: "Este problema é difícil de ser resolvido.",
    },
  },
  {
    topico: "気味（ぎみ）",
    romaji: "gimi",
    traducao: "sensação de; tendência a",
    explicacao:
      "O sufixo 気味 (gimi) é usado para indicar uma sensação de ou uma tendência a algo.",
    exemplo: {
      frase: "彼は疲れ気味だ。",
      furigana: "かれはつかれぎみだ。",
      romaji: "Kare wa tsukaregimi da.",
      traducao: "Ele está um pouco cansado.",
    },
  },
  {
    topico: "ごとに",
    romaji: "goto ni",
    traducao: "a cada; a cada vez que",
    explicacao:
      "A expressão ごとに (goto ni) é usada para indicar que algo ocorre repetidamente em intervalos regulares.",
    exemplo: {
      frase: "電車が来るごとに人が増える。",
      furigana: "でんしゃがくるごとにひとがふえる。",
      romaji: "Densha ga kuru goto ni hito ga fueru.",
      traducao: "A cada vez que o trem chega, mais pessoas aparecem.",
    },
  },
  {
    topico: "ほど",
    romaji: "hodo",
    traducao: "tão...quanto; cerca de",
    explicacao:
      "A partícula ほど (hodo) é usada para indicar uma comparação entre duas coisas ou expressar uma aproximação de quantidade ou grau.",
    exemplo: {
      frase: "彼は私ほど背が高くない。",
      furigana: "かれはわたしほどせがたかくない。",
      romaji: "Kare wa watashi hodo se ga takakunai.",
      traducao: "Ele não é tão alto quanto eu.",
    },
  },
  {
    topico: "ほど～ない",
    romaji: "hodo ~nai",
    traducao: "não ser tão ~ quanto",
    explicacao:
      "A estrutura ほど～ない (hodo ~nai) é usada para indicar que algo não é tão ~ quanto outra coisa.",
    exemplo: {
      frase: "彼は私ほど速く走れない。",
      furigana: "かれはわたしほどはやくはしれない。",
      romaji: "Kare wa watashi hodo hayaku hashirenai.",
      traducao: "Ele não consegue correr tão rápido quanto eu.",
    },
  },
  {
    topico: "一度に（いちどに）",
    romaji: "ichido ni",
    traducao: "de uma vez; simultaneamente",
    explicacao:
      "A expressão 一度に (ichido ni) é usada para indicar que algo acontece de uma só vez ou simultaneamente.",
    exemplo: {
      frase: "彼は一度にたくさんの仕事をこなす。",
      furigana: "かれはいちどにたくさんのしごとをこなす。",
      romaji: "Kare wa ichido ni takusan no shigoto o konasu.",
      traducao: "Ele lida com muitas tarefas de uma vez.",
    },
  },
  {
    topico: "いくら～ても",
    romaji: "ikura ~te mo",
    traducao: "por mais que; não importa quanto",
    explicacao:
      "A estrutura いくら～ても (ikura ~te mo) é usada para expressar que, não importa o quanto algo seja feito ou aconteça, o resultado é o mesmo.",
    exemplo: {
      frase: "いくら勉強しても覚えられない。",
      furigana: "いくらべんきょうしてもおぼえられない。",
      romaji: "Ikura benkyou shite mo oboerarenai.",
      traducao: "Por mais que eu estude, não consigo me lembrar.",
    },
  },
  {
    topico: "一方だ（いっぽうだ）",
    romaji: "ippou da",
    traducao: "estar cada vez mais; cada vez mais",
    explicacao:
      "A expressão 一方だ (ippou da) é usada para indicar que algo está aumentando ou se tornando cada vez mais intenso.",
    exemplo: {
      frase: "彼の成績は上がる一方だ。",
      furigana: "かれのせいせきはあがるいっぽうだ。",
      romaji: "Kare no seiseki wa agaru ippou da.",
      traducao: "As notas dele estão cada vez melhores.",
    },
  },
  {
    topico: "一体（いったい）",
    romaji: "ittai",
    traducao: "afinal; o que diabos",
    explicacao:
      "A palavra 一体 (ittai) é usada para expressar surpresa, indignação, ênfase ou para enfatizar uma pergunta.",
    exemplo: {
      frase: "一体何が起こったの？",
      furigana: "いったいなにがおこったの？",
      romaji: "Ittai nani ga okotta no?",
      traducao: "O que diabos aconteceu?",
    },
  },
  {
    topico: "じゃない",
    romaji: "ja nai",
    traducao: "não é; não está",
    explicacao:
      "A expressão じゃない (ja nai) é uma forma informal de ではない (dewa nai) e é usada para negar uma afirmação ou fazer uma pergunta negativa.",
    exemplo: {
      frase: "あなたは先生じゃないですか？",
      furigana: "あなたはせんせいじゃないですか？",
      romaji: "Anata wa sensei ja nai desu ka?",
      traducao: "Você não é professor?",
    },
  },
  {
    topico: "か何か（かなにか）",
    romaji: "ka nanika",
    traducao: "ou algo do tipo",
    explicacao:
      "A expressão か何か (ka nanika) é usada para expressar incerteza ou indecisão, sugerindo a possibilidade de algo ou algo do tipo.",
    exemplo: {
      frase: "彼は病気か何かで欠席したようだ。",
      furigana: "かれはびょうきかなにかでけっせきしたようだ。",
      romaji: "Kare wa byouki ka nanika de kesseki shita you da.",
      traducao: "Parece que ele faltou por estar doente ou algo do tipo.",
    },
  },
  {
    topico: "かける",
    romaji: "kakeru",
    traducao: "colocar; pendurar",
    explicacao:
      "O verbo かける (kakeru) é usado para indicar a ação de colocar ou pendurar algo.",
    exemplo: {
      frase: "彼女は鍵をかけた。",
      furigana: "かのじょはかぎをかけた。",
      romaji: "Kanojo wa kagi o kaketa.",
      traducao: "Ela trancou a chave.",
    },
  },
  {
    topico: "から〜にかけて",
    romaji: "kara ~ ni kakete",
    traducao: "de ~ a ~; desde ~ até ~",
    explicacao:
      "A expressão から〜にかけて (kara ~ ni kakete) é usada para indicar um intervalo ou escopo de tempo ou espaço.",
    exemplo: {
      frase: "春から夏にかけて、花が咲く。",
      furigana: "はるからなつにかけて、はながさく。",
      romaji: "Haru kara natsu ni kakete, hana ga saku.",
      traducao: "As flores florescem da primavera ao verão.",
    },
  },
  {
    topico: "代わりに（かわりに）",
    romaji: "kawari ni",
    traducao: "em vez de; no lugar de",
    explicacao:
      "A expressão 代わりに (kawari ni) é usada para indicar que algo é feito em vez de outra coisa ou no lugar de outra pessoa.",
    exemplo: {
      frase: "彼が私の代わりに会議に出席した。",
      furigana: "かれがわたしのかわりにかいぎにしゅっせきした。",
      romaji: "Kare ga watashi no kawari ni kaigi ni shusseki shita.",
      traducao: "Ele participou da reunião no meu lugar.",
    },
  },
  {
    topico: "結果（けっか）",
    romaji: "kekka",
    traducao: "resultado; consequência",
    explicacao:
      "A palavra 結果 (kekka) é usada para se referir ao resultado ou consequência de algo.",
    exemplo: {
      frase: "努力の結果、合格できました。",
      furigana: "どりょくのけっか、ごうかくできました。",
      romaji: "Doryoku no kekka, goukaku dekimashita.",
      traducao: "Como resultado do esforço, passei no exame.",
    },
  },
  {
    topico: "結局（けっきょく）",
    romaji: "kekkyoku",
    traducao: "no final; afinal",
    explicacao:
      "A palavra 結局 (kekkyoku) é usada para expressar o resultado ou a conclusão final de algo.",
    exemplo: {
      frase: "結局、彼は来なかった。",
      furigana: "けっきょく、かれはこなかった。",
      romaji: "Kekkyoku, kare wa konakatta.",
      traducao: "No final, ele não veio.",
    },
  },
  {
    topico: "決して～ない（けっして～ない）",
    romaji: "kesshite ~nai",
    traducao: "nunca; de forma alguma",
    explicacao:
      "A expressão 決して～ない (kesshite ~nai) é usada para enfatizar uma negação forte ou para expressar que algo nunca acontece de forma alguma.",
    exemplo: {
      frase: "彼は決して諦めない。",
      furigana: "かれはけっしてあきらめない。",
      romaji: "Kare wa kesshite akiramenai.",
      traducao: "Ele nunca desiste.",
    },
  },
  {
    topico: "切れない（きれない）",
    romaji: "kirenai",
    traducao: "não pode terminar; não pode cortar",
    explicacao:
      "A forma 切れない (kirenai) é usada para expressar que algo não pode ser concluído ou que algo não pode ser cortado.",
    exemplo: {
      frase: "このパズルはなかなか切れない。",
      furigana: "このぱずるはなかなかきれない。",
      romaji: "Kono pazuru wa nakanaka kirenai.",
      traducao: "Este quebra-cabeça não pode ser concluído facilmente.",
    },
  },
  {
    topico: "きり",
    romaji: "kiri",
    traducao: "apenas; só",
    explicacao:
      "A partícula きり (kiri) é usada para indicar uma restrição ou limite a uma situação ou ação.",
    exemplo: {
      frase: "家族だけが私を支えてくれた。",
      furigana: "かぞくだけがわたしをささえてくれた。",
      romaji: "Kazoku dake ga watashi o sasaete kureta.",
      traducao: "Apenas minha família me apoiou.",
    },
  },
  {
    topico: "切る（きる）",
    romaji: "kiru",
    traducao: "cortar; interromper",
    explicacao:
      "O verbo 切る (kiru) é usado para indicar a ação de cortar algo ou interromper uma ação ou estado.",
    exemplo: {
      frase: "パンを切ってください。",
      furigana: "ぱんをきってください。",
      romaji: "Pan o kitte kudasai.",
      traducao: "Por favor, corte o pão.",
    },
  },
  {
    topico: "っけ",
    romaji: "kke",
    traducao: "lembro-me; será que",
    explicacao:
      "A partícula っけ (kke) é usada para expressar dúvida ou para verificar se alguém se lembra de algo.",
    exemplo: {
      frase: "今日は何の日だっけ？",
      furigana: "きょうはなんのひだっけ？",
      romaji: "Kyou wa nan no hi dakke?",
      traducao: "Que dia é hoje mesmo?",
    },
  },
  {
    topico: "込む（こむ）",
    romaji: "komu",
    traducao: "estar cheio; estar lotado",
    explicacao:
      "O verbo 込む (komu) é usado para indicar que um lugar está cheio de pessoas ou coisas.",
    exemplo: {
      frase: "駅は人で込んでいた。",
      furigana: "えきはひとでこんでいた。",
      romaji: "Eki wa hito de kondeita.",
      traducao: "A estação estava cheia de pessoas.",
    },
  },
  {
    topico: "こそ",
    romaji: "koso",
    traducao: "exatamente; é que",
    explicacao:
      "A partícula こそ (koso) é usada para enfatizar ou destacar o termo que a precede, dando um sentido de exatidão ou ênfase.",
    exemplo: {
      frase: "彼こそが私の理想の人だ。",
      furigana: "かれこそがわたしのりそうのひとだ。",
      romaji: "Kare koso ga watashi no risou no hito da.",
      traducao: "Ele é exatamente a pessoa dos meus sonhos.",
    },
  },
  {
    topico: "こと",
    romaji: "koto",
    traducao: "coisa; fato",
    explicacao:
      "A palavra こと (koto) é usada para indicar uma coisa, um fato ou uma situação abstrata.",
    exemplo: {
      frase: "忘れることはありません。",
      furigana: "わすれることはありません。",
      romaji: "Wasureru koto wa arimasen.",
      traducao: "Não há motivo para esquecer.",
    },
  },
  {
    topico: "ことから",
    romaji: "koto kara",
    traducao: "porque; desde que",
    explicacao:
      "A expressão ことから (koto kara) é usada para indicar uma razão ou causa, ou para indicar que algo é verdadeiro desde o início.",
    exemplo: {
      frase: "遅れたことから、彼は謝った。",
      furigana: "おくれたことから、かれはあやまった。",
      romaji: "Okureta koto kara, kare wa ayamatta.",
      traducao: "Ele se desculpou porque se atrasou.",
    },
  },
  {
    topico: "ことになっている",
    romaji: "koto ni natteiru",
    traducao: "estar estabelecido; estar planejado",
    explicacao:
      "A expressão ことになっている (koto ni natteiru) é usada para indicar que algo está estabelecido, planejado ou acordado.",
    exemplo: {
      frase: "明日の会議は午前10時になっています。",
      furigana: "あしたのかいぎはごぜんじゅうじになっています。",
      romaji: "Ashita no kaigi wa gozen juuji ni natteimasu.",
      traducao: "A reunião de amanhã está marcada para as 10h da manhã.",
    },
  },
  {
    topico: "ことはない",
    romaji: "koto wa nai",
    traducao: "não é necessário; não precisa",
    explicacao:
      "A expressão ことはない (koto wa nai) é usada para indicar que algo não é necessário ou não precisa ser feito.",
    exemplo: {
      frase: "心配することはありません。",
      furigana: "しんぱいすることはありません。",
      romaji: "Shinpai suru koto wa arimasen.",
      traducao: "Não é necessário se preocupar.",
    },
  },
  {
    topico: "ことは～が",
    romaji: "koto wa ~ga",
    traducao: "o que é ~ é; a verdade é ~",
    explicacao:
      "A expressão ことは～が (koto wa ~ga) é usada para introduzir uma afirmação enfática, enfatizando algo que é verdadeiro ou uma característica específica.",
    exemplo: {
      frase: "愛することは生きることだ。",
      furigana: "あいすることはいきることだ。",
      romaji: "Ai suru koto wa ikiru koto da.",
      traducao: "Amar é viver.",
    },
  },
  {
    topico: "くらい / ぐらい",
    romaji: "kurai / gurai",
    traducao: "aproximadamente; cerca de",
    explicacao:
      "As partículas くらい (kurai) e ぐらい (gurai) são usadas para indicar uma aproximação de quantidade, tempo ou grau.",
    exemplo: {
      frase: "彼女は20歳くらいです。",
      furigana: "かのじょはにじゅっさいくらいです。",
      romaji: "Kanojo wa nijussai kurai desu.",
      traducao: "Ela tem cerca de 20 anos.",
    },
  },
  {
    topico: "くせに",
    romaji: "kuseni",
    traducao: "apesar de; embora",
    explicacao:
      "A expressão くせに (kuseni) é usada para expressar uma contradição entre duas coisas, geralmente enfatizando uma atitude ou comportamento inesperado.",
    exemplo: {
      frase: "彼は怠け者なくせに、不満ばかり言う。",
      furigana: "かれはなまけものなくせに、ふまんばかりいう。",
      romaji: "Kare wa namakemono na kuseni, fuman bakari iu.",
      traducao: "Embora seja preguiçoso, ele só reclama.",
    },
  },
  {
    topico: "まるで",
    romaji: "marude",
    traducao: "como se; exatamente como",
    explicacao:
      "A expressão まるで (marude) é usada para comparar algo com algo semelhante, enfatizando a semelhança ou exatidão.",
    exemplo: {
      frase: "彼女の絵はまるで写真のようだ。",
      furigana: "かのじょのえはまるでしゃしんのようだ。",
      romaji: "Kanojo no e wa marude shashin no you da.",
      traducao: "As pinturas dela são exatamente como fotografias.",
    },
  },
  {
    topico: "まさか",
    romaji: "masaka",
    traducao: "de jeito nenhum; impossível",
    explicacao:
      "A palavra まさか (masaka) é usada para expressar incredulidade, surpresa ou negação diante de algo que parece impossível.",
    exemplo: {
      frase: "まさか彼がその大役を演じるなんて。",
      furigana: "まさかかれがそのたいやくをえんじるなんて。",
      romaji: "Masaka kare ga sono taiyaku o enjiru nante.",
      traducao: "De jeito nenhum ele vai interpretar esse papel importante.",
    },
  },
  {
    topico: "めったに～ない",
    romaji: "metta ni ~nai",
    traducao: "raramente; quase nunca",
    explicacao:
      "A expressão めったに～ない (metta ni ~nai) é usada para indicar que algo ocorre raramente ou quase nunca.",
    exemplo: {
      frase: "彼はめったに遅刻しない。",
      furigana: "かれはめったにちこくしない。",
      romaji: "Kare wa metta ni chikoku shinai.",
      traducao: "Ele raramente se atrasa.",
    },
  },
  {
    topico: "も～ば～も",
    romaji: "mo ~ba ~mo",
    traducao: "tanto ~ como também",
    explicacao:
      "A expressão も～ば～も (mo ~ba ~mo) é usada para indicar que algo ocorre tanto em uma situação como em outra.",
    exemplo: {
      frase: "彼は仕事も遊びも全力でやる。",
      furigana: "かれはしごともあそびもぜんりょくでやる。",
      romaji: "Kare wa shigoto mo asobi mo zenryoku de yaru.",
      traducao: "Ele se dedica totalmente tanto ao trabalho quanto à diversão.",
    },
  },
  {
    topico: "もしかしたら",
    romaji: "moshikashitara",
    traducao: "talvez; possivelmente",
    explicacao:
      "A palavra もしかしたら (moshikashitara) é usada para expressar incerteza ou possibilidade, indicando que algo pode acontecer ou ser verdadeiro.",
    exemplo: {
      frase: "もしかしたら彼は忙しいかもしれない。",
      furigana: "もしかしたらかれはいそがしいかもしれない。",
      romaji: "Moshikashitara kare wa isogashii kamoshirenai.",
      traducao: "Talvez ele esteja ocupado.",
    },
  },
  {
    topico: "もしも〜たら",
    romaji: "moshimo ~tara",
    traducao: "se; caso",
    explicacao:
      "A expressão もしも〜たら (moshimo ~tara) é usada para expressar uma condição hipotética ou uma situação hipotética que pode ocorrer.",
    exemplo: {
      frase: "もしも明日雨が降ったら、ピクニックは中止です。",
      furigana: "もしもあしたあめがふったら、ぴくにっくはちゅうしです。",
      romaji: "Moshimo ashita ame ga futtara, pikunikku wa chuushi desu.",
      traducao: "Se chover amanhã, o picnic será cancelado.",
    },
  },
  {
    topico: "向け（むけ）",
    romaji: "muke",
    traducao: "para; direcionado a",
    explicacao:
      "O sufixo 向け (muke) é usado para indicar que algo é direcionado a um determinado grupo de pessoas ou propósito.",
    exemplo: {
      frase: "この本は初心者向けです。",
      furigana: "このほんはしょしんしゃむけです。",
      romaji: "Kono hon wa shoshinsha muke desu.",
      traducao: "Este livro é voltado para iniciantes.",
    },
  },
  {
    topico: "向き（むき）",
    romaji: "muki",
    traducao: "direção; orientação",
    explicacao:
      "A palavra 向き (muki) é usada para se referir à direção ou orientação de algo.",
    exemplo: {
      frase: "風の向きが変わった。",
      furigana: "かぜのむきがかわった。",
      romaji: "Kaze no muki ga kawatta.",
      traducao: "A direção do vento mudou.",
    },
  },
  {
    topico: "むしろ",
    romaji: "mushiro",
    traducao: "pelo contrário; ao invés",
    explicacao:
      "A palavra むしろ (mushiro) é usada para expressar uma ideia contrária ou oposta à expectativa anterior.",
    exemplo: {
      frase: "彼女は怒るどころか、むしろ喜んだ。",
      furigana: "かのじょはおこるどころか、むしろよろこんだ。",
      romaji: "Kanojo wa okoru dokoro ka, mushiro yorokonda.",
      traducao: "Ela não ficou brava, pelo contrário, ficou feliz.",
    },
  },
  {
    topico: "ながらも",
    romaji: "nagara mo",
    traducao: "apesar de; embora",
    explicacao:
      "A expressão ながらも (nagara mo) é usada para indicar que algo ocorre simultaneamente a outra ação ou condição, mesmo que possa parecer contraditório.",
    exemplo: {
      frase: "彼は忙しいながらも、手伝ってくれた。",
      furigana: "かれはいそがしいながらも、てつだってくれた。",
      romaji: "Kare wa isogashii nagara mo, tetsudatte kureta.",
      traducao: "Embora ele estivesse ocupado, ele me ajudou.",
    },
  },
  {
    topico: "ないことはない",
    romaji: "naikoto wa nai",
    traducao: "não é que não exista; é possível",
    explicacao:
      "A expressão ないことはない (naikoto wa nai) é usada para expressar que algo não é impossível ou que é possível que algo ocorra.",
    exemplo: {
      frase: "完璧ではないが、彼女は美しいないことはない。",
      furigana: "かんぺきではないが、かのじょはうつくしいないことはない。",
      romaji: "Kanpeki dewa nai ga, kanojo wa utsukushii naikoto wa nai.",
      traducao: "Ela pode não ser perfeita, mas não é que ela não seja bonita.",
    },
  },
  {
    topico: "ないと",
    romaji: "naito",
    traducao: "se não; caso não",
    explicacao:
      "A expressão ないと (naito) é usada para indicar uma consequência ou condição negativa se algo não ocorrer.",
    exemplo: {
      frase: "早く出発しないと、電車に乗り遅れる。",
      furigana: "はやくしゅっぱつしないと、でんしゃにのりおくれる。",
      romaji: "Hayaku shuppatsu shinai to, densha ni noriokureru.",
      traducao: "Se não sairmos logo, perderemos o trem.",
    },
  },
  {
    topico: "なかなか",
    romaji: "nan'naka",
    traducao: "bastante; consideravelmente",
    explicacao:
      "A palavra なかなか (nan'naka) é usada para expressar que algo é difícil ou leva tempo para acontecer, ou que algo é consideravelmente bom.",
    exemplo: {
      frase: "彼はなかなか上手にピアノを弾く。",
      furigana: "かれはなかなかじょうずにぴあのをひく。",
      romaji: "Kare wa nan'naka jouzu ni piano o hiku.",
      traducao: "Ele toca piano bastante bem.",
    },
  },
  {
    topico: "なんか / なんて / など",
    romaji: "nanka / nante / nado",
    traducao: "coisas como; e assim por diante",
    explicacao:
      "As palavras なんか (nanka), なんて (nante) e など (nado) são usadas para indicar exemplos ou listas não exaustivas de algo.",
    exemplo: {
      frase: "彼女は本なんかよく読む。",
      furigana: "かのじょはほんなんかよくよむ。",
      romaji: "Kanojo wa hon nanka yoku yomu.",
      traducao: "Ela lê coisas como livros com frequência.",
    },
  },
  {
    topico: "直す（なおす）",
    romaji: "naosu",
    traducao: "consertar; corrigir",
    explicacao:
      "O verbo 直す (naosu) é usado para indicar a ação de consertar ou corrigir algo.",
    exemplo: {
      frase: "時計が壊れたので、修理に出して直した。",
      furigana: "とけいがこわれたので、しゅうりにだしてなおした。",
      romaji: "Tokei ga kowareta node, shuuri ni dashite naoshita.",
      traducao:
        "Como o relógio quebrou, eu o enviei para conserto e o consertei.",
    },
  },
  {
    topico: "なぜなら",
    romaji: "nazenara",
    traducao: "porque; pois",
    explicacao:
      "A expressão なぜなら (nazenara) é usada para introduzir uma explicação ou justificativa para algo.",
    exemplo: {
      frase: "遅刻した。なぜなら、電車が遅れたからだ。",
      furigana: "ちこくした。なぜなら、でんしゃがおくれたからだ。",
      romaji: "Chikoku shita. Nazenara, densha ga okureta kara da.",
      traducao: "Eu me atrasei. Porque o trem estava atrasado.",
    },
  },
  {
    topico: "んだって",
    romaji: "ndatte",
    traducao: "dizem que; ouvi dizer que",
    explicacao:
      "A expressão んだって (ndatte) é usada para relatar algo que se ouviu ou diz que é verdade.",
    exemplo: {
      frase: "彼は辞めるんだって。本当かどうかはわからないけど。",
      furigana: "かれはやめるんだって。ほんとうかどうかはわからないけど。",
      romaji: "Kare wa yameru ndatte. Hontou ka douka wa wakaranai kedo.",
      traducao: "Dizem que ele vai sair. Não sei se é verdade.",
    },
  },
  {
    topico: "に違いない（にちがいない）",
    romaji: "ni chigai nai",
    traducao: "com certeza; sem dúvida",
    explicacao:
      "A expressão に違いない (ni chigai nai) é usada para expressar uma forte convicção de que algo é verdadeiro ou certo.",
    exemplo: {
      frase: "彼女は成功するに違いない。",
      furigana: "かのじょはせいこうするにちがいない。",
      romaji: "Kanojo wa seikou suru ni chigai nai.",
      traducao: "Ela com certeza terá sucesso.",
    },
  },
  {
    topico: "に反して（にはんして）",
    romaji: "ni hanshite",
    traducao: "ao contrário de; em contraste com",
    explicacao:
      "A expressão に反して (ni hanshite) é usada para indicar uma situação oposta ao que se espera ou em contraste com algo.",
    exemplo: {
      frase: "予想に反して、試験は簡単だった。",
      furigana: "よそうにはんして、しけんはかんたんだった。",
      romaji: "Yosou ni hanshite, shiken wa kantan datta.",
      traducao: "Ao contrário das expectativas, o exame foi fácil.",
    },
  },
  {
    topico: "にかけて",
    romaji: "ni kakete",
    traducao: "em relação a; no que diz respeito a",
    explicacao:
      "A expressão にかけて (ni kakete) é usada para indicar o assunto ou a área em que algo é aplicado ou relacionado.",
    exemplo: {
      frase: "彼女は勉強にかけては真剣だ。",
      furigana: "かのじょはべんきょうにかけてはしんけんだ。",
      romaji: "Kanojo wa benkyou ni kakete wa shinken da.",
      traducao: "Ela é séria no que diz respeito aos estudos.",
    },
  },
  {
    topico: "に関する / に関して（にかんする / にかんして）",
    romaji: "ni kansuru / ni kanshite",
    traducao: "sobre; em relação a",
    explicacao:
      "As expressões に関する (ni kansuru) e に関して (ni kanshite) são usadas para indicar que algo está relacionado a um assunto específico ou se refere a algo.",
    exemplo: {
      frase: "この本は環境問題に関する内容です。",
      furigana: "このほんはかんきょうもんだいにかんするないようです。",
      romaji: "Kono hon wa kankyou mondai ni kansuru naiyou desu.",
      traducao: "Este livro trata sobre questões ambientais.",
    },
  },
  {
    topico: "にかわって / にかわり",
    romaji: "ni kawatte / ni kawari",
    traducao: "em vez de; no lugar de",
    explicacao:
      "As expressões にかわって (ni kawatte) e にかわり (ni kawari) são usadas para indicar que algo ou alguém substitui outra coisa ou pessoa.",
    exemplo: {
      frase: "友達にかわって私がプレゼントを渡した。",
      furigana: "ともだちにかわってわたしがぷれぜんとをわたした。",
      romaji: "Tomodachi ni kawatte watashi ga purezento o watashita.",
      traducao: "Em vez do meu amigo, fui eu quem entregou o presente.",
    },
  },
  {
    topico: "に比べて（にくらべて）",
    romaji: "ni kurabete",
    traducao: "em comparação com; em relação a",
    explicacao:
      "A expressão に比べて (ni kurabete) é usada para fazer uma comparação entre duas coisas ou indicar uma diferença entre elas.",
    exemplo: {
      frase: "彼は私に比べて背が高い。",
      furigana: "かれはわたしにくらべてせがたかい。",
      romaji: "Kare wa watashi ni kurabete se ga takai.",
      traducao: "Ele é mais alto em comparação comigo.",
    },
  },
  {
    topico: "に慣れる（になれる）",
    romaji: "ni nareru",
    traducao: "acostumar-se a; tornar-se familiarizado com",
    explicacao:
      "O verbo 慣れる (nareru) é usado para indicar que alguém se acostuma ou se torna familiarizado com algo.",
    exemplo: {
      frase: "日本の文化に慣れるのに時間がかかった。",
      furigana: "にほんのぶんかになれるのにじかんがかかった。",
      romaji: "Nihon no bunka ni nareru no ni jikan ga kakatta.",
      traducao: "Levou tempo para me acostumar com a cultura japonesa.",
    },
  },
  {
    topico: "において / における",
    romaji: "ni oite / ni okeru",
    traducao: "em; no",
    explicacao:
      "As expressões において (ni oite) e における (ni okeru) são usadas para indicar o local, a posição ou o contexto em que algo acontece.",
    exemplo: {
      frase: "その問題において重要なポイントを押さえてください。",
      furigana: "そのもんだいにおいてじゅうようなぽいんとをおさえてください。",
      romaji: "Sono mondai ni oite juuyou na pointo o osaete kudasai.",
      traducao: "Por favor, destaque os pontos importantes nesse problema.",
    },
  },
  {
    topico: "にしたがって",
    romaji: "ni shitagatte",
    traducao: "conforme; de acordo com",
    explicacao:
      "A expressão にしたがって (ni shitagatte) é usada para indicar que algo acontece ou muda de acordo com outra coisa ou conforme uma sequência de eventos.",
    exemplo: {
      frase: "年齢にしたがって体力が低下する。",
      furigana: "ねんれいにしたがってたいりょくがていかする。",
      romaji: "Nenrei ni shitagatte tairyoku ga teika suru.",
      traducao: "A resistência física diminui de acordo com a idade.",
    },
  },
  {
    topico: "にしても",
    romaji: "ni shitemo",
    traducao: "mesmo que; mesmo sendo",
    explicacao:
      "A expressão にしても (ni shitemo) é usada para indicar que algo é verdadeiro ou válido, mesmo em uma situação particular.",
    exemplo: {
      frase: "雨にしても行かなければならない。",
      furigana: "あめにしてもいかなければならない。",
      romaji: "Ame ni shitemo ikanakereba naranai.",
      traducao: "Mesmo que chova, tenho que ir.",
    },
  },
  {
    topico: "にしては",
    romaji: "ni shite wa",
    traducao: "apesar de; para",
    explicacao:
      "A expressão にしては (ni shite wa) é usada para expressar uma expectativa ou avaliação surpreendente em relação a algo ou alguém.",
    exemplo: {
      frase: "彼は若いにしてはとても成熟している。",
      furigana: "かれはわかいにしてはとてもせいじゅくしている。",
      romaji: "Kare wa wakai ni shite wa totemo seijuku shiteiru.",
      traducao: "Ele é muito maduro para alguém tão jovem.",
    },
  },
  {
    topico: "に対して（にたいして）",
    romaji: "ni taishite",
    traducao: "em relação a; com relação a",
    explicacao:
      "A expressão に対して (ni taishite) é usada para indicar a direção, o alvo ou o objeto de uma ação, opinião ou sentimento.",
    exemplo: {
      frase: "顧客に対して丁寧な対応を心がけてください。",
      furigana: "こきゃくにたいしてていねいなたいおうをこころがけてください。",
      romaji: "Kokyaku ni taishite teinei na taiou o kokorogakete kudasai.",
      traducao: "Por favor, seja educado no atendimento aos clientes.",
    },
  },
  {
    topico: "にとって",
    romaji: "ni totte",
    traducao: "para; em termos de",
    explicacao:
      "A expressão にとって (ni totte) é usada para indicar uma perspectiva, ponto de vista ou importância em relação a algo.",
    exemplo: {
      frase: "成功は彼にとって非常に重要だ。",
      furigana: "せいこうはかれにとってひじょうにじゅうようだ。",
      romaji: "Seikou wa kare ni totte hijou ni juuyou da.",
      traducao: "O sucesso é muito importante para ele.",
    },
  },
  {
    topico: "について",
    romaji: "ni tsuite",
    traducao: "sobre; a respeito de",
    explicacao:
      "A expressão について (ni tsuite) é usada para indicar o assunto ou o tema de uma discussão ou explicação.",
    exemplo: {
      frase: "この問題について話し合いましょう。",
      furigana: "このもんだいについてはなしあいましょう。",
      romaji: "Kono mondai ni tsuite hanashiaimashou.",
      traducao: "Vamos discutir sobre esse problema.",
    },
  },
  {
    topico: "につれて",
    romaji: "ni tsurete",
    traducao: "conforme; à medida que",
    explicacao:
      "A expressão につれて (ni tsurete) é usada para indicar que uma mudança ou progresso ocorre em conjunto com outra coisa ou à medida que algo acontece.",
    exemplo: {
      frase: "歳を重ねるにつれて、体力が衰える。",
      furigana: "としをかさねるにつれて、たいりょくがおとろえる。",
      romaji: "Toshi o kasaneru ni tsurete, tairyoku ga otoroeru.",
      traducao: "À medida que envelhecemos, a resistência física diminui.",
    },
  },
  {
    topico: "には",
    romaji: "ni wa",
    traducao: "para; em relação a",
    explicacao:
      "A expressão には (ni wa) é usada para indicar uma finalidade, objetivo ou direção em relação a algo.",
    exemplo: {
      frase: "この手紙は彼には宛てていません。",
      furigana: "このてがみはかれにはあてていません。",
      romaji: "Kono tegami wa kare ni wa ateteimasen.",
      traducao: "Esta carta não é para ele.",
    },
  },
  {
    topico: "によると / によれば",
    romaji: "niyoru to / niyoreba",
    traducao: "de acordo com; segundo",
    explicacao:
      "As expressões によると (niyoru to) e によれば (niyoreba) são usadas para introduzir informações ou citações baseadas em fontes externas.",
    exemplo: {
      frase: "天気予報によると、明日は雨だそうです。",
      furigana: "てんきよほうによると、あしたはあめだそうです。",
      romaji: "Tenki yohou niyoru to, ashita wa ame da sou desu.",
      traducao: "De acordo com a previsão do tempo, amanhã choverá.",
    },
  },
  {
    topico: "によって / による",
    romaji: "ni yotte / ni yoru",
    traducao: "por; através de",
    explicacao:
      "As expressões によって (ni yotte) e による (ni yoru) são usadas para indicar a causa, o método ou o meio pelo qual algo é feito ou acontece.",
    exemplo: {
      frase: "成績は努力によって改善される。",
      furigana: "せいせきはどりょくによってかいぜんされる。",
      romaji: "Seiseki wa doryoku ni yotte kaizen sareru.",
      traducao: "As notas são melhoradas através do esforço.",
    },
  },
  {
    topico: "のでしょうか",
    romaji: "no deshou ka",
    traducao: "será que; será possível",
    explicacao:
      "A expressão のでしょうか (no deshou ka) é usada para fazer uma pergunta educada ou expressar incerteza em relação a algo.",
    exemplo: {
      frase: "彼はまだ来ないのでしょうか。",
      furigana: "かれはまだこないのでしょうか。",
      romaji: "Kare wa mada konai no deshou ka.",
      traducao: "Será que ele ainda não chegou?",
    },
  },
  {
    topico: "を中心に（をちゅうしんに）",
    romaji: "o chūshin ni",
    traducao: "com o foco em; centrado em",
    explicacao:
      "A expressão を中心に (o chūshin ni) é usada para indicar que algo está centrado ou tem como foco principal algo específico.",
    exemplo: {
      frase: "この街を中心に観光客が集まっています。",
      furigana: "このまちをちゅうしんにかんこうきゃくがあつまっています。",
      romaji: "Kono machi o chūshin ni kankōkyaku ga atsumatteimasu.",
      traducao:
        "Os turistas estão se reunindo nesta cidade como ponto central.",
    },
  },
  {
    topico: "をはじめ",
    romaji: "o hajime",
    traducao: "começando com; incluindo",
    explicacao:
      "A expressão をはじめ (o hajime) é usada para indicar que algo é o ponto de partida ou que algo é incluído em uma lista.",
    exemplo: {
      frase: "果物をはじめ、野菜もたくさん食べましょう。",
      furigana: "くだものをはじめ、やさいもたくさんたべましょう。",
      romaji: "Kudamono o hajime, yasai mo takusan tabemashou.",
      traducao: "Vamos comer muitas frutas, além de vegetais.",
    },
  },
  {
    topico: "を込めて（をこめて）",
    romaji: "o komete",
    traducao: "com; cheio de",
    explicacao:
      "A expressão を込めて (o komete) é usada para indicar que algo é feito com emoção, intenção ou significado especial.",
    exemplo: {
      frase: "感謝の気持ちを込めてプレゼントを贈りました。",
      furigana: "かんしゃのきもちをこめてぷれぜんとをおくりました。",
      romaji: "Kansha no kimochi o komete purezento o okurimashita.",
      traducao: "Enviei um presente com sentimentos de gratidão.",
    },
  },
  {
    topico: "を通じて / を通して（をつうじて / をとおして）",
    romaji: "o tsūjite / o tōshite",
    traducao: "através de; por meio de",
    explicacao:
      "As expressões を通じて (o tsūjite) e を通して (o tōshite) são usadas para indicar que algo é alcançado, realizado ou transmitido por meio de um meio, método ou processo.",
    exemplo: {
      frase: "インターネットを通じて情報を入手することができます。",
      furigana:
        "いんたーねっとをつうじてじょうほうをにゅうしゅすることができます。",
      romaji: "Intānetto o tsūjite jōhō o nyūshu suru koto ga dekimasu.",
      traducao: "Você pode obter informações por meio da internet.",
    },
  },
  {
    topico: "おかげで",
    romaji: "okage de",
    traducao: "graças a; por causa de",
    explicacao:
      "A expressão おかげで (okage de) é usada para expressar gratidão ou reconhecimento por algo que resulta em um resultado positivo.",
    exemplo: {
      frase: "おかげで無事に試験に合格しました。",
      furigana: "おかげでぶじにしけんにごうかくしました。",
      romaji: "Okage de buji ni shiken ni goukaku shimashita.",
      traducao: "Graças a isso, passei no exame com segurança.",
    },
  },
  {
    topico: "っぱなし",
    romaji: "ppanashi",
    traducao: "deixado; sem parar",
    explicacao:
      "A expressão っぱなし (ppanashi) é usada para indicar que algo é deixado na mesma condição ou estado sem ser interrompido.",
    exemplo: {
      frase: "テレビをつけっぱなしで寝てしまいました。",
      furigana: "てれびをつけっぱなしでねてしまいました。",
      romaji: "Terebi o tsukeppanashi de nete shimaimashita.",
      traducao: "Acabei dormindo com a televisão ligada.",
    },
  },
  {
    topico: "っぽい",
    romaji: "ppoi",
    traducao: "parecido com; com características de",
    explicacao:
      "A terminação っぽい (ppoi) é usada para indicar que algo tem características ou traços semelhantes a algo ou alguém.",
    exemplo: {
      frase: "彼の話し方は少し怖いっぽいですね。",
      furigana: "かれのはなしかたはすこしこわいっぽいですね。",
      romaji: "Kare no hanashikata wa sukoshi kowaippoi desu ne.",
      traducao: "A forma de falar dele é um pouco assustadora, não é?",
    },
  },
  {
    topico: "さえ",
    romaji: "sae",
    traducao: "até mesmo; mesmo",
    explicacao:
      "A partícula さえ (sae) é usada para enfatizar que algo é verdadeiro ou válido, mesmo em uma situação extremamente limitada ou inesperada.",
    exemplo: {
      frase: "子供さえできる料理なので、簡単に作れます。",
      furigana: "こどもさえできるりょうりなので、かんたんにつくれます。",
      romaji: "Kodomo sae dekiru ryōri na node, kantan ni tsukuremasu.",
      traducao:
        "Você pode fazer isso facilmente, até mesmo as crianças conseguem.",
    },
  },
  {
    topico: "さえ～ば",
    romaji: "sae ~ ba",
    traducao: "se apenas; desde que",
    explicacao:
      "A construção さえ～ば (sae ~ ba) é usada para expressar que se apenas uma condição for atendida, o resultado desejado será alcançado.",
    exemplo: {
      frase: "お金さえあれば、幸せになれると思います。",
      furigana: "おかねさえあれば、しあわせになれるとおもいます。",
      romaji: "Okane sae areba, shiawase ni nareru to omoimasu.",
      traducao:
        "Eu acredito que se apenas tivermos dinheiro, podemos ser felizes.",
    },
  },
  {
    topico: "際に（さいに）",
    romaji: "sai ni",
    traducao: "na ocasião de; em relação a",
    explicacao:
      "A expressão 際に (sai ni) é usada para indicar o momento em que algo acontece ou a situação em que algo é relevante.",
    exemplo: {
      frase: "出発の際には注意してください。",
      furigana: "しゅっぱつのさいにはちゅういしてください。",
      romaji: "Shuppatsu no sai ni wa chūi shite kudasai.",
      traducao: "Por favor, tenha cuidado na ocasião da partida.",
    },
  },
  {
    topico: "最中に（さいちゅうに）",
    romaji: "saichū ni",
    traducao: "enquanto; no meio de",
    explicacao:
      "A expressão 最中に (saichū ni) é usada para indicar que algo ocorre durante o meio de uma atividade ou evento.",
    exemplo: {
      frase: "電話の最中に、彼が来ました。",
      furigana: "でんわのさいちゅうに、かれがきました。",
      romaji: "Denwa no saichū ni, kare ga kimashita.",
      traducao: "Ele chegou enquanto eu estava no telefone.",
    },
  },
  {
    topico: "さらに",
    romaji: "sara ni",
    traducao: "além disso; adicionalmente",
    explicacao:
      "A palavra さらに (sara ni) é usada para indicar que algo é adicional, além do que foi mencionado anteriormente.",
    exemplo: {
      frase: "彼は仕事ができる上、さらにリーダーシップもある。",
      furigana: "かれはしごとができるうえ、さらにりーだーしっぷもある。",
      romaji: "Kare wa shigoto ga dekiru ue, sara ni rīdāshippu mo aru.",
      traducao: "Além de ser capaz de trabalhar, ele também possui liderança.",
    },
  },
  {
    topico: "さて",
    romaji: "sate",
    traducao: "bem; então",
    explicacao:
      "A palavra さて (sate) é usada para introduzir uma nova parte de uma conversa, discurso ou narrativa.",
    exemplo: {
      frase: "さて、次の話題に移りましょう。",
      furigana: "さて、つぎのわだいにうつりましょう。",
      romaji: "Sate, tsugi no wadai ni utsurimashou.",
      traducao: "Bem, vamos passar para o próximo tópico.",
    },
  },
  {
    topico: "せいで",
    romaji: "sei de",
    traducao: "por causa de; devido a",
    explicacao:
      "A expressão せいで (sei de) é usada para indicar que algo acontece como resultado ou consequência de outra coisa.",
    exemplo: {
      frase: "雨のせいでピクニックが中止になりました。",
      furigana: "あめのせいでぴくにっくがちゅうしになりました。",
      romaji: "Ame no sei de pikunikku ga chūshi ni narimashita.",
      traducao: "O piquenique foi cancelado por causa da chuva.",
    },
  },
  {
    topico: "せいぜい",
    romaji: "seizei",
    traducao: "no máximo; no melhor dos casos",
    explicacao:
      "A palavra せいぜい (seizei) é usada para indicar um limite superior ou o máximo que algo pode alcançar.",
    exemplo: {
      frase: "彼にはせいぜい3日間の休暇があります。",
      furigana: "かれにはせいぜいみっかかんのきゅうかがあります。",
      romaji: "Kare ni wa seizei mikkakan no kyūka ga arimasu.",
      traducao: "Ele tem no máximo 3 dias de folga.",
    },
  },
  {
    topico: "しばらく",
    romaji: "shibaraku",
    traducao: "um tempo; por um tempo",
    explicacao:
      "A palavra しばらく (shibaraku) é usada para indicar uma duração de tempo curta ou indefinida.",
    exemplo: {
      frase: "しばらくお待ちください。",
      furigana: "しばらくおまちください。",
      romaji: "Shibaraku omachi kudasai.",
      traducao: "Por favor, espere um momento.",
    },
  },
  {
    topico: "しかない",
    romaji: "shika nai",
    traducao: "não ter escolha a não ser; somente",
    explicacao:
      "A expressão しかない (shika nai) é usada para indicar que não há outra escolha ou opção além de uma determinada ação ou situação.",
    exemplo: {
      frase: "時間がないので、仕方なくタクシーに乗るしかありません。",
      furigana: "じかんがないので、しかたなくたくしーにのるしかありません。",
      romaji:
        "Jikan ga nai node, shikata naku takushii ni noru shika arimasen.",
      traducao:
        "Como não tenho tempo, não tenho escolha a não ser pegar um táxi.",
    },
  },
  {
    topico: "そのために",
    romaji: "sono tame ni",
    traducao: "para isso; com esse propósito",
    explicacao:
      "A expressão そのために (sono tame ni) é usada para indicar que algo é feito com o propósito específico de alcançar um determinado resultado.",
    exemplo: {
      frase: "新しいプロジェクトの成功のために、全力を尽くします。",
      furigana:
        "あたらしいぷろじぇくとのせいこうのために、ぜんりょくをつくします。",
      romaji:
        "Atarashii purojekuto no seikō no tame ni, zenryoku o tsukushimasu.",
      traducao: "Vou dar o meu melhor para o sucesso do novo projeto.",
    },
  },
  {
    topico: "それとも",
    romaji: "sore tomo",
    traducao: "ou; ou então",
    explicacao:
      "A expressão それとも (sore tomo) é usada para apresentar uma escolha ou alternativa entre duas ou mais opções.",
    exemplo: {
      frase: "今晩は中華料理にしましょうか、それともイタリアンにしましょうか？",
      furigana:
        "こんばんはちゅうかりょうりにしましょうか、それともいたりあんにしましょうか？",
      romaji:
        "Konban wa chūka ryōri ni shimashou ka, sore tomo itarian ni shimashou ka?",
      traducao:
        "Devemos escolher comida chinesa ou italiana para o jantar desta noite?",
    },
  },
  {
    topico: "そうもない / そうにない",
    romaji: "sou mo nai / sou ni nai",
    traducao: "parece improvável; não parece",
    explicacao:
      "As expressões そうもない (sou mo nai) e そうにない (sou ni nai) são usadas para indicar que algo parece improvável ou não provável de acontecer.",
    exemplo: {
      frase: "彼はその仕事を受けるそうもない。",
      furigana: "かれはそのしごとをうけるそうもない。",
      romaji: "Kare wa sono shigoto o ukeru sou mo nai.",
      traducao: "Parece improvável que ele aceite esse trabalho.",
    },
  },
  {
    topico: "すでに",
    romaji: "sude ni",
    traducao: "já; desde já",
    explicacao:
      "A palavra すでに (sude ni) é usada para indicar que algo já ocorreu ou está em um estado atual.",
    exemplo: {
      frase: "予約はすでに完了しています。",
      furigana: "よやくはすでにかんりょうしています。",
      romaji: "Yoyaku wa sude ni kanryou shiteimasu.",
      traducao: "A reserva já está concluída.",
    },
  },
  {
    topico: "すなわち",
    romaji: "sunawachi",
    traducao: "isto é; ou seja",
    explicacao:
      "A palavra すなわち (sunawachi) é usada para introduzir uma explicação mais detalhada ou uma definição equivalente de algo mencionado anteriormente.",
    exemplo: {
      frase: "今日はお休みです。すなわち、家でゆっくり過ごします。",
      furigana: "きょうはおやすみです。すなわち、いえでゆっくりすごします。",
      romaji: "Kyō wa oyasumi desu. Sunawachi, ie de yukkuri sugoshimasu.",
      traducao: "Hoje é um dia de folga. Isto é, vou relaxar em casa.",
    },
  },
  {
    topico: "数量 + は（すうりょう + は）",
    romaji: "sūryō wa",
    traducao: "quanto a quantidade",
    explicacao:
      "A expressão 数量 + は (sūryō + wa) é usada para indicar a quantidade de algo em relação a um tópico específico.",
    exemplo: {
      frase: "この商品の数量は限られています。",
      furigana: "このしょうひんのすうりょうはかぎられています。",
      romaji: "Kono shōhin no sūryō wa kagirareteimasu.",
      traducao: "A quantidade deste produto é limitada.",
    },
  },
  {
    topico: "たものだ",
    romaji: "ta mono da",
    traducao: "costumava; costumava ser",
    explicacao:
      "A expressão たものだ (ta mono da) é usada para indicar que algo costumava ser verdadeiro no passado, mas pode não ser mais.",
    exemplo: {
      frase: "若いころはよく運動したものだ。",
      furigana: "わかいころはよくうんどうしたものだ。",
      romaji: "Wakai koro wa yoku undō shita mono da.",
      traducao:
        "Costumava fazer exercícios com frequência quando era mais jovem.",
    },
  },
  {
    topico: "たとたん",
    romaji: "ta totan",
    traducao: "assim que; no momento em que",
    explicacao:
      "A expressão たとたん (ta totan) é usada para indicar que algo acontece imediatamente após outra ação ou evento.",
    exemplo: {
      frase: "ドアが開いたとたん、彼は入ってきました。",
      furigana: "どあがあいたとたん、かれははいってきました。",
      romaji: "Doa ga aita totan, kare wa haitte kimashita.",
      traducao: "Assim que a porta se abriu, ele entrou.",
    },
  },
  {
    topico: "たびに",
    romaji: "tabi ni",
    traducao: "sempre que; cada vez que",
    explicacao:
      "A expressão たびに (tabi ni) é usada para indicar que algo ocorre repetidamente ou cada vez que uma ação é executada.",
    exemplo: {
      frase: "日本に行くたびに、新しいことを発見します。",
      furigana: "にほんにいくたびに、あたらしいことをはっけんします。",
      romaji: "Nihon ni iku tabi ni, atarashii koto o hakken shimasu.",
      traducao: "Sempre que vou ao Japão, descubro coisas novas.",
    },
  },
  {
    topico: "ために",
    romaji: "tame ni",
    traducao: "para; com o objetivo de",
    explicacao:
      "A expressão ために (tame ni) é usada para indicar a finalidade ou objetivo de uma ação.",
    exemplo: {
      frase: "勉強のために図書館に行きます。",
      furigana: "べんきょうのためにとしょかんにいきます。",
      romaji: "Benkyō no tame ni toshokan ni ikimasu.",
      traducao: "Vou à biblioteca para estudar.",
    },
  },
  {
    topico: "確かに（たしかに）",
    romaji: "tashika ni",
    traducao: "certamente; com certeza",
    explicacao:
      "A expressão 確かに (tashika ni) é usada para enfatizar que algo é verdadeiro ou certo.",
    exemplo: {
      frase: "彼は確かに優秀なエンジニアです。",
      furigana: "かれはたしかにゆうしゅうなえんじにあです。",
      romaji: "Kare wa tashika ni yūshū na enjinia desu.",
      traducao: "Ele é certamente um engenheiro excelente.",
    },
  },
  {
    topico: "たて",
    romaji: "tate",
    traducao: "recém; recentemente",
    explicacao:
      "A palavra たて (tate) é usada para indicar que algo aconteceu recentemente ou está em um estado novo.",
    exemplo: {
      frase: "新しく建てられたビルが目立ちます。",
      furigana: "あたらしくたてられたびるがめだちます。",
      romaji: "Atarashiku taterareta biru ga medachimasu.",
      traducao: "Os prédios recém-construídos são chamativos.",
    },
  },
  {
    topico: "たとえ～ても",
    romaji: "tatoe ~ te mo",
    traducao: "mesmo que; mesmo se",
    explicacao:
      "A expressão たとえ～ても (tatoe ~ te mo) é usada para apresentar uma condição hipotética, enfatizando que algo é verdadeiro, independentemente das circunstâncias.",
    exemplo: {
      frase: "たとえ雨が降っても、ピクニックに行きたいです。",
      furigana: "たとえあめがふっても、ぴくにっくにいきたいです。",
      romaji: "Tatoe ame ga futte mo, pikunikku ni ikitai desu.",
      traducao: "Mesmo que chova, eu quero ir ao piquenique.",
    },
  },
  {
    topico: "例えば（たとえば）",
    romaji: "tatoeba",
    traducao: "por exemplo",
    explicacao:
      "A expressão 例えば (tatoeba) é usada para introduzir um exemplo ou uma ilustração.",
    exemplo: {
      frase: "例えば、本を読むことは私の趣味です。",
      furigana: "たとえば、ほんをよむことはわたしのしゅみです。",
      romaji: "Tatoeba, hon o yomu koto wa watashi no shumi desu.",
      traducao: "Por exemplo, ler livros é meu hobby.",
    },
  },
  {
    topico: "たって",
    romaji: "tatte",
    traducao: "apesar de; mesmo se",
    explicacao:
      "A expressão たって (tatte) é usada para indicar uma ação que ocorre, mesmo que haja alguma restrição ou obstáculo.",
    exemplo: {
      frase: "お金がなくても、楽しみたって旅行に行きます。",
      furigana: "おかねがなくても、たのしみたってりょこうにいきます。",
      romaji: "Okane ga nakutemo, tanoshimi tatte ryokō ni ikimasu.",
      traducao: "Mesmo que eu não tenha dinheiro, eu vou viajar e me divertir.",
    },
  },
  {
    topico: "てばかりいる",
    romaji: "te bakari iru",
    traducao: "ficar apenas fazendo; estar sempre fazendo",
    explicacao:
      "A expressão てばかりいる (te bakari iru) é usada para descrever alguém que está sempre fazendo a mesma coisa ou que está preso em uma atividade contínua.",
    exemplo: {
      frase: "彼は家でゲームをしてばかりいる。",
      furigana: "かれはいえでげーむをしてばかりいる。",
      romaji: "Kare wa ie de gēmu o shite bakari iru.",
      traducao: "Ele fica apenas jogando videogame em casa o tempo todo.",
    },
  },
  {
    topico: "てごらん",
    romaji: "te goran",
    traducao: "por favor, tente; por favor, dê uma olhada",
    explicacao:
      "A expressão てごらん (te goran) é usada para solicitar que alguém tente ou dê uma olhada em algo.",
    exemplo: {
      frase: "この問題を解いてごらんください。",
      furigana: "このもんだいをといてごらんください。",
      romaji: "Kono mondai o toite goran kudasai.",
      traducao: "Por favor, tente resolver este problema.",
    },
  },
  {
    topico: "てはじめて",
    romaji: "te hajimete",
    traducao: "somente depois de; apenas quando",
    explicacao:
      "A expressão てはじめて (te hajimete) é usada para indicar que algo acontece somente após a realização de uma ação específica.",
    exemplo: {
      frase: "文法を理解してはじめて、日本語が話せるようになります。",
      furigana:
        "ぶんぽうをりかいしてはじめて、にほんごがはなせるようになります。",
      romaji:
        "Bunpō o rikai shite hajimete, nihongo ga hanaseru yō ni narimasu.",
      traducao: "Você só poderá falar japonês depois de entender a gramática.",
    },
  },
  {
    topico: "てからでないと",
    romaji: "te kara de nai to",
    traducao: "a menos que; antes de",
    explicacao:
      "A expressão てからでないと (te kara de nai to) é usada para indicar que algo não pode ou não deve ocorrer antes de uma determinada ação ser realizada.",
    exemplo: {
      frase: "宿題を終わらせてからでないと、遊びに行けません。",
      furigana: "しゅくだいをおわらせてからでないと、あそびにいけません。",
      romaji: "Shukudai o owarasete kara de nai to, asobi ni ikemasen.",
      traducao:
        "Você não pode sair para brincar antes de terminar sua lição de casa.",
    },
  },
  {
    topico: "てしょうがない・てしかたがない",
    romaji: "te shō ga nai / te shikata ga nai",
    traducao: "não ter escolha a não ser; não ter jeito",
    explicacao:
      "As expressões てしょうがない (te shō ga nai) e てしかたがない (te shikata ga nai) são usadas para indicar que não há outra escolha ou opção além de uma determinada situação.",
    exemplo: {
      frase: "遅れてしまったので、謝るしかありません。",
      furigana: "おくれてしまったので、あやまるしかありません。",
      romaji: "Okurete shimatta node, ayamaru shika arimasen.",
      traducao: "Como me atrasei, não tenho escolha a não ser me desculpar.",
    },
  },
  {
    topico: "て済む（てすむ）",
    romaji: "te sumu",
    traducao: "ser suficiente; ficar resolvido",
    explicacao:
      "A expressão て済む (te sumu) é usada para indicar que algo é suficiente ou que algo fica resolvido com uma determinada ação.",
    exemplo: {
      frase: "メールで連絡をするだけで済みます。",
      furigana: "めーるでれんらくをするだけですむます。",
      romaji: "Mēru de renraku o suru dake de sumimasu.",
      traducao: "Basta entrar em contato por e-mail e estará resolvido.",
    },
  },
  {
    topico: "てはいけないから",
    romaji: "te wa ikenai kara",
    traducao: "porque não se deve; porque não é permitido",
    explicacao:
      "A expressão てはいけないから (te wa ikenai kara) é usada para dar uma razão ou explicação do motivo pelo qual algo não deve ser feito.",
    exemplo: {
      frase: "遅刻してはいけないから、早めに出発しましょう。",
      furigana: "ちこくしてはいけないから、はやめにしゅっぱつしましょう。",
      romaji: "Chikoku shite wa ikenai kara, hayame ni shuppatsu shimashou.",
      traducao: "Vamos sair mais cedo porque não devemos nos atrasar.",
    },
  },
  {
    topico: "ている場合じゃない（ているばあいじゃない）",
    romaji: "te iru baai ja nai",
    traducao: "não é o momento de; não é apropriado",
    explicacao:
      "A expressão ている場合じゃない (te iru baai ja nai) é usada para indicar que não é o momento adequado ou apropriado para algo.",
    exemplo: {
      frase: "今は休んでいる場合じゃない。",
      furigana: "いまはやすんでいるばあいじゃない。",
      romaji: "Ima wa yasunde iru baai ja nai.",
      traducao: "Agora não é o momento de descansar.",
    },
  },
  {
    topico: "的（てき）",
    romaji: "teki",
    traducao: "alvo; objetivo",
    explicacao:
      "A palavra 的 (teki) é usada para indicar que algo é um alvo ou objetivo.",
    exemplo: {
      frase: "スポーツカーを買うのが夢の的です。",
      furigana: "すぽーつかーをかうのがゆめのてきです。",
      romaji: "Supōtsukā o kau no ga yume no teki desu.",
      traducao: "Comprar um carro esportivo é o meu objetivo dos sonhos.",
    },
  },
  {
    topico: "ても始まらない（てもはじまらない）",
    romaji: "te mo hajimaranai",
    traducao: "não importa o quanto; não faz diferença",
    explicacao:
      "A expressão ても始まらない (te mo hajimaranai) é usada para indicar que algo não faz diferença ou não tem impacto, independentemente de quanto esforço seja feito.",
    exemplo: {
      frase: "遅刻したからといって、謝ったところで始まらない。",
      furigana: "ちこくしたからといって、あやまったところではじまらない。",
      romaji: "Chikoku shita kara to itte, ayamatta tokoro de hajimaranai.",
      traducao: "Não importa se você se desculpou, isso não vai mudar nada.",
    },
  },
  {
    topico: "ても構わない（てもかまわない）",
    romaji: "te mo kamawanai",
    traducao: "não importa; não faz diferença",
    explicacao:
      "A expressão ても構わない (te mo kamawanai) é usada para indicar que algo não faz diferença ou não importa, permitindo uma ação ou escolha livre.",
    exemplo: {
      frase: "好きな色で結構です。何色でも構いません。",
      furigana: "すきないろでけっこうです。なにいろでもかまいません。",
      romaji: "Suki na iro de kekkō desu. Nani iro demo kamaimasen.",
      traducao:
        "Está tudo bem com qualquer cor que você goste. Não importa a cor.",
    },
  },
  {
    topico: "てもしょうがない / てもしかたがない",
    romaji: "te mo shō ga nai / te mo shikata ga nai",
    traducao: "não importa o quanto; não adianta",
    explicacao:
      "As expressões てもしょうがない (te mo shō ga nai) e てもしかたがない (te mo shikata ga nai) são usadas para indicar que não importa o quanto algo seja feito, não há solução ou resultado satisfatório.",
    exemplo: {
      frase: "頑張ってもしょうがないときもあります。",
      furigana: "がんばってもしょうがないときもあります。",
      romaji: "Ganbatte mo shō ga nai toki mo arimasu.",
      traducao: "Há momentos em que não adianta se esforçar.",
    },
  },
  {
    topico: "と言えば（といえば）",
    romaji: "to ieba",
    traducao: "falando em; mencionando",
    explicacao:
      "A expressão と言えば (to ieba) é usada para fazer uma transição para um novo tópico ou mencionar algo relacionado ao assunto atual.",
    exemplo: {
      frase: "日本の伝統文化と言えば、茶道があります。",
      furigana: "にほんのでんとうぶんかといえば、さどうがあります。",
      romaji: "Nihon no dentō bunka to ieba, sadō ga arimasu.",
      traducao:
        "Falando em cultura tradicional japonesa, temos a cerimônia do chá.",
    },
  },
  {
    topico: "といい / たらいい",
    romaji: "to ii / tara ii",
    traducao: "seria bom se; seria melhor se",
    explicacao:
      "As expressões といい (to ii) e たらいい (tara ii) são usadas para expressar um desejo ou sugestão, indicando que algo seria bom ou melhor se acontecesse.",
    exemplo: {
      frase: "明日晴れるといいですね。",
      furigana: "あしたはれるといいですね。",
      romaji: "Ashita hareru to ii desu ne.",
      traducao: "Seria bom se amanhã fizesse sol.",
    },
  },
  {
    topico: "といっても",
    romaji: "to itte mo",
    traducao: "embora se diga; mesmo que se diga",
    explicacao:
      "A expressão といっても (to itte mo) é usada para indicar que algo pode ser dito ou chamado de uma certa maneira, embora possa haver uma ressalva ou diferença.",
    exemplo: {
      frase: "彼は教師といっても、実は学生です。",
      furigana: "かれはきょうしといっても、じつはがくせいです。",
      romaji: "Kare wa kyōshi to itte mo, jitsu wa gakusei desu.",
      traducao:
        "Embora seja chamado de professor, ele é na verdade um estudante.",
    },
  },
  {
    topico: "ということだ",
    romaji: "to iu koto da",
    traducao: "isso significa que; dizem que",
    explicacao:
      "A expressão ということだ (to iu koto da) é usada para transmitir informações ou relatos que foram ouvidos de outras pessoas.",
    exemplo: {
      frase: "明日は雨だということです。",
      furigana: "あしたはあめだということです。",
      romaji: "Ashita wa ame da to iu koto desu.",
      traducao: "Dizem que amanhã vai chover.",
    },
  },
  {
    topico: "というのは",
    romaji: "to iu no wa",
    traducao: "o que significa é; o que quer dizer é",
    explicacao:
      "A expressão というのは (to iu no wa) é usada para explicar ou dar uma definição do que algo significa ou quer dizer.",
    exemplo: {
      frase: "この言葉の意味というのは何ですか？",
      furigana: "このことばのいみというのはなんですか？",
      romaji: "Kono kotoba no imi to iu no wa nan desu ka?",
      traducao: "O que significa esta palavra?",
    },
  },
  {
    topico: "と言うと（というと）",
    romaji: "to iu to",
    traducao: "quando se diz; se dissermos",
    explicacao:
      "A expressão と言うと (to iu to) é usada para introduzir uma afirmação ou exemplo relacionado a algo que foi mencionado anteriormente.",
    exemplo: {
      frase: "彼は大学生だと言うと、驚きました。",
      furigana: "かれはだいがくせいだというと、おどろきました。",
      romaji: "Kare wa daigakusei da to iu to, odorokimashita.",
      traducao:
        "Quando dissemos que ele é estudante universitário, ele ficou surpreso.",
    },
  },
  {
    topico: "というより",
    romaji: "to iu yori",
    traducao: "mais do que; ao invés de",
    explicacao:
      "A expressão というより (to iu yori) é usada para indicar uma preferência ou enfatizar uma escolha ou condição em relação a outra.",
    exemplo: {
      frase: "彼は友達というより、兄のような存在です。",
      furigana: "かれはともだちというより、あにのようなそんざいです。",
      romaji: "Kare wa tomodachi to iu yori, ani no yō na sonzai desu.",
      traducao: "Ele é mais como um irmão do que um amigo.",
    },
  },
  {
    topico: "とみえる / とみえて",
    romaji: "to mieru / to miete",
    traducao: "parece que; aparentemente",
    explicacao:
      "As expressões とみえる (to mieru) e とみえて (to miete) são usadas para indicar que algo parece ser verdadeiro ou ocorrer com base nas evidências ou aparência.",
    exemplo: {
      frase: "彼は忙しくて、疲れているとみえます。",
      furigana: "かれはいそがしくて、つかれているとみえます。",
      romaji: "Kare wa isogashikute, tsukarete iru to miemasu.",
      traducao: "Ele parece estar ocupado e cansado.",
    },
  },
  {
    topico: "とすれば・としたら・とすると",
    romaji: "to sureba / to shitara / to suru to",
    traducao: "se assumirmos que; se supormos que",
    explicacao:
      "As expressões とすれば (to sureba), としたら (to shitara) e とすると (to suru to) são usadas para fazer suposições ou considerações hipotéticas, indicando uma condição ou situação possível.",
    exemplo: {
      frase: "もし明日雨だとしたら、ピクニックは延期しましょう。",
      furigana: "もしあしたあめだとしたら、ぴくにっくはえんきしましょう。",
      romaji: "Moshi ashita ame da to shitara, pikunikku wa enki shimashou.",
      traducao: "Se amanhã chover, vamos adiar o piquenique.",
    },
  },
  {
    topico: "と共に（とともに）",
    romaji: "to tomo ni",
    traducao: "juntamente com; à medida que",
    explicacao:
      "A expressão と共に (to tomo ni) é usada para indicar que algo ocorre juntamente com outra coisa ou à medida que algo acontece.",
    exemplo: {
      frase: "技術の進歩と共に、生活も変化してきました。",
      furigana: "ぎじゅつのしんぽとともに、せいかつもへんかしてきました。",
      romaji:
        "Gijutsu no shinpo to tomo ni, seikatsu mo henka shite kimashita.",
      traducao: "À medida que a tecnologia avança, a vida também está mudando.",
    },
  },
  {
    topico: "ついでに",
    romaji: "tsuide ni",
    traducao: "aproveitando a oportunidade; já que estamos nisso",
    explicacao:
      "A expressão ついでに (tsuide ni) é usada para indicar que algo é feito aproveitando a oportunidade de outra ação ou situação.",
    exemplo: {
      frase: "スーパーに行くついでに、郵便局にも寄ってきました。",
      furigana: "すーぱーにいくついでに、ゆうびんきょくにもよってきました。",
      romaji: "Sūpā ni iku tsuide ni, yūbinkyoku ni mo yotte kimashita.",
      traducao:
        "Aproveitando a oportunidade de ir ao supermercado, também passei no correio.",
    },
  },
  {
    topico: "つまり",
    romaji: "tsumari",
    traducao: "em outras palavras; ou seja",
    explicacao:
      "A expressão つまり (tsumari) é usada para fornecer uma explicação resumida ou para reafirmar algo de forma mais clara.",
    exemplo: {
      frase: "彼は日本に住んでいる、つまり彼は日本語が話せます。",
      furigana: "かれはにほんにすんでいる、つまりかれはにほんごがはなせます。",
      romaji:
        "Kare wa Nihon ni sunde iru, tsumari kare wa nihongo ga hanasemasu.",
      traducao: "Ele mora no Japão, ou seja, ele fala japonês.",
    },
  },
  {
    topico: "つもりだった",
    romaji: "tsumori datta",
    traducao: "eu tinha a intenção de; eu planejava",
    explicacao:
      "A expressão つもりだった (tsumori datta) é usada para indicar que alguém tinha a intenção de fazer algo ou tinha um plano, mas algo aconteceu para impedir a realização dessa intenção.",
    exemplo: {
      frase: "試験のために勉強するつもりだったが、風邪をひいてしまった。",
      furigana:
        "しけんのためにべんきょうするつもりだったが、かぜをひいてしまった。",
      romaji:
        "Shiken no tame ni benkyō suru tsumori datta ga, kaze o hiite shimatta.",
      traducao:
        "Eu tinha a intenção de estudar para o exame, mas acabei pegando um resfriado.",
    },
  },
  {
    topico: "つもりで",
    romaji: "tsumori de",
    traducao: "com a intenção de; com a expectativa de",
    explicacao:
      "A expressão つもりで (tsumori de) é usada para indicar que alguém faz algo com a intenção ou expectativa de um certo resultado.",
    exemplo: {
      frase: "お祝いのプレゼントを買ったつもりで、彼女に渡しました。",
      furigana:
        "おいわいのぷれぜんとをかったつもりで、かのじょにわたしました。",
      romaji: "Oiwa no purezento o katta tsumori de, kanojo ni watashimashita.",
      traducao:
        "Entreguei a ela um presente de celebração com a intenção de comprá-lo.",
    },
  },
  {
    topico: "うちに",
    romaji: "uchi ni",
    traducao: "enquanto; antes que",
    explicacao:
      "A expressão うちに (uchi ni) é usada para indicar que algo ocorre ou deve ser feito antes que uma certa condição ou momento mude.",
    exemplo: {
      frase: "帰るうちに雨が降り出した。",
      furigana: "かえるうちにあめがふりだした。",
      romaji: "Kaeru uchi ni ame ga furidashita.",
      traducao: "Choveu enquanto eu estava voltando para casa.",
    },
  },
  {
    topico: "上で（うえで）",
    romaji: "ue de",
    traducao: "com base em; com referência a",
    explicacao:
      "A expressão 上で (ue de) é usada para indicar que algo é feito com base em algo anteriormente mencionado ou como uma referência.",
    exemplo: {
      frase: "報告書を作成する上で、注意点を押さえておく必要があります。",
      furigana:
        "ほうこくしょをさくせいするうえで、ちゅういてんをおさえておくひつようがあります。",
      romaji:
        "Hōkokusho o sakusei suru ue de, chūiten o osaete oku hitsuyō ga arimasu.",
      traducao:
        "Ao criar um relatório, é necessário ter em mente os pontos importantes.",
    },
  },
  {
    topico: "上に（うえに）",
    romaji: "ue ni",
    traducao: "além disso; além de",
    explicacao:
      "A expressão 上に (ue ni) é usada para adicionar informações adicionais a algo que já foi mencionado.",
    exemplo: {
      frase: "彼は英語が話せる上に、フランス語も流暢です。",
      furigana: "かれはえいごがはなせるうえに、ふらんすごもりゅうちょうです。",
      romaji: "Kare wa eigo ga hanaseru ue ni, furansugo mo ryūchō desu.",
      traducao: "Além de falar inglês, ele também é fluente em francês.",
    },
  },
  {
    topico: "は別として（はべつとして）",
    romaji: "wa betsu toshite",
    traducao: "deixando de lado; à parte de",
    explicacao:
      "A expressão は別として (wa betsu toshite) é usada para indicar que algo é considerado separadamente ou independentemente de outra coisa mencionada anteriormente.",
    exemplo: {
      frase: "彼の性格は別として、彼の仕事ぶりは素晴らしい。",
      furigana: "かれのせいかくはべつとして、かれのしごとぶりはすばらしい。",
      romaji:
        "Kare no seikaku wa betsu toshite, kare no shigoto buri wa subarashii.",
      traducao:
        "Deixando de lado sua personalidade, o desempenho do trabalho dele é excelente.",
    },
  },
  {
    topico: "はもちろん",
    romaji: "wa mochiron",
    traducao: "é claro que; sem dúvida",
    explicacao:
      "A expressão はもちろん (wa mochiron) é usada para indicar que algo é óbvio, sem dúvida ou naturalmente verdadeiro.",
    exemplo: {
      frase: "彼女は美しいはもちろん、頭も良いです。",
      furigana: "かのじょはうつくしいはもちろん、あたまもいいです。",
      romaji: "Kanojo wa utsukushii wa mochiron, atama mo ii desu.",
      traducao: "Ela é não apenas bonita, mas também inteligente.",
    },
  },
  {
    topico: "は～で有名（は～でゆうめい）",
    romaji: "wa ~ de yuumei",
    traducao: "famoso por ~; conhecido por ~",
    explicacao:
      "A expressão は～で有名 (wa ~ de yuumei) é usada para indicar que algo ou alguém é famoso ou conhecido por realizar uma determinada atividade ou característica.",
    exemplo: {
      frase: "京都はお寺で有名です。",
      furigana: "きょうとはおてらでゆうめいです。",
      romaji: "Kyōto wa otera de yuumei desu.",
      traducao: "Kyoto é famosa pelos seus templos.",
    },
  },
  {
    topico: "わけだ",
    romaji: "wake da",
    traducao: "significa que; implica que",
    explicacao:
      "A expressão わけだ (wake da) é usada para indicar que algo é uma conclusão lógica ou uma consequência natural com base nas informações fornecidas anteriormente.",
    exemplo: {
      frase: "彼は試験に合格したと聞いた。つまり、頑張ったわけだ。",
      furigana:
        "かれはしけんにごうかくしたときいた。つまり、がんばったわけだ。",
      romaji:
        "Kare wa shiken ni gōkaku shita to kiita. Tsumari, ganbatta wake da.",
      traducao:
        "Ouvi dizer que ele passou no exame. Isso significa que ele se esforçou.",
    },
  },
  {
    topico: "わけではない",
    romaji: "wake dewa nai",
    traducao: "não significa que; não quer dizer que",
    explicacao:
      "A expressão わけではない (wake dewa nai) é usada para negar ou refutar uma suposição ou interpretação equivocada sobre algo.",
    exemplo: {
      frase: "彼が遅れたからと言って、怒るわけではありません。",
      furigana: "かれがおくれたからといって、おこるわけではありません。",
      romaji: "Kare ga okureta kara to itte, okoru wake dewa arimasen.",
      traducao: "Não significa que eu esteja bravo só porque ele se atrasou.",
    },
  },
  {
    topico: "わけがない",
    romaji: "wake ga nai",
    traducao: "não há como; não é possível",
    explicacao:
      "A expressão わけがない (wake ga nai) é usada para indicar que algo é impossível ou altamente improvável com base nas circunstâncias ou informações fornecidas.",
    exemplo: {
      frase: "彼がそれをやったわけがない。信じられない。",
      furigana: "かれがそれをやったわけがない。しんじられない。",
      romaji: "Kare ga sore o yatta wake ga nai. Shinjirarenai.",
      traducao: "Não há como ele ter feito isso. É inacreditável.",
    },
  },
  {
    topico: "わけにはいかない",
    romaji: "wake niwa ikanai",
    traducao: "não pode; não é possível; não se pode permitir",
    explicacao:
      "A expressão わけにはいかない (wake niwa ikanai) é usada para indicar que algo não pode ser feito ou não é possível devido a circunstâncias ou restrições.",
    exemplo: {
      frase: "今日は忙しいので、遊びに行くわけにはいかない。",
      furigana: "きょうはいそがしいので、あそびにいくわけにはいかない。",
      romaji: "Kyō wa isogashii node, asobi ni iku wake niwa ikanai.",
      traducao: "Estou ocupado hoje, não posso ir me divertir.",
    },
  },
  {
    topico: "割に（わりに）",
    romaji: "wari ni",
    traducao: "relativamente; considerando",
    explicacao:
      "A expressão 割に (wari ni) é usada para indicar que algo é relativamente ou considerando certas circunstâncias.",
    exemplo: {
      frase: "このホテルは値段に対して割に良い。",
      furigana: "このホテルはねだんにたいしてわりにいい。",
      romaji: "Kono hoteru wa nedan ni taishite wari ni ii.",
      traducao: "Este hotel é relativamente bom em relação ao preço.",
    },
  },
  {
    topico: "わざと",
    romaji: "wazato",
    traducao: "de propósito; intencionalmente",
    explicacao:
      "A expressão わざと (wazato) é usada para indicar que algo é feito de propósito ou intencionalmente.",
    exemplo: {
      frase: "彼はわざと私を無視した。",
      furigana: "かれはわざとわたしをむしした。",
      romaji: "Kare wa wazato watashi o mushi shita.",
      traducao: "Ele me ignorou de propósito.",
    },
  },
  {
    topico: "わざわざ",
    romaji: "wazawaza",
    traducao: "propositadamente; de propósito; especialmente",
    explicacao:
      "A expressão わざわざ (wazawaza) é usada para indicar que algo é feito ou preparado especialmente ou com esforço extra.",
    exemplo: {
      frase: "彼はわざわざ遠くまで来てくれた。",
      furigana: "かれはわざわざとおくまできてくれた。",
      romaji: "Kare wa wazawaza tōku made kite kureta.",
      traducao: "Ele veio especialmente de longe para me visitar.",
    },
  },
  {
    topico: "よりも",
    romaji: "yori mo",
    traducao: "mais do que; em comparação com",
    explicacao:
      "A expressão よりも (yori mo) é usada para indicar uma comparação, enfatizando que algo é mais do que ou em comparação com outra coisa.",
    exemplo: {
      frase: "昨日よりも今日の天気は良いです。",
      furigana: "きのうよりもきょうのてんきはいいです。",
      romaji: "Kinō yori mo kyō no tenki wa ii desu.",
      traducao: "O tempo hoje está melhor do que ontem.",
    },
  },
  {
    topico: "ようがない",
    romaji: "you ga nai",
    traducao: "não há como; impossível",
    explicacao:
      "A expressão ようがない (you ga nai) é usada para indicar que algo é impossível ou não há como devido às circunstâncias.",
    exemplo: {
      frase: "短時間で完成するようがない。",
      furigana: "たんじかんでかんせいするようがない。",
      romaji: "Tanjikan de kansei suru you ga nai.",
      traducao: "Não há como terminar em um curto período de tempo.",
    },
  },
  {
    topico: "ような気がする（ようなきがする）",
    romaji: "you na ki ga suru",
    traducao: "sinto que; tenho a sensação de que",
    explicacao:
      "A expressão ような気がする (you na ki ga suru) é usada para expressar uma sensação ou intuição sobre algo.",
    exemplo: {
      frase: "彼は何か隠しているような気がする。",
      furigana: "かれはなにかかくしているようなきがする。",
      romaji: "Kare wa nanika kakushite iru you na ki ga suru.",
      traducao: "Sinto que ele está escondendo algo.",
    },
  },
  {
    topico: "ように",
    romaji: "you ni",
    traducao: "de modo a; para que",
    explicacao:
      "A expressão ように (you ni) é usada para indicar um objetivo, desejo ou intenção em fazer algo.",
    exemplo: {
      frase: "毎日早く起きるようにしています。",
      furigana: "まいにちはやくおきるようにしています。",
      romaji: "Mainichi hayaku okiru you ni shite imasu.",
      traducao: "Estou tentando acordar cedo todos os dias.",
    },
  },
  {
    topico: "ように見える（ようにみえる）",
    romaji: "you ni mieru",
    traducao: "parece que; dá a impressão de que",
    explicacao:
      "A expressão ように見える (you ni mieru) é usada para expressar a aparência ou impressão de algo.",
    exemplo: {
      frase: "彼は疲れているように見える。",
      furigana: "かれはつかれているようにみえる。",
      romaji: "Kare wa tsukarete iru you ni mieru.",
      traducao: "Ele parece cansado.",
    },
  },
  {
    topico: "ようとしない",
    romaji: "you to shinai",
    traducao: "não tentar; não se esforçar",
    explicacao:
      "A expressão ようとしない (you to shinai) é usada para indicar que alguém não está disposto a tentar ou se esforçar para fazer algo.",
    exemplo: {
      frase: "彼は勉強しようとしない。",
      furigana: "かれはべんきょうしようとしない。",
      romaji: "Kare wa benkyou shiyou to shinai.",
      traducao: "Ele não está disposto a estudar.",
    },
  },
  {
    topico: "ようとする",
    romaji: "you to suru",
    traducao: "tentar; esforçar-se para",
    explicacao:
      "A expressão ようとする (you to suru) é usada para indicar que alguém está tentando ou se esforçando para fazer algo.",
    exemplo: {
      frase: "彼は新しい言語を学ぼうとしています。",
      furigana: "かれはあたらしいげんごをまなぼうとしています。",
      romaji: "Kare wa atarashii gengo o manabou to shite imasu.",
      traducao: "Ele está tentando aprender um novo idioma.",
    },
  },
  {
    topico: "ずに",
    romaji: "zuni",
    traducao: "sem fazer; sem",
    explicacao:
      "A expressão ずに (zuni) é usada para indicar que algo é feito sem fazer ou sem realizar outra ação.",
    exemplo: {
      frase: "言わずに出かけました。",
      furigana: "いわずにでかけました。",
      romaji: "Iwazu ni dekakemashita.",
      traducao: "Saí sem dizer nada.",
    },
  },
  {
    topico: "ずにはいられない",
    romaji: "zuni wa irarenai",
    traducao: "não pode deixar de; não consigo evitar",
    explicacao:
      "A expressão ずにはいられない (zuni wa irarenai) é usada para indicar que alguém não consegue evitar ou não pode deixar de fazer algo.",
    exemplo: {
      frase: "彼女の笑顔を見ると、ほほえまずにはいられない。",
      furigana: "かのじょのえがおをみると、ほほえまずにはいられない。",
      romaji: "Kanojo no egao o miru to, hohoemazu ni wa irarenai.",
      traducao: "Quando vejo o sorriso dela, não consigo evitar sorrir.",
    },
  },
  {
    topico: "ずつ",
    romaji: "zutsu",
    traducao: "cada; por; de cada vez",
    explicacao:
      "A expressão ずつ (zutsu) é usada para indicar uma quantidade igual ou distribuição de algo em partes iguais.",
    exemplo: {
      frase: "一人ずつ番号を呼ばれました。",
      furigana: "ひとりずつばんごうをよばれました。",
      romaji: "Hitori zutsu bangou o yobaremashita.",
      traducao: "Fomos chamados um por um.",
    },
  },
];

export default n3GrammarList;