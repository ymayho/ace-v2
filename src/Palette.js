import React from 'react';
import './scss/palette.scss';
//import { PhotoshopPicker } from 'react-color';
import ColorCube from './ColorCube';
import ResultCube from './ResultCube';
import ProtanImg from './img/lut_protan_medium.png';
import DeutanImg from './img/lut_deutan_medium.png';
import TritanImg from './img/lut_tritan_medium.png';

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
      contrastRatios: [[0, 1, 2, 3, 4, 5]]
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
  displayContrastResult(contrastArr){
    console.log(contrastArr);
    let foreNum = this.state.foregroundColorArr.length;
    let backNum = this.state.backgroundColorArr.length;
    console.log(contrastArr);
    // let resultCubeList = document.querySelectorAll('[data-result-id]');
    // console.log(resultCubeList);
    // for(){
    //
    // }
    //let resultWrapper = document.getElementsByClassName("result-wrapper");
    //console.log(resultWrapper);
    // let temp = [];
    // for(let i = 0; i<backNum; i++){
    //   for(let j=0; j<foreNum; j++){
    //     temp.push(
    //       <ResultCube backId={i} foreId={j} contrastRatio={contrastArr[i][j]} />
    //     );
    //   }
    // }
    // this.setState({result: temp});

    // for(let i = 0; i<backNum; i++){
    //   for(let j=0; j<foreNum; j++){
    //     this.state.result.push(
    //       <ResultCube backId={i} foreId={j} contrastRatio={contrastArr[i][j]} />
    //     );
    //   }
    //
    // }

  }
  calculateContrastRatio(foreArr, backArr){
    let foreRGB = [];
    let backRGB = [];
    let foreLuminance = [];
    let backLuminance = [];
    // foreArr.forEach((rgb, index)=> {foreRGB[index] = this.convertHextoRGB(rgb);});
    // backArr.forEach((rgb, index)=> {backRGB[index] = this.convertHextoRGB(rgb);});
    foreRGB = foreArr.map((color)=> this.convertHextoRGB(color));
    backRGB = backArr.map((color)=> this.convertHextoRGB(color));
    foreRGB.forEach((rgb, index) => foreLuminance[index] = this.calculateLuminance(rgb));
    backRGB.forEach((rgb, index) => backLuminance[index] = this.calculateLuminance(rgb));
    let contrastArr = [];
    backLuminance.forEach((back, i) => {
      contrastArr[i] = [];
      foreLuminance.forEach((fore, j) => {
          if(fore > back){
            contrastArr[i][j] = ((fore+0.05) / (back+0.05)).toFixed(2);
          }else{
            contrastArr[i][j] = ((back+0.05) / (fore+0.05)).toFixed(2);
          }
      });
    });
    //console.log(contrastArr);
    this.displayContrastResult(contrastArr);
  }
  convertHextoRGB(hexCode){
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
    //console.log("CALLBACK");
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
        console.log("True");
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
    console.log("Clicked!", this.state.fullScreen);
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
  componentDidUpdate(){
    console.log("Update");
    //console.log(this.state.foregroundColorArr, this.state.backgroundColorArr);
    this.calculateContrastRatio(this.state.foregroundColorArr, this.state.backgroundColorArr);
    // localStorage.setItem("foregroundColor0", this.state.foregroundColorArr[0]);
    // localStorage.setItem("foregroundColor1", this.state.foregroundColorArr[1]);
    // localStorage.setItem("foregroundColor2", this.state.foregroundColorArr[2]);
    // localStorage.setItem("foregroundColor3", this.state.foregroundColorArr[3]);
    // localStorage.setItem("backgroundColor0", this.state.backgroundColorArr[0]);
    // localStorage.setItem("backgroundColor1", this.state.backgroundColorArr[1]);
    // localStorage.setItem("backgroundColor2", this.state.backgroundColorArr[2]);
  }
  componentDidMount(){
    console.log("Mount");
    this.createColorPaletteObj("pro", ProtanImg);
    this.createColorPaletteObj("deu", DeutanImg);
    this.createColorPaletteObj("tri", TritanImg);
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
              <span className="option-switch" ref={span => this.cvdSwitch = span}>CVD Simulation</span>
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
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
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
              colorNo={3} />
            </div>
            <div className="foreground-color-wrapper">
              <ColorCube handleColorUpdated={this.callBackColorUpdated}
              canvasProtan={this.state.canvasProtan}
              canvasDeutan={this.state.canvasDeutan}
              canvasTritan={this.state.canvasTritan}
              colorType={"foreground"} colorName={"clicked-url-text"}
              colorNo={3} />
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
              <ResultCube resultId={"0-0"} contrastRatio={this.state.contrastRatio[0][0]} />
              <ResultCube resultId={"0-1"} contrastRatio={this.state.contrastRatio[0][1]} />
              <ResultCube resultId={"0-2"} contrastRatio={this.state.contrastRatio[0][2]} />
              <ResultCube resultId={"0-3"} contrastRatio={this.state.contrastRatio[0][3]} />
              <ResultCube resultId={"0-4"} contrastRatio={this.state.contrastRatio[0][4]} />
              <ResultCube resultId={"0-5"} contrastRatio={this.state.contrastRatio[0][5]} />
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
              <ResultCube resultId={"1-0"} contrastRatio={this.state.contrastRatio[1][0]} />
              <ResultCube resultId={"1-1"} contrastRatio={this.state.contrastRatio[1][1]} />
              <ResultCube resultId={"1-2"} contrastRatio={this.state.contrastRatio[1][2]} />
              <ResultCube resultId={"1-3"} contrastRatio={this.state.contrastRatio[1][3]} />
              <ResultCube resultId={"1-4"} contrastRatio={this.state.contrastRatio[1][4]} />
              <ResultCube resultId={"1-5"} contrastRatio={this.state.contrastRatio[1][5]} />
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
              <ResultCube resultId={"2-0"} contrastRatio={this.state.contrastRatio[2][0]} />
              <ResultCube resultId={"2-1"} contrastRatio={this.state.contrastRatio[2][1]} />
              <ResultCube resultId={"2-2"} contrastRatio={this.state.contrastRatio[2][2]} />
              <ResultCube resultId={"2-3"} contrastRatio={this.state.contrastRatio[2][3]} />
              <ResultCube resultId={"2-4"} contrastRatio={this.state.contrastRatio[2][4]} />
              <ResultCube resultId={"2-5"} contrastRatio={this.state.contrastRatio[2][5]} />
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

export default Palette;
