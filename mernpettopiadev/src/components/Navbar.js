import { NavLink } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
 
  const login = () => {
    //request done
   
    setUser({
      id:1,
      nombre:"hellosos"
    });  
    
  };

  const logOut = () =>  setUser(null) ;

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="boxNav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid  ">
                <div className="boxLogo">
                  <figure>
                    <img src="image/logo.svg" alt="" className="img-fluid" />
                  </figure>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav menu">
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nav-link" : "nav-link"
                        }
                        to="/"
                      >
                        <i className="bi bi-house-heart-fill"></i> Inicio
                      </NavLink>
                    </li>
                    

                    {/* valida si usruario esta logueado */}
                    {user ? (
                      <>
                      <li className="nav-item">
                      <NavLink className="nav-link" to="/dashboard">
                        <i className="bi bi-file-medical-fill"></i> Dasboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/mascotas">
                        <i className="bi bi-bookmark-heart-fill"></i> Mascotas
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/regmascota">
                        <i className="bi bi-bag-heart-fill"></i> Registro mascota
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/servicios">
                        <i className="bi bi-award-fill"></i> Servicios
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/usuarios">
                      <i className="bi bi-hand-thumbs-up-fill"></i> Usuarios
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/agendar"> 
                        <i className="bi bi-calendar-check-fill"></i> Agendar cita
                      </NavLink>
                    </li>
                        <li className="nav-item">
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? "nav-link" : "nav-link"
                            }
                            onClick={logOut} to="/"
                          >
                            <i className="bi bi-box-arrow-right"></i> Salir
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <>
                      <li className="nav-item">
                      <NavLink className="nav-link" to="/servicios">
                        <i className="bi bi-file-medical-fill"></i> Servicios
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/equipo">
                        <i className="bi bi-file-medical-fill"></i> Equipo
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contacto">
                        <i className="bi bi-file-medical-fill"></i> Cont??ctenos
                      </NavLink>
                      
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/registro">
                        <i className="bi bi-file-medical-fill"></i> Registro
                      </NavLink>
                    </li>
                        <li className="nav-item">
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? "nav-link" : "nav-link"
                            }
                            onClick={login}
                            to="/dashboard"
                          >
                            <i className="bi bi-person-fill"></i> Login
                          </NavLink>
                        </li>

                      </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {
          user ? (
            <div>
            <span className="dataUserDash">
              Bienven@ a PetTopia: <b className="logUser">{} </b>
              <i>
                <img src="image/Edit.svg" className="img-fluid" alt="" />
              </i>
            </span>
        </div>
          ) : (
           <span> </span>
          )
        }
         
      
      </header>
    </>
  );
};

export default Navbar;
