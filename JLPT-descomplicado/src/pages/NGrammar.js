import Footer from "../components/Footer";
import Header from "../components/Header";
import GrammarPage from "../components/GrammarPage";

import n5Grammar from "../data/n5/N5Grammar";
import n4Grammar from "../data/n4/n4Grammar";
import n3Grammar from "../data/n3/n3Grammar";
import n2Grammar from "../data/n2/n2Grammar";
import n1Grammar from "../data/n1/n1Grammar";

import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import { useParams } from "react-router-dom";

export default function N1Grammar() {
  const { nlevel, index } = useParams();

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

  const grammar = grammarList[index];

  const next = !grammarList[+index + 1] ? "" : grammarList[+index + 1].romaji;
  return (
    <>
      <Header />
      <GrammarPage
        grammar={grammar}
        next={next.split(" ")[0][0]}
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
