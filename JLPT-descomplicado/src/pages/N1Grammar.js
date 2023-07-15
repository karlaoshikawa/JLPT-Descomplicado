import Footer from "../components/Footer";
import Header from "../components/Header";
import GrammarPage from "../components/GrammarPage";

import { useSelector } from "react-redux";

import n1GrammarList from "../data/n1/n1Grammar";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N1Grammar() {
  const grammarState = useSelector((state) => state.nlevel);

  const grammar = n1GrammarList[grammarState.posicao];

  const next = !n1GrammarList[grammarState.posicao + 1]
    ? ""
    : n1GrammarList[grammarState.posicao + 1].romaji;
  return (
    <>
      <Header />
      <GrammarPage
        grammar={grammar}
        next={next}
        nivel={grammarState.tipo}
        posicao={grammarState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N1"} wordP={""} />
      <NCards number={1} />
      <Footer />
    </>
  );
}
