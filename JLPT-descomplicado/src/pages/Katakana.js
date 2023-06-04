import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";
import style from '../components/TitleAndSubtitle.module.scss';

import { katakanaList } from "../data/katakana"
import { katakanaDakuon } from "../data/katakana"
import { katakanaYoon } from "../data/katakana"
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function Hiragana() {
  return (
    <div className={style.TitleAndSubtitle_container} >
      <Header />
      <TitleAndSubtitle wordH3={"Katakana"} wordP={"Clique no Caracter para ver os exemplos"}/>
      <Table caracteres={katakanaList} katakana={true}/>

      <TitleAndSubtitle wordH3={"Katakana Dakuon"} wordP={"Clique no Caracter para ver os exemplos"}/>
      <Table caracteres={katakanaDakuon} katakana={true}/>

      <TitleAndSubtitle wordH3={"Katakana Yoon"} wordP={"Clique no Caracter para ver os exemplos"}/>
      <Table caracteres={katakanaYoon} tipo={true} katakana={true} />
      <Footer />
    </div>
  )
}