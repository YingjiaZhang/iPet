import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {Link} from 'react-router';

class DoctorItem extends Component {

  render() {
    let {_id, doctor_name, image, type, hospital} = this.props;// eslint-disable-line no-unused-vars
    return (
        //<ul key={_id} className="doctorList">
         // <li key={_id} className='text-center col-xs-2 doctor  thumbnail'>
          <li key={_id} className='doctor_li'>
            <Link  to={`user_board/${this.props._id}`} >
              <img src={image} alt='医生照片'/>
            </Link>
            <div className="doctors_infor">{doctor_name}<br/>{type}<br/>{hospital}</div>
          </li>
       //</ul>

    );
  }
}

export default DoctorItem;