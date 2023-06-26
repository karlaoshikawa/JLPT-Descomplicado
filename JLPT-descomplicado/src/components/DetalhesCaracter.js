import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./DetalhesCaracter.module.scss";
import { Link } from "react-router-dom";
import { getnextcaracter } from "../redux/actions";
import { FiArrowRight } from "react-icons/fi";

import { hiraganaList, hiraganaDakuon, hiraganaYoon } from "../data/hiragana";
import { katakanaList, katakanaDakuon, katakanaYoon } from "../data/katakana";

export default function DetalhesCaracter() {
  const dispatch = useDispatch();

  const [getCaracter, setGetCaracter] = useState({});
  const [nextCaracter, setNextCaracter] = useState({});

  const moji = useSelector((state) => state.caracter);
  const basicList = moji.tipo === undefined ? "List" : moji.tipo;
  const dataString = `${moji.kana}${basicList}`;
  const data = [
    hiraganaList,
    hiraganaDakuon,
    hiraganaYoon,
    katakanaList,
    katakanaDakuon,
    katakanaYoon,
  ];
  const dataStringList = [
    "hiraganaList",
    "hiraganaDakuon",
    "hiraganaYoon",
    "katakanaList",
    "katakanaDakuon",
    "katakanaYoon",
  ];

  const nextMojiIndex =
    moji.posicao === 37 ? Number(moji.posicao) + 3 : Number(moji.posicao) + 1;

  const dataIndex = dataStringList.findIndex((item) => dataString === item);
  const list = data[dataIndex];
  useEffect(() => {
    // const dataCaracter = list.find((carac) => carac.letra === moji.caracter);
    // setGetCaracter(dataCaracter);
    setGetCaracter(list[moji.posicao]);
    setNextCaracter(list[nextMojiIndex]);
  }, [moji, nextCaracter]);

  const caracterState = (kana, tipo, next, posicao) => {
    dispatch(getnextcaracter({ kana, tipo, next, posicao }));
    setGetCaracter(next);
  };

  console.log(nextCaracter);
  console.log("atual", moji.posicao);
  console.log("next", nextMojiIndex);

  return (
    <div className={style.detalhesCaracter_container}>
      <h1>Ideograma: {moji.kana}</h1>
      <div className={style.caracter_box}>
        <h3>{getCaracter.letra}</h3>
        <h2>{Object.values(getCaracter)[1]}</h2>
      </div>

      <h3 className={style.caracter_exemplo}>Exemplos:</h3>
      {getCaracter.exemplos?.map((ex, i) =>
        ex ? (
          <div key={i} className={style.caracter_exemplo_box}>
            <h3 className={style.caracter_kana}>
              {moji.kana}: {ex.palavra}
            </h3>
            <p>romaji: {ex.romaji}</p>
            <p className={style.caracter_traducao}>tradução: {ex.traducao}</p>
          </div>
        ) : null
      )}
      {nextCaracter?.letra ? (
        <Link
          className={style.detalhesCaracter_next_link}
          to={`/${moji.kana}/${nextCaracter.letra}`}
          onClick={() =>
            caracterState(moji.kana, basicList, nextCaracter, nextMojiIndex)
          }
        >
          <h4>próximo</h4>
          <FiArrowRight />
        </Link>
      ) : (
        <Link className={style.detalhesCaracter_next_link} to={`/${moji.kana}`}>
          <h4>{moji.kana}</h4>
        </Link>
      )}
    </div>
  );
}
