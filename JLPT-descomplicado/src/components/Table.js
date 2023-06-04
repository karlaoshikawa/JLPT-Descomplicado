import { Link } from "react-router-dom"
import { hiraganaList } from "../data/hiragana"
import style from './Table.module.scss';

export default function Table() {
  return (
    <div className={style.table_container}>
      {hiraganaList.map((moji) => (
        <Link className={style.table_box}>
        <p>{moji.letra}</p>
        <h2>{moji.hiragana}</h2>
    </Link>
    ))
        }
      </div>
  )
}