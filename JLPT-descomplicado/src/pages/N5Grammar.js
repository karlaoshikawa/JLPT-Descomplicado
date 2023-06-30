import Footer from "../components/Footer";
import Header from "../components/Header";
import GrammarPage from "../components/GrammarPage";

import { useSelector } from "react-redux";

import n5GrammarList from "../data/n5/N5Grammar";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N5Grammar() {
  const grammarState = useSelector((state) => state.nlevel);

  const grammar = n5GrammarList[grammarState.posicao];

  const next = n5GrammarList[grammarState.posicao + 1].romaji;
  return (
    <>
      <Header />
      <GrammarPage
        grammar={grammar}
        next={next}
        nivel={grammarState.tipo}
        posicao={grammarState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N5"} wordP={""} />
      <NCards number={5} />
      <Footer />
    </>
  );
}
