import React, { useEffect, useState } from "react";
import "../categoria/categorias.scss";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Registro from "../registro/Registro";
import Categorias from "../categoria/Categorias";
import { useNavigate } from "react-router";

const Inicio = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/me", { withCredentials: true })
      .then((res) => res.data)
      .then((usuario) => {
        if (usuario) setUser(usuario);
      });
  }, []);
  return (
    <div>
      {user.email ? (
        <div>
          <Navbar />
          <Categorias />
        </div>
      ) : (
        <Registro />
      )}
    </div>
  );
};

export default Inicio;
