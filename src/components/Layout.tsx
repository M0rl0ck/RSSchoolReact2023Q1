import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../organisms/header/Header';

export default function () {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
