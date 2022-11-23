import NavBar from "./components/NavBar/NavBar";
import FooterSite from "./components/FooterSite";
import { Outlet } from "react-router-dom";

//este es nuestro primer componente
const IndexApp = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <FooterSite />
    </>
  );
};

export default IndexApp;
