import React, { useRef } from 'react';
import '../styles/Experience.scss';

const Experience = () => {

    return (
      <div className='experience-section'>
        <h2 className='exp-title'>EXPERIENCE</h2>
        <div className='exp-content'>
          <div className='exp_td'>
          <div className='hover_cont'>
              <img className="td_img" src="images/td_garden.jpeg" alt='td garden' />
            </div>
            TD Bank
          </div>
          <div className='exp_art'>
            Creative Study
            <div className='hover_cont_gen'>
              <img className='art_img' src="images/perlinNoiseBlue.png" alt='gen art' />
            </div>
          </div>
          <div className='exp_near'>
            NEAR Foundation
            <div className='hover_cont_near'>
              <img className='near_img' src="images/near-protocol-near-logo-1.png" alt='near' />
            </div>
          </div>
          <div className='exp_cubes'>
          <div className='hover_cont_cube'>
              <video width="40%" height="auto" control autoplay>
                <source className='cube_vid' src="images/ACube.mp4" alt='cube' />
              </video>
            </div>
            Cube Stats
          </div>
          <div className='exp_bryte'>
            BryteCall
            <div className='hover_cont_bryte'>
              <img className='bryte_img' src="images/bryte.png" alt='brytecall' />
            </div>
          </div>
          <div className='exp_bac'>
            Bacardi
            <div className='hover_cont_bac'>
              <img className='bac_img' src="images/bacardi_logo.png" alt='bacardi' />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Experience;