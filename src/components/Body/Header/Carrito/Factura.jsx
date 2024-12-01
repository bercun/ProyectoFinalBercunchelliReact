import { useParams } from "react-router-dom";
import {doc , getDoc} from 'firebase/firestore';
import { db } from '../../../../Data/firebase/config';
import { useEffect, useState } from "react";




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

const {carrito =[], datosFacturacion={}, fecha, total} = item;

const fechaCompra = fecha ? new Date(fecha.seconds * 1000).toLocaleDateString('es-ES', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
}) : '';

  return (
    <div className="container border p-4 mt-5">
    <div className="row">
      <div className="col-12 text-center">
        <img
          src="../../../../../public/img/logoObrador.png"
          alt="Siigo logo"
          style={{ width: "150px" }}
        />
        <h4 className="mt-3">El Obrador SL</h4>
        <p>
          NIT: 100331819-1 <br />
          CRA 80 N. 35-50, Montevido, Uruguay
        </p>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6">
        <h6>Datos de Facturación:</h6>
        <p>
          <strong>Nombre:</strong> {datosFacturacion.nombre} <br />
          <strong>Dirección:</strong> {datosFacturacion.direccion} <br />
          <strong>Teléfono:</strong> {datosFacturacion.telefono} <br />
          <strong>Email:</strong> {datosFacturacion.email} <br />
          <strong>Fecha de Compra:</strong> {fechaCompra}
        </p>
      </div>
      <div className="col-md-6 text-end">
        <h6>Factura de Compra No.</h6>
        <p>
          ID: {id} <br />
          Fecha Emisión: {fechaCompra} <br />
        </p>
      </div>
    </div>

    <table className="table table-bordered mt-4">
      <thead className="table-light">
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {carrito.map((producto, index) => (
          <tr key={index}>
            <td>{producto.nombre}</td>
            <td>{producto.unidades}</td>
            <td>${producto.precio}</td>
            <td>${producto.unidades * producto.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="row mt-4">
      <div className="col-md-6">
        <h6>Observaciones:</h6>
        <p>(Vacío)</p>
      </div>
      <div className="col-md-6 text-end">
        <h6>Total:</h6>
        <h4 className="text-danger">${total}</h4>
      </div>
    </div>
  </div>
);
}

export default Factura;