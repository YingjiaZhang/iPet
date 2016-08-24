/**
 * Created by zhangyiru on 16-8-17.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
class MsgItem extends Component {
  render() {
    let {isQuestion, msg} = this.props;
    let myDate = new Date();
    let nowDate = myDate.getFullYear()+'年 '+myDate.getHours()+':'+myDate.getMinutes()+':'+myDate.getSeconds();
    if (isQuestion === undefined) {
      return (<span> </span>);
    }
    return (
     <pre className="every_question">
       {isQuestion ? '病人'+' '+nowDate : '医生'+' '+nowDate}:<br /><div className="question">{msg}</div>
     </pre>
    );
  }
}

export default MsgItem;