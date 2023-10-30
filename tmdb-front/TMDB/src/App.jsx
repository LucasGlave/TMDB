import { Route, Routes } from "react-router";
import "./app.scss";
import Registro from "./front/components/Registro";
import Login from "./front/components/Login";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<h1>Hola</h1>} /> */}
        <Route path="/" element={<Registro />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
