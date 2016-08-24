const regRouter = (app)=> {
  app.use('/api/doctors', require('./doctors'));
  app.use('/api/login', require('./users'));
  app.use('/api/messages', require('./messages'));
    app.use('/api/doctor_login', require('./doctorlogin'));
};
export default regRouter;