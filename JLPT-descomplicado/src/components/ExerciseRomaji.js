import React, { useEffect, useState } from "react";
import style from "../components/ExerciseRomaji.module.scss";
import { FiArrowRight } from "react-icons/fi";
import instagramChamada from "../images/instagramBanner.webp";

export default function ExerciseRomaji({ caracterList }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const [showAnswers, setShowAnswers] = useState(Array(12).fill(false));
  const [okAnswers, setOkAnswers] = useState([]);
  const [reloadList, setReloadList] = useState(false);


  useEffect(() => {
    const list =
      caracterList === ""
        ? []
        : caracterList.filter((element) => element.letra !== "");
    const list12elements = list.sort(() => Math.random() - 0.5);
    setExerciseList(list12elements.slice(0, 12));
    setInputValues(list12elements.slice(0, 12).map(() => ""));
    setOkAnswers(list12elements.slice(0, 12).map((element) => element.letra));
    setShowAnswers(Array(12).fill(false));
    setReloadList(false);
  }, [caracterList, reloadList]);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const checkAnswer = (element, inputValue, index) => {
    const isCorrect = element.letra === inputValue;
    if (isCorrect && !showAnswers[index]) {
      const newShowAnswers = [...showAnswers];
      newShowAnswers[index] = true;
      setShowAnswers(newShowAnswers);
    }
    return isCorrect;
  };
  
  const upWindowMobile = () => {
    if (window.innerWidth <= 768) {
      const halfPageHeight = window.innerHeight / 1;
      window.scrollTo({ top: halfPageHeight, left: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={style.ExerciseRomaji_container}>
      {!caracterList ? (
        <div className={style.ExerciseRomaji_img}>
          <a
            href="https://www.instagram.com/jlpt_descomplicado/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={style.ExerciseRomaji_img}
              src={instagramChamada}
              alt="Primeiros passos japones"
            />
          </a>
        </div>
      ) : (
        <div className={style.ExerciseRomaji_box}>
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
              <p>{element.hiragana ? element.hiragana : element.katakana}</p>
              <input
                type="text"
                value={inputValues[index]}
                onChange={(e) =>
                  handleInputChange(index, e.target.value.toLocaleLowerCase())
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
      )}

      {!caracterList ? null : (
        <div
          className={style.ExerciseRomaji_newlist_buttom}
          onClick={() => {
            upWindowMobile();
            setReloadList(true);
          }}
        >
          <h5>Nova lista</h5>
          <FiArrowRight />
        </div>
      )}
    </div>
  );
}
