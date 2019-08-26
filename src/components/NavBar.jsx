import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <div className="logo-main">                  
                    <h2><img src="assets/nbc-golden-logo.png" alt="" className="logo"/>LEBYC</h2> 
                </div>
                
                <nav className="nav-main">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/media">Media</Link></li>
                    <li><Link to="/officials">Officials</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/association">Associations</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            </header>
            
        )
    }
}
