import Footer from "../components/Footer";
import Header from "../components/Header";
import N4Description from "../components/N4Description";
import NCards from "../components/NCards";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function JLPTN5() {
  return (
    <>
      <Header />
      <TitleAndSubtitle wordH3={"JLPT N4"} wordP={""} />
      <NCards number={4} />
      <N4Description />
      <Footer />
    </>
  );
}
