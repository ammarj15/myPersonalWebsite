import React from 'react';
import '../styles/Experience.scss';

const Experience = ({ handleSectionClick }) => {
  return (
    <div className='experience-section'>
      <h2 className='exp-title'>EXPERIENCE</h2>
      <div className='exp-content'>
        <div className='exp-item'>
          <span 
            className='exp-text exp_ozura' 
            onClick={() => handleSectionClick('oz')}
          >
            Ozura
          </span>
          <div className='hover_cont'>
            <img className="oz_img" src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/main-hero-poster.webp" alt='td garden' />
          </div>
        </div>
        
        <div className='exp-item'>
          <span 
            className='exp-text exp_td' 
            onClick={() => handleSectionClick('td')}
          >
            TD Bank
          </span>
          <div className='hover_cont'>
            <img className="td_img" src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/td_garden.jpeg" alt='td garden' />
          </div>
        </div>
        
        <div className='exp-item'>
          <span 
            className='exp-text exp_art' 
            onClick={() => handleSectionClick('create')}
          >
            Creative Study
          </span>
          <div className='hover_cont_gen'>
            <img className='art_img' src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/perlinNoiseBlue.png" alt='gen art' />
          </div>
        </div>
        
        <div className='exp-item'>
          <span 
            className='exp-text exp_near' 
            onClick={() => handleSectionClick('near')}
          >
            NEAR Foundation
          </span>
          <div className='hover_cont_near'>
            <img className='near_img' src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/near-protocol-near-logo-1.png"
             alt='near' />
          </div>
        </div>
        
        <div className='exp-item'>
        <span className='exp-text exp_cubes' onClick={() => handleSectionClick('cube')}>
        Cube Stats
      </span>
      <div className='hover_cont_cube'>
        <img 
          className='cube_gif' 
          src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/ACube-ezgif.com-video-to-gif-converter.gif" 
          alt='cube' 
          width="25%" 
        />
      </div>
        </div>
        
        <div className='exp-item'>
          <span 
            className='exp-text exp_bryte' 
            onClick={() => handleSectionClick('bryteCall')}
          >
            BryteCall
          </span>
          <div className='hover_cont_bryte'>
            <img className='bryte_img' src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/bryte+(1).svg" alt='brytecall' />
          </div>
        </div>
        
        <div className='exp-item'>
          <span 
            className='exp-text exp_bac' 
            onClick={() => handleSectionClick('bacardi')}
          >
            Bacardi
          </span>
          <div className='hover_cont_bac'>
            <img className='bac_img' src="https://mywebsiteammar.s3.us-east-2.amazonaws.com/websiteImages/bacardi_logo.svg" alt='bacardi' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;