import { Link } from "react-router-dom";
import style from "./LinksHome.module.scss";

export default function LinksHome() {
  return (
    <div className={style.linksHome_container}>
      <Link to={'/o-que-e-jlpt'}>
      <p>O que é JLPT?</p>
      </Link>
    </div>
  )
};
