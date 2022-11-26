
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import NavItems from "./NavItems";

const NavBar = () => {

  const context = useContext(AuthContext);
  const {user, isLoading} = context

  console.log(context)

  //Creacion del array que contiene los datos de los navItems
  const navItemsLeft = [
    { ruta: "/", icono: "bi bi-house", texto: "Home" },  
    { ruta: "/dashboard", icono: "bi bi-kanban", texto: "Dashboard" },  
    { ruta: "/agendar", icono: "bi bi-calendar2-check", texto: " Agendar" },  
    { ruta: "/mascotas", icono: "bi bi-balloon-heart", texto: "Mascotas" },  
    { ruta: "/usuarios", icono: "bi bi-bookmark-star", texto: "Usuarios" },  
    { ruta: "/registropet", icono: "bi bi-clipboard2-heart", texto: "RegistroPet" },  
  ];

  const navItemsRight = [
    {ruta: "/register", icono: "bi bi-person-lines-fill", texto: "Registro"},
    {ruta: "/login", icono: "bi bi-fingerprint", texto: "Login"},
    {ruta: "/", icono: "bi bi-box-arrow-in-right", texto: "Salir"}
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
        </div>
      </nav>
    </>
  );
};

export default NavBar;
