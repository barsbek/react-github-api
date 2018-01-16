import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './App';
import DevTools from '../containers/DevTools';
import UserInfo from '../containers/UserInfo';

const Root = () => (
  <Router >
    <div>
      <Route path="/" component={App} />
      <Route path="/:login" component={UserInfo} />
      <DevTools />
    </div>
  </Router>
);

export default Root;
