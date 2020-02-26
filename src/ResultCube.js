import React from 'react';
import { connect } from 'react-redux';

class ResultCube extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      display: "display",
      aa: 1,
      aaa: 1,
      contrast: 1,
      with2a: "",
      with3a: ""
    }
    this.displayContrastRatio = this.displayContrastRatio.bind(this);
    this.convertHextoRGB = this.convertHextoRGB.bind(this);
    this.displayWCAGResult = this.displayWCAGResult.bind(this);
  }
  displayWCAGResult(contrast){
    let obj;
    if(contrast>=7){
      obj = (<div className="wcag-comparison">
        <div className="wcag-2a pass">AA</div>
        <div className="wcag-3a pass">AAA</div>
      </div>);
    }else if(contrast < 7 && contrast >=4.5){
      obj =  (
        <div className="wcag-comparison">
          <div className="wcag-2a pass">AA</div>
          <div className="wcag-3a half">AAA</div>
        </div>);;
    }else if(contrast < 4.5 && contrast > 3){
      obj =  (
        <div className="wcag-comparison">
          <div className="wcag-2a half">AA</div>
          <div className="wcag-3a fail">AAA</div>
        </div>
      );
    }else{
      obj =  (
        <div className="wcag-comparison">
          <div className="wcag-2a fail">AA</div>
          <div className="wcag-3a fail">AAA</div>
        </div>
      );
    }
    return obj;
  }
  displayContrastRatio(fore, back){
    let foreLumi = this.calculateLuminance(this.convertHextoRGB(fore));
    let backLumi = this.calculateLuminance(this.convertHextoRGB(back));
    let contrastRatio = 0;
    if(foreLumi > backLumi){
      contrastRatio = ((foreLumi+0.05) / (backLumi+0.05)).toFixed(2);
    }else{
      contrastRatio = ((backLumi+0.05) / (foreLumi+0.05)).toFixed(2);
    }
    this.setState({contrast: contrastRatio});
  }
  calculateLuminance(rgb){
    let processedRGB = rgb.map((item, index) => {
      let temp = item / 255;
      if (temp <= 0.03928) {
        temp = (temp / 12.92);
      } else {
        temp = Math.pow(((temp + 0.055) / 1.055), 2.4);
      }
      return temp;
    });
    return ((0.2126 * processedRGB[0]) + (0.7152 * processedRGB[1]) + (0.0722 * processedRGB[2]));
  }
  convertHextoRGB(hexCode){
    let rgb = [parseInt(hexCode.substring(1,3) ,16), parseInt(hexCode.substring(3,5) ,16), parseInt(hexCode.substring(5) ,16)];
    return rgb;
  }
  static getDerivedStateFromProps(props, state){
    let result = null;
    if(props.foregroundId >= props.foregroundNumber || props.backgroundId >= props.backgroundNumber){
      result = {display: "hidden"};
    }
    else{
      result = {display: "display"};
      switch(props.wcag2a){
        case true:
          result = {...result, with2a: "with2a"};
          break;
        case false:
          result = {...result, with2a: "without2a"};
          break;
        default:
          break;
      }
      switch(props.wcag3a){
        case true:
          result = {...result, with3a: "with3a"};
          break;
        case false:
          result = {...result, with3a: "without3a"};
          break;
        default:
          break;
      }
    }
    return result;
  }
  componentDidUpdate(){
    //console.log("ResultUpdate", this.props.foregroundId, this.props.backgroundId);
    this.displayContrastRatio(this.props.foregroundColors[this.props.foregroundId].color, this.props.backgroundColors[this.props.backgroundId].color);
  }
  componentDidMount(){
    //console.log("ResultUpdate", this.props.foregroundId, this.props.backgroundId);
    this.displayContrastRatio(this.props.foregroundColors[this.props.foregroundId].color, this.props.backgroundColors[this.props.backgroundId].color);
  }
  render(){
    return (
      <div className={this.state.with2a + " result-cube " + this.state.with3a + " " + this.state.display}>
        <div className="contrast-ratio">{this.state.contrast}</div>
        {this.displayWCAGResult(this.state.contrast)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    foregroundNumber: state.foregroundNumber,
    backgroundNumber: state.backgroundNumber,
    foregroundColors: state.foregroundColors,
    backgroundColors: state.backgroundColors,
    wcag2a: state.wcag2a,
    wcag3a: state.wcag3a
  });
}

export default connect(mapStateToProps)(ResultCube);
