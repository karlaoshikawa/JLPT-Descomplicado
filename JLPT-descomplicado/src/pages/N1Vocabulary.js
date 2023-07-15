import Footer from "../components/Footer";
import Header from "../components/Header";
import VocabularyPage from "../components/VocabularyPage";

import { useSelector } from "react-redux";

import n1VocabList from "../data/n1/n1Vocabulario";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N1Vocabulary() {
  const vocabularyState = useSelector((state) => state.nlevel);

  const vocabulary = n1VocabList[vocabularyState.posicao];

  const next = !n1VocabList[vocabularyState.posicao + 1]
    ? ""
    : n1VocabList[vocabularyState.posicao + 1].romaji;
  return (
    <>
      <Header />
      <VocabularyPage
        vocabulary={vocabulary}
        next={next}
        nivel={vocabularyState.tipo}
        posicao={vocabularyState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N1"} wordP={""} />
      <NCards number={1} />
      <Footer />
    </>
  );
}
