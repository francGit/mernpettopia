import React from 'react'
import { useState, useEffect } from 'react';

const Mascotas = () => {

  let url = "http://localhost:3400/pets";

  const [pets, setPets] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setPets(result);
    };
    fetchApi();
  }, [url]);
///proloader antes de cargar
  if(pets.length === 0){
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
                <p className="titleHistorial"><i> <img src="./image/pairPet.svg" width="80" alt='Mascotas' /> </i> Listado de <b>Mascotas</b> </p> 
                <hr />
                <div className="listadoHistorial resetHv">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Photo</th>
                          <th>NamePet</th>
                          <th>Raza</th>
                          <th>Type</th>
                          <th>Years</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pets.map((pets) => (
                          <tr key={pets._id}>
                            <th>
                              <div style={{ backgroundImage: `url(${pets.avatarUrl})` }} className="avatarBoxPet" />
                            </th>
                            <td>{pets.namepet}</td>
                            <td>{pets.raza}</td>
                            <td>{pets.tipo}</td> 
                            <td>{pets.anios}</td> 
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

export default Mascotas