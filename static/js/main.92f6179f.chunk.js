(this["webpackJsonpace-v2"]=this["webpackJsonpace-v2"]||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/lut_protan_medium.664cd3ad.png"},112:function(e,t,a){e.exports=a.p+"static/media/lut_deutan_medium.9f24ed56.png"},113:function(e,t,a){e.exports=a.p+"static/media/lut_tritan_medium.4ab95073.png"},114:function(e,t,a){e.exports=a.p+"static/media/ColorCube-intro.3c38e603.png"},115:function(e,t,a){e.exports=a(291)},120:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var r=a(34),o=a(2),n=a(0),l=a.n(n),c=a(46),s=a.n(c),d=(a(120),a(49)),i=a(25),u=a(17),p=a(18),m=a(20),g=a(19),b=a(4),f=a(21),h=a(12),C=(a(125),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={mode:"regular",currentColorSet:{pageBodyText:"#000000",headerText:"#ffffff",hyperlinkText:"#0000ee",visitedHyperlinkText:"#551a8b",accentHeaderText:"#000000",buttonText:"#000000",accentButtonText:"#ffffff",pageBack:"#ffffff",headerBack:"#000000",accentHeaderBack:"#aaaaaa",buttonBack:"#aaaaaa",accentButtonBack:"#000000"},regularColorSet:{},protanColorSet:{},deutanColorSet:{},tritanColorSet:{},displayAccentHeader:!1,displayButton:!1,displayAccentButton:!1},a.resetMode=a.resetMode.bind(Object(b.a)(a)),a.handleModeSwitch=a.handleModeSwitch.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"resetMode",value:function(){this.container.classList.remove("grayscale");var e=document.getElementsByClassName("option-btn");Array.from(e).forEach((function(e){console.log(e.classList),e.classList.remove("current-selection")})),console.log("QAQ")}},{key:"handleModeSwitch",value:function(e){var t=e.target.value;console.log(e.target.classList),this.resetMode(),e.target.classList.add("current-selection"),console.log("YO"),"regular"===t?this.setState({currentColorSet:Object(o.a)({},this.state.regularColorSet),mode:"regular"}):"protan"===t?this.setState({currentColorSet:Object(o.a)({},this.state.protanColorSet),mode:"protan"}):"deutan"===t?this.setState({currentColorSet:Object(o.a)({},this.state.deutanColorSet),mode:"deutan"}):"tritan"===t?this.setState({currentColorSet:Object(o.a)({},this.state.tritanColorSet),mode:"tritan"}):"grayscale"===t&&this.container.classList.add("grayscale")}},{key:"componentDidUpdate",value:function(e,t){console.log("Example Update")}},{key:"componentDidMount",value:function(){console.log("Example Mount");var e=window.getComputedStyle(document.getElementsByClassName("example-page-wrapper")[0]).getPropertyValue("width");(e=parseInt(e))>1e3&&alert("Sorry, the full-size example page is still under construction.")}},{key:"render",value:function(){var e=this,t={color:this.state.currentColorSet.pageBodyText},a={color:this.state.currentColorSet.hyperlinkText},r={color:this.state.currentColorSet.visitedHyperlinkText},o={color:this.state.currentColorSet.headerText,backgroundColor:this.state.currentColorSet.headerBack},n={color:this.state.currentColorSet.accentHeaderText,backgroundColor:this.state.currentColorSet.accentHeaderBack},c={color:this.state.currentColorSet.buttonText,backgroundColor:this.state.currentColorSet.buttonBack,borderColor:this.state.currentColorSet.buttonBack},s={color:this.state.currentColorSet.accentButtonText,backgroundColor:this.state.currentColorSet.accentButtonBack,borderColor:this.state.currentColorSet.accentButtonBack},i=l.a.createElement("button",{className:"btn-normal",style:c},"Button"),u=l.a.createElement("button",{className:"btn-accent",style:s},"Accent Button");return l.a.createElement("div",{className:"example-page-wrapper"},l.a.createElement("nav",{className:"simulation-options"},l.a.createElement("button",{className:"option-btn current-selection",onClick:this.handleModeSwitch,value:"regular"},"Typical Vision"),l.a.createElement("button",{className:"option-btn",onClick:this.handleModeSwitch,value:"protan"},"Red Colorblind ",l.a.createElement("span",{className:"technical-term"},"Protan")),l.a.createElement("button",{className:"option-btn",onClick:this.handleModeSwitch,value:"deutan"},"Green Colorblind ",l.a.createElement("span",{className:"technical-term"},"Deutan")),l.a.createElement("button",{className:"option-btn",onClick:this.handleModeSwitch,value:"tritan"},"Blue Colorblind ",l.a.createElement("span",{className:"technical-term"},"Tritan")),l.a.createElement("button",{className:"option-btn",onClick:this.handleModeSwitch,value:"grayscale"},"Grayscale"),l.a.createElement("button",{className:"new-tab-btn"},l.a.createElement(d.b,{to:"/example",target:"_blank"},"NewTab"))),l.a.createElement("div",{className:"example-container",ref:function(t){return e.container=t}},l.a.createElement("header",{className:"example-header",ref:function(t){return e.header=t},style:o},l.a.createElement("h1",{className:"example-title"},"Example Page"),l.a.createElement("nav",null,l.a.createElement("li",{className:"example-menu"},"Menu"),l.a.createElement("li",{className:"example-menu",style:this.state.displayAccentHeader?n:{}},this.state.displayAccentHeader?"Accent":"Menu"))),l.a.createElement("div",{className:"example-body-container",ref:function(t){return e.body=t},style:{backgroundColor:this.state.currentColorSet.pageBack}},l.a.createElement("p",{className:"text-large body-text-1",style:t},"Large Text (18pt / 24px normal)"),l.a.createElement("p",{className:"text-large body-text-1",style:t},l.a.createElement("span",{className:"bold"},"Large Text (14pt / 18.66px bold)")),l.a.createElement("p",{className:"text-normal body-text-1",style:t},"Normal Text (14pt / 18.66px normal)"),l.a.createElement("p",null,l.a.createElement("a",{className:"hyperlink-text",href:".",style:a,onClick:function(e){e.preventDefault()}},"Hyperlink")),l.a.createElement("p",null,l.a.createElement("a",{className:"hyperlink-text-visited",href:".",style:r,onClick:function(e){e.preventDefault()}},"Accent Hyperlink")),this.state.displayButton?i:null,this.state.displayAccentButton?u:null),l.a.createElement("footer",{style:{backgroundColor:this.state.currentColorSet.headerBack},ref:function(t){return e.footer=t}},"This is a footer.",l.a.createElement("br",null),"Copyrights, other info.")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){console.log("Example: getDerivedStateFromProps");var a=null,r={regularColorSet:{pageBodyText:e.foregroundColors[0].color,headerText:e.foregroundColors[1].color,hyperlinkText:e.foregroundColors[2].color,visitedHyperlinkText:e.foregroundColors[3].color,accentHeaderText:e.foregroundColors[4].color,buttonText:e.foregroundColors[5].color,accentButtonText:e.foregroundColors[6].color,pageBack:e.backgroundColors[0].color,headerBack:e.backgroundColors[1].color,accentHeaderBack:e.backgroundColors[2].color,buttonBack:e.backgroundColors[3].color,accentButtonBack:e.backgroundColors[4].color}},n={protanColorSet:{pageBodyText:e.foregroundCVDs[0].protan,headerText:e.foregroundCVDs[1].protan,hyperlinkText:e.foregroundCVDs[2].protan,visitedHyperlinkText:e.foregroundCVDs[3].protan,accentHeaderText:e.foregroundCVDs[4].protan,buttonText:e.foregroundCVDs[5].protan,accentButtonText:e.foregroundCVDs[6].protan,pageBack:e.backgroundCVDs[0].protan,headerBack:e.backgroundCVDs[1].protan,accentHeaderBack:e.backgroundCVDs[2].protan,buttonBack:e.backgroundCVDs[3].protan,accentButtonBack:e.backgroundCVDs[4].protan},deutanColorSet:{pageBodyText:e.foregroundCVDs[0].deutan,headerText:e.foregroundCVDs[1].deutan,hyperlinkText:e.foregroundCVDs[2].deutan,visitedHyperlinkText:e.foregroundCVDs[3].deutan,accentHeaderText:e.foregroundCVDs[4].deutan,buttonText:e.foregroundCVDs[5].deutan,accentButtonText:e.foregroundCVDs[6].deutan,pageBack:e.backgroundCVDs[0].deutan,headerBack:e.backgroundCVDs[1].deutan,accentHeaderBack:e.backgroundCVDs[2].deutan,buttonBack:e.backgroundCVDs[3].deutan,accentButtonBack:e.backgroundCVDs[4].deutan},tritanColorSet:{pageBodyText:e.foregroundCVDs[0].tritan,headerText:e.foregroundCVDs[1].tritan,hyperlinkText:e.foregroundCVDs[2].tritan,visitedHyperlinkText:e.foregroundCVDs[3].tritan,accentHeaderText:e.foregroundCVDs[4].tritan,buttonText:e.foregroundCVDs[5].tritan,accentButtonText:e.foregroundCVDs[6].tritan,pageBack:e.backgroundCVDs[0].tritan,headerBack:e.backgroundCVDs[1].tritan,accentHeaderBack:e.backgroundCVDs[2].tritan,buttonBack:e.backgroundCVDs[3].tritan,accentButtonBack:e.backgroundCVDs[4].tritan}},l={};l="regular"===t.mode?{currentColorSet:Object(o.a)({},r.regularColorSet)}:"protan"===t.mode?{currentColorSet:Object(o.a)({},n.protanColorSet)}:"deutan"===t.mode?{currentColorSet:Object(o.a)({},n.deutanColorSet)}:{currentColorSet:Object(o.a)({},n.tritanColorSet)};for(var c in a=/^rgb/.test(e.foregroundCVDs[0].protan)?Object(o.a)({},r,{},l,{},n):Object(o.a)({},r,{},l),e.elementDisplay)switch(e.elementDisplay[c].name){case"accent-header":a=Object(o.a)({},a,{displayAccentHeader:e.elementDisplay[c].display});break;case"regular-button":a=Object(o.a)({},a,{displayButton:e.elementDisplay[c].display});break;case"accent-button":a=Object(o.a)({},a,{displayAccentButton:e.elementDisplay[c].display})}return a}}]),t}(l.a.Component));var k=Object(h.b)((function(e){return{foregroundNumber:e.foregroundNumber,backgroundNumber:e.backgroundNumber,foregroundColors:e.foregroundColors,backgroundColors:e.backgroundColors,foregroundCVDs:e.foregroundCVDs,backgroundCVDs:e.backgroundCVDs,elementDisplay:e.elementDisplay}}))(C),v=(a(127),a(110)),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={pickerColor:"#ff00ff"},a.simulateCVD=a.simulateCVD.bind(Object(b.a)(a)),a.updateColor=a.updateColor.bind(Object(b.a)(a)),a.handleColorPickerChange=a.handleColorPickerChange.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"hexToRGB",value:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}},{key:"simulateCVD",value:function(e){e=this.hexToRGB(e),console.log(e);var t=0;t|=e.b,t|=e.g<<8;var a,r,o,n,l,c,s,d=4*(t|=e.r<<16);l="rgb("+(r=(a=this.props.canvasProtan)[d])+", "+(o=a[d+1])+", "+(n=a[d+2])+")",c="rgb("+(r=(a=this.props.canvasDeutan)[d])+", "+(o=a[d+1])+", "+(n=a[d+2])+")",s="rgb("+(r=(a=this.props.canvasTritan)[d])+", "+(o=a[d+1])+", "+(n=a[d+2])+")",null!=r&&null!=o&&null!=n&&("foreground"===this.props.selectedColorCube.type?this.props.dispatch({type:"UPDATE_FOREGROUND_CVD",index:this.props.selectedColorCube.index,cvdColors:{protan:l,deutan:c,tritan:s}}):this.props.dispatch({type:"UPDATE_BACKGROUND_CVD",index:this.props.selectedColorCube.index,cvdColors:{protan:l,deutan:c,tritan:s}})),console.log(7)}},{key:"updateColor",value:function(e){"foreground"===this.props.selectedColorCube.type?this.props.dispatch({type:"EDIT_FOREGROUND_COLOR",newColor:e,index:this.props.selectedColorCube.index}):this.props.dispatch({type:"EDIT_BACKGROUND_COLOR",newColor:e,index:this.props.selectedColorCube.index}),this.simulateCVD(e)}},{key:"handleColorPickerChange",value:function(e,t){this.setState({pickerColor:e.hex},(function(){console.log("change")})),this.updateColor(e.hex)}},{key:"componentDidUpdate",value:function(e){console.log("ColorPicker update")}},{key:"componentDidMount",value:function(){console.log("Mount"),"foreground"===this.props.selectedColorCube.type?this.setState({pickerColor:this.props.foregroundColors[this.props.selectedColorCube.index].color}):this.setState({pickerColor:this.props.backgroundColors[this.props.selectedColorCube.index].color})}},{key:"render",value:function(){return l.a.createElement("div",{className:"color-picker-wrapper",id:this.props.pickerId},l.a.createElement(v.SketchPicker,{disableAlpha:!0,presetColors:[],color:this.state.pickerColor,onChange:this.handleColorPickerChange}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=null;return a="foreground"===e.selectedColorCube.type?Object(o.a)({},a,{pickerColor:e.foregroundColors[e.selectedColorCube.index].color}):Object(o.a)({},a,{pickerColor:e.backgroundColors[e.selectedColorCube.index].color})}}]),t}(l.a.Component);var y=Object(h.b)((function(e){return{foregroundColors:e.foregroundColors,backgroundColors:e.backgroundColors,selectedColorCube:e.selectedColorCube}}))(E),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={display:"display",colorType:"",colorName:"",displayColorName:"text color",colorCode:"#ffffff",proColor:"#ffffff",deuColor:"#ffffff",triColor:"#ffffff",isSelected:!1},a.convertRGBToHex=a.convertRGBToHex.bind(Object(b.a)(a)),a.handleClickCube=a.handleClickCube.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"convertRGBToHex",value:function(e){var t=Number(e).toString(16);return t.length<2&&(t="0"+t),t}},{key:"handleClickCube",value:function(){this.props.dispatch({type:"UPDATE_SELECTED_COLOR_CUBE",newType:this.props.colorType,newIndex:this.props.colorNo})}},{key:"componentDidUpdate",value:function(e){}},{key:"componentDidMount",value:function(){"foreground"===this.props.colorType?this.setState({colorType:"foreground-color",displayColorName:this.props.foregroundColors[this.props.colorNo].colorName}):this.setState({colorType:"background-color",displayColorName:this.props.backgroundColors[this.props.colorNo].colorName})}},{key:"render",value:function(){var e=this,t=this.state.colorType+" "+this.state.display+" "+(this.state.isSelected?"selected-color":"");return l.a.createElement("div",{className:t,onClick:this.handleClickCube},l.a.createElement("span",{className:"color-name"},this.state.displayColorName),l.a.createElement("div",{className:"main-color",style:{backgroundColor:this.state.colorCode},ref:function(t){return e.mainColor=t}},l.a.createElement("div",{className:"cvd-simulation-color-row"},l.a.createElement("div",{className:"cvd-pro",style:{backgroundColor:this.state.proColor}}),l.a.createElement("div",{className:"cvd-deu",style:{backgroundColor:this.state.deuColor}}),l.a.createElement("div",{className:"cvd-tri",style:{backgroundColor:this.state.triColor}}))),l.a.createElement("span",{className:"color-code"},this.state.colorCode))}}],[{key:"shouldDisplay",value:function(e,t,a){var r=!0;return"foreground"===e&&t>=4?a.forEach((function(e){e.foreIndex===t&&(r=e.display)})):"background"===e&&t>=2?a.forEach((function(e){e.backIndex===t&&(r=e.display)})):r=!0,r}},{key:"getDerivedStateFromProps",value:function(e,a){var r=null;return t.shouldDisplay(e.colorType,e.colorNo,e.elementDisplay)?(r=Object(o.a)({},r,{display:"display"}),r="foreground"===e.colorType?Object(o.a)({},r,{colorCode:e.foregroundColors[e.colorNo].color,proColor:e.foregroundCVDs[e.colorNo].protan,deuColor:e.foregroundCVDs[e.colorNo].deutan,triColor:e.foregroundCVDs[e.colorNo].tritan}):Object(o.a)({},r,{colorCode:e.backgroundColors[e.colorNo].color,proColor:e.backgroundCVDs[e.colorNo].protan,deuColor:e.backgroundCVDs[e.colorNo].deutan,triColor:e.backgroundCVDs[e.colorNo].tritan}),r=e.selectedColorCube.type===e.colorType&&e.selectedColorCube.index===e.colorNo?Object(o.a)({},r,{isSelected:!0}):Object(o.a)({},r,{isSelected:!1})):r=Object(o.a)({},r,{display:"hidden"})}}]),t}(l.a.Component);var x=Object(h.b)((function(e){return{foregroundColors:e.foregroundColors,backgroundColors:e.backgroundColors,foregroundCVDs:e.foregroundCVDs,backgroundCVDs:e.backgroundCVDs,selectedColorCube:e.selectedColorCube,elementDisplay:e.elementDisplay}}))(N),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={display:"display",contrast:1,pass:!0,passCheck:"pass"},a.displayContrastRatio=a.displayContrastRatio.bind(Object(b.a)(a)),a.convertHextoRGB=a.convertHextoRGB.bind(Object(b.a)(a)),a.checkWCAG=a.checkWCAG.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"checkWCAG",value:function(e){"AAA"===this.props.wcag?e>=7?this.setState({passCheck:"pass"}):e<7&&e>=4.5?this.setState({passCheck:"half"}):this.setState({passCheck:"fail"}):e>=4.5?this.setState({passCheck:"pass"}):e<4.5&&e>=3?this.setState({passCheck:"half"}):this.setState({passCheck:"fail"})}},{key:"displayContrastRatio",value:function(e,t){var a=this.calculateLuminance(this.convertHextoRGB(e)),r=this.calculateLuminance(this.convertHextoRGB(t)),o=0;o=a>r?((a+.05)/(r+.05)).toFixed(2):((r+.05)/(a+.05)).toFixed(2),this.setState({contrast:o})}},{key:"calculateLuminance",value:function(e){var t=e.map((function(e,t){var a=e/255;return a<=.03928?a/=12.92:a=Math.pow((a+.055)/1.055,2.4),a}));return.2126*t[0]+.7152*t[1]+.0722*t[2]}},{key:"convertHextoRGB",value:function(e){return[parseInt(e.substring(1,3),16),parseInt(e.substring(3,5),16),parseInt(e.substring(5),16)]}},{key:"componentDidUpdate",value:function(){this.displayContrastRatio(this.props.foregroundColors[this.props.foregroundId].color,this.props.backgroundColors[this.props.backgroundId].color),this.checkWCAG(this.state.contrast)}},{key:"componentDidMount",value:function(){this.displayContrastRatio(this.props.foregroundColors[this.props.foregroundId].color,this.props.backgroundColors[this.props.backgroundId].color)}},{key:"render",value:function(){return l.a.createElement("div",{className:"result-cube "+this.state.display+" "+this.state.passCheck},l.a.createElement("div",{className:"result-content",style:{color:this.props.foregroundColors[this.props.foregroundId].color,backgroundColor:this.props.backgroundColors[this.props.backgroundId].color}},l.a.createElement("div",{className:"wcag-check"},this.state.passCheck),l.a.createElement("div",{className:"contrast-ratio"},this.state.contrast)))}}],[{key:"shouldDisplay",value:function(e,t,a){var r=!0;return e<4&&t<2?r=!0:e>=4&&t<2?a.forEach((function(t){t.foreIndex===e&&(r=t.display)})):e<4&&t>=2?a.forEach((function(e){e.backIndex===t&&(r=e.display)})):(r=!1,a.forEach((function(t){t.foreIndex===e&&(r=t.display)})),r&&a.forEach((function(e){e.backIndex===t&&(r=e.display)}))),r}},{key:"getDerivedStateFromProps",value:function(e,a){return t.shouldDisplay(e.foregroundId,e.backgroundId,e.elementDisplay)?{display:"display"}:{display:"hidden"}}}]),t}(l.a.PureComponent);var O=Object(h.b)((function(e){return{foregroundNumber:e.foregroundNumber,backgroundNumber:e.backgroundNumber,foregroundColors:e.foregroundColors,backgroundColors:e.backgroundColors,wcag:e.wcag,elementDisplay:e.elementDisplay}}))(D),w=a(111),S=a.n(w),T=a(112),I=a.n(T),j=a(113),B=a.n(j),V=a(114),A=a.n(V),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={fullScreen:!1,isHelpOpen:!1,hasCVD:!0,canvasProtan:[],canvasDeutan:[],canvasTritan:[],colorNum:8},a.handlePaletteScroll=a.handlePaletteScroll.bind(Object(b.a)(a)),a.storeSimulationData=a.storeSimulationData.bind(Object(b.a)(a)),a.createColorPaletteObj=a.createColorPaletteObj.bind(Object(b.a)(a)),a.handleHelp=a.handleHelp.bind(Object(b.a)(a)),a.handleElementDisplay=a.handleElementDisplay.bind(Object(b.a)(a)),a.handleTextSize=a.handleTextSize.bind(Object(b.a)(a)),a.handleWCAG=a.handleWCAG.bind(Object(b.a)(a)),a.handleCVD=a.handleCVD.bind(Object(b.a)(a)),a.handleClickToggle=a.handleClickToggle.bind(Object(b.a)(a)),a.colorPicker=l.a.createRef(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"handlePaletteScroll",value:function(e){console.log(e.target.scrollTop);var t=e.target.scrollTop;t>=120?(this.paletteOptionsContainer.style.height="80px",this.paletteOptionsContainer.style.boxShadow="-1px 2px 3px 2px rgba(0, 0, 0, .25)",document.querySelector("#main-color-picker").style.opacity="0",document.querySelector(".floating-color-picker-container").style.display="block"):t<80&&(this.paletteOptionsContainer.style.height="auto",this.paletteOptionsContainer.style.boxShadow="none",document.querySelector("#main-color-picker").style.opacity="1",document.querySelector(".floating-color-picker-container").style.display="none")}},{key:"createColorPaletteObj",value:function(e,t){var a=this,r=new Image;r.src=t,r.onload=function(t){a.storeSimulationData(e,r)}}},{key:"storeSimulationData",value:function(e,t){var a=document.getElementById("canvasProtan").getContext("2d");a.drawImage(t,0,0);var r=a.getImageData(0,0,4096,4096).data;"pro"===e?this.setState({canvasProtan:r}):"deu"===e?this.setState({canvasDeutan:r}):this.setState({canvasTritan:r})}},{key:"handleHelp",value:function(){this.setState({isHelpOpen:!this.state.isHelpOpen})}},{key:"handleElementDisplay",value:function(e){console.log(e.target.checked),this.props.dispatch({type:"UPDATE_ELEMENT_DISPLAY",name:e.target.value,display:e.target.checked})}},{key:"handleTextSize",value:function(e){console.log(e.target.value)}},{key:"handleWCAG",value:function(e){var t=e.target.checked;this.props.dispatch({type:"UPDATE_WCAG_CHECK",standard:t?"3A":"2A"})}},{key:"handleCVD",value:function(e){var t=e.target.checked,a=document.getElementsByClassName("cvd-simulation-color-row");t?this.setState({hasCVD:!0},(function(){[].forEach.call(a,(function(e){e.classList.remove("noCVD")}))})):this.setState({hasCVD:!1},(function(){[].forEach.call(a,(function(e){e.classList.add("noCVD")}))}))}},{key:"handleClickToggle",value:function(){this.state.fullScreen?this.setState({fullScreen:!1},(function(){document.querySelector(".palette-container").classList.remove("full-screen"),document.querySelector(".example-page-container").style.display="block"})):this.setState({fullScreen:!0},(function(){document.querySelector(".palette-container").classList.add("full-screen"),document.querySelector(".example-page-container").style.display="none"}))}},{key:"componentDidUpdate",value:function(e){}},{key:"componentDidMount",value:function(){this.createColorPaletteObj("pro",S.a),this.createColorPaletteObj("deu",I.a),this.createColorPaletteObj("tri",B.a)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"palette-wrapper",ref:function(t){return e.paletteWrapper=t}},l.a.createElement("div",{className:"palette-content-wrapper",onScroll:this.handlePaletteScroll},l.a.createElement("div",{className:"palette-options-container",ref:function(t){return e.paletteOptionsContainer=t}},l.a.createElement(y,{pickerId:"main-color-picker",canvasProtan:this.state.canvasProtan,canvasDeutan:this.state.canvasDeutan,canvasTritan:this.state.canvasTritan}),l.a.createElement("div",{className:"palette-function-settings"},l.a.createElement("div",{className:"cvd-options palette-options"},l.a.createElement("span",{className:"option-name"},"CVD Simulation: "),l.a.createElement("div",{className:"cvd-inputs option-inputs"},l.a.createElement("span",{className:"toggle-text-label"},"Off"),l.a.createElement("label",{className:"toggle-switch"},l.a.createElement("input",{type:"checkbox",name:"cvd",value:"cvd-true",onChange:this.handleCVD,defaultChecked:!0}),l.a.createElement("span",{className:"slider"})),l.a.createElement("span",{className:"toggle-text-label"},"On"))),l.a.createElement("div",{className:"wcag-options palette-options"},l.a.createElement("span",{className:"option-name"},"WCAG Contrast Ratio: "),l.a.createElement("div",{className:"wcag-inputs option-inputs"},l.a.createElement("span",{className:"toggle-text-label"},"AA"),l.a.createElement("label",{className:"toggle-switch"},l.a.createElement("input",{type:"checkbox",name:"wcag",value:"3A",onChange:this.handleWCAG,defaultChecked:!0}),l.a.createElement("span",{className:"slider"})),l.a.createElement("span",{className:"toggle-text-label"},"AAA"))),l.a.createElement("div",{className:"wcag-options palette-options"},l.a.createElement("span",{className:"option-name"},"WCAG Text Size"),l.a.createElement("div",{className:"wcag-inputs option-inputs"},l.a.createElement("span",{className:"toggle-text-label"},"Normal"),l.a.createElement("label",{className:"toggle-switch"},l.a.createElement("input",{type:"checkbox",name:"textSize",value:"large",onChange:this.handleTextSize,defaultChecked:!0}),l.a.createElement("span",{className:"slider"})),l.a.createElement("span",{className:"toggle-text-label"},"Large"))),l.a.createElement("div",{className:"element-options palette-options"},l.a.createElement("span",{className:"option-name"},"Elements"),l.a.createElement("div",{className:"element-inputs option-inputs"},l.a.createElement("input",{id:"accent-header",className:"button-switch",type:"checkbox",name:"element",value:"accent-header",onChange:this.handleElementDisplay}),l.a.createElement("label",{htmlFor:"accent-header",className:"button-switch"},"Accent Header"),l.a.createElement("input",{id:"regular-button",className:"button-switch",type:"checkbox",name:"element",value:"regular-button",onChange:this.handleElementDisplay}),l.a.createElement("label",{htmlFor:"regular-button",className:"button-switch"},"Button"),l.a.createElement("input",{id:"accent-button",className:"button-switch",type:"checkbox",name:"element",value:"accent-button",onChange:this.handleElementDisplay}),l.a.createElement("label",{htmlFor:"accent-button",className:"button-switch"},"Accent Button")))),l.a.createElement("div",{className:"help"},l.a.createElement("button",{className:"help-switch "+(this.state.isHelpOpen?"isOpen":"isHidden"),onClick:this.handleHelp},"Help"),l.a.createElement("div",{className:"help-wrapper "+(this.state.isHelpOpen?"visible":"hidden")},l.a.createElement("div",{className:"help-container"},l.a.createElement("img",{className:"color-cube-intro-img",src:A.a,alt:"Introduction to color cube parts."}),l.a.createElement("p",null,"Sorry, Help is still under construction. More details will be provided in the future."))))),l.a.createElement("div",{className:"floating-color-picker-container"},l.a.createElement(y,{pickerId:"floating-color-picker",canvasProtan:this.state.canvasProtan,canvasDeutan:this.state.canvasDeutan,canvasTritan:this.state.canvasTritan})),l.a.createElement("div",{className:"palette"},l.a.createElement("div",{className:"color-row"},l.a.createElement("div",{className:"color-placeholder"},"QAQ"),l.a.createElement("div",{className:"foreground-color-wrapper"},l.a.createElement(x,{colorType:"foreground",colorNo:0})),l.a.createElement("div",{className:"foreground-color-wrapper"},l.a.createElement(x,{colorType:"foreground",colorNo:1})),l.a.createElement("div",{className:"foreground-color-wrapper"},l.a.createElement(x,{colorType:"foreground",colorNo:2})),l.a.createElement("div",{className:"foreground-color-wrapper"},l.a.createElement(x,{colorType:"foreground",colorNo:3})),l.a.createElement("div",{className:"foreground-color-wrapper"},l.a.createElement(x,{colorType:"foreground",colorNo:4})),l.a.createElement("div",{className:"foreground-color-wrapper"},l.a.createElement(x,{colorType:"foreground",colorNo:5})),l.a.createElement("div",{className:"foreground-color-wrapper"},l.a.createElement(x,{colorType:"foreground",colorNo:6}))),l.a.createElement("div",{className:"color-row"},l.a.createElement("div",{className:"background-color-wrapper"},l.a.createElement(x,{colorType:"background",colorNo:0})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:0,backgroundId:0})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:1,backgroundId:0})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:2,backgroundId:0})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:3,backgroundId:0})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:4,backgroundId:0})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:5,backgroundId:0})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:6,backgroundId:0}))),l.a.createElement("div",{className:"color-row"},l.a.createElement("div",{className:"background-color-wrapper"},l.a.createElement(x,{colorType:"background",colorNo:1})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:0,backgroundId:1})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:1,backgroundId:1})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:2,backgroundId:1})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:3,backgroundId:1})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:4,backgroundId:1})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:5,backgroundId:1})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:6,backgroundId:1}))),l.a.createElement("div",{className:"color-row"},l.a.createElement("div",{className:"background-color-wrapper"},l.a.createElement(x,{colorType:"background",colorNo:2})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:0,backgroundId:2})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:1,backgroundId:2})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:2,backgroundId:2})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:3,backgroundId:2})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:4,backgroundId:2})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:5,backgroundId:2})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:6,backgroundId:2}))),l.a.createElement("div",{className:"color-row"},l.a.createElement("div",{className:"background-color-wrapper"},l.a.createElement(x,{colorType:"background",colorNo:3})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:0,backgroundId:3})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:1,backgroundId:3})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:2,backgroundId:3})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:3,backgroundId:3})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:4,backgroundId:3})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:5,backgroundId:3})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:6,backgroundId:3}))),l.a.createElement("div",{className:"color-row"},l.a.createElement("div",{className:"background-color-wrapper"},l.a.createElement(x,{colorType:"background",colorNo:4})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:0,backgroundId:4})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:1,backgroundId:4})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:2,backgroundId:4})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:3,backgroundId:4})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:4,backgroundId:4})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:5,backgroundId:4})),l.a.createElement("div",{className:"result-wrapper"},l.a.createElement(O,{foregroundId:6,backgroundId:4}))))),l.a.createElement("div",{className:"palette-border"},l.a.createElement("div",{className:"toggle-wrapper",onClick:this.handleClickToggle},l.a.createElement("button",{className:"example-page-toggle"},this.state.fullScreen?"Open":"Collapse"))),l.a.createElement("div",{id:"hidden-canvas-area"},l.a.createElement("canvas",{id:"canvasProtan",ref:function(t){return e.canvasProtan=t},width:"4096",height:"4096"},"Please use a browser that supports HTML5 Canvas"),l.a.createElement("canvas",{id:"canvasDeutan",ref:function(t){return e.canvasDeutan=t},width:"4096",height:"4096"},"Please use a browser that supports HTML5 Canvas"),l.a.createElement("canvas",{id:"canvasTritan",ref:function(t){return e.canvasTritan=t},width:"4096",height:"4096"},"Please use a browser that supports HTML5 Canvas")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null}}]),t}(l.a.Component);var H=Object(h.b)((function(e){return{foregroundColors:e.foregroundColors,backgroundColors:e.backgroundColors,wcag:e.wcag,selectedColorCube:e.selectedColorCube}}))(P);var R=function(){return l.a.createElement("div",{className:"main"},l.a.createElement("header",{className:"main-header"},l.a.createElement("h1",null,"ACE 2.0: Accessible Color Evaluator")),l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"palette-container"},l.a.createElement(H,null)),l.a.createElement("div",{className:"example-page-container"},l.a.createElement(k,null))))},_=function(){return l.a.createElement(d.a,{basename:"/ace-v2"},l.a.createElement("div",{className:"router"},l.a.createElement(i.a,{exact:!0,path:"/",component:R}),l.a.createElement(i.a,{exact:!0,path:"/main",component:R}),l.a.createElement(i.a,{path:"/example",component:k}),l.a.createElement(i.a,{path:"/example-page",component:k})))};a(290);var G=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(48),M={wcag2a:!1,wcag3a:!0,wcag:"AAA",foregroundNumber:7,backgroundNumber:5,foregroundColors:[{index:0,color:"#000000",colorName:"Page body text"},{index:1,color:"#ffffff",colorName:"Header/Footer text"},{index:2,color:"#0000ee",colorName:"Hyperlink text"},{index:3,color:"#551a8b",colorName:"Accent hyperlink text"},{index:4,color:"#000000",colorName:"Accent header text"},{index:5,color:"#000000",colorName:"Button Text"},{index:6,color:"#ffffff",colorName:"Accent button text"}],backgroundColors:[{index:0,color:"#ffffff",colorName:"Page body background"},{index:1,color:"#000000",colorName:"Header/footer background"},{index:2,color:"#aaaaaa",colorName:"Accent header background"},{index:3,color:"#aaaaaa",colorName:"Button background"},{index:4,color:"#000000",colorName:"Accent button background"}],foregroundCVDs:[{index:0,protan:"#000000",deutan:"#000000",tritan:"#000000"},{index:1,protan:"#ffffff",deutan:"#ffffff",tritan:"#ffffff"},{index:2,protan:"rgb(0, 51, 238)",deutan:"rgb(0, 73, 237)",tritan:"rgb(0, 86, 122)"},{index:3,protan:"rgb(0, 51, 139)",deutan:"rgb(24, 68, 138)",tritan:"rgb(74, 59, 61)"},{index:4,protan:"#000000",deutan:"#000000",tritan:"#000000"},{index:5,protan:"#000000",deutan:"#000000",tritan:"#000000"},{index:6,protan:"#ffffff",deutan:"#ffffff",tritan:"#ffffff"}],backgroundCVDs:[{index:0,protan:"#ffffff",deutan:"#ffffff",tritan:"#ffffff"},{index:1,protan:"#000000",deutan:"#000000",tritan:"#000000"},{index:2,protan:"#aaaaaa",deutan:"#aaaaaa",tritan:"#aaaaaa"},{index:3,protan:"#aaaaaa",deutan:"#aaaaaa",tritan:"#aaaaaa"},{index:4,protan:"#000000",deutan:"#000000",tritan:"#000000"}],selectedColorCube:{type:"foreground",index:0},elementDisplay:[{foreIndex:4,backIndex:2,name:"accent-header",display:!1},{foreIndex:5,backIndex:3,name:"regular-button",display:!1},{foreIndex:6,backIndex:4,name:"accent-button",display:!1}]};var U=Object(L.b)((function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,l=arguments.length>1?arguments[1]:void 0;switch(l.type){case"EDIT_FOREGROUND_NUMBER":return console.log(l.type),Object(o.a)({},n,{foregroundNumber:l.newNumber});case"EDIT_BACKGROUND_NUMBER":return console.log(l.type),Object(o.a)({},n,{backgroundNumber:l.newNumber});case"EDIT_FOREGROUND_COLOR":return console.log(l.type),(e=Object(r.a)(n.foregroundColors))[l.index].color=l.newColor,Object(o.a)({},n,{foregroundColors:e});case"EDIT_BACKGROUND_COLOR":return console.log(l.type),(e=Object(r.a)(n.backgroundColors))[l.index].color=l.newColor,Object(o.a)({},n,{backgroundColors:e});case"UPDATE_FOREGROUND_CVD":return console.log(l.type),(t=Object(r.a)(n.foregroundCVDs))[l.index].protan=l.cvdColors.protan,t[l.index].deutan=l.cvdColors.deutan,t[l.index].tritan=l.cvdColors.tritan,Object(o.a)({},n,{foregroundCVDs:t});case"UPDATE_BACKGROUND_CVD":return console.log(l.type),(t=Object(r.a)(n.backgroundCVDs))[l.index].protan=l.cvdColors.protan,t[l.index].deutan=l.cvdColors.deutan,t[l.index].tritan=l.cvdColors.tritan,Object(o.a)({},n,{backgroundCVDs:t});case"UPDATE_WCAG_CHECK":return console.log(l.type),console.log(l.standard),"2A"===l.standard?Object(o.a)({},n,{wcag:"AA"}):Object(o.a)({},n,{wcag:"AAA"});case"UPDATE_SELECTED_COLOR_CUBE":return console.log(l.type),(a=Object(o.a)({},n.selectedColorCube)).type=l.newType,a.index=l.newIndex,Object(o.a)({},n,{selectedColorCube:a});case"UPDATE_ELEMENT_DISPLAY":return console.log(l.type),console.log(l.name,l.display),a=n.elementDisplay.map((function(e){return e.name===l.name?Object(o.a)({},e,{display:l.display}):e})),Object(o.a)({},n,{elementDisplay:a});default:return n}}));s.a.render(l.a.createElement(h.a,{store:U},l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[115,1,2]]]);
//# sourceMappingURL=main.92f6179f.chunk.js.map