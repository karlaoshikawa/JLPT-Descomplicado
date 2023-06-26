import Footer from "../components/Footer";
import Header from "../components/Header";
import N5Description from "../components/N5Description";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function JLPTN5() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"JLPT N5"}
        wordP={""}
      />
      <NCards number={5} />
      <N5Description />
      <Footer />
    </>
  );
}
