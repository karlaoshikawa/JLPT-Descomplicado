import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import style from './Table.module.scss';
import { getcaracter } from '../redux/actions';
import { useEffect } from "react";

export default function Table({ caracteres, tipo, katakana }) {
  const dispatch = useDispatch();
  
  const isKatakana = katakana ? 'katakana' : 'hiragana';
  
  const caracterState = (moji) => {
    dispatch(getcaracter({ isKatakana, tipo, moji }))
    console.log('ka2', { isKatakana, tipo, moji });
}
  return (
    <div className={style.table_container}>
      {caracteres.map((moji, i) => (
        <Link
          to={ `/${isKatakana}/${moji.letra}` }
          key={i}
          className={tipo === 'Yoon' ? style.table_box_yoon : style.table_box}
          onClick={() => caracterState(moji.letra)}
        >
          <p>{moji.letra}</p>
          <h2>{katakana ? moji.katakana : moji.hiragana}</h2>
        </Link>
      ))}
    </div>
  );
}
