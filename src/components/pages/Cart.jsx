

function Cart() {


    
  return (
    <main className="main-carrito" style={{margin: '3rem'}}>
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
            <tbody >
            </tbody>
            <tfoot className="tfooter ">
              <tr>
                <td><h3>Total</h3></td>
                <td className="carritoSuma" >
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary sumar " type="button" >+</button>
                  </div>
                <input type="text"  className="form-control-w5" />
                  <div className="input-group-append">
                  <button className="btn btn-outline-secondary sumar " type="button" >+</button>
                  </div>
                </td>
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