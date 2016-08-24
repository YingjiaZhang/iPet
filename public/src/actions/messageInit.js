/**
 * Created by sun on 8/21/16.
 */
export const messageInit = (userId, doctorId)=>({
  type: 'MSG_INIT',
  userId,
  doctorId
});
