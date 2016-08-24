/**
 * Created by sun on 8/20/16.
 */
import app from '../../app' ;
import request from 'supertest';
import cookie from 'cookie';

describe('post /api/login', ()=> {
  it('should return statusCode 200', (done)=> {
    request(app)
        .post('/api/login')
        .type('form')
        .send({
          username: 'hanzi22',
          password: '123456'
        }).end((err, res)=> {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });

  it('should return statusCode 403', (done)=> {
    request(app)
        .post('/api/login')
        .type('form')
        .send({
          username: 'hanzi',
          password: '1123333'
        }).end((err, res)=> {
      expect(res.statusCode).toEqual(403);
      done();
    });
  });

  it('should return statusCode 200 and has cookie', (done)=> {
    request(app)
        .post('/api/login')
        .type('form')
        .send({
          username: 'hanzi22',
          password: '123456'
        })
        .expect(200)
        .end((err, res)=> {
          if (res.headers['set-cookie'].map(h => cookie.parse(h))
                  .some(c => c.sessionId)) {
            done();
          } else {
            done.fail('cookie not exist');
          }
        });
  });

  it('should return statusCode 403 and no cookie', (done)=> {
    request(app)
        .post('/api/login')
        .type('form')
        .send({
          username: 'hanzi2',
          password: '123456'
        })
        .expect(403)
        .end((err, res)=> {
          if (res.headers['set-cookie'] !== 'undefined') {
            done();
          } else {
            done.fail(err);
          }
        });
  });

  it('should return statusCode 403', (done)=> {
    request(app)
        .get('/api/login/cookie')
        .expect(403)
        .end((err, res)=> {
          if (res.status === 403) {
            done()
          } else {
            done.fail(err);
          }
        });
  });

  it('should return statusCode 200 and userId', (done)=> {
    const agent = request.agent(app);

    agent.post('/api/login')
        .type('form')
        .send({
          username: 'hanzi22',
          password: '123456'
        })
        .end(() => {
          agent.get('/api/login/cookie')
              .expect(200)
              .end((err, res)=>{
                if (err) {
                  done.fail(err);
                } else {
                  done();
                }
              })
        });
  });

});