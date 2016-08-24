/**
 * Created by zhangyiru on 16-8-16.
 */
import mongoose from 'mongoose';

const Message = mongoose.model('Message', {
  userId: String,
  doctorId: String,
  talk: [{
    isQuestion: Boolean,
    msg: String
  }]
});

export default Message;