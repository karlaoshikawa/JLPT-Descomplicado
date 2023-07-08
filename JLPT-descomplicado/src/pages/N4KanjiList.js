import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiList from "../components/KanjiList";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import n4KanjiList from "../data/n4/n4Kanji";

export default function N4KanjiList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Kanji do nível JLPT N4"}
        wordP={"Clique no Kanji para ver mais informações"}
      />
      <KanjiList nivel={"jlpt-n4"} kanji={n4KanjiList} />
      <Footer />
    </>
  );
}