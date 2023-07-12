import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiPage from "../components/KanjiPage";

import { useSelector } from "react-redux";

import n3KanjiList from "../data/n3/n3Kanji";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N3Kanji() {
  const kanjiState = useSelector((state) => state.nlevel);

  const kanji = n3KanjiList[kanjiState.posicao];

  const next = !n3KanjiList[kanjiState.posicao + 1]
    ? ""
    : n3KanjiList[kanjiState.posicao + 1].significado;
  
  return (
    <>
      <Header />
      <KanjiPage
        kanji={kanji}
        next={next}
        nivel={kanjiState.tipo}
        posicao={kanjiState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N3"} wordP={""} />
      <NCards number={5} />
      <Footer />
    </>
  );
}
