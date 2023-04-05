import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerNavigation.css';

export default function HeaderNavigation() {
  return (
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
  );
}
