import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import ItemCategoria from '../Item/ItemCategoria';

import ItemContainer from './ItemContainer';

//firebase

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../Data/firebase/config';


function ItemContainerByCa() {
  const [byCategoria, setByCategoria] = useState([]);
  const { categoria } = useParams();
 

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const q = categoria ? query(productosCollection, where("categoria", "==", categoria)): productosCollection;
    getDocs(q).then((data) => {
      setByCategoria(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  return (
    <>
      {byCategoria.length > 0 ? (
        <ItemCategoria categoria={byCategoria} />
      ) : (
      <>
          
        <ItemContainer/>
      </>
      )}
    </>
  );
}




export default ItemContainerByCa;