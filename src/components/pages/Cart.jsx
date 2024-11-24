import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Cart() {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const incrementarUnidades = (id) => {
    const carritoActualizado = carrito.map(item =>
      item.id === id ? { ...item, unidades: item.unidades + 1 } : item
    );
    setCarrito(carritoActualizado);
  };

  const decrementarUnidades = (id) => {
    const carritoActualizado = carrito.map(item =>
      item.id === id && item.unidades >= 0 ? { ...item, unidades: item.unidades - 1 } : item
    );
    setCarrito(carritoActualizado);
  };

  let unidadesEnCarrito = carrito.reduce((total, item) => total + item.unidades, 0);

  return (
    <main className="main-carrito" style={{ margin: '3rem' }}>
      <div className="carrito-box">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th colSpan="5"><h1>Detalle de tu pedido</h1></th>
              </tr>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.nombre}</td>
                  <td>${item.precio}</td>
                  <td>{item.unidades}</td>
                  <td>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => decrementarUnidades(item.id)}>-</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => incrementarUnidades(item.id)}>+</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="tfooter">
              <tr>
                <td colSpan="2"><h5>Cantidad</h5></td>
                <td className="carritoSuma"/>
                  <h3>
                    {unidadesEnCarrito}
                  </h3>
                <td colSpan="3"><h3>Total</h3></td>
                <td className="carritoSuma">
                  <h3>
                    ${carrito.reduce((total, item) => total + item.precio * item.unidades, 0)}
                  </h3>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="button" className="btn btn-danger" id="pagar">Pagar</button>
                </td>
                <td colSpan="2">
                  <button type="button" className="btn btn-danger" id="vaciar" onClick={vaciarCarrito}>Vaciar</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Cart;