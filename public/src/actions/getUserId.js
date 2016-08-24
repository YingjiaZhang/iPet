/**
 * Created by ritter on 16-8-22.
 */

export const getUserId = (doctor_id)=>({
  type: 'GET_USERID',
  doctor_id
});