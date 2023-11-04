import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './home.css';
import avatar from '../../img/avatar.png';
import eye from '../../img/eye.png';
import mask from '../../img/mask.png';
import arrow1 from '../../img/arrow1.png';
import arrow2 from '../../img/arrow2.png';
import arrow3 from '../../img/arrow3.png';
import arrow4 from '../../img/arrow4.png';
import sticker from '../../img/sticker-removebg-preview.png';



function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const damp = (value, target, strength) => {
    return value + (target - value) * strength;
  };

  const eyeOffsetY = window.innerHeight - 100;

  return (
    <>
      <div className='app'>
      <div className='nameTitle'>
        
        <h1 className='homeTitle'>
          <span className="firstName">TATIANA</span>
          <img
          className="sticker"
          src={sticker}
          alt="sticker"
        /> 
          <span className="lastName">STAHLI</span>
        </h1>
      </div>
      <div className='mobileBlock'>
        <Link to='/contact' className='SMN_effect-65'>
          <h2 className='contact'>Contact</h2>
        </Link>
        <img
          className="arrow2"
          src={arrow2}
          alt="arrow"
        />
        <Link to='/portfolio' className='SMN_effect-65'>
          <h2 className='portfolio'>Portfolio</h2>
        </Link>
        <img
          className="arrow1"
          src={arrow1}
          alt="arrow"
        />
        <div className='SMN_effect-65'>
          <a href='./cv_tatiana_stahli.pdf' target='_blank'  data-hover="CV">
            <span className='cv'>CV&nbsp;<FontAwesomeIcon icon={faDownload} size="xs"/>        
            </span>
          </a>
        </div>
        <img
          className="arrow3"
          src={arrow3}
          alt="arrow"
        />
        <Link to='/about' className='SMN_effect-65'>
          <h2 className='qui'>Qui suis-je ?</h2>
        </Link>
        <img
          className="arrow4"
          src={arrow4}
          alt="arrow"
        />

      </div>

      <div className="row">
        <div id="left-eye" className="eye">
          <img
            src={eye}
            className="pupil"
            alt="eye-l"
            style={{
              transform: `translate(${damp((mouseX - window.innerWidth / 2) * 0.05, 0, 0.1)}px, ${damp((mouseY - eyeOffsetY) * 0.05, 0, 0.1)}px) scale(3)`,
            }}
          />
        </div>
        <div id="right-eye" className="eye">
          <img
            src={eye}
            className="pupil"
            alt="eye-r"
            style={{
              transform: `translate(${damp((mouseX - window.innerWidth / 2) * 0.05, 0, 0.1)}px, ${damp((mouseY - eyeOffsetY) * 0.05, 0, 0.1)}px) scale(3)`,
            }}
          />
        </div>
      </div>
      <img
        className="head"
        src={avatar}
        alt="face"
      />
      <img
        className="mask"
        src={mask}
        alt="mask"
      />
      
    </div>

    <div className='appMobile'>
      <div className='nameTitle'>
        
        <h1 className='homeTitle'>
          <span className="firstName">TATIANA</span>
          <img
          className="sticker"
          src={sticker}
          alt="sticker"
        /> 
          <span className="lastName">STAHLI</span>
        </h1>
      </div>
      <div className='mobileBlock'>
        <Link to='/contact' className='SMN_effect-65'>
          <h2 className='contact'>Contact</h2>
        </Link>
        <img
          className="arrow2"
          src={arrow2}
          alt="arrow"
        />
        <Link to='/portfolio' className='SMN_effect-65'>
          <h2 className='portfolio'>Portfolio</h2>
        </Link>
        <img
          className="arrow1"
          src={arrow1}
          alt="arrow"
        />
        <div className='SMN_effect-65'>
          <a href='/portfolio/cv_tatiana_stahli.pdf' target='_blank'  data-hover="CV">
            <span className='cv'>CV&nbsp;<FontAwesomeIcon icon={faDownload} size="xs"/>        
            </span>
          </a>
        </div>
        <img
          className="arrow3"
          src={arrow3}
          alt="arrow"
        />
        <Link to='/about' className='SMN_effect-65'>
          <h2 className='qui'>Qui suis-je ?</h2>
        </Link>
        <img
          className="arrow4"
          src={arrow4}
          alt="arrow"
        />

      </div>

      <div className="row">
        <div id="left-eye" className="eye">
          <img
            src={eye}
            className="pupil"
            alt="eye-l"
            style={{
              transform: `translate(${damp((mouseX - window.innerWidth / 2) * 0.05, 0, 0.1)}px, ${damp((mouseY - eyeOffsetY) * 0.05, 0, 0.1)}px) scale(3)`,
            }}
          />
        </div>
        <div id="right-eye" className="eye">
          <img
            src={eye}
            className="pupil"
            alt="eye-r"
            style={{
              transform: `translate(${damp((mouseX - window.innerWidth / 2) * 0.05, 0, 0.1)}px, ${damp((mouseY - eyeOffsetY) * 0.05, 0, 0.1)}px) scale(3)`,
            }}
          />
        </div>
      </div>
      <img
        className="head"
        src={avatar}
        alt="face"
      />
      <img
        className="mask"
        src={mask}
        alt="mask"
      />
      
    </div>
    </>
    
  );
}

export default Home;
