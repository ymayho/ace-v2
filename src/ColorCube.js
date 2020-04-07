import React from 'react';
import { connect } from 'react-redux';

class ColorCube extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      display: "display",
      colorType: "",
      colorName: "",
      displayColorName: "text color",
      colorCode: "#ffffff",
      proColor: "#ffffff",
      deuColor: "#ffffff",
      triColor: "#ffffff",
      isSelected: false
    }
    this.convertRGBToHex = this.convertRGBToHex.bind(this);
    this.handleClickCube = this.handleClickCube.bind(this);
  }
  convertRGBToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
  };
  handleClickCube(){
    this.props.dispatch({type: "UPDATE_SELECTED_COLOR_CUBE",
      newType: this.props.colorType,
      newIndex: this.props.colorNo});
  }
  static getDerivedStateFromProps(props, state){
    let result = null;
    //Decide if this cube should display
    let colorNum;
    colorNum = (props.colorType === "foreground") ? props.foregroundNumber : props.backgroundNumber;
    if(props.colorNo >= colorNum){
      result = {...result, display: "hidden"};
      return result;
    }else{
      result = {...result, display: "display"};
    }
    //Set color hex code
    if(props.colorType === "foreground"){
      result = {...result,
        colorCode: props.foregroundColors[props.colorNo].color,
        proColor: props.foregroundCVDs[props.colorNo].protan,
        deuColor: props.foregroundCVDs[props.colorNo].deutan,
        triColor: props.foregroundCVDs[props.colorNo].tritan}
    }else{
      result = {...result,
        colorCode: props.backgroundColors[props.colorNo].color,
        proColor: props.backgroundCVDs[props.colorNo].protan,
        deuColor: props.backgroundCVDs[props.colorNo].deutan,
        triColor: props.backgroundCVDs[props.colorNo].tritan}
    }
    if(props.selectedColorCube.type === props.colorType && props.selectedColorCube.index === props.colorNo){
      result = {...result, isSelected: true};
    }else{
      result = {...result, isSelected: false};
    }
    //console.log(result);
    return result;
  }
  componentDidUpdate(prevProps){

  }
  componentDidMount(){
    if(this.props.colorType === "foreground"){
      this.setState({colorType: "foreground-color", displayColorName: this.props.foregroundColors[this.props.colorNo].colorName})
    }else{
      this.setState({colorType: "background-color", displayColorName: this.props.backgroundColors[this.props.colorNo].colorName});
    }

  }

  render(){
    let className = this.state.colorType + " " + this.state.display + " " + (this.state.isSelected ? "selected-color" : "");
    return (
      <div className={className} onClick={this.handleClickCube}>
        <span className="color-name">{this.state.displayColorName}</span>
        <div className="main-color" style={{backgroundColor: this.state.colorCode}} ref={(div) => this.mainColor = div}>
          <div className="cvd-simulation-color-row">
            <div className="cvd-pro" style={{backgroundColor: this.state.proColor}}></div>
            <div className="cvd-deu" style={{backgroundColor: this.state.deuColor}}></div>
            <div className="cvd-tri" style={{backgroundColor: this.state.triColor}}></div>
          </div>
        </div>
        <span className="color-code">{this.state.colorCode}</span>
      </div>
    );
  }
}

// Add this function:
function mapStateToProps(state) {
  return ({
    foregroundNumber: state.foregroundNumber,
    backgroundNumber: state.backgroundNumber,
    foregroundColors: state.foregroundColors,
    backgroundColors: state.backgroundColors,
    foregroundCVDs: state.foregroundCVDs,
    backgroundCVDs: state.backgroundCVDs,
    selectedColorCube: state.selectedColorCube
  });
}
export default connect(mapStateToProps)(ColorCube);
