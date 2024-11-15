import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productosById } from '../../../../Data/asyncMocks';
import ItemDetail from '../Item/ItemDetail';


function ItemContainerDetail() {

const [item, setItem] = useState({});
const id = useParams().id;

useEffect(() => {
    productosById(Number(id)).then((data) => {
        setItem(data);
    }); 
},[id]);


  return (
    <div>
        <ItemDetail item={item}/>
        
    </div>
  );
}

export default ItemContainerDetail;