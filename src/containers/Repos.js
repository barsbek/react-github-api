import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRepos } from '../actions';

class Repos extends Component {
  componentWillMount() {
    const { login } = this.props.match.params;
    
    this.props.dispatch(getRepos( login ));
  }

  render() {
    const { repos } = this.props;
    if(!repos) return null;
    return (
      Object.values(repos).map((r, index) => (
        <h4 key={r.id}>
          {index} : <a href={r.url}>{`${index} : ${r.name}`}</a>
        </h4>
      ))
    )
  }
}

const mapState = state => ({
  repos: state.entities.repos
});

export default connect(mapState)(Repos);
