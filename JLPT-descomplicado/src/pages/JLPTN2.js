import Footer from "../components/Footer";
import Header from "../components/Header";
import N2Description from "../components/N2Description";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function JLPTN2() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"JLPT N2"}
        wordP={""}
      />
      <NCards number={2} />
      <N2Description />
      <Footer />
    </>
  );
}
