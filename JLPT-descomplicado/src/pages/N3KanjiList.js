import Footer from "../components/Footer";
import Header from "../components/Header";
import KanjiList from "../components/KanjiList";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import n3KanjiList from "../data/n3/n3Kanji";

export default function N3KanjiList() {
  console.log(n3KanjiList.length);
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Kanji do nível JLPT N3"}
        wordP={"Clique no Kanji para ver mais informações"}
      />
      <KanjiList nivel={"jlpt-n3"} kanji={n3KanjiList} />
      <Footer />
    </>
  );
}