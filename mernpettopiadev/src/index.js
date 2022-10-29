import React from 'react';
import ReactDOM from 'react-dom/client';    
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import FooterSite from './components/FooterSite';
import { Navbar } from './components/Navbar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
     <App/>
     <FooterSite/>
    </BrowserRouter>
  </React.StrictMode>
);
 
