// import React, { useState } from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
const Registro = () => {

  
  const  [inputs, setInputs] = useState({
    nameanimal:"",
    typeanimal: "",
    racetype:"",
    years:"",
    owner:"",
    identification:"",
    phone:"",
    email:"",
    address:"",
    country:"",
    city:"",
    file:"",
    commit:""
  });
  
  const handleSubmit = (e) =>{
   e.preventDefault();
   console.log('controlado');
   console.log(inputs);
  }

 const handleInputs = (e) => {
  e.preventDefault();
  const {target} = e;
  setInputs(
    {
      ...inputs,
    [target.name] : target.value
    }
  )
  console.log(target.value);
 }

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

               <form action='' onSubmit={handleSubmit}>
               <div className="mb-3">  

                    <input type="text" onChange={handleInputs} className="form-control" id="namedog" name='nameanimal' placeholder="Nombre del peludo" value={inputs.nameanimal} />
                  </div>
                  <div className="mb-3">
                  <select className="form-select" name='typeanimal' onChange={handleInputs} value={inputs.typeanimal}>
                    <option value="noselected">Mi peludo es</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option> 
                  </select>
                 
                    </div>
                  <div className="mb-3">
                    
                    <input type="text" onChange={handleInputs} className="form-control" id="raza" placeholder="Raza" name='racetype' value={inputs.racetype}/>
                  </div>

                  <div className="mb-3">
                    
                    <input type="text" onChange={handleInputs} className="form-control" id="years" placeholder="¿Cuantos años tiene el peludo?"  name='years' value={inputs.years}/>
                  </div>
                  <div className="mb-3">
                    
                    <input type="text" onChange={handleInputs} className="form-control" id="owner" name='owner' placeholder="Nombre del dueño" value={inputs.owner}/>
                  </div>
                  <div className="mb-3">
                    
                    <input type="text" onChange={handleInputs} className="form-control" id="cc" name='identification' placeholder="Cédula del dueño" value={inputs.identification} />
                  </div>
                  <div className="mb-3">
                    
                    <input type="text" onChange={handleInputs} className="form-control" id="tel" name='phone' placeholder="Teléfono" value={inputs.phone}/>
                  </div>
                  <div className="mb-3">
                    
                    <input type="email" onChange={handleInputs} className="form-control" id="email" placeholder="Email" name='email' value={inputs.email} />
                  </div>
                  <div className="mb-3">
                    
                    <input type="text" onChange={handleInputs} className="form-control" id="dir" placeholder="Dirección" name='address' value={inputs.address} />
                  </div>
                  
                  <div className="mb-3">
                    <input type="text" onChange={handleInputs} className="form-control" id="pais" placeholder="País" name='country' value={inputs.country} />
                  </div>
                  <div className="mb-3">
                    
                    <input type="text" onChange={handleInputs} className="form-control" id="cuidad" placeholder="Ciudad" name='city' value={inputs.city}/>
                  </div>

                  <div className="mb-3 text-center">
                    <input onChange={handleInputs} className="form-control" type="file" id="formFile" name='file' value={inputs.file} />
                  </div>

                  <div className="mb-3">
                    <textarea onChange={handleInputs} className="form-control" id="textarea" rows="3" placeholder="Recomendaciones del dueño" name='commit' value={inputs.commit}></textarea>
                  </div>
                  
                  <div className="col-md-5 mx-auto mt-5 mb-5">
                    <button type='submit' className="btn btn-primary mb-3 mx-auto d-block pt-3 pb-3" id="registro" onClick={handleSubmit}> Registrar peludo</button>
                  </div>

               </form>
                  
                  
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
