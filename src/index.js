import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Home from './Scenes/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root'));

registerServiceWorker();
