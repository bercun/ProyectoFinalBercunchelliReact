

function Cart() {


    
  return (
    <main className="main-carrito">
      <div className="carrito-box">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th colSpan="3"><h1>Detalle de tu pedido </h1></th>
              </tr>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">precio$</th>
                <th scope="col">cantidad</th>
              </tr>
            </thead>
            <tbody id="tablaCompras">
            </tbody>
            <tfoot className="tfooter">
              <tr>
                <td><h3>Total</h3></td>
                <td className="carritoSuma" id="sumaCompra"><h3></h3></td>
                <td><button type="button" className="btn btn-danger" >Pagar</button></td>
                <td><button type="button" className="btn btn-danger" >Vaciar</button></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Cart;