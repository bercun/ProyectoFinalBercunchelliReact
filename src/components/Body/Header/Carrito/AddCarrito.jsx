import React, { useState } from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../../../context/CarritoContext';


const AddCarrito = ({producto, id}) => {
  
    const [unidades, setUnidades] = useState(1);

    const restUnidades = ()=>{
    
        unidades > 1 && setUnidades(unidades - 1)
    
    
    };
   
    
    const addUnidades = ()=>{
    
    
    unidades < stock && setUnidades(unidades + 1)
    
    
    }
  
    const upCarrito = ()=>{
        
    }

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
            <button className="btn btn-primary "onClick={upCarrito}>
            <i className="fas fa-shopping-cart"></i> Go! to cart 
            </button>
        </div>
      </div>
      
    </div>
  )
}

export default AddCarrito