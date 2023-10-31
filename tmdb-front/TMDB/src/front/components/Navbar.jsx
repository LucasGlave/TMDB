import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const clickBoton = () => {
    axios.post("http://localhost:5000/api/user/logout");
  };
  return (
    <div
      className="nav"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2rem",
        height: "4rem",
      }}
    >
      <img
        src="../../../public/4.png"
        alt="logo"
        width={"100px"}
        height={"100px"}
      />
      <input
        placeholder="Buscar película"
        className="input"
        name="text"
        type="text"
      ></input>
      <Link
        to={"/user/login"}
        onClick={clickBoton}
        className="cssbuttons-io-button"
      >
        Cerrar sesión
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
