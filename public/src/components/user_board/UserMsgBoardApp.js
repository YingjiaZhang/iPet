/**
 * Created by zhangyiru on 16-8-17.
 */
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import AddUserMsg from '../../container/AddUserMsg';

class UserMsgBoardApp extends Component {
  render() {
    return (
      <div className="userMsg">
        <AddUserMsg/>
      </div>
    );
  }
}

export default UserMsgBoardApp;
