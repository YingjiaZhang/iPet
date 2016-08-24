const doctors = (state = [], action)=> {
  switch (action.type) {
  case 'DOCTORS_LOAD':
    return action.data;
  }
  return state;
};
export default doctors;