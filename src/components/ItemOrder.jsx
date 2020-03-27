import React from 'react';
import { useState } from 'react';

const ItemOrder = ({ data, delOrderProduct/* , qntProd  */}) => {
    const { id, Descripcion, Precio } = data;
    const [total, setTotal] = useState(1);
    //const qntProduct = qntProd;
    const [quant, setQuant] = useState(0);

    const moreQuantity = (event) => {
        event.preventDefault();
        setQuant(quant + 1);
        
        //setTotal(quant * Precio);
    }
    const lessQuantity = (event) => {
        event.preventDefault();
        setQuant(quant - 1);
        //setTotal(quant * Precio);
    }
  /*   const tP= quant * Precio;
    setTotal(tP);
    console.log(total); */

    const btnEliminarItem = (event)  => {
        event.preventDefault();
        const idItem = id;
        delOrderProduct(idItem);
        
    };
   
    return (
    <li className='menu-item-list-order'>
    <button className='less1' onClick = {lessQuantity}><img src="less.jpg" className='less' alt='less'/></button>
    <p className='numbers' data-testid='item'> { quant }</p>
    <button className='more' onClick = {moreQuantity}><img src="plus.png" alt='plus'/></button>
        <p className='elements' data-testid='item'>{ Descripcion }</p>
        <p className='numbers' data-testid='item'> { Precio }</p>
        <button onClick={btnEliminarItem} className='numbers' >
            <img src="delete-forever.png" className='btnDelete' alt='delete' ></img>
        </button>
    </li> 
    )
};
export default ItemOrder;