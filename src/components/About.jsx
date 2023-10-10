import React, { useRef } from 'react';
import '../styles/About.scss';

const About = () => {
    return (
      <div className='about-section'>
        <h2 className="about-title">ABOUT</h2>
        <div className="about-content">
        <h2>
          {"I'M AMMAR. I AM A FULLSTACK ENGINEER WITH A LOVE FOR TECH, ART, AND MUSIC. I BUILT THIS WEBSITE TO ACT AS A DOCUMENTATION OF MY WORK AS WELL AS BEING A STUDY IN DEVELOPMENT AND CREATIVITY"}
        </h2>
        <div className='about-text'>
        <hr></hr>
        <div>
        I graduated from University of Miami with a bachelors in Computer Science also completing studies in both maths and art.
        I've spent the last few years working and contributing to
          enterprise companies both large and small working throughout the stack.
        </div>
        <hr></hr>
        <div>
          As technology becomes more present in our daily lives, I strive to understand the world around us through tech and how we intereact with it.
          The relationship the user has with technology is something of deep interest to me as well as ideas surrounding digital ownership.
        </div>
        <hr></hr>
        <href className="get_in_touch" onClick={() => window.open('mailto:ammarj15@gmail.com')}
>GET IN TOUCH</href>
        </div>
        </div>
      </div>
    );
  };

  export default About;