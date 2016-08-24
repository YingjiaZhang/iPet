import express from 'express';
import Doctor from '../models/Doctor';

let router = express.Router();

router.get('/', (req, res)=> {
  Doctor.find((err, data)=> {
    res.send(data);
  });
});

router.get('/:id', (req, res)=> {
  Doctor.findOne({
    _id: req.params.id
  }, (err, data)=> {
    if (data) {
      res.send(data);
    } else {
      res.sendStatus(404);
    }
  });
});

module.exports = router;