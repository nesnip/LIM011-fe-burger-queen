import React from 'react';

const ItemKitchen = ({ descOrder }) => {
    const { Producto, Cantidad } = descOrder;

    const element = (
     
        <li className="card bg-info ">
        <p  data-testid='IdItem' > {Cantidad} {Producto}</p>
        </li>
    ); 
    return element;

}
export default ItemKitchen;