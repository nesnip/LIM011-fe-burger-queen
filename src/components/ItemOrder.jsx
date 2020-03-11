import React from 'react';

const ItemOrder = ({ data, delOrderProduct }) => {
    const { id, Descripcion, Precio, Cantidad  } = data;
 //const delOrderItem = props.delOrderProduct;
    
    const btnEliminarItem = (event)  => {
        event.preventDefault();
        //const idItem = obj.id;
        const idItem = id;
        delOrderProduct(idItem);
        
    };
    //console.log(obj);
    return (
    <li className='menu-item-list-order'>
        <p className='elements' data-testid='item'>{ Descripcion }</p>
        <p className='numbers' data-testid='item'> { Precio }</p>
        <p className='numbers' data-testid='item'> { Cantidad }</p>
        <button onClick={btnEliminarItem} className='numbers' >
            <img src="delete-forever.png" className='btnDelete' alt='delete' ></img>
        </button>
    </li> 
    )
};
export default ItemOrder;