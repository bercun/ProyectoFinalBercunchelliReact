import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CarritoContext } from '../../../context/CarritoContext';

function FinCompra() {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  console.log(carrito);

  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Datos de facturación</h2>
          <form onSubmit={handleSubmit(enviar)}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" {...register('nombre')} />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input type="text" className="form-control" {...register('apellido')} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" {...register('email')} />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <input type="tel" className="form-control" {...register('telefono')} />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">Dirección</label>
              <input type="text" className="form-control" {...register('direccion')} />
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
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
          <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
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
          <h3>Total: ${carrito.reduce((total, item) => total + item.precio * item.unidades, 0)}</h3>
        </div>
      </div>
    </div>
  );
}

export default FinCompra;
