import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../Data/firebase/config';
import Item from '../Item/Item';

function ItemListContainer(Productos) {
  const [productos, setProductos] = useState([]);
  const [id, setId] = useState(0);
  const [byCategoria, setByCategoria] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    getDocs(productosCollection)
      .then((data) => {
        setProductos(
          data.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, []);

  

  

  return (
    <div>
      <Item productos={productos} />
    </div>
  );
}

export default ItemListContainer;