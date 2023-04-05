import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PATH } from '../../infostructure/constants';
import './header.css';

const TITLES: { [index: string]: string } = {
  [PATH.MAIN]: 'Main page',
  [PATH.ABOUT]: 'About us',
  [PATH.FORMS]: 'Form page',
};

export default function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div className="container">
        <h1>{TITLES[location.pathname] || 'Not found page'}</h1>
        <ul className="header__links">
          <li className="header-link">
            <NavLink to={'/'}>Main</NavLink>
          </li>
          <li className="header-link">
            <NavLink to={'/forms'}>Forms</NavLink>
          </li>
          <li className="header-link">
            <NavLink to={'/about'}>About Us</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
