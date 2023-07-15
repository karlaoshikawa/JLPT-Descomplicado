import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiList from "../components/KanjiList";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import n1KanjiList from "../data/n1/n1Kanji";

export default function N1KanjiList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Kanji do nível JLPT N1"}
        wordP={"Clique no Kanji para ver mais informações"}
      />
      <KanjiList nivel={"jlpt-n1"} kanji={n1KanjiList} />
      <Footer />
    </>
  );
}