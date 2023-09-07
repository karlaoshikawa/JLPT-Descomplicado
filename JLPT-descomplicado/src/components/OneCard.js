import { Link } from "react-router-dom";
import style from "./OneCard.module.scss";

export default function OneCard({ tipo }) {
  console.log("link", tipo);
  return (
    <div className={style.OneCard_container}>
      <div className={style.OneCard_itemBox}>
        <Link to={`/${tipo}/exercises`} data-testid="link-kanji-ncard">
          Exercícios
        </Link>
      </div>
      {/* <div className={style.NCards_itemBox}>
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
      </div> */}
    </div>
  );
}
