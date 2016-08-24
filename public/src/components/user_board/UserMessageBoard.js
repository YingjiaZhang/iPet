/**
 * Created by zhangyiru on 16-8-16.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import MsgItem from './MsgItem';

class UserMessageBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentWillMount() {
    this.props.getUserId(this.props.doctor_id);
  }

  handleClick() {
    let user_input = this.refs.message.value.trim();
    if (user_input) {
      this.props.addUserMsg(user_input, this.props.messages.id);
    }

    this.refs.message.value = '';
  }

  render() {
    let talk = this.props.messages.talk ? this.props.messages.talk : [];
    return (
        <div id="right" className="user_board">
          <div className='user_board_title'>与{this.props.doctor.doctor_name}医生交谈中...</div>
          <div className="all_message" ref="history">
            {
              talk.map((v, k)=>(
                  <MsgItem key={k + 1} isQuestion={v.isQuestion} msg={v.msg}/>
              ))
            }
          </div>

          {/*<textarea id="sendMessage" ref="message"/><br/>*/}
          {/*<input type="button" onClick={this.handleClick.bind(this)} value="提交"/>*/}
          {/*<input type="button" value="结束对话"/>*/}
          <div className="inputMessageDiv">
            <span className="select_box"> 
              <img src="/images/67.gif" />
              <img src="/images/images.png" />
              <img src="/images/webcam.png" />
            </span>
            <textarea className="inputMessage" id="inputMessage" ref="message"> </textarea>
            {/*<input type="button" onClick={this.handleClick.bind(this)} value="提交"/>*/}
            {/*<input type="button" value="结束对话"/>*/}
            <span className="sendMessage_btn" onClick={this.handleClick.bind(this)}>send</span>
          </div>
        </div>
    );
  }
}

export default UserMessageBoard;



