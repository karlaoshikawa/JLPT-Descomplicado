import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import GrammarList from "../components/GrammarList";
import n1Grammar from "../data/n1/n1Grammar";

export default function N1GrammarList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Gramática do nível JLPT N1"}
        wordP={"Clique no tópico para ver mais informações"}
      />
      <GrammarList nivel={"jlpt-n1"} grammar={n1Grammar} />
      <Footer />
    </>
  );
}
