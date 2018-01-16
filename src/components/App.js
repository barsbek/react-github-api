import React from 'react';
import { connect } from 'react-redux';

import SearchContainer from '../containers/SearchContainer';
import StatusBar from '../containers/StatusBar';

const App = () => (
  <div>
    <SearchContainer />
    <StatusBar />
  </div>
)

export default App;
