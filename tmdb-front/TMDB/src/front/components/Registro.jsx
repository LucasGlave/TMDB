import React, { useState } from "react";
import axios from "axios";
import "./registro.scss";
import Login from "./Login";
import { Link } from "react-router-dom";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    repContraseña: "",
  });

  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (
      !formData.nombre ||
      !formData.apellido ||
      !formData.email ||
      !formData.contraseña ||
      !formData.repContraseña
    ) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    if (formData.contraseña !== formData.repContraseña) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    axios
      .post(`http://localhost:5000/api/user/register`, formData)
      .then((response) => {
        setUserId(response.data.id);
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          contraseña: "",
          repContraseña: "",
        });
        alert("Registro exitoso");
        <Login />;
      })
      .catch((error) => {
        setError(
          "Error al registrar. Verifica tus datos e inténtalo nuevamente."
        );
      });
  };

  return (
    <div className="back">
      <img src="../../../4.png" alt="logo"></img>
      <div className="wrapper">
        <h1>REGISTRO</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              value={formData.nombre}
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              value={formData.apellido}
              type="text"
              name="apellido"
              placeholder="Apellido"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              value={formData.email}
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              value={formData.contraseña}
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              value={formData.repContraseña}
              type="password"
              name="repContraseña"
              placeholder="Repetir contraseña"
              onChange={handleInputChange}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="animated-button">
            <span>Registrar</span>
            <span></span>
          </button>
          {/* <button type="submit" className="animated-button"> */}
          <Link className="animated-button" to={"/user/login"}>
            <span style={{ color: "#FFFFFF" }}>Iniciar Sesión</span>
            <span></span>
          </Link>
          {/* </button> */}
        </form>
      </div>
    </div>
  );
};

export default Registro;
