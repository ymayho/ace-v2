import React from 'react';
import './scss/example-page.scss';

import ExamplePage from './Example-page.js'

class FullExamplePage extends React.Component {
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
    this.handleStorageChange = this.handleStorageChange.bind(this);
  }

  static getDerivedStateFromProps(props, state){
    // console.log("Example: getDerivedStateFromProps");
    let result = null;
    // let regular = {regularColorSet: {
    //   pageBodyText: props.foregroundColors[0].color,
    //   headerText: props.foregroundColors[1].color,
    //   hyperlinkText: props.foregroundColors[2].color,
    //   visitedHyperlinkText: props.foregroundColors[3].color,
    //   accentHeaderText: props.foregroundColors[4].color,
    //   buttonText: props.foregroundColors[5].color,
    //   accentButtonText: props.foregroundColors[6].color,
    //   pageBack: props.backgroundColors[0].color,
    //   headerBack: props.backgroundColors[1].color,
    //   accentHeaderBack: props.backgroundColors[2].color,
    //   buttonBack: props.backgroundColors[3].color,
    //   accentButtonBack: props.backgroundColors[4].color
    // }};
    // //console.log(regular.regularColorSet)
    // let cvd = {protanColorSet: {
    //   pageBodyText: props.foregroundCVDs[0].protan,
    //   headerText: props.foregroundCVDs[1].protan,
    //   hyperlinkText: props.foregroundCVDs[2].protan,
    //   visitedHyperlinkText: props.foregroundCVDs[3].protan,
    //   accentHeaderText: props.foregroundCVDs[4].protan,
    //   buttonText: props.foregroundCVDs[5].protan,
    //   accentButtonText: props.foregroundCVDs[6].protan,
    //   pageBack: props.backgroundCVDs[0].protan,
    //   headerBack: props.backgroundCVDs[1].protan,
    //   accentHeaderBack: props.backgroundCVDs[2].protan,
    //   buttonBack: props.backgroundCVDs[3].protan,
    //   accentButtonBack: props.backgroundCVDs[4].protan
    // },
    // deutanColorSet: {
    //   pageBodyText: props.foregroundCVDs[0].deutan,
    //   headerText: props.foregroundCVDs[1].deutan,
    //   hyperlinkText: props.foregroundCVDs[2].deutan,
    //   visitedHyperlinkText: props.foregroundCVDs[3].deutan,
    //   accentHeaderText: props.foregroundCVDs[4].deutan,
    //   buttonText: props.foregroundCVDs[5].deutan,
    //   accentButtonText: props.foregroundCVDs[6].deutan,
    //   pageBack: props.backgroundCVDs[0].deutan,
    //   headerBack: props.backgroundCVDs[1].deutan,
    //   accentHeaderBack: props.backgroundCVDs[2].deutan,
    //   buttonBack: props.backgroundCVDs[3].deutan,
    //   accentButtonBack: props.backgroundCVDs[4].deutan
    // },
    // tritanColorSet: {
    //   pageBodyText: props.foregroundCVDs[0].tritan,
    //   headerText: props.foregroundCVDs[1].tritan,
    //   hyperlinkText: props.foregroundCVDs[2].tritan,
    //   visitedHyperlinkText: props.foregroundCVDs[3].tritan,
    //   accentHeaderText: props.foregroundCVDs[4].tritan,
    //   buttonText: props.foregroundCVDs[5].tritan,
    //   accentButtonText: props.foregroundCVDs[6].tritan,
    //   pageBack: props.backgroundCVDs[0].tritan,
    //   headerBack: props.backgroundCVDs[1].tritan,
    //   accentHeaderBack: props.backgroundCVDs[2].tritan,
    //   buttonBack: props.backgroundCVDs[3].tritan,
    //   accentButtonBack: props.backgroundCVDs[4].tritan
    // }}//End let cvd;
    // let current = {};
    // if(state.mode === "regular"){
    //   current = {currentColorSet: {...regular.regularColorSet}};
    // }else if(state.mode === "protan"){
    //   current = {currentColorSet: {...cvd.protanColorSet}};
    // }else if(state.mode === "deutan"){
    //   current = {currentColorSet: {...cvd.deutanColorSet}};
    // }else{
    //   current = {currentColorSet: {...cvd.tritanColorSet}};
    // }
    // let regex = /^rgb/;
    // if(regex.test(props.foregroundCVDs[0].protan)){
    //   result = {...regular, ...current, ...cvd};
    // }else{
    //   result = {...regular, ...current};
    // }
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
  handleStorageChange(){
    let state = JSON.parse(localStorage.getItem("state"))
    let foregroundColors = state.foregroundColors;
    let backgroundColors = state.backgroundColors;
    let foregroundCVDs = state.foregroundCVDs;
    let backgroundCVDs = state.backgroundCVDs;
    let elementDisplay = state.elementDisplay;
    //console.log(foregroundColors, backgroundColors, foregroundCVDs, backgroundCVDs);
    let regular = {
      pageBodyText: foregroundColors[0].color,
      headerText: foregroundColors[1].color,
      hyperlinkText: foregroundColors[2].color,
      visitedHyperlinkText: foregroundColors[3].color,
      accentHeaderText: foregroundColors[4].color,
      buttonText: foregroundColors[5].color,
      accentButtonText: foregroundColors[6].color,
      pageBack: backgroundColors[0].color,
      headerBack: backgroundColors[1].color,
      accentHeaderBack: backgroundColors[2].color,
      buttonBack: backgroundColors[3].color,
      accentButtonBack: backgroundColors[4].color
    };
    let cvd = {protanColorSet: {
      pageBodyText: foregroundCVDs[0].protan,
      headerText: foregroundCVDs[1].protan,
      hyperlinkText: foregroundCVDs[2].protan,
      visitedHyperlinkText: foregroundCVDs[3].protan,
      accentHeaderText: foregroundCVDs[4].protan,
      buttonText: foregroundCVDs[5].protan,
      accentButtonText: foregroundCVDs[6].protan,
      pageBack: backgroundCVDs[0].protan,
      headerBack: backgroundCVDs[1].protan,
      accentHeaderBack: backgroundCVDs[2].protan,
      buttonBack: backgroundCVDs[3].protan,
      accentButtonBack: backgroundCVDs[4].protan
    },
    deutanColorSet: {
      pageBodyText: foregroundCVDs[0].deutan,
      headerText: foregroundCVDs[1].deutan,
      hyperlinkText: foregroundCVDs[2].deutan,
      visitedHyperlinkText: foregroundCVDs[3].deutan,
      accentHeaderText: foregroundCVDs[4].deutan,
      buttonText: foregroundCVDs[5].deutan,
      accentButtonText: foregroundCVDs[6].deutan,
      pageBack: backgroundCVDs[0].deutan,
      headerBack: backgroundCVDs[1].deutan,
      accentHeaderBack: backgroundCVDs[2].deutan,
      buttonBack: backgroundCVDs[3].deutan,
      accentButtonBack: backgroundCVDs[4].deutan
    },
    tritanColorSet: {
      pageBodyText: foregroundCVDs[0].tritan,
      headerText: foregroundCVDs[1].tritan,
      hyperlinkText: foregroundCVDs[2].tritan,
      visitedHyperlinkText: foregroundCVDs[3].tritan,
      accentHeaderText: foregroundCVDs[4].tritan,
      buttonText: foregroundCVDs[5].tritan,
      accentButtonText: foregroundCVDs[6].tritan,
      pageBack: backgroundCVDs[0].tritan,
      headerBack: backgroundCVDs[1].tritan,
      accentHeaderBack: backgroundCVDs[2].tritan,
      buttonBack: backgroundCVDs[3].tritan,
      accentButtonBack: backgroundCVDs[4].tritan
    }}//End let cvd;
    this.setState({regularColorSet: regular, protanColorSet: cvd.protanColorSet,
      deutanColorSet: cvd.deutanColorSet, tritanColorSet: cvd.tritanColorSet,
      elementDisplay: elementDisplay});
  }
  componentDidUpdate(prevProps, prevState){
    console.log("Full Example Update");

  }
  componentDidMount(){
    console.log("Full Example Mount");
    this.handleStorageChange();
    window.addEventListener('storage', this.handleStorageChange);

  }
  render(){
    return (
      <div className="example-page-wrapper">
        <ExamplePage regularColorSet={this.state.regularColorSet}
          protanColorSet={this.state.protanColorSet} deutanColorSet={this.state.deutanColorSet}
          tritanColorSet={this.state.tritanColorSet} elementDisplay={this.state.elementDisplay} />
      </div>
    );
  }
}

export default FullExamplePage;
