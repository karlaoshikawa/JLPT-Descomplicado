import { Link } from "react-router-dom";
import style from "./KanjiList.module.scss";
import { useDispatch } from "react-redux";
import { itemlenght } from "../redux/actions";

export default function KanjiList({ nivel, kanji }) {
  const dispatch = useDispatch();
  const kanjiList = kanji;

  const handleClick = (tipo, posicao) => {
    dispatch(itemlenght({tipo, posicao}))
  }
  return (
    <div className={style.kanjiList_container}>
      <table className={style.kanjiList_table}>
        <thead className={style.kanjiList_thead}>
          <tr>
            <th>
              <p>Kanji</p>
            </th>
            <th className={style.kanjiList_mobileOff}>
              <p>On Yomi</p>
            </th>
            <th className={style.kanjiList_mobileOff}>
              <p>Kun Yomi</p>
            </th>
            <th>
              <p>Significado</p>
            </th>
          </tr>
        </thead>
        <tbody className={style.kanjiList_tbody}>
          {kanjiList.map((item, index) => (
            <tr key={item.name}>
              <td>
                <Link
                  to={`kanji/${item.significado}`}
                  onClick={() => handleClick(nivel, index)}
                >
                  <h5>{item.kanji}</h5>
                </Link>
              </td>
              <td className={style.kanjiList_mobileOff}>
                <p>
                  {item.onYomi.map((yon, index) => (
                    <span key={index}>
                      {`${yon.katakana}, ${yon.romaji}`}
                      <br />
                    </span>
                  ))}
                </p>
              </td>
              <td className={style.kanjiList_mobileOff}>
                <p>
                  {item.kunYomi.map((kun, index) => (
                    <span key={index}>
                      {`${kun.hiragana}, ${kun.romaji}`}
                      <br />
                    </span>
                  ))}
                </p>
              </td>
              <td>
                <p>{item.significado}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.kanjiList_memo}>
        <p>
          Esta é uma lista aproximada um compilado de varios materiais sobre o
          assunto, em caso de dúvida consulte a Japan Foundation e o Japan
          Educational Exchanges and Services (JEES).
        </p>
      </div>
    </div>
  );
}
