import { Link } from "react-router-dom";
import style from "./LinksHome.module.scss";
import TestDate from "./TestDate";

export default function LinksHome() {
  return (
    <div className={style.linksHome_container}>
      <Link to={'/o-que-e-jlpt'}>
      <p>O que é JLPT?</p>
      </Link>
       <Link to={'/sobre-o-teste'}>
      <p>Sobre o teste</p>
      </Link>
      <TestDate />
    </div>
  )
};
