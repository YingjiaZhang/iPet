import mongoose from 'mongoose';

const Doctor = mongoose.model('Doctor', {
  _id: String,
  doctor_name: String,
  image: String,
  email: String,
  type: String,
  hospital: String,
  certificates: String
});

export default Doctor;