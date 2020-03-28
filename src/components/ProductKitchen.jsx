import React from 'react';
import ItemKitchen from './ItemKitchen'
import { useState } from 'react';
import firebase from '../firebase';

const ProductKitchen = ({ dataProduct }) => {

const { Nombre, Pedido, Fecha, ID } = dataProduct;

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


const delayTime = () => {
  let date =  new Date().toString();
  const timeEnd = new Date(date.substring(0, date.indexOf('GMT')));
  const hourF= new Date(Fecha);
  const fech = timeEnd.getTime() - hourF.getTime();
  const fech2= fech/1000;
  const fech3=secondsToString(fech2);
  setHour(fech3);
  firebase.firestore().collection('orders').doc(ID).update({
    Estado: 'listo',
    Tiempo_Espera: fech3,
  });
};
  const element = (
      <li className="card bg-warning ">
        <ul >
        <span><p><label>Cliente:</label> { Nombre }</p></span>
        <label>Toma de pedido: </label> { Fecha }<br />
        <label>Estado del Pedido:  </label>
        <input type="checkbox" className='chkbox' onChange={delayTime}></input><br />
       
        <span><label>Tiempo de espera: </label><p>{hour}</p></span> 
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