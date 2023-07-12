import Footer from "../components/Footer";
import Header from "../components/Header";
import VocabularyPage from "../components/VocabularyPage";

import { useSelector } from "react-redux";

import n3VocabList from "../data/n3/n3Vocabulario";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N3Vocabulary() {
  const vocabularyState = useSelector((state) => state.nlevel);

  const vocabulary = n3VocabList[vocabularyState.posicao];

  const next = !n3VocabList[vocabularyState.posicao + 1]
    ? ""
    : n3VocabList[vocabularyState.posicao + 1].romaji;
  return (
    <>
      <Header />
      <VocabularyPage
        vocabulary={vocabulary}
        next={next}
        nivel={vocabularyState.tipo}
        posicao={vocabularyState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N3"} wordP={""} />
      <NCards number={3} />
      <Footer />
    </>
  );
}
