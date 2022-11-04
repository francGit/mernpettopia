import React, { useEffect, useState } from "react";

const Users = () => {

  let url = "http://localhost:3200/customers";

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setUsers(result);
    };
    fetchApi();
  }, [url]);
///proloader antes de cargar
  if(users.length === 0){
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
                  <p className="titleHistorial">
                    <i>
                      {" "}
                      <img src="./image/userDash.svg" width="60" alt="" />{" "}
                    </i>{" "}
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
                          <th>Pet</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id}>
                            <th>893776353</th>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>Rufus</td>
                            <td>
                              <div className="actionsIcons">
                              <i class="bi bi-trash"></i>
                              <i class="bi bi-pencil-square"></i>
                              <i class="bi bi-eye"></i>
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
  );
};

export default Users;
