import { ITEMLENGHT } from "../actions";

const initialState = {
  tipo: "",
  posicao: undefined,
};

const nlevel = (state = initialState, action) => {
  switch (action.type) {
    case ITEMLENGHT:
      return {
        tipo: action.tipo,
        posicao: action.posicao,
      };
    default: return state;
  }
}

export default nlevel;
