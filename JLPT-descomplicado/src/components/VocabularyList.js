import { Link } from "react-router-dom";
import style from "./VocabularyList.module.scss";
import { useDispatch } from "react-redux";
import { itemlenght } from "../redux/actions";
import { useParams } from "react-router-dom";

export default function VocabularyList({ nivel, vocabulario }) {
  const dispatch = useDispatch();
  let { vocabulary } = useParams();
  vocabulary = "vocabulary";
  const vocabularyList = vocabulario;

  const handleClick = (tipo, posicao) => {
    dispatch(itemlenght({ tipo, posicao }));
  };
  return (
    <div
      className={style.vocabularyList_container}
      data-testid="vocabulary-list"
    >
      <table className={style.vocabularyList_table}>
        <thead className={style.vocabularyList_thead}>
          <tr>
            <th>
              <p>Vocabulário</p>
            </th>
            <th>
              <p>Romaji</p>
            </th>
            <th className={style.vocabularyList_mobileOff}>
              <p>Hiragana</p>
            </th>
            <th>
              <p>Traducao</p>
            </th>
          </tr>
        </thead>
        <tbody className={style.vocabularyList_tbody}>
          {vocabularyList.map((item, index) => (
            <tr key={index}>
              <td>
                <Link
                  to={`${vocabulary}/${item.romaji}`}
                  onClick={() => handleClick(nivel, index)}
                  data-testid={`vocabulary-${item.romaji}`}
                >
                  <h5>{item.vocabulario}</h5>
                </Link>
              </td>
              <td>
                <p>{item.romaji}</p>
              </td>
              <td className={style.vocabularyList_mobileOff}>
                <p>{item.hiragana}</p>
              </td>
              <td>
                <p>{item.traducao}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.vocabularyList_memo}>
        <p>
          Esta é uma lista aproximada um compilado de varios materiais sobre o
          assunto, em caso de dúvida consulte a Japan Foundation e o Japan
          Educational Exchanges and Services (JEES).
        </p>
      </div>
    </div>
  );
}
