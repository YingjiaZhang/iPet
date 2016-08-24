/**
 * Created by ritter on 16-8-23.
 */

import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import MsgItem from './../user_board/MsgItem';

class WorkItem extends Component {

  handleClick() {
    let doctor_input = this.refs.msg.value.trim();
    if (doctor_input !== '') {
      this.props.addDoctorMsg(doctor_input, this.props.msg_id);
    }
  }

  render() {
    let {talk} = this.props;
    return (
        <div>
          {
            talk[talk.length - 1].isQuestion ?
                <div className="work_talk">
                  <div className="work_item">{
                    talk.map((v, k)=>(
                        <MsgItem key={k + 1} isQuestion={v.isQuestion} msg={v.msg}/>
                    ))
                  }
                    <div className="reply_board">
                      <input className="input_reply" ref="msg"/>
                      <button className="reply" onClick={this.handleClick.bind(this)}>回复</button>
                    </div>
                  </div>
                </div>
                : null
          }
        </div>


    );
  }
}
export default WorkItem;
