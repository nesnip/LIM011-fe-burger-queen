import React from 'react';
import ItemKitchen from './ItemKitchen'
import { useState } from 'react';

const ProductKitchen = ({ dataProduct }) => {


console.log(dataProduct)
const { Nombre, Pedido, Fecha } = dataProduct;
console.log(Pedido)
const [hour, setHour]=useState('');

const secondsToString=(seconds)=> {
  var hour = Math.floor(seconds / 3600);
  hour = (hour < 10)? '0' + hour : hour;
  var minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  var second = seconds % 60;
  second = (second < 10)? '0' + second : second;
  return hour + ':' + minute + ':' + second;
}

const endHour = () => {
  //let dateEnd = new Date();
  console.log(hour);
  let date =  new Date().toString();
  const timeEnd = new Date(date.substring(0, date.indexOf('GMT')));
  console.log(timeEnd);
 /*  const hourF= new Date(hour);
  console.log(hourF);
  const fech = timeEnd.getTime() - hourF.getTime(); */
  const hourF= new Date(Fecha);
  console.log(hourF);
  const fech = timeEnd.getTime() - hourF.getTime();
 
  const fech2= fech/1000;
   console.log(fech2);
  console.log(secondsToString(fech2));
  const fech3=secondsToString(fech2);
  console.log(fech3);
  setHour(fech3);
};
console.log(hour);

  const element = (
      <li className="card bg-warning ">
        <ul >
        <span><p><label>Cliente:</label> { Nombre }</p></span>
        <label>Toma de pedido: </label> { Fecha }<br />
        <label>Estado del Pedido:  </label>
        <input type="checkbox" className='chkbox' onChange={endHour}></input><br />
       
        <span><label>Tiempo de demora: </label><p>{hour}</p></span> 
        <div className='colorDetOrd'>
        <label>Detalle del Pedido</label>
        { 
          Pedido.map((el, index)=>
          <ItemKitchen key='index' descOrder={el} />)
         }
        </div>
       
        </ul>      
      </li>
  )
  return element;
}

export default ProductKitchen;