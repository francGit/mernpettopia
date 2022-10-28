import React from 'react'

export const Navbar = () => {

 

  return (
    <>
    <header id='header'>
    <div class="container">
     
     <div class="boxNav">
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container-fluid  ">
           <div class="boxLogo">
             <figure>
               <img src="image/logo.svg" alt="" class="img-fluid"></img>
             </figure>
           </div>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNav">
             <span class="dataUserDash">Bienven@ a PetTopia: <b class="logUser">User</b> <i><img src="image/Edit.svg" class="img-fluid" alt=""></img></i></span>
             <ul class="navbar-nav menu">
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="./#inicio">Inicio</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="./#servicios">Servicios</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="./#equipo">Equipo</a>
               </li>
             </ul>
             <div class="boxLog">
             <ul>
             <li class="btnlogin">
             <a href="login.html"><i> <img src="image/user.svg" alt="" class="img-fluid"></img></i> </a>
           </li>
               <li class="btnexit">
                 <a href="index.html"><i> <img src="image/exit.svg" alt="" class="img-fluid"></img></i> </a>
               </li>
             <li class="btnagendar">
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
