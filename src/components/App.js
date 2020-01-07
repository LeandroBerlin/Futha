import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js'
import Navbar from '../views/Navbar';
import Footer from '../views/Footer';
import '../styles/App.scss';
import Home from '../views/Home'
import Type from './Type'
import About from '../views/About'

function App() {
  return (

    <Router>
      <Particles
        className="particles-canvas"
        params={{
          "particles": {
            "number": {
              "value": 500,
              "density": {
                "enable": true,
                "value_area": 1500
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": 0.02
            },
            "move": {
              "direction": "right",
              "speed": 0.25
            },
            "size": {
              "value": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
              }
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              }
            },
            "modes": {
              "push": {
                "particles_nb": 1
              }
            }
          },
          "retina_detect": true
        }} />
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/type' component={Type} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
