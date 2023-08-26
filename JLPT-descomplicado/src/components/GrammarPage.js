import { Link, useParams } from "react-router-dom";
import style from "./GrammarPage.module.scss";
import { itemlenght } from "../redux/actions";
import { useDispatch } from "react-redux";
import { FiArrowRight } from "react-icons/fi";
import { useMemo } from "react";

export default function VocabularyPage({ grammar, next, nivel, posicao }) {
  const { nlevel, index } = useParams();
  // const dispatch = useDispatch();

  // useMemo(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  // }, []);
  
  // const handleClick = (tipo, posicao) => {
  //   dispatch(itemlenght({ tipo, posicao }));
  // };

  // const jlpt = nivel.split("-").pop();
  return (
    <div
      className={style.grammarPage_container}
      data-testid="grammar-page"
    >
      <h1>{`Gramática JLPT ${nlevel.toUpperCase()}`}</h1>
      <div className={style.grammarPage_line}></div>
      <div className={style.grammarPage_top_box}>
        <div className={style.grammarPage_box_kanji}>
          <div className={style.grammarPage_box}>
            <h3>{grammar.romaji}</h3>
            <h2>{grammar.topico}</h2>
          </div>
        </div>
        <div className={style.grammarPage_box_informations}>
          <h3>Informações:</h3>
          <div className={style.grammarPage_informations}>
            <div className={style.grammarPage_informations_item}>
              <h4>Tópico:</h4>
              <p>{grammar.topico}</p>
            </div>
            <div className={style.grammarPage_informations_item}>
              <h4>Tradução:</h4>
              <p>{grammar.traducao}</p>
            </div>
            <div className={style.grammarPage_informations_item}>
              <h4>Romaji</h4>
              <div className={style.grammarPage_informations_horizontal}>
                <p>{grammar.romaji}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.grammarPage_line}></div>

      <div className={style.grammarPage_exemplos}>
        <h3>Exemplo:</h3>
        <div className={style.grammarPage_exemplos_block}>
          <div className={style.grammarPage_exemplos_item}>
            <h4>Frase:</h4>
            <h3>{grammar.exemplo.frase}</h3>
          </div>
          <div className={style.grammarPage_exemplos_item}>
            <h4>Furigana:</h4>
            <p>{grammar.exemplo.furigana}</p>
          </div>
          <div className={style.grammarPage_exemplos_item}>
            <h4>Romaji:</h4>
            <p>{grammar.exemplo.romaji}</p>
          </div>
          <div className={style.grammarPage_exemplos_item}>
            <h4>Tradução:</h4>
            <p>{grammar.exemplo.traducao}</p>
          </div>
          <div className={style.grammarPage_exemplos_item}>
            <h4>Explicação:</h4>
            <p>{grammar.explicacao}</p>
          </div>
        </div>
      </div>
      <div>
        {!next ? null : (
          <Link
            to={`/jlpt/${nlevel}/grammar/${+index + 1}/${next}`}
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
            className={style.grammarPage_next}
          >
            <h4>proximo</h4>
            <FiArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}
