/**
 * Created by myc on 8/17/16.
 */
import {connect} from 'react-redux';
import Doctor from '../components/user_board/DoctorInfo';
import {doctorInit} from '../actions/doctorInit';

const mapStateToProps = (state)=> (state);


const mapDispatchToProps = (dispacth) => ({
  doctorInit: (doctor_id) => {
    dispacth(doctorInit(doctor_id));
  }
});


const DoctorInfo = connect(mapStateToProps, mapDispatchToProps)(Doctor);

export default DoctorInfo;