import React, {useState} from 'react';
import firebase from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ProductKitchen from './ProductKitchen'

const OrderKitchen = () => {
    const [kitchen, setKitchen] = useState([]);

    const [value] = useCollectionData(
        firebase.firestore().collection('orders').orderBy('obj.Fecha','desc'),
    );
  
    console.log(value);
const Mostrar =()=>{
    console.log(value);
    const arrKitchen = value.map((elem)=>{
       let date = elem.obj.Fecha.toDate().toString();
        const objKitchen = {
            Nombre: elem.obj.Cliente,
            Fecha: date.substring(0, date.indexOf('GMT')),
            Pedido: elem.obj.Order.map((ele)=>{
              const objOrder = {
                Producto: ele.Descripcion,
                Cantidad: ele.Cantidad,
              }
              console.log(objOrder);
              return objOrder;
            }),
            
        }  
        console.log(objKitchen);
        return objKitchen;   
    })
    const result = arrKitchen;
        setKitchen(result);
        
    };
    
    const element = (
        <div>
            <h1>Segunda Tarea de Usuario</h1>   
             <button onClick = {(event)=> {
                 event.preventDefault();
                 Mostrar()}}>Mostrar
            </button>
            <div>
             <ul>
               { 
               kitchen.map((ele, index)=>
                 <ProductKitchen key={index} dataProduct={ele} />
               )}
             </ul> 
             </div>
        </div>   
    )
      return element;
}
export default OrderKitchen;