import React, { Component } from 'react';
import {  Row, Col, } from 'react-bootstrap';
import './Contact.css';


export default class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Reach Out To Us </h2>
                <Row>
                    <Col xs={12} sm={6} className="contact-wrapper">
                    <div className="contact-container">
                    <form action="/action_page.php">
                    <label>First Name</label>
                    <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
                    <label>Last Name</label>
                    <input type="text"id="lname" name="lastname" placeholder="Your last name.."/>


                    <label>Email</label>
                    <input type="email"id="email"name="email"placeholder="Your email"/>


                    <label>Subject</label>
                    <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
                    <input type="submit"value="Submit"/>
                    </form>
                    </div>
                    </Col>

                    <Col xs={12} sm={6} className="detail-wrapper">
                    <div className="contact-container">
                    <h3>Email</h3>
                    <p>example@email.com</p>
                    <h3>Place A call</h3>
                    <p>1234-567-8900</p>
                    <p>0987-543-3211</p>
                    </div>
                    </Col>
                
                </Row>
            </div>
        )
    }
}
