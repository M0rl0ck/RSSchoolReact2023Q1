import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../infostructure/constants';
import './headerNavigation.css';

export default function HeaderNavigation() {
  return (
    <ul className="header__links">
      <li className="header-link">
        <NavLink to={PATH.MAIN}>Main</NavLink>
      </li>
      <li className="header-link">
        <NavLink to={PATH.FORMS}>Forms</NavLink>
      </li>
      <li className="header-link">
        <NavLink to={PATH.ABOUT}>About Us</NavLink>
      </li>
    </ul>
  );
}
