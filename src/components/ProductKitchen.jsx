import React from 'react';
import ItemKitchen from './ItemKitchen'
import { useState } from 'react';

const ProductKitchen = ({ dataProduct }) => {


console.log(dataProduct)
const { Nombre, Pedido, Fecha } = dataProduct;
console.log(Pedido)
const [hour, setHour]=useState(Fecha);

const secondsToString=(seconds)=> {
  var hour = Math.floor(seconds / 3600);
  hour = (hour < 10)? '0' + hour : hour;
  var minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  var second = seconds % 60;
  second = (second < 10)? '0' + second : second;
  return hour + ':' + minute + ':' + second;
}

const endHour = ({Fecha}) => {
  //let dateEnd = new Date();
  console.log(hour);
  let date =  new Date().toString();
  const timeEnd = new Date(date.substring(0, date.indexOf('GMT')));
  console.log(timeEnd);
  const hourF= new Date(hour);
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
      <li>
        <ul>
        <p>{ Nombre }   { Fecha }</p> 
        <input type="checkbox" onChange={endHour}></input>
        <label>Tiempo de demora</label><p>{hour}</p>
        { 
          Pedido.map((el, index)=><ItemKitchen key='index' descOrder={el} />)

         }
        </ul>      
      </li>
  )
  return element;
}

export default ProductKitchen;