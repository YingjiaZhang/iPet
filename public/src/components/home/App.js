import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import DoctorList from '../../container/DoctorList';
import Head from '../Head';
import Foot from '../Foot';
import HomeRight from  './main_right';

class App extends Component {
  render() {
    return (
        <div className="aaa">
          <Head/>
          <div className="main_left">
            <div className="doctor_head">
              <span className="text-center">专家问诊</span>
              <img src="images/doctor1.png" className="main_left_bg"/>
            </div>
            <DoctorList/>
          </div>
          <HomeRight/>
          <Foot/>
        </div>
    );
  }
}

export default App;
