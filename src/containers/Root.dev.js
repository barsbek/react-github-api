import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './App';
import DevTools from './DevTools';

const Root = () => (
  <Router >
    <div>
      <Route path="/" component={App} />
      <DevTools />
    </div>
  </Router>
);

export default Root;
