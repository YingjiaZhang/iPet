/**
 * Created by myc on 8/18/16.
 */
const user = (state = {}, action)=> {
  switch (action.type) {
  case 'USER_LOADED':
    return action.data;
  }
  return state;
};

export default user;