/**
 * Created by sun on 8/20/16.
 */
import app from '../../app' ;
import request from 'supertest';

fdescribe('post /api/doctor_login', ()=> {
  it('should return statusCode 200 and doctorId', (done)=> {
    request(app)
        .post('/api/doctor_login')
        .type('form')
        .send({
          username: 'hanzi33',
          password: '111111'
        })
        .expect(200)
        .end((err, res)=> {
          if(res.text) {
            done();
          } else {
            done.fail(err);
          }
        });
  });

  it('should return statusCode 403', (done)=> {
    request(app)
        .post('/api/doctor_login')
        .type('form')
        .send({
          username: 'hanzi',
          password: '1123333'
        })
        .expect(403)
        .end((err, res)=> {
          if(res.text) {
            done();
          } else {
            done.fail(err);
          }
        });
  });

});