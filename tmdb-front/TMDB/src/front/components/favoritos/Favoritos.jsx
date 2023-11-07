import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../busqueda/busqueda.scss";
import { useModal } from "../../commons/modal/ModalContext";
import Modal from "../../commons/modal/Modal";

const Favoritos = () => {
  const [peliculas, setPeliculas] = useState([]);
  const { id } = useParams();
  const { openModal } = useModal();
  useEffect(() => {
    axios.get(`http://localhost:5000/api/favoritos/${id}`).then((res) => {
      setPeliculas(res.data);
    });
  }, []);
  const handleModal = (pelicula) => {
    openModal({
      title: pelicula.title,
      image: `https://image.tmdb.org/t/p/w500/${pelicula.favorito.pelicula.image}`,
      description: pelicula.favorito.pelicula.description,
    });
  };
  return (
    <div className="backMovies">
      <Modal />
      {peliculas.length > 0 ? (
        peliculas.map((pelicula) => (
          <div
            key={pelicula.id}
            className="cardBusqueda"
            onClick={() => handleModal(pelicula)}
          >
            {console.log(pelicula)}
            <img
              src={`https://image.tmdb.org/t/p/w500/${pelicula.favorito.pelicula.image}`}
              alt={pelicula.title}
            />
          </div>
        ))
      ) : (
        <div className="busqueda">
          <h1 style={{ color: "white" }}>No se ha encontrado contenido.</h1>
        </div>
      )}
    </div>
  );
};

export default Favoritos;
