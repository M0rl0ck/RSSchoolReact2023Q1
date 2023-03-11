import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <ul className="header__links">
            <li className="header-link">
              <NavLink to={'/'}>Main</NavLink>
            </li>
            <li className="header-link">
              <NavLink to={'/about'}>About Us</NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
