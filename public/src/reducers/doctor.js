const doctor = (state = {}, action)=> {
  switch (action.type) {
  case 'SHOW_INFO':
    return action.data;
  }
  return state;
};

export default doctor;
