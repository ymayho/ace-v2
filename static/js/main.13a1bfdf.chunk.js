(this["webpackJsonpace-v2"]=this["webpackJsonpace-v2"]||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/lut_protan_medium.664cd3ad.png"},112:function(e,t,a){e.exports=a.p+"static/media/lut_deutan_medium.9f24ed56.png"},113:function(e,t,a){e.exports=a.p+"static/media/lut_tritan_medium.4ab95073.png"},114:function(e,t,a){e.exports=a.p+"static/media/ColorCube-intro.3c38e603.png"},115:function(e,t,a){e.exports=a(291)},120:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var r=a(34),o=a(2),n=a(0),c=a.n(n),l=a(46),s=a.n(l),i=(a(120),a(49)),d=a(25),u=a(17),p=a(18),m=a(20),g=a(19),b=a(4),f=a(21),h=a(12),C=(a(125),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={mode:"regular",currentColorSet:{pageBodyText:"#000000",headerText:"#ffffff",hyperlinkText:"#0000ee",visitedHyperlinkText:"#551a8b",accentHeaderText:"#000000",buttonText:"#000000",accentButtonText:"#ffffff",pageBack:"#ffffff",headerBack:"#000000",accentHeaderBack:"#aaaaaa",buttonBack:"#aaaaaa",accentButtonBack:"#000000"},regularColorSet:{},protanColorSet:{},deutanColorSet:{},tritanColorSet:{},displayAccentHeader:!1,displayButton:!1,displayAccentButton:!1},a.resetMode=a.resetMode.bind(Object(b.a)(a)),a.handleModeSwitch=a.handleModeSwitch.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"resetMode",value:function(){this.container.classList.remove("grayscale");var e=document.getElementsByClassName("option-btn");Array.from(e).forEach((function(e){console.log(e.classList),e.classList.remove("current-selection")})),console.log("QAQ")}},{key:"handleModeSwitch",value:function(e){var t=e.target.value;console.log(e.target.classList),this.resetMode(),e.target.classList.add("current-selection"),console.log("YO"),"regular"===t?this.setState({currentColorSet:Object(o.a)({},this.state.regularColorSet),mode:"regular"}):"protan"===t?this.setState({currentColorSet:Object(o.a)({},this.state.protanColorSet),mode:"protan"}):"deutan"===t?this.setState({currentColorSet:Object(o.a)({},this.state.deutanColorSet),mode:"deutan"}):"tritan"===t?this.setState({currentColorSet:Object(o.a)({},this.state.tritanColorSet),mode:"tritan"}):"grayscale"===t&&this.container.classList.add("grayscale")}},{key:"componentDidUpdate",value:function(e,t){console.log("Example Update")}},{key:"componentDidMount",value:function(){console.log("Example Mount");var e=window.getComputedStyle(document.getElementsByClassName("example-page-wrapper")[0]).getPropertyValue("width");(e=parseInt(e))>1e3&&alert("Sorry, the full-size example page is still under construction.")}},{key:"render",value:function(){var e=this,t={color:this.state.currentColorSet.pageBodyText},a={color:this.state.currentColorSet.hyperlinkText},r={color:this.state.currentColorSet.visitedHyperlinkText},o={color:this.state.currentColorSet.headerText,backgroundColor:this.state.currentColorSet.headerBack},n={color:this.state.currentColorSet.accentHeaderText,backgroundColor:this.state.currentColorSet.accentHeaderBack},l={color:this.state.currentColorSet.buttonText,backgroundColor:this.state.currentColorSet.buttonBack,borderColor:this.state.currentColorSet.buttonBack},s={color:this.state.currentColorSet.accentButtonText,backgroundColor:this.state.currentColorSet.accentButtonBack,borderColor:this.state.currentColorSet.accentButtonBack},d=c.a.createElement("button",{className:"btn-normal",style:l},"Button"),u=c.a.createElement("button",{className:"btn-accent",style:s},"Accent Button");return c.a.createElement("div",{className:"example-page-wrapper"},c.a.createElement("nav",{className:"simulation-options"},c.a.createElement("button",{className:"option-btn current-selection",onClick:this.handleModeSwitch,value:"regular"},"Typical Vision"),c.a.createElement("button",{className:"option-btn",onClick:this.handleModeSwitch,value:"protan"},"Red Colorblind ",c.a.createElement("span",{className:"technical-term"},"Protan")),c.a.createElement("button",{className:"option-btn",onClick:this.handleModeSwitch,value:"deutan"},"Green Colorblind ",c.a.createElement("span",{className:"technical-term"},"Deutan")),c.a.createElement("button",{className:"option-btn",onClick:this.handleModeSwitch,value:"tritan"},"Blue Colorblind ",c.a.createElement("span",{className:"technical-term"},"Tritan")),c.a.createElement("button",{className:"option-btn",onClick:this.handleModeSwitch,value:"grayscale"},"Grayscale"),c.a.createElement("button",{className:"new-tab-btn"},c.a.createElement(i.b,{to:"/example",target:"_blank"},"NewTab"))),c.a.createElement("div",{className:"example-container",ref:function(t){return e.container=t}},c.a.createElement("header",{className:"example-header",ref:function(t){return e.header=t},style:o},c.a.createElement("h1",{className:"example-title"},"Example Page"),c.a.createElement("nav",null,c.a.createElement("li",{className:"example-menu"},"Menu"),c.a.createElement("li",{className:"example-menu",style:this.state.displayAccentHeader?n:{}},this.state.displayAccentHeader?"Accent":"Menu"))),c.a.createElement("div",{className:"example-body-container",ref:function(t){return e.body=t},style:{backgroundColor:this.state.currentColorSet.pageBack}},c.a.createElement("p",{className:"text-large body-text-1",style:t},"Large Text (18pt / 24px normal)"),c.a.createElement("p",{className:"text-large body-text-1",style:t},c.a.createElement("span",{className:"bold"},"Large Text (14pt / 18.66px bold)")),c.a.createElement("p",{className:"text-normal body-text-1",style:t},"Normal Text (14pt / 18.66px normal)"),c.a.createElement("p",null,c.a.createElement("a",{className:"hyperlink-text",href:".",style:a,onClick:function(e){e.preventDefault()}},"Hyperlink")),c.a.createElement("p",null,c.a.createElement("a",{className:"hyperlink-text-visited",href:".",style:r,onClick:function(e){e.preventDefault()}},"Accent Hyperlink")),this.state.displayButton?d:null,this.state.displayAccentButton?u:null),c.a.createElement("footer",{style:{backgroundColor:this.state.currentColorSet.headerBack},ref:function(t){return e.footer=t}},"This is a footer.",c.a.createElement("br",null),"Copyrights, other info.")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){console.log("Example: getDerivedStateFromProps");var a=null,r={regularColorSet:{pageBodyText:e.foregroundColors[0].color,headerText:e.foregroundColors[1].color,hyperlinkText:e.foregroundColors[2].color,visitedHyperlinkText:e.foregroundColors[3].color,accentHeaderText:e.foregroundColors[4].color,buttonText:e.foregroundColors[5].color,accentButtonText:e.foregroundColors[6].color,pageBack:e.backgroundColors[0].color,headerBack:e.backgroundColors[1].color,accentHeaderBack:e.backgroundColors[2].color,buttonBack:e.backgroundColors[3].color,accentButtonBack:e.backgroundColors[4].color}},n={protanColorSet:{pageBodyText:e.foregroundCVDs[0].protan,headerText:e.foregroundCVDs[1].protan,hyperlinkText:e.foregroundCVDs[2].protan,visitedHyperlinkText:e.foregroundCVDs[3].protan,accentHeaderText:e.foregroundCVDs[4].protan,buttonText:e.foregroundCVDs[5].protan,accentButtonText:e.foregroundCVDs[6].protan,pageBack:e.backgroundCVDs[0].protan,headerBack:e.backgroundCVDs[1].protan,accentHeaderBack:e.backgroundCVDs[2].protan,buttonBack:e.backgroundCVDs[3].protan,accentButtonBack:e.backgroundCVDs[4].protan},deutanColorSet:{pageBodyText:e.foregroundCVDs[0].deutan,headerText:e.foregroundCVDs[1].deutan,hyperlinkText:e.foregroundCVDs[2].deutan,visitedHyperlinkText:e.foregroundCVDs[3].deutan,accentHeaderText:e.foregroundCVDs[4].deutan,buttonText:e.foregroundCVDs[5].deutan,accentButtonText:e.foregroundCVDs[6].deutan,pageBack:e.backgroundCVDs[0].deutan,headerBack:e.backgroundCVDs[1].deutan,accentHeaderBack:e.backgroundCVDs[2].deutan,buttonBack:e.backgroundCVDs[3].deutan,accentButtonBack:e.backgroundCVDs[4].deutan},tritanColorSet:{pageBodyText:e.foregroundCVDs[0].tritan,headerText:e.foregroundCVDs[1].tritan,hyperlinkText:e.foregroundCVDs[2].tritan,visitedHyperlinkText:e.foregroundCVDs[3].tritan,accentHeaderText:e.foregroundCVDs[4].tritan,buttonText:e.foregroundCVDs[5].tritan,accentButtonText:e.foregroundCVDs[6].tritan,pageBack:e.backgroundCVDs[0].tritan,headerBack:e.backgroundCVDs[1].tritan,accentHeaderBack:e.backgroundCVDs[2].tritan,buttonBack:e.backgroundCVDs[3].tritan,accentButtonBack:e.backgroundCVDs[4].tritan}},c={};c="regular"===t.mode?{currentColorSet:Object(o.a)({},r.regularColorSet)}:"protan"===t.mode?{currentColorSet:Object(o.a)({},n.protanColorSet)}:"deutan"===t.mode?{currentColorSet:Object(o.a)({},n.deutanColorSet)}:{currentColorSet:Object(o.a)({},n.tritanColorSet)};for(var l in a=/^rgb/.test(e.foregroundCVDs[0].protan)?Object(o.a)({},r,{},c,{},n):Object(o.a)({},r,{},c),e.elementDisplay)switch(e.elementDisplay[l].name){case"accent-header":a=Object(o.a)({},a,{displayAccentHeader:e.elementDisplay[l].display});break;case"regular-button":a=Object(o.a)({},a,{displayButton:e.elementDisplay[l].display});break;case"accent-button":a=Object(o.a)({},a,{displayAccentButton:e.elementDisplay[l].display})}return a}}]),t}(c.a.Component));var k=Object(h.b)((function(e){return{foregroundNumber:e.foregroundNumber,backgroundNumber:e.backgroundNumber,foregroundColors:e.foregroundColors,backgroundColors:e.backgroundColors,foregroundCVDs:e.foregroundCVDs,backgroundCVDs:e.backgroundCVDs,elementDisplay:e.elementDisplay}}))(C),E=(a(127),a(110)),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={pickerColor:"#ff00ff"},a.simulateCVD=a.simulateCVD.bind(Object(b.a)(a)),a.updateColor=a.updateColor.bind(Object(b.a)(a)),a.handleColorPickerChange=a.handleColorPickerChange.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"hexToRGB",value:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}},{key:"simulateCVD",value:function(e){e=this.hexToRGB(e),console.log(e);var t=0;t|=e.b,t|=e.g<<8;var a,r,o,n,c,l,s,i=4*(t|=e.r<<16);c="rgb("+(r=(a=this.props.canvasProtan)[i])+", "+(o=a[i+1])+", "+(n=a[i+2])+")",l="rgb("+(r=(a=this.props.canvasDeutan)[i])+", "+(o=a[i+1])+", "+(n=a[i+2])+")",s="rgb("+(r=(a=this.props.canvasTritan)[i])+", "+(o=a[i+1])+", "+(n=a[i+2])+")",null!=r&&null!=o&&null!=n&&("foreground"===this.props.selectedColorCube.type?this.props.dispatch({type:"UPDATE_FOREGROUND_CVD",index:this.props.selectedColorCube.index,cvdColors:{protan:c,deutan:l,tritan:s}}):this.props.dispatch({type:"UPDATE_BACKGROUND_CVD",index:this.props.selectedColorCube.index,cvdColors:{protan:c,deutan:l,tritan:s}})),console.log(7)}},{key:"updateColor",value:function(e){"foreground"===this.props.selectedColorCube.type?this.props.dispatch({type:"EDIT_FOREGROUND_COLOR",newColor:e,index:this.props.selectedColorCube.index}):this.props.dispatch({type:"EDIT_BACKGROUND_COLOR",newColor:e,index:this.props.selectedColorCube.index}),this.simulateCVD(e)}},{key:"handleColorPickerChange",value:function(e,t){this.setState({pickerColor:e.hex},(function(){console.log("change")})),this.updateColor(e.hex)}},{key:"componentDidUpdate",value:function(e){console.log("ColorPicker update")}},{key:"componentDidMount",value:function(){console.log("Mount"),"foreground"===this.props.selectedColorCube.type?this.setState({pickerColor:this.props.foregroundColors[this.props.selectedColorCube.index].color}):this.setState({pickerColor:this.props.backgroundColors[this.props.selectedColorCube.index].color})}},{key:"render",value:function(){return c.a.createElement("div",{className:"color-picker-wrapper",id:this.props.pickerId},c.a.createElement(E.SketchPicker,{disableAlpha:!0,presetColors:[],color:this.state.pickerColor,onChange:this.handleColorPickerChange}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=null;return a="foreground"===e.selectedColorCube.type?Object(o.a)({},a,{pickerColor:e.foregroundColors[e.selectedColorCube.index].color}):Object(o.a)({},a,{pickerColor:e.backgroundColors[e.selectedColorCube.index].color})}}]),t}(c.a.Component);var y=Object(h.b)((function(e){return{foregroundColors:e.foregroundColors,backgroundColors:e.backgroundColors,selectedColorCube:e.selectedColorCube}}))(v),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={display:"display",colorType:"",colorName:"",displayColorName:"text color",colorCode:"#ffffff",proColor:"#ffffff",deuColor:"#ffffff",triColor:"#ffffff",isSelected:!1},a.convertRGBToHex=a.convertRGBToHex.bind(Object(b.a)(a)),a.handleClickCube=a.handleClickCube.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"convertRGBToHex",value:function(e){var t=Number(e).toString(16);return t.length<2&&(t="0"+t),t}},{key:"handleClickCube",value:function(){this.props.dispatch({type:"UPDATE_SELECTED_COLOR_CUBE",newType:this.props.colorType,newIndex:this.props.colorNo})}},{key:"componentDidUpdate",value:function(e){}},{key:"componentDidMount",value:function(){"foreground"===this.props.colorType?this.setState({colorType:"foreground-color",displayColorName:this.props.foregroundColors[this.props.colorNo].colorName}):this.setState({colorType:"background-color",displayColorName:this.props.backgroundColors[this.props.colorNo].colorName})}},{key:"render",value:function(){var e=this,t=this.state.colorType+" "+this.state.display+" "+(this.state.isSelected?"selected-color":"");return c.a.createElement("div",{className:t,onClick:this.handleClickCube},c.a.createElement("span",{className:"color-name"},this.state.displayColorName),c.a.createElement("div",{className:"main-color",style:{backgroundColor:this.state.colorCode},ref:function(t){return e.mainColor=t}},c.a.createElement("div",{className:"cvd-simulation-color-row"},c.a.createElement("div",{className:"cvd-pro",style:{backgroundColor:this.state.proColor}}),c.a.createElement("div",{className:"cvd-deu",style:{backgroundColor:this.state.deuColor}}),c.a.createElement("div",{className:"cvd-tri",style:{backgroundColor:this.state.triColor}}))),c.a.createElement("span",{className:"color-code"},this.state.colorCode))}}],[{key:"shouldDisplay",value:function(e,t,a){var r=!0;return"foreground"===e&&t>=4?a.forEach((function(e){e.foreIndex===t&&(r=e.display)})):"background"===e&&t>=2?a.forEach((function(e){e.backIndex===t&&(r=e.display)})):r=!0,r}},{key:"getDerivedStateFromProps",value:function(e,a){var r=null;return t.shouldDisplay(e.colorType,e.colorNo,e.elementDisplay)?(r=Object(o.a)({},r,{display:"display"}),r="foreground"===e.colorType?Object(o.a)({},r,{colorCode:e.foregroundColors[e.colorNo].color,proColor:e.foregroundCVDs[e.colorNo].protan,deuColor:e.foregroundCVDs[e.colorNo].deutan,triColor:e.foregroundCVDs[e.colorNo].tritan}):Object(o.a)({},r,{colorCode:e.backgroundColors[e.colorNo].color,proColor:e.backgroundCVDs[e.colorNo].protan,deuColor:e.backgroundCVDs[e.colorNo].deutan,triColor:e.backgroundCVDs[e.colorNo].tritan}),r=e.selectedColorCube.type===e.colorType&&e.selectedColorCube.index===e.colorNo?Object(o.a)({},r,{isSelected:!0}):Object(o.a)({},r,{isSelected:!1})):r=Object(o.a)({},r,{display:"hidden"})}}]),t}(c.a.Component);var x=Object(h.b)((function(e){return{foregroundColors:e.foregroundColors,backgroundColors:e.backgroundColors,foregroundCVDs:e.foregroundCVDs,backgroundCVDs:e.backgroundCVDs,selectedColorCube:e.selectedColorCube,elementDisplay:e.elementDisplay}}))(N),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={display:"display",contrast:1,pass:!0,passCheck:"pass"},a.displayContrastRatio=a.displayContrastRatio.bind(Object(b.a)(a)),a.convertHextoRGB=a.convertHextoRGB.bind(Object(b.a)(a)),a.checkWCAG=a.checkWCAG.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"checkWCAG",value:function(e){switch(this.props.wcagContrast){case"AAA":if(e>=7)this.setState({passCheck:"pass"});else if(e<7&&e>=4.5)switch(this.props.wcagTextSize){case"large":this.setState({passCheck:"fail"});break;case"normal":this.setState({passCheck:"pass"})}else this.setState({passCheck:"fail"});break;case"AA":if(e>=4.5)this.setState({passCheck:"pass"});else if(e<4.5&&e>=3)switch(this.props.wcagTextSize){case"large":this.setState({passCheck:"fail"});break;case"normal":this.setState({passCheck:"pass"})}}}},{key:"displayContrastRatio",value:function(e,t){var a=this.calculateLuminance(this.convertHextoRGB(e)),r=this.calculateLuminance(this.convertHextoRGB(t)),o=0;o=a>r?((a+.05)/(r+.05)).toFixed(2):((r+.05)/(a+.05)).toFixed(2),this.setState({contrast:o})}},{key:"calculateLuminance",value:function(e){var t=e.map((function(e,t){var a=e/255;return a<=.03928?a/=12.92:a=Math.pow((a+.055)/1.055,2.4),a}));return.2126*t[0]+.7152*t[1]+.0722*t[2]}},{key:"convertHextoRGB",value:function(e){return[parseInt(e.substring(1,3),16),parseInt(e.substring(3,5),16),parseInt(e.substring(5),16)]}},{key:"componentDidUpdate",value:function(){this.displayContrastRatio(this.props.foregroundColors[this.props.foregroundId].color,this.props.backgroundColors[this.props.backgroundId].color),this.checkWCAG(this.state.contrast)}},{key:"componentDidMount",value:function(){this.displayContrastRatio(this.props.foregroundColors[this.props.foregroundId].color,this.props.backgroundColors[this.props.backgroundId].color)}},{key:"render",value:function(){return c.a.createElement("div",{className:"result-cube "+this.state.display+" "+this.state.passCheck},c.a.createElement("div",{className:"result-content",style:{color:this.props.foregroundColors[this.props.foregroundId].color,backgroundColor:this.props.backgroundColors[this.props.backgroundId].color}},c.a.createElement("div",{className:"wcag-check"},this.state.passCheck),c.a.createElement("div",{className:"contrast-ratio"},this.state.contrast)))}}],[{key:"shouldDisplay",value:function(e,t,a){var r=!0;return e<4&&t<2?r=!0:e>=4&&t<2?a.forEach((function(t){t.foreIndex===e&&(r=t.display)})):e<4&&t>=2?a.forEach((function(e){e.backIndex===t&&(r=e.display)})):(r=!1,a.forEach((function(t){t.foreIndex===e&&(r=t.display)})),r&&a.forEach((function(e){e.backIndex===t&&(r=e.display)}))),r}},{key:"getDerivedStateFromProps",value:function(e,a){return t.shouldDisplay(e.foregroundId,e.backgroundId,e.elementDisplay)?{display:"display"}:{display:"hidden"}}}]),t}(c.a.PureComponent);var w=Object(h.b)((function(e){return{foregroundNumber:e.foregroundNumber,backgroundNumber:e.backgroundNumber,foregroundColors:e.foregroundColors,backgroundColors:e.backgroundColors,wcagContrast:e.wcagContrast,wcagTextSize:e.wcagTextSize,elementDisplay:e.elementDisplay}}))(D),O=a(111),T=a.n(O),S=a(112),I=a.n(S),j=a(113),B=a.n(j),A=a(114),V=a.n(A),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={fullScreen:!1,isHelpOpen:!1,hasCVD:!0,canvasProtan:[],canvasDeutan:[],canvasTritan:[],colorNum:8},a.handlePaletteScroll=a.handlePaletteScroll.bind(Object(b.a)(a)),a.storeSimulationData=a.storeSimulationData.bind(Object(b.a)(a)),a.createColorPaletteObj=a.createColorPaletteObj.bind(Object(b.a)(a)),a.handleHelp=a.handleHelp.bind(Object(b.a)(a)),a.handleElementDisplay=a.handleElementDisplay.bind(Object(b.a)(a)),a.handleTextSize=a.handleTextSize.bind(Object(b.a)(a)),a.handleWCAG=a.handleWCAG.bind(Object(b.a)(a)),a.handleCVD=a.handleCVD.bind(Object(b.a)(a)),a.handleClickToggle=a.handleClickToggle.bind(Object(b.a)(a)),a.colorPicker=c.a.createRef(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"handlePaletteScroll",value:function(e){console.log(e.target.scrollTop);var t=e.target.scrollTop;t>=120?(this.paletteOptionsContainer.style.height="80px",this.paletteOptionsContainer.style.boxShadow="-1px 2px 3px 2px rgba(0, 0, 0, .25)",document.querySelector("#main-color-picker").style.opacity="0",document.querySelector(".floating-color-picker-container").style.display="block"):t<80&&(this.paletteOptionsContainer.style.height="auto",this.paletteOptionsContainer.style.boxShadow="none",document.querySelector("#main-color-picker").style.opacity="1",document.querySelector(".floating-color-picker-container").style.display="none")}},{key:"createColorPaletteObj",value:function(e,t){var a=this,r=new Image;r.src=t,r.onload=function(t){a.storeSimulationData(e,r)}}},{key:"storeSimulationData",value:function(e,t){var a=document.getElementById("canvasProtan").getContext("2d");a.drawImage(t,0,0);var r=a.getImageData(0,0,4096,4096).data;"pro"===e?this.setState({canvasProtan:r}):"deu"===e?this.setState({canvasDeutan:r}):this.setState({canvasTritan:r})}},{key:"handleHelp",value:function(){this.setState({isHelpOpen:!this.state.isHelpOpen})}},{key:"handleElementDisplay",value:function(e){console.log(e.target.checked),this.props.dispatch({type:"UPDATE_ELEMENT_DISPLAY",name:e.target.value,display:e.target.checked})}},{key:"handleTextSize",value:function(e){var t=e.target.checked?"large":"normal";this.props.dispatch({type:"UPDATE_WCAG_TEXT_SIZE_CHECK",size:t})}},{key:"handleWCAG",value:function(e){var t=e.target.checked;this.props.dispatch({type:"UPDATE_WCAG_CONTRAST_CHECK",standard:t?"3A":"2A"})}},{key:"handleCVD",value:function(e){var t=e.target.checked,a=document.getElementsByClassName("cvd-simulation-color-row");t?this.setState({hasCVD:!0},(function(){[].forEach.call(a,(function(e){e.classList.remove("noCVD")}))})):this.setState({hasCVD:!1},(function(){[].forEach.call(a,(function(e){e.classList.add("noCVD")}))}))}},{key:"handleClickToggle",value:function(){this.state.fullScreen?this.setState({fullScreen:!1},(function(){document.querySelector(".palette-container").classList.remove("full-screen"),document.querySelector(".example-page-container").style.display="block"})):this.setState({fullScreen:!0},(function(){document.querySelector(".palette-container").classList.add("full-screen"),document.querySelector(".example-page-container").style.display="none"}))}},{key:"componentDidUpdate",value:function(e){}},{key:"componentDidMount",value:function(){this.createColorPaletteObj("pro",T.a),this.createColorPaletteObj("deu",I.a),this.createColorPaletteObj("tri",B.a)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"palette-wrapper",ref:function(t){return e.paletteWrapper=t}},c.a.createElement("div",{className:"palette-content-wrapper",onScroll:this.handlePaletteScroll},c.a.createElement("div",{className:"palette-options-container",ref:function(t){return e.paletteOptionsContainer=t}},c.a.createElement(y,{pickerId:"main-color-picker",canvasProtan:this.state.canvasProtan,canvasDeutan:this.state.canvasDeutan,canvasTritan:this.state.canvasTritan}),c.a.createElement("div",{className:"palette-function-settings"},c.a.createElement("div",{className:"cvd-options palette-options"},c.a.createElement("span",{className:"option-name"},"CVD Simulation: "),c.a.createElement("div",{className:"cvd-inputs option-inputs"},c.a.createElement("span",{className:"toggle-text-label"},"Off"),c.a.createElement("label",{className:"toggle-switch"},c.a.createElement("input",{type:"checkbox",name:"cvd",value:"cvd-true",onChange:this.handleCVD,defaultChecked:!0}),c.a.createElement("span",{className:"slider"})),c.a.createElement("span",{className:"toggle-text-label"},"On"))),c.a.createElement("div",{className:"wcag-options palette-options"},c.a.createElement("span",{className:"option-name"},"WCAG Contrast Ratio: "),c.a.createElement("div",{className:"wcag-inputs option-inputs"},c.a.createElement("span",{className:"toggle-text-label"},"AA"),c.a.createElement("label",{className:"toggle-switch"},c.a.createElement("input",{type:"checkbox",name:"wcag",value:"3A",onChange:this.handleWCAG,defaultChecked:!0}),c.a.createElement("span",{className:"slider"})),c.a.createElement("span",{className:"toggle-text-label"},"AAA"))),c.a.createElement("div",{className:"wcag-options palette-options"},c.a.createElement("span",{className:"option-name"},"WCAG Text Size"),c.a.createElement("div",{className:"wcag-inputs option-inputs"},c.a.createElement("span",{className:"toggle-text-label"},"Normal"),c.a.createElement("label",{className:"toggle-switch"},c.a.createElement("input",{type:"checkbox",name:"textSize",value:"large",onChange:this.handleTextSize}),c.a.createElement("span",{className:"slider"})),c.a.createElement("span",{className:"toggle-text-label"},"Large"))),c.a.createElement("div",{className:"element-options palette-options"},c.a.createElement("span",{className:"option-name"},"Elements"),c.a.createElement("div",{className:"element-inputs option-inputs"},c.a.createElement("input",{id:"accent-header",className:"button-switch",type:"checkbox",name:"element",value:"accent-header",onChange:this.handleElementDisplay}),c.a.createElement("label",{htmlFor:"accent-header",className:"button-switch"},"Accent Header"),c.a.createElement("input",{id:"regular-button",className:"button-switch",type:"checkbox",name:"element",value:"regular-button",onChange:this.handleElementDisplay}),c.a.createElement("label",{htmlFor:"regular-button",className:"button-switch"},"Button"),c.a.createElement("input",{id:"accent-button",className:"button-switch",type:"checkbox",name:"element",value:"accent-button",onChange:this.handleElementDisplay}),c.a.createElement("label",{htmlFor:"accent-button",className:"button-switch"},"Accent Button")))),c.a.createElement("div",{className:"help"},c.a.createElement("button",{className:"help-switch "+(this.state.isHelpOpen?"isOpen":"isHidden"),onClick:this.handleHelp},"Help"),c.a.createElement("div",{className:"help-wrapper "+(this.state.isHelpOpen?"visible":"hidden")},c.a.createElement("div",{className:"help-container"},c.a.createElement("img",{className:"color-cube-intro-img",src:V.a,alt:"Introduction to color cube parts."}),c.a.createElement("p",null,"Sorry, Help is still under construction. More details will be provided in the future."))))),c.a.createElement("div",{className:"floating-color-picker-container"},c.a.createElement(y,{pickerId:"floating-color-picker",canvasProtan:this.state.canvasProtan,canvasDeutan:this.state.canvasDeutan,canvasTritan:this.state.canvasTritan})),c.a.createElement("div",{className:"palette"},c.a.createElement("div",{className:"color-row"},c.a.createElement("div",{className:"color-placeholder"},"QAQ"),c.a.createElement("div",{className:"foreground-color-wrapper"},c.a.createElement(x,{colorType:"foreground",colorNo:0})),c.a.createElement("div",{className:"foreground-color-wrapper"},c.a.createElement(x,{colorType:"foreground",colorNo:1})),c.a.createElement("div",{className:"foreground-color-wrapper"},c.a.createElement(x,{colorType:"foreground",colorNo:2})),c.a.createElement("div",{className:"foreground-color-wrapper"},c.a.createElement(x,{colorType:"foreground",colorNo:3})),c.a.createElement("div",{className:"foreground-color-wrapper"},c.a.createElement(x,{colorType:"foreground",colorNo:4})),c.a.createElement("div",{className:"foreground-color-wrapper"},c.a.createElement(x,{colorType:"foreground",colorNo:5})),c.a.createElement("div",{className:"foreground-color-wrapper"},c.a.createElement(x,{colorType:"foreground",colorNo:6}))),c.a.createElement("div",{className:"color-row"},c.a.createElement("div",{className:"background-color-wrapper"},c.a.createElement(x,{colorType:"background",colorNo:0})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:0,backgroundId:0})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:1,backgroundId:0})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:2,backgroundId:0})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:3,backgroundId:0})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:4,backgroundId:0})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:5,backgroundId:0})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:6,backgroundId:0}))),c.a.createElement("div",{className:"color-row"},c.a.createElement("div",{className:"background-color-wrapper"},c.a.createElement(x,{colorType:"background",colorNo:1})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:0,backgroundId:1})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:1,backgroundId:1})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:2,backgroundId:1})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:3,backgroundId:1})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:4,backgroundId:1})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:5,backgroundId:1})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:6,backgroundId:1}))),c.a.createElement("div",{className:"color-row"},c.a.createElement("div",{className:"background-color-wrapper"},c.a.createElement(x,{colorType:"background",colorNo:2})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:0,backgroundId:2})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:1,backgroundId:2})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:2,backgroundId:2})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:3,backgroundId:2})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:4,backgroundId:2})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:5,backgroundId:2})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:6,backgroundId:2}))),c.a.createElement("div",{className:"color-row"},c.a.createElement("div",{className:"background-color-wrapper"},c.a.createElement(x,{colorType:"background",colorNo:3})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:0,backgroundId:3})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:1,backgroundId:3})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:2,backgroundId:3})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:3,backgroundId:3})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:4,backgroundId:3})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:5,backgroundId:3})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:6,backgroundId:3}))),c.a.createElement("div",{className:"color-row"},c.a.createElement("div",{className:"background-color-wrapper"},c.a.createElement(x,{colorType:"background",colorNo:4})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:0,backgroundId:4})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:1,backgroundId:4})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:2,backgroundId:4})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:3,backgroundId:4})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:4,backgroundId:4})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:5,backgroundId:4})),c.a.createElement("div",{className:"result-wrapper"},c.a.createElement(w,{foregroundId:6,backgroundId:4}))))),c.a.createElement("div",{className:"palette-border"},c.a.createElement("div",{className:"toggle-wrapper",onClick:this.handleClickToggle},c.a.createElement("button",{className:"example-page-toggle"},this.state.fullScreen?"Open":"Collapse"))),c.a.createElement("div",{id:"hidden-canvas-area"},c.a.createElement("canvas",{id:"canvasProtan",ref:function(t){return e.canvasProtan=t},width:"4096",height:"4096"},"Please use a browser that supports HTML5 Canvas"),c.a.createElement("canvas",{id:"canvasDeutan",ref:function(t){return e.canvasDeutan=t},width:"4096",height:"4096"},"Please use a browser that supports HTML5 Canvas"),c.a.createElement("canvas",{id:"canvasTritan",ref:function(t){return e.canvasTritan=t},width:"4096",height:"4096"},"Please use a browser that supports HTML5 Canvas")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null}}]),t}(c.a.Component);var H=Object(h.b)((function(e){return{foregroundColors:e.foregroundColors,backgroundColors:e.backgroundColors,selectedColorCube:e.selectedColorCube}}))(P);var _=function(){return c.a.createElement("div",{className:"main"},c.a.createElement("header",{className:"main-header"},c.a.createElement("h1",null,"ACE 2.0: Accessible Color Evaluator")),c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"palette-container"},c.a.createElement(H,null)),c.a.createElement("div",{className:"example-page-container"},c.a.createElement(k,null))))},R=function(){return c.a.createElement(i.a,{basename:"/ace-v2"},c.a.createElement("div",{className:"router"},c.a.createElement(d.a,{exact:!0,path:"/",component:_}),c.a.createElement(d.a,{exact:!0,path:"/main",component:_}),c.a.createElement(d.a,{path:"/example",component:k}),c.a.createElement(d.a,{path:"/example-page",component:k})))};a(290);var G=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(48),L={wcagContrast:"AAA",wcagTextSize:"normal",foregroundColors:[{index:0,color:"#000000",colorName:"Page body text"},{index:1,color:"#ffffff",colorName:"Header/Footer text"},{index:2,color:"#0000ee",colorName:"Hyperlink text"},{index:3,color:"#551a8b",colorName:"Accent hyperlink text"},{index:4,color:"#000000",colorName:"Accent header text"},{index:5,color:"#000000",colorName:"Button Text"},{index:6,color:"#ffffff",colorName:"Accent button text"}],backgroundColors:[{index:0,color:"#ffffff",colorName:"Page body background"},{index:1,color:"#000000",colorName:"Header/footer background"},{index:2,color:"#aaaaaa",colorName:"Accent header background"},{index:3,color:"#aaaaaa",colorName:"Button background"},{index:4,color:"#000000",colorName:"Accent button background"}],foregroundCVDs:[{index:0,protan:"#000000",deutan:"#000000",tritan:"#000000"},{index:1,protan:"#ffffff",deutan:"#ffffff",tritan:"#ffffff"},{index:2,protan:"rgb(0, 51, 238)",deutan:"rgb(0, 73, 237)",tritan:"rgb(0, 86, 122)"},{index:3,protan:"rgb(0, 51, 139)",deutan:"rgb(24, 68, 138)",tritan:"rgb(74, 59, 61)"},{index:4,protan:"#000000",deutan:"#000000",tritan:"#000000"},{index:5,protan:"#000000",deutan:"#000000",tritan:"#000000"},{index:6,protan:"#ffffff",deutan:"#ffffff",tritan:"#ffffff"}],backgroundCVDs:[{index:0,protan:"#ffffff",deutan:"#ffffff",tritan:"#ffffff"},{index:1,protan:"#000000",deutan:"#000000",tritan:"#000000"},{index:2,protan:"#aaaaaa",deutan:"#aaaaaa",tritan:"#aaaaaa"},{index:3,protan:"#aaaaaa",deutan:"#aaaaaa",tritan:"#aaaaaa"},{index:4,protan:"#000000",deutan:"#000000",tritan:"#000000"}],selectedColorCube:{type:"foreground",index:0},elementDisplay:[{foreIndex:4,backIndex:2,name:"accent-header",display:!1},{foreIndex:5,backIndex:3,name:"regular-button",display:!1},{foreIndex:6,backIndex:4,name:"accent-button",display:!1}]};var M=Object(U.b)((function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"EDIT_FOREGROUND_NUMBER":return console.log(c.type),Object(o.a)({},n,{foregroundNumber:c.newNumber});case"EDIT_BACKGROUND_NUMBER":return console.log(c.type),Object(o.a)({},n,{backgroundNumber:c.newNumber});case"EDIT_FOREGROUND_COLOR":return console.log(c.type),(e=Object(r.a)(n.foregroundColors))[c.index].color=c.newColor,Object(o.a)({},n,{foregroundColors:e});case"EDIT_BACKGROUND_COLOR":return console.log(c.type),(e=Object(r.a)(n.backgroundColors))[c.index].color=c.newColor,Object(o.a)({},n,{backgroundColors:e});case"UPDATE_FOREGROUND_CVD":return console.log(c.type),(t=Object(r.a)(n.foregroundCVDs))[c.index].protan=c.cvdColors.protan,t[c.index].deutan=c.cvdColors.deutan,t[c.index].tritan=c.cvdColors.tritan,Object(o.a)({},n,{foregroundCVDs:t});case"UPDATE_BACKGROUND_CVD":return console.log(c.type),(t=Object(r.a)(n.backgroundCVDs))[c.index].protan=c.cvdColors.protan,t[c.index].deutan=c.cvdColors.deutan,t[c.index].tritan=c.cvdColors.tritan,Object(o.a)({},n,{backgroundCVDs:t});case"UPDATE_WCAG_CONTRAST_CHECK":return console.log(c.type),console.log(c.standard),"2A"===c.standard?Object(o.a)({},n,{wcagContrast:"AA"}):Object(o.a)({},n,{wcagContrast:"AAA"});case"UPDATE_WCAG_TEXT_SIZE_CHECK":return console.log(c.type),console.log(c.size),Object(o.a)({},n,{wcagTextSize:c.size});case"UPDATE_SELECTED_COLOR_CUBE":return console.log(c.type),(a=Object(o.a)({},n.selectedColorCube)).type=c.newType,a.index=c.newIndex,Object(o.a)({},n,{selectedColorCube:a});case"UPDATE_ELEMENT_DISPLAY":return console.log(c.type),console.log(c.name,c.display),a=n.elementDisplay.map((function(e){return e.name===c.name?Object(o.a)({},e,{display:c.display}):e})),Object(o.a)({},n,{elementDisplay:a});default:return n}}));s.a.render(c.a.createElement(h.a,{store:M},c.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[115,1,2]]]);
//# sourceMappingURL=main.13a1bfdf.chunk.js.map