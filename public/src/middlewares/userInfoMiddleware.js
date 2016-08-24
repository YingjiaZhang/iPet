/**
 * Created by myc on 8/17/16.
 */
import request from 'superagent';

const userInfoMiddleware = store =>next =>action=> {  // eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'INIT':
    request.get('/api/users/47b2c7b9d8e1ecbf54300010')
        .end((err, res)=> {
          next({
            type: 'USER_LOADED',
            data: res.body
          });
        });
    break;
  }
  next(action);
};

export default userInfoMiddleware;