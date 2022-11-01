import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
   <>
    <section className="boxLogin">
    <div className="container-fluid p-0">
       <div className="row m-0">
        <div className="col-md-3 h60 justify-content-center d-flex align-items-center leftBox">
            <figure>
                <img src="image/dogwoman.svg" alt="" className="img-fluid" />
            </figure>
            <div className="hoja1"></div>
            <div className="hoja2"></div>
            <div className="hoja3"></div>
        </div>
        <div className="col-md-9 p-0 justify-content-between flex-column d-flex align-items-center">
            <div className="boxForm">
                <h2 className="SubTitle">Iniciar sesión</h2>

                <div className="mb-3">
                    
                    <input type="email" className="form-control" id="user1" placeholder="usuario" />
                  </div>

                  <div className="mb-3">
                    
                    <input type="email" className="form-control" id="pass" placeholder="contraseña" />
                  </div>

                  <div className="col-md-4 mx-auto mt-5 mb-5">
                    <div id="login" className="btn btn-primary mb-3 mx-auto d-block">Ingresar</div>
                  </div>

                  
            </div>
            <div className="boxRegPeludo">
                <div className="cat1">
                    <figure>
                        <img src="image/cat1.png" alt="" className="img fluid" />
                    </figure>
                </div>
                <div className="btnBox"><p>Registra tu peludo <span><Link to="/registro">aquí</Link></span></p></div>
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

export default Login
