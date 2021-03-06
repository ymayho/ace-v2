import React from 'react';
import { connect } from 'react-redux';
import {SketchPicker} from 'react-color'

class ColorPicker extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pickerColor: "#ff00ff"
    }
    this.simulateCVD = this.simulateCVD.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.handleColorPickerChange = this.handleColorPickerChange.bind(this);
  }
  hexToRGB(hex){
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  simulateCVD(originalColor){
    originalColor = this.hexToRGB(originalColor);
    console.log(originalColor)
    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = originalColor.b;
    // green is taking green channel value and placing at 0x0000XX00
    var green = (originalColor.g << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (originalColor.r << 16);

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
    pixels = this.props.canvasProtan;
    // pixels in RGBA
    // index in ARGB
    finalRed = pixels[finalIndex];
    finalGreen = pixels[finalIndex + 1];
    finalBlue = pixels[finalIndex + 2];
    proColor = "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")"
    pixels = this.props.canvasDeutan;
    // pixels in RGBA
    // index in ARGB
    finalRed = pixels[finalIndex];
    finalGreen = pixels[finalIndex + 1];
    finalBlue = pixels[finalIndex + 2];
    deuColor = "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")"
    pixels = this.props.canvasTritan;
    // pixels in RGBA
    // index in ARGB
    finalRed = pixels[finalIndex];
    finalGreen = pixels[finalIndex + 1];
    finalBlue = pixels[finalIndex + 2];
    triColor = "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")"
    if(finalRed != null && finalGreen != null && finalBlue != null){
      if(this.props.selectedPaletteColor.type === "foreground"){
        this.props.dispatch({type: "UPDATE_FOREGROUND_CVD",
          index: this.props.selectedPaletteColor.index,
          cvdColors: {protan: proColor, deutan: deuColor, tritan: triColor}});
      }else{
        this.props.dispatch({type: "UPDATE_BACKGROUND_CVD",
          index: this.props.selectedPaletteColor.index,
          cvdColors: {protan: proColor, deutan: deuColor, tritan: triColor}});
      }
    }
    console.log(7);
  }
  updateColor(newColor){
    if(this.props.selectedPaletteColor.type === "foreground"){
      this.props.dispatch({type: "EDIT_FOREGROUND_COLOR", newColor: newColor, index: this.props.selectedPaletteColor.index});
    }else{
      this.props.dispatch({type: "EDIT_BACKGROUND_COLOR", newColor: newColor, index: this.props.selectedPaletteColor.index});
    }
    this.simulateCVD(newColor);
  }
  handleColorPickerChange(color, event){
    this.setState({pickerColor: color.hex}, () => {
      console.log("change");
    });
    this.updateColor(color.hex);

  }
  static getDerivedStateFromProps(props, state){
    let result = null;
    //console.log(props.selectedPaletteColor);
    if(props.selectedPaletteColor.type === "foreground"){
      result = {...result, pickerColor: props.foregroundColors[props.selectedPaletteColor.index].color}
    }else{
      result = {...result, pickerColor: props.backgroundColors[props.selectedPaletteColor.index].color}
    }

    return result;
  }
  componentDidUpdate(prevProps){
    //console.log("ColorPicker update");
  }
  componentDidMount(){
    console.log("Mount");
    if(this.props.selectedPaletteColor.type === "foreground"){
      this.setState({pickerColor: this.props.foregroundColors[this.props.selectedPaletteColor.index].color});
    }else{
      this.setState({pickerColor: this.props.backgroundColors[this.props.selectedPaletteColor.index].color});
    }

  }
  render(){
    return (
      <div className="color-picker-wrapper" id={this.props.pickerId}>
        <SketchPicker disableAlpha={true} presetColors={[]}
          color={this.state.pickerColor} onChange={this.handleColorPickerChange}/>
      </div>
    );
  }
}

// Add this function:
function mapStateToProps(state) {
  return ({
    foregroundColors: state.foregroundColors,
    backgroundColors: state.backgroundColors,
    selectedPaletteColor: state.selectedPaletteColor
  });
}
export default connect(mapStateToProps)(ColorPicker);
