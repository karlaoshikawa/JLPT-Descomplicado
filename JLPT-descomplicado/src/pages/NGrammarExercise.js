import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import ExerciseGrammar from "../components/ExerciseGrammar";
import n5Grammar from "../data/n5/N5Grammar";
import n4Grammar from "../data/n4/n4Grammar";
import n3Grammar from "../data/n3/n3Grammar";
import n2Grammar from "../data/n2/n2Grammar";
import n1Grammar from "../data/n1/n1Grammar";
import { useParams } from "react-router-dom";
import NCards from "../components/NCards";

export default function GrammarExercises() {
  const { nlevel } = useParams();

  let grammarList;
  switch (nlevel) {
    case "n1":
      grammarList = n1Grammar;
      break;
    case "n2":
      grammarList = n2Grammar;
      break;
    case "n3":
      grammarList = n3Grammar;
      break;
    case "n4":
      grammarList = n4Grammar;
      break;
    case "n5":
      grammarList = n5Grammar;
      break;
    default:
      grammarList = "";
      break;
  }
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={`Vamos Treinar! Gramática ${nlevel.toUpperCase()} - 'Gambate!'`}
        wordP={
          "A palavra 'Gambate' é uma expressão que pode ser traduzida como 'Vai com tudo!' ou 'Força!'. É uma forma de encorajamento e apoio."
        }
      />
      <ExerciseGrammar grammarList={grammarList} />
      <TitleAndSubtitle
        wordH3={`Veja mais sobre JLPT ${nlevel.toUpperCase()}`}
        wordP={""}
      />
      <NCards number={+nlevel.substring(1)} />
      <Footer />
    </>
  );
}
