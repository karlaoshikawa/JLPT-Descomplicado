import { Link } from "react-router-dom";
import style from "./VocabularyPage.module.scss";
import { itemlenght } from "../redux/actions";
import { useDispatch } from "react-redux";
import { FiArrowRight } from "react-icons/fi";

export default function VocabularyPage({ vocabulary, next, nivel, posicao }) {
  const dispatch = useDispatch();

  const handleClick = (tipo, posicao) => {
    dispatch(itemlenght({ tipo, posicao }));
  };

  const jlpt = nivel.split("-").pop();
  return (
    <div className={style.VocabularyPage_container}>
      <h1>{`Vocabulário JLPT ${jlpt.toUpperCase()}`}</h1>
      <div className={style.VocabularyPage_line}></div>
      <div className={style.VocabularyPage_top_box}>
        <div className={style.VocabularyPage_box_kanji}>
          <div className={style.VocabularyPage_box}>
            <h3>{vocabulary.traducao}</h3>
            <h2>{vocabulary.vocabulario}</h2>
          </div>
        </div>
        <div className={style.VocabularyPage_box_informations}>
          <h3>Informações:</h3>
          <div className={style.VocabularyPage_informations}>
            <div className={style.VocabularyPage_informations_item}>
              <h4>Vocabulário:</h4>
              <p>{vocabulary.vocabulario}</p>
            </div>
            <div className={style.VocabularyPage_informations_item}>
              <h4>Tradução:</h4>
              <p>{vocabulary.traducao}</p>
            </div>
            <div className={style.VocabularyPage_informations_item}>
              <h4>Hiragana:</h4>
              <div className={style.VocabularyPage_informations_horizontal}>
                <p>{vocabulary.hiragana}</p>
              </div>
            </div>
            <div className={style.VocabularyPage_informations_item}>
              <h4>Romaji</h4>
              <div className={style.VocabularyPage_informations_horizontal}>
                <p>{vocabulary.romaji}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.VocabularyPage_line}></div>

      <div className={style.VocabularyPage_exemplos}>
        <h3>Exemplos:</h3>
        {vocabulary.exemplosFrases.map((moji, i) => (
          <div key={i} className={style.VocabularyPage_exemplos_block}>
            <div className={style.VocabularyPage_exemplos_item}>
              <h4>Frase:</h4>
              <h3>{moji.exemplo}</h3>
            </div>
            <div className={style.VocabularyPage_exemplos_item}>
              <h4>Hiragana:</h4>
              <p>{moji.hiragana}</p>
            </div>
            <div className={style.VocabularyPage_exemplos_item}>
              <h4>Romaji:</h4>
              <p>{moji.romaji}</p>
            </div>
            <div className={style.VocabularyPage_exemplos_item}>
              <h4>Tradução:</h4>
              <p>{moji.traducao}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {!next ? null : (
          <Link
            to={`${next}`}
            onClick={() => handleClick(nivel, posicao)}
            className={style.VocabularyPage_next}
          >
            <h4>proximo</h4>
            <FiArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}
