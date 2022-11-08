//import { useState } from "react"
import Home from './screen/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Login from './screen/Login'
import Agendar from './screen/Agendar'
import Registro from './screen/Registro'
import Servicios from './screen/Servicios'
import Equipo from './screen/Equipo'
import Admin from './screen/Admin'
import DashBoard from './screen/DashBoard'  
import Mascotas from './screen/Mascotas'  
import Users from './screen/Users'  
import {ProtectedRoute} from './components/ProtectedRoute' 
import FooterSite from "./components/FooterSite" 
import Navbar from './components/Navbar'
import { useState } from 'react'
import Contacto from './screen/Contacto'
import Productos from './screen/Productos'
import Not404 from './components/Not404'
import Services from './API/models/Services'

const App = () => {
  const [user, setUser] = useState(null);
  
  return (
      <BrowserRouter> 
      <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<Not404/>} />
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/registro' element={<Registro/>} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/equipo' element={<Equipo />} />
          <Route path='/contacto' element={<Contacto />} />  
          <Route path='/registro' element={<Registro />} />      
        <Route element={
          <ProtectedRoute user={user} />
        }>  
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/mascotas" element={<Mascotas />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/servicios" element={<Services />} />
        </Route> 
         <Route path="/admin" element={<Admin />} />
        </Routes>
        <FooterSite />
      </BrowserRouter>
    
  )
}

 

export default App
