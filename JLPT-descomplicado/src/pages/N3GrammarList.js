import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import GrammarList from "../components/GrammarList";
import n3Grammar from "../data/n3/n3Grammar";

export default function N3GrammarList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Gramática do nível JLPT N3"}
        wordP={"Clique no tópico para ver mais informações"}
      />
      <GrammarList nivel={"jlpt-n3"} grammar={n3Grammar} />
      <Footer />
    </>
  );
}
