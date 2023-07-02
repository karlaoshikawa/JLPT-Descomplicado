import { Link } from "react-router-dom";
import style from "./LinksHome.module.scss";
import TestDate from "./TestDate";

export default function LinksHome() {
  return (
    <div className={style.linksHome_container}>
      <TestDate />
      <div className={style.linksHome_line}></div>
      <Link to={"/o-que-e-jlpt"}>
        <p>O que é JLPT?</p>
      </Link>
      <div className={style.linksHome_line}></div>
      <Link to={"/sobre-o-teste"}>
        <p>Sobre o teste</p>
      </Link>
      <div className={style.linksHome_line}></div>
      <Link to={"/como-se-preparar"}>
        <p>Como se preparar</p>
      </Link>
    </div>
  );
};
