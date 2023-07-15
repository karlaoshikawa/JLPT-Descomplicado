import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import GrammarList from "../components/GrammarList";
import n2Grammar from "../data/n2/n2Grammar";

export default function N3GrammarList() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"Lista de Gramática do nível JLPT N3"}
        wordP={"Clique no tópico para ver mais informações"}
      />
      <GrammarList nivel={"jlpt-n2"} grammar={n2Grammar} />
      <Footer />
    </>
  );
}
