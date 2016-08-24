import express from 'express';
import DoctorLogin from '../models/DoctorLogin';

let router = express.Router();

router.post('/', (req, res)=> {
  DoctorLogin.findOne({
    doctor_name: req.body.doctor_name,
    password: req.body.password
  }, (err, data)=> {

    if (data !== null) {
      res.status(200).send(data._id);
    } else {
      res.sendStatus(403);
    }

  });
});
module.exports = router;