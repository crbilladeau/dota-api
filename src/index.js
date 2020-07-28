import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import HeroPage from './components/heroes/HeroPage';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/heroes/:localized_name' render={() => <HeroPage />} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
