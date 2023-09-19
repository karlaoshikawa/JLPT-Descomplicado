import Footer from "../components/Footer";
import Header from "../components/Header";

import { useParams } from "react-router-dom";

import n1VocabularyList from "../data/n1/n1Vocabulario";
import n2VocabularyList from "../data/n2/n2Vocabulario";
import n3VocabularyList from "../data/n3/n3Vocabulario";
import n4VocabularyList from "../data/n4/n4Vocabulario";
import n5VocabularyList from "../data/n5/n5Vocabulario";

import NCards from "../components/NCards";
import ExerciseVocabulary from "../components/ExerciseVocabulary";
import instagramChamada from "../images/instagramBanner.webp";
import TitleAndSubtitle from "../components/TitleAndSubtitle";
import styleCard from "../Styles/CardsExercises.module.scss";
import style from "../components/ExerciseKanji.module.scss";
import { useState } from "react";

export default function NVocabularyExercise() {
  const { nlevel } = useParams();
  const [exerciseType, setExerciseType] = useState();

  let vocabularyList;
  switch (nlevel) {
    case "n1":
      vocabularyList = n1VocabularyList;
      break;
    case "n2":
      vocabularyList = n2VocabularyList;
      break;
    case "n3":
      vocabularyList = n3VocabularyList;
      break;
    case "n4":
      vocabularyList = n4VocabularyList;
      break;
    case "n5":
      vocabularyList = n5VocabularyList;
      break;
    default:
      vocabularyList = "";
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
      {exerciseType ? (
        <ExerciseVocabulary
          vocabularyList={vocabularyList}
          type={exerciseType}
        />
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
