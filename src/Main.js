import React from 'react';
import PartialExamplePage from './Partial-example-page.js'
import Palette from './Palette.js'

import PaletteInfo from './img/PaletteInfo.png';



class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleHelp = this.handleHelp.bind(this);
    this.handlePaletteIntroCloseBtn = this.handlePaletteIntroCloseBtn.bind(this);
  }
  handlePaletteIntroCloseBtn(e){
    console.log(e);
    document.getElementById("help-status").checked = false;
    document.querySelector(".palette-intro-wrapper").style.display = "none";
  }
  handleHelp(e){
    console.log(e.target.checked);
    // e.target.checked = !e.target.checked;
      switch(e.target.checked){
        case true:
          document.querySelector(".palette-intro-wrapper").style.display = "flex";
          break;
        case false:
          document.querySelector(".palette-intro-wrapper").style.display = "none";
          break;
        default:
          break;
      }
  }
  render(){
    return (
      <div className="main">
        <header className="main-header">
          <h1>ACE 2.0: Accessible Color Evaluator</h1>
          <label htmlFor="help-status" className="help-btn">i</label>
          <input id="help-status" className="help-status" type="checkbox" checked={false}
          onChange={this.handleHelp} />
          <a className="ace-link" href="http://daprlab.com/ace" target="_blank" rel="noopener noreferrer">ACE 1.0</a>
        </header>
        <div className="main-container">
          <div className="palette-container"><Palette /></div>
          <div className="example-page-container"><PartialExamplePage /></div>
        </div>
        <div className="palette-intro-wrapper">
          <div className="close-intro-btn" onClick={this.handlePaletteIntroCloseBtn}>[X]</div>
          <div className="palette-intro">
            <img className="palette-intro-img" src={PaletteInfo} alt="Palette introduction" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
