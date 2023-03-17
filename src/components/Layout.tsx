import React from 'react';
import { Outlet } from 'react-router-dom';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}
