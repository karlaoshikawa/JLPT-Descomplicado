import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";
import style from './Hiragana.module.scss';

import { hiraganaList } from "../data/hiragana"
import { hiraganaDakuon } from "../data/hiragana"
import { hiraganaYoon } from "../data/hiragana"

export default function Hiragana() {
  return (
    <div className={style.hiragana_container} >
      <Header />
      <h3>Hiragana</h3>
      <p className={style.hiragana_p}>Clique no Caracter para ver os exemplos</p>
      <Table caracteres={hiraganaList} />

      <h3>Hiragana Dakuon</h3>
      <p className={style.hiragana_p}>Clique no Caracter para ver os exemplos</p>
      <Table caracteres={hiraganaDakuon} />

            <h3>Hiragana Yoon</h3>
      <p className={style.hiragana_p}>Clique no Caracter para ver os exemplos</p>
      <Table caracteres={ hiraganaYoon } tipo={true}/>
      <Footer />
    </div>
  )
}