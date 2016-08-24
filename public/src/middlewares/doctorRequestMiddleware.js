/**
 * Created by myc on 8/17/16.
 */
import request from 'superagent';

const doctorRequestMiddleware = store =>next =>action=> { // eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'DOCTOR_INIT':
    request.get('/api/doctors/' + action.doctor_id)
        .end((err, res)=> {
          next({
            type: 'SHOW_INFO',
            data: res.body
          });
        });
    break;
  }
  next(action);
};
export default doctorRequestMiddleware;
