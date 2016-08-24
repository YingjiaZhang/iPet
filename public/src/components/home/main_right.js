import  React, {Component} from 'react';// eslint-disable-line no-unused-vars

class HomeRight extends Component {
  render() {
    return (
        <div className="main_right">
          <div className="near_hospital">
            <span>
              <i> <img src="images/near.png" alt="附近诊所"/>附近诊所</i>
              <img src="images/dog1.png" className="head_bg"/>

            </span>
            <ul>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
            </ul>
          </div>
          <div className="common_disease near_hospital">
            <span>
              <i> <img src="images/disease.png" alt="常见疾病"/>常见疾病</i>
              <img src="images/doctor.png" className="doctor_bg"/>

            </span>
            <ul>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
              <li>长安区政府斜对面258号---->宠乐诊所</li>
            </ul>
          </div>
        </div>
    );
  }
}
export default HomeRight;