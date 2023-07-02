import { Link } from "react-router-dom";
import FirstStep01 from "../images/first-steps-01.webp";
import FirstStep02 from "../images/tokyo-night.webp";
import style from "./FirstSteps.module.scss";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export default function FirstSteps() {
  return (
    <>
      <div className={style.firstSteps_container}>
        <div className={style.firstSteps_box}>
          <div className={style.firstSteps_boxItem}>
            <img src={FirstStep01} alt="Primeiros passos japones" />
          </div>
          <div className={style.firstSteps_boxItem}>
            <h1>Primeiros Passos:</h1>
            <h2>
              <FiArrowDown />
            </h2>
            <div className={style.firstSteps_boxCard}>
              <Link to="/hiragana">
                <p>Hiragana</p>
              </Link>
            </div>
            <h2>
              <FiArrowDown />
            </h2>
            <div className={style.firstSteps_boxCard}>
              <Link to="/katakana">
                <p>Katakana</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={style.firstSteps_box2}>
        <img src={FirstStep02} alt="Rumo a proficiencia em japones" />
        <h1>Rumo a proficiência:</h1>
        <div className={style.firstSteps_boxItem2}>
          <div className={style.firstSteps_boxCard2}>
            <Link to="/jlpt-n5">
              <p>N5</p>
            </Link>
          </div>
          <h2 className={style.firstSteps_mobileArrowRight}>
            <FiArrowRight />
          </h2>
          <h2 className={style.firstSteps_mobileArrow}>
            <FiArrowDown />
          </h2>
          <div className={style.firstSteps_boxCard2}>
            <Link to="/">
              <p>N4</p>
            </Link>
          </div>
          <h2 className={style.firstSteps_mobileArrowRight}>
            <FiArrowRight />
          </h2>
          <h2 className={style.firstSteps_mobileArrow}>
            <FiArrowDown />
          </h2>
          <div className={style.firstSteps_boxCard2}>
            <Link to="/">
              <p>N3</p>
            </Link>
          </div>
          <h2 className={style.firstSteps_mobileArrowRight}>
            <FiArrowRight />
          </h2>
          <h2 className={style.firstSteps_mobileArrow}>
            <FiArrowDown />
          </h2>
          <div className={style.firstSteps_boxCard2}>
            <Link to="/">
              <p>N2</p>
            </Link>
          </div>
          <h2 className={style.firstSteps_mobileArrowRight}>
            <FiArrowRight />
          </h2>
          <h2 className={style.firstSteps_mobileArrow}>
            <FiArrowDown />
          </h2>
          <div className={style.firstSteps_boxCard2}>
            <Link to="/">
              <p>N1</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
