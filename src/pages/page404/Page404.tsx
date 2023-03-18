import React from 'react';
import { Link } from 'react-router-dom';
import './page404.css';

export default class Page404 extends React.Component {
  render() {
    return (
      <div className="page404">
        <div className="container">
          <h2>Uups! This page not exist!</h2>
          <Link to={'/'}>Go home</Link>
        </div>
      </div>
    );
  }
}
