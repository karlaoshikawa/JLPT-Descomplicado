import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "../components/TitleAndSubtitle.module.scss";

import { hiraganaList } from "../data/hiragana";
import { hiraganaDakuon } from "../data/hiragana";
import { hiraganaYoon } from "../data/hiragana";
import { katakanaList } from "../data/katakana";
import { katakanaDakuon } from "../data/katakana";
import { katakanaYoon } from "../data/katakana";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

import { useHistory, useParams } from "react-router-dom";
import ExerciseRomaji from "../components/ExerciseRomaji";
import {useState } from "react";

export default function HiraKanaExercises() {
  const history = useHistory();
  const { hiraOrKatakana } = useParams();
  const [list, setList] = useState("");
  const [listDakuon, setListDakuon] = useState("");
  const [listYoon, setListYoon] = useState("");
  const [componentExercise, setComponentExercise] = useState("");

  let exerciseComponent;
  switch (componentExercise) {
    case "basic":
      exerciseComponent = <ExerciseRomaji caracterList={list} />;
      break;
    case "dakuon":
      exerciseComponent = <ExerciseRomaji caracterList={listDakuon} />;
      break;
    case "yoon":
      exerciseComponent = <ExerciseRomaji caracterList={listYoon} />;
      break;
    default:
      exerciseComponent = "";
      break;
  }

  const handleClick = () => {
    setComponentExercise("basic");
    setList(hiraOrKatakana === "hiragana" ? hiraganaList : katakanaList);
  };

  const handleClickDakuon = () => {
    setComponentExercise("dakuon");
    setListDakuon(hiraOrKatakana === "hiragana" ? hiraganaDakuon : katakanaDakuon);
  };

  const handleClickYoon = () => {
    setComponentExercise("yoon");
    setListYoon(hiraOrKatakana === "hiragana" ? hiraganaYoon : katakanaYoon);
  };

  return (
    <>
      {hiraOrKatakana === "hiragana" || hiraOrKatakana === "katakana" ? (
        <div className={style.TitleAndSubtitle_container}>
          <Header />
          <TitleAndSubtitle wordH3={hiraOrKatakana.toUpperCase()} wordP={""} />
          <p onClick={handleClick}>{hiraOrKatakana.toUpperCase()}</p>
          {/* <ExerciseRomaji caracterList={list} /> */}
          <TitleAndSubtitle
            wordH3={`${hiraOrKatakana.toUpperCase()} Dakuon`}
            wordP={""}
          />
          <p onClick={handleClickDakuon}>{hiraOrKatakana.toUpperCase()}</p>
          {/* <ExerciseRomaji caracterList={listDakuon} /> */}
          <TitleAndSubtitle
            wordH3={`${hiraOrKatakana.toUpperCase()} Yoon`}
            wordP={""}
          />
          <p onClick={handleClickYoon}>{hiraOrKatakana.toUpperCase()}</p>
          {/* <ExerciseRomaji caracterList={listYoon} /> */}
          {exerciseComponent}
          <Footer />
        </div>
      ) : (
        history.push("/")
      )}
    </>
  );
}
