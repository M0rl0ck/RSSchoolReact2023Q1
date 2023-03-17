import SearchBar from '../../base/searchBar/SearchBar';
import React from 'react';
import Cards from '../../components/cards/Cards';
import './mainPage.css';
import Header from '../../components/header/Header';

export default class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header title="Main page." />
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
