/**
 * Created by sun on 8/21/16.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import DoctorInfo from '../../container/Doctor';
import UserMsgBoard from '../../container/AddUserMsg';
import Head from '../Head';
import Foot from '../Foot';

class UserBoard extends Component {

  render() {
    return (
        <div className="user_talk">
          <Head />
          <div className="user_conversion_box">
            <DoctorInfo doctor_id={this.props.params.doctor_id}/>
            <UserMsgBoard doctor_id={this.props.params.doctor_id}/>
          </div>
          <Foot/>
        </div>
    );
  }
}

export default UserBoard;