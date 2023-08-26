import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./DetalhesCaracter.module.scss";
import { Link } from "react-router-dom";
import { getnextcaracter } from "../redux/actions";
import { FiArrowRight } from "react-icons/fi";
import { useParams } from "react-router-dom";

import { hiraganaList, hiraganaDakuon, hiraganaYoon } from "../data/hiragana";
import { katakanaList, katakanaDakuon, katakanaYoon } from "../data/katakana";
import { useMemo } from "react";

export default function DetalhesCaracter() {
  // const dispatch = useDispatch();
  const { hiraOrKatakana, tipo, index, caracter } = useParams();

  // const [getCaracter, setGetCaracter] = useState({});
  // const [nextCaracter, setNextCaracter] = useState({});

  // const moji = useSelector((state) => state.caracter);
  const basicList = tipo === "basic" ? "List" : tipo;
  const dataString = `${hiraOrKatakana}${basicList}`;
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

  const nextMojiIndex = +index === 37
      ? +index + 3
      : +index + 1;

  const dataIndex = dataStringList.findIndex((item) => dataString === item);
  const list = data[dataIndex];
  const caracterInfos = list[index];
  const nextCaracter = list[nextMojiIndex];

  // useEffect(() => {
  //   // const dataCaracter = list.find((carac) => carac.letra === moji.caracter);
  //   // setGetCaracter(dataCaracter);
  //   setGetCaracter(list[+index]);
  //   setNextCaracter(list[nextMojiIndex]);
  // }, [index, nextCaracter, nextMojiIndex]);

  // const caracterState = (kana, tipo, next, posicao) => {
  //   dispatch(getnextcaracter({ kana, tipo, next, posicao }));
  //   setGetCaracter(next);
  // };

  console.log(caracterInfos);

  return (
    <div className={style.detalhesCaracter_container} data-testid="caracter">
      <h1 data-testid={`caracter-${hiraOrKatakana}`}>
        Ideograma: {hiraOrKatakana}
      </h1>
      <div className={style.caracter_box}>
        <h3>{caracter}</h3>
        <h2>{Object.values(caracterInfos)[1]}</h2>
      </div>

      <h3 className={style.caracter_exemplo}>Exemplos:</h3>
      {caracterInfos.exemplos?.map((ex, i) =>
        ex ? (
          <div key={i} className={style.caracter_exemplo_box}>
            <h3 className={style.caracter_kana}>
              {hiraOrKatakana}: {ex.palavra}
            </h3>
            <p>romaji: {ex.romaji}</p>
            <p className={style.caracter_traducao}>tradução: {ex.traducao}</p>
          </div>
        ) : null
      )}

      {nextCaracter?.letra ? (
        <Link
          data-testid={`caracter-${nextCaracter.letra}`}
          className={style.detalhesCaracter_next_link}
          to={`/${hiraOrKatakana}/${tipo}/${nextMojiIndex}/${nextCaracter.letra}`}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "instant" })
          }
        >
          <h4>{`próximo ${Object.values(nextCaracter)[1]}`}</h4>
          <FiArrowRight />
        </Link>
      ) : null}

      <Link
        className={style.detalhesCaracter_next_link}
        to={`/${hiraOrKatakana}`}
      >
        <h4>{`lista de ${hiraOrKatakana}`}</h4>
      </Link>
    </div>
  );
}
