import Footer from "../components/Footer";
import Header from "../components/Header";
import VocabularyPage from "../components/VocabularyPage";

import n5VocabList from "../data/n5/n5Vocabulario";
import n4VocabList from "../data/n4/n4Vocabulario";
import n3VocabList from "../data/n3/n3Vocabulario";
import n2VocabList from "../data/n2/n2Vocabulario";
import n1VocabList from "../data/n1/n1Vocabulario";

import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import { useParams } from "react-router-dom";

export default function NVocabulary() {
  const { nlevel, index } = useParams();

    let vocabularyList;
    switch (nlevel) {
      case "n1":
        vocabularyList = n1VocabList;
        break;
      case "n2":
        vocabularyList = n2VocabList;
        break;
      case "n3":
        vocabularyList = n3VocabList;
        break;
      case "n4":
        vocabularyList = n4VocabList;
        break;
      case "n5":
        vocabularyList = n5VocabList;
        break;
      default:
        vocabularyList = "";
        break;
    }
  const vocabulary = vocabularyList[+index];

  const next = !vocabularyList[+index + 1]
    ? ""
    : vocabularyList[+index + 1].romaji;
  return (
    <>
      <Header />
      <VocabularyPage
        vocabulary={vocabulary}
        next={next}
        nivel={`jlpt-${nlevel}`}
        posicao={+index + 1}
      />
      <TitleAndSubtitle
        wordH3={`Veja mais sobre JLPT ${nlevel.toUpperCase()}`}
        wordP={""}
      />
      <NCards number={+nlevel.substring(1)} />
      <Footer />
    </>
  );
}
