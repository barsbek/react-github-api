import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import { getUserInfo } from '../actions';

const mapState = state => ({
  loading: state.user.loading
});

export default connect(
  mapState,
  { onSearchClick: getUserInfo }
)(Search);
