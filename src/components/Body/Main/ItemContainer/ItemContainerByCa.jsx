import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import ItemCategoria from '../Item/ItemCategoria';
import { productosByCategoria } from '../../../../Data/asyncMocks';
import ItemContainer from './ItemContainer';

function ItemContainerByCa() {
  const [byCategoria, setByCategoria] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    productosByCategoria(categoria).then((data) => {
      setByCategoria(data);
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