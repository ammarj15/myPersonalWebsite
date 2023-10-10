import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Intro.scss';

const Intro = () => {
    return (
        <div className='intro-section'>
        <div className='intro_title'> 
            AMMAR JIVRAJ
        </div>
        <TypeAnimation 
        sequence={[
            // "I'm Ammar!",
            // 1000,
            "Developer.",
            800,
            "Designer.",
            800,
            "Engineer.",
            800,
            "Artist.",
            800,
        ]}
        speed={.5}
        style={{ fontSize: '.5em' }}
        repeat={Infinity}/>
        </div>
    );
  };

  export default Intro;