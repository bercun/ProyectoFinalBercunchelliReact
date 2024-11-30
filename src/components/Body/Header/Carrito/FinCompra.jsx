import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../../../context/CarritoContext';
import { useForm } from 'react-hook-form';


function FinCompra() {

    const { carrito, vaciarCarrito, precioTotal } = useContext(CarritoContext);
    console.log(carrito);

    const {registro, handleSubmit} = useForm();
    






  return (
    <>
    <div>FinCompra</div>
    
    </>
  )
}

export default FinCompra