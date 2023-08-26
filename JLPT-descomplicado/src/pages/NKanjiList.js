import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiList from "../components/KanjiList";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import n1KanjiList from "../data/n1/n1Kanji";
import n2KanjiList from "../data/n2/n2Kanji";
import n3KanjiList from "../data/n3/n3Kanji";
import n4KanjiList from "../data/n4/n4Kanji";
import n5KanjiList from "../data/n5/n5Kanji";

import { useParams } from "react-router-dom";

export default function NKanjiList() {
  const { nlevel } = useParams();

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

  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={`Lista de Kanji do nível JLPT ${nlevel.toUpperCase()}`}
        wordP={"Clique no Kanji para ver mais informações"}
      />
      <KanjiList nivel={`jlpt-${nlevel}`} kanji={kanjiList} />
      <Footer />
    </>
  );
}