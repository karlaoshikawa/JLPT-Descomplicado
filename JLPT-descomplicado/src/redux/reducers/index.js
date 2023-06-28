import { combineReducers } from 'redux';
import user from './user';
import caracter from './caracter'
import nlevel from './nlevel'

const rootReducer = combineReducers({ user, caracter, nlevel });

export default rootReducer;