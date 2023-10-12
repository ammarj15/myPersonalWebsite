import React, { useRef } from 'react';
import '../styles/Experience.scss';

const Experience = ({ handleSectionClick }) => {
  

    return (
      <div className='experience-section'>
        <h2 className='exp-title'>EXPERIENCE</h2>
        <div className='exp-content'>
          <div className='exp_td' onClick={() => handleSectionClick('td')} style={{ cursor: 'pointer' }}>
          <div className='hover_cont'>
              <img className="td_img" src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/td_garden.jpeg" alt='td garden' />
            </div>
            TD Bank
          </div>
          <div className='exp_art' onClick={() => handleSectionClick('create')} style={{ cursor: 'pointer' }}>
            Creative Study
            <div className='hover_cont_gen'>
              <img className='art_img' src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/perlinNoiseBlue.png" alt='gen art' />
            </div>
          </div>
          <div className='exp_near' onClick={() => handleSectionClick('near')} style={{ cursor: 'pointer' }}>
            NEAR Foundation
            <div className='hover_cont_near'>
              <img className='near_img' src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/near-protocol-near-logo-1.png" alt='near' />
            </div>
          </div>
          <div className='exp_cubes' onClick={() => handleSectionClick('cube')} style={{ cursor: 'pointer' }}>
          <div className='hover_cont_cube'>
              <video width="40%" height="auto" control autoplay>
                <source className='cube_vid' src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/ACube.mp4" alt='cube' />
              </video>
            </div>
            Cube Stats
          </div>
          <div className='exp_bryte' onClick={() => handleSectionClick('bryteCall')} style={{ cursor: 'pointer' }}>
            BryteCall
            <div className='hover_cont_bryte'>
              <img className='bryte_img' src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/bryte.png" alt='brytecall' />
            </div>
          </div>
          <div className='exp_bac' onClick={() => handleSectionClick('bacardi')} style={{ cursor: 'pointer' }}>
            Bacardi
            <div className='hover_cont_bac'>
              <img className='bac_img' src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/bacardi_logo.png" alt='bacardi' />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Experience;