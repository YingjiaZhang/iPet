import {combineReducers} from 'redux';
import doctors from './doctors';
import doctor from './doctor';
import user_login from './login';
import messages from './messages';
import isLogin from './switchLoginAndSignin';

const resultList = combineReducers({
  doctors,
  doctor,
  user_login,
  messages,
  isLogin,

});
export default resultList;
