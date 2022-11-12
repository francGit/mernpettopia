 const Users = () => {


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
                          <th>Pet</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                          <tr  >
                            <th>893776353</th>
                            <td>name</td>
                            <td>lastname</td>
                            <td>email</td>
                            <td>phone</td>
                            <td>Rufus</td>
                            <td>
                              <div className="actionsIcons">
                              <i className="bi bi-trash"></i>
                              <i className="bi bi-pencil-square"></i>
                              <i className="bi bi-eye"></i>
                              </div>
                            </td>
                          </tr>
                     
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
