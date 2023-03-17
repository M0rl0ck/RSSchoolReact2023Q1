import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

interface HeaderProp {
  title: string;
}

export default class Header extends React.Component<HeaderProp> {
  constructor(props: HeaderProp) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1>{this.props.title}</h1>
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
