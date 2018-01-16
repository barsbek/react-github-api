import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import { getUser } from '../actions';

export default connect(
  null,
  { onSearchClick: getUser }
)(Search);
