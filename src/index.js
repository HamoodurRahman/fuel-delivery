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
import Service from './pages/service';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';

const root = ReactDOM.createRoot(document.getElementById('any-one'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutWithHeader />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />

        </Route>
        <Route path='*' element={<LayoutWithOutHeader />} >
          <Route path='*' element={<FourZeroFour />} />
          {/* <Route path='contact' element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
