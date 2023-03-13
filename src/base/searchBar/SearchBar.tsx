import React from 'react';
import './searchBar.css';

export default class SearchBar extends React.Component {
  state = { value: '' };

  componentDidMount(): void {
    const value = localStorage.getItem('searchValue');
    this.setState({ value: value ? value : '' });
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.value);
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
