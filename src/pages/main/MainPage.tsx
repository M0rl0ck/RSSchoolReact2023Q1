import SearchBar from '../../base/searchBar/SearchBar';
import React from 'react';
import Cards from '../../components/cards/Cards';
import './mainPage.css';

export default class MainPage extends React.Component {
  render() {
    return (
      <>
        <div className="main-page">
          <div className="container">
            <h2>Main page</h2>
            <SearchBar />
            <Cards />
          </div>
        </div>
      </>
    );
  }
}
