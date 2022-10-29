import React from 'react' 
import Home from './screen/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './screen/Login'
import Agendar from './screen/Agendar'
import Registro from './screen/Registro'
import DashBoard from './screen/DashBoard'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/agendar' element={<Agendar/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
      </Routes>
      
    </>
  )
}
export default App
