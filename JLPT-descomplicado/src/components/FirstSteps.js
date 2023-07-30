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
              <Link to="/hiragana" data-testid="link-hiragana-fsteps">
                <p>Hiragana</p>
              </Link>
            </div>
            <h2>
              <FiArrowDown />
            </h2>
            <div className={style.firstSteps_boxCard}>
              <Link to="/katakana" data-testid="link-katakana-fsteps">
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
            <Link to="/jlpt-n5" data-testid="link-jlptn5-fsteps">
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
            <Link to="/jlpt-n4" data-testid="link-jlptn4-fsteps">
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
            <Link to="/jlpt-n3" data-testid="link-jlptn3-fsteps">
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
            <Link to="/jlpt-n2" data-testid="link-jlptn2-fsteps">
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
            <Link to="/jlpt-n1" data-testid="link-jlptn1-fsteps">
              <p>N1</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
