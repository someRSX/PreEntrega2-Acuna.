import React from 'react';
import { useParams } from 'react-router-dom';

function DetalleProducto() {
  const { itemId } = useParams();

  return (
    <div>
      <h1>Detalle del Producto {itemId}</h1>
      {}
    </div>
  );
}

export default DetalleProducto;