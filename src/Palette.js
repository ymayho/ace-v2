import React from 'react';
import { connect } from 'react-redux';
import './scss/palette.scss';

import ColorPicker from './ColorPicker';
import PaletteColor from './PaletteColor';
import Result from './Result';
import ProtanImg from './img/lut_protan_medium.png';
import DeutanImg from './img/lut_deutan_medium.png';
import TritanImg from './img/lut_tritan_medium.png';

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
      elementDisplay: [false, false, false],
      optionIntroDisplay: {
        cvd: false,
        contrast: false,
        textSize: false,
        moreElements: false
      },

    }
    this.handleOptionIntroDisplay = this.handleOptionIntroDisplay.bind(this);
    this.handlePaletteScroll = this.handlePaletteScroll.bind(this);
    this.storeSimulationData = this.storeSimulationData.bind(this);
    this.createColorPaletteObj = this.createColorPaletteObj.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleHelp = this.handleHelp.bind(this);
    this.handleElementDisplay = this.handleElementDisplay.bind(this);
    this.handleTextSize = this.handleTextSize.bind(this);
    this.handleWCAG = this.handleWCAG.bind(this);
    this.handleCVD = this.handleCVD.bind(this);
    this.handleClickToggle = this.handleClickToggle.bind(this);

    this.colorPicker = React.createRef();
  }
  handleOptionIntroDisplay(type){
    console.log(type);
    switch(type){
      case "cvd":
        this.setState({optionIntroDisplay: {...this.state.optionIntroDisplay, cvd: !this.state.optionIntroDisplay.cvd}});
        break;
      case "contrast":
        this.setState({optionIntroDisplay: {...this.state.optionIntroDisplay, contrast: !this.state.optionIntroDisplay.contrast}});
        break;
      case "textSize":
        this.setState({optionIntroDisplay: {...this.state.optionIntroDisplay, textSize: !this.state.optionIntroDisplay.textSize}});
        break;
      case "moreElements":
        this.setState({optionIntroDisplay: {...this.state.optionIntroDisplay, moreElements: !this.state.optionIntroDisplay.moreElements}});
        break;
      default:
        break;
    }
    console.log(this.state.optionIntroDisplay);
  }
  handlePaletteScroll(e){
    //console.log(e.target.scrollTop);
    let scrollTop = e.target.scrollTop;
    if(scrollTop >= 120){
      this.paletteOptionsContainer.style.height = "80px";
      this.paletteOptionsContainer.style.boxShadow = "-1px 2px 3px 2px rgba(0, 0, 0, .25)";
      document.querySelector("#main-color-picker").style.opacity = "0";
      document.querySelector(".floating-color-picker-container").style.display = "block";

    }else if(scrollTop < 80){
      this.paletteOptionsContainer.style.height = "auto";
      this.paletteOptionsContainer.style.boxShadow = "none";
      document.querySelector("#main-color-picker").style.opacity = "1";
      document.querySelector(".floating-color-picker-container").style.display = "none";
    }
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
  handleReset(){
    console.log("handleReset");
    this.props.dispatch({type: "RESET_PALETTE_SETTING"});
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
  handleTextSize(e){
    let size = e.target.checked ? "large" : "normal";
    this.props.dispatch({type: "UPDATE_WCAG_TEXT_SIZE_CHECK",
      size: size,
    });
  }
  handleWCAG(e){
    let is3A = e.target.checked;//boolean
    this.props.dispatch({type: "UPDATE_WCAG_CONTRAST_CHECK",
      standard: is3A ? "3A" : "2A",
    });
  }
  handleCVD(e){
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
    let elementDisplay = [];
    props.elementDisplay.forEach((element) => {
      //console.log(element.name);
      switch(element["name"]){
        case "accent-header":
          elementDisplay[0] = element.display;
          break;
        case "regular-button":
          elementDisplay[1] = element.display;
          break;
        case "accent-button":
          elementDisplay[2] = element.display;
          break;
        default:
          break;
      }
    });
    result = {...result, elementDisplay};
    return result;
  }
  componentDidUpdate(prevProps){
    //console.log("Palette update");
  }
  componentDidMount(){
    //console.log("Palette Mount");
    this.createColorPaletteObj("pro", ProtanImg);
    this.createColorPaletteObj("deu", DeutanImg);
    this.createColorPaletteObj("tri", TritanImg);
  }
  render(){
    return (
      <div className="palette-wrapper" ref={(div)=>this.paletteWrapper = div}>
        <div className="palette-content-wrapper" onScroll={this.handlePaletteScroll}>
        <div className="palette-options-container" ref={(div) => this.paletteOptionsContainer = div}>
          <ColorPicker pickerId="main-color-picker" canvasProtan={this.state.canvasProtan} canvasDeutan={this.state.canvasDeutan} canvasTritan={this.state.canvasTritan} />
          <div className="palette-function-settings">
            <div className="cvd-options palette-options">
              <span className="option-name" onClick={() => {this.handleOptionIntroDisplay("cvd")}}>CVD Simulation<span className="option-help-btn">?</span></span>
              <div className="option-intro" style={{display: this.state.optionIntroDisplay.cvd ? "block" : "none"}}>
                Three different types of color vision dificiency (CVD, colorblindness) simulation.
              </div>
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
              <span className="option-name" onClick={() => {this.handleOptionIntroDisplay("contrast")}}>WCAG Contrast Ratio<span className="option-help-btn">?</span> </span>
              <div className="option-intro" style={{display: this.state.optionIntroDisplay.contrast ? "block" : "none"}}>
                WCAG difines several levels of conformance. To fulfill AA standard, the minimum contrast ratio of a piece of large text (18pt) is 3, normal text (14pt) is 4.5; to fulfill AAA criteria, a piece of large text needs at least 4.5 of contrast ratio, normal text needs 7.
              </div>
              <div className="wcag-inputs option-inputs">
                <span className="toggle-text-label">AA</span>
                <label className="toggle-switch">
                  <input type="checkbox" name="wcag" value="3A" onChange={this.handleWCAG} checked={this.props.wcagContrast === "AAA"} />
                  <span className="slider"></span>
                </label>
                <span className="toggle-text-label">AAA</span>
              </div>
            </div>
            <div className="wcag-options palette-options">
              <span className="option-name" onClick={() => {this.handleOptionIntroDisplay("textSize")}}>WCAG Text Size<span className="option-help-btn">?</span></span>
              <div className="option-intro" style={{display: this.state.optionIntroDisplay.textSize ? "block" : "none"}}>
                Different sizes of text have different WCAG standard about contrast ratio. It defines large text as 18pt with normal weight or 14pt bold, and normal text as 14pt.
              </div>
              <div className="wcag-inputs option-inputs">
                <span className="toggle-text-label">Normal</span>
                <label className="toggle-switch">
                  <input type="checkbox" name="textSize" value="large" onChange={this.handleTextSize} checked={this.props.wcagTextSize === "large"} />
                  <span className="slider"></span>
                </label>
                <span className="toggle-text-label">Large</span>
              </div>
            </div>
            <div className="element-options palette-options">
              <span className="option-name" onClick={() => {this.handleOptionIntroDisplay("moreElements")}}>More Elements<span className="option-help-btn">?</span></span>
              <div className="option-intro" style={{display: this.state.optionIntroDisplay.moreElements ? "block" : "none"}}>
                Show more elements on the palette below and the example page.
              </div>
              <div className="element-inputs option-inputs">
                <input id="accent-header" className="button-switch" type="checkbox" name="element" value="accent-header" onChange={this.handleElementDisplay} checked={this.state.elementDisplay[0]} />
                <label htmlFor="accent-header" className="button-switch">Accent Header</label>
                <input id="regular-button" className="button-switch" type="checkbox" name="element" value="regular-button" onChange={this.handleElementDisplay} checked={this.state.elementDisplay[1]} />
                <label htmlFor="regular-button" className="button-switch">Button</label>
                <input id="accent-button" className="button-switch" type="checkbox" name="element" value="accent-button" onChange={this.handleElementDisplay} checked={this.state.elementDisplay[2]} />
                <label htmlFor="accent-button" className="button-switch">Accent Button</label>
              </div>
            </div>
          </div>{/*End div.palette-function-setting*/}
          <div className="help">
            <button className="reset-btn" onClick={this.handleReset}>Reset</button>
          </div>

        </div>{/*End div.palette-options-container*/}

        <div className="floating-color-picker-container">
          <ColorPicker pickerId="floating-color-picker" canvasProtan={this.state.canvasProtan} canvasDeutan={this.state.canvasDeutan} canvasTritan={this.state.canvasTritan} />
        </div>

        <div className="palette">
          <div className="color-row">
            <div className="color-placeholder">QAQ</div>
            <div className="foreground-color-wrapper">
              <PaletteColor colorType={"foreground"} colorNo={0} />
            </div>
            <div className="foreground-color-wrapper">
              <PaletteColor colorType={"foreground"} colorNo={1} />
            </div>
            <div className="foreground-color-wrapper">
              <PaletteColor colorType={"foreground"} colorNo={2} />
            </div>
            <div className="foreground-color-wrapper">
              <PaletteColor colorType={"foreground"} colorNo={3} />
            </div>
            <div className="foreground-color-wrapper">
              <PaletteColor colorType={"foreground"} colorNo={4} />
            </div>
            <div className="foreground-color-wrapper">
              <PaletteColor colorType={"foreground"} colorNo={5} />
            </div>
            <div className="foreground-color-wrapper">
              <PaletteColor colorType={"foreground"} colorNo={6} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <PaletteColor colorType={"background"} colorNo={0} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={0} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={1} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={2} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={3} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={4} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={5} backgroundId={0} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={6} backgroundId={0} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <PaletteColor colorType={"background"} colorNo={1} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={0} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={1} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={2} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={3} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={4} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={5} backgroundId={1} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={6} backgroundId={1} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <PaletteColor colorType={"background"} colorNo={2} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={0} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={1} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={2} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={3} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={4} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={5} backgroundId={2} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={6} backgroundId={2} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <PaletteColor colorType={"background"} colorNo={3} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={0} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={1} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={2} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={3} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={4} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={5} backgroundId={3} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={6} backgroundId={3} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <PaletteColor colorType={"background"} colorNo={4} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={0} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={1} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={2} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={3} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={4} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={5} backgroundId={4} />
            </div>
            <div className="result-wrapper">
              <Result foregroundId={6} backgroundId={4} />
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
    selectedPaletteColor: state.selectedPaletteColor,
    wcagContrast: state.wcagContrast,
    wcagTextSize: state.wcagTextSize,
    elementDisplay: state.elementDisplay
  });
}
export default connect(mapStateToProps)(Palette);
