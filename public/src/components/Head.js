/**
 * Created by ritter on 16-8-14.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class Head extends Component {
  render() {
    return (
      <div className="head">
        <img className='login-logo' src='/images/login_images/ipetlogo.png'/>
        <span className='wareName'> </span>
        <div className="headRight">
          <span className="userImage">
            <img src="/images/dog.jpg" alt="用户头像"/>
          </span>
          <span className="logIn">注销</span>
        </div>
      </div>
    );
  }
}
export default Head;