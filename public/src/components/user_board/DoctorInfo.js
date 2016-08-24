import React, {Component} from 'react';  // eslint-disable-line no-unused-vars

class DoctorInfo extends Component {

  componentWillMount() {
    this.props.doctorInit(this.props.doctor_id);
  }

  render() {
    return (
      <div className='doctor_info'>
        <span className='info_title'>医生信息</span>
        <ul>
          <li className="doctor_img_li">
            <img className='doctor_img' src={'/' + this.props.doctor.image} alt='医生图片'/>
          </li>
          <li>姓 名 : {this.props.doctor.doctor_name}</li>
          <li>e-mail : {this.props.doctor.email}</li>
          <li>科 室 : {this.props.doctor.type}</li>
          <li>所在医院 : {this.props.doctor.hospital}</li>
          <li>级 别 : {this.props.doctor.certificates}</li>
          <li className="doctor_info_briefing">简介：毕业于北京大学生物科学专业,对于内科学有20年的临床经验，曾经在手术台上奋战8小时,救活了一名即将临盆的狗狗孕妇和她的宝宝,
            曾获得生物多样性研究大赛一等奖，获得过杰出的生物多样性保护者！</li>
          <img className="doctorInfo_bg" src="/images/pander.png" />
        </ul>
        {/*<span className="doctor_info_briefing">简介：毕业于北京大学生物科学专业,对于内科学有20年的临床经验，曾经在手术台上奋战8小时,救活了一名即将临盆的狗狗孕妇,*/}
          {/*曾获得生物多样性研究大赛一等奖，获得过杰出的生物多样性保护者！*/}
        {/*</span>*/}
      </div>
    );
  }
}

export default DoctorInfo;