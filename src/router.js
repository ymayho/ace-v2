import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './Main.js';
import ExamplePage from './Example-page.js'
//import MyColorPicker from './MyColorPicker.js'

const PageRouter = () => (
  <Router>
    <div className="router">
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} />
      <Route path="/example" component={ExamplePage} />
      <Route path="/example-page" component={ExamplePage} />

    </div>
  </Router>
);

export default PageRouter;
