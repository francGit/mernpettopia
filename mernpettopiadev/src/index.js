import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Navbar } from './components/Navbar';
import Home from './screen/Home'; 
import { FooterSite } from './components/FooterSite';
import './index.css';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Agendar from './screen/Agendar';
import DashBoard from './screen/DashBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home /> 
    {/* <Login/>
    <Registro/>
    <Agendar/>
    <DashBoard/> */}
    <FooterSite/>
  </React.StrictMode>
);
 
