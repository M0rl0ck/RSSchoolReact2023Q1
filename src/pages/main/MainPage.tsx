import SearchBar from '../../base/searchBar/SearchBar';
import React from 'react';

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <div className="container">
          <h2>Main page</h2>
          <SearchBar />
        </div>
      </div>
    );
  }
}
