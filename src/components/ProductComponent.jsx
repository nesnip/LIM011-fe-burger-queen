import React, { useState } from 'react';
import '../index.css';

const ProductComponent = ({ dataDeUnProducto, addProductsList, totClient }) => {
  const addProductItem = addProductsList;
  const totalCta = totClient;
  const obj1 = dataDeUnProducto;
  const [cant, setCant]= useState('')
  function handleChange(event) {
    const valor= event.target.value;
    setCant(valor);
  };
  
  function addItemProduct (id, desc, price, quantity) {  
    if (quantity === '' ) {
      alert('Falta ingresar la cantidad');
    }
    else {
      const addItemProductObj = {
        id: id,
        Descripcion: desc,
        Precio: price,
        Cantidad: quantity,
      };
      addProductItem(addItemProductObj);
    }  
  }
  let totalCount = 0;
  const buttonTotal = (objTotal) => {
    const price= objTotal.Precio;
    const quantity = cant;
    totalCount += (price * quantity);
    totalCta(totalCount); 
  };

const element = (
  <li className='menu-item-list' >
    <p data-testId='idItem' className='elements' >{obj1.Descripcion}</p>
    <p data-testId='idItem' className='numbers' >S/.{obj1.Precio}</p>
    <p data-testId='idItem' className='numbers'>
      <input data-testId='idInput' className='quant-prod' type='text' value={cant} onChange={handleChange}></input>
    </p>
    <p className='numbers'>
      <button className='more' onClick={(event)=> {
        event.preventDefault();
        const valor1 = cant;
        addItemProduct(obj1.id, obj1.Descripcion, obj1.Precio, valor1);
        buttonTotal(obj1);
        }}><img src="plus.png" alt='plus'/> 
      </button>
    </p>
  </li>
)
return element;
}
export default ProductComponent