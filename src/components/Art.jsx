import React, { useState } from 'react';
import '../styles/Art.scss';
import P5Canvas from '../P5Canvas';
import PaletteSelector from './PaletteSelector';



const Art = () => {

  const [generationCount, setGenerationCount]= useState(0);
  const [strokeWeight, setStrokeWeight] = useState(1);
  const [numParticles, setNumParticles] = useState(1000)
  const [imageData, setImageData] = useState('');

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

  const handleImageGenerated = (base64Image) => {
    setImageData(base64Image);
  }

  const handleGenerateArt = () => {
    setGenerationCount(prevCount => prevCount + 1);
  }

    return (
      <div className='art-section'>
        <div className='art-title'>
        {"While you're here play around with some algorithmically generated art!"}
        </div>
  <div className='generator-canvas'>
    <div className='selectors'>
        <div className='button-container'>
          <button className='generator' onClick={handleGenerateArt}>
            Generate Art
          </button>    
        </div>
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
    {generationCount > 0 ? (
            <div className='art-canvas'>
              <P5Canvas 
                key={generationCount}
                className='sketch' 
                palettes={palettes} 
                currentPalette={currentPalette} 
                strokeWeight={strokeWeight}
                numParticles={numParticles}
                onImageGenerated={handleImageGenerated}
                />
              {imageData && <img className='image' src={imageData} alt="Generated Art"/>}
            </div>
            ) : (
           <div className='placeholder-box'></div>
            )}
      </div>
    <p></p>
  </div>
    );
  };

  export default Art;