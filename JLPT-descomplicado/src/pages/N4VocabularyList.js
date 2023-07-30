import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import VocabularyList from "../components/VocabularyList";
import n4VocabList from "../data/n4/n4Vocabulario";

export default function N4VocabularyList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista do Vocabulário do nível JLPT N4"}
        wordP={"Clique no vocabulário para ver mais informações"}
      />
      <VocabularyList nivel={"jlpt-n4"} vocabulario={n4VocabList} />
      <Footer />
    </>
  );
}
