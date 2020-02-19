import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
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
    colorName: "Visted hyperlink text"
  },{
    index: 4,
    color: "#000000",
    colorName: " "
  },{
    index: 5,
    color: "#ffffff",
    colorName: " "
  },],
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
    color: "#ffffff",
    colorName: "Accent/hover background"
  },{
    index: 3,
    color: "#000000",
    colorName: "Another background"
  },],
  foregroundCVDs: [{
    index: 0, protan: "#000000", deutan: "#000000", tritan: "#000000"
  },{
    index: 1, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  },{
    index: 2, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  },{
    index: 3, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  },{
    index: 4, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  },{
    index: 5, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  }],
  backgroundCVDs: [{
    index: 0, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  },{
    index: 1, protan: "#000000", deutan: "#000000", tritan: "#000000"
  },{
    index: 2, protan: "#ffffff", deutan: "#ffffff", tritan: "#ffffff"
  },{
    index: 3, protan: "#000000", deutan: "#000000", tritan: "#000000"
  },]
};

function reducer(state = initialState, action){
  let tempColorArr;
  let tempCVDArr;
  switch(action.type){
    case "UPDATE_CANVAS":
      
      return state;
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
