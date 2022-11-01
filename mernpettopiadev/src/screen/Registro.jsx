import React from 'react'
import {Link} from 'react-router-dom'
const Registro = () => {
  return (
    <>
          <section className="boxLogin">
    <div className="container-fluid p-0">
       <div className="row m-0">
        <div className="col-md-3 h60 justify-content-center d-flex align-items-center leftBox regLeft">
            <figure>
                <img src="image/imgslider.svg" alt="" className="img-fluid" />
            </figure>
            <div className="hoja1"></div>
            <div className="hoja2"></div>
            <div className="hoja3"></div>
        </div>
        <div className="col-md-9 p-0 justify-content-between flex-column d-flex align-items-center">
            <div className="boxForm">
                <h2 className="SubTitle">Registra tu Peludo</h2>

                <div className="mb-3">  
                    <input type="text" className="form-control" id="namedog" placeholder="Nombre del peludo" />
                  </div>
                  <div className="mb-3">
                      
                    <select className="form-select" aria-label="Mi peludo es:" id="tipo">
                        <option selected>Mi peludo es:</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                      </select>
                    </div>
                  <div className="mb-3">
                    
                    <input type="text" className="form-control" id="raza" placeholder="Raza" />
                  </div>

                  <div className="mb-3">
                    
                    <input type="text" className="form-control" id="years" placeholder="¿Cuantos años tiene el peludo?" />
                  </div>
                  <div className="mb-3">
                    
                    <input type="text" className="form-control" id="amo" placeholder="Nombre del dueño" />
                  </div>
                  <div className="mb-3">
                    
                    <input type="text" className="form-control" id="cc" placeholder="Cédula del dueño" />
                  </div>
                  <div className="mb-3">
                    
                    <input type="text" className="form-control" id="tel" placeholder="Teléfono" />
                  </div>
                  <div className="mb-3">
                    
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    
                    <input type="text" className="form-control" id="dir" placeholder="Dirección" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="pais" placeholder="País" />
                  </div>
                  <div className="mb-3">
                    
                    <input type="text" className="form-control" id="cuidad" placeholder="Ciudad" />
                  </div>

                  <div className="mb-3 text-center">
                    <input className="form-control" type="file" id="formFile" />
                  </div>

                  <div className="mb-3">
                    <textarea className="form-control" id="textarea" rows="3" placeholder="Recomendaciones del dueño"></textarea>
                  </div>
                  
                  <div className="col-md-5 mx-auto mt-5 mb-5">
                    <div className="btn btn-primary mb-3 mx-auto d-block pt-3 pb-3" id="registro"> Registrar peludo</div>
                  </div>
                  
                  
                </div>
                <div className="boxRegPeludo">
                <div className="cat1">
                    <figure>
                        <img src="image/cat1.png" alt="" className="img fluid" />
                    </figure>
                </div>
                <div className="btnBox"><p>Volver al inicio<span><Link to="/login"> aquí</Link></span></p></div>
                <div className="dog1">
                    <figure>
                        <img src="image/dog1.png" alt="" className="img fluid" />
                    </figure>
                </div>
            </div>
        </div>
       </div>
    </div>
   </section>
    </>
  )
}

export default Registro
