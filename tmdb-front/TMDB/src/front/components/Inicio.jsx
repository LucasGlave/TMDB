import React, { useEffect, useState } from "react";
import "./registro.scss";
import axios from "axios";
import Navbar from "./Navbar";
import Registro from "./Registro";

const Inicio = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/me", { withCredentials: true })
      .then((res) => res.data)
      .then((usuario) => {
        if (usuario) setUser(usuario);
      }, []);
  }, []);
  console.log("user", user);
  return (
    <div>
      {user.email ? (
        <div>
          <Navbar />
        </div>
      ) : (
        <Registro />
      )}
    </div>
  );
};

export default Inicio;
