import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Particles from 'react-particles-js'
import Particles from "react-tsparticles";
import Navbar from '../views/Navbar';
import Footer from '../views/Footer';
import '../styles/App.scss';
import Home from '../views/Home'
import Type from './Type'
import About from '../views/About'

function App() {

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (

    <Router>
      <Particles
        className="particles-canvas"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 500,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.01
            },
            size: {
              value: 1
            },
            opacity: {
              value: 0.5,
            }, move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.65,
              straight: false,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
                particles_nb: 1
              }, repulse: {
                distance: 200,
                duration: 0.4,
              },
            }
          },
          detectRetina: true
        }} />
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/type' component={Type} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
