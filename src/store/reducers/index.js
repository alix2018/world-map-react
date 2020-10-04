import {combineReducers} from 'redux';
import login from './login';
import registration from './registration';

export default combineReducers({
  login,
  registration
});