import style from "./TestDate.module.scss";

export default function TestDate() {
  return (
    <div className={style.testDate_container}>
      <h2>Data do teste JLPT</h2>
      <div className={style.testDate_box}>
        <h3>dia 2 de Julho de 2023 (domingo)</h3>
        <h3>dia 3 de Dezembro de 2023 (domingo)</h3>
      </div>
    </div>
  );
}
