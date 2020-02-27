import React from 'react';

const ItemOrder = (props) => {
    const obj = props.data;
    const delOrderItem = props.delOrderProduct;
    
    const btnEliminarItem = (event)  => {
        event.preventDefault();
        const idItem = obj.id;
        delOrderItem(idItem);
        
    };
    console.log(obj);
    return (
    <li className='menu-item-list-order'><p className='elements' >{obj.Descripcion}</p><p></p><p className='numbers' > {obj.Precio}</p><p className='numbers' ><p></p>{obj.Cantidad}</p><p className='numbers' >
     <img src="https://img.icons8.com/plasticine/100/000000/delete-forever.png" className='btnDelete' onClick={btnEliminarItem} alt='delete' ></img></p></li> 
    )
};
export default ItemOrder;