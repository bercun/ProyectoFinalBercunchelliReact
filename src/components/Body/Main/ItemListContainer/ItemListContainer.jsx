import { useEffect, useState } from "react"
import Item from "../Item/Item"
import {productosEnLoad, productosById, productosByCategoria} from "../../../../Data/asyncMocks"

import ItemCategoria from "../Item/ItemCategoria";




function ItemListContainer() {

 const [productos, setproductos]= useState([]);
 const [id, setId]= useState(0);
 const [byCategoria, setByCategoria]= useState("");
 const [categoria, setCategoria]= useState("");
  
 useEffect(() => {   
    productosEnLoad().then((data) => {
      setproductos(data);
    });
  }
  , []);

 
    useEffect(() => {   
    productosById({id}).then((data) => {
      setId(data);
    });
  }
  , []);

 
    useEffect(() => {
    productosByCategoria({setByCategoria}).then((data) => { 
      setByCategoria(data);
    }); 
  
  }
  , []);

  return (
    <>
   
    <Item productos={productos} />
    
    <ItemCategoria categoria={categoria} />

    </>
  )
}

 export default ItemListContainer