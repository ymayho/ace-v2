import React from 'react';
import './scss/full-example.scss';

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
      <div className="full-example-page-wrapper">
        <ExamplePage regularColorSet={this.state.regularColorSet}
          protanColorSet={this.state.protanColorSet} deutanColorSet={this.state.deutanColorSet}
          tritanColorSet={this.state.tritanColorSet} elementDisplay={this.state.elementDisplay} />
      </div>
    );
  }
}

export default FullExamplePage;
