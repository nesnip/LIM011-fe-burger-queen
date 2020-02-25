import React, {useState} from 'react';
//import ReactDOM from 'react-dom'
import '../main.css';
import firebase from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';



//const arrMoreProd=[];
const ProductComponent = (props) => {
  const [cant, setCant]= useState('')
  
  const addProductItem = props.addProductsList;
  const totalCta = props.totClient;
  
  const obj1 = props.dataDeUnProducto;
 
 // console.log(obj1);


  function handleChange(event) {
    //event.preventDefault();
    console.log('hola');
    const valor= event.target.value;
    setCant(valor);
    //console.log(cant);
  };


  function addItemProduct (id, desc, price, quantity) { 
   // console.log(desc, price, quantity.value)
    const addItemProductObj = {
      id: id,
      Descripcion: desc,
     Precio: price,
     Cantidad: quantity,
    };
 
    addProductItem(addItemProductObj);

  };

  let totalCount = 0;
  const buttonTotal = (objTotal) => {
    console.log(objTotal);
    
   /*  objTotal.forEach(element => {
        const price= element.Precio;
        const quantity = element.Cantidad;
        totalCount += (price * quantity);
        console.log(totalCount);
         }); */
         const price= objTotal.Precio;
         console.log(price);
         const quantity = cant;
         console.log(quantity);
         totalCount += (price * quantity);
    console.log(totalCount);
    //console.log(totalCount);
    //props.totClient= totalCount;
    totalCta(totalCount);
 //return totalCount;
        
};

 // const arrelementProd=props.more;
  //console.log(arrelementProd);
  
 
  
  //coloca en value la cantidad de cada elemento
  return (<li className='menu-item-list' ><p className='elements' >{obj1.Descripcion}</p>
  <p className='numbers' >{obj1.Precio}</p><p className='numbers'><input className='quant-prod' type='text' value={cant}  onChange={handleChange}></input></p><p className='numbers'>
  <img src="https://img.icons8.com/offices/30/000000/plus.png" className='more' alt='plus'  onClick={(event)=> {
    event.preventDefault();
    const valor1= cant;
   // console.log(cant.value);
   addItemProduct(obj1.id, obj1.Descripcion, obj1.Precio, valor1);
   buttonTotal(obj1);
    }}></img></p></li>)
};

  function MenuComponent(props) {
    const [menu, setMenu]=useState([]);
    //const totClient= props.totalCountCli;
   
   
      const [value1, loading, error] = useCollection(
        firebase.firestore().collection('Products'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
    
    function click(nombreDeLaCategoria){
      console.log(nombreDeLaCategoria);
      //console.log(value1);
      const arrProducts = value1.docs.map((elem) => {
        const obj = {
          Categoria: elem.data().Categoria,
          Descripcion: elem.data().Descripcion,
          Precio: elem.data().Precio,
          id: elem.id,
        }
        return obj;
       
      });
     
    const result = arrProducts.filter((elem) => elem.Categoria === nombreDeLaCategoria);
  
    setMenu(result);
    }
  
    const element= (
 
      <aside id='menuClass' class='menuClass'>
       <div className="titleTabs">
         <button className="tablinks" onClick={(event) => {
            event.preventDefault();
            click('Desayuno')
         }}>DESAYUNO</button>
         <button className="tablinks" onClick={(event) => {
           event.preventDefault();
           click('Menu')
         }}>MENU</button>
         <button className="tablinks" onClick={(event) => {
           event.preventDefault();
         click('Acompañamientos')
         }}>ACOMPAÑAMIENTOS</button>
         <button className="tablinks" onClick={(event)=>{
           event.preventDefault();
         click('Bebidas')
         }}>BEBIDAS</button>
      </div>
      
      <div className='tabContent'>
      
   <ul className='menu-list'>
      {menu.map((obj) =>
        <ProductComponent key={obj.id} dataDeUnProducto={obj} addProductsList={props.addProduct} totClient={props.totalClient} />
      )}
   </ul>
  </div>
      </aside>
    );
    
    return element;
      // }
  }

 
export default MenuComponent;
