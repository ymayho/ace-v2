import React from 'react';
import ExamplePage from './Example-page.js'
import Palette from './Palette.js'

function Main() {
  return (
    <div className="main">
      <header className="main-header">
        <h1>ACE 2.0: Accessible Color Evaluator</h1>
      </header>
      <div className="main-container">
        <div className="palette-container"><Palette /></div>
        <div className="example-page-container"><ExamplePage /></div>
      </div>
    </div>
  );
}

export default Main;
