import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "../components/TitleAndSubtitle.module.scss";
import styleCard from "../Styles/CardsExercises.module.scss";

import { hiraganaList } from "../data/hiragana";
import { hiraganaDakuon } from "../data/hiragana";
import { hiraganaYoon } from "../data/hiragana";
import { katakanaList } from "../data/katakana";
import { katakanaDakuon } from "../data/katakana";
import { katakanaYoon } from "../data/katakana";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

import { useHistory, useParams } from "react-router-dom";
import ExerciseRomaji from "../components/ExerciseRomaji";
import { useState } from "react";

export default function HiraKanaExercises() {
  const history = useHistory();
  const { hiraOrKatakana } = useParams();
  const [list, setList] = useState("");
  const [listDakuon, setListDakuon] = useState("");
  const [listYoon, setListYoon] = useState("");
  const [listAll, setListAll] = useState("");
  const [componentExercise, setComponentExercise] = useState("");

  let exerciseComponent;
  switch (componentExercise) {
    case "basic":
      exerciseComponent = list;
      break;
    case "dakuon":
      exerciseComponent = listDakuon;
      break;
    case "yoon":
      exerciseComponent = listYoon;
      break;
    case "all":
      exerciseComponent = listAll;
      break;
    default:
      exerciseComponent = "";
      break;
  }

  const upWindowMobile = () => {
    if (window.innerWidth <= 768) {
      const halfPageHeight = window.innerHeight / 1;
      window.scrollTo({ top: halfPageHeight, left: 0, behavior: "smooth" });
    }
  }

  const handleClick = () => {
    upWindowMobile();

    setComponentExercise("basic");
    setList(hiraOrKatakana === "hiragana" ? hiraganaList : katakanaList);
  };

  const handleClickDakuon = () => {
    upWindowMobile();
    setComponentExercise("dakuon");
    setListDakuon(
      hiraOrKatakana === "hiragana" ? hiraganaDakuon : katakanaDakuon
    );
  };

  const handleClickYoon = () => {
    upWindowMobile();
    setComponentExercise("yoon");
    setListYoon(hiraOrKatakana === "hiragana" ? hiraganaYoon : katakanaYoon);
  };

  const handleClickALL = () => {
    upWindowMobile();
    setComponentExercise("all");
    const hiraganaAll = [...hiraganaList, ...hiraganaDakuon, ...hiraganaYoon];
    const katakanaAll = [...katakanaList, ...katakanaDakuon, ...katakanaYoon];
    setListAll(hiraOrKatakana === "hiragana" ? hiraganaAll : katakanaAll);
  };
  return (
    <>
      {hiraOrKatakana === "hiragana" || hiraOrKatakana === "katakana" ? (
        <div className={style.TitleAndSubtitle_container}>
          <Header />
          <TitleAndSubtitle
            wordH3={"Vamos Treinar! - 'Gambate!'"}
            wordP={
              "A palavra 'Gambate' é uma expressão que pode ser traduzida como 'Vai com tudo!' ou 'Força!'. É uma forma de encorajamento e apoio."
            }
          />
          <div className={styleCard.CardsExercises_container}>
            <h2
              className={styleCard.CardsExercises_itemBox}
              onClick={handleClick}
            >
              {hiraOrKatakana.toUpperCase()}
            </h2>

            <h2
              className={styleCard.CardsExercises_itemBox}
              onClick={handleClickDakuon}
            >
              {hiraOrKatakana.toUpperCase()} DAKUON
            </h2>

            <h2
              className={styleCard.CardsExercises_itemBox}
              onClick={handleClickYoon}
            >
              {hiraOrKatakana.toUpperCase()} YOON
            </h2>

            <h2
              className={styleCard.CardsExercises_itemBox}
              onClick={handleClickALL}
            >
              LISTA COMPLETA
            </h2>
          </div>
          {componentExercise === "" ? null : (
            <h6>Preencha com a forma de leitura dos caracteres</h6>
          )}

          <ExerciseRomaji caracterList={exerciseComponent} />
          <Footer />
        </div>
      ) : (
        history.push("/")
      )}
    </>
  );
}
