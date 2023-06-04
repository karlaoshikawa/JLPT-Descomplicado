import imgHero from '../images/JLPT_hero.webp';
import style from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={style.hero_container}>
      <img src={imgHero} alt="saia do wakaranai, das primeiras palavras ao JLPT n1" />
    </div>
  )
}