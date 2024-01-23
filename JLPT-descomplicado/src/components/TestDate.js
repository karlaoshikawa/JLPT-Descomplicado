import style from "./TestDate.module.scss";

export default function TestDate() {
  return (
    <div className={style.testDate_container}>
      <p>Data do teste JLPT em 2024</p>
      <div className={style.testDate_box}>
        <p>a data ainda não foi definida</p>
        {/* <p>dia 2 de Julho(domingo)</p> */}
        {/* <p>dia 3 de Dezembro(domingo)</p> */}
      </div>
    </div>
  );
}
