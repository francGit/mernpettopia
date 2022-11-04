import React from 'react'
import {Link} from 'react-router-dom'
const Agendar = () => {

     
  return (
    <>
        <section className="boxLogin agendar">
      <div className="container p-0">
        <div className="row m-0">

          <div className="col-md-12 mx-auto p-0 justify-content-between flex-column d-flex align-items-center">
            <div className="boxForm ">
              <h2 className="SubTitle">Agendar servicio a Domicilio </h2>
              <div className="row pt-2">

                <div className="col-md-6 p-5">
                  <div className="mb-3">
                    <label for="fecha" className="form-label">Fecha de la Cita:</label>
                    <input type="date" className="form-control" id="fecha" placeholder="Fecha de la Cita:" />
                  </div>
                  <div className="mb-3">
                    <label for="servicio" className="form-label">Servicio:</label>
                    <select className="form-select" aria-label="" id="servicio" name='servicio'>
                      <option selected>Selecciona una opción</option>
                      <option value="1">Baño y peluquería</option>
                      <option value="2">Vacunación</option>
                      <option value="3">Profilaxis</option>
                      <option value="4">Guarderia y hotel</option>
                      <option value="5">Urgencias</option>
                      <option value="5">Cuidador</option>
                      <option value="6">Consulta general </option>
                      <option value="7">Tratamientos de heridas</option>  
                    </select>
                  </div>
                
                </div>
                <div className="col-md-6 p-5">
                  <div className="mb-3">
                    <label for="hora" className="form-label">Hora:</label>
                    <input type="time" className="form-control" id="hora" placeholder="Fecha de la Cita:" name='hora' />
                  </div>
                  <div className="mb-3">
                    <label for="profesional" className="form-label">Profesional:</label>
                    <select className="form-select" aria-label="" id="profesional" name='profesional'>
                      <option selected>Selecciona una opción</option>
                      <option value="1">Juan mecanico / veterinario</option>
                      <option value="2">Carlos Bustos / recreacionista canino</option> 
                      <option value="2">Andres silva / cirujano plastico</option> 
                    </select>
                  </div> 
                </div>

                <div className="col-md-12">
                   
                  <div >
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                      placeholder="Recomendaciones"></textarea>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-3 mx-auto mt-5 mb-5">
                  <div className="btn btn-primary mb-3 d-block pt-3 pb-3" id="agendar"> Agendar</div>
                </div>
              </div>
 
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="boxRegPeludo">
          <div className="btnBox">
            <p>Volver al dashboard <span><Link to="/dashboard">aquí</Link></span></p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Agendar
