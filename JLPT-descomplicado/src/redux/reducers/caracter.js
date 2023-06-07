import { GETCARACTER, GETNEXTCARACTER } from "../actions";

const initialState = {
  kana: "",
  tipo: "",
  caracter: "",
  posicao: undefined,
};

const caracter = (state = initialState, action) => {
  switch (action.type) {
    case GETCARACTER:
      return {
        kana: action.isKatakana,
        tipo: action.tipo,
        caracter: action.moji,
        posicao: action.index,
      };
    case GETNEXTCARACTER:
      return {
        kana: action.kana,
        tipo: action.tipo,
        caracter: action.next.letra,
        posicao: action.posicao,
      };
    default:
      return state;
  }
};

export default caracter;
