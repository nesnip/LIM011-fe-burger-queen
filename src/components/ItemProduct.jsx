import React, {useState} from 'react';

import '../index.css';

const ItemProduct = ({ data }) => {
  const [cant, setCant]=useState();
  //const [item, setItem]=useState([]);
  const { Descripcion, Precio } = data;
  //const obj11= props.productItem;

  function handleChange(event) {
    //event.preventDefault();
    console.log('hola');
    const valor= event.target.value;
    setCant(valor);
    //console.log(cant);
  };


  function more (desc, price, cant) { 
    const arrMore = {
      Descripcion: desc,
     Precio: price,
     Cantidad: cant
    };
    console.log(arrMore);
    //props.productitem(arrMore);
 };
 

  return (<li className='menu-item-list'><span><span data-testid='item'>{Descripcion}</span><span data-testid='item'>{ Precio }</span>
  <input className='cant-prod' type='text' value={cant} onChange={handleChange}></input>
  <button className='more' onClick={(event)=> { 
    event.preventDefault();
   // console.log(cant.value);
   //console.log(arrMore);
    more(Descripcion, Precio, cant);
   
    }}>Ag</button></span></li>)
}
export default ItemProduct;