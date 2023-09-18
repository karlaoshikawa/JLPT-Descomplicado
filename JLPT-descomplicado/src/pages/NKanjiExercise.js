import Footer from "../components/Footer";
import Header from "../components/Header";

import { useParams } from "react-router-dom";

import n1KanjiList from "../data/n1/n1Kanji";
import n2KanjiList from "../data/n2/n2Kanji";
import n3KanjiList from "../data/n3/n3Kanji";
import n4KanjiList from "../data/n4/n4Kanji";
import n5KanjiList from "../data/n5/n5Kanji";

import NCards from "../components/NCards";
import ExerciseKanji from "../components/ExerciseKanji";
import ExerciseKanjiFurigana from "../components/ExerciseKanjiFurigana";
import instagramChamada from "../images/instagramBanner.webp";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import styleCard from "../Styles/CardsExercises.module.scss";
import style from "../components/ExerciseKanji.module.scss";
import { useState } from "react";

export default function NKanjiExercise() {
  const { nlevel } = useParams();
  const [exerciseType, setExerciseType] = useState();

  let kanjiList;
  switch (nlevel) {
    case "n1":
      kanjiList = n1KanjiList;
      break;
    case "n2":
      kanjiList = n2KanjiList;
      break;
    case "n3":
      kanjiList = n3KanjiList;
      break;
    case "n4":
      kanjiList = n4KanjiList;
      break;
    case "n5":
      kanjiList = n5KanjiList;
      break;
    default:
      kanjiList = "";
      break;
  }

  let typeOfExercise;
  switch (exerciseType) {
    case "translate":
      typeOfExercise = <ExerciseKanji kanjiList={kanjiList} />;
      break;
    case "romaji":
      typeOfExercise = <ExerciseKanjiFurigana kanjiList={kanjiList} />;
      break;
    default:
      typeOfExercise = "";
      break;
  }
  
  return (
    <>
      <Header />

      <TitleAndSubtitle
        wordH3={`Vamos Treinar! Kanji ${nlevel.toUpperCase()} - 'Gambate!'`}
        wordP={
          "A palavra 'Gambate' é uma expressão que pode ser traduzida como 'Vai com tudo!' ou 'Força!'. É uma forma de encorajamento e apoio."
        }
      />
      <div className={styleCard.CardsExercises_container}>
        <h2
          className={styleCard.CardsExercises_itemBox}
          onClick={() => setExerciseType("translate")}
        >
          {`Traduzir`}
        </h2>
        <h2
          className={styleCard.CardsExercises_itemBox}
          onClick={() => setExerciseType("romaji")}
        >
          {`Romaji`}
        </h2>
      </div>
      {typeOfExercise ? (
        typeOfExercise
      ) : (
        <div className={style.ExerciseKanji_container}>
          <div className={style.ExerciseKanji_img}>
            <a
              href="https://www.instagram.com/jlpt_descomplicado/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={style.ExerciseKanji_img}
                src={instagramChamada}
                alt="Primeiros passos japones"
              />
            </a>
          </div>
        </div>
      )}
      <TitleAndSubtitle
        wordH3={`Veja mais sobre JLPT ${nlevel.toUpperCase()}`}
        wordP={""}
      />
      <NCards number={+nlevel.substring(1)} />
      <Footer />
    </>
  );
}
