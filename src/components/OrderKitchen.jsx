import React, {useState} from 'react';
import firebase from '../firebase';
import { useCollectionData} from 'react-firebase-hooks/firestore';
import ProductKitchen from './ProductKitchen';
import 'bootstrap/dist/css/bootstrap.css';
import { Link }from 'react-router-dom'
import '../index.css';

const OrderKitchen = () => {
  const [kitchen, setKitchen] = useState([]);
    const [value] = useCollectionData(
      firebase.firestore().collection('orders').orderBy('obj.Fecha','asc' ),
    );
  
const waitOrders =()=>{
  const filterArr= value.filter(ele => ele.Estado === '')
    const arrKitchen = filterArr.map((elem)=>{
      let date = elem.obj.Fecha.toDate().toString(); 
        const objKitchen = {
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
        return objKitchen;   
    })
  const result = arrKitchen;
  setKitchen(result);  
};
    
const element = (
  <section className='container' >
    <div className='container'>
      <div className = 'row'>
        <nav className="navbar-brand navbar-header navbar-fixed-top navbar-right">
          <div className="container-fluid">
            <ul className="active navbar-brand navbar-right">
              <li className='view'>
               {/*  <Link to='/OrderView'>  Vista Orden </Link> */}
                <Link to='/OrderView'>
                  <img src="back2.jpeg" className='back' alt='back' ></img>
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-danger navbar-btn navbar-brand navbar-header"
              onClick = {(event)=> {
                 event.preventDefault();
                 waitOrders();
              }}>
                Mostrar Ordenes en espera
              </button>  
          </div>
        </nav>
      </div>
      <div className='row'>
        <div className='row'>
          <div className = 'col-sm-12'>
            <div className = 'card-columns'> 
              <ul>
                { 
                  kitchen.map((ele, index)=>
                    <ProductKitchen key={index} dataProduct={ele} />
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
export default OrderKitchen;