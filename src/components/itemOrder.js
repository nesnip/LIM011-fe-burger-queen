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
    <li className='menu-item-list-order'><span className='input-Bott-Order' >{obj.Descripcion} {obj.Precio} {obj.Cantidad}
     <img src="https://img.icons8.com/plasticine/100/000000/delete-forever.png" className='btnDelete' onClick={btnEliminarItem} alt='delete' ></img></span></li> 
    )
};
export default ItemOrder;