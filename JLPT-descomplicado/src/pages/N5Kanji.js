import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiPage from "../components/KanjiPage";

import { useSelector } from "react-redux";

import n5KanjiList from "../data/n5/n5Kanji";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";


export default function N5Kanji() {
  const kanjiState = useSelector((state) => state.nlevel);

  const kanji = n5KanjiList[kanjiState.posicao];

  const next = n5KanjiList[kanjiState.posicao + 1].significado
  return (
    <>
      <Header />
      <KanjiPage
        kanji={kanji}
        next={next}
        nivel={kanjiState.tipo}
        posicao={kanjiState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N5"} wordP={""} />
      <NCards number={5} />
      <Footer />
    </>
  );
}