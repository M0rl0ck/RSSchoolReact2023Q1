import React from 'react';
import { NavLink } from 'react-router-dom';
import { getLocation, LocationProps } from '../../utils/getLocation/getLocation';
import './header.css';

const TITLES: { [index: string]: string } = {
  '/': 'Main page',
  '/about': 'About us',
  '/forms': 'Form page',
};

class Header extends React.Component<LocationProps> {
  constructor(props: LocationProps) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1>{TITLES[this.props.location.pathname] || 'Not found page'}</h1>
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
}

export default getLocation(Header);
