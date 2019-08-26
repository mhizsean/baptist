import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12 footer-info md-mb-30 sm-mb-30">
                                <h3>LEBYC</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est minima vero quaerat dolores? Dicta natus tenetur, dolorem mollitia quibusdam hic.</p>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 footer-links sm-mb-30">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><i className="ion-ios-arrow-right"><Link to="/">Officials</Link></i></li>
                                    <li><i className="ion-ios-arrow-right"><Link to="/officials">Officials</Link></i></li>
                                    <li><i className="ion-ios-arrow-right"><Link to="/officials">Officials</Link></i></li>
                                    <li><i className="ion-ios-arrow-right"><Link to="/blog">whats happening</Link></i></li>
                                    <li><i className="ion-ios-arrow-right"><Link to="/events">Upcoming Events</Link></i></li>
                                    <li><i className="ion-ios-arrow-right"><Link to="/contact">Contact Us</Link></i></li>

                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 footer-social sm-mb-30">
                                <h2>Follow Us</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis atque quasi et, voluptatem porro.</p>
                                <Link to="/" className="twitter"><i className="fab fa-twitter"></i></Link>
                                <Link to="/" className="facebook"><i className="fab fa-facebook"></i></Link>
                                <Link to="/" className="instagram"><i className="fab fa-instagram"></i></Link>
                                <Link to="/" className="google-plus"><i className="fab fa-google-plus"></i></Link>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 footer-subscribe sm-mb-30">
                                <h2>Subscribe</h2>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <form action="" method="post">
                                    <input type="email" name="email" ></input>
                                    <input type="submit"  value="Subscribe"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copyright text-muted"> Copyright&copy; Lagos East Baptist Youth Conference. 2019</p>
            </footer>
        )
    }
}
