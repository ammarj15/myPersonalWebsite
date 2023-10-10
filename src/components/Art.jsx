import React, { useState } from 'react';
import '../styles/Art.scss';
import P5Canvas from '../P5Canvas';
import PaletteSelector from './PaletteSelector';



const Art = () => {

  const [generated, setGenerated] = useState(null);
  const [strokeWeight, setStrokeWeight] = useState(1);
  const [numParticles, setNumParticles] = useState(1000)

  const palettes = {
    goldenYellow: [[255, 223, 0], [135, 206, 250]], // Golden Yellow and Sky Blue
    royalFuchsiaMint: [[202, 44, 146], [152, 255, 152]],
    taupeBrown: [[255,236,209], [150, 75, 0]],
    blackWhite: [[255, 255, 255]]
  };

  const [currentPalette, setCurrentPalette] = useState(() => palettes.blackWhite);

  const handlePaletteChange = (newPalette) => {
    setCurrentPalette(palettes[newPalette]);
  };

  const handleStrokeWeightChange = (newStroke) => {
    setStrokeWeight(newStroke)
  };

  const handleParticleChange = (newParticles) => {
    setNumParticles(newParticles);
  }

    return (
      <div className='art-section'>
        <div className='art-title'>
        {"While you're here play around with some algorithmically generated art!"}
        </div>
        <div className='button-container'>
          {generated ? (<button className='generator' onClick={() => setGenerated(!generated)}>
            Clear</button>) 
            : (<button className='generator' onClick={() => setGenerated(!generated) }>Generate Art</button>)
          }
          </div>
    <div className='selectors'>
      <PaletteSelector palettes={palettes} handlePaletteChange={handlePaletteChange} />
      <hr className='art-break'></hr>
        <label>
          Choose a Line Size
          <br></br>
          <select className='selection' value={strokeWeight} onChange={(e) => handleStrokeWeightChange(Number(e.target.value))}>
            <option value={1}>Small</option>
            <option value={1.5}>Medium</option>
            <option value={2}>Large</option>
            </select>
        </label>
        <hr className='art-break'></hr>
        <label>
          Choose a Frequency
          <br></br>
          <select className='selection' value={numParticles} onChange={(e) => handleParticleChange(Number(e.target.value))}>
            <option value={500}>500</option>
            <option value={1000}>1000</option>
            <option value={1500}>1500</option>
            <option value={2000}>2000</option>
            <option value={2500}>2500</option>
            </select>
        </label>
        <hr className='art-break'></hr>
    </div>
    {generated ? (
            <div className='art-canvas'>
              <P5Canvas 
                palettes={palettes} 
                currentPalette={currentPalette} 
                strokeWeight={strokeWeight}
                numParticles={numParticles}
                />
            </div>
            ) : <div className='placeholder-box'></div>
          } 
    <p></p>
  </div>
    );
  };

  export default Art;