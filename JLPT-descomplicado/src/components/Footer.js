import { Link } from "react-router-dom";
import logoJLPT from "../images/logo-header-site.png";
import style from "./Footer.module.scss";
import { FiInstagram } from "react-icons/fi";
import { useMemo } from "react";

export default function Footer() {
  useMemo(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  
  return (
    <div className={style.footer_container}>
      <div className={style.footer_link_box}>
        <div className={style.footer_link}>
          <div className={style.footer_linkLogo}>
            <Link to="/" data-testid="link-to-home-footer">
              <img src={logoJLPT} alt="logo JLPT descomplicado" />
            </Link>
            <a
              className={style.footer_instagram}
              href="https://www.instagram.com/jlpt_descomplicado/"
              target="_blank"
              rel="noreferrer"
              data-testid="link-instagram-footer"
            >
              <h3>
                <FiInstagram />
                {`   Instagram`}
              </h3>
              <p>@jlpt_descomplicado</p>
            </a>
          </div>
        </div>
        <div>className={style.footer_line}</div>
        <div className={style.footer_link}>
          <h2>Categoria</h2>
          <Link to="/hiragana" data-testid="link-to-hiragana-footer">
            <div className="header-link">Hiragana</div>
          </Link>
          <Link to="/katakana" data-testid="link-to-katakana-footer">
            <div className="header-link">Katakana</div>
          </Link>
          <Link to="/jlpt/n5" data-testid="link-to-n5-footer">
            <div className="header-link">JLPT N5</div>
          </Link>
          <Link to="/jlpt/n4" data-testid="link-to-n4-footer">
            <div className="header-link">JLPT N4</div>
          </Link>
          <Link to="/jlpt/n3" data-testid="link-to-n3-footer">
            <div className="header-link">JLPT N3</div>
          </Link>
          <Link to="/jlpt/n2" data-testid="link-to-n2-footer">
            <div className="header-link">JLPT N2</div>
          </Link>
          <Link to="/jlpt/n1" data-testid="link-to-n1-footer">
            <div className="header-link">JLPT N1</div>
          </Link>
        </div>
        <div className={style.footer_line}></div>
        <div className={style.footer_link}>
          <h2>Kanji</h2>
          <Link to="/jlpt/n5/kanji" data-testid="link-kanji-n5-footer">
            <div>JLPT N5</div>
          </Link>
          <Link to="/jlpt/n4/kanji" data-testid="link-kanji-n4-footer">
            <div>JLPT N4</div>
          </Link>
          <Link to="/jlpt/n3/kanji" data-testid="link-kanji-n3-footer">
            <div>JLPT N3</div>
          </Link>
          <Link to="/jlpt/n2/kanji" data-testid="link-kanji-n2-footer">
            <div>JLPT N2</div>
          </Link>
          <Link to="/jlpt/n1/kanji" data-testid="link-kanji-n1-footer">
            <div>JLPT N1</div>
          </Link>
        </div>
        <div className={style.footer_line}></div>

        <div className={style.footer_link}>
          <h2>Vocabulário</h2>
          <Link
            to="/jlpt/n5/vocabulary"
            data-testid="link-vocabulary-n5-footer"
          >
            <div>JLPT N5</div>
          </Link>
          <Link
            to="/jlpt/n4/vocabulary"
            data-testid="link-vocabulary-n4-footer"
          >
            <div>JLPT N4</div>
          </Link>
          <Link
            to="/jlpt/n3/vocabulary"
            data-testid="link-vocabulary-n3-footer"
          >
            <div>JLPT N3</div>
          </Link>
          <Link
            to="/jlpt/n2/vocabulary"
            data-testid="link-vocabulary-n2-footer"
          >
            <div>JLPT N2</div>
          </Link>
          <Link
            to="/jlpt/n1/vocabulary"
            data-testid="link-vocabulary-n1-footer"
          >
            <div>JLPT N1</div>
          </Link>
        </div>
        <div className={style.footer_line}></div>
        <div className={style.footer_link}>
          <h2>Gramática</h2>
          <Link to="/jlpt/n5/grammar" data-testid="link-grammar-n5-footer">
            <div>JLPT N5</div>
          </Link>
          <Link to="/jlpt/n4/grammar" data-testid="link-grammar-n4-footer">
            <div>JLPT N4</div>
          </Link>
          <Link to="/jlpt/n3/grammar" data-testid="link-grammar-n3-footer">
            <div>JLPT N3</div>
          </Link>
          <Link to="/jlpt/n2/grammar" data-testid="link-grammar-n2-footer">
            <div>JLPT N2</div>
          </Link>
          <Link to="/jlpt/n1/grammar" data-testid="link-grammar-n1-footer">
            <div>JLPT N1</div>
          </Link>
        </div>
        <div className={style.footer_line}></div>
        <div className={style.footer_link}>
          <h2>Links Úteis</h2>
          <Link to={"/o-que-e-jlpt"} data-testid="link-oq-jlpt-footer">
            <p>O que é JLPT?</p>
          </Link>
          <Link to={"/sobre-o-teste"} data-testid="link-sobre-teste-footer">
            <p>Sobre o teste</p>
          </Link>
          <Link to={"/como-se-preparar"} data-testid="link-como-preparar-footer">
            <p>Como se preparar</p>
          </Link>
        </div>
      </div>
      <div className={style.footer_copyright}>
        <p className={style.footer_copyright}>
          Copyright &copy; 2023 JLPT - Descomplicado. All rights reserved.
        </p>
      </div>
    </div>
  );
}
