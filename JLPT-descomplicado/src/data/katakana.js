const katakanaList = [
  {
    a: {
      letra: "a",
      katakana: "ア",
      exemplos: [
        {
          palavra: "アメリカ",
          traducao: "América",
          romaji: "amerika",
        },
        {
          palavra: "アイスクリーム",
          traducao: "sorvete",
          romaji: "aisukurīmu",
        },
        {
          palavra: "アルバイト",
          traducao: "trabalho de meio período",
          romaji: "arubaito",
        },
      ],
    },
    i: {
      letra: "i",
      katakana: "イ",
      exemplos: [
        {
          palavra: "インターネット",
          traducao: "internet",
          romaji: "intānetto",
        },
        {
          palavra: "イメージ",
          traducao: "imagem",
          romaji: "imēji",
        },
        {
          palavra: "イベント",
          traducao: "evento",
          romaji: "ibento",
        },
      ],
    },
    u: {
      letra: "u",
      katakana: "ウ",
      exemplos: [
        {
          palavra: "ウイスキー",
          traducao: "uísque",
          romaji: "uisukī",
        },
        {
          palavra: "ウエスト",
          traducao: "cintura",
          romaji: "uesuto",
        },
        {
          palavra: "ウエディング",
          traducao: "casamento",
          romaji: "uedingu",
        },
      ],
    },
    e: {
      letra: "e",
      katakana: "エ",
      exemplos: [
        {
          palavra: "エスプレッソ",
          traducao: "espresso",
          romaji: "esupuresso",
        },
        {
          palavra: "エアコン",
          traducao: "ar-condicionado",
          romaji: "eakon",
        },
        {
          palavra: "エネルギー",
          traducao: "energia",
          romaji: "enerugī",
        },
      ],
    },
    o: {
      letra: "o",
      katakana: "オ",
      exemplos: [
        {
          palavra: "オレンジ",
          traducao: "laranja",
          romaji: "orenji",
        },
        {
          palavra: "オリンピック",
          traducao: "Olimpíadas",
          romaji: "orinpikku",
        },
        {
          palavra: "オフィス",
          traducao: "escritório",
          romaji: "ofisu",
        },
      ],
    },

    ka: {
      letra: "ka",
      katakana: "カ",
      exemplos: [
        {
          palavra: "カメラ",
          traducao: "câmera",
          romaji: "kamera",
        },
        {
          palavra: "カード",
          traducao: "cartão",
          romaji: "kādo",
        },
        {
          palavra: "カフェ",
          traducao: "café",
          romaji: "kafe",
        },
      ],
    },
    ki: {
      letra: "ki",
      katakana: "キ",
      exemplos: [
        {
          palavra: "キャンプ",
          traducao: "acampamento",
          romaji: "kyanpu",
        },
        {
          palavra: "キーボード",
          traducao: "teclado",
          romaji: "kībōdo",
        },
        {
          palavra: "キャベツ",
          traducao: "repolho",
          romaji: "kyabetsu",
        },
      ],
    },
    ku: {
      letra: "ku",
      katakana: "ク",
      exemplos: [
        {
          palavra: "クリスマス",
          traducao: "Natal",
          romaji: "kurisumasu",
        },
        {
          palavra: "クッキー",
          traducao: "biscoito",
          romaji: "kukkī",
        },
        {
          palavra: "クラス",
          traducao: "classe",
          romaji: "kurasu",
        },
      ],
    },
    ke: {
      letra: "ke",
      katakana: "ケ",
      exemplos: [
        {
          palavra: "ケーキ",
          traducao: "bolo",
          romaji: "kēki",
        },
        {
          palavra: "ケータイ",
          traducao: "celular",
          romaji: "kētai",
        },
        {
          palavra: "ケチャップ",
          traducao: "ketchup",
          romaji: "kechappu",
        },
      ],
    },
    ko: {
      letra: "ko",
      katakana: "コ",
      exemplos: [
        {
          palavra: "コーヒー",
          traducao: "café",
          romaji: "kōhī",
        },
        {
          palavra: "コンピュータ",
          traducao: "computador",
          romaji: "konpyūta",
        },
        {
          palavra: "コート",
          traducao: "casaco",
          romaji: "kōto",
        },
      ],
    },
    sa: {
      letra: "sa",
      katakana: "サ",
      exemplos: [
        {
          palavra: "サンドイッチ",
          traducao: "sanduíche",
          romaji: "sandoitchi",
        },
        {
          palavra: "サッカー",
          traducao: "futebol",
          romaji: "sakkā",
        },
        {
          palavra: "サラダ",
          traducao: "salada",
          romaji: "sarada",
        },
      ],
    },
    shi: {
      letra: "shi",
      katakana: "シ",
      exemplos: [
        {
          palavra: "ショッピング",
          traducao: "compras",
          romaji: "shoppingu",
        },
        {
          palavra: "シャワー",
          traducao: "chuveiro",
          romaji: "shawā",
        },
        {
          palavra: "シャツ",
          traducao: "camisa",
          romaji: "shatsu",
        },
      ],
    },
    su: {
      letra: "su",
      katakana: "ス",
      exemplos: [
        {
          palavra: "スーパー",
          traducao: "supermercado",
          romaji: "sūpā",
        },
        {
          palavra: "スポーツ",
          traducao: "esportes",
          romaji: "supōtsu",
        },
        {
          palavra: "スーツ",
          traducao: "terno",
          romaji: "sūtsu",
        },
      ],
    },
    se: {
      letra: "se",
      katakana: "セ",
      exemplos: [
        {
          palavra: "セーター",
          traducao: "suéter",
          romaji: "sētā",
        },
        {
          palavra: "センター",
          traducao: "centro",
          romaji: "sentā",
        },
        {
          palavra: "セレブ",
          traducao: "celebridade",
          romaji: "serebu",
        },
      ],
    },
    so: {
      letra: "so",
      katakana: "ソ",
      exemplos: [
        {
          palavra: "ソフトウェア",
          traducao: "software",
          romaji: "sofutowea",
        },
        {
          palavra: "ソング",
          traducao: "música",
          romaji: "songu",
        },
        {
          palavra: "ソファー",
          traducao: "sofá",
          romaji: "sofā",
        },
      ],
    },
    ta: {
      letra: "ta",
      katakana: "タ",
      exemplos: [
        {
          palavra: "タクシー",
          traducao: "táxi",
          romaji: "takushī",
        },
        {
          palavra: "タイム",
          traducao: "tempo",
          romaji: "taimu",
        },
        {
          palavra: "タワー",
          traducao: "torre",
          romaji: "tawā",
        },
      ],
    },
    ti: {
      letra: "ti",
      katakana: "チ",
      exemplos: [
        {
          palavra: "チョコレート",
          traducao: "chocolate",
          romaji: "chokorēto",
        },
        {
          palavra: "チケット",
          traducao: "ingresso",
          romaji: "chiketto",
        },
        {
          palavra: "チャンス",
          traducao: "chance",
          romaji: "chansu",
        },
      ],
    },
    tsu: {
      letra: "tsu",
      katakana: "ツ",
      exemplos: [
        {
          palavra: "ツアー",
          traducao: "turnê",
          romaji: "tsuā",
        },
        {
          palavra: "ツイッター",
          traducao: "Twitter",
          romaji: "tsuittā",
        },
        {
          palavra: "ツナ",
          traducao: "atum",
          romaji: "tsuna",
        },
      ],
    },
    te: {
      letra: "te",
      katakana: "テ",
      exemplos: [
        {
          palavra: "テスト",
          traducao: "teste",
          romaji: "tesuto",
        },
        {
          palavra: "テクニック",
          traducao: "técnica",
          romaji: "tekunikku",
        },
        {
          palavra: "テーブル",
          traducao: "mesa",
          romaji: "tēburu",
        },
      ],
    },
    to: {
      letra: "to",
      katakana: "ト",
      exemplos: [
        {
          palavra: "トマト",
          traducao: "tomate",
          romaji: "tomato",
        },
        {
          palavra: "トラック",
          traducao: "caminhão",
          romaji: "torakku",
        },
        {
          palavra: "トリック",
          traducao: "truque",
          romaji: "torikku",
        },
      ],
    },
    na: {
      letra: "na",
      katakana: "ナ",
      exemplos: [
        {
          palavra: "ナイフ",
          traducao: "faca",
          romaji: "naifu",
        },
        {
          palavra: "ナポリタン",
          traducao: "macarrão napolitano",
          romaji: "naporitan",
        },
        {
          palavra: "ナイト",
          traducao: "noite",
          romaji: "naito",
        },
      ],
    },
    ni: {
      letra: "ni",
      katakana: "ニ",
      exemplos: [
        {
          palavra: "ニュース",
          traducao: "notícias",
          romaji: "nyūsu",
        },
        {
          palavra: "ニューヨーク",
          traducao: "Nova York",
          romaji: "nyūyōku",
        },
        {
          palavra: "ニコチン",
          traducao: "nicotina",
          romaji: "nikochin",
        },
      ],
    },
    nu: {
      letra: "nu",
      katakana: "ヌ",
      exemplos: [
        {
          palavra: "ヌード",
          traducao: "nude",
          romaji: "nūdo",
        },
        {
          palavra: "ヌーメリック",
          traducao: "numérico",
          romaji: "nūmerikku",
        },
        {
          palavra: "ヌーメロ",
          traducao: "número",
          romaji: "nūmero",
        },
      ],
    },
    ne: {
      letra: "ne",
      katakana: "ネ",
      exemplos: [
        {
          palavra: "ネット",
          traducao: "internet",
          romaji: "nettō",
        },
        {
          palavra: "ネオン",
          traducao: "néon",
          romaji: "neon",
        },
        {
          palavra: "ネイティブ",
          traducao: "nativo",
          romaji: "neitibu",
        },
      ],
    },
    no: {
      letra: "no",
      katakana: "ノ",
      exemplos: [
        {
          palavra: "ノート",
          traducao: "caderno",
          romaji: "nōto",
        },
        {
          palavra: "ノーベル",
          traducao: "Nobel",
          romaji: "nōberu",
        },
        {
          palavra: "ノーマル",
          traducao: "normal",
          romaji: "nōmaru",
        },
      ],
    },
    ha: {
      letra: "ha",
      katakana: "ハ",
      exemplos: [
        {
          palavra: "ハンバーガー",
          traducao: "hambúrguer",
          romaji: "hanbāgā",
        },
        {
          palavra: "ハワイ",
          traducao: "Havaí",
          romaji: "hawai",
        },
        {
          palavra: "ハンドバッグ",
          traducao: "bolsa de mão",
          romaji: "handobaggu",
        },
      ],
    },
    hi: {
      letra: "hi",
      katakana: "ヒ",
      exemplos: [
        {
          palavra: "ヒマラヤ",
          traducao: "Himalaia",
          romaji: "himaraya",
        },
        {
          palavra: "ヒロシマ",
          traducao: "Hiroshima",
          romaji: "hiroshima",
        },
        {
          palavra: "ヒーロー",
          traducao: "herói",
          romaji: "hīrō",
        },
      ],
    },
    fu: {
      letra: "fu",
      katakana: "フ",
      exemplos: [
        {
          palavra: "フランス",
          traducao: "França",
          romaji: "furansu",
        },
        {
          palavra: "フットボール",
          traducao: "futebol",
          romaji: "futtobōru",
        },
        {
          palavra: "フェスティバル",
          traducao: "festival",
          romaji: "fesutibaru",
        },
      ],
    },
    he: {
      letra: "he",
      katakana: "ヘ",
      exemplos: [
        {
          palavra: "ヘッドフォン",
          traducao: "fones de ouvido",
          romaji: "heddofon",
        },
        {
          palavra: "ヘリコプター",
          traducao: "helicóptero",
          romaji: "herikoputā",
        },
        {
          palavra: "ヘルパー",
          traducao: "auxiliar",
          romaji: "herupā",
        },
      ],
    },
    ho: {
      letra: "ho",
      katakana: "ホ",
      exemplos: [
        {
          palavra: "ホテル",
          traducao: "hotel",
          romaji: "hoteru",
        },
        {
          palavra: "ホーム",
          traducao: "lar",
          romaji: "hōmu",
        },
        {
          palavra: "ホットドッグ",
          traducao: "hot dog",
          romaji: "hotto doggu",
        },
      ],
    },
    ma: {
      letra: "ma",
      katakana: "マ",
      exemplos: [
        {
          palavra: "マヨネーズ",
          traducao: "maionese",
          romaji: "mayonēzu",
        },
        {
          palavra: "マンゴー",
          traducao: "manga",
          romaji: "mangō",
        },
        {
          palavra: "マシン",
          traducao: "máquina",
          romaji: "mashin",
        },
      ],
    },

    mi: {
      letra: "mi",
      katakana: "ミ",
      exemplos: [
        {
          palavra: "ミュージック",
          traducao: "música",
          romaji: "myūjikku",
        },
        {
          palavra: "ミラー",
          traducao: "espelho",
          romaji: "mirā",
        },
        {
          palavra: "ミステリー",
          traducao: "mistério",
          romaji: "misuterī",
        },
      ],
    },

    mu: {
      letra: "mu",
      katakana: "ム",
      exemplos: [
        {
          palavra: "ムービー",
          traducao: "filme",
          romaji: "mūbī",
        },
        {
          palavra: "ムード",
          traducao: "humor, clima",
          romaji: "mūdo",
        },
        {
          palavra: "ムートン",
          traducao: "carneiro, pele de carneiro",
          romaji: "mūton",
        },
      ],
    },

    me: {
      letra: "me",
      katakana: "メ",
      exemplos: [
        {
          palavra: "メニュー",
          traducao: "cardápio",
          romaji: "menyū",
        },
        {
          palavra: "メッセージ",
          traducao: "mensagem",
          romaji: "messēji",
        },
        {
          palavra: "メモリー",
          traducao: "memória",
          romaji: "memorī",
        },
      ],
    },

    mo: {
      letra: "mo",
      katakana: "モ",
      exemplos: [
        {
          palavra: "モニター",
          traducao: "monitor",
          romaji: "monitā",
        },
        {
          palavra: "モーテル",
          traducao: "motel",
          romaji: "mōteru",
        },
        {
          palavra: "モデル",
          traducao: "modelo",
          romaji: "moderu",
        },
      ],
    },
    ya: {
      letra: "ya",
      katakana: "ヤ",
      exemplos: [
        {
          palavra: "ヤフー",
          traducao: "Yahoo",
          romaji: "yahū",
        },
        {
          palavra: "ヤング",
          traducao: "jovem",
          romaji: "yangu",
        },
        {
          palavra: "ヤシ",
          traducao: "coqueiro",
          romaji: "yashi",
        },
      ],
    },

    yu: {
      letra: "yu",
      katakana: "ユ",
      exemplos: [
        {
          palavra: "ユーモア",
          traducao: "humor",
          romaji: "yūmoa",
        },
        {
          palavra: "ユニーク",
          traducao: "único",
          romaji: "yunīku",
        },
        {
          palavra: "ユダヤ人",
          traducao: "judeu",
          romaji: "yudaya-jin",
        },
      ],
    },

    yo: {
      letra: "yo",
      katakana: "ヨ",
      exemplos: [
        {
          palavra: "ヨーロッパ",
          traducao: "Europa",
          romaji: "yōroppa",
        },
        {
          palavra: "ヨット",
          traducao: "iate",
          romaji: "yotto",
        },
        {
          palavra: "ヨーグルト",
          traducao: "iogurte",
          romaji: "yōguruto",
        },
      ],
    },
    ra: {
      letra: "ra",
      katakana: "ラ",
      exemplos: [
        {
          palavra: "ラーメン",
          traducao: "lamen",
          romaji: "rāmen",
        },
        {
          palavra: "ライオン",
          traducao: "leão",
          romaji: "raion",
        },
        {
          palavra: "ラジオ",
          traducao: "rádio",
          romaji: "rajio",
        },
      ],
    },
    ri: {
      letra: "ri",
      katakana: "リ",
      exemplos: [
        {
          palavra: "リーダー",
          traducao: "líder",
          romaji: "rīdā",
        },
        {
          palavra: "リンゴ",
          traducao: "maçã",
          romaji: "ringo",
        },
        {
          palavra: "リボン",
          traducao: "laço",
          romaji: "ribon",
        },
      ],
    },
    ru: {
      letra: "ru",
      katakana: "ル",
      exemplos: [
        {
          palavra: "ルール",
          traducao: "regra",
          romaji: "rūru",
        },
        {
          palavra: "ルーム",
          traducao: "quarto",
          romaji: "rūmu",
        },
        {
          palavra: "ルート",
          traducao: "rota",
          romaji: "rūto",
        },
      ],
    },
    re: {
      letra: "re",
      katakana: "レ",
      exemplos: [
        {
          palavra: "レストラン",
          traducao: "restaurante",
          romaji: "resutoran",
        },
        {
          palavra: "レモン",
          traducao: "limão",
          romaji: "remon",
        },
        {
          palavra: "レシピ",
          traducao: "receita",
          romaji: "reshipi",
        },
      ],
    },
    ro: {
      letra: "ro",
      katakana: "ロ",
      exemplos: [
        {
          palavra: "ロボット",
          traducao: "robô",
          romaji: "robotto",
        },
        {
          palavra: "ロック",
          traducao: "rock",
          romaji: "rokku",
        },
        {
          palavra: "ロマンチック",
          traducao: "romântico",
          romaji: "romanchikku",
        },
      ],
    },
    wa: {
      letra: "wa",
      katakana: "ワ",
      exemplos: [
        {
          palavra: "ワイン",
          traducao: "vinho",
          romaji: "wain",
        },
        {
          palavra: "ワールド",
          traducao: "mundo",
          romaji: "wārudo",
        },
        {
          palavra: "ワンピース",
          traducao: "vestido",
          romaji: "wanpīsu",
        },
      ],
    },
    wo: {
      letra: "wo",
      katakana: "ヲ",
    },
    n: {
      letra: "n",
      katakana: "ン",
      exemplos: [
        {
          palavra: "メンズ",
          traducao: "homens",
          romaji: "menzu",
        },
        {
          palavra: "ファン",
          traducao: "fã",
          romaji: "fuan",
        },
        {
          palavra: "チャンネル",
          traducao: "canal",
          romaji: "channeru",
        },
      ],
    },
  },
];

export default katakanaList;
