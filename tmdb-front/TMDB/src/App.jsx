import { Route, Routes } from "react-router";
import "./app.scss";
import Registro from "./front/components/Registro";
import Login from "./front/components/Login";
import Inicio from "./front/components/Inicio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/user/registro" element={<Registro />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
