import React, { useState, useEffect } from "react";
import { base_url, api_version } from "../constants/uriBase";
import ListUsers from "../components/ListUsers";

const Users = () => {
  const [listusers, setListusers] = useState([]);
  const url_api = `${base_url}/${api_version}/getAllUsers`;
  const fetcUsers = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setListusers(data.docs))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetcUsers(url_api);
  }, [url_api]);

  return (
    <section className="boxLogin Dashboard">
      <div className="container p-0">
        <div className="row m-0">
          <div className="row">
            <div className="col-md-12 pt-4">
              <div className="boxHistorialServicios p-4">
                <p className="titleHistorial">
                  <i>
                    <img src="./image/userDash.svg" width="60" alt="" />{" "}
                  </i>
                  Listado de <b>Usuarios</b>
                </p>
                <hr />
                <div className="listadoHistorial resetHv">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#C.c</th>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Phone</th> 
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ListUsers characters={listusers}/>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
