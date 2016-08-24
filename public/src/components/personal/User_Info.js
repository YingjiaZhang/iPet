/**
 * Created by myc on 8/18/16.
 */
import React, {Component} from 'react';  // eslint-disable-line no-unused-vars

class User_Info extends Component {
  render() {
    let {username, email, description}=this.props;

    return (
        <div classID='userInfo'>
          <p>个人信息</p>
          <ul>
            <li><img className='user_img' src='images/1.jpg' alt='img not found'/></li>
            <li>用户名:{username}</li>
            <li>e-mail:{email}</li>
            <li>个人描述:{description}</li>
          </ul>
        </div>);
  }
}

export default User_Info;