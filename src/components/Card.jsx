import { useState } from "react";
import "../styles/card.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ imagen, titulo, descripcion, precio, id, handleAgregar, handleQuitar }) => {
  const [added, setAdded] = useState(false);

  const agregarCarrito = () => {
    handleAgregar();
    setAdded(true);
  };

  const quitarCarrito = () => {
    handleQuitar();
    setAdded(false);
  };
  
  console.log(id);

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>

        {added ? (
          <button
            type="button"
            className="boton-quitar"
            onClick={quitarCarrito}
          >
            Quitar del Carrito
          </button>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={agregarCarrito}
          >
            Agregar al Carrito
          </button>
        )}
      </div>
    </div>
  );
};
