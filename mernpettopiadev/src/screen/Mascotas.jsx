import React, { useState, useEffect } from "react";
import { base_url, api_version } from "../constants/uriBase";
import ListPets from "../components/ListPets";


const Mascotas = () => {

  const [listpets, setListpets] = useState([]);
  const url_api = `${base_url}/${api_version}/getAllPets`;
  const fetchPets = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setListpets(data.pets))
      .catch((error) => console.log(error)); 
  };

  useEffect(() => {   
    fetchPets(url_api);
  }, [url_api]);



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
                          <ListPets petslist={listpets} />
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