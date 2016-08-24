import {connect} from 'react-redux';
import UserMessageBoard from '../components/user_board/UserMessageBoard';
import {addUserMsg} from '../actions/addUserMsgAction';
import {getUserId} from '../actions/getUserId';

const mapStateToProps = (state)=>(state);
const mapDispatchToProps = (dispatch)=>({
  addUserMsg: (text, msg_id)=> {
    dispatch(addUserMsg(text, msg_id));
  },
  getUserId:(doctor_id)=>{
    dispatch(getUserId(doctor_id));
  }
});

const AddUserMsg = connect(mapStateToProps, mapDispatchToProps)(UserMessageBoard);

export default AddUserMsg;

