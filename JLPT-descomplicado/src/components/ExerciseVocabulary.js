import React, { useEffect, useState } from "react";
import style from "../components/ExerciseKanji.module.scss";
import { FiArrowRight } from "react-icons/fi";
import instagramChamada from "../images/instagramBanner.webp";
import { normalize } from "../ultils/ExercisesUltils";

export default function ExerciseRomaji({ vocabularyList, type }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const [showAnswers, setShowAnswers] = useState(Array(10).fill(false));
  const [vocabularioAnswers, setVocabularioAnswers] = useState([]);
  const [hiraganaAnswers, setHiraganaAnswers] = useState([]);
  const [romajiAnswers, setRomajiAnswers] = useState([]);
  const [traducaoAnswers, setTraducaoAnswers] = useState([]);
  const [reloadList, setReloadList] = useState(false);

  useEffect(() => {
    const list =
      vocabularyList === ""
        ? []
        : vocabularyList.filter((element) => element.vocabulario !== "");
    const list10elements = list.sort(() => Math.random() - 0.5);
    setExerciseList(list10elements.slice(0, 10));
    setInputValues(list10elements.slice(0, 10).map(() => ""));

    setShowAnswers(Array(10).fill(false));
    setReloadList(false);

    setVocabularioAnswers(
      list10elements.slice(0, 10).map((element) => element.vocabulario)
    );
    setHiraganaAnswers(
      list10elements
        .slice(0, 10)
        .map((element) => element.hiragana)
    );
    setTraducaoAnswers(
      list10elements.slice(0, 10).map((element) => element.traducao)
    );
    setRomajiAnswers(
      list10elements.slice(0, 10).map((element) => element.romaji)
    );
  }, [vocabularyList, reloadList, type]);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const checkAnswer = (element, inputValue, index) => {
    const typeExercise = type === "translate" ? element.traducao : element.romaji

    const answerOkLowerCase = typeExercise
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

  console.log(vocabularioAnswers, inputValues, showAnswers, hiraganaAnswers);
  return (
    <div className={style.ExerciseKanji_container}>
      {!vocabularyList ? (
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
            {type === "translate"
              ? "Escreva a tradução dos vocabulários"
              : "Escreva os vocabulários em forma alfabética"}
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
                <p>{element.vocabulario}</p>

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
                  <h4 className={style.ExerciseKanji_answers_h4}>
                    {showAnswers[index]
                      ? `Resposta: ${
                          type === "translate"
                            ? traducaoAnswers[index]
                            : romajiAnswers[index]
                        }`
                      : "Veja a Resposta"}
                  </h4>
                  <h4>
                    {showAnswers[index]
                      ? type === "translate"
                        ? `Romaji: ${romajiAnswers[index]}`
                        : `Tradução: ${traducaoAnswers[index]}`
                      : type === "translate"
                      ? "Romaji:"
                      : "Tradução:"}
                  </h4>

                  <h4>
                    {showAnswers[index]
                      ? `Furigana: ${hiraganaAnswers[index]}`
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
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      setShowAnswers((prevShowAnswers) => {
                        const newShowAnswers = [...prevShowAnswers];
                        newShowAnswers[index] = !newShowAnswers[index];
                        return newShowAnswers;
                      });
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {!vocabularyList ? null : (
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
