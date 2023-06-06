import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import style from './DetalhesCaracter.module.scss';

import { hiraganaList } from "../data/hiragana"
import { hiraganaDakuon } from "../data/hiragana"
import { hiraganaYoon } from "../data/hiragana"
import { katakanaList } from "../data/katakana"
import { katakanaDakuon } from "../data/katakana"
import { katakanaYoon } from "../data/katakana"

export default function DetalhesCaracter() {
  const [getCaracter, setGetCatacter] = useState({})
  const moji = useSelector(state => state.caracter);

  const dataString = `${moji.kana}${moji.type === undefined ? 'List' : moji.type}`
  const data = [hiraganaList, hiraganaDakuon, hiraganaYoon, katakanaList, katakanaDakuon, katakanaYoon];
  const dataStringList = ['hiraganaList', 'hiraganaDakuon', 'hiraganaYoon', 'katakanaList', 'katakanaDakuon', 'katakanaYoon']

  useEffect(() => {
    const dataIndex = dataStringList.findIndex((item) => {
      return dataString === item
      }
    );
    const dataCaracter = data[dataIndex].find((carac) => {
        return carac.letra === moji.caracter;
    });
    setGetCatacter(dataCaracter)
    console.log(dataCaracter);
  }, []);


console.log(dataString);
  return (
    <div>
      <h2>{getCaracter.letra}</h2>
    <h1>{getCaracter.katakana}</h1>
    </div>
  )
}