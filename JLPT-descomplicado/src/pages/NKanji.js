import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiPage from "../components/KanjiPage";

import { useParams } from "react-router-dom";

import n1KanjiList from "../data/n1/n1Kanji";
import n2KanjiList from "../data/n2/n2Kanji";
import n3KanjiList from "../data/n3/n3Kanji";
import n4KanjiList from "../data/n4/n4Kanji";
import n5KanjiList from "../data/n5/n5Kanji";

import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N1Kanji() {
  const { nlevel, index} = useParams();

  let kanjiList;
  switch (nlevel) {
    case "n1":
      kanjiList = n1KanjiList;
      break;
    case "n2":
      kanjiList = n2KanjiList;
      break;
    case "n3":
      kanjiList = n3KanjiList;
      break;
    case "n4":
      kanjiList = n4KanjiList;
      break;
    case "n5":
      kanjiList = n5KanjiList;
      break;
    default:
      kanjiList = "";
      break;
  }

  const kanji = kanjiList[+index];

  const next = !kanjiList[+index + 1]
    ? ""
    : kanjiList[+index + 1].significado;
  console.log(kanjiList[+index + 1].significado);
  return (
    <>
      <Header />
      <KanjiPage
        kanji={kanji}
        next={next}
        nivel={`jlpt-${nlevel}`}
        posicao={+index + 1}
      />
      <TitleAndSubtitle
        wordH3={`Veja mais sobre JLPT ${nlevel.toUpperCase()}`}
        wordP={""}
      />
      <NCards number={+nlevel.substring(1)} />
      <Footer />
    </>
  );
}
