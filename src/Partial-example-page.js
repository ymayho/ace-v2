import React from 'react';
import { connect } from 'react-redux';
import './scss/partial-example.scss';

import ExamplePage from './Example-page.js'

class PartialExamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "regular",
      currentColorSet: {
        pageBodyText: "#000000",
        headerText: "#ffffff",
        hyperlinkText: "#0000ee",
        visitedHyperlinkText: "#551a8b",
        accentHeaderText: "#000000",
        buttonText: "#000000",
        accentButtonText: "#ffffff",
        pageBack: "#ffffff",
        headerBack: "#000000",
        accentHeaderBack: "#aaaaaa",
        buttonBack: "#aaaaaa",
        accentButtonBack: "#000000"
      },
      regularColorSet: {},
      protanColorSet: {},
      deutanColorSet: {},
      tritanColorSet: {},
      displayAccentHeader: false,
      displayButton: false,
      displayAccentButton: false,
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("Example: getDerivedStateFromProps");
    let result = null;
    let regular = {regularColorSet: {
      pageBodyText: props.foregroundColors[0].color,
      headerText: props.foregroundColors[1].color,
      hyperlinkText: props.foregroundColors[2].color,
      visitedHyperlinkText: props.foregroundColors[3].color,
      accentHeaderText: props.foregroundColors[4].color,
      buttonText: props.foregroundColors[5].color,
      accentButtonText: props.foregroundColors[6].color,
      pageBack: props.backgroundColors[0].color,
      headerBack: props.backgroundColors[1].color,
      accentHeaderBack: props.backgroundColors[2].color,
      buttonBack: props.backgroundColors[3].color,
      accentButtonBack: props.backgroundColors[4].color
    }};
    //console.log(regular.regularColorSet)
    let cvd = {protanColorSet: {
      pageBodyText: props.foregroundCVDs[0].protan,
      headerText: props.foregroundCVDs[1].protan,
      hyperlinkText: props.foregroundCVDs[2].protan,
      visitedHyperlinkText: props.foregroundCVDs[3].protan,
      accentHeaderText: props.foregroundCVDs[4].protan,
      buttonText: props.foregroundCVDs[5].protan,
      accentButtonText: props.foregroundCVDs[6].protan,
      pageBack: props.backgroundCVDs[0].protan,
      headerBack: props.backgroundCVDs[1].protan,
      accentHeaderBack: props.backgroundCVDs[2].protan,
      buttonBack: props.backgroundCVDs[3].protan,
      accentButtonBack: props.backgroundCVDs[4].protan
    },
    deutanColorSet: {
      pageBodyText: props.foregroundCVDs[0].deutan,
      headerText: props.foregroundCVDs[1].deutan,
      hyperlinkText: props.foregroundCVDs[2].deutan,
      visitedHyperlinkText: props.foregroundCVDs[3].deutan,
      accentHeaderText: props.foregroundCVDs[4].deutan,
      buttonText: props.foregroundCVDs[5].deutan,
      accentButtonText: props.foregroundCVDs[6].deutan,
      pageBack: props.backgroundCVDs[0].deutan,
      headerBack: props.backgroundCVDs[1].deutan,
      accentHeaderBack: props.backgroundCVDs[2].deutan,
      buttonBack: props.backgroundCVDs[3].deutan,
      accentButtonBack: props.backgroundCVDs[4].deutan
    },
    tritanColorSet: {
      pageBodyText: props.foregroundCVDs[0].tritan,
      headerText: props.foregroundCVDs[1].tritan,
      hyperlinkText: props.foregroundCVDs[2].tritan,
      visitedHyperlinkText: props.foregroundCVDs[3].tritan,
      accentHeaderText: props.foregroundCVDs[4].tritan,
      buttonText: props.foregroundCVDs[5].tritan,
      accentButtonText: props.foregroundCVDs[6].tritan,
      pageBack: props.backgroundCVDs[0].tritan,
      headerBack: props.backgroundCVDs[1].tritan,
      accentHeaderBack: props.backgroundCVDs[2].tritan,
      buttonBack: props.backgroundCVDs[3].tritan,
      accentButtonBack: props.backgroundCVDs[4].tritan
    }}//End let cvd;
    result = {...result, regularColorSet: {...regular.regularColorSet},
      protanColorSet: {...cvd.protanColorSet}, deutanColorSet: {...cvd.deutanColorSet},
      tritanColorSet: {...cvd.tritanColorSet}};
    let current = {};
    if(state.mode === "regular"){
      current = {currentColorSet: {...regular.regularColorSet}};
    }else if(state.mode === "protan"){
      current = {currentColorSet: {...cvd.protanColorSet}};
    }else if(state.mode === "deutan"){
      current = {currentColorSet: {...cvd.deutanColorSet}};
    }else{
      current = {currentColorSet: {...cvd.tritanColorSet}};
    }
    let regex = /^rgb/;
    if(regex.test(props.foregroundCVDs[0].protan)){
      result = {...result, ...regular, ...current, ...cvd};
    }else{
      result = {...result, ...regular, ...current};
    }
    // for(let i in props.elementDisplay){
    //   switch(props.elementDisplay[i].name){
    //     case "accent-header":
    //       result = {...result, displayAccentHeader: props.elementDisplay[i].display}
    //       break;
    //     case "regular-button":
    //       result = {...result, displayButton: props.elementDisplay[i].display}
    //       break;
    //     case "accent-button":
    //       result = {...result, displayAccentButton: props.elementDisplay[i].display}
    //       break;
    //     default:
    //       break;
    //   }
    // }
    return result;
  }
  componentDidUpdate(prevProps, prevState){
    console.log("Partial Example Update");

  }
  componentDidMount(){
    console.log("Partial Example Mount");
  }
  render(){
    return (
      <div className="partial-example-page-wrapper">
        <ExamplePage regularColorSet={this.state.regularColorSet}
          protanColorSet={this.state.protanColorSet} deutanColorSet={this.state.deutanColorSet}
          tritanColorSet={this.state.tritanColorSet} elementDisplay={this.props.elementDisplay} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return ({
    foregroundColors: state.foregroundColors,
    backgroundColors: state.backgroundColors,
    foregroundCVDs: state.foregroundCVDs,
    backgroundCVDs: state.backgroundCVDs,
    elementDisplay: state.elementDisplay
  });
}
export default connect(mapStateToProps)(PartialExamplePage);
