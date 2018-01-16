import React, { Component } from 'react';
import { connect } from 'react-redux';

const StatusBar = ({ error, loading, message }) => (
  (error || loading) && message ? 
    <div style={error ? {color: 'red'} : {}}>
      { message }
    </div> : null
)

const mapState = state => ({ ...state.status });

export default connect(mapState)(StatusBar);
