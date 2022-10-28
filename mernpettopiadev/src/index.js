import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { FooterSite } from './components/FooterSite';
import { Navbar } from './components/Navbar';
import './index.css';
import Home from './screen/Home'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home />
    <FooterSite/>
  </React.StrictMode>
);
 
