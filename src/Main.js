import React from 'react';
import PartialExamplePage from './Partial-example-page.js'
import Palette from './Palette.js'

import PaletteColorIntro from './img/PaletteColor-intro.png';


function Main() {
  return (
    <div className="main">
      <header className="main-header">
        <h1>ACE 2.0: Accessible Color Evaluator</h1>
        <label htmlFor="help-status" className="help-btn">Help <span>?</span></label><input id="help-status" className="help-status" type="checkbox" value="false" />
        <div className="palette-intro">
          <img className="palette-intro-img" src={PaletteColorIntro} alt="Palette elements introduction" />
        </div>
      </header>
      <div className="main-container">
        <div className="palette-container"><Palette /></div>
        <div className="example-page-container"><PartialExamplePage /></div>
      </div>
    </div>
  );
}

export default Main;
