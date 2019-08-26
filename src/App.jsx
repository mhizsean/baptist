import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Media from './components/Events';
import Officials from './components/Officials';
import Blog from './components/Blog';
import Associations from './components/Associations';
import Contact from './components/Contact';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/events" component={Events} />
          <Route  path="/media" component={Media} />
          <Route  path="/officials" component={Officials} />
          <Route  path="/blog" component={Blog} />
          <Route  path="/associations" component={Associations} />
          <Route  path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
  );
}

export default App;
