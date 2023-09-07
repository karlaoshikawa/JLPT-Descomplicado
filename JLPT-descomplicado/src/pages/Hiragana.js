import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";
import style from '../components/TitleAndSubtitle.module.scss';

import { hiraganaList } from "../data/hiragana"
import { hiraganaDakuon } from "../data/hiragana"
import { hiraganaYoon } from "../data/hiragana"
import { katakanaList } from "../data/katakana";
import { katakanaDakuon } from "../data/katakana";
import { katakanaYoon } from "../data/katakana";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import OneCard from "../components/OneCard";

import { useHistory, useParams } from "react-router-dom";

export default function Hiragana() {
  const history = useHistory();
  const { hiraOrKatakana } = useParams();

console.log(hiraOrKatakana);
  return (
    <>
      {hiraOrKatakana === "hiragana" || hiraOrKatakana === "katakana" ? (
        <div className={style.TitleAndSubtitle_container}>
          <Header />
          <TitleAndSubtitle
            wordH3={"Exercícios"}
            wordP={"Clique no Caracter para ver os exemplos"}
          />
          <OneCard tipo={hiraOrKatakana} />
          <TitleAndSubtitle
            wordH3={hiraOrKatakana}
            wordP={"Clique no Caracter para ver os exemplos"}
          />
          <Table
            caracteres={
              hiraOrKatakana === "hiragana" ? hiraganaList : katakanaList
            }
            tipo="basic"
            katakana={hiraOrKatakana === "hiragana" ? false : true}
            data-testid={`${hiraOrKatakana}-list`}
          />

          <TitleAndSubtitle
            wordH3={`${hiraOrKatakana} Dakuon`}
            wordP={"Clique no Caracter para ver os exemplos"}
          />
          <Table
            caracteres={
              hiraOrKatakana === "hiragana" ? hiraganaDakuon : katakanaDakuon
            }
            tipo="Dakuon"
            katakana={hiraOrKatakana === "hiragana" ? false : true}
            data-testid={`${hiraOrKatakana}-dakuon-list`}
          />

          <TitleAndSubtitle
            wordH3={`${hiraOrKatakana} Yoon`}
            wordP={"Clique no Caracter para ver os exemplos"}
          />
          <Table
            caracteres={
              hiraOrKatakana === "hiragana" ? hiraganaYoon : katakanaYoon
            }
            tipo="Yoon"
            katakana={hiraOrKatakana === "hiragana" ? false : true}
            data-testid={`${hiraOrKatakana}-Yoon-list`}
          />
          <Footer />
        </div>
      ) : (
        history.push("/")
      )}
    </>
  );
}