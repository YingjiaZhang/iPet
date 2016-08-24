/**
 * Created by qiyanzi on 16-8-22.
 */

import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import WorkItem from './WorkItem';

class WorkList extends Component {

  componentWillMount() {
    this.props.workInit();
  }
  componentDidUpdate() {
    this.props.workInit();
  }

  render() {
    let workspaceItems =  this.props.data ? this.props.data:[] ;

    return (
        <div className="work_list">
          {
            workspaceItems.map((v, k)=> (
              <WorkItem key={k} talk={v.talk} msg_id={v._id} addDoctorMsg = {this.props.addDoctorMsg}/>
            ))
          }
        </div>
    );
  }
}
export default WorkList;
