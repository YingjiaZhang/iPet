/**
 * Created by qiyanzi on 16-8-22.
 */
const workspceItems = (state = {}, action)=> {
  switch (action.type) {
    case 'LOAD_WORK':
       return {data : action.data};
    case 'LOAD_DOCTOR_MSG':
      return {
        id:action.data._id,
        talk:action.data.talk
      };

  }
  return state;
};

export default workspceItems;