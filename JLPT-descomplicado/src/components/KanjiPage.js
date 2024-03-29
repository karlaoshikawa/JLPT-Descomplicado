import { Link } from "react-router-dom";
import style from "./KanjiPage.module.scss";
// import { itemlenght } from "../redux/actions";
// import { useDispatch } from "react-redux";
import { FiArrowRight } from "react-icons/fi";
import { useParams } from "react-router-dom";

export default function KanjiPage({ kanji, next, nivel, posicao }) {
  const { nlevel, index } = useParams();
  // const dispatch = useDispatch();

  // const handleClick = (tipo, posicao) => {
  //   dispatch(itemlenght({ tipo, posicao }));
  // };
  //const jlpt = nivel.split("-").pop();
  return (
    <div className={style.kanjiPage_container} data-testid="kanji-page">
      <h1>{`Kanji JLPT ${nlevel.toUpperCase()}`}</h1>
      <div className={style.kanjiPage_line}></div>
      <div className={style.kanjiPage_top_box}>
        <div className={style.kanjiPage_box_kanji}>
          <div className={style.kanjiPage_box}>
            <h3>{kanji.significado}</h3>
            <h2>{kanji.kanji}</h2>
          </div>
        </div>
        <div className={style.kanjiPage_box_informations}>
          <h3>Informações:</h3>
          <div className={style.kanjiPage_informations}>
            <div className={style.kanjiPage_informations_item}>
              <h4>Kanji:</h4>
              <p>{kanji.kanji}</p>
            </div>
            <div className={style.kanjiPage_informations_item}>
              <h4>Significado:</h4>
              <p>{kanji.significado}</p>
            </div>
            <div className={style.kanjiPage_informations_item}>
              <h4>On Yomi:</h4>
              <div className={style.kanjiPage_informations_horizontal}>
                {kanji.onYomi.map((on, i) => (
                  <div key={i}>
                    <p>{on.katakana}</p>
                    <p>{on.romaji}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.kanjiPage_informations_item}>
              <h4>Kun Yomi:</h4>
              <div className={style.kanjiPage_informations_horizontal}>
                {kanji.kunYomi.map((kun, i) => (
                  <div key={i}>
                    <p>{kun.hiragana}</p>
                    <p>{kun.romaji}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.kanjiPage_line}></div>

      <div className={style.kanjiPage_exemplos}>
        <h3>Exemplos:</h3>
        {kanji.exemplos.map((moji, i) => (
          <div key={i} className={style.kanjiPage_exemplos_block}>
            <div className={style.kanjiPage_exemplos_item}>
              <h4>kanji:</h4>
              <p>{moji.kanji}</p>
            </div>
            <div className={style.kanjiPage_exemplos_item}>
              <h4>furigana:</h4>
              <p>{moji.furigana}</p>
            </div>
            <div className={style.kanjiPage_exemplos_item}>
              <h4>romaji:</h4>
              <p>{moji.romaji}</p>
            </div>
            <div className={style.kanjiPage_exemplos_item}>
              <h4>tradução:</h4>
              <p>{moji.traducao}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {!next ? null : (
          <Link
            to={`/jlpt/${nlevel}/kanji/${+index + 1}/${next}`}
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "instant" })
            }
            className={style.kanjiPage_next}
          >
            <h4>proximo</h4>
            <FiArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}
