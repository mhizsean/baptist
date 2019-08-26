import React, { Component } from 'react'; 
import { Row, Col, Image} from 'react-bootstrap';
import './Officials.css';

export default class About extends Component {
  render() {
    return (
      <div className="Officials-wrapper">
        <h2>Officials</h2>
        <Row className="grid text-centre">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person.png" roundedCircle className="profile-pic" />
            <h3>Person Person: President</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident illum nisi dicta id nemo perspiciatis eos, a cumque corporis ad iure est dolore, delectus, nam atque assumenda soluta quaerat quia repudiandae dolorem! Inventore, odio voluptatum. Atque quisquam necessitatibus, laboriosam itaque, labore cumque voluptatibus illo beatae, recusandae facilis quibusdam fugiat!</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person2.png" roundedCircle className="profile-pic" />
            <h3>Person Person : Vice-President</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident illum nisi dicta id nemo perspiciatis eos, a cumque corporis ad iure est dolore, delectus, nam atque assumenda soluta quaerat quia repudiandae dolorem! Inventore, odio voluptatum. Atque quisquam necessitatibus, laboriosam itaque, labore cumque voluptatibus illo beatae, recusandae facilis quibusdam fugiat!</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person3.png" roundedCircle className="profile-pic" />
            <h3>Person Person: Secretary</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident illum nisi dicta id nemo perspiciatis eos, a cumque corporis ad iure est dolore, delectus, nam atque assumenda soluta quaerat quia repudiandae dolorem! Inventore, odio voluptatum. Atque quisquam necessitatibus, laboriosam itaque, labore cumque voluptatibus illo beatae, recusandae facilis quibusdam fugiat!</p>
          </Col>
        </Row>
        <Row className="grid text-centre">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person3.png" roundedCircle className="profile-pic" />
            <h3>Person Person: Planning</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident illum nisi dicta id nemo perspiciatis eos, a cumque corporis ad iure est dolore, delectus, nam atque assumenda soluta quaerat quia repudiandae dolorem! Inventore, odio voluptatum. Atque quisquam necessitatibus, laboriosam itaque, labore cumque voluptatibus illo beatae, recusandae facilis quibusdam fugiat!</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person.png" roundedCircle className="profile-pic" />
            <h3>Person Person</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident illum nisi dicta id nemo perspiciatis eos, a cumque corporis ad iure est dolore, delectus, nam atque assumenda soluta quaerat quia repudiandae dolorem! Inventore, odio voluptatum. Atque quisquam necessitatibus, laboriosam itaque, labore cumque voluptatibus illo beatae, recusandae facilis quibusdam fugiat!</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person.png" roundedCircle className="profile-pic" />
            <h3>Person Person</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident illum nisi dicta id nemo perspiciatis eos, a cumque corporis ad iure est dolore, delectus, nam atque assumenda soluta quaerat quia repudiandae dolorem! Inventore, odio voluptatum. Atque quisquam necessitatibus, laboriosam itaque, labore cumque voluptatibus illo beatae, recusandae facilis quibusdam fugiat!</p>
          </Col>
        </Row>
        <Row className="grid text-centre">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person2.png" roundedCircle className="profile-pic" />
            <h3>Person Person</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident illum nisi dicta id nemo perspiciatis eos, a cumque corporis ad iure est dolore, delectus, nam atque assumenda soluta quaerat quia repudiandae dolorem! Inventore, odio voluptatum. Atque quisquam necessitatibus, laboriosam itaque, labore cumque voluptatibus illo beatae, recusandae facilis quibusdam fugiat!</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person.png" roundedCircle className="profile-pic" />
            <h3>Person Person</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident illum nisi dicta id nemo perspiciatis eos, a cumque corporis ad iure est dolore, delectus, nam atque assumenda soluta quaerat quia repudiandae dolorem! Inventore, odio voluptatum. Atque quisquam necessitatibus, laboriosam itaque, labore cumque voluptatibus illo beatae, recusandae facilis quibusdam fugiat!</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person2.png" roundedCircle className="profile-pic" />
            <h3>Person Person</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident illum nisi dicta id nemo perspiciatis eos, a cumque corporis ad iure est dolore, delectus, nam atque assumenda soluta quaerat quia repudiandae dolorem! Inventore, odio voluptatum. Atque quisquam necessitatibus, laboriosam itaque, labore cumque voluptatibus illo beatae, recusandae facilis quibusdam fugiat!</p>
          </Col>
        </Row>
      </div>
    )
  }
}
