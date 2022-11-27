import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import IndexApp from "../IndexApp";
import Home from "../Home";
import RegisterForm from "../screen/Registro";
import LoginForm from "../screen/Login";
import Dashboard from "../screen/DashBoard";
import RegistroPet from "../screen/RegistroPet";
import RegistroUser from "../screen/CrearUsuario";
import Users from "../screen/Users";
import Agendar from "../screen/Agendar";
import Mascotas from "../screen/Mascotas";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<IndexApp />}>
      ,
      <Route index element={<Home />} />,
      <Route path="/register" element={<RegisterForm />} />,
      <Route path="/login" element={<LoginForm />} />,
      <Route path="/dashboard" element={<Dashboard />} />,
      <Route path="/agendar" element={<Agendar />} />,
      <Route path="/registropet" element={<RegistroPet />} />,
      <Route path="/registrousuario" element={<RegistroUser />} />,
      <Route path="/usuarios" element={<Users />} />,
      <Route path="/mascotas" element={<Mascotas />} />,
    </Route>,
  ])
);
