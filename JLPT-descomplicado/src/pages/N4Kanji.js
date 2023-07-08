import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiPage from "../components/KanjiPage";

import { useSelector } from "react-redux";

import n4KanjiList from "../data/n4/n4Kanji";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N5Kanji() {
  const kanjiState = useSelector((state) => state.nlevel);

  const kanji = n4KanjiList[kanjiState.posicao];

  const next = n4KanjiList[kanjiState.posicao + 1].significado;
  return (
    <>
      <Header />
      <KanjiPage
        kanji={kanji}
        next={next}
        nivel={kanjiState.tipo}
        posicao={kanjiState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N4"} wordP={""} />
      <NCards number={4} />
      <Footer />
    </>
  );
}
