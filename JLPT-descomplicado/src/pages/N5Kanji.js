import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiPage from "../components/KanjiPage";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import n5KanjiList from "../data/n5/n5Kanji";

export default function N5Kanji() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Kanji do nível JLPT N5"}
        wordP={"Clique no Kanji para ver os exemplos"}
      />
      <KanjiPage nivel={"jlpt-n5"} kanji={n5KanjiList} />
      <Footer />
    </>
  );
}