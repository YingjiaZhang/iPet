import mongoose from 'mongoose';

const DoctorLogin = mongoose.model('DoctorLogin', {
  _id: String,
  doctor_name: String,
  password: String
});

export default DoctorLogin;