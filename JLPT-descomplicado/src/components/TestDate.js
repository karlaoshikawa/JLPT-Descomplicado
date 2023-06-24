import style from "./TestDate.module.scss";

export default function TestDate() {
  return (
    <div className={style.testDate_container}>
      <p>Data do teste JLPT em 2023</p>
      <div className={style.testDate_box}>
        <p>dia 2 de Julho(domingo)</p>
        <p>dia 3 de Dezembro(domingo)</p>
      </div>
    </div>
  );
}
