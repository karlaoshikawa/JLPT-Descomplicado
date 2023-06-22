import Footer from "../components/Footer";
import Header from "../components/Header";
import N5Description from "../components/N5Description";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function JLPTN5() {
  return (
    <>
      <Header />
      <N5Description />
      <TitleAndSubtitle
        wordH3={"JLPT N5 - Lista de Kanji"}
        wordP={"Clique no Caracter para ver mais informações"}
      />
      <Footer />
    </>
  );
}
