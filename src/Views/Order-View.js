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
  };
 
  const totClient = (valor) => {
    setTotalCountCli(totalCountCli + valor);
  }

  const delProductItemOrder = (id) => {
    const findEleDel = productsOrder.find(ele =>ele.id === id );
    const posdEleDel = productsOrder.indexOf(findEleDel);
    const delArrProducts = productsOrder.splice(posdEleDel, 1);
    let mapPrecio = delArrProducts.map(ele => ele.Precio);
    const price=mapPrecio[0];
    let mapCantidad = delArrProducts.map(ele => ele.Cantidad);
    const quantity = mapCantidad[0];
    const res= totalCountCli - (price * quantity);
    const newArrayDel = [...productsOrder];
    setProductOrder(newArrayDel);
    setTotalCountCli(res);
  };
   
  const sendOrder = (obj) => {
    firebase.firestore()
    .collection('orders')
    .add({
      obj
    }).then(objeto => {
      console.log(objeto.id)
      firebase.firestore()
      .collection('orders').doc(objeto.id).update({
        ID: objeto.id,
        Estado: '',
        Tiempo_Espera: '',
      })   
    })
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
