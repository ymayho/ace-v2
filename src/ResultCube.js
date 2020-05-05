import React from 'react';
import { connect } from 'react-redux';

class ResultCube extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      display: "display",
      contrast: 1,
      pass: true,
      passCheck: "pass"
    }
    this.displayContrastRatio = this.displayContrastRatio.bind(this);
    this.convertHextoRGB = this.convertHextoRGB.bind(this);
    this.checkWCAG = this.checkWCAG.bind(this);
  }
  checkWCAG(contrast){
    if(this.props.wcag === "AAA"){
      if(contrast >= 7){
        this.setState({passCheck: "pass"});
      }else if(contrast < 7 && contrast >=4.5){
          this.setState({passCheck: "half"});
      }else{
        this.setState({passCheck: "fail"});
      }
    }else{
      if(contrast >=4.5){
          this.setState({passCheck: "pass"});
      }else if(contrast < 4.5 && contrast >=3){
        this.setState({passCheck: "half"});
      }else{
        this.setState({passCheck: "fail"});
      }
    }
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
  static shouldDisplay(foregroundId, backgroundId, elementDisplay){
    let token = true;
    if(foregroundId < 4 && backgroundId < 2){
      token = true;
    }else if(foregroundId >= 4 && backgroundId < 2){
      elementDisplay.forEach(item => {
        if(item.foreIndex === foregroundId){
          token = item.display;
        }
      });
    }else if(foregroundId < 4 && backgroundId >= 2){
      elementDisplay.forEach(item => {
        if(item.backIndex === backgroundId){
          token = item.display;
        }
      });
    }else{
      token = false;
      elementDisplay.forEach(item => {
        if(item.foreIndex === foregroundId){
          token = item.display;
        }
      });
      if(token){
        elementDisplay.forEach(item => {
          if(item.backIndex === backgroundId){
            token = item.display;
          }
        });
      }//End if(token).
    }//End if-else.
    return token;
  }
  static getDerivedStateFromProps(props, state){
    let result = null;
    let display = ResultCube.shouldDisplay(props.foregroundId, props.backgroundId, props.elementDisplay);
    if(display){
      result = {display: "display"};
    }
    else{
      result = {display: "hidden"};
    }
    return result;
  }
  componentDidUpdate(){
    //console.log("ResultUpdate", this.props.foregroundId, this.props.backgroundId);
    this.displayContrastRatio(this.props.foregroundColors[this.props.foregroundId].color, this.props.backgroundColors[this.props.backgroundId].color);
    this.checkWCAG(this.state.contrast);
  }
  componentDidMount(){
    //console.log("ResultUpdate", this.props.foregroundId, this.props.backgroundId);
    this.displayContrastRatio(this.props.foregroundColors[this.props.foregroundId].color, this.props.backgroundColors[this.props.backgroundId].color);
    //this.setState({foreground: this.props.foregroundColors[this.props.foregroundId].color, background: this.props.backgroundColors[this.props.backgroundId].color})
  }
  render(){
    let passCheckText = () => {
      switch(this.state.passCheck){
        case "pass":
          return "Pass";
        case "half":
          return "Half";
        case "fail":
          return "Fail";
        default:
          return;
      }
    };
    return (
      <div className={"result-cube " + this.state.display + " " + this.state.passCheck}>
        <div className="result-content" style={{color: this.props.foregroundColors[this.props.foregroundId].color, backgroundColor: this.props.backgroundColors[this.props.backgroundId].color}}>
          <div className="wcag-check">
          {passCheckText()}</div>
          <div className="contrast-ratio">{this.state.contrast}</div>
        </div>
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
    wcag: state.wcag,
    elementDisplay: state.elementDisplay
  });
}

export default connect(mapStateToProps)(ResultCube);
