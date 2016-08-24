import request from 'superagent';
const userLoginMiddleware = store=>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'LOGIN':
    if(action.loginType === false) {
      request.post('/api/login')
          .type('form')
          .send({
            username: action.data.username,
            password: action.data.password
          })
          .end((err, res)=> {
            next({
              type: 'LOGIN_RESULT',
              statusCode: res.statusCode
            });
          });
    } else {
      request.post('/api/doctor_login')
          .type('form')
          .send({
            doctor_name: action.data.username,
            password: action.data.password
          })
          .end((err, res)=> {
            if(res.status === 200) {
              location.href = 'http://localhost:3000/work_index.html';
            }
            else {

            }
            //console.log(res.status);
          });
    }

    break;
  }
  next(action);
};
export default userLoginMiddleware;