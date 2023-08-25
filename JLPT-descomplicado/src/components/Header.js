import { Link } from "react-router-dom";
import logoJLPT from "../images/logo-header-site.png";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <div className={style.header_container}>
      <div className={style.header_link_box}>
        <Link to="/" data-testid="link-to-home">
          <img src={logoJLPT} alt="logo JLPT descomplicado" />
        </Link>
        <div className={style.header_link}>
          <Link to="/hiragana" data-testid="link-to-hiragana">
            <div>Hiragana</div>
          </Link>
          <Link to="/katakana" data-testid="link-to-katakana">
            <div>Katakana</div>
          </Link>
          <Link to="/jlpt/n5" data-testid="link-to-n5">
            <div>N5</div>
          </Link>
          <Link to="/jlpt/n4" data-testid="link-to-n4">
            <div>N4</div>
          </Link>
          <Link to="/jlpt/n3" data-testid="link-to-n3">
            <div>N3</div>
          </Link>
          <Link to="/jlpt/n2" data-testid="link-to-n2">
            <div>N2</div>
          </Link>
          <Link to="/jlpt/n1" data-testid="link-to-n1">
            <div>N1</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
