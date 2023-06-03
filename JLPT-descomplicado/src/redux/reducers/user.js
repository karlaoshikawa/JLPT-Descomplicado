import { USERLEVEL } from "../actions";

const initialState = {
  trilha: '',
  nivel: '',
  level:'',
}

const user = (state = initialState, action) => {
  switch (action.type) {
  case USERLEVEL:
    return ({
      ...state,
    });
  default:
    return state;
  }
};

export default user;