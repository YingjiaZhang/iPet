import mongoose from 'mongoose';
import rawData from './fixture/raw-data';
import Doctor from '../models/Doctor';
import User from '../models/User';
import Message from '../models/Message';
import DoctorLogin from '../models/DoctorLogin';
const modelsMap = {
  Doctor,
  User,
  Message,
  DoctorLogin
};

let docs = Object.keys(rawData);

mongoose.connect('mongodb://localhost/doctors');

Object.keys(rawData).forEach(v => {
  modelsMap[v].remove(()=> {
    modelsMap[v].create(rawData[v], ()=> {
      docs = docs.filter(doc => doc !== v);
      if (docs.length === 0) {
        process.exit(0);
      }
    });
  });
});

