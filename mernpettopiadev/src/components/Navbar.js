import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <header id='header'>
    <div className="container">
     
     <div className="boxNav">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid  ">
           <div className="boxLogo">
             <figure>
               <img src="image/logo.svg" alt="" className="img-fluid"/>
             </figure>
           </div>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav menu">
               <li className="nav-item">
                 <Link className="nav-link active" aria-current="page"  to="/"><i class="bi bi-house-heart-fill"></i> Inicio</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link"  to="/dashboard"><i class="bi bi-file-medical-fill"></i> Dasboard</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link"  to="/mascotas"><i class="bi bi-file-medical-fill"></i> Mascotas</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link"  to="/usuarios"><i class="bi bi-file-medical-fill"></i> Usuarios</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link"  to="/agendar"> <i class="bi bi-calendar-check-fill"></i> Agendar cita</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link"  to="/login"><i class="bi bi-person-fill"></i> Login</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link"  to="/"><i class="bi bi-box-arrow-right"></i> Salir</Link>
               </li>
             </ul>
           </div>
        
         </div>
       </nav>
       
     </div>
     
     </div>
     <span className="dataUserDash">Bienven@ a PetTopia: <b className="logUser">User</b> <i><img src="image/Edit.svg" className="img-fluid" alt=""/></i></span>
    </header>
    </>
  )
}

export default Navbar
