// import React, { useState } from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import {createUser} from "../api/userApi";
const Registro = () => {

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    identification: '',
    password: '',
    phone: '',
    email: '',
    address: '',
    country: '',
    city: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createUser(inputs); 
    alert(result.message)
    console.log(result);
    
    // setInputs({
    //   firstName: '',
    //   lastName: '',
    //   identification: '',
    //   password: '',
    //   phone: '',
    //   email: '',
    //   address: '',
    //   country: '',
    //   city: ''
    // })
    

    console.log(inputs);
  };

  const handleInputs = (e) => {
    e.preventDefault();
    const { target } = e;
    setInputs({
      ...inputs,
      [target.name]: target.value,
    });
    console.log(target.value);
  };

  return (
    <>
      <section className="boxLogin">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-md-3 h60 justify-content-center d-flex align-items-center leftBox regLeft">
              <figure>
                <img src="image/product.svg" alt="" className="img-fluid w-100"  />
              </figure>
              <div className="hoja1"></div>
              <div className="hoja2"></div>
              <div className="hoja3"></div>
            </div>
            <div className="col-md-9 p-0 justify-content-between flex-column d-flex align-items-center">
              <div className="boxForm">
                <h2 className="SubTitle">Datos de usuario</h2>

                <form action="" onSubmit={handleSubmit}>
                 <div className="container">
                 <div className="row px-5">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          onChange={handleInputs}
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder="Primer nombre"
                          value={inputs.firstName}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          onChange={handleInputs}
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          placeholder="Primer apellido"
                          value={inputs.lastName}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="password"
                          onChange={handleInputs}
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={inputs.password}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          onChange={handleInputs}
                          className="form-control"
                          id="cc"
                          name="identification"
                          placeholder="Cédula del dueño"
                          value={inputs.identification}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          onChange={handleInputs}
                          className="form-control"
                          id="tel"
                          name="phone"
                          placeholder="Teléfono"
                          value={inputs.phone}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="email"
                          onChange={handleInputs}
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          name="email"
                          value={inputs.email}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          onChange={handleInputs}
                          className="form-control"
                          id="dir"
                          placeholder="Dirección"
                          name="address"
                          value={inputs.address}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          onChange={handleInputs}
                          className="form-control"
                          id="pais"
                          placeholder="País"
                          name="country"
                          value={inputs.country}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          onChange={handleInputs}
                          className="form-control"
                          id="cuidad"
                          placeholder="Ciudad"
                          name="city"
                          value={inputs.city}
                        />
                      </div>
                    </div>
                  </div>
                 </div>

                
          
                  <div className="col-md-5 mx-auto mt-5 mb-5">
                    <button
                      type="submit"
                      className="btn btn-primary mb-3 mx-auto d-block pt-3 pb-3"
                      id="registro"
                      onClick={handleSubmit}
                    >
                      Registrar usuario
                    </button>
                  </div>
                </form>
              </div>
              <div className="boxRegPeludo">
                <div className="cat1">
                  <figure>
                    <img src="image/cat1.png" alt="" className="img fluid" />
                  </figure>
                </div>
                <div className="btnBox">
                  <p>
                    Volver al inicio
                    <span>
                      <Link to="/login"> aquí</Link>
                    </span>
                  </p>
                </div>
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
  );
};

export default Registro;
