import React, { useState } from 'react';
//import './App.css';
import '../index.css';
import Header from '../components/Header.jsx';
import MenuComponent from '../components/Menu.jsx';
import OrderProducts from '../components/OrderProducts.jsx';
import firebase from '../firebase';

function OrderView() {
  const [productsOrder, setProductOrder] = useState([]);
  const [totalCountCli, setTotalCountCli]= useState(0);

  const addProductItemOrderr = (obj) => {
    const newArray = [...productsOrder, obj];
    setProductOrder(newArray);

    console.log(newArray);
    console.log(newArray.id);
  };
  console.log(productsOrder);
 

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
    }).then(objeto=>{
      console.log(objeto.id)
      firebase.firestore()
      .collection('orders').doc(objeto.id).update({
        ID: objeto.id,
        Estado: '',
        Tiempo_Espera: '',
      })
        
    })
    console.log(obj);
   }
   
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

export default OrderView;
