/**
 * Created by hxc on 16-8-22.
 */
const switchLoginAndSignIn = (state = true, action)=> {
  switch (action.type) {
  case 'SHOW_LOGIN_BOARD':
    return action.text === 'login' ? true : false;
  }
  return state;
};

export default switchLoginAndSignIn;