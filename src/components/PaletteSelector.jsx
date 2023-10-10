import React, {} from 'react';
import '../styles/Selector.scss';

const PaletteSelector = ({ handlePaletteChange }) => {
  return (
    <div>
        <label>Select Palette</label>
        <br></br>
        <select className="selection" onChange={(e) => handlePaletteChange(e.target.value)}>
        <option value="blackWhite">Black and White</option>
          <option value="goldenYellow">Golden Yellow and Sky Blue</option>
          <option value="royalFuchsiaMint">Royal Fuchsia and Mint</option>
          <option value="taupeBrown">Taupe and Brown</option>
        </select>
      </div>
  );
};

export default PaletteSelector;