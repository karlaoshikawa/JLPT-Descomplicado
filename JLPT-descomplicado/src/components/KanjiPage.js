import { Link } from "react-router-dom";
import style from "./KanjiPage.module.scss";
import { itemlenght } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function KanjiPage({ kanji, next, nivel, posicao }) {
  const dispatch = useDispatch();

  const handleClick = (tipo, posicao) => {
    dispatch(itemlenght({tipo, posicao}));
  };
  return (
    <div className={style.kanjiPage_container}>
      <div className={style.kanjiPage_box}>
        <h3>{kanji.significado}</h3>
        <h2>{kanji.kanji}</h2>
      </div>
      <div className={style.kanjiPage_informations}>
        <h3>Informações:</h3>
        <h4>On Yomi</h4>
        {kanji.onYomi.map((on) => (
          <>
            <p>{on.katakana}</p>
            <p>{on.romaji}</p>
          </>
        ))}
        <h4>Kun Yomi</h4>
        {kanji.kunYomi.map((kun) => (
          <>
            <p>{kun.hiragana}</p>
            <p>{kun.romaji}</p>
          </>
        ))}
      </div>
      <div className={style.kanjiPage_informations}>
        {kanji.exemplos.map((moji) => (
          <>
            <h4>kanji:</h4>
            <p>{moji.kanji}</p>
            <h4>furigana:</h4>
            <p>{moji.furigana}</p>
            <h4>romaji:</h4>
            <p>{moji.romaji}</p>
            <h4>tradução:</h4>
            <p>{moji.traducao}</p>
          </>
        ))}
      </div>
      <div className={style.kanjiPage_next}>
        <Link to={`${next}`} onClick={() => handleClick(nivel, posicao)}>
          <p>proximo</p>
        </Link>
      </div>
    </div>
  );
}
