import React, { useEffect, useMemo, useState } from "react";
import style from "../components/ExerciseKanji.module.scss";
import { FiArrowRight } from "react-icons/fi";
import instagramChamada from "../images/instagramBanner.webp";
import KanjiList from "./KanjiList";
import { normalize } from "../ultils/ExercisesUltils";

export default function ExerciseRomaji({ kanjiList }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const [showAnswers, setShowAnswers] = useState(Array(10).fill(false));
  const [okAnswers, setOkAnswers] = useState([]);
  const [furiganaAnswers, setFuriganaAnswers] = useState([]);
  const [traducaoAnswers, setTraducaoAnswers] = useState([]);
  const [reloadList, setReloadList] = useState(false);
  const [indiceEx, setIndiceEx] = useState();

  useMemo(() => {
    const sortEx = [0, 1, 2];
    sortEx.sort(() => Math.random() - 0.5);
    setIndiceEx(sortEx[1]);
  }, [KanjiList]);

  useEffect(() => {
    const list =
      kanjiList === ""
        ? []
        : kanjiList.filter((element) => element.kanji !== "");
    const list10elements = list.sort(() => Math.random() - 0.5);
    setExerciseList(list10elements.slice(0, 10));
    setInputValues(list10elements.slice(0, 10).map(() => ""));

    setShowAnswers(Array(10).fill(false));
    setReloadList(false);

    setOkAnswers(
      list10elements
        .slice(0, 10)
        .map((element) => element.exemplos[indiceEx].romaji)
    );
    setFuriganaAnswers(
      list10elements
        .slice(0, 10)
        .map((element) => element.exemplos[indiceEx].furigana)
    );
    setTraducaoAnswers(
      list10elements
        .slice(0, 10)
        .map((element) => element.exemplos[indiceEx].traducao)
    );
  }, [kanjiList, reloadList]);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const checkAnswer = (element, inputValue, index) => {

    const answerOkLowerCase = element.exemplos[indiceEx].romaji
      .split(/[;,()]+/)
      .map((answer) => normalize(answer));

    const inputNormalized = normalize(inputValue);

    const isCorrect = answerOkLowerCase.some((expectedAnswer) =>
      inputNormalized.includes(expectedAnswer)
    );
    if (isCorrect && !showAnswers[index]) {
      const newShowAnswers = [...showAnswers];
      newShowAnswers[index] = true;
      setShowAnswers(newShowAnswers);
    }
    return isCorrect;
  };

  console.log(okAnswers, inputValues, showAnswers, indiceEx, furiganaAnswers);
  return (
    <div className={style.ExerciseKanji_container}>
      {!kanjiList ? (
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
      ) : (
        <>
          <h2 className={style.ExerciseKanji_h2}>
            Escreva as palavras em Kanji em forma alfabética
          </h2>

          <div className={style.ExerciseKanji_box}>
            {exerciseList.map((element, index) => (
              <div
                key={index}
                className={
                  inputValues[index] === ""
                    ? style.inputDefault
                    : checkAnswer(element, inputValues[index], index)
                    ? style.inputOk
                    : style.inputMistake
                }
              >
                <p>{element.exemplos[indiceEx].kanji}</p>

                <div
                  className={style.ExerciseKanji_answers}
                  onClick={() => {
                    setShowAnswers((prevShowAnswers) => {
                      const newShowAnswers = [...prevShowAnswers];
                      newShowAnswers[index] = !newShowAnswers[index];
                      return newShowAnswers;
                    });
                  }}
                >
                  <h4>
                    {showAnswers[index]
                      ? `Resposta: ${okAnswers[index]}`
                      : "Resposta"}
                  </h4>
                  <h4>
                    {showAnswers[index]
                      ? `Tradução: ${traducaoAnswers[index]}`
                      : "Tradução"}
                  </h4>
                  <h4>
                    {showAnswers[index]
                      ? `Furigana: ${furiganaAnswers[index]}`
                      : "Furigana"}
                  </h4>
                </div>

                <input
                  type="text"
                  value={inputValues[index]}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      e.target.value
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                    )
                  }
                />
              </div>
            ))}
          </div>
        </>
      )}

      {!kanjiList ? null : (
        <div
          className={style.ExerciseKanji_newlist_buttom}
          onClick={() => {
            setReloadList(true);
          }}
        >
          <h5>Nova lista</h5>
          <FiArrowRight />
        </div>
      )}
      <div className={style.ExerciseKanji_line}></div>
    </div>
  );
}
