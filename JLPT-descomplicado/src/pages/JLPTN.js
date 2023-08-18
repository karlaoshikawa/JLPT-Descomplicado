import Footer from "../components/Footer";
import Header from "../components/Header";
import N1Description from "../components/N1Description";
import N2Description from "../components/N2Description";
import N3Description from "../components/N3Description";
import N4Description from "../components/N4Description";
import N5Description from "../components/N5Description";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import { useParams } from "react-router-dom";

export default function JLPTN() {
  const { jlptN } = useParams();

  const jlptLevel = jlptN.replace(/[^0-9]/g, "");
  let description;
  switch (jlptLevel) {
    case 1:
      description = <N1Description />;
      break;
    case 2:
      description = <N2Description />;
      break;
    case 3:
      description = <N3Description />;
      break;
    case 4:
      description = <N4Description />;
      break;
    case 5:
      description = <N5Description />;
      break;
    default:
      description = "";
      break;
  };

  console.log("parans", jlptN, jlptLevel, description);
  return (
    <>
      <Header />
      <TitleAndSubtitle wordH3={`JLPT N${jlptLevel}`} wordP={""} />
      <NCards number={jlptLevel} />
      {description}
      {/* <N1Description /> */}
      <Footer />
    </>
  );
}
