import React from 'react';
//import { SketchPicker } from 'react-color';
import {PhotoshopPicker} from 'react-color'

class ColorCube extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cubeId: "",
      colorType: "",
      colorName: "",
      displayColorName: "text color",
      pickerColor: "#ffffff",
      colorSelection: "#ffffff",
      displayPicker: false,
      canvasProtan: [],
      canvasDeutan: [],
      canvasTritan: []
    }
    this.simulateCVD = this.simulateCVD.bind(this);
    this.handleCancelColorChange = this.handleCancelColorChange.bind(this);
    this.handleAcceptColorChange = this.handleAcceptColorChange.bind(this);
    this.handlePickerColorChange = this.handlePickerColorChange.bind(this);
    this.handleClickCube = this.handleClickCube.bind(this);
    this.colorPickerHolder = this.colorPickerHolder.bind(this);
    //this.colourPaletteObj = this.colourPaletteObj.bind(this);
  }
  simulateCVD(type){
    let pixelColor = window.getComputedStyle(this.mainColor).getPropertyValue("background-color");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');
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
    var finalBlue
    if(type==="pro"){
      pixels = this.state.canvasProtan;
      // pixels in RGBA
      // index in ARGB
      finalRed = pixels[finalIndex];
      finalGreen = pixels[finalIndex + 1];
      finalBlue = pixels[finalIndex + 2];
      this.cvdPro.style.backgroundColor = "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")";
    }
    else if (type==="deu") {
      pixels = this.state.canvasDeutan;
      // pixels in RGBA
      // index in ARGB
      finalRed = pixels[finalIndex];
      finalGreen = pixels[finalIndex + 1];
      finalBlue = pixels[finalIndex + 2];
      this.cvdDeu.style.backgroundColor = "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")";
    }
    else{
      pixels = this.state.canvasTritan;
      // pixels in RGBA
      // index in ARGB
      finalRed = pixels[finalIndex];
      finalGreen = pixels[finalIndex + 1];
      finalBlue = pixels[finalIndex + 2];
      this.cvdTri.style.backgroundColor = "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")";
    }

    // tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    // $.jStorage.set("backgroundColourProtanKey", "" + tempStoreColour);
  }
  handleCancelColorChange(e){
    this.mainColor.style.backgroundColor = this.state.colorSelection;
    this.setState({pickerColor: this.state.colorSelection, displayPicker: false});
  }
  handleAcceptColorChange(){
    this.setState({colorSelection: this.state.pickerColor});
    this.setState({displayPicker: false});
  }
  handlePickerColorChange(color, event) {
    this.setState({pickerColor: color.hex});
    this.mainColor.style.backgroundColor = this.state.pickerColor;
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
  setDefaultColor(colorType, colorName){
    if(colorType === "foreground"){
      switch (colorName){
        case "body-text":
          this.setState({colorSelection: "#000000", displayColorName: "Page body text color"}, ()=>{
            this.mainColor.style.backgroundColor = this.state.colorSelection;
          });
          break;
        case "header-text":
          this.setState({colorSelection: "#ffffff", displayColorName: "Header/Footer text color"}, ()=>{
            this.mainColor.style.backgroundColor = this.state.colorSelection;
          });
          break;
        case "url-text":
            this.setState({colorSelection: "#0000ee", displayColorName: "Hyperlink text color"}, ()=>{
              this.mainColor.style.backgroundColor = this.state.colorSelection;
            });
            break;
        case "clicked-url-text":
          this.setState({colorSelection: "#551a8b", displayColorName: "Clicked hyperlink text color"}, ()=>{
          this.mainColor.style.backgroundColor = this.state.colorSelection;
          });
          break;
        default:
          this.setState({colorSelection: "#000099"});
      }
    }else{//background color
      switch (colorName){
        case "body-background":
          this.setState({colorSelection: "#ffffff", displayColorName: "Page body background"}, ()=>{
            this.mainColor.style.backgroundColor = this.state.colorSelection;
          });
          break;
        case "header-background":
          this.setState({colorSelection: "#000000", displayColorName: "Header/footer background"}, ()=>{
            this.mainColor.style.backgroundColor = this.state.colorSelection;
          });
          break;
        case "hover-background":
            this.setState({colorSelection: "#555555", displayColorName: "Page body background"}, ()=>{
              this.mainColor.style.backgroundColor = this.state.colorSelection;
            });
            break;
        default:
          this.setState({colorSelection: "#551a8b"});
      }
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
    return result;
  }
  componentDidUpdate(props){
    this.simulateCVD("pro");
    this.simulateCVD("deu");
    this.simulateCVD("tri");
    //console.log(this.props.colorType, this.props.colorNo, this.state.colorSelection);
    this.props.handleColorUpdated(this.props.colorType, this.props.colorNo, this.state.colorSelection);
  }
  componentDidMount(){
    console.log()
    this.props.colorType === "foreground" ?
      this.setState({colorType: "foreground-color"}) : this.setState({colorType: "background-color"});
    //Set default color.
    this.setDefaultColor(this.props.colorType, this.props.colorName);
    this.props.handleColorUpdated(this.props.colorType, this.props.colorNo, this.state.colorSelection);
    if(this.props.colorType === "foreground"){
      this.setState({cubeId: ("f" + this.props.colorNo)});
    }else {
      this.setState({cubeId: ("b" + this.props.colorNo)});
    }
  }

  render(){
    return (
      <div className={this.state.colorType} data-cubeid={this.state.cubeId} >
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

export default ColorCube;
