import React from 'react';
import './scss/example-page.scss';

class ExamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foregroundColor0: "",
      foregroundColor1: "",
      backgroundColor0: "",
      backgroundColor1: "",
    }
    this.localStorageUpdated = this.localStorageUpdated.bind(this);
  }
  localStorageUpdated(){
    console.log("LOCALSTORAGE UPDATED!");
    console.log(localStorage["foregroundColor0"]);
    console.log(localStorage["foregroundColor1"]);
    console.log(localStorage["foregroundColor2"]);
    console.log(localStorage["foregroundColor3"]);
    console.log(localStorage["backgroundColor0"]);
    console.log(localStorage["backgroundColor1"]);
    console.log(localStorage["backgroundColor2"]);
    // When local storage changes,
    this.setState({foreground0: localStorage["foregroundColor0"], foreground1: localStorage["foregroundColor1"],
    background0: localStorage["backgroundColor0"], background1: localStorage["backgroundColor1"]}, ()=>{
      document.getElementsByClassName("example-body-container")[0].style.backgroundColor = this.state.background0;
      document.getElementsByClassName("example-header")[0].style.backgroundColor = this.state.background1;

    });
    console.log("CHANGE!");
  }
  componentDidUpdate(){
    console.log("Example Update");
    // console.log(localStorage["foregroundColors"]);
    // console.log(localStorage["backgroundColors"]);
    // console.log(localStorage["backgroundColors"][0]);
    // document.getElementsByClassName("example-body-container")[0].style.backgroundColor = localStorage["backgroundColors"][0];
  }
  componentDidMount(){
    console.log("Example Mount");
    this.setState({foreground0: localStorage["foregroundColor0"], foreground1: localStorage["foregroundColor1"],
    background0: localStorage["backgroundColor0"], background1: localStorage["backgroundColor1"]}, ()=>{
      document.getElementsByClassName("example-body-container")[0].style.backgroundColor = this.state.background0;
      document.getElementsByClassName("example-header")[0].style.backgroundColor = this.state.background1;
    });
    window.addEventListener('storage', this.localStorageUpdated)


  }
  render(){
    return (
      <div className="example-page-wrapper">
        <nav className="simulation-options">
          <button>No CVD</button>
          <button>Protan</button>
          <button>Deuton</button>
          <button>Tritan</button>
          <button>Grayscale</button>
          <button>NewTab</button>
        </nav>

        <div className="example-container">
          <header className="example-header">
            <h1 className="example-title">Example Page</h1>
            <nav>
              <a href="." className="example-menu">Menu 1</a>
              <a href="." className="example-menu">Menu 2</a>
              <a href="." className="example-menu">Menu 3</a>
            </nav>
          </header>
          <div className="example-body-container">
            <p className="text-18pt">
              This is 18 point text and it is considered large scale by WCAG 2.0. At the AA level it (or larger font sizes) can be used with a minimum contrast ratio 3:1 or greater to ensure it is legible by people with CVD or other vision impairments as well as people with typical colour vision. To achieve a pass at AAA enhanced contrast the contrast ratio would need to be at least 4.5:1
            </p>
            <p className="text-14pt">
              This text is 14 point and it is considered small text by WCAG 2.0 (less than 18 point). At the AA level this font size can be used with a minimum contrast
          ratio 4.5:1 or greater to ensure it is legible by people with CVD or other vision impairments as well as people
          with typical colour vision. To achieve a pass at AAA enhanced contrast the contrast ratio would need to be at least 7:1
            </p>
            <p>When you use <a href=".">hyperlinks</a> you will want to customise them because your background colour might be too dark for the defult blue, make sure they are still underlined and that
            the colour you choose to show when the link has been visited is also easy to distinguish against the background, e.g., <a href=".">hyperlinks</a>
            </p>
            <p className="text-18pt">
              This is 18 point text and it is considered large scale by WCAG 2.0. At the AA level it (or larger font sizes) can be used with a minimum contrast ratio 3:1 or greater to ensure it is legible by people with CVD or other vision impairments as well as people with typical colour vision. To achieve a pass at AAA enhanced contrast the contrast ratio would need to be at least 4.5:1
            </p>
            <p className="text-14pt">
              This text is 14 point and it is considered small text by WCAG 2.0 (less than 18 point). At the AA level this font size can be used with a minimum contrast
          ratio 4.5:1 or greater to ensure it is legible by people with CVD or other vision impairments as well as people
          with typical colour vision. To achieve a pass at AAA enhanced contrast the contrast ratio would need to be at least 7:1
            </p>
            <p>When you use <a href=".">hyperlinks</a> you will want to customise them because your background colour might be too dark for the defult blue, make sure they are still underlined and that
            the colour you choose to show when the link has been visited is also easy to distinguish against the background, e.g., <a href=".">hyperlinks</a>
            </p>
          </div>
          <footer>
            This is a footer.<br />
            Copyrights, other info.
          </footer>
        </div>

      </div>
    );
  }
}

export default ExamplePage;
