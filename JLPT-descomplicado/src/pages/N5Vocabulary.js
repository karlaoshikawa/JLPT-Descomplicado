import Footer from "../components/Footer";
import Header from "../components/Header";
import VocabularyPage from "../components/VocabularyPage";

import { useSelector } from "react-redux";

import n5VocabList from "../data/n5/n5Vocabulario";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function N5Kanji() {
  const vocabularyState = useSelector((state) => state.nlevel);

  const vocabulary = n5VocabList[vocabularyState.posicao];

  const next = n5VocabList[vocabularyState.posicao + 1].romaji;
  return (
    <>
      <Header />
      <VocabularyPage
        vocabulary={vocabulary}
        next={next}
        nivel={vocabularyState.tipo}
        posicao={vocabularyState.posicao + 1}
      />
      <TitleAndSubtitle wordH3={"Veja mais sobre JLPT N5"} wordP={""} />
      <NCards number={5} />
      <Footer />
    </>
  );
}
