import { useParams } from "react-router-dom";
import {doc , getDoc} from 'firebase/firestore';
import { db } from '../../../../Data/firebase/config';


const Factura = () => {
  const  id  = useParams().id;
  console.log(id);




  return (
    <div className="container mt-5">
      <h1 className="text-center">Factura</h1>
      <div className="row mb-4">
        <div className="col-md-6">
          <h2>Información de la Empresa</h2>
          <p>Nombre de la Empresa</p>
          <p>Dirección de la Empresa</p>
          <p>Teléfono de la Empresa</p>
        </div>
        <div className="col-md-6 text-md-right">
          <h2>Información del Cliente</h2>
          <p>Nombre del Cliente</p>
          <p>Dirección del Cliente</p>
          <p>Teléfono del Cliente</p>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Producto 1</td>
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