import { combineReducers } from 'redux';
import user from './user';
import caracter from './caracter'

const rootReducer = combineReducers({ user, caracter });

export default rootReducer;