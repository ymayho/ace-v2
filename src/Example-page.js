import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './scss/example-page.scss';

class ExamplePage extends React.Component {
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
    this.resetMode = this.resetMode.bind(this);
    //this.handleHoverNav = this.handleHoverNav.bind(this);
    this.handleModeSwitch = this.handleModeSwitch.bind(this)
  }
  // handleHoverNav(id, action){
  //   //console.log(id);
  //   let menu = document.getElementsByClassName("example-menu")[id-1];
  //   if(action==="in"){
  //     menu.style.backgroundColor = this.state.currentColorSet.accentHeaderBack;
  //     menu.style.color = this.state.currentColorSet.accentHeaderText;
  //   }else{
  //     menu.style.backgroundColor = this.state.currentColorSet.headerBack;
  //     menu.style.color = this.state.currentColorSet.headerText;
  //   }
  // }
  resetMode(){
    this.container.classList.remove("grayscale");
    let options = document.getElementsByClassName("option-btn");
    Array.from(options).forEach((item) => {
      console.log(item.classList);
      item.classList.remove("current-selection");
    });
    console.log("QAQ");
    // this.footer.style.backgroundColor = this.state.currentColorSet.headerBack;
  }
  handleModeSwitch(e){
    let mode = e.target.value;
    console.log(e.target.classList);
    this.resetMode();
    e.target.classList.add("current-selection");
    console.log("YO");
    if(mode === "regular"){
      this.setState({currentColorSet: {...this.state.regularColorSet}, mode: "regular"});
    }else if(mode === "protan"){
      this.setState({currentColorSet: {...this.state.protanColorSet}, mode: "protan"});
    }else if(mode === "deutan"){
      this.setState({currentColorSet: {...this.state.deutanColorSet}, mode: "deutan"});
    }else if(mode === "tritan"){
      this.setState({currentColorSet: {...this.state.tritanColorSet}, mode: "tritan"});
    }else if(mode === "grayscale"){
      //this.resetMode();
      this.container.classList.add("grayscale");
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
      result = {...regular, ...current, ...cvd};
    }else{
      result = {...regular, ...current};
    }
    for(let i in props.elementDisplay){
      switch(props.elementDisplay[i].name){
        case "accent-header":
          result = {...result, displayAccentHeader: props.elementDisplay[i].display}
          break;
        case "regular-button":
          result = {...result, displayButton: props.elementDisplay[i].display}
          break;
        case "accent-button":
          result = {...result, displayAccentButton: props.elementDisplay[i].display}
          break;
        default:
          break;
      }
    }
    return result;
  }
  componentDidUpdate(prevProps, prevState){
    console.log("Example Update");
    //this.resetMode();
  }
  componentDidMount(){
    console.log("Example Mount");
    let width = window.getComputedStyle(document.getElementsByClassName("example-page-wrapper")[0]).getPropertyValue("width");
    width = parseInt(width);
    if(width > 1000){
      alert("Sorry, the full-size example page is still under construction.");
    }
  }
  render(){
    let pageTextStyle = {color: this.state.currentColorSet.pageBodyText};
    let hyperlinkTextStyle = {color: this.state.currentColorSet.hyperlinkText};
    let accentHyperlinkTextStyle = {color: this.state.currentColorSet.visitedHyperlinkText};
    let headerStyle = {color: this.state.currentColorSet.headerText, backgroundColor: this.state.currentColorSet.headerBack};
    let accentHeaderStyle={color: this.state.currentColorSet.accentHeaderText, backgroundColor: this.state.currentColorSet.accentHeaderBack};
    let buttonStyle = {color: this.state.currentColorSet.buttonText, backgroundColor: this.state.currentColorSet.buttonBack, borderColor: this.state.currentColorSet.buttonBack};
    let accentButtonStyle = {color: this.state.currentColorSet.accentButtonText, backgroundColor: this.state.currentColorSet.accentButtonBack, borderColor: this.state.currentColorSet.accentButtonBack};

    let buttonElement = (<button className="btn-normal" style={buttonStyle}>Button</button>);
    let accentButtonElement = (<button className="btn-accent" style={accentButtonStyle}>Accent Button</button>);
    return (
      <div className="example-page-wrapper">
        <nav className="simulation-options">
          <button className="option-btn current-selection" onClick={this.handleModeSwitch} value="regular">Typical Vision</button>
          <button className="option-btn" onClick={this.handleModeSwitch} value="protan">Red Colorblind <span className="technical-term">Protan</span></button>
          <button className="option-btn" onClick={this.handleModeSwitch} value="deutan">Green Colorblind <span className="technical-term">Deutan</span></button>
          <button className="option-btn" onClick={this.handleModeSwitch} value="tritan">Blue Colorblind <span className="technical-term">Tritan</span></button>
          <button className="option-btn" onClick={this.handleModeSwitch} value="grayscale">Grayscale</button>
          <button className="new-tab-btn"><Link to="/example" target="_blank">NewTab</Link></button>
        </nav>
        <div className="example-container" ref={(div) => this.container = div}>
          <header className="example-header" ref={(header) => this.header = header} style={headerStyle}>
            <h1 className="example-title">Example Page</h1>
            <nav>
              <li className="example-menu">Menu</li>
              <li className="example-menu" style={this.state.displayAccentHeader ? accentHeaderStyle : {}}>{this.state.displayAccentHeader ? "Accent" : "Menu"}</li>
            </nav>
          </header>
          <div className="example-body-container" ref={(div) => this.body = div} style={{backgroundColor: this.state.currentColorSet.pageBack}}>
            <p className="text-large body-text-1" style={pageTextStyle}>Large Text (18pt / 24px normal)</p>
            <p className="text-large body-text-1" style={pageTextStyle}><span className="bold">Large Text (14pt / 18.66px bold)</span></p>
            <p className="text-normal body-text-1" style={pageTextStyle}>Normal Text (14pt / 18.66px normal)</p>
            <p><a className="hyperlink-text" href="." style={hyperlinkTextStyle}
              onClick={(e) => {e.preventDefault();}}>Hyperlink</a></p>
            <p><a className="hyperlink-text-visited" href="." style={accentHyperlinkTextStyle}
              onClick={(e) => {e.preventDefault();}}>Accent Hyperlink</a></p>
            {this.state.displayButton ? buttonElement : null}
            {this.state.displayAccentButton ? accentButtonElement : null}
          </div>
          <footer style={{backgroundColor: this.state.currentColorSet.headerBack}} ref={(footer) => this.footer = footer}>
            This is a footer.<br />
            Copyrights, other info.
          </footer>
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
    foregroundCVDs: state.foregroundCVDs,
    backgroundCVDs: state.backgroundCVDs,
    elementDisplay: state.elementDisplay
  });
}
export default connect(mapStateToProps)(ExamplePage);
