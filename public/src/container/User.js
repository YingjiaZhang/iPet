/**
 * Created by myc on 8/18/16.
 */
import {connect} from 'react-redux';
import User_Info from '../components/personal/User_Info';

const mapStateToProps = (state)=>(state);

const User = connect(mapStateToProps)(User_Info);

export default User;