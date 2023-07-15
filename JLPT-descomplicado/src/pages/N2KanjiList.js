import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiList from "../components/KanjiList";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import n2KanjiList from "../data/n2/n2Kanji";

export default function N2KanjiList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Kanji do nível JLPT N2"}
        wordP={"Clique no Kanji para ver mais informações"}
      />
      <KanjiList nivel={"jlpt-n2"} kanji={n2KanjiList} />
      <Footer />
    </>
  );
}