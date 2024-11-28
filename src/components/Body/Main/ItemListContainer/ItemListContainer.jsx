import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../Data/firebase/config';

function ItemListContainer() {
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

  useEffect(() => {
    productosById({ id }).then((data) => {
      setId(data);
    });
  }, []);

  useEffect(() => {
    productosByCategoria({ setByCategoria }).then((data) => {
      setByCategoria(data);
    });
  }, []);

  return (
    <div>
      {/* Renderiza los productos aquí */}
    </div>
  );
}

export default ItemListContainer;