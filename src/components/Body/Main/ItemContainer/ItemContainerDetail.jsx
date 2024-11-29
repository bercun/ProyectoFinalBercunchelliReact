import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { productosById } from '../../../../Data/asyncMocks';
import ItemDetail from '../Item/ItemDetail';
import {doc , getDoc} from 'firebase/firestore';
import { db } from '../../../../Data/firebase/config';


function ItemContainerDetail() {

const [item, setItem] = useState({});
const id = useParams().id;

useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((doc) => {
        if (doc.exists()) {
            setItem({ ...doc.data(), id: doc.id });
        } else {
            console.log("no existe el documento");
        }
    }); 
},[id]);


  return (
    <div>
        <ItemDetail item={item}/>
        
    </div>
  );
}

export default ItemContainerDetail;