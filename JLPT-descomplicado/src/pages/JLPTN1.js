import Footer from "../components/Footer";
import Header from "../components/Header";
import N1Description from "../components/N1Description";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function JLPTN1() {
  return (
    <>
      <Header />
      <TitleAndSubtitle
        wordH3={"JLPT N1"}
        wordP={""}
      />
      <NCards number={1} />
      <N1Description />
      <Footer />
    </>
  );
}
