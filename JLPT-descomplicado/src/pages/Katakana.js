import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";
import style from "../components/TitleAndSubtitle.module.scss";

import { katakanaList } from "../data/katakana";
import { katakanaDakuon } from "../data/katakana";
import { katakanaYoon } from "../data/katakana";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

import { useParams } from "react-router-dom";

export default function Katakana() {
  const { katakana } = useParams();
  console.log(katakana);
  return (
    <>
      {katakana === "katakana" ? (
        <div className={style.TitleAndSubtitle_container}>
          <Header />
          <TitleAndSubtitle
            wordH3={"Katakana"}
            wordP={"Clique no Caracter para ver os exemplos"}
          />
          <Table caracteres={katakanaList} katakana={true} />

          <TitleAndSubtitle
            wordH3={"Katakana Dakuon"}
            wordP={"Clique no Caracter para ver os exemplos"}
          />
          <Table caracteres={katakanaDakuon} tipo="Dakuon" katakana={true} />

          <TitleAndSubtitle
            wordH3={"Katakana Yoon"}
            wordP={"Clique no Caracter para ver os exemplos"}
          />
          <Table caracteres={katakanaYoon} tipo="Yoon" katakana={true} />
          <Footer />
        </div>
      ) : null}
    </>
  );
}
