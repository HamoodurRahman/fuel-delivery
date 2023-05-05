import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import FourZeroFour from './pages/404';
import LayoutWithHeader from './layouts/layout-header';
import LayoutWithOutHeader from './layouts/layout-noheader';
import Stations from './pages/stations';

const root = ReactDOM.createRoot(document.getElementById('any-one'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutWithHeader />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/stations' element={<Stations />} />

        </Route>
        <Route path='*' element={<LayoutWithOutHeader />} >
          <Route path='*' element={<FourZeroFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
