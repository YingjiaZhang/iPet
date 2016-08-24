/**
 * Created by zhangyiru on 16-8-17.
 */
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import DoctorWorkspace from '../../container/DoctorWorkspace';
import Head from '../Head';
import Foot from '../Foot';

class DoctorWorkspaceApp extends Component {
  render() {
    return (
        <div>
          <Head/>
          <div>
            <DoctorWorkspace/>
          </div>
          <Foot/>
        </div>
    );
  }
}

export default DoctorWorkspaceApp;
