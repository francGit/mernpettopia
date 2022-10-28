import React from 'react'

export const Navbar = () => {

 

  return (
    <>
    <header id='header'>
    <div className="container">
     
     <div className="boxNav">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid  ">
           <div className="boxLogo">
             <figure>
               <img src="image/logo.svg" alt="" className="img-fluid"></img>
             </figure>
           </div>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <span className="dataUserDash">Bienven@ a PetTopia: <b className="logUser">User</b> <i><img src="image/Edit.svg" className="img-fluid" alt=""></img></i></span>
             <ul className="navbar-nav menu">
               <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="./#inicio">Inicio</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="./#servicios">Servicios</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="./#equipo">Equipo</a>
               </li>
             </ul>
             <div className="boxLog">
             <ul>
             <li className="btnlogin">
             <a href="login.html"><i> <img src="image/user.svg" alt="" className="img-fluid"></img></i> </a>
           </li>
               <li className="btnexit">
                 <a href="index.html"><i> <img src="image/exit.svg" alt="" className="img-fluid"></img></i> </a>
               </li>
             <li className="btnagendar">
              <a href="agendar.html"><span>Agendar cita</span> </a>
              </li> 
             </ul>
           </div>
           </div>
        
         </div>
       </nav>
     </div>
     
     </div>
    </header>
    </>
  )
}
