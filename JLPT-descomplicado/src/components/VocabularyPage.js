import { Link, useParams } from "react-router-dom";
import style from "./VocabularyPage.module.scss";
import { FiArrowRight } from "react-icons/fi";

export default function VocabularyPage({ vocabulary, next, nivel, posicao }) {
  const { nlevel, index } = useParams();
  return (
    <div
      className={style.VocabularyPage_container}
      data-testid="vocabulary-page"
    >
      <h1>{`Vocabulário JLPT ${nlevel.toUpperCase()}`}</h1>
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
            to={`/jlpt/${nlevel}/vocabulary/${+index + 1}/${next}`}
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "instant" })
            }
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
