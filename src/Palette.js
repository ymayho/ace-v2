import React from 'react';
import { connect } from 'react-redux';
import './scss/palette.scss';
//import { PhotoshopPicker } from 'react-color';
import ColorCube from './ColorCube';
import ResultCube from './ResultCube';
import ProtanImg from './img/lut_protan_medium.png';
import DeutanImg from './img/lut_deutan_medium.png';
import TritanImg from './img/lut_tritan_medium.png';

let counter = 0;
class Palette extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false,
      hasCVD: true,
      canvasProtan: [],
      canvasDeutan: [],
      canvasTritan: [],
      colorNum: 7,
      foregroundColorArr: [],
      backgroundColorArr: [],
      result: [],
      contrastRatios: [[0, 0.1, 0.2, 0.3, 0.4, 0.5], [0, 0.1, 0.2, 0.3, 0.4, 0.5], [0, 0.1, 0.2, 0.3, 0.4, 0.5]]
    }
    this.calculateContrastRatio = this.calculateContrastRatio.bind(this);
    this.calculateLuminance = this.calculateLuminance.bind(this);
    this.convertHextoRGB = this.convertHextoRGB.bind(this);
    this.callBackColorUpdated = this.callBackColorUpdated.bind(this);
    this.storeSimulationData = this.storeSimulationData.bind(this);
    this.createColorPaletteObj = this.createColorPaletteObj.bind(this);
    this.handleCVD = this.handleCVD.bind(this);
    this.handleClickToggle = this.handleClickToggle.bind(this);
  }

  calculateContrastRatio(foreData, backData){
    console.log("calculateContrastRatio");
    let foreRGB = [];
    let backRGB = [];
    let foreLuminance = [];
    let backLuminance = [];
    foreRGB = foreData.map((item)=> this.convertHextoRGB(item.color));
    backRGB = backData.map((item)=> this.convertHextoRGB(item.color));
    foreRGB.forEach((rgb, index) => foreLuminance[index] = this.calculateLuminance(rgb));
    backRGB.forEach((rgb, index) => backLuminance[index] = this.calculateLuminance(rgb));
    let contrastArr = [];
    foreLuminance.forEach((fore, i) => {
      contrastArr[i] = [];
      backLuminance.forEach((back, j) => {
          if(fore > back){
            contrastArr[i][j] = ((fore+0.05) / (back+0.05)).toFixed(2);
          }else{
            contrastArr[i][j] = ((back+0.05) / (fore+0.05)).toFixed(2);
          }
      });
    });
    //console.log(contrastArr);
    this.props.dispatch({type: "UPDATE_CONTRAST_RATIO", contrastRatioArr: contrastArr});
  }
  convertHextoRGB(hexCode){
    //console.log(hexCode);
    let rgb = {
      r: parseInt(hexCode.substring(1,3) ,16),
      g: parseInt(hexCode.substring(3,5) ,16),
      b: parseInt(hexCode.substring(5) ,16)
    };
    return rgb;
  }
  calculateLuminance(rgb){
    let processedRGB = Object.keys(rgb).map((key, index) => {
      let temp = rgb[key] / 255;
      if (temp <= 0.03928) {
        temp = (temp / 12.92);
      } else {
        temp = Math.pow(((temp + 0.055) / 1.055), 2.4);
      }
      return temp;
    });
    return ((0.2126 * processedRGB[0]) + (0.7152 * processedRGB[1]) + (0.0722 * processedRGB[2]));
  }
  callBackColorUpdated(type, no, color){
    if(type==="foreground"){
      let tempArr = this.state.foregroundColorArr;
      tempArr[no] = color;
      //this.setState({foregroundColorArr: tempArr});
      //localStorage.setItem("foregroundColor" + no, color);
    }else{
      let tempArr = this.state.backgroundColorArr;
      tempArr[no] = color;
      //this.setState({backgroundColorArr: tempArr});
      //localStorage.setItem("backgroundColor" + no, color);
    }
    console.log("CALLBACK");
    console.log(this.props.foregroundColors[no], color);
    if((type === "foreground" && this.props.foregroundColors[no].color === color) || (type === "background" && this.props.backgroundColors[no].color === color)){
      console.log("No");
      console.log("\n\n\n\n\n", counter++, "\n\n\n\n\n");
      return
    }else{
      console.log("Yes");
      this.calculateContrastRatio(this.props.foregroundColors, this.props.backgroundColors);
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
        console.log("False");
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
  componentDidUpdate(prevProps){
    console.log("Palette update");
    console.log(this.props.foregroundColors, prevProps.foregroundColors)
    if(this.props.foregroundColors !== prevProps.foregroundColors &&
      this.props.backgroundColors !== prevProps.backgroundColors){
      console.log("TRUE");
      this.calculateContrastRatio(this.props.foregroundColors, this.props.backgroundColors);
    }
  }
  componentDidMount(){
    console.log("Mount");
    console.log(this.props.foregroundColors);
    this.createColorPaletteObj("pro", ProtanImg);
    this.createColorPaletteObj("deu", DeutanImg);
    this.createColorPaletteObj("tri", TritanImg);
    this.calculateContrastRatio(this.props.foregroundColors, this.props.backgroundColors);
  }
  render(){
    return (
      <div className="palette-wrapper" ref={(div)=>this.paletteWrapper = div}>
        <nav className="palette-nav">
          <button>Palette</button>
          <button>CVD Info</button>
        </nav>
        <div className="palette-options-container">
          <div className="palette-function-settings">
            <div className="cvd-options palette-options">
              <span className="option-switch" ref={span => this.cvdSwitch = span}>CVD Simulation: Yes</span>
              <div className="cvd-inputs dropdown-inputs">
                <label><input type="radio" name="cvd" value="cvd-true" onChange={this.handleCVD}
                ref={(input)=>{this.cvdTrue = input}} defaultChecked />Yes
                </label>
                <label><input type="radio" name="cvd" value="cvd-false"  onChange={this.handleCVD}
                ref={(input)=>{this.cvdFalse = input}} />No
                </label>
              </div>
            </div>
            <div className="wcag-options palette-options">
              <span className="option-switch">WCAG</span>
              <div className="wcag-inputs dropdown-inputs">
                <label><input type="radio" name="wcag" value="2A" />AA</label>
                <label><input type="radio" name="wcag" value="3A" />AAA</label>
              </div>
            </div>
          </div>{/*End div.palette-function-setting*/}
          <div className="help">
            <button className="help-switch">Help</button>
          </div>
        </div>{/*End div.palette-options-container*/}
        <div className="palette">
          <div className="color-row">
            <div className="color-placeholder">QAQ</div>
            <div className="foreground-color-wrapper">
              <ColorCube  handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"foreground"} colorName={"body-text"}
              colorNo={0} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"foreground"} colorName={"header-text"}
              colorNo={1} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"foreground"} colorName={"url-text"}
              colorNo={2} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"foreground"} colorName={"clicked-url-text"}
              colorNo={3} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"foreground"} colorName={"clicked-url-text"}
              colorNo={4} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"foreground"} colorName={"clicked-url-text"}
              colorNo={5} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"background"} colorName={"body-background"}
              colorNo={0} />
            </div>
            <div className="result-wrapper">
              <ResultCube resultId={"0-0"} contrastRatio={this.props.contrastRatios[0].ratio} />
              <ResultCube resultId={"0-1"} contrastRatio={this.props.contrastRatios[4].ratio} />
              <ResultCube resultId={"0-2"} contrastRatio={this.props.contrastRatios[8].ratio} />
              <ResultCube resultId={"0-3"} contrastRatio={this.props.contrastRatios[12].ratio} />
              <ResultCube resultId={"0-4"} contrastRatio={this.props.contrastRatios[16].ratio} />
              <ResultCube resultId={"0-5"} contrastRatio={this.props.contrastRatios[20].ratio} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"background"} colorName={"header-background"}
              colorNo={1} />
            </div>
            <div className="result-wrapper">
              <ResultCube resultId={"1-0"} contrastRatio={this.props.contrastRatios[1].ratio} />
              <ResultCube resultId={"1-1"} contrastRatio={this.props.contrastRatios[5].ratio} />
              <ResultCube resultId={"1-2"} contrastRatio={this.props.contrastRatios[9].ratio} />
              <ResultCube resultId={"1-3"} contrastRatio={this.props.contrastRatios[13].ratio} />
              <ResultCube resultId={"1-4"} contrastRatio={this.props.contrastRatios[17].ratio} />
              <ResultCube resultId={"1-5"} contrastRatio={this.props.contrastRatios[21].ratio} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"background"} colorName={"body-background"}
              colorNo={2} />
            </div>
            <div className="result-wrapper">
              <ResultCube resultId={"2-0"} contrastRatio={this.props.contrastRatios[2].ratio} />
              <ResultCube resultId={"2-1"} contrastRatio={this.props.contrastRatios[6].ratio} />
              <ResultCube resultId={"2-2"} contrastRatio={this.props.contrastRatios[10].ratio} />
              <ResultCube resultId={"2-3"} contrastRatio={this.props.contrastRatios[14].ratio} />
              <ResultCube resultId={"2-4"} contrastRatio={this.props.contrastRatios[18].ratio} />
              <ResultCube resultId={"2-5"} contrastRatio={this.props.contrastRatios[22].ratio} />
            </div>
          </div>
          <div className="color-row">
            <div className="background-color-wrapper">
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"background"} colorName={"body-background"}
              colorNo={3} />
            </div>
            <div className="result-wrapper">
              <ResultCube resultId={"3-0"} contrastRatio={this.props.contrastRatios[3].ratio} />
              <ResultCube resultId={"3-1"} contrastRatio={this.props.contrastRatios[7].ratio} />
              <ResultCube resultId={"3-2"} contrastRatio={this.props.contrastRatios[11].ratio} />
              <ResultCube resultId={"3-3"} contrastRatio={this.props.contrastRatios[15].ratio} />
              <ResultCube resultId={"3-4"} contrastRatio={this.props.contrastRatios[19].ratio} />
              <ResultCube resultId={"3-5"} contrastRatio={this.props.contrastRatios[23].ratio} />
            </div>
          </div>
        </div>
        <div className="palette-border"><button className="example-page-toggle" onClick={this.handleClickToggle}>{this.state.fullScreen ? "Open" : "Collapse"}</button></div>

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
    contrastRatios: state.contrastRatios
  });
}
export default connect(mapStateToProps)(Palette);
