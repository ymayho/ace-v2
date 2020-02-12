import React from 'react';
import { connect } from 'react-redux';

class ResultCube extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      aa: 1,
      aaa: 1,
      resultMark: [],
    }
    this.compareToWcag = this.compareToWcag.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }
  displayResult(){
    let obj;
    if(this.state.aaa === 1){
      obj = (<div className="wcag-comparison">
        <div className="wcag-2a pass">AA</div>
        <div className="wcag-3a pass">AAA</div>
      </div>);
    }
    else if(this.state.aaa === (-1)){
      obj =  (
        <div className="wcag-comparison">
          <div className="wcag-2a pass">AA</div>
          <div className="wcag-3a half">AAA</div>
        </div>);
    }
    else if(this.state.aa === (-1)){
      obj =  (
        <div className="wcag-comparison">
          <div className="wcag-2a half">AA</div>
          <div className="wcag-3a fail">AAA</div>
        </div>
      );
    }
    else{
      obj =  (
        <div className="wcag-comparison">
          <div className="wcag-2a fail">AA</div>
          <div className="wcag-3a fail">AAA</div>
        </div>
      );
    }
    this.setState({resultMark: obj});
  }
  compareToWcag(contrast){
    if(contrast>=4.5){
      this.setState({aaa: 1, aa: 1}, this.displayResult);
    }else if(contrast < 7 && contrast >=4.5){
      this.setState({aaa: -1, aa: 1}, this.displayResult);
    }else if(contrast < 4.5 && contrast > 3){
      this.setState({aaa: 0, aa: -1}, this.displayResult);
    }else{
      this.setState({aaa: 0, aa: 0}, this.displayResult);
    }
  }
  componentDidUpdate(){
    //console.log("ResultUpdate", this.props.contrastRatio, this.props.contrastRatios);
  }
  componentDidMount(){
    //console.log("ResultMount", this.props.contrastRatio, this.props.contrastRatios);
    this.compareToWcag(this.props.contrastRatio);
  }
  render(){
    return (
      <div className="result-cube" data-result-id={this.props.resultId} >
        <div className="contrast-ratio">{this.props.contrastRatio}</div>
        {this.state.resultMark}
      </div>
    );
  }
}

// Add this function:
function mapStateToProps(state) {
  return ({
    contrastRatios: state.contrastRatios
  });
}

export default connect(mapStateToProps)(ResultCube);
