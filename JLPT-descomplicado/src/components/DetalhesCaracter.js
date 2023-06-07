import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./DetalhesCaracter.module.scss";
import { hiraganaList } from "../data/hiragana";
import { hiraganaDakuon } from "../data/hiragana";
import { hiraganaYoon } from "../data/hiragana";
import { katakanaList } from "../data/katakana";
import { katakanaDakuon } from "../data/katakana";
import { katakanaYoon } from "../data/katakana";
import { Link } from "react-router-dom";
import { getnextcaracter } from "../redux/actions";

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

  useEffect(() => {
    const dataIndex = dataStringList.findIndex((item) => dataString === item);
    const list = data[dataIndex];
    // const dataCaracter = list.find((carac) => carac.letra === moji.caracter);
    // setGetCaracter(dataCaracter);
    setGetCaracter(list[moji.posicao]);
    setNextCaracter(list[moji.posicao + 1]);
  }, [moji, nextCaracter]);

  const caracterState = (kana, tipo, next, posicao) => {
    dispatch(getnextcaracter({ kana, tipo, next, posicao }));
    setGetCaracter(next);
  };

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
            <p>tradução: {ex.traducao}</p>
          </div>
        ) : null
      )}
      {nextCaracter.letra && (
        <Link
          to={`/${moji.kana}/${nextCaracter.letra}`}
          onClick={() =>
            caracterState(
              moji.kana,
              basicList,
              nextCaracter,
              (Number(moji.posicao) + 1)
            )}
        >
          <h4 className={style.detalhesCaracter_next_link}>próximo</h4>
        </Link>
      )}
    </div>
  );
}
