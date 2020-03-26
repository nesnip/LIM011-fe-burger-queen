import React from 'react';

const ItemOrder = ({ data, delOrderProduct }) => {
    const { id, Descripcion, Precio, Cantidad  } = data;
    
    const btnEliminarItem = (event)  => {
        event.preventDefault();
        const idItem = id;
        delOrderProduct(idItem);
        
    };
    
    return (
    <li className='menu-item-list-order'>
         <p className='numbers' data-testid='item'> { Cantidad }</p>
        <p className='elements' data-testid='item'>{ Descripcion }</p>
        <p className='numbers' data-testid='item'> { Precio }</p>
        <button onClick={btnEliminarItem} className='numbers' >
            <img src="delete-forever.png" className='btnDelete' alt='delete' ></img>
        </button>
    </li> 
    )
};
export default ItemOrder;