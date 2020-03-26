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
    <button className='less1' ><img src="less.jpg" className='less' alt='less'/></button>
    <p className='numbers' data-testid='item'> { Cantidad }</p>
    <button className='more' ><img src="plus.png" alt='plus'/></button>
        <p className='elements' data-testid='item'>{ Descripcion }</p>
        <p className='numbers' data-testid='item'> { Precio }</p>
        <button onClick={btnEliminarItem} className='numbers' >
            <img src="delete-forever.png" className='btnDelete' alt='delete' ></img>
        </button>
    </li> 
    )
};
export default ItemOrder;