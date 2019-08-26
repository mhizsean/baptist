import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel,Row, Col } from 'react-bootstrap';
import './Home.css';
import Countdown from './Countdown';


export default class Home extends Component {
    render() {
        return (
            <div>                
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="assets/1.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      <button><Link to="/">Visit</Link></button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="assets/2.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <button><Link to="/">Visit</Link></button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="assets/2.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      <button><Link to="/">Visit</Link></button>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

                <Row>
                    <Col xs={12} sm={6} className="contact-wrapper">
                    <div className="upcoming-event">
                      <h4>Upcoming Event</h4>
                      <h4>Event Title</h4>
                      <Countdown />
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero excepturi quidem harum adipisci nisi, dolores maxime accusamus, itaque, neque necessitatibus quo iusto iure ea? Recusandae quas facilis, neque numquam, cupiditate nesciunt laborum magni mollitia ea autem placeat corrupti tempora omnis nam aspernatur? Aliquam, reiciendis laudantium inventore iste minus praesentium.<Link to='/events'>Find Out More</Link></p>
                      
                    </div>
                    <div className="upcoming-event">
                      <h4>Upcoming Event</h4>
                      <h4>Event Title</h4>
                      <Countdown />
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero excepturi quidem harum adipisci nisi, dolores maxime accusamus, itaque, neque necessitatibus quo iusto iure ea?<Link to='/events'>Find Out More</Link></p>
                      
                    </div>
                    <div className="upcoming-event">
                      <h4>Upcoming Event</h4>
                      <h4>Event Title</h4>
                      <Countdown />
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero excepturi quidem harum adipisci nisi, dolores maxime accusamus, itaque, neque necessitatibus quo iusto iure ea? Recusandae quas facilis, neque numquam, cupiditate nesciunt laborum magni mollitia ea autem placeat corrupti tempora omnis nam aspernatur? Aliquam, reiciendis laudantium inventore iste minus praesentium.<Link to='/events'>Find Out More</Link></p>
                      
                    </div>
                    </Col>

                    <Col xs={12} sm={6} className="detail-wrapper">
                    <div className="contact-container">
                      <h3>As Baptist Youths...</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi quia quae eaque facere rerum dolores perspiciatis, deserunt, cumque harum voluptatem saepe ea omnis placeat in error autem optio deleniti sit, odit impedit voluptatibus earum possimus. Architecto dignissimos repudiandae aliquid corporis esse? Minus sapiente natus consequuntur itaque ullam. Perferendis nobis rerum eius atque modi repellat dolore, excepturi quod alias similique quas dolor unde, placeat illo harum. Nam laborum, voluptas, architecto consequatur repellendus excepturi expedita earum sed id natus molestiae commodi numquam minus, suscipit a laudantium? Sapiente minima, reprehenderit nemo voluptatem quas odit magni! Cumque, doloremque voluptatibus? Animi quos eum autem. Ipsum asperiores dolorem similique sequi ratione, dignissimos amet veniam nulla! Eligendi ab, pariatur nostrum consequatur deserunt, eos laborum sit esse ducimus praesentium veritatis voluptates minus impedit consequuntur officiis, tempora distinctio soluta natus ullam nesciunt eius nobis neque similique. Quidem quis deserunt nulla id. Eaque velit dolores saepe nisi ea. Voluptatum, reprehenderit. Voluptas hic magni error quo consequatur. Ex, quidem veniam molestias tempora rerum animi amet distinctio dolore quaerat explicabo quasi dolor autem ad. Laudantium ducimus dolores, rerum quae quia vero, eos accusantium qui magnam unde sed inventore commodi. Ut exercitationem iusto beatae commodi animi quasi itaque! Praesentium illum voluptatum dolores!</p>
                    </div>
                    </Col>
                
                </Row>
            </div>
        )
    }
}
