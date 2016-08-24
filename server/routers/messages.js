/**
 * Created by zhangyiru on 16-8-16.
 */

import express from 'express';// eslint-disable-line no-unused-console
import Message from '../models/Message';

let router = express.Router();

router.put('/', (req, res)=> {
  Message.findById(req.query.id, (err, message)=> {
    message.talk.push(req.body);
    Message.update({_id: message._id}, message, ()=> {
      res.send(message);
    });
  });
});

router.get('/load', (req, res)=> {
  Message.findOne({
    userId: req.query.userId,
    doctorId: req.query.doctorId
  }, (err, message)=> {
    message ?
        res.send(message) :
        new Message({
          userId: req.query.userId,
          doctorId: req.query.doctorId
        }).save((err, msg)=> {
          res.send(msg);
        });
  });
});

router.get('/load_work',(req,res)=>{
  Message.find({
    doctorId:req.query.doctorId
  },(err,data)=>{
    res.send(data);
  });
});

module.exports = router;