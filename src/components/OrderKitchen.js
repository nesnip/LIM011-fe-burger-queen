import React from 'react';
import firebase from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ItemKitchen from '../components/ItemKitchen'

const OrderKitchen = () => {
    const [value] = useCollectionData(
        firebase.firestore().collection('orders').orderBy('obj.fecha','desc'),
    );
const Mostrar =()=>{
  
        console.log(value);
      
    
    };
    
    const element = (
        <div>
            <h1>Segunda Tarea de Usuario</h1>   
             <button onClick = {Mostrar}>Mostrar</button>
             <ul>
              {/*   <ItemKitchen /> */}
             </ul>

        </div>
        
        
    )
      return element;
}
export default OrderKitchen;