import mongoose from 'mongoose';

const User = mongoose.model('User',{
  _id:String,
  username:String,
  password:String,
  email:String,
  description:String
});
export default User;