import style from './TitleAndSubtitle.module.scss';

export default function TitleAndSubtitle({wordH3, wordP}) {
  return (
    <div className={style.TitleAndSubtitle_container} >
      <h3>{wordH3}</h3>
      <p className={style.hiragana_p}>{wordP}</p>
    </div>
  )
}