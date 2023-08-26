import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import VocabularyList from "../components/VocabularyList";
import n5VocabList from "../data/n5/n5Vocabulario";
import n4VocabList from "../data/n4/n4Vocabulario";
import n3VocabList from "../data/n3/n3Vocabulario";
import n2VocabList from "../data/n2/n2Vocabulario";
import n1VocabList from "../data/n1/n1Vocabulario";
import { useParams } from "react-router-dom";

export default function NVocabularyList() {
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
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={`Lista do Vocabulário do nível JLPT ${nlevel.toUpperCase()}`}
        wordP={"Clique no vocabulário para ver mais informações"}
      />
      <VocabularyList nivel={`jlpt-${nlevel}`} vocabulario={vocabularyList} />
      <Footer />
    </>
  );
}
