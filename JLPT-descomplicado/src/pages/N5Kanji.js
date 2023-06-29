import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiPage from "../components/KanjiPage";

import { useSelector } from "react-redux";

import n5KanjiList from "../data/n5/n5Kanji";


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
        posicao={kanjiState.posicao + 1} />
      <Footer />
    </>
  )
}