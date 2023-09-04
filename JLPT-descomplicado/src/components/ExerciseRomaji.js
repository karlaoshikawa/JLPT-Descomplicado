import React, { useEffect, useState } from "react";
import style from "../components/ExerciseRomaji.module.scss";

export default function ExerciseRomaji({ caracterList }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const [showAnswers, setShowAnswers] = useState(Array(12).fill(false));
  const [okAnswers, setOkAnswers] = useState([]);

  useEffect(() => {
    const list =
      caracterList === ""
        ? []
        : caracterList.filter((element) => element.letra !== "");
    const list12elements = list.sort(() => Math.random() - 0.5);
    setExerciseList(list12elements.slice(0, 12));
    setInputValues(list12elements.slice(0, 12).map(() => ""));
    setOkAnswers(list12elements.slice(0, 12).map((element) => element.letra));
  }, [caracterList]);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const checkAnswer = (element, inputValue, index) => {
    const isCorrect = element.letra === inputValue;
    if (isCorrect) {
      const newShowAnswers = [...showAnswers];
      newShowAnswers[index] = true;
      setShowAnswers(newShowAnswers);
    }
    return isCorrect;
  };

  return (
    <div className={style.ExerciseRomaji_container}>
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
          <p>{element.hiragana}</p>
          <input
            type="text"
            value={inputValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <h4
            onClick={() => {
              setShowAnswers((prevShowAnswers) => {
                const newShowAnswers = [...prevShowAnswers];
                newShowAnswers[index] = !newShowAnswers[index];
                return newShowAnswers;
              });
            }}
          >
            {showAnswers[index]
              ? `Resposta: ${okAnswers[index]}`
              : "Resposta"}
          </h4>
        </div>
      ))}
    </div>
  );
}
