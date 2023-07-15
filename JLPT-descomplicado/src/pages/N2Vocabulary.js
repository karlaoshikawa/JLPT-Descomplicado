import Footer from "../components/Footer";
import Header from "../components/Header";
import VocabularyPage from "../components/VocabularyPage";

import { useSelector } from "react-redux";

import n2VocabList from "../data/n2/n2Vocabulario";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N2Vocabulary() {
  const vocabularyState = useSelector((state) => state.nlevel);

  const vocabulary = n2VocabList[vocabularyState.posicao];

  const next = !n2VocabList[vocabularyState.posicao + 1]
    ? ""
    : n2VocabList[vocabularyState.posicao + 1].romaji;
  return (
    <>
      <Header />
      <VocabularyPage
        vocabulary={vocabulary}
        next={next}
        nivel={vocabularyState.tipo}
        posicao={vocabularyState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N2"} wordP={""} />
      <NCards number={2} />
      <Footer />
    </>
  );
}
