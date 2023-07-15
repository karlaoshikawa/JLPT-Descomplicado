import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiPage from "../components/KanjiPage";

import { useSelector } from "react-redux";

import n1KanjiList from "../data/n1/n1Kanji";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N1Kanji() {
  const kanjiState = useSelector((state) => state.nlevel);

  const kanji = n1KanjiList[kanjiState.posicao];

  const next = !n1KanjiList[kanjiState.posicao + 1]
    ? ""
    : n1KanjiList[kanjiState.posicao + 1].significado;
  
  return (
    <>
      <Header />
      <KanjiPage
        kanji={kanji}
        next={next}
        nivel={kanjiState.tipo}
        posicao={kanjiState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N1"} wordP={""} />
      <NCards number={1} />
      <Footer />
    </>
  );
}
