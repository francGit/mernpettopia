import React from 'react'
import {Link} from 'react-router-dom'
import ItemHistorialDashBorad from '../components/ItemHistorialDashBorad'

import '../screen/DashBoard.css'
const DashBoard = () => {
  return (
    <>
      <section className="boxLogin Dashboard pb-5">
      <div className="container p-0">
        <div className="row m-0">
          <div className="row">
            <div className="col-md-5 pt-4">
              <div className="boxProfile p-4">
                <div className="row">
                  <div className="col-md-3">
                    <div className="boxImgProfile">
                      <img src="image/rufu.jpg" alt="" className="avatar" />
                    </div>

                  </div>
                  <div className="col-md-9">
                    <div className="boxUserNameDash">
                      <h2>Rufus</h2> <i><img src="image/Edit.svg" className="img-fluid" alt="" /></i>
                    </div>
                    <hr className="mt-3" />
                    <ul className="datPet pt-4">
                      <li>
                        Tengo: <b>5 años</b>
                      </li>
                      <li>
                        Soy de raza: <b>Chauchau</b>
                      </li>
                      <li>Vivo en: <b>Bogota - Colombia</b></li>
                      <li>Soy mienbro de PetTopia hace: <b>5 años</b></li>
                    </ul>
                    <Link to="/agendar" className="btn btn-info"> Agendar cita</Link>
                    <hr className="mt-3" />
                  </div>
                </div>
              </div>
              <div className="boxDateToday">
                <div className="dateBox p-3">
                  <p><i> <img src="image/Calendar.svg" alt="" className="img-fluid" /> </i> Fecha actual: <b>2022 / sábado</b>
                  </p>
                  <h2 className="datActual">12 OCT</h2>
                </div>
                <div className="nextBoxDate p-3">
                  <h3>Próxima visita:</h3>
                  <p>Viernes <b>20 de octubre</b></p>
                  <p>Hora: <b>2:30 p. m.</b></p>
                  <span className="cancelarCita text-center mx-auto d-block mt-2">Cancelar domicilio <i><img
                        src="image/cancel.svg" alt="" className="img fluid" /></i></span>
                </div>
              </div>

            </div>
            <div className="col-md-7 pt-4">
              <div className="boxHistorialServicios p-4">
                <p className="titleHistorial">Historial servicios de <b>Rufus</b></p>
                <hr />
                <div className="listadoHistorial">
                  <ul>
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Perrito' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                  <ItemHistorialDashBorad service='Baño de gato' dateHistory='viernes 12 / OCT / 22  / 10:30am' />
                
                  </ul>
                </div>
              </div>
             
            </div> 
          </div> 
        </div>
      </div>


    </section> 
    </>
  )
}

export default DashBoard
