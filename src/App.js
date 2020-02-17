import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
//import './App.css';
import './main.css';
import Header from './components/component-Header.js';
import MenuComponent from './components/component-Menu.js';
//import Ffgg from './components/ff.js';

//import Imagen from './components/component-imagen.js';
//import firebase from './firebase';



function App() {
  const [product, setProduct] = useState([]);
 
  const productitem = (obj) => {
    const newArray = [...product, obj];
    setProduct(newArray);
    console.log(newArray);
  };
  return (
    <div>
      <Header />
      <MenuComponent />
      
     
      
    </div>
  );
}

export default App;
