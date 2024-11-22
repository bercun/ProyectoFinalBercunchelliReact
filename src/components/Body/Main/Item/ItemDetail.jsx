import AddCarrito from "../../Header/Carrito/AddCarrito";


const ItemDetail = ({item}) => {


 if (!item || !item.img) {
  return <p>Loading...</p>;
}

  
  return (

    <>
      
    <h1 style={{margin:"1rem"}}>Detalle del producto</h1>
    
      <div className="card mb-3" style={{ maxWidth: '540px', margin: "2rem"}}>
        <div className="row g-0">
          <div className="col-md-4">
          <img src={item.img} alt="imagen" className="card-img-top img-fluid" style={{ width: '10rem', height: 'auto' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">{item.descripcion}</p>
              <p className="card-text"><small className="text-muted">Categoria:  {item.categoria} </small></p>
              <p className="card-text"><small className="text-muted">Stock:  {item.stock} </small></p>
              <AddCarrito producto={item} id={item.id}/>
            </div>
          </div>
        </div>
      </div>
    


    </>




    
  )
}

export default ItemDetail