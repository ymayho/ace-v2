import React from 'react';
import { connect } from 'react-redux';
import './scss/palette.scss';

import ColorPicker from './ColorPicker';
import ColorCube from './ColorCube';
import ResultCube from './ResultCube';
import ProtanImg from './img/lut_protan_medium.png';
import DeutanImg from './img/lut_deutan_medium.png';
import TritanImg from './img/lut_tritan_medium.png';
import ColorCubeIntro from './img/ColorCube-intro.png';

class Palette extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false,
      isHelpOpen: false,
      hasCVD: true,
      canvasProtan: [],
      canvasDeutan: [],
      canvasTritan: [],
      colorNum: 7,
    }
    this.storeSimulationData = this.storeSimulationData.bind(this);
    this.createColorPaletteObj = this.createColorPaletteObj.bind(this);
    this.handleBackgroundNumberChange = this.handleBackgroundNumberChange.bind(this);
    this.handleForegroundNumberChange = this.handleForegroundNumberChange.bind(this);
    this.handleHelp = this.handleHelp.bind(this);
    this.handleWCAG = this.handleWCAG.bind(this);
    this.handleCVD = this.handleCVD.bind(this);
    this.handleClickToggle = this.handleClickToggle.bind(this);
  }

  createColorPaletteObj(type, inputImg){
    let imgObj = new Image();
    imgObj.src = inputImg;
    imgObj.onload = (e) => {
      this.storeSimulationData(type, imgObj);
    }
  }
  storeSimulationData(type, imageObj) {
    //This points to the canvas that is set up in the HTML file
  	let createCanvas = document.getElementById('canvasProtan');
      //This allows manipulation of the canvas by providing methods and properties so that things can be drawn onto the canvas
  	let canvasContext = createCanvas.getContext('2d');
    //This will draw the colour gradient into the canvas from the very most top-left corner, however it is hidden from view in the html
    canvasContext.drawImage(imageObj, 0, 0);
      //This gets information about the PNG image data
  	let colorPaletteData = canvasContext.getImageData(0, 0, 4096, 4096);
      //This will get the rgba data for the pixels within the colour palette array
  	let pixels = colorPaletteData.data;
    if(type==="pro"){
      this.setState({canvasProtan: pixels}, ()=>console.log(type));
    }
    else if (type==="deu") {
      this.setState({canvasDeutan: pixels});
    }
    else{
      this.setState({canvasTritan: pixels});
    }
  }
  handleBackgroundNumberChange(){
    this.props.dispatch({type: "EDIT_BACKGROUND_NUMBER",
      newNumber: this.backgroundNumber.value,
      });
    //console.log(this.backgroundNumber.value)
  }
  handleForegroundNumberChange(){
    this.props.dispatch({type: "EDIT_FOREGROUND_NUMBER",
      newNumber: this.foregroundNumber.value,
      });
    //console.log(this.foregroundNumber.value)
  }
  handleHelp(){
    this.setState({isHelpOpen: !this.state.isHelpOpen});
  }
  handleWCAG(){
    let wcagType = document.querySelectorAll('input[name="wcag"]');
    //console.log(wcagType);
    wcagType.forEach((item, key) => {
      if(item.checked === true){
        this.props.dispatch({type: "UPDATE_WCAG_CHECK",
          standard: item.value,
        });
      }
    });

  }
  handleCVD(){
    let cvdValue = document.querySelector('input[name="cvd"]:checked').value;
    if(cvdValue === "cvd-true"){
      this.setState({hasCVD: true}, ()=>{
        this.cvdSwitch.innerHTML = "CVD Simulation: Yes";
        for(let i = 0; i < this.state.colorNum; i++){
          document.getElementsByClassName("cvd-simulation-color-row")[i].classList.remove("noCVD");
        }
      });
    }else{
      this.setState({hasCVD: false}, ()=>{
        this.cvdSwitch.innerHTML = "CVD Simulation: No";
        //console.log("False");
        for(let i = 0; i < this.state.colorNum; i++){
          document.getElementsByClassName("cvd-simulation-color-row")[i].classList.add("noCVD");
        }

      });
    }
  }
  handleClickToggle(){
    if(this.state.fullScreen){
      this.setState({fullScreen: false}, () => {
        document.querySelector(".palette-container").classList.remove("full-screen");
        document.querySelector(".example-page-container").style.display = "block";
      });
    }else{
      this.setState({fullScreen: true}, () => {
        document.querySelector(".palette-container").classList.add("full-screen");
        document.querySelector(".example-page-container").style.display = "none";
      });
    }
  }
  static getDerivedStateFromProps(props, state){
    let result = null;

    return result;
  }
  componentDidUpdate(prevProps){
    //console.log("Palette update");

  }
  componentDidMount(){
    //console.log("Mount");
    this.createColorPaletteObj("pro", ProtanImg);
    this.createColorPaletteObj("deu", DeutanImg);
    this.createColorPaletteObj("tri", TritanImg);
  }
  render(){
    return (
      <div className="palette-wrapper" ref={(div)=>this.paletteWrapper = div}>
        <div className="palette-content-wrapper">
        {/*
          <nav className="palette-nav">
          <button>Palette</button>
          <button>CVD Info</button>
        </nav>
      */}
        <div className="palette-options-container">
          <ColorPicker canvasProtan={this.state.canvasProtan} canvasDeutan={this.state.canvasDeutan} canvasTritan={this.state.canvasTritan} />
          <div className="palette-function-settings">

            <div className="cvd-options palette-options">
              <span className="option-switch" ref={span => this.cvdSwitch = span}>CVD Simulation: Yes</span>
              <div className="cvd-inputs dropdown-inputs">
                <input id="yesCVD" type="radio" name="cvd" value="cvd-true" onChange={this.handleCVD}
                  defaultChecked /><label htmlFor="yesCVD">Yes</label>
                <input id="noCVD" type="radio" name="cvd" value="cvd-false"  onChange={this.handleCVD} />
                <label htmlFor="noCVD">No</label>
              </div>
            </div>
            <div className="wcag-options palette-options">
              <span className="option-switch" ref={span => this.wcagSwitch = span}>
                WCAG: {this.props.wcag}
              </span>
              <div className="wcag-inputs dropdown-inputs">
                <input id="wcag-2a" type="radio" name="wcag" value="2A" onChange={this.handleWCAG} />
                <label htmlFor="wcag-2a">AA</label>
                <input id="wcag-3a" type="radio" name="wcag" value="3A" onChange={this.handleWCAG} defaultChecked />
                <label htmlFor="wcag-3a">AAA</label>
              </div>
            </div>
          </div>{/*End div.palette-function-setting*/}
          <div className="help">
            <button className={"help-switch " + (this.state.isHelpOpen ? "isOpen" : "isHidden")} onClick={this.handleHelp}>Help</button>
            <div className={"help-wrapper " + (this.state.isHelpOpen ? "visible" : "hidden")}>
              <div className={"help-container"}>
                <img className="color-cube-intro-img" src={ColorCubeIntro} alt="Introduction to color cube parts." />
                <p>
                  Sorry, Help is still under construction. More details will be provided in the future.
                </p>
              </div>
            </div>
          </div>

        </div>{/*End div.palette-options-container*/}

        <div className="palette">
          <div className="foreground-number">
            <input className="color-number-input" type="number" defaultValue="4" min="4" max="6"
              onChange={this.handleForegroundNumberChange} ref={(input) => this.foregroundNumber = input}/> / 6
          </div>
          <div className="background-number">
            <input className="color-number-input" type="number" defaultValue="2" min="2" max="4"
              onChange={this.handleBackgroundNumberChange} ref={(input) => this.backgroundNumber = input}/> / 4
          </div>
          <div className="color-row">
            <div className="color-placeholder">QAQ</div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={0} colorName={"body-text"} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={1} colorName={"header-text"} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={2} colorName={"url-text"} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={3} colorName={"clicked-url-text"} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={4} colorName={"clicked-url-text"} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={5} colorName={"clicked-url-text"} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube colorType={"background"} colorNo={0} colorName={"body-background"} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={0} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={1} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={2} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={3} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={4} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={5} backgroundId={0} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube colorType={"background"} colorNo={1} colorName={"header-background"} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={0} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={1} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={2} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={3} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={4} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={5} backgroundId={1} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube colorType={"background"} colorNo={2} colorName={"body-background"} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={0} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={1} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={2} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={3} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={4} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={5} backgroundId={2} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube colorType={"background"} colorNo={3} colorName={"body-background"} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={0} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={1} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={2} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={3} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={4} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={5} backgroundId={3} />
            </div>
          </div>
        </div>{/*End div.palette*/}
        </div>
        <div className="palette-border">
          <div className="toggle-wrapper" onClick={this.handleClickToggle}>
            <button className="example-page-toggle">{this.state.fullScreen ? "Open" : "Collapse"}</button>
          </div>
        </div>

        <div id="hidden-canvas-area">
          <canvas id="canvasProtan" ref={(canvas) => this.canvasProtan = canvas} width="4096" height="4096">Please use a browser that supports HTML5 Canvas</canvas>
          <canvas id="canvasDeutan" ref={(canvas) => this.canvasDeutan = canvas} width="4096" height="4096">Please use a browser that supports HTML5 Canvas</canvas>
          <canvas id="canvasTritan" ref={(canvas) => this.canvasTritan = canvas} width="4096" height="4096">Please use a browser that supports HTML5 Canvas</canvas>
        </div>
      </div>
    );
  }
}

// Add this function:
function mapStateToProps(state) {
  return ({
    foregroundColors: state.foregroundColors,
    backgroundColors: state.backgroundColors,
    wcag: state.wcag,
    selectedColorCube: state.selectedColorCube
  });
}
export default connect(mapStateToProps)(Palette);
