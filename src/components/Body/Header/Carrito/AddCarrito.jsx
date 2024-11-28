import React, { useEffect, useState, useContext } from 'react';
import { CarritoContext } from '../../../context/CarritoContext';

const AddCarrito = ({ producto }) => {
  const [unidades, setUnidades] = useState(1);
  const { carrito, setCarrito } = useContext(CarritoContext);

  const restUnidades = () => {
    if (unidades > 1) {
      setUnidades(unidades - 1);
    }
  };

  const addUnidades = () => {
    if (unidades < producto.stock) {
      setUnidades(unidades + 1);
    }
  };

  const subirCarrito = () => {
    const nuevoProducto = { ...producto, unidades };
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
      // Si el producto ya existe en el carrito, actualiza la cantidad
      const carritoActualizado = carrito.map(item =>
        item.id === producto.id ? { ...item, unidades: item.unidades + unidades } : item
      );
      setCarrito(carritoActualizado);
    } else {
      // Si el producto no existe en el carrito, añádelo
      setCarrito([...carrito, nuevoProducto]);
    }
  };

  useEffect(() => {
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-outline-danger me-2" onClick={restUnidades}>
          <i className="fas fa-minus"></i>
        </button>
        <span id="quantity" className="mx-3 fs-4">{unidades}</span>
        <button className="btn btn-outline-success ms-2" onClick={addUnidades}>
          <i className="fas fa-plus"></i>
        </button>
        <div className="text-center ">
            <button className="btn btn-primary "onClick={subirCarrito}>
            <i className="fas fa-shopping-cart"></i> Go! to cart 
            </button>
        </div>
      </div>
      
    </div>
  )
}

export default AddCarrito