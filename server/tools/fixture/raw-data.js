export default {
  Doctor: [{
    _id: '57b2c7b9d8e1ecbf54300000',
    doctor_name: '张三',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '内科',
    hospital: '北京动物医院',
    certificates: '中级'
  }, {
    _id: '57b2c7b9d8e1ecbf54300001',
    doctor_name: '李斯',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '外科',
    hospital: '西安高级动物医院',
    certificates: '中级'
  }, {
    _id: '57b2c7b9d8e1ecbf54300002',
    doctor_name: '王明',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '内科',
    hospital: '北京中级动物医院',
    certificates: '中级'
  }, {
    _id: '57b2c7b9d8e1ecbf54300003',
    doctor_name: '吴未',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '内科',
    hospital: '北京中高级动物医院',
    certificates: '中级'
  }, {
    _id: '57b2c7b9d8e1ecbf54300004',
    doctor_name: '长孙渺渺',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '内科',
    hospital: '西安中高级动物医院',
    certificates: '中级'
  }, {
    _id: '57b2c7b9d8e1ecbf54300005',
    doctor_name: '张三',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '内科',
    hospital: '杭州宠物医院',
    certificates: '中级'
  }, {
    _id: '57b2c7b9d8e1ecbf54300006',
    doctor_name: '张三',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '内科',
    hospital: '南京高级宠物医院',
    certificates: '中级'
  }, {
    _id: '57b2c7b9d8e1ecbf54300007',
    doctor_name: '张三',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '内科',
    hospital: '北京高级动物医院',
    certificates: '中级'
  }, {
    _id: '57b2c7b9d8e1ecbf54300008',
    doctor_name: '张三',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '内科',
    hospital: '北京动物医院',
    certificates: '中级'
  }, {
    _id: '57b2c7b9d8e1ecbf54300009',
    doctor_name: '张三三',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '内科',
    hospital: '北京中级动物医院',
    certificates: '中级'
  }, {
    _id: '57b2c7b9d8e1ecbf54300010',
    doctor_name: '张三二',
    image: 'images/1.jpg',
    email: '123456@qq.com',
    type: '内科',
    hospital: '北京动物医院',
    certificates: '中级'
  }],
  User: [
    {
      _id: '47b2c7b9d8e1ecbf54300010',
      username: 'hanzi1',
      password: '123456',
      email: '515161153@qq.com',
      description: 'lol i love dog'
    }, {
      _id: '47b2c7b9d8e1ecbf54300011',
      username: 'hanzi22',
      password: '123456',
      email: '515161153@qq.com',
      description: 'lol i love dog'
    }, {
      _id: '47b2c7b9d8e1ecbf54300012',
      username: 'hanzi12',
      password: '123456',
      email: '515161153@qq.com'
    }],
  Message: [
    {
      _id: '57b6815bf8885d021d874325',
      userId: '47b2c7b9d8e1ecbf54300011',
      doctorId: '57b2c7b9d8e1ecbf54300000',
      talk: [{
        isQuestion: true,
        msg: '问:你好?<br/>'
      },{
        isQuestion: true,
        msg: '问:你好?'
      }]
    }, {
      _id: '57b6815bf8885d021d874320',
      userId: '47b2c7b9d8e1ecbf54300012',
      doctorId: '57b2c7b9d8e1ecbf54300000',
      talk: [{
        isQuestion: true,
        msg: '问:你好?2222'
      }]
    }, {
      _id: '57b6815bf8885d021d874327',
      userId: '47b2c7b9d8e1ecbf54300011',
      doctorId: '57b2c7b9d8e1ecbf54300010',
      talk: [{
        isQuestion: false,
        msg: '问:问题1?<br/>'
      }]
    }],
  DoctorLogin: [
    {
      _id: '57b2c7b9d8e1ecbf54300000',
      doctor_name: 'hanzi33',
      password: '111111'
    }]
};