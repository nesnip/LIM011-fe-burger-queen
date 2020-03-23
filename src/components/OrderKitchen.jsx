import React, {useState} from 'react';
import firebase from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ProductKitchen from './ProductKitchen'
import 'bootstrap/dist/css/bootstrap.css';
import { Link }from 'react-router-dom'
import '../index.css';

const OrderKitchen = () => {
    const [kitchen, setKitchen] = useState([]);

    const [value] = useCollectionData(
        firebase.firestore().collection('orders').orderBy('obj.Fecha','asc'),
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
      <section className='container' >

        <div className='container'>
         {/*  <div className='row'>
            <div className = 'col-md-12'>
          <h1>cocina</h1>   
          </div>
          </div> */}
          <div className = 'row'>
          <nav class="navbar-brand navbar-header navbar-fixed-top navbar-right">
  <div class="container-fluid">
   
    <ul class="active navbar-brand navbar-right">
     {/*  <li><a href="#">Link</a></li> */}
     <li className='view'>
     <Link to='/OrderView'>  Vista Orden </Link>
     </li>
     <li>
     </li>
    </ul>
 
    <button class="btn btn-danger navbar-btn navbar-brand navbar-header" onClick = {(event)=> {
                 event.preventDefault();
                 Mostrar()}}>Mostrar Lista de Ordenes</button>         
  </div>
</nav>
</div>
           <div className='row'>
            {/*  <div className = 'col-12'>
             <button onClick = {(event)=> {
                 event.preventDefault();
                 Mostrar()}}>Mostrar
            </button>
            </div> */}
            <div className='row'>
              <div className = 'col-sm-12'>
              <div className = 'card-columns'> 
                <ul>
            { 
            kitchen.map((ele, index)=>
              <ProductKitchen key={index} dataProduct={ele} />
            )}
            
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
export default OrderKitchen;