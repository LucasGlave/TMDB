import React, { useState } from "react";
import axios from "axios";
import "./registro.scss";

const Login = () => {
  const [error, setError] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const [formData, setFormData] = useState({
    email: "",
    contraseña: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.contraseña) {
      setError("Por favor, complete todos los campos.");
      return;
    }
    axios
      .post(`http://localhost:5000/api/user/login`, formData)
      .then((response) => {
        setUserId(response.data.id);
        setFormData({
          email: "",
          contraseña: "",
        });
        alert("Logueado");
      })
      .catch((error) => {
        setError(
          "Error al loguear. Verifica tus datos e inténtalo nuevamente."
        );
      });
  };
  return (
    <div className="back">
      <img src="../../../4.png" alt="logo"></img>
      <div className="wrapper">
        <h1>Inicio de sesión</h1>
        <form onSubmit={onSubmit}>
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="animated-button">
            <span>Iniciar sesión</span>
            <span></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
