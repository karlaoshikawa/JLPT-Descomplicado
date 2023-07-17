import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import VocabularyList from "../components/VocabularyList";
import n3VocabList from "../data/n3/n3Vocabulario";

export default function N3VocabularyList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista do Vocabulário do nível JLPT N3"}
        wordP={"Clique no vocabulário para ver mais informações"}
      />
      <VocabularyList nivel={"jlpt-n3"} vocabulario={n3VocabList} />
      <Footer />
    </>
  );
}
