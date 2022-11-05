import React from "react";

const Equipo = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center"> 
      <div className="col-md-5">
      <img src="./image/partner.svg" width="100%" alt="Error 404" />
      </div>
      <div className="col-md-7">
      <h1>Equipo: </h1>
        <ul className="listaEquipo">
          <li>
            <div className="boxList">
              <i>
                <img src="image/dog3.png" alt="" className="img-fluid" width={40} /> Francisco
                Jose Muñeton
              </i>
            </div>
          </li>
          <li>
            <div className="boxList">
              <i>
                <img src="image/dog3.png" alt="" className="img-fluid" width={40}  /> Milton
                Andres Silva Nieto
              </i>
            </div>
          </li>
          <li>
            <div className="boxList">
              <i>
                <img src="image/dog3.png" alt="" className="img-fluid" width={40}  /> Alexander
                Acosta
              </i>
            </div>
          </li>
          <li>
            <div className="boxList">
              <i>
                <img src="image/dog3.png" alt="" className="img-fluid" width={40}  /> Oscar
                Eduardo Saavedra
              </i>
            </div>
          </li>
        </ul>
       
      </div>  
       
      </div>
    </div>
    
  );
};

export default Equipo;
