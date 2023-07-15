import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import VocabularyList from "../components/VocabularyList";
import n2VocabList from "../data/n2/n2Vocabulario";

export default function N2VocabularyList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista do Vocabulário do nível JLPT N2"}
        wordP={"Clique no vocabulário para ver mais informações"}
      />
      <VocabularyList nivel={"jlpt-n2"} vocabulario={n2VocabList} />
      <Footer />
    </>
  );
}
