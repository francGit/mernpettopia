import React from 'react';

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
                       <div className="itemSlide">
                           <img src="image/delivery.svg" alt="" className="img-fluid pt-5 mt-4" ></img>
                       </div>
                         <div className="itemSlide">
                             <img src="image/imgslider.svg" alt="" className="img-fluid"></img>
                         </div>
                       
                   </div>
                   <ul className="arrowSlide1">
                  <li>
                     <img src="image/arrow-left-circle.svg" className="prev" alt=""></img>
                  </li>
                  <li>
                     <img src="image/arrow-r-circle.svg" className="next" alt=""></img>
                  </li>
                   </ul>
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
                     {/* <!-- item 1--> */}
                     <div className="itemServicio">
                         <div className="boxItem">
                             <div className="boxIcon">
                                 <figure>
                                     <img src="image/Bano_y_peluqueria.svg" alt="" className="img-fluid"></img>
                                 </figure>
                             </div>
                             <div className="boxTexto">
                                 <h2>Baño y peluquería</h2>
                             </div>
                         </div>
                     </div>
                     {/* <!-- fin item 1-->
                     <!-- item 2--> */}
                     <div className="itemServicio">
                         <div className="boxItem">
                             <div className="boxIcon">
                                 <figure>
                                     <img src="image/vacunacion.svg" alt="" className="img-fluid"></img>
                                 </figure>
                             </div>
                             <div className="boxTexto">
                                 <h2>Vacunación</h2>
                             </div>
                         </div>
                     </div>
                     {/* <!-- fin item 2-->
                     <!-- item 3--> */}
                     <div className="itemServicio">
                         <div className="boxItem">
                             <div className="boxIcon">
                                 <figure>
                                     <img src="image/Servicios_dentales.svg" alt="" className="img-fluid"></img>
                                 </figure>
                             </div>
                             <div className="boxTexto">
                                 <h2>Profilaxis</h2>
                             </div>
                         </div>
                     </div>
                     {/* <!-- fin item 3-->
                     <!-- item 4--> */}
                     <div className="itemServicio">
                         <div className="boxItem">
                             <div className="boxIcon">
                                 <figure>
                                     <img src="image/Guarderia_y_hotel.svg" alt="" className="img-fluid"></img>
                                 </figure>
                             </div>
                             <div className="boxTexto">
                                 <h2>Guarderia y hotel</h2>
                             </div>
                         </div>
                     </div>
                     {/* <!-- fin item 4-->
                     <!-- item 5--> */}
                     <div className="itemServicio">
                         <div className="boxItem">
                             <div className="boxIcon">
                                 <figure>
                                     <img src="image/Atencion_de_urgencias.svg" alt="" className="img-fluid"></img>
                                 </figure>
                             </div>
                             <div className="boxTexto">
                                 <h2>Urgencias</h2>
                             </div>
                         </div>
                     </div>
                     {/* <!-- fin item 5-->
                     <!-- item 6--> */}
                     <div className="itemServicio">
                         <div className="boxItem">
                             <div className="boxIcon">
                                 <figure>
                                     <img src="image/on_demand_icon.svg" alt="" className="img-fluid"></img>
                                 </figure>
                             </div>
                             <div className="boxTexto">
                                 <h2>Servicios en casa</h2>
                             </div>
                         </div>
                     </div>
                     {/* <!-- fin item 6-->
                     <!-- item 7--> */}
                     <div className="itemServicio">
                         <div className="boxItem">
                             <div className="boxIcon">
                                 <figure>
                                     <img src="image/ConsultaGeneral.svg" alt="" className="img-fluid"></img>
                                 </figure>
                             </div>
                             <div className="boxTexto">
                                 <h2>Consulta general</h2>
                             </div>
                         </div>
                     </div>
                     {/* <!-- fin item 7-->
                     <!-- item 8--> */}
                     <div className="itemServicio">
                         <div className="boxItem">
                             <div className="boxIcon">
                                 <figure>
                                     <img src="image/Tratamientos_de_heridas.png" alt="" className="img-fluid"></img>
                                 </figure>
                             </div>
                             <div className="boxTexto">
                                 <h2>Tratamientos de heridas</h2>
                             </div>
                         </div>
                     </div>
                     {/* <!-- fin item 8-->
                     <!-- item 9--> */}
                     <div className="itemServicio">
                         <div className="boxItem">
                             <div className="boxIcon">
                                 <figure>
                                     <img src="image/Laboratorio.svg" alt="" className="img-fluid"></img>
                                 </figure>
                             </div>
                             <div className="boxTexto">
                                 <h2>Exámenes de laboratorio</h2>
                             </div>
                         </div>
                     </div>
                     {/* <!-- fin item 9-->
                     <!-- item 10--> */}
                     <div className="itemServicio">
                         <div className="boxItem">
                             <div className="boxIcon">
                                 <figure>
                                     <img src="image/Cirugia.svg" alt="" className="img-fluid"></img>
                                 </figure>
                             </div>
                             <div className="boxTexto">
                                 <h2>Cirugía</h2>
                             </div>
                         </div>
                     </div>
                     {/* <!-- fin item 10--> */}
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