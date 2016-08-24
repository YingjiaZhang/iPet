/**
 * Created by zhangyiru on 16-8-17.
 */
/*global describe it fit*/
import app from '../../app';
import request from 'supertest';

describe('put /messages ', ()=> {
  it('should update talk with one message', (done)=> {
    request(app)
        .put('/api/messages')
        .type('form')
        .query({id: '57b6815bf8885d021d874325'})
        .send({
          isQuestion: true,
          msg: '问：问题测试'
        })
        .end((error, res)=> {
          if (error) {
            done.fail(error);
          } else {
            expect(res.body.talk[res.body.talk.length - 1].msg).toEqual('问：问题测试');
            done();
          }
        });
  });
});

describe('get /messages/load ', ()=> {
  it('should get a message Object', (done)=> {
    request(app)
        .get('/api/messages/load')
        .query({
          userId: '47b2c7b9d8e1ecbf54300011',
          doctorId: '57b2c7b9d8e1ecbf54300010'
        }).end((err, res)=> {
      expect(res.body.talk.length).toEqual(1);
      done();
    });
  });
  it('should insert a message Object', (done)=> {
    request(app)
        .get('/api/messages/load')
        .query({
          userId: '47b2c7b9d8e1ecbf54300011',
          doctorId: '557b2c7b9d8e1ecbf54300004'
        }).end((err, res)=> {
      expect(res.body.talk.length).toEqual(0);
      done();
    });
  });
});

describe('get /messages/load_work ', ()=> {

  it('should get all message Object', (done)=> {
    request(app)
        .get('/api/messages/load_work')
        .query({
          doctorId: '57b2c7b9d8e1ecbf54300000'
        }).end((err, res)=> {
      expect(res.body.length).toEqual(2);
      done();
    });
  });

});



