import React, {useState} from 'react';
import firebase from '../firebase';
import { useCollectionData} from 'react-firebase-hooks/firestore';
import ReadyOrders from './ReadyOrders';
import { Link }from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const ReadyOrdersKitchen = () => {
  const [readyOrdersKitchen, setReadyOrdersKitchen] = useState([]);  
  const [value] = useCollectionData(
    firebase.firestore().collection('orders').orderBy('obj.Fecha','asc' ),
  );
  
  const readyOrders =()=>{
    const filterArr = value.filter(ele => ele.Estado === 'listo' );
      const arrReadyOrdersKitchen = filterArr.map((elem)=>{  
        let date = elem.obj.Fecha.toDate().toString(); 
        const objReadyOrdersKitchen = {
          ID: elem.ID,
          Estado: elem.Estado,
          Nombre: elem.obj.Cliente,
          Fecha: date.substring(0, date.indexOf('GMT')),
          Pedido: elem.obj.Order.map((ele)=>{
            const objOrder = {
              Producto: ele.Descripcion,
              Cantidad: ele.Cantidad,
            }
            return objOrder;
          }), 
        }  
      return objReadyOrdersKitchen;   
    })
    const result = arrReadyOrdersKitchen;
    setReadyOrdersKitchen(result); 
  };  
    
  const element = (
    <section className='container' >
      <div className='container'>
        <div className = 'row'>
          <nav class="navbar-brand navbar-header navbar-fixed-top navbar-right">
            <div class="container-fluid">
              <ul class="active navbar-brand navbar-right">
                <li className='view'>
                  <Link to='/OrderView'>  Vista Orden </Link>
                </li>
              </ul>
              <button class="btn btn-danger navbar-btn navbar-brand navbar-header"
                onClick = {(event)=> {
                  event.preventDefault();
                  readyOrders()}}>Mostrar Ordenes listas
              </button>          
             </div>
          </nav>
        </div>
        <div className='row'>
          <div className='row'>
            <div className = 'col-sm-12'>
              <div className = 'card-columns'> 
                <ul data-testid='IdItem'>
                  { 
                    readyOrdersKitchen.map((ele, index)=>
                      <ReadyOrders key={index} dataProduct={ele} /> 
                    )
                  } 
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </div>      
    </section> 
  )
  return element;
}
export default ReadyOrdersKitchen;