import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Main from './Main.js';
//import ExamplePage from './Example-page.js'
import FullExamplePage from './Full-example-page.js'

const PageRouter = () => (
  <Router basename="/ace-v2">
    <div className="router">
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} />
      <Route path="/example" component={FullExamplePage} />
      <Route path="/example-page" component={FullExamplePage} />
    </div>
  </Router>
);

export default PageRouter;
