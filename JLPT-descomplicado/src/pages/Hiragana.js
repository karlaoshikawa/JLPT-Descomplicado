import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";
import style from '../components/TitleAndSubtitle.module.scss';

import { hiraganaList } from "../data/hiragana"
import { hiraganaDakuon } from "../data/hiragana"
import { hiraganaYoon } from "../data/hiragana"
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function Hiragana() {
  return (
    <div className={style.TitleAndSubtitle_container}>
      <Header />
      <TitleAndSubtitle
        wordH3={"Hiragana"}
        wordP={"Clique no Caracter para ver os exemplos"}
      />
      <Table caracteres={hiraganaList} data-testid="hiragana-list" />

      <TitleAndSubtitle
        wordH3={"Hiragana Dakuon"}
        wordP={"Clique no Caracter para ver os exemplos"}
      />
      <Table
        caracteres={hiraganaDakuon}
        tipo="Dakuon"
        data-testid="hiragana-dakuon-list"
      />

      <TitleAndSubtitle
        wordH3={"Hiragana Yoon"}
        wordP={"Clique no Caracter para ver os exemplos"}
      />
      <Table
        caracteres={hiraganaYoon}
        tipo="Yoon"
        data-testid="hiragana-Yoon-list"
      />
      <Footer />
    </div>
  );
}