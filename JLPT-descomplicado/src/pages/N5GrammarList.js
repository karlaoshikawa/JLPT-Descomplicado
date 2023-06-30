import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import GrammarList from "../components/GrammarList";
import n5Grammar from "../data/n5/N5Grammar";

export default function N5GrammarList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Gramática do nível JLPT N5"}
        wordP={"Clique no tópico para ver mais detalhes"}
      />
      <GrammarList nivel={"jlpt-n5"} grammar={n5Grammar} />
      <Footer />
    </>
  );
}
