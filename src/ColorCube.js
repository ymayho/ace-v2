import React from 'react';
import { connect } from 'react-redux';
import {PhotoshopPicker} from 'react-color'

class ColorCube extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      colorType: "",
      colorName: "",
      displayColorName: "text color",
      pickerColor: "#ffffff",
      colorSelection: "#ffffff",
      displayPicker: false,
      canvasProtan: [],
      canvasDeutan: [],
      canvasTritan: [],
      counter: 0
    }
    this.convertRGBToHex = this.convertRGBToHex.bind(this);
    this.simulateCVD = this.simulateCVD.bind(this);
    this.handleCancelColorChange = this.handleCancelColorChange.bind(this);
    this.handleAcceptColorChange = this.handleAcceptColorChange.bind(this);
    this.handlePickerColorChange = this.handlePickerColorChange.bind(this);
    this.handleClickCube = this.handleClickCube.bind(this);
    this.colorPickerHolder = this.colorPickerHolder.bind(this);
    //this.colourPaletteObj = this.colourPaletteObj.bind(this);
  }
  convertRGBToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
  };
  simulateCVD(){
    //console.log(++cvdTime);
    let pixelColor = window.getComputedStyle(this.mainColor).getPropertyValue("background-color");
    //console.log(pixelColor);
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');
    //console.log(pixelColor);
    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);
    //console.log("r: " + red + "; g: " + green + "; b: " + blue);
    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    var pixels;
    var finalRed;
    var finalGreen;
    var finalBlue;
    let proColor, deuColor, triColor;

    pixels = this.state.canvasProtan;
    //console.log(pixels);
    // pixels in RGBA
    // index in ARGB
    finalRed = pixels[finalIndex];
    finalGreen = pixels[finalIndex + 1];
    finalBlue = pixels[finalIndex + 2];
    proColor = "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")"

    pixels = this.state.canvasDeutan;
    // pixels in RGBA
    // index in ARGB
    finalRed = pixels[finalIndex];
    finalGreen = pixels[finalIndex + 1];
    finalBlue = pixels[finalIndex + 2];
    deuColor = "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")"

    pixels = this.state.canvasTritan;
    // pixels in RGBA
    // index in ARGB
    finalRed = pixels[finalIndex];
    finalGreen = pixels[finalIndex + 1];
    finalBlue = pixels[finalIndex + 2];
    triColor = "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")"
    //console.log(proColor, deuColor, triColor);
    if(finalRed != null && finalGreen != null && finalBlue != null){
      //console.log("not null");
      if(this.props.colorType === "foreground"){
        this.props.dispatch({type: "UPDATE_FOREGROUND_CVD",
          index: this.props.colorNo,
          cvdColors: {protan: proColor, deutan: deuColor, tritan: triColor}});
      }else{
        this.props.dispatch({type: "UPDATE_BACKGROUND_CVD",
          index: this.props.colorNo,
          cvdColors: {protan: proColor, deutan: deuColor, tritan: triColor}});
      }
    }else{
      //console.log("null");
    }
  }
  handleCancelColorChange(e){
    this.mainColor.style.backgroundColor = this.state.colorSelection;
    this.setState({pickerColor: this.state.colorSelection, displayPicker: false});
  }
  handleAcceptColorChange(){
    this.setState({colorSelection: this.state.pickerColor});
    this.setState({displayPicker: false});
    if(this.props.colorType === "foreground"){
      this.props.dispatch({type: "EDIT_FOREGROUND_COLOR", newColor: this.state.pickerColor, index: this.props.colorNo});

    }else{
      this.props.dispatch({type: "EDIT_BACKGROUND_COLOR", newColor: this.state.pickerColor, index: this.props.colorNo});
    }
    this.simulateCVD();
    this.props.handleColorUpdated(this.props.colorType, this.props.colorNo, this.state.colorSelection);
  }
  handlePickerColorChange(color, event) {
    this.setState({pickerColor: color.hex});
    this.mainColor.style.backgroundColor = this.state.pickerColor;
    if(this.props.colorType === "foreground"){
      this.props.dispatch({type: "EDIT_FOREGROUND_COLOR", newColor: this.state.pickerColor, index: this.props.colorNo});

    }else{
      this.props.dispatch({type: "EDIT_BACKGROUND_COLOR", newColor: this.state.pickerColor, index: this.props.colorNo});
    }
    this.simulateCVD();
  }
  handleClickCube(){
    this.setState({displayPicker: !this.state.displayPicker}, ()=>{
      console.log(this.colorPicker);
    });
  }
  colorPickerHolder(){
    return this.state.displayPicker ? (
      <PhotoshopPicker  ref={(picker) => this.colorPicker = picker}
      color={this.state.pickerColor} onChange={this.handlePickerColorChange}
      onAccept={this.handleAcceptColorChange} onCancel={this.handleCancelColorChange} />
    ) : null;
  }
  setDefaultColor(colorType, colorNo, colorName){
    let colorData;
    //console.log(this.props.foregroundColors, colorType, colorNo, colorName);
    if(colorType === "foreground"){
      colorData = this.props.foregroundColors[colorNo];
      this.setState({colorSelection: colorData.color, displayColorName: colorData.colorName}, ()=>{
        this.mainColor.style.backgroundColor = this.state.colorSelection;
      });
    }else{
      colorData = this.props.backgroundColors[colorNo]
      this.setState({colorSelection: colorData.color, displayColorName: colorData.colorName}, ()=>{
        this.mainColor.style.backgroundColor = this.state.colorSelection;
      });
    }
  }
  static getDerivedStateFromProps(props, state){
    let result = null;
    if(props.canvasProtan !== undefined){
      result = {...result, canvasProtan: props.canvasProtan};
    }
    if(props.canvasDeutan !== undefined){
      result = {...result, canvasDeutan: props.canvasDeutan};
    }
    if(props.canvasTritan !== undefined){
      result = {...result, canvasTritan: props.canvasTritan};
    }
    //console.log(result);
    return result;
  }
  componentDidUpdate(prevProps){
    //console.log(counter++);
    //console.log("ColorCube update: " + this.props.colorType + this.props.colorNo)
    if(this.state.canvasProtan.length===0 ||this.state.canvasDeutan.length===0 || this.state.canvasTritan.length===0){
      //console.log("空的");
    }else{
      if(this.props.colorType === "foreground"){
        //console.log("foreground", prevProps.foregroundColors[this.props.colorNo].color, this.props.foregroundColors[this.props.colorNo].color)
        if(prevProps.foregroundColors[this.props.colorNo].color !== this.props.foregroundColors[this.props.colorNo].color){
          this.simulateCVD();
        }
        else if(this.state.counter <= 2){
            this.simulateCVD();
            this.setState({counter: this.state.counter + 1});
        }
      }else if(this.props.colorType === "background"){
        //console.log("background", prevProps.backgroundColors[this.props.colorNo].color, this.props.backgroundColors[this.props.colorNo].color)
        if(prevProps.backgroundColors[this.props.colorNo].color !== this.props.backgroundColors[this.props.colorNo].color){
          this.simulateCVD();
        }
        else if(this.state.counter <= 2){
            this.simulateCVD();
            this.setState({counter: this.state.counter + 1});
        }

      }
    }
    //console.log(this.props.colorType, this.props.colorNo, this.state.colorSelection);
    if(this.props.colorType === "foreground"){
      this.cvdPro.style.backgroundColor = this.props.foregroundCVDs[this.props.colorNo].protan;
      this.cvdDeu.style.backgroundColor = this.props.foregroundCVDs[this.props.colorNo].deutan;
      this.cvdTri.style.backgroundColor = this.props.foregroundCVDs[this.props.colorNo].tritan;
    }else{
      this.cvdPro.style.backgroundColor = this.props.backgroundCVDs[this.props.colorNo].protan;
      this.cvdDeu.style.backgroundColor = this.props.backgroundCVDs[this.props.colorNo].deutan;
      this.cvdTri.style.backgroundColor = this.props.backgroundCVDs[this.props.colorNo].tritan;
    }
  }
  componentDidMount(){
    this.props.colorType === "foreground" ?
      this.setState({colorType: "foreground-color"}) : this.setState({colorType: "background-color"});
    //Set default color.
    this.setDefaultColor(this.props.colorType, this.props.colorNo, this.props.colorName);
    this.props.handleColorUpdated(this.props.colorType, this.props.colorNo, this.state.colorSelection);
    //console.log(this.props.canvasProtan);
    this.simulateCVD();
  }

  render(){
    return (
      <div className={this.state.colorType}>
        {this.colorPickerHolder()}
        <span className="color-name">{this.state.displayColorName}</span>
        <div className="main-color" ref={(div) => this.mainColor = div} onClick={this.handleClickCube}></div>
        <div className="cvd-simulation-color-row">
          <div className="cvd-pro" ref={(div) => this.cvdPro = div}></div>
          <div className="cvd-deu" ref={(div) => this.cvdDeu = div}></div>
          <div className="cvd-tri" ref={(div) => this.cvdTri = div}></div>
        </div>
        <span className="color-code">{this.state.colorSelection}</span>
      </div>
    );
  }
}

// Add this function:
function mapStateToProps(state) {
  return ({
    foregroundColors: state.foregroundColors,
    backgroundColors: state.backgroundColors,
    foregroundCVDs: state.foregroundCVDs,
    backgroundCVDs: state.backgroundCVDs
  });
}
export default connect(mapStateToProps)(ColorCube);
