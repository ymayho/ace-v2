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
      colorNum: 8,
    }
    this.storeSimulationData = this.storeSimulationData.bind(this);
    this.createColorPaletteObj = this.createColorPaletteObj.bind(this);
    this.handleHelp = this.handleHelp.bind(this);
    this.handleElementDisplay = this.handleElementDisplay.bind(this);
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
      this.setState({canvasProtan: pixels});
    }
    else if (type==="deu") {
      this.setState({canvasDeutan: pixels});
    }
    else{
      this.setState({canvasTritan: pixels});
    }
  }
  handleHelp(){
    this.setState({isHelpOpen: !this.state.isHelpOpen});
  }
  handleElementDisplay(e){
    console.log(e.target.checked);
    this.props.dispatch({type: "UPDATE_ELEMENT_DISPLAY",
      name: e.target.value,
      display: e.target.checked,
    });
  }
  handleWCAG(e){
    let is3A = e.target.checked;//boolean
    this.props.dispatch({type: "UPDATE_WCAG_CHECK",
      standard: is3A ? "3A" : "2A",
    });
  }
  handleCVD(e){
    console.log();
    let showCvd = e.target.checked;//boolean
    let elements = document.getElementsByClassName("cvd-simulation-color-row");
    if(showCvd){
      this.setState({hasCVD: true}, ()=>{
        [].forEach.call(elements, (element) => {
          element.classList.remove("noCVD");
        });
      });
    }else{
      this.setState({hasCVD: false}, ()=>{
        [].forEach.call(elements, (element) => {
          element.classList.add("noCVD");
        });
      });
    }//End else.
  }
  //Switch between full-size palette and default.
  handleClickToggle(){
    if(this.state.fullScreen){
      this.setState({fullScreen: false}, () => {
        document.querySelector(".palette-container").classList.remove("full-screen");
        document.querySelector(".example-page-container").style.display = "block";
      });//End setState.
    }else{
      this.setState({fullScreen: true}, () => {
        document.querySelector(".palette-container").classList.add("full-screen");
        document.querySelector(".example-page-container").style.display = "none";
      });
    }//End else.
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
        <div className="palette-options-container">
          <ColorPicker canvasProtan={this.state.canvasProtan} canvasDeutan={this.state.canvasDeutan} canvasTritan={this.state.canvasTritan} />
          <div className="palette-function-settings">
            <div className="cvd-options palette-options">
              <span className="option-name">CVD Simulation: </span>
              <div className="cvd-inputs option-inputs">
                <span className="toggle-text-label">Off</span>
                <label className="toggle-switch">
                  <input type="checkbox" name="cvd" value="cvd-true" onChange={this.handleCVD}
                  defaultChecked />
                  <span className="slider"></span>
                </label>
                <span className="toggle-text-label">On</span>
              </div>
            </div>
            <div className="wcag-options palette-options">
              <span className="option-name">WCAG Contrast Ratio: </span>
              <div className="wcag-inputs option-inputs">
                <span className="toggle-text-label">AA</span>
                <label className="toggle-switch">
                  <input type="checkbox" name="wcag" value="3A" onChange={this.handleWCAG} defaultChecked />
                  <span className="slider"></span>
                </label>
                <span className="toggle-text-label">AAA</span>
              </div>
            </div>
            <div className="element-options palette-options">
              <span className="option-name">Elements</span>
              <div className="element-inputs option-inputs">
                <input id="accent-header" className="button-switch" type="checkbox" name="element" value="accent-header" onChange={this.handleElementDisplay} />
                <label htmlFor="accent-header" className="button-switch">Accent Header</label>
                <input id="regular-button" className="button-switch" type="checkbox" name="element" value="regular-button" onChange={this.handleElementDisplay} />
                <label htmlFor="regular-button" className="button-switch">Button</label>
                <input id="accent-button" className="button-switch" type="checkbox" name="element" value="accent-button" onChange={this.handleElementDisplay} />
                <label htmlFor="accent-button" className="button-switch">Accent Button</label>
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
          <div className="color-row">
            <div className="color-placeholder">QAQ</div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={0} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={1} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={2} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={3} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={4} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={5} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube colorType={"foreground"} colorNo={6} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube colorType={"background"} colorNo={0} />
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
            <div className="result-wrapper">
              <ResultCube foregroundId={6} backgroundId={0} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube colorType={"background"} colorNo={1} />
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
            <div className="result-wrapper">
              <ResultCube foregroundId={6} backgroundId={1} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube colorType={"background"} colorNo={2} />
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
            <div className="result-wrapper">
              <ResultCube foregroundId={6} backgroundId={2} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube colorType={"background"} colorNo={3} />
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
            <div className="result-wrapper">
              <ResultCube foregroundId={6} backgroundId={3} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube colorType={"background"} colorNo={4} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={0} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={1} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={2} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={3} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={4} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={5} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <ResultCube foregroundId={6} backgroundId={4} />
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
