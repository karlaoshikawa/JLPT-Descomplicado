import { Link } from "react-router-dom";
import style from "./NCards.module.scss";

export default function NCards({ number }) {
  return (
    <div className={style.NCards_container}>
      <div className={style.NCards_itemBox}>
        <Link to={`/jlpt/n${number}/kanji`} data-testid="link-kanji-ncard">
          Kanji
        </Link>
      </div>
      <div className={style.NCards_itemBox}>
        <Link
          to={`/jlpt/n${number}/vocabulary`}
          data-testid="link-vocabulary-ncard"
        >
          Vocabulário
        </Link>
      </div>
      <div className={style.NCards_itemBox}>
        <Link to={`/jlpt/n${number}/grammar`} data-testid="link-grammar-ncard">
          Gramática
        </Link>
      </div>
    </div>
  );
}