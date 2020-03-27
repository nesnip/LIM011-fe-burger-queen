import React, {useState} from 'react';
import '../index.css';
import firebase from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

//const arrMoreProd=[];
const ProductComponent = (props) => {
  //const [cant, setCant]= useState('')
  
  const addProductItem = props.addProductsList;
  //const totalCta = props.totClient;
  
  const obj1 = props.dataDeUnProducto;

  /* function handleChange(event) {
    const valor= event.target.value;
    setCant(valor);
  }; */

  function addItemProduct (id, desc, price /* quantity */) { 
    const addItemProductObj = {
      id: id,
      Descripcion: desc,
     Precio: price,
     //Cantidad: quantity,
    };
    addProductItem(addItemProductObj);
    
   /* if (quantity === '' ) {
    alert('Falta ingresar la cantidad');
  }
  else {
    const addItemProductObj = {
      id: id,
      Descripcion: desc,
     Precio: price,
     //Cantidad: quantity,
    };
    addProductItem(addItemProductObj);
   
  }
     */
  };

  /* let totalCount = 0;
  const buttonTotal = (objTotal) => {
         const price= objTotal.Precio;
        
         const quantity = cant;
        
         totalCount += (price * quantity);
    totalCta(totalCount); 
};
 */
 
  //coloca en value la cantidad de cada elemento
  return (<li className='menu-item-list' >
    <p className='elements' >{obj1.Descripcion}</p>
    <p className='numbers' >S/.{obj1.Precio}</p>
    {/* <p className='numbers'>
      <input className='quant-prod' type='text' value={cant}  onChange={handleChange}></input>
    </p> */}
    <p className='numbers'>
      <button className='more' onClick={(event)=> {
    event.preventDefault();
    //const valor1= cant;
  
   //addItemProduct(obj1.id, obj1.Descripcion, obj1.Precio, valor1);
   addItemProduct(obj1.id, obj1.Descripcion, obj1.Precio);
  // buttonTotal(obj1);
   
    }}> <img src="plus.png" alt='plus'/> 
    </button>
    </p>
    </li>)
};

  function MenuComponent(props) {
    const [menu, setMenu]=useState([]);
    
      const [value1] = useCollection(
        firebase.firestore().collection('Products'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
    
    function click(nombreDeLaCategoria){
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
 
      <aside id='menuClass' className='menuClass'>
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
        <ProductComponent key={obj.id} dataDeUnProducto={obj} addProductsList={props.addProduct} totClient={props.totalClient}  />
      )}
   </ul>
  </div>
      </aside>
    );
    
    return element;
      // }
  }

 
export default MenuComponent;
