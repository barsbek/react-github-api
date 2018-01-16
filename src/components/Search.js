import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    onSearchClick: PropTypes.func.isRequired,
  }

  handleKeyUp = (e) => {
    if(e.key === 'Enter') {
      this.search();
    }
  }

  search = () => {
    this.props.onSearchClick(this.input.value);
  }

  render() {
    const { onSearchClick } = this.props;
    return (
      <div>
        <input
          type='text'
          ref={i => this.input = i}
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.search}>
          Search
        </button>
      </div>
    )
  }
}

export default Search;
