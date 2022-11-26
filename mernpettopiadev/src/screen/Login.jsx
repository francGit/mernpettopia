import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';
import { userSignIn } from '../api/userApi';
const Login = () => {

const [inputs, setInputs] = useState({
    email: '',
    password: '',
});

const handleInputs = ({target}) => {
    setInputs({
        ...inputs, 
        [target.name]: target.value
    });
}

const handleLogin = async (e) =>{
    e.preventDefault()
    if(!inputs.email || !inputs.password){
      Swal.fire(
        'Error!',
        'Todos los campos son requeridos',
        'error'
      )
    } else {
      const result = await userSignIn(inputs);
      console.log(result)
      // Swal.fire('!Bienvenido!',`Sr(a). ${inputs.email} `,'success');
       if(result.message){
         Swal.fire('Error', result.message,'error');
        }else{
          ///obtenemos el token y lo agregamos a una variable de almacenamiento local
         localStorage.setItem('accesToken',result.accessToken) 
         Swal.fire('Datos correctos', 'Bienvenid@','success')
          setTimeout(()=>{
            window.location.href = '/dashboard'
          }, 1200);

       }
     
    }
  }


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

             <form onSubmit={handleLogin}>
             <div className="mb-3">
                    
                    <input type="email" onChange={handleInputs} className="form-control" id="email" placeholder="usuario" name="email" value={inputs.email} />
                  </div>

                  <div className="mb-3">
                    
                    <input type="password" onChange={handleInputs} className="form-control" id="password" placeholder="contraseña" name="password" value={inputs.password} />
                  </div>

                  <div className="col-md-4 mx-auto mt-5 mb-5">
                    <button id="login"  className="btn btn-primary mb-3 mx-auto d-block">Ingresar</button> 
                  </div>

             </form>

                  
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
