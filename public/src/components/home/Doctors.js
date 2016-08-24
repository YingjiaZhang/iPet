import  React, {Component} from 'react';// eslint-disable-line no-unused-vars
import DoctorItem from './DoctorItem';

class Doctors extends Component {
  render() {
    let doctors = this.props.doctors;
    return (
        <ul className="doctorList">
        {
          doctors.map((v, k)=> (
            <DoctorItem key={k + 1} _id={v._id} doctor_name={v.doctor_name} image={v.image} type={v.type}
                          hospital={v.hospital}/>
          ))
        }
      </ul>
    );
  }
}



export default Doctors;