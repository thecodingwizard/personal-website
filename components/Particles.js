import React, { Component } from "react";
import ParticlesJS from "react-particles-js";

const opts = {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": false,
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.07891476416322726,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
};

const mobile = JSON.parse(JSON.stringify(opts));
mobile.particles.number.value = 20;
mobile.interactivity.events.onhover.enable = false;

class Particles extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { className, canvasClassName, isMobile } = this.props;
    return !(nextProps.className === className && nextProps.canvasClassName === canvasClassName && nextProps.isMobile === isMobile);
  }

  render() {
    const { className, canvasClassName, isMobile } = this.props;
    return (
      <ParticlesJS className={className} canvasClassName={canvasClassName} params={isMobile ? mobile : opts} />
    );
  }
}

export default Particles;