import { GETCARACTER } from "../actions";

const initialState = {
  kana: "",
  type: "",
  caracter: "",
};

const caracter = (state = initialState, action) => {
  switch (action.type) {
    case GETCARACTER:
      return {
        kana: action.isKatakana,
        type: action.tipo,
        caracter: action.moji,
      };
    default:
      return state;
  }
};

export default caracter;
