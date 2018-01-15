import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Home from './Scenes/Home';
import registerServiceWorker from './registerServiceWorker';
import Track from './Shared/Track';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Track(Home)} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root'));

registerServiceWorker();
