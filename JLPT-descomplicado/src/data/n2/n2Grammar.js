const n2GrammarList = [
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
    topico: "いよいよ",
    romaji: "iyoiyo",
    traducao: "finalmente; cada vez mais; mais e mais",
    explicacao:
      "A expressão いよいよ (iyoiyo) é usada para indicar que algo está se aproximando ou se intensificando, muitas vezes transmitindo um senso de finalidade ou expectativa.",
    exemplo: {
      frase: "いよいよ夏休みが始まります。",
      furigana: "いよいよなつやすみがはじまります。",
      romaji: "Iyoiyo natsuyasumi ga hajimarimasu.",
      traducao: "Finalmente, as férias de verão vão começar.",
    },
  },
  {
    topico: "上（じょう）",
    romaji: "jou",
    traducao: "acima; superior; sobre",
    explicacao:
      "A palavra 上 (jou) é usada para indicar algo que está em uma posição mais alta ou superior, seja fisicamente ou em termos de status ou qualidade.",
    exemplo: {
      frase: "本は机の上にあります。",
      furigana: "ほんはつくえのじょうにあります。",
      romaji: "Hon wa tsukue no jou ni arimasu.",
      traducao: "O livro está em cima da mesa.",
    },
  },
  {
    topico: "かのように",
    romaji: "ka no you ni",
    traducao: "como se; como se fosse",
    explicacao:
      "A expressão かのように (ka no you ni) é usada para comparar ou descrever uma semelhança entre duas coisas ou situações, transmitindo a ideia de 'como se' ou 'como se fosse'.",
    exemplo: {
      frase: "彼女は天使のかのように美しい。",
      furigana: "かのじょはてんしのかのようにうつくしい。",
      romaji: "Kanojo wa tenshi no ka no you ni utsukushii.",
      traducao: "Ela é linda como um anjo.",
    },
  },
  {
    topico: "かと思ったら（かとおもったら）",
    romaji: "ka to omottara",
    traducao: "apenas quando eu pensei que; mal eu pensei que",
    explicacao:
      "A expressão かと思ったら (ka to omottara) é usada para expressar uma mudança repentina de situação ou resultado, indicando que algo aconteceu de maneira contrária ou diferente do que se esperava.",
    exemplo: {
      frase: "雨が降りかと思ったら、やんでしまいました。",
      furigana: "あめがふりかとおもったら、やんでしまいました。",
      romaji: "Ame ga furi ka to omottara, yande shimaimashita.",
      traducao: "Apenas quando eu pensei que ia chover, parou.",
    },
  },
  {
    topico: "か～ないかのうちに",
    romaji: "ka~nai ka no uchi ni",
    traducao: "antes mesmo de ter a chance de",
    explicacao:
      "A expressão か～ないかのうちに (ka~nai ka no uchi ni) é usada para indicar que algo acontece rapidamente, antes mesmo de ter a oportunidade de fazer ou experimentar outra coisa.",
    exemplo: {
      frase: "雨が降らないかのうちに家に帰りましょう。",
      furigana: "あめがふらないかのうちにいえにかえりましょう。",
      romaji: "Ame ga furanai ka no uchi ni ie ni kaerimashou.",
      traducao: "Vamos voltar para casa antes mesmo de começar a chover.",
    },
  },
  {
    topico: "かえって",
    romaji: "kaette",
    traducao: "pelo contrário; ao invés disso",
    explicacao:
      "A expressão かえって (kaette) é usada para indicar que algo acontece de maneira oposta ou contrária ao que se esperava, ou para expressar uma ideia contrária à anteriormente mencionada.",
    exemplo: {
      frase: "彼女は忙しいので、かえって時間がありません。",
      furigana: "かのじょはいそがしいので、かえってじかんがありません。",
      romaji: "Kanojo wa isogashii node, kaette jikan ga arimasen.",
      traducao: "Ela está ocupada, então, ao invés disso, ela não tem tempo.",
    },
  },
  {
    topico: "限り（かぎり）",
    romaji: "kagiri",
    traducao: "enquanto; desde que",
    explicacao:
      "A palavra 限り (kagiri) é usada para indicar uma condição ou restrição, expressando a ideia de 'enquanto' ou 'desde que' algo seja verdadeiro ou válido.",
    exemplo: {
      frase: "私の知っている限り、彼はまだ日本にいます。",
      furigana: "わたしのしっているかぎり、かれはまだにほんにいます。",
      romaji: "Watashi no shitte iru kagiri, kare wa mada Nihon ni imasu.",
      traducao: "Enquanto eu sei, ele ainda está no Japão.",
    },
  },
  {
    topico: "甲斐がある（かいがある）",
    romaji: "kai ga aru",
    traducao: "valer a pena; ter mérito",
    explicacao:
      "A expressão 甲斐がある (kai ga aru) é usada para indicar que o esforço ou a ação investida em algo vale a pena ou tem mérito. É frequentemente usado para expressar que o resultado justifica o esforço.",
    exemplo: {
      frase: "頑張って勉強した甲斐がありました。",
      furigana: "がんばってべんきょうしたかいがありました。",
      romaji: "Ganbatte benkyou shita kai ga arimashita.",
      traducao: "Valeu a pena estudar com empenho.",
    },
  },
  {
    topico: "かねない",
    romaji: "kanenai",
    traducao: "poder; ser capaz de; correr o risco de",
    explicacao:
      "A expressão かねない (kanenai) é usada para indicar que algo pode acontecer ou ser possível, geralmente expressando um resultado negativo ou indesejável. Também pode transmitir a ideia de correr o risco de algo acontecer.",
    exemplo: {
      frase: "彼は怒って、辞めてしまうかねない。",
      furigana: "かれはおこって、やめてしまうかねない。",
      romaji: "Kare wa okotte, yamete shimau kanenai.",
      traducao: "Ele pode ficar bravo e acabar desistindo.",
    },
  },
  {
    topico: "かねる",
    romaji: "kaneru",
    traducao: "não poder; não ser capaz de; não ter condições de",
    explicacao:
      "O verbo かねる (kaneru) é usado para expressar a impossibilidade ou a incapacidade de realizar algo. Também pode ser usado para expressar uma relutância ou dificuldade em fazer algo.",
    exemplo: {
      frase: "申し訳ありませんが、お手伝いはできかねます。",
      furigana: "もうしわけありませんが、おてつだいはできかねます。",
      romaji: "Moushiwake arimasen ga, otetsudai wa dekikanemasu.",
      traducao: "Desculpe, não posso ajudar.",
    },
  },
  {
    topico: "から言うと（からいうと）",
    romaji: "kara iu to",
    traducao: "do ponto de vista de; em termos de",
    explicacao:
      "A expressão から言うと (kara iu to) é usada para introduzir um ponto de vista, uma opinião ou uma perspectiva em relação a algo, geralmente usado para fazer comparações ou apresentar uma avaliação.",
    exemplo: {
      frase: "経済的に言えば、その提案は合理的ではありません。",
      furigana:
        "けいざいてきにいえば、そのていあんはごうりてきではありません。",
      romaji: "Keizaiteki ni ieba, sono teian wa gouriteki de wa arimasen.",
      traducao: "Do ponto de vista econômico, essa proposta não é razoável.",
    },
  },
  {
    topico: "からこそ",
    romaji: "kara koso",
    traducao: "precisamente por isso; exatamente por isso",
    explicacao:
      "A expressão からこそ (kara koso) é usada para enfatizar que algo é verdadeiro ou válido por causa de algo mencionado anteriormente. É usado para expressar uma conexão direta ou uma relação causal.",
    exemplo: {
      frase: "苦労したからこそ、成し遂げた喜びがある。",
      furigana: "くろうしたからこそ、なしとげたよろこびがある。",
      romaji: "Kurou shita kara koso, nashitoge ta yorokobi ga aru.",
      traducao:
        "Precisamente por ter enfrentado dificuldades, há alegria em ter realizado.",
    },
  },
  {
    topico: "から見ると（からみると）",
    romaji: "kara miru to",
    traducao: "olhando de; com base em",
    explicacao:
      "A expressão から見ると (kara miru to) é usada para analisar ou avaliar algo com base em um determinado ponto de vista ou perspectiva. É usado para apresentar uma opinião ou uma conclusão com base em informações disponíveis.",
    exemplo: {
      frase: "結果から見ると、彼は成功したと言えるでしょう。",
      furigana: "けっかからみると、かれはせいこうしたといえるでしょう。",
      romaji: "Kekka kara miru to, kare wa seikou shita to ieru deshou.",
      traducao:
        "Olhando os resultados, podemos dizer que ele foi bem-sucedido.",
    },
  },
  {
    topico: "からには",
    romaji: "kara niwa",
    traducao: "agora que; já que",
    explicacao:
      "A expressão からには (kara niwa) é usada para indicar uma determinação ou expectativa forte com base em uma condição ou situação anterior. É usado para expressar a ideia de 'agora que' ou 'já que' algo é verdadeiro, então uma determinada ação ou resultado é esperado.",
    exemplo: {
      frase: "留学するからには、しっかり勉強しなければなりません。",
      furigana:
        "りゅうがくするからには、しっかりべんきょうしなければなりません。",
      romaji:
        "Ryuugaku suru kara niwa, shikkari benkyou shinakereba narimasen.",
      traducao:
        "Agora que vou estudar no exterior, preciso estudar com afinco.",
    },
  },
  {
    topico: "からして",
    romaji: "kara shite",
    traducao: "desde; mesmo",
    explicacao:
      "A expressão からして (kara shite) é usada para enfatizar um exemplo específico ou uma característica distintiva. É usado para indicar que o exemplo mencionado é representativo de uma situação geral ou que uma característica específica se aplica amplamente.",
    exemplo: {
      frase: "彼は見た目からして怖そうだ。",
      furigana: "かれはみためからしてこわそうだ。",
      romaji: "Kare wa mitame kara shite kowasou da.",
      traducao: "Ele parece assustador só de olhar para ele.",
    },
  },
  {
    topico: "からすると / からすれば",
    romaji: "kara suru to / kara sureba",
    traducao: "do ponto de vista de; pelo que parece",
    explicacao:
      "As expressões からすると (kara suru to) e からすれば (kara sureba) são usadas para expressar um julgamento ou avaliação com base em um ponto de vista específico. Elas são usadas para transmitir a ideia de 'do ponto de vista de' ou 'pelo que parece' algo.",
    exemplo: {
      frase: "経験からすると、彼は成功するでしょう。",
      furigana: "けいけんからすると、かれはせいこうするでしょう。",
      romaji: "Keiken kara suru to, kare wa seikou suru deshou.",
      traducao: "Do ponto de vista da experiência, ele terá sucesso.",
    },
  },
  {
    topico: "からと言って（からといって）",
    romaji: "kara to itte",
    traducao: "embora se diga; apesar de se dizer",
    explicacao:
      "A expressão からと言って (kara to itte) é usada para expressar uma atenuação ou um contraponto a uma afirmação anterior. É usado para indicar que, apesar de algo ter sido dito ou afirmado, a realidade pode ser diferente ou que existem exceções.",
    exemplo: {
      frase: "彼は大学に入ったからと言って、すべてが上手くいくわけではない。",
      furigana:
        "かれはだいがくにはいったからといって、すべてがうまくいくわけではない。",
      romaji:
        "Kare wa daigaku ni haitta kara to itte, subete ga umaku iku wake dewa nai.",
      traducao: "Embora tenha entrado na universidade, nem tudo vai dar certo.",
    },
  },
  {
    topico: "っこない",
    romaji: "kkonai",
    traducao: "nunca; impossível",
    explicacao:
      "A forma っこない (kkonai) é uma contração da forma negativa ことはない (koto wa nai) e é usada para expressar uma negação enfática ou uma negação completa de algo. É usado para transmitir a ideia de 'nunca' ou 'impossível'.",
    exemplo: {
      frase: "彼とはもう二度と会うっこない。",
      furigana: "かれとはもうにどとあうっこない。",
      romaji: "Kare to wa mou nido to aukkonai.",
      traducao: "Nunca mais vou encontrá-lo.",
    },
  },
  {
    topico: "ことだ",
    romaji: "koto da",
    traducao: "deveria; é apropriado",
    explicacao:
      "A expressão ことだ (koto da) é usada para dar conselhos ou fazer recomendações. É usado para transmitir a ideia de que algo é apropriado ou que alguém deve fazer algo.",
    exemplo: {
      frase: "試験前はしっかり勉強することだ。",
      furigana: "しけんまえはしっかりべんきょうすることだ。",
      romaji: "Shiken mae wa shikkari benkyou suru koto da.",
      traducao: "Antes do exame, você deve estudar com afinco.",
    },
  },
  {
    topico: "ことだから",
    romaji: "koto dakara",
    traducao: "porque; já que",
    explicacao:
      "A expressão ことだから (koto dakara) é usada para dar uma explicação ou justificativa para algo com base em uma característica ou situação anterior. É usado para transmitir a ideia de 'porque' ou 'já que' algo é verdadeiro.",
    exemplo: {
      frase: "彼は頭がいいことだから、すぐに理解します。",
      furigana: "かれはあたまがいいことだから、すぐにりかいします。",
      romaji: "Kare wa atama ga ii koto dakara, sugu ni rikai shimasu.",
      traducao: "Porque ele é inteligente, ele entende rapidamente.",
    },
  },
  {
    topico: "ことか",
    romaji: "koto ka",
    traducao: "como; que coisa",
    explicacao:
      "A expressão ことか (koto ka) é usada para expressar admiração, surpresa ou ênfase. É usado para transmitir a ideia de 'como' ou 'que coisa' em relação a algo.",
    exemplo: {
      frase: "彼女の成功を見て、ことか驚いた。",
      furigana: "かのじょのせいこうをみて、ことかおどろいた。",
      romaji: "Kanojo no seikou o mite, koto ka odoraita.",
      traducao: "Ao ver o sucesso dela, como fiquei surpreso.",
    },
  },
  {
    topico: "ことなく",
    romaji: "koto naku",
    traducao: "sem fazer; sem ocorrer",
    explicacao:
      "A expressão ことなく (koto naku) é usada para expressar que algo é feito sem realizar ou ocorrer outra ação. É usado para transmitir a ideia de 'sem fazer' ou 'sem ocorrer' algo.",
    exemplo: {
      frase: "彼は言葉を使うことなく、問題を解決した。",
      furigana: "かれはことばをつかうことなく、もんだいをかいけつした。",
      romaji: "Kare wa kotoba o tsukau koto naku, mondai o kaiketsu shita.",
      traducao: "Ele resolveu o problema sem usar palavras.",
    },
  },
  {
    topico: "ことに",
    romaji: "koto ni",
    traducao: "especialmente; particularmente",
    explicacao:
      "A expressão ことに (koto ni) é usada para enfatizar ou destacar algo específico. É usado para transmitir a ideia de 'especialmente' ou 'particularmente' em relação a algo.",
    exemplo: {
      frase: "この本は内容が面白いことに、文章も読みやすい。",
      furigana:
        "このほんはないようがおもしろいことに、ぶんしょうもよみやすい。",
      romaji: "Kono hon wa naiyou ga omoshiroi koto ni, bunshou mo yomiyasui.",
      traducao:
        "Este livro é interessante especialmente pelo seu conteúdo, e as frases também são fáceis de ler.",
    },
  },
  {
    topico: "ことにはならない",
    romaji: "koto ni wa naranai",
    traducao: "não chegar a; não se tornar",
    explicacao:
      "A expressão ことにはならない (koto ni wa naranai) é usada para indicar que algo não chega a um determinado estado ou resultado. É usado para transmitir a ideia de 'não chegar a' ou 'não se tornar' algo.",
    exemplo: {
      frase: "彼のミスは大問題にはならなかった。",
      furigana: "かれのみすはだいもんだいにはならなかった。",
      romaji: "Kare no misu wa dai mondai ni wa naranakatta.",
      traducao: "O erro dele não se tornou um grande problema.",
    },
  },
  {
    topico: "くせして",
    romaji: "kuse shite",
    traducao: "apesar de; embora",
    explicacao:
      "A expressão くせして (kuse shite) é usada para destacar uma contradição ou hipocrisia em uma ação ou comportamento. É usado para transmitir a ideia de 'apesar de' ou 'embora' algo seja verdadeiro, a pessoa ainda realiza outra ação.",
    exemplo: {
      frase: "彼は遅刻するくせして、人に時間に厳しい。",
      furigana: "かれはちこくするくせして、ひとにじかんにきびしい。",
      romaji: "Kare wa chikoku suru kuse shite, hito ni jikan ni kibishii.",
      traducao:
        "Embora ele se atrase, ele é rigoroso com os outros em relação ao tempo.",
    },
  },
  {
    topico: "まだしも",
    romaji: "mada shimo",
    traducao: "ainda mais; menos ainda",
    explicacao:
      "A expressão まだしも (mada shimo) é usada para indicar uma situação em que a primeira opção é preferível ou mais aceitável em comparação com a segunda opção. É usado para transmitir a ideia de 'ainda mais' ou 'menos ainda'.",
    exemplo: {
      frase: "雨だったらまだしも、台風では外出できません。",
      furigana: "あめだったらまだしも、たいふうではがいしゅつできません。",
      romaji: "Ame dattara mada shimo, taifuu de wa gaishutsu dekimasen.",
      traducao:
        "Se fosse apenas chuva, ainda seria possível sair, mas com um tufão, não é possível sair.",
    },
  },
  {
    topico: "まい",
    romaji: "mai",
    traducao: "nunca; não fazer",
    explicacao:
      "A forma まい (mai) é uma forma negativa enfática usada para expressar a ideia de 'nunca' ou 'não fazer' algo. É usado para indicar uma ação que não será realizada em nenhuma circunstância.",
    exemplo: {
      frase: "彼女にはもう二度と会うまい。",
      furigana: "かのじょにはもうにどとあうまい。",
      romaji: "Kanojo ni wa mou nido to au mai.",
      traducao: "Nunca mais vou encontrar com ela.",
    },
  },
  {
    topico: "ままに",
    romaji: "mama ni",
    traducao: "como está; sem mudar",
    explicacao:
      "A expressão ままに (mama ni) é usada para indicar que algo permanece na mesma condição ou estado sem sofrer mudanças. É usado para transmitir a ideia de 'como está' ou 'sem mudar'.",
    exemplo: {
      frase: "そのままにしておいてください。",
      furigana: "そのままにしておいてください。",
      romaji: "Sono mama ni shite oite kudasai.",
      traducao: "Por favor, deixe como está.",
    },
  },
  {
    topico: "全く～ない（まったく～ない）",
    romaji: "mattaku~nai",
    traducao: "nada; de forma alguma",
    explicacao:
      "A expressão 全く～ない (mattaku~nai) é usada para enfatizar que algo não existe ou não ocorre de forma alguma. É usado para transmitir a ideia de 'nada' ou 'de forma alguma'.",
    exemplo: {
      frase: "彼の話は全く信じられない。",
      furigana: "かれのはなしはまったくしんじられない。",
      romaji: "Kare no hanashi wa mattaku shinjirarenai.",
      traducao: "Não consigo acreditar de forma alguma no que ele diz.",
    },
  },
  {
    topico: "もかまわず",
    romaji: "mo kamawazu",
    traducao: "sem se importar com; indiscriminadamente",
    explicacao:
      "A expressão もかまわず (mo kamawazu) é usada para indicar que algo é feito sem se importar com as consequências ou de forma indiscriminada. É usado para transmitir a ideia de 'sem se importar com' ou 'indiscriminadamente'.",
    exemplo: {
      frase: "彼女は時間もかまわずお金を使ってしまう。",
      furigana: "かのじょはじかんもかまわずおかねをつかってしまう。",
      romaji: "Kanojo wa jikan mo kamawazu okane o tsukatte shimau.",
      traducao: "Ela gasta dinheiro sem se importar com o tempo.",
    },
  },
  {
    topico: "も当然だ（もとうぜんだ）",
    romaji: "mo touzen da",
    traducao: "é natural; é óbvio",
    explicacao:
      "A expressão も当然だ (mo touzen da) é usada para expressar que algo é natural, esperado ou óbvio dadas as circunstâncias. É usado para transmitir a ideia de 'é natural' ou 'é óbvio'.",
    exemplo: {
      frase: "彼は頭がいいから、成績がいいのはも当然だ。",
      furigana: "かれはあたまがいいから、せいせきがいいのはもとうぜんだ。",
      romaji: "Kare wa atama ga ii kara, seiseki ga ii no wa mo touzen da.",
      traducao:
        "Dado que ele é inteligente, é natural que ele tenha boas notas.",
    },
  },
  {
    topico: "もの / もん",
    romaji: "mono / mon",
    traducao: "coisa; razão; fato",
    explicacao:
      "A partícula もの (mono) ou もん (mon) é usada para expressar a ideia de 'coisa', 'razão' ou 'fato'. É usada para fornecer uma explicação ou justificativa para algo mencionado anteriormente.",
    exemplo: {
      frase: "雨が降っているから、傘を持って行くものだ。",
      furigana: "あめがふっているから、かさをもっていくものだ。",
      romaji: "Ame ga futte iru kara, kasa o motte iku mono da.",
      traducao:
        "Dado que está chovendo, é a coisa certa levar um guarda-chuva.",
    },
  },
  {
    topico: "ものだ",
    romaji: "mono da",
    traducao: "deve-se; é costume; costumava-se",
    explicacao:
      "A expressão ものだ (mono da) é usada para expressar dever, costume ou algo que era comum no passado. É usado para transmitir a ideia de 'deve-se', 'é costume' ou 'costumava-se'.",
    exemplo: {
      frase: "若いうちに多くの経験をするものだ。",
      furigana: "わかいうちにおおくのけいけんをするものだ。",
      romaji: "Wakai uchi ni ooku no keiken o suru mono da.",
      traducao: "Deve-se ter muitas experiências quando se é jovem.",
    },
  },
  {
    topico: "ものだから",
    romaji: "mono dakara",
    traducao: "porque; já que",
    explicacao:
      "A expressão ものだから (mono dakara) é usada para dar uma explicação ou justificativa com base em um fato ou situação anterior. É usado para transmitir a ideia de 'porque' ou 'já que' algo é verdadeiro.",
    exemplo: {
      frase: "疲れているものだから、早く寝たい。",
      furigana: "つかれているものだから、はやくねたい。",
      romaji: "Tsukarete iru mono dakara, hayaku netai.",
      traducao: "Porque estou cansado, quero dormir cedo.",
    },
  },
  {
    topico: "ものではない",
    romaji: "mono dewa nai",
    traducao: "não é apropriado; não é certo",
    explicacao:
      "A expressão ものではない (mono dewa nai) é usada para indicar que algo não é apropriado, correto ou aceitável. É usado para transmitir a ideia de 'não é apropriado' ou 'não é certo'.",
    exemplo: {
      frase: "人前で大声を出すのはものではありません。",
      furigana: "ひとまえでおおごえをだすのはものではありません。",
      romaji: "Hitomae de oogoe o dasu no wa mono dewa arimasen.",
      traducao: "Não é apropriado gritar em público.",
    },
  },
  {
    topico: "ものがある",
    romaji: "mono ga aru",
    traducao: "ter um sentimento; ser impressionante",
    explicacao:
      "A expressão ものがある (mono ga aru) é usada para expressar um sentimento ou uma impressão forte sobre algo. É usado para transmitir a ideia de 'ter um sentimento' ou 'ser impressionante'.",
    exemplo: {
      frase: "彼の話には説得力があるものがある。",
      furigana: "かれのはなしにはせっとくりょくがあるものがある。",
      romaji: "Kare no hanashi niwa settokuryoku ga aru mono ga aru.",
      traducao: "Há uma certa persuasão no que ele diz.",
    },
  },
  {
    topico: "ものか / もんか",
    romaji: "mono ka / mon ka",
    traducao: "não é possível; de jeito nenhum",
    explicacao:
      "A expressão ものか (mono ka) ou もんか (mon ka) é usada para expressar uma negação enfática ou rejeição veemente. É usado para transmitir a ideia de 'não é possível' ou 'de jeito nenhum'.",
    exemplo: {
      frase: "そんなことを頼むものか！",
      furigana: "そんなことをたのむものか！",
      romaji: "Sonna koto o tanomu mono ka!",
      traducao: "De jeito nenhum vou pedir uma coisa dessas!",
    },
  },
  {
    topico: "ものなら",
    romaji: "mono nara",
    traducao: "se for possível; se puder",
    explicacao:
      "A expressão ものなら (mono nara) é usada para expressar uma condição hipotética ou uma situação em que algo é possível. É usado para transmitir a ideia de 'se for possível' ou 'se puder'.",
    exemplo: {
      frase: "もし時間があるものなら、助けに行きたい。",
      furigana: "もしじかんがあるものなら、たすけにいきたい。",
      romaji: "Moshi jikan ga aru mono nara, tasuke ni ikitai.",
      traducao: "Se eu tiver tempo, gostaria de ir ajudar.",
    },
  },
  {
    topico: "ものの",
    romaji: "mono no",
    traducao: "embora; apesar de",
    explicacao:
      "A expressão ものの (mono no) é usada para expressar uma concessão ou uma situação em que algo é verdadeiro, mas é seguido por uma ressalva ou condição contrária. É usado para transmitir a ideia de 'embora' ou 'apesar de'.",
    exemplo: {
      frase: "天気が悪いものの、ピクニックに行きます。",
      furigana: "てんきがわるいものの、ぴくにっくにいきます。",
      romaji: "Tenki ga warui mono no, pikunikku ni ikimasu.",
      traducao: "Embora o tempo esteja ruim, vamos fazer um piquenique.",
    },
  },
  {
    topico: "もっとも",
    romaji: "motto mo",
    traducao: "mais; a mais",
    explicacao:
      "A expressão もっとも (motto mo) é usada para expressar a ideia de 'mais' ou 'a mais' em relação a algo mencionado anteriormente. É usado para adicionar informações ou fazer uma ressalva adicional.",
    exemplo: {
      frase: "彼は英語ができる。もっとも、話せる程度だが。",
      furigana: "かれはえいごができる。もっとも、はなせるていどだが。",
      romaji: "Kare wa eigo ga dekiru. Motto mo, hanaseru teido da ga.",
      traducao:
        "Ele pode falar inglês. A mais, apenas o suficiente para se comunicar.",
    },
  },
  {
    topico: "もう少しで（もうすこしで）",
    romaji: "mou sukoshi de",
    traducao: "quase; por pouco",
    explicacao:
      "A expressão もう少しで (mou sukoshi de) é usada para expressar que algo está quase acontecendo ou prestes a ocorrer. É usado para transmitir a ideia de 'quase' ou 'por pouco'.",
    exemplo: {
      frase: "もう少しでバスに乗り遅れるところだった。",
      furigana: "もうすこしでばすにのりおくれるところだった。",
      romaji: "Mou sukoshi de basu ni noriokureru tokoro datta.",
      traducao: "Por pouco eu perdia o ônibus.",
    },
  },
  {
    topico: "ないではいられない",
    romaji: "nai de wa irarenai",
    traducao: "não pode deixar de; não consegue evitar",
    explicacao:
      "A expressão ないではいられない (nai de wa irarenai) é usada para expressar que alguém não pode deixar de fazer algo ou não consegue evitar uma determinada ação ou sentimento.",
    exemplo: {
      frase: "美味しい料理を見ると、食べないではいられない。",
      furigana: "おいしいりょうりをみると、たべないではいられない。",
      romaji: "Oishii ryouri o miru to, tabenai de wa irarenai.",
      traducao:
        "Quando vejo uma comida deliciosa, não consigo evitar de comer.",
    },
  },
  {
    topico: "ないことには～ない",
    romaji: "nai koto ni wa ~ nai",
    traducao: "a menos que; a menos que haja",
    explicacao:
      "A expressão ないことには～ない (nai koto ni wa ~ nai) é usada para expressar uma condição necessária ou uma restrição. É usado para transmitir a ideia de 'a menos que' ou 'a menos que haja'.",
    exemplo: {
      frase: "締め切りまでに仕事を終えないことには、帰れません。",
      furigana: "しめきりまでにしごとをおえないことには、かえれません。",
      romaji: "Shimekiri made ni shigoto o oenai koto ni wa, kaeremasen.",
      traducao:
        "A menos que eu termine o trabalho até o prazo, não posso ir embora.",
    },
  },
  {
    topico: "中を / 中では（なかを / なかでは）",
    romaji: "naka o / naka de wa",
    traducao: "dentro; no meio",
    explicacao:
      "A expressão 中を (naka o) ou 中では (naka de wa) é usada para indicar algo que ocorre dentro de um local ou contexto específico. É usado para transmitir a ideia de 'dentro' ou 'no meio'.",
    exemplo: {
      frase: "中を見ると、たくさんの人がいた。",
      furigana: "なかをみると、たくさんのひとがいた。",
      romaji: "Naka o miru to, takusan no hito ga ita.",
      traducao: "Quando olhei para dentro, havia muitas pessoas.",
    },
  },
  {
    topico: "なくはない / なくもない",
    romaji: "naku wa nai / naku mo nai",
    traducao: "não é que não haja; não é que não exista",
    explicacao:
      "A expressão なくはない (naku wa nai) ou なくもない (naku mo nai) é usada para expressar que algo não é completamente inexistente ou inverdadeiro. É usado para transmitir a ideia de 'não é que não haja' ou 'não é que não exista'.",
    exemplo: {
      frase: "彼は完璧ではないが、悪くもない。",
      furigana: "かれはかんぺきではないが、わるくもない。",
      romaji: "Kare wa kanpeki de wa nai ga, waruku mo nai.",
      traducao: "Ele não é perfeito, mas também não é ruim.",
    },
  },
  {
    topico: "なくて済む（なくてすむ）",
    romaji: "nakute sumu",
    traducao: "poder evitar; não precisar",
    explicacao:
      "A expressão なくて済む (nakute sumu) é usada para expressar que algo pode ser evitado ou que não é necessário fazer algo. É usado para transmitir a ideia de 'poder evitar' ou 'não precisar'.",
    exemplo: {
      frase: "急ぐ必要はないので、焦らなくて済む。",
      furigana: "いそぐひつようはないので、あせらなくてすむ。",
      romaji: "Isogu hitsuyou wa nai node, aseranakute sumu.",
      traducao:
        "Não há necessidade de se apressar, então posso evitar o estresse.",
    },
  },
  {
    topico: "何も～ない（なにも～ない）",
    romaji: "nani mo ~ nai",
    traducao: "nada; não há nada",
    explicacao:
      "A expressão 何も～ない (nani mo ~ nai) é usada para expressar que não há nada de algo ou que algo não existe. É usado para transmitir a ideia de 'nada' ou 'não há nada'.",
    exemplo: {
      frase: "部屋には何もない。",
      furigana: "へやにはなにもない。",
      romaji: "Heya niwa nani mo nai.",
      traducao: "Não há nada no quarto.",
    },
  },
  {
    topico: "なお",
    romaji: "nao",
    traducao: "além disso; adicionalmente",
    explicacao:
      "A expressão なお (nao) é usada para adicionar informações ou pontos adicionais a uma declaração anterior. É usado para transmitir a ideia de 'além disso' ou 'adicionalmente'.",
    exemplo: {
      frase:
        "このレストランは美味しい料理が提供されます。なお、雰囲気も素晴らしいです。",
      furigana:
        "このれすとらんはおいしいりょうりがていきょうされます。なお、ふんいきもすばらしいです。",
      romaji:
        "Kono resutoran wa oishii ryouri ga teikyou saremasu. Nao, fun'iki mo subarashii desu.",
      traducao:
        "Neste restaurante, são oferecidas comidas deliciosas. Além disso, a atmosfera também é maravilhosa.",
    },
  },
  {
    topico: "ねばならない",
    romaji: "neba naranai",
    traducao: "deve; tem que",
    explicacao:
      "A expressão ねばならない (neba naranai) é usada para expressar a obrigação ou necessidade de fazer algo. É usado para transmitir a ideia de 'deve' ou 'tem que'.",
    exemplo: {
      frase: "早く起きて勉強しなければならない。",
      furigana: "はやくおきてべんきょうしなければならない。",
      romaji: "Hayaku okite benkyou shinakereba naranai.",
      traducao: "Devo acordar cedo e estudar.",
    },
  },
  {
    topico: "にあたって",
    romaji: "ni atatte",
    traducao: "ao; no momento de",
    explicacao:
      "A expressão にあたって (ni atatte) é usada para indicar o momento de uma ação ou evento, enfatizando a preparação ou considerações feitas antes. É usado para transmitir a ideia de 'ao' ou 'no momento de'.",
    exemplo: {
      frase: "出発にあたって必要なものを準備しました。",
      furigana: "しゅっぱつにあたってひつようなものをじゅんびしました。",
      romaji: "Shuppatsu ni atatte hitsuyou na mono o junbi shimashita.",
      traducao: "Preparei as coisas necessárias antes da partida.",
    },
  },
  {
    topico: "にほかならない",
    romaji: "ni hoka naranai",
    traducao: "não é nada além de; não é senão",
    explicacao:
      "A expressão にほかならない (ni hoka naranai) é usada para enfatizar que algo não é nada além de ou não é senão o que foi mencionado. É usado para transmitir a ideia de 'não é nada além de' ou 'não é senão'.",
    exemplo: {
      frase: "彼の成功は努力の結果にほかならない。",
      furigana: "かれのせいこうはどりょくのけっかにほかならない。",
      romaji: "Kare no seikou wa doryoku no kekka ni hoka naranai.",
      traducao: "O sucesso dele não é nada além do resultado do esforço.",
    },
  },
  {
    topico: "に限らず（にかぎらず）",
    romaji: "ni kagirazu",
    traducao: "não apenas; não se limitando a",
    explicacao:
      "A expressão に限らず (ni kagirazu) é usada para indicar que algo não se limita apenas a uma coisa mencionada, mas se aplica a um escopo mais amplo. É usado para transmitir a ideia de 'não apenas' ou 'não se limitando a'.",
    exemplo: {
      frase: "この本は子供に限らず、大人にもおすすめです。",
      furigana: "このほんはこどもにかぎらず、おとなにもおすすめです。",
      romaji: "Kono hon wa kodomo ni kagirazu, otona ni mo osusume desu.",
      traducao:
        "Este livro é recomendado não apenas para crianças, mas também para adultos.",
    },
  },
  {
    topico: "に限る（にかぎる）",
    romaji: "ni kagiru",
    traducao: "é melhor; é preferível",
    explicacao:
      "A expressão に限る (ni kagiru) é usada para expressar uma preferência ou opinião de que algo é melhor ou preferível. É usado para transmitir a ideia de 'é melhor' ou 'é preferível'.",
    exemplo: {
      frase: "体調を整えるためには、十分な睡眠に限ります。",
      furigana:
        "たいちょうをととのえるためには、じゅうぶんなすいみんにかぎります。",
      romaji: "Taichou o totonoeru tame ni wa, juubun na suimin ni kagirimasu.",
      traducao: "Para cuidar da saúde, nada melhor do que um sono adequado.",
    },
  },
  {
    topico: "に限って（にかぎって）",
    romaji: "ni kagitte",
    traducao: "especialmente; somente",
    explicacao:
      "A expressão に限って (ni kagitte) é usada para expressar uma exceção ou uma situação especial em que algo ocorre. É usado para transmitir a ideia de 'especialmente' ou 'somente'.",
    exemplo: {
      frase: "急ぐ必要がない日に限って、遅刻してしまう。",
      furigana: "いそぐひつようがないひにかぎって、ちこくしてしまう。",
      romaji: "Isogu hitsuyou ga nai hi ni kagitte, chikoku shite shimau.",
      traducao:
        "Justamente nos dias em que não há necessidade de se apressar, acabo me atrasando.",
    },
  },
  {
    topico: "に関わらず（にかかわらず）",
    romaji: "ni kakawarazu",
    traducao: "independentemente de; sem se importar com",
    explicacao:
      "A expressão に関わらず (ni kakawarazu) é usada para indicar que algo acontece ou se aplica independentemente de uma determinada condição ou fator. É usado para transmitir a ideia de 'independentemente de' ou 'sem se importar com'.",
    exemplo: {
      frase: "年齢に関わらず、誰でも参加できます。",
      furigana: "ねんれいにかかわらず、だれでもさんかできます。",
      romaji: "Nenrei ni kakawarazu, dare demo sanka dekimasu.",
      traducao: "Qualquer pessoa pode participar, independentemente da idade.",
    },
  },
  {
    topico: "に関わる（にかかわる）",
    romaji: "ni kakawaru",
    traducao: "estar relacionado a; estar envolvido com",
    explicacao:
      "A expressão に関わる (ni kakawaru) é usada para indicar que algo está relacionado a ou envolvido com uma determinada coisa ou situação. É usado para transmitir a ideia de 'estar relacionado a' ou 'estar envolvido com'.",
    exemplo: {
      frase: "この問題は私たち全員に関わる重要な課題です。",
      furigana:
        "このもんだいはわたしたちぜんいんにかかわるじゅうようなかだいです。",
      romaji:
        "Kono mondai wa watashitachi zen'in ni kakawaru juuyou na kadai desu.",
      traducao: "Este problema é uma questão importante que envolve todos nós.",
    },
  },
  {
    topico: "に決まっている（にきまっている）",
    romaji: "ni kimatte iru",
    traducao: "certamente; com certeza",
    explicacao:
      "A expressão に決まっている (ni kimatte iru) é usada para expressar certeza ou convicção de que algo é verdadeiro ou vai acontecer. É usado para transmitir a ideia de 'certamente' ou 'com certeza'.",
    exemplo: {
      frase: "彼女が受かるのは、努力したからに決まっている。",
      furigana: "かのじょがうかるのは、どりょくしたからにきまっている。",
      romaji: "Kanojo ga ukaru no wa, doryoku shita kara ni kimatte iru.",
      traducao: "Ela certamente vai passar, porque ela se esforçou.",
    },
  },
  {
    topico: "に越したことはない（にこしたことはない）",
    romaji: "ni koshita koto wa nai",
    traducao: "não há nada melhor do que; é melhor",
    explicacao:
      "A expressão に越したことはない (ni koshita koto wa nai) é usada para expressar que algo é a melhor opção ou que não há nada melhor do que isso. É usado para transmitir a ideia de 'não há nada melhor do que' ou 'é melhor'.",
    exemplo: {
      frase: "健康に気を使うことは、に越したことはありません。",
      furigana: "けんこうにきをつかうことは、にこしたことはありません。",
      romaji: "Kenkou ni ki o tsukau koto wa, ni koshita koto wa arimasen.",
      traducao: "Cuidar da saúde não há nada melhor do que isso.",
    },
  },
  {
    topico: "に応えて（にこたえて）",
    romaji: "ni kotaete",
    traducao: "em resposta a; em atendimento a",
    explicacao:
      "A expressão に応えて (ni kotaete) é usada para indicar que algo é feito ou ocorre em resposta a uma solicitação, demanda ou expectativa. É usado para transmitir a ideia de 'em resposta a' ou 'em atendimento a'.",
    exemplo: {
      frase: "要望に応えて、新しい商品を開発しました。",
      furigana: "ようぼうにこたえて、あたらしいしょうひんをかいはつしました。",
      romaji: "Youbou ni kotaete, atarashii shouhin o kaihatsu shimashita.",
      traducao: "Desenvolvemos novos produtos em resposta às demandas.",
    },
  },
  {
    topico: "に加えて（にくわえて）",
    romaji: "ni kuwaete",
    traducao: "além de; além disso",
    explicacao:
      "A expressão に加えて (ni kuwaete) é usada para adicionar informações ou elementos a algo que já foi mencionado. É usado para transmitir a ideia de 'além de' ou 'além disso'.",
    exemplo: {
      frase: "彼は忙しいに加えて、病気になってしまった。",
      furigana: "かれはいそがしいにくわえて、びょうきになってしまった。",
      romaji: "Kare wa isogashii ni kuwaete, byouki ni natte shimatta.",
      traducao: "Além de estar ocupado, ele ficou doente.",
    },
  },
  {
    topico: "に基づいて（にもとづいて）",
    romaji: "ni motozuite",
    traducao: "com base em; fundamentado em",
    explicacao:
      "A expressão に基づいて (ni motozuite) é usada para indicar que algo é feito ou decidido com base em informações, fatos ou princípios. É usado para transmitir a ideia de 'com base em' ou 'fundamentado em'.",
    exemplo: {
      frase: "計画はデータに基づいて立てられました。",
      furigana: "けいかくはデータにもとづいてたてられました。",
      romaji: "Keikaku wa deeta ni motozuite tateraremashita.",
      traducao: "O plano foi elaborado com base nos dados.",
    },
  },
  {
    topico: "に向かって（にむかって）",
    romaji: "ni mukatte",
    traducao: "em direção a; para",
    explicacao:
      "A expressão に向かって (ni mukatte) é usada para indicar que algo está se movendo, progredindo ou sendo direcionado em uma determinada direção ou objetivo. É usado para transmitir a ideia de 'em direção a' ou 'para'.",
    exemplo: {
      frase: "彼は目標に向かって一歩ずつ進んでいる。",
      furigana: "かれはもくひょうにむかっていっぽずつすすんでいる。",
      romaji: "Kare wa mokuhyou ni mukatte ippo zutsu susunde iru.",
      traducao: "Ele está avançando gradualmente em direção ao seu objetivo.",
    },
  },
  {
    topico: "に応じて（におうじて）",
    romaji: "ni oujite",
    traducao: "de acordo com; conforme",
    explicacao:
      "A expressão に応じて (ni oujite) é usada para indicar que algo é feito ou ocorre de acordo com uma condição, circunstância ou demanda. É usado para transmitir a ideia de 'de acordo com' ou 'conforme'.",
    exemplo: {
      frase: "質問の内容に応じて、適切な回答をします。",
      furigana: "しつもんのないようにおうじて、てきせつなかいとうをします。",
      romaji: "Shitsumon no naiyou ni oujite, tekisetsu na kaitou o shimasu.",
      traducao:
        "Responderemos adequadamente de acordo com o conteúdo da pergunta.",
    },
  },
  {
    topico: "に際して（にさいして）",
    romaji: "ni saishite",
    traducao: "ao; na ocasião de",
    explicacao:
      "A expressão に際して (ni saishite) é usada para indicar que algo ocorre ou é feito em uma determinada ocasião, evento ou situação. É usado para transmitir a ideia de 'ao' ou 'na ocasião de'.",
    exemplo: {
      frase: "結婚式に際して、感謝の気持ちを伝えました。",
      furigana: "けっこんしきにさいして、かんしゃのきもちをつたえました。",
      romaji: "Kekkonshiki ni saishite, kansha no kimochi o tsutaemashita.",
      traducao: "Ao casamento, expressamos nossos sentimentos de gratidão.",
    },
  },
  {
    topico: "に先立ち（にさきだち）",
    romaji: "ni sakidachi",
    traducao: "antes de; precedendo",
    explicacao:
      "A expressão に先立ち (ni sakidachi) é usada para indicar que algo ocorre ou é feito antes de outra coisa ou evento. É usado para transmitir a ideia de 'antes de' ou 'precedendo'.",
    exemplo: {
      frase: "開会式に先立ち、挨拶を行いました。",
      furigana: "かいかいしきにさきだち、あいさつをおこないました。",
      romaji: "Kaikaishiki ni sakidachi, aisatsu o okonaimashita.",
      traducao:
        "Antes da cerimônia de abertura, fizemos um discurso de saudação.",
    },
  },
  {
    topico: "にせよ/にしろ",
    romaji: "ni seyo/ni shiro",
    traducao: "seja; mesmo que",
    explicacao:
      "A expressão にせよ (ni seyo) ou にしろ (ni shiro) é usada para indicar que algo é verdadeiro ou aplicável, independentemente de uma condição, situação ou escolha. É usado para transmitir a ideia de 'seja' ou 'mesmo que'.",
    exemplo: {
      frase: "成功するにせよ、失敗するにしろ、挑戦する価値がある。",
      furigana:
        "せいこうするにせよ、しっぱいするにしろ、ちょうせんするかちがある。",
      romaji:
        "Seikou suru ni seyo, shippai suru ni shiro, chousen suru kachi ga aru.",
      traducao: "Seja bem-sucedido ou falhe, vale a pena tentar.",
    },
  },
  {
    topico: "にしろ～にしろ",
    romaji: "ni shiro ~ ni shiro",
    traducao: "seja ~ ou ~; quer ~ ou ~",
    explicacao:
      "A expressão にしろ～にしろ (ni shiro ~ ni shiro) é usada para indicar que algo é verdadeiro ou aplicável, independentemente de diferentes opções ou condições. É usado para transmitir a ideia de 'seja ~ ou ~' ou 'quer ~ ou ~'.",
    exemplo: {
      frase: "彼女は仕事にしろ、勉強にしろ、いつも真剣に取り組んでいる。",
      furigana:
        "かのじょはしごとにしろ、べんきょうにしろ、いつもしんけんにとりくんでいる。",
      romaji:
        "Kanojo wa shigoto ni shiro, benkyou ni shiro, itsumo shinken ni torikunde iru.",
      traducao:
        "Ela se dedica sempre seriamente, seja ao trabalho ou aos estudos.",
    },
  },
  {
    topico: "にしたら / にすれば",
    romaji: "ni shitara / ni sureba",
    traducao: "do ponto de vista de; para",
    explicacao:
      "A expressão にしたら (ni shitara) ou にすれば (ni sureba) é usada para indicar um ponto de vista ou perspectiva, enfatizando a opinião ou julgamento de alguém. É usado para transmitir a ideia de 'do ponto de vista de' ou 'para'.",
    exemplo: {
      frase: "子供にしたら、大人の世界は難しいと思う。",
      furigana: "こどもにしたら、おとなのせかいはむずかしいとおもう。",
      romaji: "Kodomo ni shitara, otona no sekai wa muzukashii to omou.",
      traducao:
        "Do ponto de vista das crianças, o mundo dos adultos é difícil.",
    },
  },
  {
    topico: "にしても～にしても",
    romaji: "ni shitemo ~ ni shitemo",
    traducao: "seja ~ ou ~; quer ~ ou ~",
    explicacao:
      "A expressão にしても～にしても (ni shitemo ~ ni shitemo) é usada para indicar que algo é verdadeiro ou aplicável, independentemente de diferentes opções ou condições. É usado para transmitir a ideia de 'seja ~ ou ~' ou 'quer ~ ou ~'.",
    exemplo: {
      frase: "天気にしても、体調にしても、運動は大切だ。",
      furigana: "てんきにしても、たいちょうにしても、うんどうはたいせつだ。",
      romaji: "Tenki ni shitemo, taichou ni shitemo, undou wa taisetsu da.",
      traducao: "Seja o clima ou a condição física, o exercício é importante.",
    },
  },
  {
    topico: "に沿って（にそって）",
    romaji: "ni sotte",
    traducao: "ao longo de; de acordo com",
    explicacao:
      "A expressão に沿って (ni sotte) é usada para indicar que algo ocorre ou é feito ao longo de um determinado caminho, direção ou conforme uma sequência específica. É usado para transmitir a ideia de 'ao longo de' ou 'de acordo com'.",
    exemplo: {
      frase: "マニュアルに沿って手順を進めてください。",
      furigana: "マニュアルにそっててじゅんをすすめてください。",
      romaji: "Manyuaru ni sotte tejun o susumete kudasai.",
      traducao: "Siga as etapas de acordo com o manual, por favor.",
    },
  },
  {
    topico: "に相違ない（にそういない）",
    romaji: "ni souinai",
    traducao: "sem dúvida; certamente",
    explicacao:
      "A expressão に相違ない (ni souinai) é usada para expressar certeza ou convicção de que algo é verdadeiro. É usado para transmitir a ideia de 'sem dúvida' ou 'certamente'.",
    exemplo: {
      frase: "彼の言葉に相違ない。",
      furigana: "かれのことばにそういない。",
      romaji: "Kare no kotoba ni souinai.",
      traducao: "Sem dúvida, o que ele disse é verdadeiro.",
    },
  },
  {
    topico: "に過ぎない（にすぎない）",
    romaji: "ni suginai",
    traducao: "não passa de; não é mais do que",
    explicacao:
      "A expressão に過ぎない (ni suginai) é usada para indicar que algo é apenas o que foi mencionado e não vai além disso. É usado para transmitir a ideia de 'não passa de' ou 'não é mais do que'.",
    exemplo: {
      frase: "彼の意見はただの推測に過ぎない。",
      furigana: "かれのいけんはただのすいそくにすぎない。",
      romaji: "Kare no iken wa tada no suisoku ni suginai.",
      traducao: "A opinião dele não passa de mera especulação.",
    },
  },
  {
    topico: "に伴って（にともなって）",
    romaji: "ni tomonatte",
    traducao: "acompanhado de; conforme; à medida que",
    explicacao:
      "A expressão に伴って (ni tomonatte) é usada para indicar que algo ocorre ou é feito em conjunto com outra coisa, ou que algo acontece à medida que outra coisa acontece. É usado para transmitir a ideia de 'acompanhado de' ou 'conforme' ou 'à medida que'.",
    exemplo: {
      frase: "新しい法律に伴って新しい規則が導入されました。",
      furigana:
        "あたらしいほうりつにともなってあたらしいきそくがどうにゅうされました。",
      romaji:
        "Atarashii houritsu ni tomonatte atarashii kisoku ga dounyuu saremashita.",
      traducao: "Novas regras foram introduzidas em conjunto com a nova lei.",
    },
  },
  {
    topico: "につけ",
    romaji: "ni tsuke",
    traducao: "sempre que; toda vez que",
    explicacao:
      "A expressão につけ (ni tsuke) é usada para indicar que algo acontece ou é feito toda vez que uma determinada situação ocorre. É usado para transmitir a ideia de 'sempre que' ou 'toda vez que'.",
    exemplo: {
      frase: "彼と話すにつけ、新たな発見があります。",
      furigana: "かれとはなすにつけ、あらたなはっけんがあります。",
      romaji: "Kare to hanasu ni tsuke, arata na hakken ga arimasu.",
      traducao: "Sempre que converso com ele, tenho novas descobertas.",
    },
  },
  {
    topico: "につき",
    romaji: "ni tsuki",
    traducao: "por; devido a; para cada",
    explicacao:
      "A expressão につき (ni tsuki) é usada para indicar uma taxa, quantidade ou condição para cada item ou unidade mencionada. É usado para transmitir a ideia de 'por' ou 'devido a' ou 'para cada'.",
    exemplo: {
      frase: "お一人につき一つのプレゼントがあります。",
      furigana: "おひとりにつきひとつのぷれぜんとがあります。",
      romaji: "O-hitori ni tsuki hitotsu no purezento ga arimasu.",
      traducao: "Há um presente para cada pessoa.",
    },
  },
  {
    topico: "にわたって",
    romaji: "ni watatte",
    traducao: "ao longo de; durante",
    explicacao:
      "A expressão にわたって (ni watatte) é usada para indicar que algo ocorre ou se estende por um período contínuo de tempo ou uma área específica. É usado para transmitir a ideia de 'ao longo de' ou 'durante'.",
    exemplo: {
      frase: "10年にわたって研究を行いました。",
      furigana: "じゅうねんにわたってけんきゅうをおこないました。",
      romaji: "Juunen ni watatte kenkyuu o okonaimashita.",
      traducao: "Realizamos pesquisas ao longo de 10 anos.",
    },
  },
  {
    topico: "にも関わらず（にもかかわらず）",
    romaji: "ni mo kakawarazu",
    traducao: "apesar de; embora; mesmo assim",
    explicacao:
      "A expressão にも関わらず (ni mo kakawarazu) é usada para indicar uma contradição ou uma situação em que algo acontece apesar de uma circunstância diferente ou oposta. É usado para transmitir a ideia de 'apesar de' ou 'embora' ou 'mesmo assim'.",
    exemplo: {
      frase: "彼は忙しいにも関わらず、いつも時間を作って助けてくれる。",
      furigana:
        "かれはいそがしいにもかかわらず、いつもじかんをつくってたすけてくれる。",
      romaji:
        "Kare wa isogashii ni mo kakawarazu, itsumo jikan o tsukutte tasukete kureru.",
      traducao:
        "Apesar de estar ocupado, ele sempre arranja tempo para me ajudar.",
    },
  },
  {
    topico: "にて",
    romaji: "nite",
    traducao: "em; com; por meio de",
    explicacao:
      "A expressão にて (nite) é usada para indicar o local, o meio ou o método em que algo acontece ou é feito. É usado para transmitir a ideia de 'em' ou 'com' ou 'por meio de'.",
    exemplo: {
      frase: "会議はオンラインにて行われました。",
      furigana: "かいぎはオンラインにておこなわれました。",
      romaji: "Kaigi wa onrain nite okonawaremashita.",
      traducao: "A reunião foi realizada online.",
    },
  },
  {
    topico: "のももっともだ",
    romaji: "no mo mottomo da",
    traducao: "é natural; é compreensível",
    explicacao:
      "A expressão のももっともだ (no mo mottomo da) é usada para concordar ou expressar compreensão em relação a uma ação, opinião ou sentimento. É usado para transmitir a ideia de 'é natural' ou 'é compreensível'.",
    exemplo: {
      frase: "彼の意見に反対するのももっともだ。",
      furigana: "かれのいけんにはんたいするのももっともだ。",
      romaji: "Kare no iken ni hantai suru no mo mottomo da.",
      traducao: "É natural se opor à opinião dele.",
    },
  },
  {
    topico: "の下で（のもとで）",
    romaji: "no moto de",
    traducao: "sob; sob a supervisão de",
    explicacao:
      "A expressão の下で (no moto de) é usada para indicar que algo ocorre ou é feito sob a supervisão, autoridade ou orientação de alguém. É usado para transmitir a ideia de 'sob' ou 'sob a supervisão de'.",
    exemplo: {
      frase: "新しいプロジェクトの下で働いています。",
      furigana: "あたらしいぷろじぇくとのもとではたらいています。",
      romaji: "Atarashii purojekuto no moto de hataraiteimasu.",
      traducao: "Estou trabalhando sob um novo projeto.",
    },
  },
  {
    topico: "の上では（のうえでは）",
    romaji: "no ue de wa",
    traducao: "em teoria; do ponto de vista",
    explicacao:
      "A expressão の上では (no ue de wa) é usada para indicar uma condição ou situação ideal em teoria ou do ponto de vista teórico. É usado para transmitir a ideia de 'em teoria' ou 'do ponto de vista'.",
    exemplo: {
      frase: "学生の上では、理論的な解答が求められます。",
      furigana: "がくせいのうえでは、りろんてきなかいとうがもとめられます。",
      romaji: "Gakusei no ue de wa, riron-teki na kaitou ga motomeraremasu.",
      traducao: "Em teoria, espera-se uma resposta teórica dos alunos.",
    },
  },
  {
    topico: "のみ",
    romaji: "nomi",
    traducao: "somente; apenas",
    explicacao:
      "A expressão のみ (nomi) é usada para indicar que algo é restrito ou limitado a algo ou alguém em particular. É usado para transmitir a ideia de 'somente' ou 'apenas'.",
    exemplo: {
      frase: "大人のみ入場が許可されています。",
      furigana: "おとなのみにゅうじょうがきょかされています。",
      romaji: "Otona nomi nyuujou ga kyoka sarete imasu.",
      traducao: "Apenas adultos têm permissão para entrar.",
    },
  },
  {
    topico: "のみならず",
    romaji: "nomi narazu",
    traducao: "não apenas; além de",
    explicacao:
      "A expressão のみならず (nomi narazu) é usada para indicar que algo ocorre ou se aplica não apenas a uma coisa mencionada, mas também a outras coisas relacionadas. É usado para transmitir a ideia de 'não apenas' ou 'além de'.",
    exemplo: {
      frase: "彼女は英語のみならず、フランス語も話せます。",
      furigana: "かのじょはえいごのみならず、ふらんすごもはなせます。",
      romaji: "Kanojo wa eigo nomi narazu, furansu-go mo hanasemasu.",
      traducao: "Ela pode falar não apenas inglês, mas também francês.",
    },
  },
  {
    topico: "ぬ",
    romaji: "nu",
    traducao: "não fazer; não ser",
    explicacao:
      "A partícula ぬ (nu) é uma forma antiga do verbo negativo ない (nai). É usada para indicar a negação de uma ação ou a ausência de algo. É menos comum e formal do que ない (nai).",
    exemplo: {
      frase: "許すことはできぬ。",
      furigana: "ゆるすことはできぬ。",
      romaji: "Yurusu koto wa dekinu.",
      traducao: "Não posso perdoar.",
    },
  },
  {
    topico: "抜きにして / 抜きで（ぬきにして/ ぬきで）",
    romaji: "nuki ni shite / nuki de",
    traducao: "sem; excluindo",
    explicacao:
      "A expressão 抜きにして (nuki ni shite) ou 抜きで (nuki de) é usada para indicar que algo é feito ou considerado sem levar em conta uma determinada coisa ou fator. É usado para transmitir a ideia de 'sem' ou 'excluindo'.",
    exemplo: {
      frase: "経験抜きにして成功することはできません。",
      furigana: "けいけんぬきにしてせいこうすることはできません。",
      romaji: "Keiken nuki ni shite seikou suru koto wa dekimasen.",
      traducao: "Não é possível ter sucesso sem experiência.",
    },
  },
  {
    topico: "抜く（ぬく）",
    romaji: "nuku",
    traducao: "retirar; remover",
    explicacao:
      "O verbo 抜く (nuku) é usado para indicar a ação de retirar ou remover algo de um lugar ou posição. Também pode ser usado para indicar que algo se destaca ou se sobressai em relação a outros.",
    exemplo: {
      frase: "歯を抜く",
      furigana: "はをぬく",
      romaji: "Ha o nuku.",
      traducao: "Retirar um dente.",
    },
  },
  {
    topico: "を契機に（をけいきに）",
    romaji: "o keiki ni",
    traducao: "a oportunidade de; com base em",
    explicacao:
      "A expressão を契機に (o keiki ni) é usada para indicar que algo acontece ou é feito como resultado de uma determinada oportunidade, evento ou circunstância. É usado para transmitir a ideia de 'a oportunidade de' ou 'com base em'.",
    exemplo: {
      frase: "転職を契機に新しい挑戦を始めました。",
      furigana: "てんしょくをけいきにあたらしいちょうせんをはじめました。",
      romaji: "Tenshoku o keiki ni atarashii chousen o hajimemashita.",
      traducao: "Comecei novos desafios com base na mudança de emprego.",
    },
  },
  {
    topico: "をめぐって",
    romaji: "o megutte",
    traducao: "sobre; em torno de",
    explicacao:
      "A expressão をめぐって (o megutte) é usada para indicar que algo é o tema de uma discussão, debate ou controvérsia. É usado para transmitir a ideia de 'sobre' ou 'em torno de'.",
    exemplo: {
      frase: "その問題をめぐって意見が分かれています。",
      furigana: "そのもんだいをめぐっていけんがわかれています。",
      romaji: "Sono mondai o megutte iken ga wakarete imasu.",
      traducao: "As opiniões estão divididas sobre esse assunto.",
    },
  },
  {
    topico: "をもとに",
    romaji: "o moto ni",
    traducao: "com base em; usando como referência",
    explicacao:
      "A expressão をもとに (o moto ni) é usada para indicar que algo é feito ou criado com base em algo ou usando algo como referência. É usado para transmitir a ideia de 'com base em' ou 'usando como referência'.",
    exemplo: {
      frase: "彼の小説は実際の出来事をもとにしています。",
      furigana: "かれのしょうせつはじっさいのできごとをもとにしています。",
      romaji: "Kare no shousetsu wa jissai no dekigoto o moto ni shiteimasu.",
      traducao: "O romance dele é baseado em eventos reais.",
    },
  },
  {
    topico: "を除いて（をのぞいて）",
    romaji: "o nozoite",
    traducao: "exceto; excluindo",
    explicacao:
      "A expressão を除いて (o nozoite) é usada para indicar que algo é feito ou considerado, excluindo uma determinada coisa ou fator. É usado para transmitir a ideia de 'exceto' ou 'excluindo'.",
    exemplo: {
      frase: "子供を除いて、全員集合してください。",
      furigana: "こどもをのぞいて、ぜんいんしゅうごうしてください。",
      romaji: "Kodomo o nozoite, zen'in shuugou shite kudasai.",
      traducao: "Todos, exceto as crianças, por favor, reúnam-se.",
    },
  },
  {
    topico: "を問わず（をとわず）",
    romaji: "o towazu",
    traducao: "independentemente de; não importa",
    explicacao:
      "A expressão を問わず (o towazu) é usada para indicar que algo se aplica independentemente de uma determinada condição ou fator. É usado para transmitir a ideia de 'independentemente de' ou 'não importa'.",
    exemplo: {
      frase: "年齢を問わず、誰でも参加できます。",
      furigana: "ねんれいをとわず、だれでもさんかできます。",
      romaji: "Nenrei o towazu, dare demo sanka dekimasu.",
      traducao: "Qualquer pessoa pode participar, independentemente da idade.",
    },
  },
  {
    topico: "お～願う（お～ねがう）",
    romaji: "o negau",
    traducao: "esperar; pedir",
    explicacao:
      "A expressão お～願う (o negau) é usada para indicar um pedido ou desejo respeitoso. É usado para transmitir a ideia de 'esperar' ou 'pedir'.",
    exemplo: {
      frase: "お名前をお伺いできますか？",
      furigana: "おなまえをおうかがいできますか？",
      romaji: "Onamae o oukagai dekimasu ka?",
      traducao: "Posso saber o seu nome, por favor?",
    },
  },
  {
    topico: "おまけに",
    romaji: "omake ni",
    traducao: "além disso; ainda por cima",
    explicacao:
      "A expressão おまけに (omake ni) é usada para adicionar informações ou eventos adicionais que agravam ou enfatizam uma situação. É usado para transmitir a ideia de 'além disso' ou 'ainda por cima'.",
    exemplo: {
      frase: "彼は遅刻した上、宿題も忘れてきたおまけに、雨に濡れていました。",
      furigana:
        "かれはちこくしたうえ、しゅくだいもわすれてきたおまけに、あめにぬれていました。",
      romaji:
        "Kare wa chikoku shita ue, shukudai mo wasurete kita omake ni, ame ni nurete imashita.",
      traducao:
        "Além de chegar atrasado, ele ainda esqueceu a lição de casa e estava molhado de chuva.",
    },
  },
  {
    topico: "恐らく（おそらく）",
    romaji: "osoraku",
    traducao: "provavelmente; talvez",
    explicacao:
      "A expressão 恐らく (osoraku) é usada para indicar uma suposição ou estimativa de algo. É usado para transmitir a ideia de 'provavelmente' ou 'talvez'.",
    exemplo: {
      frase: "恐らく彼はまだ寝ているでしょう。",
      furigana: "おそらくかれはまだねているでしょう。",
      romaji: "Osoraku kare wa mada nete iru deshou.",
      traducao: "Provavelmente ele ainda está dormindo.",
    },
  },
  {
    topico: "恐れがある（おそれがある）",
    romaji: "osore ga aru",
    traducao: "há o medo de; há a possibilidade de",
    explicacao:
      "A expressão 恐れがある (osore ga aru) é usada para indicar que há o medo ou a possibilidade de algo acontecer. É usado para transmitir a ideia de 'há o medo de' ou 'há a possibilidade de'.",
    exemplo: {
      frase: "明日は雨が降る恐れがあります。",
      furigana: "あしたはあめがふるおそれがあります。",
      romaji: "Ashita wa ame ga furu osore ga arimasu.",
      traducao: "Há o medo de que chova amanhã.",
    },
  },
  {
    topico: "及び（および）",
    romaji: "oyobi",
    traducao: "e; bem como",
    explicacao:
      "A expressão 及び (oyobi) é usada para listar itens ou elementos, indicando que algo se aplica a todos eles. É usado para transmitir a ideia de 'e' ou 'bem como'.",
    exemplo: {
      frase: "本書は日本語の文法及び表現について説明しています。",
      furigana:
        "ほんしょはにほんごのぶんぽうおよびひょうげんについてせつめいしています。",
      romaji:
        "Honsho wa nihongo no bunpou oyobi hyougen ni tsuite setsumei shiteimasu.",
      traducao: "Este livro explica a gramática e expressões em japonês.",
    },
  },
  {
    topico: "ろくに～ない",
    romaji: "roku ni nai",
    traducao: "não ser feito devidamente; não ser feito adequadamente",
    explicacao:
      "A expressão ろくに～ない (roku ni nai) é usada para indicar que algo não é feito devidamente ou adequadamente. É usado para transmitir a ideia de 'não ser feito devidamente' ou 'não ser feito adequadamente'.",
    exemplo: {
      frase: "彼はろくに勉強もしない。",
      furigana: "かれはろくにべんきょうもしない。",
      romaji: "Kare wa roku ni benkyou mo shinai.",
      traducao: "Ele não estuda adequadamente.",
    },
  },
  {
    topico: "幸いなことに（さいわいなことに）",
    romaji: "saiwai na koto ni",
    traducao: "felizmente; por sorte",
    explicacao:
      "A expressão 幸いなことに (saiwai na koto ni) é usada para indicar que algo acontece de forma feliz ou por sorte. É usado para transmitir a ideia de 'felizmente' ou 'por sorte'.",
    exemplo: {
      frase: "幸いなことに、事故はありませんでした。",
      furigana: "さいわいなことに、じこはありませんでした。",
      romaji: "Saiwai na koto ni, jiko wa arimasen deshita.",
      traducao: "Felizmente, não houve acidentes.",
    },
  },
  {
    topico: "せいか",
    romaji: "seika",
    traducao: "por causa de; devido a",
    explicacao:
      "A expressão せいか (seika) é usada para indicar a causa ou motivo de algo. É usado para transmitir a ideia de 'por causa de' ou 'devido a'.",
    exemplo: {
      frase: "道路工事のせいか、渋滞が起きています。",
      furigana: "どうろこうじのせいか、じゅうたいがおきています。",
      romaji: "Douro kouji no seika, juutai ga okite imasu.",
      traducao: "Devido às obras na estrada, há congestionamento.",
    },
  },
  {
    topico: "せっかく",
    romaji: "sekkaku",
    traducao: "com esforço; com dificuldade",
    explicacao:
      "A expressão せっかく (sekkaku) é usada para indicar que algo foi feito com esforço, dificuldade ou preparação especial. É usado para transmitir a ideia de 'com esforço' ou 'com dificuldade'.",
    exemplo: {
      frase: "せっかくの機会なので、楽しんでください。",
      furigana: "せっかくのきかいなので、たのしんでください。",
      romaji: "Sekkaku no kikai na node, tanoshinde kudasai.",
      traducao: "Aproveite a oportunidade que foi conquistada com esforço.",
    },
  },
  {
    topico: "せめて",
    romaji: "semete",
    traducao: "pelo menos",
    explicacao:
      "A expressão せめて (semete) é usada para indicar um desejo ou exigência mínima em uma determinada situação. É usado para transmitir a ideia de 'pelo menos'.",
    exemplo: {
      frase: "せめて明日までにレポートを完成させたい。",
      furigana: "せめてあしたまでにれぽーとをかんせいさせたい。",
      romaji: "Semete ashita made ni repooto o kansei sasetai.",
      traducao: "Eu quero pelo menos terminar o relatório até amanhã.",
    },
  },
  {
    topico: "次第（しだい）",
    romaji: "shidai",
    traducao: "dependendo de; assim que",
    explicacao:
      "A expressão 次第 (shidai) é usada para indicar que algo depende de uma determinada condição ou que algo acontece assim que outra coisa ocorre. É usado para transmitir a ideia de 'dependendo de' ou 'assim que'.",
    exemplo: {
      frase: "彼が来る次第で、計画を始めましょう。",
      furigana: "かれがくるしだいで、けいかくをはじめましょう。",
      romaji: "Kare ga kuru shidai de, keikaku o hajimemashou.",
      traducao: "Vamos começar o planejamento assim que ele chegar.",
    },
  },
  {
    topico: "次第で（しだいで）",
    romaji: "shidai de",
    traducao: "dependendo de; conforme",
    explicacao:
      "A expressão 次第で (shidai de) é usada para indicar que algo varia ou muda dependendo de uma determinada condição ou circunstância. É usado para transmitir a ideia de 'dependendo de' ou 'conforme'.",
    exemplo: {
      frase: "結果は調査の進捗次第で変わるかもしれません。",
      furigana: "けっかはちょうさのしんちょくしだいでかわるかもしれません。",
      romaji: "Kekka wa chousa no shinchoku shidai de kawaru kamoshiremasen.",
      traducao:
        "Os resultados podem variar dependendo do progresso da pesquisa.",
    },
  },
  {
    topico: "次第に（しだいに）",
    romaji: "shidai ni",
    traducao: "gradualmente; aos poucos",
    explicacao:
      "A expressão 次第に (shidai ni) é usada para indicar que algo acontece ou muda gradualmente ou aos poucos. É usado para transmitir a ideia de 'gradualmente' ou 'aos poucos'.",
    exemplo: {
      frase: "日本語の勉強は次第に上達しています。",
      furigana: "にほんごのべんきょうはしだいにじょうたつしています。",
      romaji: "Nihongo no benkyou wa shidai ni joutatsu shite imasu.",
      traducao: "Meu estudo de japonês está melhorando aos poucos.",
    },
  },
  {
    topico: "しかも",
    romaji: "shikamo",
    traducao: "além disso; ainda por cima",
    explicacao:
      "A expressão しかも (shikamo) é usada para adicionar informações adicionais que fortalecem ou enfatizam uma afirmação anterior. É usado para transmitir a ideia de 'além disso' ou 'ainda por cima'.",
    exemplo: {
      frase: "彼は頭がいい。しかも、スポーツも得意だ。",
      furigana: "かれはあたまがいい。しかも、すぽーつもとくいだ。",
      romaji: "Kare wa atama ga ii. Shikamo, supootsu mo tokui da.",
      traducao: "Ele é inteligente. Além disso, ele também é bom em esportes.",
    },
  },
  {
    topico: "その上（そのうえ）",
    romaji: "sono ue",
    traducao: "além disso; além do mais",
    explicacao:
      "A expressão その上 (sono ue) é usada para adicionar informações adicionais que reforçam ou ampliam uma afirmação anterior. É usado para transmitir a ideia de 'além disso' ou 'além do mais'.",
    exemplo: {
      frase: "彼は頭がいい。その上、努力家でもある。",
      furigana: "かれはあたまがいい。そのうえ、どりょくかでもある。",
      romaji: "Kare wa atama ga ii. Sono ue, doryoku-ka demo aru.",
      traducao: "Ele é inteligente. Além do mais, ele também é trabalhador.",
    },
  },
  {
    topico: "それなのに",
    romaji: "sore nanoni",
    traducao: "apesar disso; no entanto",
    explicacao:
      "A expressão それなのに (sore nanoni) é usada para indicar uma contradição ou surpresa em relação a uma situação ou ação anterior. É usado para transmitir a ideia de 'apesar disso' ou 'no entanto'.",
    exemplo: {
      frase: "彼は一生懸命勉強した。それなのに、試験に合格できなかった。",
      furigana:
        "かれはいっしょうけんめいべんきょうした。それなのに、しけんにごうかくできなかった。",
      romaji:
        "Kare wa isshoukenmei benkyou shita. Sore nanoni, shiken ni goukaku dekinakatta.",
      traducao: "Ele estudou muito. No entanto, ele não passou no exame.",
    },
  },
  {
    topico: "それなら",
    romaji: "sore nara",
    traducao: "nesse caso; então",
    explicacao:
      "A expressão それなら (sore nara) é usada para indicar uma condição ou situação em que uma ação ou decisão é apropriada. É usado para transmitir a ideia de 'nesse caso' ou 'então'.",
    exemplo: {
      frase: "もし雨が降るなら、傘を持っていきましょう。それなら安心です。",
      furigana:
        "もしあめがふるなら、かさをもっていきましょう。それならあんしんです。",
      romaji:
        "Moshi ame ga furu nara, kasa o motte ikimashou. Sore nara anshin desu.",
      traducao:
        "Se chover, vamos levar um guarda-chuva. Nesse caso, estaremos tranquilos.",
    },
  },
  {
    topico: "それにしても",
    romaji: "sore ni shitemo",
    traducao: "mesmo assim; ainda assim",
    explicacao:
      "A expressão それにしても (sore ni shitemo) é usada para indicar que algo é surpreendente ou notável, mesmo considerando outras circunstâncias. É usado para transmitir a ideia de 'mesmo assim' ou 'ainda assim'.",
    exemplo: {
      frase: "彼は練習をサボった。それにしても試合で優勝した。",
      furigana:
        "かれはれんしゅうをさぼった。それにしてもしあいでゆうしょうした。",
      romaji:
        "Kare wa renshuu o sabot ta. Sore ni shitemo shiai de yuushou shita.",
      traducao: "Ele faltou aos treinos. Mesmo assim, ele venceu o jogo.",
    },
  },
  {
    topico: "そう言えば（そういえば）",
    romaji: "sou ieba",
    traducao: "falando nisso; a propósito",
    explicacao:
      "A expressão そう言えば (sou ieba) é usada para introduzir uma observação ou mudar de assunto relacionado a algo anteriormente mencionado. É usado para transmitir a ideia de 'falando nisso' ou 'a propósito'.",
    exemplo: {
      frase: "そう言えば、彼に会ったことがありますか？",
      furigana: "そういえば、かれにあったことがありますか？",
      romaji: "Sou ieba, kare ni atta koto ga arimasu ka?",
      traducao: "A propósito, você já se encontrou com ele?",
    },
  },
  {
    topico: "そうすると",
    romaji: "sou suru to",
    traducao: "nesse caso; assim sendo",
    explicacao:
      "A expressão そうすると (sou suru to) é usada para indicar que, ao fazer algo, resultará em uma determinada situação. É usado para transmitir a ideia de 'nesse caso' ou 'assim sendo'.",
    exemplo: {
      frase: "彼が辞めると言った。そうすると、新しいリーダーが必要になる。",
      furigana:
        "かれがやめるといった。そうすると、あたらしいりーだーがひつようになる。",
      romaji:
        "Kare ga yameru to itta. Sou suru to, atarashii riidaa ga hitsuyou ni naru.",
      traducao:
        "Ele disse que vai sair. Nesse caso, vamos precisar de um novo líder.",
    },
  },
  {
    topico: "末に（すえに）",
    romaji: "sue ni",
    traducao: "eventualmente; no final",
    explicacao:
      "A expressão 末に (sue ni) é usada para indicar algo que acontece no final de um processo, período de tempo ou sequência de eventos. É usado para transmitir a ideia de 'eventualmente' ou 'no final'.",
    exemplo: {
      frase: "努力すれば末に報われる。",
      furigana: "どりょくすればすえにむくわれる。",
      romaji: "Doryoku sureba sue ni mukuwareru.",
      traducao: "Se você se esforçar, eventualmente será recompensado.",
    },
  },
  {
    topico: "少しも～ない（すこしも～ない）",
    romaji: "sukoshi mo ~nai",
    traducao: "nem um pouco; de forma alguma",
    explicacao:
      "A expressão 少しも～ない (sukoshi mo ~nai) é usada para enfatizar a negação total ou a ausência total de algo. É usado para transmitir a ideia de 'nem um pouco' ou 'de forma alguma'.",
    exemplo: {
      frase: "彼は少しも悔しくないと言った。",
      furigana: "かれはすこしもくやしくないといった。",
      romaji: "Kare wa sukoshi mo kuyashikunai to itta.",
      traducao: "Ele disse que não está nem um pouco arrependido.",
    },
  },
  {
    topico: "少なくとも（すくなくとも）",
    romaji: "sukunaku tomo",
    traducao: "pelo menos; no mínimo",
    explicacao:
      "A expressão 少なくとも (sukunaku tomo) é usada para indicar um valor mínimo ou uma condição que não deve ser inferior a um determinado nível. É usado para transmitir a ideia de 'pelo menos' ou 'no mínimo'.",
    exemplo: {
      frase: "少なくとも3時間は寝た方がいい。",
      furigana: "すくなくとも3じかんはねたほうがいい。",
      romaji: "Sukunaku tomo san-jikan wa neta hou ga ii.",
      traducao: "É melhor dormir pelo menos 3 horas.",
    },
  },
  {
    topico: "直ちに（ただちに）",
    romaji: "tadachi ni",
    traducao: "imediatamente; prontamente",
    explicacao:
      "A expressão 直ちに (tadachi ni) é usada para indicar que algo deve ser feito imediatamente ou sem demora. É usado para transmitir a ideia de 'imediatamente' ou 'prontamente'.",
    exemplo: {
      frase: "直ちに医者に診てもらいなさい。",
      furigana: "ただちにいしゃにみてもらいなさい。",
      romaji: "Tadachi ni isha ni mite morainasai.",
      traducao: "Vá ao médico imediatamente para ser examinado.",
    },
  },
  {
    topico: "たまえ",
    romaji: "tamae",
    traducao: "faça; tenha",
    explicacao:
      "A expressão たまえ (tamae) é usada como uma forma imperativa ou de pedido enfático. É usado para transmitir a ideia de 'faça' ou 'tenha'.",
    exemplo: {
      frase: "勇気を持って前に進めたまえ。",
      furigana: "ゆうきをもってまえにすすめたまえ。",
      romaji: "Yuuki o motte mae ni susumetamae.",
      traducao: "Avance corajosamente.",
    },
  },
  {
    topico: "てばかりはいられない",
    romaji: "te bakari wa irarenai",
    traducao: "não pode continuar apenas; não pode apenas",
    explicacao:
      "A expressão てばかりはいられない (te bakari wa irarenai) é usada para indicar que não se pode ficar apenas fazendo algo o tempo todo, especialmente quando há outras tarefas ou obrigações a serem cumpridas. É usado para transmitir a ideia de 'não pode continuar apenas' ou 'não pode apenas'.",
    exemplo: {
      frase: "遊んでばかりはいられない。宿題もしなければならない。",
      furigana: "あそんでばかりはいられない。しゅくだいもしなければならない。",
      romaji: "Asonde bakari wa irarenai. Shukudai mo shinakereba naranai.",
      traducao:
        "Você não pode apenas ficar brincando. Você também precisa fazer o dever de casa.",
    },
  },
  {
    topico: "てでも",
    romaji: "te demo",
    traducao: "mesmo que seja necessário; mesmo que",
    explicacao:
      "A expressão てでも (te demo) é usada para indicar que algo será feito, mesmo que seja necessário ou que haja dificuldades. É usado para transmitir a ideia de 'mesmo que seja necessário' ou 'mesmo que'.",
    exemplo: {
      frase: "この仕事をやり遂げるためには、何をしてでもやる覚悟が必要だ。",
      furigana:
        "このしごとをやりとげるためには、なにをしてでもやるかくごがひつようだ。",
      romaji:
        "Kono shigoto o yaritogeru tame ni wa, nani o shite demo yaru kakugo ga hitsuyou da.",
      traducao:
        "Para realizar esse trabalho, é necessário estar preparado para fazer qualquer coisa.",
    },
  },
  {
    topico: "て以来（ていらい）",
    romaji: "te irai",
    traducao: "desde que; a partir de",
    explicacao:
      "A expressão て以来 (te irai) é usada para indicar que algo tem ocorrido continuamente ou que uma situação tem se mantido desde um determinado ponto no tempo. É usado para transmitir a ideia de 'desde que' ou 'a partir de'.",
    exemplo: {
      frase: "あの出来事以来、彼女は変わった。",
      furigana: "あのできごといらい、かのじょはかわった。",
      romaji: "Ano dekigoto irai, kanojo wa kawatta.",
      traducao: "Ela mudou desde aquele incidente.",
    },
  },
  {
    topico: "ていては",
    romaji: "te ite wa",
    traducao: "se continuar a; se ficar fazendo",
    explicacao:
      "A expressão ていては (te ite wa) é usada para indicar as consequências negativas de continuar fazendo uma determinada ação. É usado para transmitir a ideia de 'se continuar a' ou 'se ficar fazendo'.",
    exemplo: {
      frase: "勉強していては、遊べない。",
      furigana: "べんきょうしていては、あそべない。",
      romaji: "Benkyou shite ite wa, asobenai.",
      traducao: "Se continuar estudando, não poderá brincar.",
    },
  },
  {
    topico: "てこそ",
    romaji: "te koso",
    traducao: "somente; apenas",
    explicacao:
      "A expressão てこそ (te koso) é usada para enfatizar que algo é verdadeiro ou válido apenas em uma determinada condição ou circunstância. É usado para transmitir a ideia de 'somente' ou 'apenas'.",
    exemplo: {
      frase: "努力してこそ、成功できる。",
      furigana: "どりょくしてこそ、せいこうできる。",
      romaji: "Doryoku shite koso, seikou dekiru.",
      traducao: "Somente através do esforço é possível alcançar o sucesso.",
    },
  },
  {
    topico: "てまで",
    romaji: "te made",
    traducao: "até mesmo; até a ponto de",
    explicacao:
      "A expressão てまで (te made) é usada para indicar que alguém faz algo até mesmo em uma situação extrema ou além do que é esperado. É usado para transmitir a ideia de 'até mesmo' ou 'até a ponto de'.",
    exemplo: {
      frase: "彼は勉強してまで合格した。",
      furigana: "かれはべんきょうしてまでごうかくした。",
      romaji: "Kare wa benkyou shite made goukaku shita.",
      traducao: "Ele passou no exame até mesmo estudando intensivamente.",
    },
  },
  {
    topico: "てならない",
    romaji: "te naranai",
    traducao: "não pode deixar de; não consegue evitar",
    explicacao:
      "A expressão てならない (te naranai) é usada para expressar um sentimento intenso ou uma situação em que alguém não pode evitar ou deixar de fazer algo. É usado para transmitir a ideia de 'não pode deixar de' ou 'não consegue evitar'.",
    exemplo: {
      frase: "彼女の笑顔を見ると、心が躍ってならない。",
      furigana: "かのじょのえがおをみると、こころがおどってならない。",
      romaji: "Kanojo no egao o miru to, kokoro ga odotte naranai.",
      traducao: "Quando vejo o sorriso dela, meu coração se enche de alegria.",
    },
  },
  {
    topico: "てたまらない",
    romaji: "te tamaranai",
    traducao: "não aguentar; não suportar",
    explicacao:
      "A expressão てたまらない (te tamaranai) é usada para expressar um sentimento intenso ou uma situação em que alguém não consegue suportar ou aguentar algo. É usado para transmitir a ideia de 'não aguentar' ou 'não suportar'.",
    exemplo: {
      frase: "彼の笑顔を見ると、幸せでたまらない。",
      furigana: "かれのえがおをみると、しあわせでたまらない。",
      romaji: "Kare no egao o miru to, shiawase de tamaranai.",
      traducao: "Quando vejo o sorriso dele, me sinto extremamente feliz.",
    },
  },
  {
    topico: "て当然だ（てとうぜんだ）",
    romaji: "te touzen da",
    traducao: "é natural; é óbvio",
    explicacao:
      "A expressão て当然だ (te touzen da) é usada para indicar que algo é considerado natural, esperado ou óbvio com base nas circunstâncias. É usado para transmitir a ideia de 'é natural' ou 'é óbvio'.",
    exemplo: {
      frase: "頑張ったら成功するのは当然だ。",
      furigana: "がんばったらせいこうするのはとうぜんだ。",
      romaji: "Ganbattara seikou suru no wa touzen da.",
      traducao: "É natural que você tenha sucesso se se esforçar.",
    },
  },
  {
    topico: "ては / では",
    romaji: "te wa / de wa",
    traducao: "se fizer; se acontecer",
    explicacao:
      "A expressão ては (te wa) ou では (de wa) é usada para indicar as consequências de uma ação ou uma situação específica. É usado para transmitir a ideia de 'se fizer' ou 'se acontecer'.",
    exemplo: {
      frase: "遅刻してはいけない。",
      furigana: "ちこくしてはいけない。",
      romaji: "Chikoku shite wa ikenai.",
      traducao: "Você não pode se atrasar.",
    },
  },
  {
    topico: "てはいられない",
    romaji: "te wa irarenai",
    traducao: "não pode ficar; não pode permanecer",
    explicacao:
      "A expressão てはいられない (te wa irarenai) é usada para indicar que alguém não pode ficar em uma determinada situação ou condição por muito tempo. É usado para transmitir a ideia de 'não pode ficar' ou 'não pode permanecer'.",
    exemplo: {
      frase: "このままではいられない。何か行動しなければ。",
      furigana: "このままではいられない。なにかこうどうしなければ。",
      romaji: "Kono mama de wa irarenai. Nanika koudou shinakereba.",
      traducao: "Não posso ficar assim. Preciso fazer algo.",
    },
  },
  {
    topico: "てはならない",
    romaji: "te wa naranai",
    traducao: "não pode; não deve",
    explicacao:
      "A expressão てはならない (te wa naranai) é usada para indicar que algo não é permitido, não é aceitável ou não deve ser feito em uma determinada situação. É usado para transmitir a ideia de 'não pode' ou 'não deve'.",
    exemplo: {
      frase: "他人のプライバシーを侵してはならない。",
      furigana: "たにんのぷらいばしーをしんしてはならない。",
      romaji: "Tanin no puraibashii o shinshite wa naranai.",
      traducao: "Você não deve invadir a privacidade de outras pessoas.",
    },
  },
  {
    topico: "ては～ては",
    romaji: "te wa ~te wa",
    traducao: "se fizer ~, se fizer ~",
    explicacao:
      "A expressão ては～ては (te wa ~te wa) é usada para indicar uma sequência de ações ou eventos repetidos, cada um com suas próprias consequências ou resultados. É usado para transmitir a ideia de 'se fizer ~, se fizer ~'.",
    exemplo: {
      frase: "勉強しては遊び、遊びしてはまた勉強する。",
      furigana: "べんきょうしてはあそび、あそびしてはまたべんきょうする。",
      romaji: "Benkyou shite wa asobi, asobi shite wa mata benkyou suru.",
      traducao: "Estuda, depois brinca, depois estuda novamente.",
    },
  },
  {
    topico: "と同時に（とどうじに）",
    romaji: "to douji ni",
    traducao: "ao mesmo tempo que; simultaneamente",
    explicacao:
      "A expressão と同時に (to douji ni) é usada para indicar que duas ações ou eventos ocorrem ao mesmo tempo ou simultaneamente. É usado para transmitir a ideia de 'ao mesmo tempo que' ou 'simultaneamente'.",
    exemplo: {
      frase: "彼女は笑顔で挨拶すると同時に手を振った。",
      furigana: "かのじょはえがおであいさつするとどうじにてをふった。",
      romaji: "Kanojo wa egao de aisatsu suru to douji ni te o futta.",
      traducao:
        "Ela acenou com a mão ao mesmo tempo que cumprimentava com um sorriso.",
    },
  },
  {
    topico: "といった",
    romaji: "to itta",
    traducao: "como; tal como",
    explicacao:
      "A expressão といった (to itta) é usada para fazer comparações ou dar exemplos de algo que é semelhante ou igual a algo mencionado anteriormente. É usado para transmitir a ideia de 'como' ou 'tal como'.",
    exemplo: {
      frase: "彼は勇敢な戦士といった存在だ。",
      furigana: "かれはゆうかんなせんしといったそんざいだ。",
      romaji: "Kare wa yuukan na senshi to itta sonzai da.",
      traducao: "Ele é uma figura como um valente guerreiro.",
    },
  },
  {
    topico: "というふうに",
    romaji: "to iu fuu ni",
    traducao: "de forma; à maneira de",
    explicacao:
      "A expressão というふうに (to iu fuu ni) é usada para expressar a maneira ou a forma de algo. É usado para transmitir a ideia de 'de forma' ou 'à maneira de'.",
    exemplo: {
      frase: "彼は子供のような笑顔をしているというふうに見えた。",
      furigana: "かれはこどものようなえがおをしているというふうにみえた。",
      romaji: "Kare wa kodomo no you na egao o shite iru to iu fuu ni mieta.",
      traducao:
        "Ele parecia estar sorrindo de forma inocente, como uma criança.",
    },
  },
  {
    topico: "ということは",
    romaji: "to iu koto wa",
    traducao: "isso significa que; isso quer dizer",
    explicacao:
      "A expressão ということは (to iu koto wa) é usada para explicar ou inferir o significado de algo mencionado anteriormente. É usado para transmitir a ideia de 'isso significa que' ou 'isso quer dizer'.",
    exemplo: {
      frase: "彼が遅刻したということは、何か問題があったのかもしれない。",
      furigana:
        "かれがちこくしたということは、なにかもんだいがあったのかもしれない。",
      romaji:
        "Kare ga chikoku shita to iu koto wa, nanika mondai ga atta no kamoshirenai.",
      traducao:
        "O fato de ele ter chegado atrasado significa que pode ter havido algum problema.",
    },
  },
  {
    topico: "というものだ",
    romaji: "to iu mono da",
    traducao: "é o que; é como",
    explicacao:
      "A expressão というものだ (to iu mono da) é usada para enfatizar uma afirmação ou uma explicação sobre algo que é considerado típico, comum ou esperado. É usado para transmitir a ideia de 'é o que' ou 'é como'.",
    exemplo: {
      frase: "人間は間違えるものだ。",
      furigana: "にんげんはまちがえるものだ。",
      romaji: "Ningen wa machigaeru mono da.",
      traducao: "É natural para os humanos cometerem erros.",
    },
  },
  {
    topico: "というものではない",
    romaji: "to iu mono dewa nai",
    traducao: "não significa que; não quer dizer que",
    explicacao:
      "A expressão というものではない (to iu mono dewa nai) é usada para negar ou contradizer uma afirmação anterior, indicando que algo não significa necessariamente o que foi dito anteriormente. É usado para transmitir a ideia de 'não significa que' ou 'não quer dizer que'.",
    exemplo: {
      frase: "彼女が忙しいからといって、無理をするというものではない。",
      furigana:
        "かのじょがいそがしいからといって、むりをするというものではない。",
      romaji:
        "Kanojo ga isogashii kara to itte, muri o suru to iu mono dewa nai.",
      traducao:
        "Só porque ela está ocupada, não significa que ela deva se esforçar demais.",
    },
  },
  {
    topico: "と考えられる（とかんがえられる）",
    romaji: "to kangaerareru",
    traducao: "é considerado; é pensado",
    explicacao:
      "A expressão と考えられる (to kangaerareru) é usada para indicar que algo é considerado ou pensado como sendo verdadeiro, provável ou possível. É usado para transmitir a ideia de 'é considerado' ou 'é pensado'.",
    exemplo: {
      frase: "この地域では地震が頻繁に起こると考えられている。",
      furigana: "このちいきではじしんがひんぱんにおこるとかんがえられている。",
      romaji:
        "Kono chiiki de wa jishin ga hinpan ni okoru to kangaerarete iru.",
      traducao:
        "É considerado que terremotos ocorram com frequência nesta região.",
    },
  },
  {
    topico: "とか（で）",
    romaji: "to ka (de)",
    traducao: "como; tais como",
    explicacao:
      "A expressão とか (to ka) ou で (de) é usada para dar exemplos ou listar itens de forma não exaustiva. É usado para transmitir a ideia de 'como' ou 'tais como'.",
    exemplo: {
      frase: "私は果物が好きです。りんごとか、バナナでよく食べます。",
      furigana:
        "わたしはくだものがすきです。りんごとか、ばななでよくたべます。",
      romaji:
        "Watashi wa kudamono ga suki desu. Ringo toka, banana de yoku tabemasu.",
      traducao:
        "Eu gosto de frutas. Costumo comer coisas como maçãs e bananas.",
    },
  },
  {
    topico: "とっくに",
    romaji: "tokku ni",
    traducao: "há muito tempo; já faz tempo",
    explicacao:
      "A expressão とっくに (tokku ni) é usada para indicar que algo ocorreu há muito tempo ou que já faz muito tempo que algo aconteceu. É usado para transmitir a ideia de 'há muito tempo' ou 'já faz tempo'.",
    exemplo: {
      frase: "彼はとっくに家を出て行った。",
      furigana: "かれはとっくにいえをでていった。",
      romaji: "Kare wa tokku ni ie o dete itta.",
      traducao: "Ele saiu de casa há muito tempo.",
    },
  },
  {
    topico: "ところだった",
    romaji: "tokoro datta",
    traducao: "quase; esteve prestes a",
    explicacao:
      "A expressão ところだった (tokoro datta) é usada para indicar que algo quase aconteceu ou que alguém esteve prestes a fazer algo. É usado para transmitir a ideia de 'quase' ou 'esteve prestes a'.",
    exemplo: {
      frase: "電車に乗り遅れるところだった。",
      furigana: "でんしゃにのりおくれるところだった。",
      romaji: "Densha ni noriokureru tokoro datta.",
      traducao: "Eu quase perdi o trem.",
    },
  },
  {
    topico: "ところに",
    romaji: "tokoro ni",
    traducao: "no momento em que; assim que",
    explicacao:
      "A expressão ところに (tokoro ni) é usada para indicar que uma ação ocorre imediatamente após outra ou no exato momento em que algo acontece. É usado para transmitir a ideia de 'no momento em que' ou 'assim que'.",
    exemplo: {
      frase: "彼が帰宅するところに電話が鳴った。",
      furigana: "かれがきたくするところにでんわがなった。",
      romaji: "Kare ga kitaku suru tokoro ni denwa ga natta.",
      traducao: "O telefone tocou assim que ele chegou em casa.",
    },
  },
  {
    topico: "ところを見ると（ところをみると）",
    romaji: "tokoro o miru to",
    traducao: "olhando para a situação; com base na observação",
    explicacao:
      "A expressão ところを見ると (tokoro o miru to) é usada para fazer uma avaliação ou inferência com base na observação de uma determinada situação. É usado para transmitir a ideia de 'olhando para a situação' ou 'com base na observação'.",
    exemplo: {
      frase: "彼女の笑顔を見ると、幸せなようだ。",
      furigana: "かのじょのえがおをみると、しあわせなようだ。",
      romaji: "Kanojo no egao o miru to, shiawase na you da.",
      traducao: "Olhando para o sorriso dela, parece que ela está feliz.",
    },
  },
  {
    topico: "とも",
    romaji: "tomo",
    traducao: "mesmo que; embora",
    explicacao:
      "A expressão とも (tomo) é usada para indicar uma concessão ou uma situação hipotética em que algo é verdadeiro, mesmo que as circunstâncias sejam adversas. É usado para transmitir a ideia de 'mesmo que' ou 'embora'.",
    exemplo: {
      frase: "雨が降っているとも、楽しい思い出ができた。",
      furigana: "あめがふっているとも、たのしいおもいでができた。",
      romaji: "Ame ga futte iru tomo, tanoshii omoide ga dekita.",
      traducao: "Mesmo com a chuva, conseguimos criar boas lembranças.",
    },
  },
  {
    topico: "として～ない",
    romaji: "toshite ~nai",
    traducao: "não sendo; não se considerando",
    explicacao:
      "A expressão として～ない (toshite ~nai) é usada para indicar que algo não é considerado ou não é reconhecido como sendo de uma determinada maneira, mesmo que possa parecer ou ser visto assim. É usado para transmitir a ideia de 'não sendo' ou 'não se considerando'.",
    exemplo: {
      frase: "彼は医者として経験がないが、人々を助けることに情熱を持っている。",
      furigana:
        "かれはいしゃとしてけいけんがないが、ひとびとをたすけることにじょうねつをもっている。",
      romaji:
        "Kare wa isha toshite keiken ga nai ga, hitobito o tasukeru koto ni jounetsu o motte iru.",
      traducao:
        "Embora ele não tenha experiência como médico, ele tem paixão por ajudar as pessoas.",
    },
  },
  {
    topico: "としても",
    romaji: "toshite mo",
    traducao: "mesmo considerando; mesmo supondo",
    explicacao:
      "A expressão としても (toshite mo) é usada para indicar uma situação hipotética em que algo é verdadeiro ou válido, mesmo considerando outras possibilidades ou circunstâncias. É usado para transmitir a ideia de 'mesmo considerando' ou 'mesmo supondo'.",
    exemplo: {
      frase: "彼の経験は浅いとしても、彼の才能には期待ができる。",
      furigana:
        "かれのけいけんはあさいとしても、かれのさいのうにはきたいができる。",
      romaji:
        "Kare no keiken wa asai toshite mo, kare no sainou ni wa kitai ga dekiru.",
      traducao:
        "Mesmo considerando sua pouca experiência, podemos esperar muito do seu talento.",
    },
  },
  {
    topico: "つつ",
    romaji: "tsutsu",
    traducao: "enquanto; ao mesmo tempo que",
    explicacao:
      "A expressão つつ (tsutsu) é usada para indicar que duas ações ou estados ocorrem simultaneamente, com uma ação ou estado continuando enquanto a outra ocorre. É usado para transmitir a ideia de 'enquanto' ou 'ao mesmo tempo que'.",
    exemplo: {
      frase: "彼は歩きつつ、電話で話していた。",
      furigana: "かれはあるきつつ、でんわではなしていた。",
      romaji: "Kare wa aruki tsutsu, denwa de hanashite ita.",
      traducao: "Ele estava caminhando enquanto falava ao telefone.",
    },
  },
  {
    topico: "つつある",
    romaji: "tsutsu aru",
    traducao: "estar em processo; estar ocorrendo",
    explicacao:
      "A expressão つつある (tsutsu aru) é usada para indicar que algo está em processo ou ocorrendo gradualmente. É usado para transmitir a ideia de 'estar em processo' ou 'estar ocorrendo'.",
    exemplo: {
      frase: "社会は急速な変化の中にある。",
      furigana: "しゃかいはきゅうそくなへんかのなかにある。",
      romaji: "Shakai wa kyuusoku na henka no naka ni aru.",
      traducao: "A sociedade está passando por mudanças rápidas.",
    },
  },
  {
    topico: "上は（うえは）",
    romaji: "ue wa",
    traducao: "quanto a; no que diz respeito a",
    explicacao:
      "A expressão 上は (ue wa) é usada para indicar que se está mencionando uma consideração ou avaliação em relação a um determinado assunto. É usado para transmitir a ideia de 'quanto a' ou 'no que diz respeito a'.",
    exemplo: {
      frase: "彼の成績に上はない。",
      furigana: "かれのせいせきにうえはない。",
      romaji: "Kare no seiseki ni ue wa nai.",
      traducao: "Quanto às notas dele, não há nada excepcional.",
    },
  },
  {
    topico: "はもとより",
    romaji: "wa moto yori",
    traducao: "além de; além do mais",
    explicacao:
      "A expressão はもとより (wa moto yori) é usada para indicar que algo é verdadeiro ou relevante não apenas para um caso específico, mas também para outros casos semelhantes. É usado para transmitir a ideia de 'além de' ou 'além do mais'.",
    exemplo: {
      frase: "彼女は美しいはもとより、頭も良い。",
      furigana: "かのじょはうつくしいはもとより、あたまもよい。",
      romaji: "Kanojo wa utsukushii wa moto yori, atama mo yoi.",
      traducao: "Além de ser bonita, ela também é inteligente.",
    },
  },
  {
    topico: "はともかく",
    romaji: "wa tomo kaku",
    traducao: "deixando de lado; independentemente",
    explicacao:
      "A expressão はともかく (wa tomo kaku) é usada para indicar que algo é verdadeiro ou válido, independentemente de outros fatores ou considerações. É usado para transmitir a ideia de 'deixando de lado' ou 'independentemente'.",
    exemplo: {
      frase: "彼の態度は問題だが、彼の能力はともかく評価されるべきだ。",
      furigana:
        "かれのたいどはもんだいだが、かれののうりょくはともかくひょうかされるべきだ。",
      romaji:
        "Kare no taido wa mondai da ga, kare no nouryoku wa tomo kaku hyouka sareru beki da.",
      traducao:
        "Embora a atitude dele seja um problema, suas habilidades devem ser avaliadas independentemente.",
    },
  },
  {
    topico: "わずかに",
    romaji: "wazuka ni",
    traducao: "ligeiramente; apenas um pouco",
    explicacao:
      "A expressão わずかに (wazuka ni) é usada para indicar uma quantidade muito pequena ou uma diferença insignificante. É usado para transmitir a ideia de 'ligeiramente' ou 'apenas um pouco'.",
    exemplo: {
      frase: "彼の努力が実を結んでわずかに成功した。",
      furigana: "かれのどりょくがみをむすんでわずかにせいこうした。",
      romaji: "Kare no doryoku ga mi o musunde wazuka ni seikou shita.",
      traducao: "Seus esforços deram frutos e ele obteve um sucesso ligeiro.",
    },
  },
  {
    topico: "やがて",
    romaji: "yagate",
    traducao: "em breve; eventualmente",
    explicacao:
      "A expressão やがて (yagate) é usada para indicar que algo acontecerá em um futuro próximo ou que algo se desenvolverá gradualmente com o tempo. É usado para transmitir a ideia de 'em breve' ou 'eventualmente'.",
    exemplo: {
      frase: "やがて春が訪れるでしょう。",
      furigana: "やがてはるがおとずれるでしょう。",
      romaji: "Yagate haru ga otozureru deshou.",
      traducao: "Em breve, a primavera chegará.",
    },
  },
  {
    topico: "やら～やら",
    romaji: "yara ~ yara",
    traducao: "entre outras coisas; e assim por diante",
    explicacao:
      "A expressão やら～やら (yara ~ yara) é usada para indicar exemplos não exaustivos ou uma lista não completa de coisas ou ações. É usado para transmitir a ideia de 'entre outras coisas' ou 'e assim por diante'.",
    exemplo: {
      frase: "旅行の準備にはパスポートや予約、荷物の準備やら色々あります。",
      furigana:
        "りょこうのじゅんびにはぱすぽーとやよやく、にもつのじゅんびやらいろいろあります。",
      romaji:
        "Ryokou no junbi ni wa pasupooto ya yoyaku, nimotsu no junbi yara iroiro arimasu.",
      traducao:
        "Para a preparação de uma viagem, há coisas como passaporte, reservas, preparação de bagagem, entre outras.",
    },
  },
  {
    topico: "よほど / よっぽど",
    romaji: "yohodo / yoppodo",
    traducao: "muito; bastante",
    explicacao:
      "As expressões よほど (yohodo) e よっぽど (yoppodo) são usadas para indicar que algo é muito ou bastante. São usadas para transmitir a ideia de 'muito' ou 'bastante'.",
    exemplo: {
      frase: "彼はよほど頭の良い学生だ。",
      furigana: "かれはよほどあたまのよいがくせいだ。",
      romaji: "Kare wa yohodo atama no yoi gakusei da.",
      traducao: "Ele é um estudante muito inteligente.",
    },
  },
  {
    topico: "より [2]",
    romaji: "yori",
    traducao: "do que; em comparação com",
    explicacao:
      "A expressão より (yori) é usada para fazer comparações entre duas coisas ou indicar uma referência em relação a algo. É usado para transmitir a ideia de 'do que' ou 'em comparação com'.",
    exemplo: {
      frase: "彼の英語は私より上手だ。",
      furigana: "かれのえいごはわたしよりじょうずだ。",
      romaji: "Kare no eigo wa watashi yori jouzu da.",
      traducao: "O inglês dele é melhor do que o meu.",
    },
  },
  {
    topico: "よりほかない",
    romaji: "yori hoka nai",
    traducao: "não há outra escolha; ser inevitável",
    explicacao:
      "A expressão よりほかない (yori hoka nai) é usada para indicar que não há outra opção ou escolha, e algo é inevitável ou inescapável. É usado para transmitir a ideia de 'não há outra escolha' ou 'ser inevitável'.",
    exemplo: {
      frase: "追試を受けるよりほかない。",
      furigana: "ついしをうけるよりほかない。",
      romaji: "Tsuishitsu o ukeru yori hoka nai.",
      traducao: "Não há outra escolha senão fazer o exame de recuperação.",
    },
  },
  {
    topico: "ようでは",
    romaji: "you dewa",
    traducao: "se; caso",
    explicacao:
      "A expressão ようでは (you dewa) é usada para indicar uma condição ou situação hipotética em que algo ocorre ou pode ocorrer. É usado para transmitir a ideia de 'se' ou 'caso'.",
    exemplo: {
      frase: "遅刻したようでは怒られるよ。",
      furigana: "ちこくしたようではおこられるよ。",
      romaji: "Chikoku shita you dewa okorareru yo.",
      traducao: "Se você se atrasar, vai ser repreendido.",
    },
  },
  {
    topico: "ようではないか",
    romaji: "you dewa nai ka",
    traducao: "não seria bom?; e se?",
    explicacao:
      "A expressão ようではないか (you dewa nai ka) é usada para fazer sugestões ou perguntas retóricas, sugerindo que algo seria bom ou que algo deveria ser considerado. É usado para transmitir a ideia de 'não seria bom?' ou 'e se?'.",
    exemplo: {
      frase: "明日、みんなで映画を見に行くようではないか。",
      furigana: "あした、みんなでえいがをみにいくようではないか。",
      romaji: "Ashita, minna de eiga o mi ni iku you dewa nai ka.",
      traducao: "Que tal irmos todos assistir a um filme amanhã?",
    },
  },
  {
    topico: "ようか～まいか",
    romaji: "you ka ~ mai ka",
    traducao: "devo fazer ou não?; será que devo?",
    explicacao:
      "A expressão ようか～まいか (you ka ~ mai ka) é usada para expressar dúvida, incerteza ou hesitação sobre uma ação, perguntando a si mesmo ou a outra pessoa se deve ou não fazer algo. É usado para transmitir a ideia de 'devo fazer ou não?' ou 'será que devo?'.",
    exemplo: {
      frase: "この機会に挑戦しようか迷っている。",
      furigana: "このきかいにちょうせんしようかまよっている。",
      romaji: "Kono kikai ni chousen shiyou ka mayotte iru.",
      traducao:
        "Estou hesitando se devo ou não aproveitar essa oportunidade e me desafiar.",
    },
  },
  {
    topico: "要するに（ようするに）",
    romaji: "you suru ni",
    traducao: "em resumo; em suma",
    explicacao:
      "A expressão 要するに (you suru ni) é usada para fazer um resumo ou uma conclusão breve sobre algo, apresentando o ponto principal ou a ideia principal. É usado para transmitir a ideia de 'em resumo' ou 'em suma'.",
    exemplo: {
      frase: "彼女は勉強が苦手なので、要するに努力が必要だ。",
      furigana:
        "かのじょはべんきょうがにがてなので、ようするにどりょくがひつようだ。",
      romaji:
        "Kanojo wa benkyou ga nigate na node, you suru ni doryoku ga hitsuyou da.",
      traducao:
        "Ela é ruim em estudos, então, em suma, o esforço é necessário.",
    },
  },
  {
    topico: "ざるを得ない（ざるをえない）",
    romaji: "zaru o enai",
    traducao: "não ter escolha a não ser; ser inevitável",
    explicacao:
      "A expressão ざるを得ない (zaru o enai) é usada para indicar que não há outra escolha ou opção além de fazer algo, e é inevitável. É usado para transmitir a ideia de 'não ter escolha a não ser' ou 'ser inevitável'.",
    exemplo: {
      frase: "遅れたので、謝らざるを得なかった。",
      furigana: "おくれたので、あやまらざるをえなかった。",
      romaji: "Okureta node, ayamarazu o enakanakatta.",
      traducao: "Como eu me atrasei, não tive escolha a não ser me desculpar.",
    },
  },
  {
    topico: "ずに済む （ずにすむ）",
    romaji: "zu ni sumu",
    traducao: "ser capaz de evitar; não precisar",
    explicacao:
      "A expressão ずに済む (zu ni sumu) é usada para indicar que é possível evitar fazer algo ou que não é necessário fazer algo. É usado para transmitir a ideia de 'ser capaz de evitar' ou 'não precisar'.",
    exemplo: {
      frase: "電車が遅れなかったので、急ぎずに済んだ。",
      furigana: "でんしゃがおくれなかったので、いそぎずにすんだ。",
      romaji: "Densha ga okurenakatta node, isogi zu ni sunda.",
      traducao: "Como o trem não atrasou, pude chegar sem pressa.",
    },
  },
];

export default n2GrammarList;
