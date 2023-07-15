import Footer from "../components/Footer";
import Header from "../components/Header";
import N3Description from "../components/N3Description";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function JLPTN3() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"JLPT N3"}
        wordP={""}
      />
      <NCards number={3} />
      <N3Description />
      <Footer />
    </>
  );
}
