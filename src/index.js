import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {defaultColors} from './utils/attributes';
import { saveStateToLocalStorage, loadStateFromLocalStorage } from './utils/helper'

const initialState = {
  wcagContrast: "AAA",
  wcagTextSize: "normal",
  foregroundColors: defaultColors.foregroundColors,
  backgroundColors: defaultColors.backgroundColors,
  foregroundCVDs: defaultColors.foregroundCVDs,
  backgroundCVDs: defaultColors.backgroundCVDs,
  selectedPaletteColor: {
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
    case "RESET_PALETTE_SETTING":
      console.log(action.type);
      return {...state,
        foregroundColors: JSON.parse(JSON.stringify(defaultColors.foregroundColors)), backgroundColors: JSON.parse(JSON.stringify(defaultColors.backgroundColors)),
        foregroundCVDs: JSON.parse(JSON.stringify(defaultColors.foregroundCVDs)), backgroundCVDs: JSON.parse(JSON.stringify(defaultColors.backgroundCVDs)),
        wcagContrast: "AAA", wcagTextSize: "normal", elementDisplay: [{
          foreIndex: 4, backIndex: 2, name: "accent-header", display: false
        },{
          foreIndex: 5, backIndex: 3, name: "regular-button", display: false
        },{
          foreIndex: 6, backIndex: 4, name: "accent-button", display: false
        }]
      };
    case "UPDATE_WCAG_CONTRAST_CHECK":
      console.log(action.type);
      console.log(action.standard);
      if(action.standard === "2A"){
        return {...state, wcagContrast: "AA"}
      }else{
        return {...state, wcagContrast: "AAA"}
      }
    case "UPDATE_WCAG_TEXT_SIZE_CHECK":
      console.log(action.type);
      console.log(action.size);
      return {...state, wcagTextSize: action.size}
    case "UPDATE_SELECTED_PALETTE_COLOR":
      console.log(action.type);
      temp = {...state.selectedPaletteColor};
      temp.type = action.newType;
      temp.index = action.newIndex;
      return {...state, selectedPaletteColor: temp};
    case "UPDATE_ELEMENT_DISPLAY":
      console.log(action.type);
      console.log(action.name, action.display)
      temp = state.elementDisplay.map(item => item.name === action.name ? {...item, display: action.display} : item);
      return {...state, elementDisplay: temp};
    default:
      return state;
  }
}

//const store = createStore(reducer);

const persistedState = loadStateFromLocalStorage()
var store = Object()
if ( typeof window !== 'undefined' ) {
  store = createStore( reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
}
else {
  store = createStore(reducer, persistedState);
}
store.subscribe(() => saveStateToLocalStorage( store.getState() ))



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
