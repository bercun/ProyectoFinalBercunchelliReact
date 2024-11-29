
import { Link } from 'react-router-dom';
import AddCarrito from '../../Header/Carrito/AddCarrito';

const ItemCategoria = ({ categoria }) => {
  
  if (!Array.isArray(categoria) || categoria.length === 0) {
    return <p>No hay productos disponibles en esta categoría.</p>;
  }





  return (
    <>
    <div className="container">
                <h2 className="p-4" >Nuestros productos</h2>
                <div className="row">
                    {categoria.map((producto) => (
                        <div key={producto.id} className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100">
                                <img src={producto.img} alt="imagen" className="card-img-top img-fluid" style={{ width: '10rem', height: 'auto' }} />
                                <div className="card-body">
                                    <h3 className="card-title">{producto.nombre}</h3>
                                    <p className="card-text">{producto.descripcion}</p>
                                    <p className="card-text">$ {producto.precio}</p>
                                    <Link className="btn btn-link"  to={`/detail/${producto.id}`}>detalle</Link>
                                    <Link className="btn btn-link"  style={{margin: '0.5rem'}} to={`/categoria/${producto.categoria}`}>Categoria {producto.categoria} </Link>
                                    <br />
                                    <AddCarrito producto={producto} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>

      
    </>
  );
}
export default ItemCategoria;
                                    