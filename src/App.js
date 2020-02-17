import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
//import './App.css';
import './main.css';
import Header from './components/component-Header.js';
import MenuComponent from './components/component-Menu.js';
//import Imagen from './components/component-imagen.js';
//import firebase from './firebase';



function App() {
  const [arrProduct, setArrProduct]=useState([])

  const addProduct= (obj)=> {
    const newArray=[...arrProduct, obj];
   console.log(newArray);
    
  }
  
  return (
    <div>
      <Header />
      <MenuComponent addProduct={ addProduct } />
    </div>
  );
}

export default App;
