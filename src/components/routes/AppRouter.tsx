import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import AboutPage from '../../pages/about/AboutPage';
import MainPage from '../../pages/main/MainPage';
import Page404 from '../../pages/page404/Page404';

import FormPage from '../../pages/form/FormPage';
import { PATH } from '../../infostructure/constants';

function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path={PATH.MAIN} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={PATH.ABOUT} element={<AboutPage />} />
          <Route path={PATH.FORMS} element={<FormPage />} />
          <Route path={PATH.DEFAULT} element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
