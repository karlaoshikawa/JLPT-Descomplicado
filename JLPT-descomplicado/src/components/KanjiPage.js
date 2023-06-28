import { Link } from "react-router-dom";
// import n5KanjiList from "../data/n5/n5Kanji";
import style from "./KanjiPage.module.scss";

export default function KanjiPage({ nivel, kanji }) {
  const kanjiList = kanji;
  return (
    <div className={style.kanjiPage_container}>
      <table className={style.kanjiPage_table}>
        <thead className={style.kanjiPage_thead}>
          <tr>
            <th>
              <p>Kanji</p>
            </th>
            <th>
              <p>On Yomi</p>
            </th>
            <th>
              <p>Kun Yomi</p>
            </th>
            <th>
              <p>Significado</p>
            </th>
          </tr>
        </thead>
        <tbody className={style.kanjiPage_tbody}>
          {kanjiList.map((item) => (
            <tr key={item.name}>
              <td>
                <Link to={`${nivel}/kanji/${item.significado}`}>
                  <h5>{item.kanji}</h5>
                </Link>
              </td>
              <td>
                <p>
                  {item.onYomi.map((yon, index) => (
                    <span key={index}>
                      {`${yon.katakana}, ${yon.romaji}`}
                      <br />
                    </span>
                  ))}
                </p>
              </td>
              <td>
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
      <div className={style.kanjiPage_memo}>
        <p>
          Esta é uma lista aproximada um compilado de varios materiais sobre o
          assunto, em caso de dúvida consulte a Japan Foundation e o Japan
          Educational Exchanges and Services (JEES).
        </p>
      </div>
    </div>
  );
}
