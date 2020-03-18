import React from 'react';

const ItemKitchen = ({ descOrder }) => {
    const { Producto, Cantidad } = descOrder;

    const element = (
        <li>
          <p>  {Producto}{Cantidad}</p>
        </li>
    ); 
    return element;

}
export default ItemKitchen;