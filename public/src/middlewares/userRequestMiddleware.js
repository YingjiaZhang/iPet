/**
 * Created by zhangyiru on 16-8-17.
 */

import request from 'superagent';

const userRequestMiddleware = store => next => action=> { // eslint-disable-line no-unused-vars

  switch (action.type) {
  case 'ADD_USER_MSG':
    request.put('/api/messages')
        .type('form')
        .query({id: action.msg_id})
        .send(action.data)
        .end((err, res)=> {
          next({
            type: 'LOAD_MSG',
            data: res.body
          });
        });
    break;

  case 'GET_USERID':
    request
        .get('/api/login/cookie')
        .end((err, res)=> {
          if (res.status === 200) {
            store.dispatch({
              type: 'MSG_INIT',
              userId: res.text,
              doctorId: action.doctor_id
            });
          } else {
            location.href = 'http://localhost:3000';
          }

        });
    break;

  case 'MSG_INIT':
    request.get('/api/messages/load')
        .query({
          userId: action.userId,
          doctorId: action.doctorId
        }).end((err, res)=> {
          store.dispatch({
            type: 'LOAD_MSG',
            data: res.body
          });
        });
    break;
  }

  next(action);
};

export default  userRequestMiddleware;
