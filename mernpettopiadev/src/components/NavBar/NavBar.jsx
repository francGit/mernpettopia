
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import NavItems from "./NavItems";
import Swal from 'sweetalert2';
import { Link} from "react-router-dom";

const NavBar = () => {

  const context = useContext(AuthContext);
  const {user, isLoading} = context

  const email  = user ? user.email : ''; ////se define el mail siempre y cuando el usaurio este activo

  const handleLogOut = () =>{
    localStorage.removeItem('accesToken')
    window.location.href ='/'
    Swal.fire('Info','Se finalizo la sesión','warning')
  }

  console.log(context)

  //Creacion del array que contiene los datos de los navItems
  const navItemsLeft = [
    { ruta: "/", icono: "bi bi-house", texto: "Home" },  
    isLoading && { ruta: "/dashboard", icono: "bi bi-kanban", texto: "Dashboard" },  
    isLoading && { ruta: "/agendar", icono: "bi bi-calendar2-check", texto: " Agendar" },  
    isLoading && { ruta: "/mascotas", icono: "bi bi-balloon-heart", texto: "Mascotas" },  
    isLoading && { ruta: "/usuarios", icono: "bi bi-bookmark-star", texto: "Usuarios" },  
    isLoading && { ruta: "/registropet", icono: "bi bi-clipboard2-heart", texto: "RegistroPet" },  
  ];

  const navItemsRight = [
    !isLoading && {ruta: "/register", icono: "bi bi-person-lines-fill", texto: "Registro"},
    !isLoading && {ruta: "/login", icono: "bi bi-fingerprint", texto: "Login"}, 
  ]

  return (
    <>
      <nav className="navbar navbar-expand-sm barra">
        <div className="container-fluid">
        <div className="boxLogo">
                  <figure>
                    <img src="image/logo.svg" alt="" className="img-fluid" />
                  </figure>
                </div>
          <ul className="navbar-nav texto-nav">
            {/* usamos el metodo map en el array navItems para renderizar la barra de navegacion */}
            <NavItems items = { navItemsLeft } />
          </ul>
        </div>
        <div className="container-fluid" style={{ justifyContent: 'end' }}>
          <ul className="navbar-nav texto-nav">
            <NavItems items = { navItemsRight } />
          </ul>
          {isLoading &&
            <ul className="navbar-nav texto-nav" style={{alignItems:'center'}}>
              <li key={email}><span className="texto-nav" style={{marginRight:'7px'}}> {email} </span></li>
              <Link className='nav-link' onClick={ handleLogOut }><i className="bi bi-box-arrow-in-right"></i> Salir </Link>
            </ul>
          }
        </div>
      </nav>
    </>
  );
};

export default NavBar;
