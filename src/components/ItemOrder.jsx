import React from 'react';
import { useState } from 'react';

const ItemOrder = ({ data, delOrderProduct, countTotal}) => {
    const { id, Descripcion, Precio } = data;
    console.log(Precio)
    //const [total, setTotal] = useState(1);
    //const qntProduct = qntProd;
    const [quant, setQuant] = useState(0);
    //let countTotal=0;
    const moreQuantity = (event) => {
        //event.preventDefault();
        setQuant(quant + 1);
       
    }
    const lessQuantity = (event) => {
        //event.preventDefault();
        setQuant(quant - 1);
        /* const tP= quant * Precio;
        setTotal(tP);
        console.log(total); */
    }
   
    const btnEliminarItem = (event)  => {
        event.preventDefault();
        const idItem = id;
        delOrderProduct(idItem);
        
    };
    console.log(quant)
        countTotal= quant * Precio;
        console.log(countTotal);
        //tp=quant;
        //console.log(tp); 
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