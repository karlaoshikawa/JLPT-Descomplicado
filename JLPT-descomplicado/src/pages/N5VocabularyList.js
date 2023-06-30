import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import VocabularyList from "../components/VocabularyList";
import n5VocabList from "../data/n5/n5Vocabulario";

export default function N5VocabularyList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista do Vocabulário do nível JLPT N5"}
        wordP={"Clique no vocabulário para ver os exemplos"}
      />
      <VocabularyList nivel={"jlpt-n5"} vocabulario={n5VocabList} />
      <Footer />
    </>
  );
}
