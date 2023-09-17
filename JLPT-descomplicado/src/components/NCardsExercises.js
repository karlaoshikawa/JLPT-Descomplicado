import { Link } from "react-router-dom";
import style from "./NCardsExercise.module.scss";

export default function NCardsExercises({ number }) {
  return (
    <div className={style.NCards_containerExercises}>
      <div className={style.NCards_itemBoxExercises}>
        <Link
          to={`/jlpt/n${number}/kanji/exercises`}
          data-testid="link-kanji-ncard"
        >
          Exercicíos de Kanji
        </Link>
      </div>
      {/* <div className={style.NCards_itemBoxExercises}>
        <Link
          to={`/jlpt/n${number}/vocabulary/exercises`}
          data-testid="link-vocabulary-ncard"
        >
          Vocabulário
        </Link>
      </div>
      <div className={style.NCards_itemBoxExercises}>
        <Link
          to={`/jlpt/n${number}/grammar/exercises`}
          data-testid="link-grammar-ncard"
        >
          Gramática
        </Link>
      </div> */}
    </div>
  );
}