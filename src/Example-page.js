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
        pageBodyText1: "#000000",
        headerText: "#ffffff",
        hyperlinkText: "#0000ee",
        visitedHyperlinkText: "#551a8b",
        pageBodyText2: "#000000",
        hoverHeaderText: "#ffffff",
        pageBack: "#ffffff",
        headerBack: "#000000",
        hoverBack: "#aaaaaa",
        footerBack: "#000000"
      },
      regularColorSet: {},
      protanColorSet: {},
      deutanColorSet: {},
      tritanColorSet: {},
      counter: 0
    }
    this.setColorState = this.setColorState.bind(this);
    this.resetMode = this.resetMode.bind(this);
    this.handleHoverNav = this.handleHoverNav.bind(this);
    this.handleModeSwitch = this.handleModeSwitch.bind(this)
  }
  handleHoverNav(id, action){
    console.log(id);
    let menu = document.getElementsByClassName("example-menu")[id-1];
    if(action==="in"){
      menu.style.backgroundColor = this.state.currentColorSet.hoverBack;
      menu.style.color = this.state.currentColorSet.hoverHeaderText;
    }else{
      menu.style.backgroundColor = this.state.currentColorSet.headerBack;
      menu.style.color = this.state.currentColorSet.headerText;
    }
  }
  resetMode(){
    this.container.classList.remove("grayscale");
    let menu = document.getElementsByClassName("example-menu");
    Array.from(menu).forEach((item) => {
      item.style.backgroundColor = this.state.currentColorSet.headerBack;
      item.style.color = this.state.currentColorSet.headerText;
    });
  }
  handleModeSwitch(mode){
    console.log(mode);
    if(mode === "regular"){
      this.setState({currentColorSet: {...this.state.regularColorSet}, mode: "regular"}, () => this.resetMode());
    }else if(mode === "protan"){
      this.setState({currentColorSet: {...this.state.protanColorSet}, mode: "protan"}, () => this.resetMode());
    }else if(mode === "deutan"){
      this.setState({currentColorSet: {...this.state.deutanColorSet}, mode: "deutan"}, () => this.resetMode());
    }else if(mode === "tritan"){
      this.setState({currentColorSet: {...this.state.tritanColorSet}, mode: "tritan"}, () => this.resetMode());
    }else if(mode === "grayscale"){
      this.resetMode();
      this.container.classList.add("grayscale");
    }
  }
  setColorState(colorType){
    switch(colorType){
      case "regular":
        this.setState({
          regularColorSet: {
            pageBodyText1: this.props.foregroundColors[0].color,
            headerText: this.props.foregroundColors[1].color,
            hyperlinkText: this.props.foregroundColors[2].color,
            visitedHyperlinkText: this.props.foregroundColors[3].color,
            pageBodyText2: this.props.foregroundColors[4].color,
            hoverHeaderText: this.props.foregroundColors[5].color,
            pageBack: this.props.backgroundColors[0].color,
            headerBack: this.props.backgroundColors[1].color,
            hoverBack: this.props.backgroundColors[2].color,
            footerBack: this.props.backgroundColors[3].color,
          }});
        break;
      case "cvd":
        this.setState({
          protanColorSet: {
            pageBodyText1: this.props.foregroundCVDs[0].protan,
            headerText: this.props.foregroundCVDs[1].protan,
            hyperlinkText: this.props.foregroundCVDs[2].protan,
            visitedHyperlinkText: this.props.foregroundCVDs[3].protan,
            pageBodyText2: this.props.foregroundCVDs[4].protan,
            hoverHeaderText: this.props.foregroundCVDs[5].protan,
            pageBack: this.props.backgroundCVDs[0].protan,
            headerBack: this.props.backgroundCVDs[1].protan,
            hoverBack: this.props.backgroundCVDs[2].protan,
            footerBack: this.props.backgroundCVDs[3].protan,
          },
          deutanColorSet: {
            pageBodyText1: this.props.foregroundCVDs[0].deutan,
            headerText: this.props.foregroundCVDs[1].deutan,
            hyperlinkText: this.props.foregroundCVDs[2].deutan,
            visitedHyperlinkText: this.props.foregroundCVDs[3].deutan,
            pageBodyText2: this.props.foregroundCVDs[4].deutan,
            hoverHeaderText: this.props.foregroundCVDs[5].deutan,
            pageBack: this.props.backgroundCVDs[0].deutan,
            headerBack: this.props.backgroundCVDs[1].deutan,
            hoverBack: this.props.backgroundCVDs[2].deutan,
            footerBack: this.props.backgroundCVDs[3].deutan,
          },
          tritanColorSet: {
            pageBodyText1: this.props.foregroundCVDs[0].tritan,
            headerText: this.props.foregroundCVDs[1].tritan,
            hyperlinkText: this.props.foregroundCVDs[2].tritan,
            visitedHyperlinkText: this.props.foregroundCVDs[3].tritan,
            pageBodyText2: this.props.foregroundCVDs[4].tritan,
            hoverHeaderText: this.props.foregroundCVDs[5].tritan,
            pageBack: this.props.backgroundCVDs[0].tritan,
            headerBack: this.props.backgroundCVDs[1].tritan,
            hoverBack: this.props.backgroundCVDs[2].tritan,
            footerBack: this.props.backgroundCVDs[3].tritan,
          }
        });
        break;
      default:
        break;
    }
  }
  static getDerivedStateFromProps(props, state){
    console.log("Example: getDerivedStateFromProps");
    let result = null;
    let regular = {regularColorSet: {
      pageBodyText1: props.foregroundColors[0].color,
      headerText: props.foregroundColors[1].color,
      hyperlinkText: props.foregroundColors[2].color,
      visitedHyperlinkText: props.foregroundColors[3].color,
      pageBodyText2: props.foregroundNumber >=5 ? props.foregroundColors[4].color : props.foregroundColors[0].color,
      hoverHeaderText: props.foregroundNumber >=6 ? props.foregroundColors[5].color : props.foregroundColors[1].color,
      pageBack: props.backgroundColors[0].color,
      headerBack: props.backgroundColors[1].color,
      hoverBack: props.backgroundNumber >= 3 ? props.backgroundColors[2].color : props.backgroundColors[1].color,
      footerBack: props.backgroundNumber >= 4 ? props.backgroundColors[3].color : props.backgroundColors[1].color,
    }};
    console.log(regular.regularColorSet)
    let cvd = {protanColorSet: {
      pageBodyText1: props.foregroundCVDs[0].protan,
      headerText: props.foregroundCVDs[1].protan,
      hyperlinkText: props.foregroundCVDs[2].protan,
      visitedHyperlinkText: props.foregroundCVDs[3].protan,
      pageBodyText2: props.foregroundNumber >=5 ? props.foregroundCVDs[4].protan : props.foregroundCVDs[0].protan,
      hoverHeaderText: props.foregroundNumber >=6 ? props.foregroundCVDs[5].protan : props.foregroundCVDs[1].protan,
      pageBack: props.backgroundCVDs[0].protan,
      headerBack: props.backgroundCVDs[1].protan,
      hoverBack: props.backgroundNumber >= 3 ? props.backgroundCVDs[2].protan : props.backgroundCVDs[1].protan,
      footerBack: props.backgroundNumber >= 4 ? props.backgroundCVDs[3].protan : props.backgroundCVDs[1].protan,
    },
    deutanColorSet: {
      pageBodyText1: props.foregroundCVDs[0].deutan,
      headerText: props.foregroundCVDs[1].deutan,
      hyperlinkText: props.foregroundCVDs[2].deutan,
      visitedHyperlinkText: props.foregroundCVDs[3].deutan,
      pageBodyText2: props.foregroundNumber >=5 ? props.foregroundCVDs[4].deutan : props.foregroundCVDs[0].deutan,
      hoverHeaderText: props.foregroundNumber >=6 ? props.foregroundCVDs[5].deutan : props.foregroundCVDs[1].deutan,
      pageBack: props.backgroundCVDs[0].deutan,
      headerBack: props.backgroundCVDs[1].deutan,
      hoverBack: props.backgroundNumber >= 3 ? props.backgroundCVDs[2].deutan : props.backgroundCVDs[1].protan,
      footerBack: props.backgroundNumber >= 4 ? props.backgroundCVDs[3].deutan : props.backgroundCVDs[1].protan,
    },
    tritanColorSet: {
      pageBodyText1: props.foregroundCVDs[0].tritan,
      headerText: props.foregroundCVDs[1].tritan,
      hyperlinkText: props.foregroundCVDs[2].tritan,
      visitedHyperlinkText: props.foregroundCVDs[3].tritan,
      pageBodyText2: props.foregroundNumber >=5 ? props.foregroundCVDs[4].tritan : props.foregroundCVDs[0].tritan,
      hoverHeaderText: props.foregroundNumber >=6 ? props.foregroundCVDs[5].tritan : props.foregroundCVDs[1].tritan,
      pageBack: props.backgroundCVDs[0].tritan,
      headerBack: props.backgroundCVDs[1].tritan,
      hoverBack: props.backgroundNumber >= 3 ? props.backgroundCVDs[2].tritan : props.backgroundCVDs[1].protan,
      footerBack: props.backgroundNumber >= 4 ? props.backgroundCVDs[3].tritan : props.backgroundCVDs[1].protan,
    }}
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
    return result;
  }
  componentDidUpdate(prevProps, prevState){
    console.log("Example Update");
  }
  componentDidMount(){
    console.log("Example Mount");
    // this.setColorState("regular");
    // this.setColorState("cvd");
  }
  render(){
    return (
      <div className="example-page-wrapper">
        <nav className="simulation-options">
          <button onClick={() => this.handleModeSwitch("regular")}>No CVD</button>
          <button onClick={() => this.handleModeSwitch("protan")}>Protan</button>
          <button onClick={() => this.handleModeSwitch("deutan")}>Deutan</button>
          <button onClick={() => this.handleModeSwitch("tritan")}>Tritan</button>
          <button onClick={() => this.handleModeSwitch("grayscale")}>Grayscale</button>
          <button><Link to="/example" target="_blank">NewTab</Link></button>
        </nav>
        <div className="example-container" ref={(div) => this.container = div}>
          <header className="example-header" ref={(header) => this.header = header} style={{backgroundColor: this.state.currentColorSet.headerBack}}>
            <h1 className="example-title">Example Page</h1>
            <nav>
              <li className="example-menu" onMouseOver={() => {this.handleHoverNav(1, "in")}}
              onMouseOut={() => {this.handleHoverNav(1, "out")}}>Menu 1</li>
              <li className="example-menu" onMouseOver={() => {this.handleHoverNav(2, "in")}}
              onMouseOut={() => {this.handleHoverNav(2, "out")}}>Menu 2</li>
              <li className="example-menu" onMouseOver={() => {this.handleHoverNav(3, "in")}}
              onMouseOut={() => {this.handleHoverNav(3, "out")}}>Menu 3</li>
            </nav>
          </header>
          <div className="example-body-container" ref={(div) => this.body = div} style={{backgroundColor: this.state.currentColorSet.pageBack}}>
            <p className="text-18pt body-text-1" style={{color: this.state.currentColorSet.pageBodyText1}}>
              This is 18 point text and it is considered large scale by WCAG 2.0. At the AA level it (or larger font sizes) can be used with a minimum contrast ratio 3:1 or greater to ensure it is legible by people with CVD or other vision impairments as well as people with typical colour vision. To achieve a pass at AAA enhanced contrast the contrast ratio would need to be at least 4.5:1
            </p>
            <p className="text-14pt body-text-1" style={{color: this.state.currentColorSet.pageBodyText1}}>
              This text is 14 point and it is considered small text by WCAG 2.0 (less than 18 point). At the AA level this font size can be used with a minimum contrast
          ratio 4.5:1 or greater to ensure it is legible by people with CVD or other vision impairments as well as people
          with typical colour vision. To achieve a pass at AAA enhanced contrast the contrast ratio would need to be at least 7:1
            </p>
            <p className="text-14pt body-text-1" style={{color: this.state.currentColorSet.pageBodyText1}}>When you use <a className="hyperlink-text" href="."
            style={{color: this.state.currentColorSet.hyperlinkText}} onClick={(e) => {e.preventDefault();}}>hyperlinks</a> you will want to customise them because your background colour might be too dark for the defult blue, make sure they are still underlined and that
            the colour you choose to show when the link has been visited is also easy to distinguish against the background, e.g., <a className="hyperlink-text-visited" href="."
            style={{color: this.state.currentColorSet.visitedHyperlinkText}} onClick={(e) => {e.preventDefault();}}>hyperlinks</a>
            </p>
            <p className="text-18pt body-text-2" style={{color: this.state.currentColorSet.pageBodyText2}}>
              This is 18 point text and it is considered large scale by WCAG 2.0. At the AA level it (or larger font sizes) can be used with a minimum contrast ratio 3:1 or greater to ensure it is legible by people with CVD or other vision impairments as well as people with typical colour vision. To achieve a pass at AAA enhanced contrast the contrast ratio would need to be at least 4.5:1
            </p>
            <p className="text-14pt body-text-2" style={{color: this.state.currentColorSet.pageBodyText2}}>
              This text is 14 point and it is considered small text by WCAG 2.0 (less than 18 point). At the AA level this font size can be used with a minimum contrast
          ratio 4.5:1 or greater to ensure it is legible by people with CVD or other vision impairments as well as people
          with typical colour vision. To achieve a pass at AAA enhanced contrast the contrast ratio would need to be at least 7:1
            </p>
            <p className="text-14pt body-text-2" style={{color: this.state.currentColorSet.pageBodyText2}}>When you use <a className="hyperlink-text" href="." style={{color: this.state.currentColorSet.hyperlinkText}}
             onClick={(e) => {e.preventDefault();}}>hyperlinks</a> you will want to customise them because your background colour might be too dark for the defult blue, make sure they are still underlined and that
            the colour you choose to show when the link has been visited is also easy to distinguish against the background, e.g., <a className="hyperlink-text-visited" href="." style={{color: this.state.currentColorSet.visitedHyperlinkText}}
             onClick={(e) => {e.preventDefault();}}>hyperlinks</a>
            </p>
          </div>
          <footer style={{backgroundColor: this.state.currentColorSet.footerBack}}>
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
    backgroundCVDs: state.backgroundCVDs
  });
}
export default connect(mapStateToProps)(ExamplePage);
