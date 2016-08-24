/**
 * Created by zhangyiru on 16-8-16.
 */
const messages = (state = [], action)=> {
  switch (action.type) {
  case 'LOAD_MSG':
    return {
      id:action.data._id,
      talk:action.data.talk
    };

  }
  return state;
};

export default messages;