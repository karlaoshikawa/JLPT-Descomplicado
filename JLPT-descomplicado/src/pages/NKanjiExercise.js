import Footer from "../components/Footer";
import Header from "../components/Header";

import { useParams } from "react-router-dom";

import n1KanjiList from "../data/n1/n1Kanji";
import n2KanjiList from "../data/n2/n2Kanji";
import n3KanjiList from "../data/n3/n3Kanji";
import n4KanjiList from "../data/n4/n4Kanji";
import n5KanjiList from "../data/n5/n5Kanji";

import NCards from "../components/NCards";
import ExerciseKanji from "../components/ExerciseKanji";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function NKanjiExercise() {
  const { nlevel } = useParams();
  console.log(nlevel );

  let kanjiList;
  switch (nlevel) {
    case "n1":
      kanjiList = n1KanjiList;
      break;
    case "n2":
      kanjiList = n2KanjiList;
      break;
    case "n3":
      kanjiList = n3KanjiList;
      break;
    case "n4":
      kanjiList = n4KanjiList;
      break;
    case "n5":
      kanjiList = n5KanjiList;
      break;
    default:
      kanjiList = "";
      break;
  }

 
  return (
    <>
      <Header />

      <TitleAndSubtitle
        wordH3={"Vamos Treinar! - 'Gambate!'"}
        wordP={
          "A palavra 'Gambate' é uma expressão que pode ser traduzida como 'Vai com tudo!' ou 'Força!'. É uma forma de encorajamento e apoio."
        }
      />
      <ExerciseKanji kanjiList={kanjiList} />
      <NCards number={+nlevel.substring(1)} />
      <Footer />
    </>
  );
}
