import { Link } from "react-router-dom";
import style from "./NCards.module.scss";

export default function NCards({number}) {
  return (
    <div className={style.NCards_container}>
      <div className={style.NCards_itemBox}>
        <Link to={`/jlpt-n${number}/kanji`}>Kanji</Link>
      </div>
      <div className={style.NCards_itemBox}>
        <Link to={`/jlpt-n${number}/vocabulary`}>Vocabulário</Link>
      </div>
      <div className={style.NCards_itemBox}>
        <Link to={`/jlpt-n${number}/grammar`}>Gramática</Link>
      </div>
    </div>
  );
}