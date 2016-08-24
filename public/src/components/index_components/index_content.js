import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import checked from './checked';
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkedEmpty(data) {
    if (checked.isEmpty(data.username) || checked.isEmpty(data.password)) {
      alert('用户名和密码不能为空！');
      return false;
    }
    return true;
  }

  checkedScheme(data) {
    if (!checked.checkUserName(data.username) || !checked.checkUserPsd(data.password)) {
      alert('用户名或密码格式不正确,请重新输入！');
      return false;
    }
    return true;
  }

  handleSignInChange(){
    console.log(this.refs.switch_btn.checked)
    return this.refs.switch_btn.checked;
  }

  handleClick() {

    let data = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    let loginType = this.handleSignInChange();
    if (!this.checkedEmpty(data) || !this.checkedScheme(data)) {
      return;
    }
    this.props.loginTodo(data, loginType);
  }

  handleLoginClick() {
    this.props.showLoginBoard('login');
  }

  handleSignInClick() {
    this.props.showLoginBoard('signin');
    if (this.props.isLogin === false) {
      this.setState({
        login: 'none',
        signIn: 'block'
      });
      let loginNav = this.refs.loginSelected;
      let signInNav = this.refs.signInSelected;
      signInNav.className = 'user-login';
      loginNav.className = '';
    }
  }

  componentDidUpdate() {
    if (this.props.user_login.loginSuccess) {
      location.href = '/home';
    }
    if (this.props.user_login.loginSuccess === false) {
      alert('用户名或密码错误,请重新输入！');
    }
  }

  render() {
    return (
        <div className='login-content'>
          <ul className='user-login-list' id='user-login-list'>
            <li ref='loginSelected' className={(this.props.isLogin) ? 'user-login' : ''}
                onClick={this.handleLoginClick.bind(this)}>用户登录
            </li>
            <li ref='signInSelected' className={(this.props.isLogin) ? '' : 'user-login'}
                onClick={this.handleSignInClick.bind(this)}>快速注册
            </li>
          </ul>
          <ul className='user-login-ul' id='user-login-ul'>
            <li className='user-login-li' id='user-login-li' style={{display: (this.props.isLogin) ? 'block' : 'none'}}>
        <span className='login_username'>
        <img src='images/login_images/user.png'/>
        <input type='text' ref='username' placeholder='用户名'/>
        </span>
              <span className='login_password'>
        <img src='images/login_images/mima.png'/>
        <input type='password' ref='password' placeholder='密码'/>
        </span>
              
        <label className="switch">
          <input ref="switch_btn" onChange={this.handleSignInChange.bind(this)} className="mui-switch mui-switch-animbg" type="checkbox" />
        </label>

        <span className='login_btn_span'>
        <button className='login_btn' onClick={this.handleClick.bind(this)}>登录</button>
        </span>
        </li>
        <li id='user-logup-li' style={{display: (this.props.isLogin) ? 'none' : 'block'}}>
        <span>
        <input type='text' placeholder='请输入用户名'/>
        <img src='images/login_images/user.png'/>
        <img className='match_result' src='images/login_images/success.png'/>
        </span>
              <span>
        <input type='text' placeholder='请输入邮箱'/>
        <img src='images/login_images/mail.png'/>
        <img className='match_result' src='images/login_images/success.png'/>
        </span>
              <span>
        <input type='password' placeholder='请输入密码'/>
        <img src='images/login_images/mima.png'/>
        <img className='match_result' src='images/login_images/success.png'/>
        </span>
              <span>
        <input type='password' placeholder='重复密码'/>
        <img src='images/login_images/mima.png'/>
        <img className='match_result' src='images/login_images/success.png'/>
        </span>
              <span>
        <button className='register_btn'>注册</button>
        </span>
            </li>
          </ul>
        </div>
    );
  }
}
export default Content;