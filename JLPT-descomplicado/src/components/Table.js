import { Link } from "react-router-dom";
import style from './Table.module.scss';

export default function Table({ caracteres, tipo }) {
  console.log(caracteres);
  return (
    <div className={style.table_container}>
      {caracteres.map((moji, i) => (
        <Link key={i} className={tipo === true ? style.table_box_yoon : style.table_box}>
          <p>{moji.letra}</p>
          <h2>{moji.hiragana}</h2>
        </Link>
      ))}
    </div>
  );
}
