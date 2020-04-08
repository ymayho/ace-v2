import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  wcag2a: false,
  wcag3a: true,
  wcag: "AAA",
  foregroundNumber: 7,
  backgroundNumber: 5,
  foregroundColors: [{
    index: 0,
    color: "#000000",
    colorName: "Page body text"
  },{
    index: 1,
    color: "#ffffff",
    colorName: "Header/Footer text"
  },{
    index: 2,
    color: "#0000ee",
    colorName: "Hyperlink text"
  },{
    index: 3,
    color: "#551a8b",
    colorName: "Accent hyperlink text"
  },{
    index: 4,
    color: "#000000",
    colorName: "Accent header text"
  },{
    index: 5,
    color: "#ffffff",
    colorName: "Button Text"
  },{
    index: 6,
    color: "#ffffff",
    colorName: "Accent button text"
  }],
  backgroundColors: [{
    index: 0,
    color: "#ffffff",
    colorName: "Page body background"
  },{
    index: 1,
    color: "#000000",
    colorName: "Header/footer background"
  },{
    index: 2,
    color: "#aaaaaa",
    colorName: "Accent header background"
  },{
    index: 3,
    color: "#000000",
    colorName: "Button background"
  },{
    index: 4,
    color: "#000000",
    colorName: "Accent button background"
  }],
  foregroundCVDs: [{
    index: 0, protan: "#000000", deutan: "#000000", tritan: "#000000"
  },{
    index: 1, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  },{
    index: 2, protan: "rgb(0, 51, 238)", deutan: "rgb(0, 73, 237)", tritan: "rgb(0, 86, 122)"
  },{
    index: 3, protan: "rgb(0, 51, 139)", deutan: "rgb(24, 68, 138)", tritan: "rgb(74, 59, 61)"
  },{
    index: 4, protan: "#000000", deutan: "#000000", tritan: "#000000"
  },{
    index: 5, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  },{
    index: 6, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  }],
  backgroundCVDs: [{
    index: 0, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  },{
    index: 1, protan: "#000000", deutan: "#000000", tritan: "#000000"
  },{
    index: 2, protan: "#aaaaaa", deutan: "#aaaaaa", tritan: "#aaaaaa"
  },{
    index: 3, protan: "#000000", deutan: "#000000", tritan: "#000000"
  },{
    index: 4, protan: "#000000", deutan: "#000000", tritan: "#000000"
  }],
  selectedColorCube: {
    type: "foreground",
    index: 0
  },
  elementDisplay: [{
    foreIndex: 4, backIndex: 2, name: "accent-header", display: false
  },{
    foreIndex: 5, backIndex: 3, name: "regular-button", display: false
  },{
    foreIndex: 6, backIndex: 4, name: "accent-button", display: false
  }]
};

function reducer(state = initialState, action){
  let tempColorArr;
  let tempCVDArr;
  let temp;
  switch(action.type){
    case "EDIT_FOREGROUND_NUMBER":
      console.log(action.type);
      return {...state, foregroundNumber: action.newNumber};
    case "EDIT_BACKGROUND_NUMBER":
        console.log(action.type);
        return {...state, backgroundNumber: action.newNumber};
    case "EDIT_FOREGROUND_COLOR":
      console.log(action.type);
      tempColorArr = [...state.foregroundColors];
      tempColorArr[action.index].color = action.newColor;
      return {...state, foregroundColors: tempColorArr};
    case "EDIT_BACKGROUND_COLOR":
      console.log(action.type);
      tempColorArr = [...state.backgroundColors];
      tempColorArr[action.index].color = action.newColor;
      return {...state, backgroundColors: tempColorArr};
    case "UPDATE_FOREGROUND_CVD":
      console.log(action.type);
      tempCVDArr = [...state.foregroundCVDs];
      tempCVDArr[action.index].protan = action.cvdColors.protan;
      tempCVDArr[action.index].deutan = action.cvdColors.deutan;
      tempCVDArr[action.index].tritan = action.cvdColors.tritan;
      return {...state, foregroundCVDs: tempCVDArr}
    case "UPDATE_BACKGROUND_CVD":
      console.log(action.type);
      tempCVDArr = [...state.backgroundCVDs];
      tempCVDArr[action.index].protan = action.cvdColors.protan;
      tempCVDArr[action.index].deutan = action.cvdColors.deutan;
      tempCVDArr[action.index].tritan = action.cvdColors.tritan;
      return {...state, backgroundCVDs: tempCVDArr}
    case "UPDATE_WCAG_CHECK":
      console.log(action.type);
      console.log(action.standard);
      if(action.standard === "2A"){
        return {...state, wcag: "AA"}
      }else{
        return {...state, wcag: "AAA"}
      }
    case "UPDATE_SELECTED_COLOR_CUBE":
      console.log(action.type);
      temp = {...state.selectedColorCube};
      temp.type = action.newType;
      temp.index = action.newIndex;
      return {...state, selectedColorCube: temp};
    case "UPDATE_ELEMENT_DISPLAY":
      console.log(action.type);
      console.log(action.name, action.display)
      temp = state.elementDisplay.map(item => item.name === action.name ? {...item, display: action.display} : item);
      return {...state, elementDisplay: temp};
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
