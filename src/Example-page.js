import React from 'react';
import {Link} from 'react-router-dom';


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
      // regularColorSet: {},
      // protanColorSet: {},
      // deutanColorSet: {},
      // tritanColorSet: {},
      displayAccentHeader: false,
      displayButton: false,
      displayAccentButton: false,
    }
    this.resetMode = this.resetMode.bind(this);
    this.handleModeSwitch = this.handleModeSwitch.bind(this)
  }
  resetMode(){
    this.container.classList.remove("grayscale");
    let options = document.getElementsByClassName("option-btn");
    Array.from(options).forEach((item) => {
      //console.log(item.classList);
      item.classList.remove("current-selection");
    });
  }
  handleModeSwitch(e){
    let mode = e.target.value;
    console.log(e.target.classList);
    this.resetMode();
    e.target.classList.add("current-selection");//Button style.
    console.log("YO");
    if(mode === "regular"){
      this.setState({currentColorSet: {...this.props.regularColorSet}, mode: "regular"});
    }else if(mode === "protan"){
      this.setState({currentColorSet: {...this.props.protanColorSet}, mode: "protan"});
    }else if(mode === "deutan"){
      this.setState({currentColorSet: {...this.props.deutanColorSet}, mode: "deutan"});
    }else if(mode === "tritan"){
      this.setState({currentColorSet: {...this.props.tritanColorSet}, mode: "tritan"});
    }else if(mode === "grayscale"){
      this.container.classList.add("grayscale");
    }
  }
  static getDerivedStateFromProps(props, state){
    console.log("Example: getDerivedStateFromProps");
    let result = null;

    let current = {};
    if(state.mode === "regular"){
      current = {currentColorSet: {...props.regularColorSet}};
    }else if(state.mode === "protan"){
      current = {currentColorSet: {...props.protanColorSet}};
    }else if(state.mode === "deutan"){
      current = {currentColorSet: {...props.deutanColorSet}};
    }else{
      current = {currentColorSet: {...props.tritanColorSet}};
    }
    // let regex = /^rgb/;
    // if(regex.test(props.foregroundCVDs[0].protan)){
    //   result = {...regular, ...current, ...cvd};
    // }else{
    //   result = {...regular, ...current};
    // }
    result = {...current}
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
  }
  componentDidMount(){
    console.log("Example Mount");
  }
  render(){
    let style = {
      pageStyle: {color: this.state.currentColorSet.pageBodyText, backgroundColor: this.state.currentColorSet.pageBack},
      hyperlinkText: {color: this.state.currentColorSet.hyperlinkText},
      accentHyperlinkText: {color: this.state.currentColorSet.visitedHyperlinkText},
      header: {color: this.state.currentColorSet.headerText, backgroundColor: this.state.currentColorSet.headerBack},
      accentHeader: {color: this.state.currentColorSet.accentHeaderText, backgroundColor: this.state.currentColorSet.accentHeaderBack},
      button: {color: this.state.currentColorSet.buttonText, backgroundColor: this.state.currentColorSet.buttonBack, borderColor: this.state.currentColorSet.buttonBack},
      accentButton: {color: this.state.currentColorSet.accentButtonText, backgroundColor: this.state.currentColorSet.accentButtonBack, borderColor: this.state.currentColorSet.accentButtonBack},

  };
    let buttonElement = (<button className="btn-normal" style={style["button"]}>Button</button>);
    let accentButtonElement = (<button className="btn-accent" style={style["accentButton"]}>Accent Button</button>);
    return (
      <div className="example-page-wrapper">
        <nav className="menu">
          <div className="simulation-options">
            <button className="option-btn current-selection" onClick={this.handleModeSwitch} value="regular">Typical Vision</button>
            <button className="option-btn" onClick={this.handleModeSwitch} value="protan">Red Colorblind <span className="technical-term">Protan</span></button>
            <button className="option-btn" onClick={this.handleModeSwitch} value="deutan">Green Colorblind <span className="technical-term">Deutan</span></button>
            <button className="option-btn" onClick={this.handleModeSwitch} value="tritan">Blue Colorblind <span className="technical-term">Tritan</span></button>
            <button className="option-btn" onClick={this.handleModeSwitch} value="grayscale">Grayscale</button>
          </div>
          <button className="new-tab-btn"><Link to="/example" target="_blank">Open in New Tab</Link></button>
        </nav>
        <div className="example-container" ref={(div) => this.container = div}>
          <header className="example-header" ref={(header) => this.header = header} style={style["header"]}>
            <h1 className="example-title">Example Page</h1>
            <nav>
              <li className="example-menu">Menu</li>
              <li className="example-menu" style={this.state.displayAccentHeader ? style["accentHeader"] : {}}>{this.state.displayAccentHeader ? "Accent" : "Menu"}</li>
            </nav>
          </header>
          <div className="example-body-container" ref={(div) => this.body = div} style={style["pageStyle"]}>
            <p className="text-large body-text-1">Large Text (18pt / 24px normal)</p>
            <p className="text-large body-text-1"><span className="bold">Large Text (14pt / 18.66px bold)</span></p>
            <p className="text-normal body-text-1">Normal Text (14pt / 18.66px normal)</p>
            <p><a className="hyperlink-text" href="." style={style["hyperlinkText"]}
              onClick={(e) => {e.preventDefault();}}>Hyperlink</a></p>
            <p><a className="hyperlink-text-visited" href="." style={style["accentHyperlinkText"]}
              onClick={(e) => {e.preventDefault();}}>Accent Hyperlink</a></p>
            {this.state.displayButton ? buttonElement : null}
            {this.state.displayAccentButton ? accentButtonElement : null}
          </div>
          <footer style={style["header"]} ref={(footer) => this.footer = footer}>
            This is a footer.<br />
            Copyrights, other info.
          </footer>
        </div>
      </div>
    );
  }
}

export default ExamplePage;
