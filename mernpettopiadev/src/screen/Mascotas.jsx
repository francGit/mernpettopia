import React from 'react' 

const Mascotas = () => {


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
                      
                          <tr >
                            <th>
                              <div style={{ backgroundImage: `url()` }} className="avatarBoxPet" />
                            </th>
                            <td></td>
                            <td></td>
                            <td></td> 
                            <td></td> 
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
  )
}

export default Mascotas