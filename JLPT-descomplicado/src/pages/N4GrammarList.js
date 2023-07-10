import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import GrammarList from "../components/GrammarList";
import n4Grammar from "../data/n4/n4Grammar";

export default function N4GrammarList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Gramática do nível JLPT N4"}
        wordP={"Clique no tópico para ver mais informações"}
      />
      <GrammarList nivel={"jlpt-n4"} grammar={n4Grammar} />
      <Footer />
    </>
  );
}
