import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiPage from "../components/KanjiPage";

import { useSelector } from "react-redux";

import n2KanjiList from "../data/n2/n2Kanji";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N2Kanji() {
  const kanjiState = useSelector((state) => state.nlevel);

  const kanji = n2KanjiList[kanjiState.posicao];

  const next = !n2KanjiList[kanjiState.posicao + 1]
    ? ""
    : n2KanjiList[kanjiState.posicao + 1].significado;
  
  return (
    <>
      <Header />
      <KanjiPage
        kanji={kanji}
        next={next}
        nivel={kanjiState.tipo}
        posicao={kanjiState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N2"} wordP={""} />
      <NCards number={2} />
      <Footer />
    </>
  );
}
