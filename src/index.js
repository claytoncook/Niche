import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/Login';
import CreateAccount from "./pages/CreateAccount";
import Feed from './pages/Feed';
import Page from './pages/Page';

import reportWebVitals from './reportWebVitals';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/createaccount' component={CreateAccount} />
      <Route path='/feed' component={Feed} />
      <Route path='/page' component={Page} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
