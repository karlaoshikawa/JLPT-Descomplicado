import React, { useEffect, useMemo, useState } from "react";

import style from "../components/ExerciseGrammar.module.scss";
import { FiArrowRight } from "react-icons/fi";
import { normalize } from "../ultils/ExercisesUltils";

export default function ExerciseGrammar({ grammarList }) {
  const [exerciseGrammar, setExerciseGrammar] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [okAnswers, setOkAnswers] = useState([]);
  const [furiganaAnswers, setFuriganaAnswers] = useState([]);
  const [romajiAnswers, setRomajiAnswers] = useState([]);
  const [reloadList, setReloadList] = useState(false);
  const [traducaoAnswers, setTraducaoAnswers] = useState();
  const [alternatives, setAlternatives] = useState([]);
  const [grammarFrase, setGrammarFrase] = useState();
  const [grammarTopic, setGrammarTopic] = useState();
  const [userAnswer, setUserAnswer] = useState("");

  // useMemo(() => {
  //   const alternativesArray = [okAnswers.explicacao];
  //   setAlternatives(alternativesArray.sort(() => Math.random() - 0.5));
  // }, [grammarList]);

  useEffect(() => {
    const list =
      grammarList === ""
        ? []
        : grammarList.filter((element) => element.topico !== "");
    const listSortElements = list.sort(() => Math.random() - 0.5);
    setExerciseGrammar(listSortElements[0]);

    // setShowAnswers(Array(10).fill(false));
    setReloadList(false);

    setTraducaoAnswers(listSortElements[0].exemplo.traducao);
    setAlternatives(
      [
        ...listSortElements
          .slice(-3)
          .map((element) =>
            element.explicacao
              .replace(/\([^)]*\)|[^a-zA-Záàâãéèêíïóôõöúç\s]+/g, "")
              .trim()
          ),
        listSortElements[0].explicacao
          .replace(/\([^)]*\)|[^a-zA-Záàâãéèêíïóôõöúç\s]+/g, "")
          .trim(),
      ].sort(() => Math.random() - 0.5)
    );

    setOkAnswers(
      listSortElements[0].explicacao
        .replace(/\([^)]*\)|[^a-zA-Záàâãéèêíïóôõöúç\s]+/g, "")
        .trim()
    );
    setFuriganaAnswers(listSortElements[0].exemplo.furigana);
    setRomajiAnswers(listSortElements[0].exemplo.romaji);
    setGrammarFrase(listSortElements[0].exemplo.frase);
    setGrammarTopic(listSortElements[0].topico);
  }, [grammarList, reloadList]);

  const handleInputChange = (index, value) => {
    // const newInputValues = [...inputValues];
    // newInputValues[index] = value;
    // setInputValues(newInputValues);
  };

  const checkAnswer = () => {
    return okAnswers === userAnswer;
  };

  const upWindowMobile = () => {
    if (window.innerWidth <= 768) {
      const halfPageHeight = window.innerHeight / 1;
      window.scrollTo({ top: halfPageHeight, left: 0, behavior: "smooth" });
    }
  };

  console.log(
    okAnswers,
    furiganaAnswers,
    "exercise",
    exerciseGrammar,
    "alternatives",
    alternatives
  );

  return (
    <div className={style.ExerciseGrammar_container}>
      <>
        <div className={style.ExerciseGrammar_box}>
          <div
            className={
              userAnswer === ""
                ? style.inputDefault
                : checkAnswer()
                ? style.inputOk
                : style.inputMistake
            }
          >
            <h5>{`Escolha a alternativa que explica ${grammarTopic}`}</h5>

            <p className={style.ExerciseGrammar_frase}>{grammarFrase}</p>

            <div
              className={style.ExerciseGrammar_answers}
              onClick={() => {
                setShowAnswers(!showAnswers);
              }}
            >
              <h4>
                {showAnswers
                  ? `Tradução: ${traducaoAnswers}`
                  : "Veja a tradução, Romaji e Furigana"}
              </h4>
              <h4>{showAnswers ? `Romaji: ${romajiAnswers}` : ""}</h4>
              <h4>{showAnswers ? `Furigana: ${furiganaAnswers}` : ""}</h4>
            </div>

            <div>
              {alternatives
                .map((element) => (
                  <h3
                    className={
                      userAnswer === element
                        ? checkAnswer()
                          ? style.h3Ok
                          : style.h3Mistake
                        : style.h3Default
                    }
                    onClick={() => setUserAnswer(element)}
                  >
                    {element}
                  </h3>
                ))}
            </div>
          </div>
        </div>
      </>

      {!grammarList ? null : (
        <div
          className={style.ExerciseGrammar_newlist_buttom}
          onClick={() => {
            upWindowMobile();
            setReloadList(true);
            setUserAnswer("");
            setShowAnswers(false);
          }}
        >
          <h5>Próximo</h5>
          <FiArrowRight />
        </div>
      )}
      <div className={style.ExerciseGrammar_line}></div>
    </div>
  );
}
