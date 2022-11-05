import React from 'react'
import { useEffect, useState } from 'react';
const Servicios = () => {

  let url = "http://localhost:3400/services";

  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setServices(result);
    };
    fetchApi();
  }, [url]);
  ///proloader antes de cargar
  if (services.length === 0) {
    return (
      <div className="alert alert-warning text-center">
        Cargando...
      </div>
    )
  }


  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5">
          <img src="./image/product.svg" width="100%" alt="Error 404" />
        </div>
        <div className="col-md-7">
          <h1>Servicios: </h1>
          <ul className="listaEquipo">
            {services.map(({_id, name, urlImage, price, description }) => (
              <li key={_id}>
                <div className="boxList">
                  <i>
                    <img src={urlImage} alt="" className="img-fluid" width={40} /> {name}
                  </i>
                </div>
              </li>
            ))} 
          </ul> 
        </div>

      </div>
    </div>
  )
}

export default Servicios