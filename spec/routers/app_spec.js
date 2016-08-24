import app from "../../app";
import request from "supertest";

describe('get /api/doctors', ()=> {
  it('should return all doctors info', (done)=> {
    request(app)
        .get('/api/doctors')
        .expect([
          {
            '_id': '57b2c7b9d8e1ecbf54300000',
            'doctor_name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificates': '中级',
            '__v': 0
          },
          {
            '_id': '57b2c7b9d8e1ecbf54300001',
            'doctor_name': '李斯',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '外科',
            'hospital': '西安高级动物医院',
            'certificates': '中级',
            '__v': 0
          },
          {
            '_id': '57b2c7b9d8e1ecbf54300002',
            'doctor_name': '王明',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京中级动物医院',
            'certificates': '中级',
            '__v': 0
          },
          {
            '_id': '57b2c7b9d8e1ecbf54300003',
            'doctor_name': '吴未',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京中高级动物医院',
            'certificates': '中级',
            '__v': 0
          },
          {
            '_id': '57b2c7b9d8e1ecbf54300004',
            'doctor_name': '长孙渺渺',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '西安中高级动物医院',
            'certificates': '中级',
            '__v': 0
          },
          {
            '_id': '57b2c7b9d8e1ecbf54300005',
            'doctor_name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '杭州宠物医院',
            'certificates': '中级',
            '__v': 0
          },
          {
            '_id': '57b2c7b9d8e1ecbf54300006',
            'doctor_name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '南京高级宠物医院',
            'certificates': '中级',
            '__v': 0
          },
          {
            '_id': '57b2c7b9d8e1ecbf54300007',
            'doctor_name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京高级动物医院',
            'certificates': '中级',
            '__v': 0
          },
          {
            '_id': '57b2c7b9d8e1ecbf54300008',
            'doctor_name': '张三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificates': '中级',
            '__v': 0
          },
          {
            '_id': '57b2c7b9d8e1ecbf54300009',
            'doctor_name': '张三三',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京中级动物医院',
            'certificates': '中级',
            '__v': 0
          },
          {
            '_id': '57b2c7b9d8e1ecbf54300010',
            'doctor_name': '张三二',
            'image': 'images/1.jpg',
            'email': '123456@qq.com',
            'type': '内科',
            'hospital': '北京动物医院',
            'certificates': '中级',
            '__v': 0
          }
        ])
        .end((err)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });
});

describe('get /api/doctors:id', ()=> {
  it('should return a doctor info', (done)=> {
    request(app)
        .get('/api/doctors/57b2c7b9d8e1ecbf54300000')
        .expect({
          '_id': '57b2c7b9d8e1ecbf54300000',
          'doctor_name': '张三',
          'image': 'images/1.jpg',
          'email': '123456@qq.com',
          'type': '内科',
          'hospital': '北京动物医院',
          'certificates': '中级',
          '__v': 0
        })
        .end((err)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });

  it('should return null', (done)=> {
    request(app)
        .get('/api/doctors/57b2c7b9d8e1ecbf54300080')
        .expect(404)
        .end((err)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });

});
