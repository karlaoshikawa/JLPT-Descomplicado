import Footer from "../components/Footer";
import Header from "../components/Header";
import GrammarPage from "../components/GrammarPage";

import { useSelector } from "react-redux";

import n2GrammarList from "../data/n2/n2Grammar";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N2Grammar() {
  const grammarState = useSelector((state) => state.nlevel);

  const grammar = n2GrammarList[grammarState.posicao];

  const next = !n2GrammarList[grammarState.posicao + 1]
    ? ""
    : n2GrammarList[grammarState.posicao + 1].romaji;
  return (
    <>
      <Header />
      <GrammarPage
        grammar={grammar}
        next={next}
        nivel={grammarState.tipo}
        posicao={grammarState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N2"} wordP={""} />
      <NCards number={2} />
      <Footer />
    </>
  );
}
