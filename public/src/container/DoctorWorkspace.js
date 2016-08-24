/**
 * Created by ritter on 16-8-23.
 */
import {connect} from 'react-redux';
import WorkList from '../components/workspace/WorkList';
import {workInit} from '../actions/workInit';
import {addDoctorMsg} from '../actions/addDoctorMsgAction';

const mapStateToProps = (state)=> ( state);

const mapDispatchToProps = (dispatch)=>({
  addDoctorMsg:(text, msg_id)=> {
    dispatch(addDoctorMsg(text, msg_id));
  },
  workInit: ()=> {
    dispatch(workInit());
  }
});

const DoctorWorkspace = connect(mapStateToProps,mapDispatchToProps)(WorkList);
export default DoctorWorkspace;
