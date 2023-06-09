import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiList from "../components/KanjiList";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import n5KanjiList from "../data/n5/n5Kanji";
import n4KanjiList from "../data/n4/n4Kanji";

export default function N5KanjiList() {
  console.log(n4KanjiList.length);
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Kanji do nível JLPT N5"}
        wordP={"Clique no Kanji para ver mais informações"}
      />
      <KanjiList nivel={"jlpt-n5"} kanji={n5KanjiList} />
      <Footer />
    </>
  );
}