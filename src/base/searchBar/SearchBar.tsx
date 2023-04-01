import React from 'react';
import './searchBar.css';

const SEARCH_STORAGE_KEY = 'searchValue';

export default class SearchBar extends React.Component {
  state = { value: '' };

  componentDidMount(): void {
    const value = localStorage.getItem(SEARCH_STORAGE_KEY);
    this.setState({ value: value ? value : '' });
  }

  componentWillUnmount(): void {
    localStorage.setItem(SEARCH_STORAGE_KEY, this.state.value);
  }

  render(): React.ReactNode {
    return (
      <div className="search-container">
        <input
          type="search"
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        />
      </div>
    );
  }
}
