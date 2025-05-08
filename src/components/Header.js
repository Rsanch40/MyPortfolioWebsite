import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Header.css';

import pythonIcon from '../images/python.png';
import javaIcon from '../images/java.png';
import cIcon from '../images/letter-c.png';
import cPlusIcon from '../images/c-.png';
import sqlIcon from '../images/database.png';
import htmlIcon from '../images/html.png';
import cssIcon from '../images/css-3.png';
import jsIcon from '../images/js.png';

import ParticleBackground from './AnimatedBackground';


function Header() {
  const fade = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1500 },
  });

  
  return (
    <header id="home" className="header">
      <ParticleBackground />
      <div className='title-section'>
      <animated.h1 style={fade}>Hello, I'm <span className="highlight">Rafael Sanchez</span> </animated.h1>
        <animated.h2 style={fade}>A <span className="highlight">Software Engineer</span> based in Chicago, Illinois</animated.h2>
      </div>
      
    
      <div className="about-section">
      <animated.h3 style={fade}>I enjoy building web applications and crafting efficient, scalable systems utilizing the skills I posses in the following languages: </animated.h3>
      
      <animated.button style={fade} className='button'>
      <img src={pythonIcon} alt='logo' class="button-logo" />
      </animated.button>

      <animated.button style={fade} className='button'>
      <img src={javaIcon} alt='logo' class="button-logo" />
      </animated.button>

      <animated.button style={fade} className='button'>
      <img src={cIcon} alt='logo' class="button-logo" />
      </animated.button>

      <animated.button style={fade} className='button'>
      <img src={cPlusIcon} alt='logo' class="button-logo" />
      </animated.button>

      <animated.button style={fade} className='button'>
      <img src={sqlIcon} alt='logo' class="button-logo" />
      </animated.button>

      <animated.button style={fade} className='button'>
      <img src={htmlIcon} alt='logo' class="button-logo" />
      </animated.button>

      <animated.button style={fade} className='button'>
      <img src={cssIcon} alt='logo' class="button-logo" />
      </animated.button>

      <animated.button style={fade} className='button'>
      <img src={jsIcon} alt='logo' class="button-logo" />
      </animated.button>

      </div>
    </header>
  );
}


export default Header;
