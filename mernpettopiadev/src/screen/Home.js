import React from 'react';
import HeroSlide from '../components/HeroSlide';
import ProductSlider from '../components/ProductSlider';

const Home = () => {
  return (
    <>
   
    {/* <!-- main --> */}
 <main>
     {/* <!-- ini hero --> */}
     
     <div id="inicio" className="hero">
         <div className="container">
             <div className="row">
                 <div className="col-md-7">
                     <h1><strong>Bienestar</strong> para los peludos al alcance de todos los petlovers</h1>
                     <p>
                         Baño y peluquería - Guardería - Consulta - Profilaxis
                     </p>
                 </div>
                 <div className="col-md-5">
                   <div className="boxSliderHero">
                    <HeroSlide />
                      
                       
                   </div>
              
                 </div>
             </div>
         </div>
     </div>
     {/* <!-- fin hero -->
     <!-- ini servicios --> */}
     <section id="servicios" className="servicios">
         <div className="container">
             <div className="row justify-content-center">
                 <div className="col-md-5">
                     <h2 className="SubTitle">Nuestros Servicios</h2>
                 </div>
                 <div className="col-md-5">
                     <p className="leadText">En PetTopia ofrecemos todos los servicios veterinarios a domicilio para tu peludo.</p>
                 </div>
             </div>
             <div className="row">
                
                 <div className="sliderServicios">
                    <ProductSlider/> 
                 </div>
             </div>
         </div>
     </section>
     {/* <!-- ini servicios --> */}

     {/* <!-- ini equipo --> */}
     <section id="equipo" className="equipo">
         <div className="container">
             <div className="row justify-content-center align-items-center">
                 <div className="col-md-5">
                     <h2 className="SubTitle">Nuestro Equipo de Desarrollo</h2>
                 </div>
                 <div className="col-md-5">
                     <figure className="mt-5">
                         <img src="image/dog2.png" alt="" className="img-fluid d-block mx-auto"></img>
                     </figure>
                 </div>                    
             </div>
             <div className="row justify-content-center align-items-center">
                 <div className="col-md-5">
                     <figure>
                         <img src="image/cat2.png" alt="" className="img-fluid d-block mx-auto"></img>
                     </figure>
                 </div>                    
                 <div className="col-md-5">
                     <ul className="listaEquipo">
                         <li>
                             <div className="boxList">
                                 <i><img src="image/dog3.png" alt="" className="img-fluid"></img> Francisco Jose Muñeton</i>
                             </div>
                         </li>
                         <li>
                             <div className="boxList">
                                 <i><img src="image/dog3.png" alt="" className="img-fluid"></img> Milton Andres Silva Nieto</i>
                             </div>
                         </li>
                         <li>
                             <div className="boxList">
                                 <i><img src="image/dog3.png" alt="" className="img-fluid"></img> Alexander Acosta</i>
                             </div>
                         </li>
                         <li>
                             <div className="boxList">
                                 <i><img src="image/dog3.png" alt="" className="img-fluid"></img> Oscar Eduardo Saavedra</i>
                             </div>
                         </li>
                     </ul>
                     <h3 className="extraTitulo">Grupo 32 / Ciclo 4</h3>
                 </div>
             </div>
         </div>
     </section>
     {/* <!-- ini equipo --> */}

 </main>
 {/* <!-- fin main --> */}
 </>
  )
}

export default Home;