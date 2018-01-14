import React from 'react';
import PropTypes from 'prop-types';

let input;
const Search = ({ loading, onSearchClick }) => (
  <div>
    <input
      type='text'
      ref={i => input = i}
    />
    <button onClick={() => onSearchClick(input.value)}>
      {loading ?  'Loading...' : 'Search'}
    </button>
  </div>
)

Search.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
}

export default Search;
