import React from 'react';
import { useLocation } from 'react-router-dom';
import { PATH } from '../../infostructure/constants';
import './header.css';
import HeaderNavigation from '../../molecules/headerNavigation/HeaderNavigation';
import Titel from '../../atoms/titel/Titel';

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
        <Titel text={TITLES[location.pathname] || 'Not found page'} />
        <HeaderNavigation />
      </div>
    </header>
  );
}
