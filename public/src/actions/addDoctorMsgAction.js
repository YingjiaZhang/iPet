/**
 * Created by sun on 8/23/16.
 */
export const addDoctorMsg = (text, msg_id)=>({
  type: 'ADD_DOCTOR_MSG',
  msg_id: msg_id,
  data: {
    isQuestion: false,
    msg: text
  }
});