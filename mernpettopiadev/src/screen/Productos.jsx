import React from 'react'
import { useState, useEffect } from 'react';

const Productos = () => {

  let url = "http://localhost:3400/products";

  const [prods, setProds] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setProds(result);
    };
    fetchApi();
  }, [url]);
///proloader antes de cargar
  if(prods.length === 0){
    return (
      <div className="alert alert-warning text-center">
         Cargando... 
      </div>
    )
  }


  return (
    <>
        <section className="boxLogin Dashboard">
      <div className="container p-0">
        <div className="row m-0">
          <div className="row">
            <div className="col-md-12 pt-4">
              <div className="boxHistorialServicios p-4">
                <p className="titleHistorial"><i> <img src="./image/wolf.svg" width="50" alt='Mascotas' /> </i> Listado de <b>Productos</b> </p> 
                <hr />
                <div className="listadoHistorial resetHv">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>SKU</th>
                          <th>Name Prod</th>
                          <th>Description</th>
                          <th>Price</th>
                          <th>Stock</th>
                          <th>Available</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {prods.map((prods) => (
                          <tr key={prods._id}>
                            <th>
                              {prods.sku}
                            </th>
                            <td>{prods.name}</td>
                            <td>{prods.description}</td>
                            <td>$ {prods.price}</td> 
                            <td>{prods.stock} /Uds</td> 
                            <td>{
                                prods.stock === 0 ?  (
                                  <small className='alert alert-danger'>No esta disponible</small>
                                ): (
                                  <small> Disponible </small>
                                )
                              } </td> 
                            <td>
                              <div className="actionsIcons">
                              <i className="bi bi-trash"></i>
                              <i className="bi bi-pencil-square"></i>
                              <i className="bi bi-eye"></i>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Productos