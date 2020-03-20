import React from 'react';

const ItemKitchen = ({ descOrder }) => {
    const { Producto, Cantidad } = descOrder;

    const element = (
     
        <li className="card bg-info ">
          <p> {Cantidad} {Producto}</p>
        </li>
   
    ); 
    return element;

}
export default ItemKitchen;