import NavBar from "./components/NavBar/NavBar";
import FooterSite from "./components/FooterSite";
import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext";

//este es nuestro primer componente
const IndexApp = () => {
  return (
    <>
    <UserContext>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <FooterSite />
    </UserContext>
    </>
  );
};

export default IndexApp;
