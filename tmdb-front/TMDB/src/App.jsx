import { Route, Routes } from "react-router";
import "./app.scss";
import Registro from "./front/components/registro/Registro";
import Login from "./front/components/login/Login";
import Inicio from "./front/components/inicio/Inicio";
import Busqueda from "./front/components/busqueda/Busqueda";
import { ModalProvider } from "./front/commons/modal/ModalContext";
import Modal from "./front/commons/modal/Modal";

function App() {
  return (
    <div>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/user/registro" element={<Registro />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/busqueda/:busqueda" element={<Busqueda />} />
        </Routes>
      </ModalProvider>
    </div>
  );
}

export default App;
