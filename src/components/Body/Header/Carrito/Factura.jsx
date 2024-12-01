import { useParams } from "react-router-dom";
import {doc , getDoc} from 'firebase/firestore';
import { db } from '../../../../Data/firebase/config';
import { useEffect } from "react";
import { useState } from "react";


const Factura = () => {
  const  id  = useParams().id;
  const [item, setItem] = useState({});


  useEffect(() => {
    const getFactura = async () => {
      const docRef = doc(db, "compras", id);
      const docSnap = await getDoc(docRef);
      setItem(docSnap.data());
    };
    getFactura();
  }, [id]); 

const {carrito, datosFacturacion, fecha, total} = item;
// const { apellido, email, telefono, direccion} = datosFacturacion;
// const fechaCompra = new Date(fecha * 1000).toLocaleDateString();
const producto = carrito[0]

console.log(producto);



  



  return (

    
    <div className="container mt-5">
      <h1 className="text-center">Factura</h1>
      <div className="row mb-4">
        <div className="col-md-6">
          <h2>nombre</h2>
          <p>nombre</p>
          <p>direccion</p>
          <p>telefono</p>
        </div>
        <div className="col-md-6 text-md-right">
          <h2>Información del Cliente</h2>
          <p>nombre</p>
          <p>direccion</p>
          <p>telefono</p>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>nombre</th>
            <th>unidades</th>
            <th>precio por unidades</th>
            <th>fechaCompra</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{producto.nombre}</td>
            <td>2</td>
            <td>$10.00</td>
            <td>$20.00</td>
          </tr>
          <tr>
            <td>Producto 2</td>
            <td>1</td>
            <td>$15.00</td>
            <td>$15.00</td>
          </tr>
        </tbody>
      </table>
      <div className="text-right">
        <h2>Total: $35.00</h2>
      </div>
    </div>
  );
};

export default Factura;