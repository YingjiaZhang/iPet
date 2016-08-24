/**
 * Created by zhangyiru on 16-8-16.
 */
export const addUserMsg = (text, msg_id)=>({
  type: 'ADD_USER_MSG',
  msg_id: msg_id,
  data: {
    isQuestion: true,
    msg: text
  }
});