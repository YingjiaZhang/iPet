import request from 'superagent';

const doctorRequestMiddleware = store=> next=> action=> {  // eslint-disable-line no-unused-vars

  switch (action.type) {
  case 'DOCTORS_INIT':
    request.get('/api/doctors')
        .end((err, res)=> {
          next({
            type: 'DOCTORS_LOAD',
            data: res.body
          });
        });
    break;
  }
  next(action);
};

export default doctorRequestMiddleware;