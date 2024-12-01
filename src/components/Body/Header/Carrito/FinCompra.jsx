import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../../context/CarritoContext';
import { db } from '../../../../Data/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

function FinCompra() {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [compra, setCompra] = useState({});
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); // Crear instancia de useNavigate
  const precioTotal = carrito.reduce((total, item) => total + item.precio * item.unidades, 0);

  const enviar = async (data) => {
    const nuevaCompra = {
      carrito: carrito,
      datosFacturacion: data,
      total: precioTotal,
      fecha: new Date()
    };
    setCompra(nuevaCompra);

    try {
      const docRef = await addDoc(collection(db, "compras"), nuevaCompra);
      console.log("Documento agregado con ID: ", docRef.id);
      // Redirigir a la página de Factura y pasar el ID del documento
      navigate(`/factura/${docRef.id}`);
    } catch (error) {
      console.error("Error al agregar el documento: ", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Datos de facturación</h2>
          <form onSubmit={handleSubmit(enviar)}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" id="nombre" className="form-control" {...register('nombre')} />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input type="text" id="apellido" className="form-control" {...register('apellido')} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" {...register('email')} />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <input type="tel" id="telefono" className="form-control" {...register('telefono')} />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">Dirección</label>
              <input type="text" id="direccion" className="form-control" {...register('direccion')} />
            </div>
            <div className="mb-3">
              <label className="form-label">Método de Pago</label>
              <div>
                <input type="radio" id="efectivo" value="efectivo" {...register('metodoPago')} />
                <label htmlFor="efectivo" className="form-label">Efectivo</label>
              </div>
              <div>
                <input type="radio" id="tarjeta" value="tarjeta" {...register('metodoPago')} />
                <label htmlFor="tarjeta" className="form-label">Tarjeta</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mx-2">Procesar compra</button>
            <button type="button" className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
          </form>
          
        </div>
        <div className="col-md-3">
          <h2>Resumen de la compra</h2>
          <ul className="list-group">
            {carrito.map((item) => (
              <li key={item.id} className="list-group-item">
                {item.nombre} - {item.unidades} x ${item.precio}
              </li>
            ))}
          </ul>
          <h3>Total: ${precioTotal}</h3>
        </div>
      </div>
    </div>
  );
}

export default FinCompra;
