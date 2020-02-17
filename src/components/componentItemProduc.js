import React, {useState} from 'react';
//import Ffgg from './ff.js';
//import ReactDOM from 'react-dom';

import '../main.css';

const ItemProduct = (props) => {
  const [cant, setCant]=useState();
  //const [item, setItem]=useState([]);
  const obj= props.data;
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
 

  return (<li className='menu-item-list'><span>{obj.Descripcion} {obj.Precio}<input className='cant-prod' type='text' value={cant} onChange={handleChange}></input>
  <button className='more' onClick={(event)=> { 
    event.preventDefault();
   // console.log(cant.value);
   //console.log(arrMore);
    more(obj.Descripcion, obj.Precio, cant);
   
    }}>+</button></span></li>)
}
export default ItemProduct;