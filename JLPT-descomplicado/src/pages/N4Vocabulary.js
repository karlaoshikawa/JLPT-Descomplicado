import Footer from "../components/Footer";
import Header from "../components/Header";
import VocabularyPage from "../components/VocabularyPage";

import { useSelector } from "react-redux";

import n4VocabList from "../data/n4/n4Vocabulario";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N4Vocabulary() {
  const vocabularyState = useSelector((state) => state.nlevel);

  const vocabulary = n4VocabList[vocabularyState.posicao];

  const next = !n4VocabList[vocabularyState.posicao + 1]
    ? ""
    : n4VocabList[vocabularyState.posicao + 1].romaji;
  
  return (
    <>
      <Header />
      <VocabularyPage
        vocabulary={vocabulary}
        next={next}
        nivel={vocabularyState.tipo}
        posicao={vocabularyState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N4"} wordP={""} />
      <NCards number={4} />
      <Footer />
    </>
  );
}
