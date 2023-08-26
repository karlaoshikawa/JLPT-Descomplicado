import { Link } from "react-router-dom";
import style from "./GrammarList.module.scss";
import { useDispatch } from "react-redux";
import { itemlenght } from "../redux/actions";

export default function GrammarList({ nivel, grammar }) {
  const dispatch = useDispatch();
  const grammarList = grammar;

  const handleClick = (tipo, posicao) => {
    dispatch(itemlenght({ tipo, posicao }));
  };
  return (
    <div className={style.grammarList_container} data-testid="grammar-list">
      <table className={style.grammarList_table}>
        <thead className={style.grammarList_thead}>
          <tr>
            <th>
              <p>Tópico</p>
            </th>
            <th>
              <p>Romaji</p>
            </th>
            <th>
              <p>Tradução</p>
            </th>
          </tr>
        </thead>
        <tbody className={style.grammarList_tbody}>
          {grammarList.map((item, index) => (
            <tr key={index}>
              <td>
                <Link
                  to={`grammar/${index}/${item.romaji.replace(/[^a-zA-Z]/g, "-")}`}
                  onClick={() => handleClick(nivel, index)}
                  data-testid={`grammar-${item.romaji.replace(/[^a-zA-Z]/g, "-")}`}
                >
                  <h5>{item.topico}</h5>
                </Link>
              </td>
              <td>
                <p>{item.romaji}</p>
              </td>
              <td>
                <p>{item.traducao}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.grammarList_memo}>
        <p>
          Esta é uma lista aproximada um compilado de varios materiais sobre o
          assunto, em caso de dúvida consulte a Japan Foundation e o Japan
          Educational Exchanges and Services (JEES).
        </p>
      </div>
    </div>
  );
}
