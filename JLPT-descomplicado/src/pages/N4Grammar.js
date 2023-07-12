import Footer from "../components/Footer";
import Header from "../components/Header";
import GrammarPage from "../components/GrammarPage";

import { useSelector } from "react-redux";

import n4GrammarList from "../data/n4/n4Grammar";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N4Grammar() {
  const grammarState = useSelector((state) => state.nlevel);

  const grammar = n4GrammarList[grammarState.posicao];

  const next = !n4GrammarList[grammarState.posicao + 1]
    ? ""
    : n4GrammarList[grammarState.posicao + 1].romaji;
  return (
    <>
      <Header />
      <GrammarPage
        grammar={grammar}
        next={next}
        nivel={grammarState.tipo}
        posicao={grammarState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N4"} wordP={""} />
      <NCards number={4} />
      <Footer />
    </>
  );
}
