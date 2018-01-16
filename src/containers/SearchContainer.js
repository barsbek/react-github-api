import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Search from '../components/Search';
import { loadUser } from '../actions';

class SearchInfo extends Component {
  onSearchClick = login => {
    this.props.history.push(`${login}`);
    this.props.dispatch(loadUser( login ));
  }

  render() {
    return (
      <Search onSearchClick={this.onSearchClick} />
    )
  }
}

export default withRouter(
  connect()(SearchInfo)
);
