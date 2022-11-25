// import React, { useState } from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
const Registro = () => {
  const [inputs, setInputs] = useState({
    nameanimal: "",
    typeanimal: "",
    racetype: "",
    years: "",
    file: "",
    commit: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("controlado");
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
                <img src="image/imgslider.svg" alt="" className="img-fluid" />
              </figure>
              <div className="hoja1"></div>
              <div className="hoja2"></div>
              <div className="hoja3"></div>
            </div>
            <div className="col-md-9 p-0 justify-content-between flex-column d-flex align-items-center">
              <div className="boxForm">
                <form action="" onSubmit={handleSubmit}>
                  <h2 className="SubTitle">Datos de tu peludo</h2>
                  <div className="container">
                  <div className="row px-5">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          onChange={handleInputs}
                          className="form-control"
                          id="namedog"
                          name="nameanimal"
                          placeholder="Nombre del peludo"
                          value={inputs.nameanimal}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <select
                          className="form-select"
                          name="typeanimal"
                          onChange={handleInputs}
                          value={inputs.typeanimal}
                        >
                          <option value="noselected">Mi peludo es</option>
                          <option value="perro">Perro</option>
                          <option value="gato">Gato</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          onChange={handleInputs}
                          className="form-control"
                          id="raza"
                          placeholder="Raza"
                          name="racetype"
                          value={inputs.racetype}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          onChange={handleInputs}
                          className="form-control"
                          id="years"
                          placeholder="¿Cuantos años tiene el peludo?"
                          name="years"
                          value={inputs.years}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 text-center">
                        <input
                          onChange={handleInputs}
                          className="form-control"
                          type="file"
                          id="formFile"
                          name="file"
                          value={inputs.file}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">

                      <div className="mb-3">
                        <textarea
                          onChange={handleInputs}
                          className="form-control"
                          id="textarea"
                          rows="3"
                          placeholder="Recomendaciones del dueño"
                          name="commit"
                          value={inputs.commit}
                        ></textarea>
                      </div>

                    </div>
                  </div>
 
                  </div>
                  <div className="col-md-5 mx-auto mt-5 mb-5">
                    <button
                      type="submit"
                      className="btn btn-primary mb-3 mx-auto d-block pt-3 pb-3"
                      id="registro" 
                    >
                      Registrar datos
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
