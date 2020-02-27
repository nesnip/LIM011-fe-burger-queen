import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
//import './App.css';
import './main.css';
import Header from './components/component-Header.js';
import MenuComponent from './components/component-Menu.js';
import OrderProducts from './components/orderProducts.js';
//import ItemOrder from './components/itemOrder.js';
//import Imagen from './components/component-imagen.js';
import firebase from './firebase';




function App() {
  const [productsOrder, setProductOrder] = useState([]);
  const [totalCountCli, setTotalCountCli]= useState(0);
 
 
 
  const addProductItemOrderr = (obj) => {
    const newArray = [...productsOrder, obj];
    setProductOrder(newArray);

    console.log(newArray);
    console.log(newArray.id);
  };
  //console.log(productsOrder);
 

  const totClient = (valor) => {
    setTotalCountCli(totalCountCli + valor);
  }

  const delProductItemOrder = (id) => {
    console.log(productsOrder);
    const findEleDel = productsOrder.find(ele =>ele.id === id );
    console.log(findEleDel);
    const posdEleDel = productsOrder.indexOf(findEleDel);
    console.log(posdEleDel);
     const delArrProducts = productsOrder.splice(posdEleDel, 1);
     console.log(delArrProducts);
     let mapPrecio = delArrProducts.map(ele => ele.Precio);
     console.log(mapPrecio);
     const price=mapPrecio[0];
     console.log(price);
     let mapCantidad = delArrProducts.map(ele => ele.Cantidad);
     console.log(mapCantidad);
     const quantity = mapCantidad[0];
      console.log(quantity);
      const res= totalCountCli - (price * quantity);
      console.log(res);
      console.log(productsOrder);

    const newArrayDel = [...productsOrder];
    setProductOrder(newArrayDel);
    setTotalCountCli(res);
    console.log('estado');
    console.log(newArrayDel);
   };
   
   const sendOrder = (obj) => {
     firebase.firestore()
    .collection('orders')
    .add({
      obj
    })
    console.log('Orders');
   }
   
   /* const resetCant = (resCant) => {
     console.log(resCant);
   } */
  
   const resetOrder = () => {
    setProductOrder([]);
    setTotalCountCli(0);
   
   }
  
  return (
    <main className='display-flex'>
      <Header />
      <MenuComponent addProduct={addProductItemOrderr} totalClient={totClient} resetCant = {productsOrder} />
      <OrderProducts productsOrder={productsOrder} delProduct={delProductItemOrder} totalClient={totalCountCli} sendOrder={sendOrder} resetOrder = {resetOrder} />
   
    </main>
  );
}

export default App;
