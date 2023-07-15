import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import VocabularyList from "../components/VocabularyList";
import n1VocabList from "../data/n1/n1Vocabulario";

export default function N1VocabularyList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista do Vocabulário do nível JLPT N1"}
        wordP={"Clique no vocabulário para ver mais informações"}
      />
      <VocabularyList nivel={"jlpt-n1"} vocabulario={n1VocabList} />
      <Footer />
    </>
  );
}
