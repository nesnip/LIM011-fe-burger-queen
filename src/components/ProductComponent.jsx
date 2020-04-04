import React, { useState } from 'react';
import '../index.css';

const ProductComponent = ({ dataDeUnProducto, addProductsList, totClient }) => {
  //console.log(cuanti)
  //const yy = cuanti;
  const addProductItem = addProductsList;
  const totalCta = totClient;
  const obj1 = dataDeUnProducto;
  const [quant, setQuant] = useState(1);

  const moreQuantity = () => {
    //event.preventDefault();
    setQuant(quant + 1);
   
}
const lessQuantity = () => {
  if(quant === 1) {
    setQuant(1);
  } else{ 
    setQuant(quant - 1);
  }   
}
//yy(quant);
  /* function handleChange(event) {
    const valor= event.target.value;
    setCant(valor);
  }; */
  
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
    const quantity = quant;
    totalCount += (price * quantity);
    totalCta(totalCount); 
  };

const element = (
  <li className='menu-item-list' >
    <p data-testId='idItem' className='elements' >{obj1.Descripcion}</p>
    <p data-testId='idItem' className='numbers' >S/.{obj1.Precio}</p>
    <button name='lessQuantity' className='less1' onClick = {lessQuantity}><img src="less.jpg" className='less' alt='less'/></button>
    <p className='numbers' data-testid='item'> { quant }</p>
    <button className='more' onClick = {moreQuantity}><img src="plus.png" alt='plus'/></button>
    <p className='numbers'>
      <button className='more' onClick={(event)=> {
        event.preventDefault();
        const valor1 = quant;
        addItemProduct(obj1.id, obj1.Descripcion, obj1.Precio, valor1);
        buttonTotal(obj1);
        }}><img src="flecha.png" className='arrow' alt='arrow'/> 
      </button>
    </p>
  </li>
)
return element;
}
export default ProductComponent