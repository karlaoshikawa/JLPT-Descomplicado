import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";
import style from './Hiragana.module.scss';

export default function Hiragana() {
  return (
    <div className={style.hiragana_container}>
      <Header />
      <h2>Hiragana Basicos</h2>
      <p>Clique no Caracter para ver os exemplos</p>
      <Table />
      <Footer />
    </div>
  )
}