import React from 'react';
import { connect } from 'react-redux';

const User = ({ user }) => (
  user ? 
    <div>
      <h3>
        <a href={user.url}>{user.login}</a>
      </h3>
      <img src={user.avatar_url} />
    </div> : null
)

const mapState = (state, ownProps) => {
  const { login } = ownProps.match.params;
  const { users } = state.entities;
  const user = users[login];

  return { user }
}

export default connect(mapState)(User);
