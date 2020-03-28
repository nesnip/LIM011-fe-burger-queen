import React, {useState} from 'react';
import '../index.css';
import firebase from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import ProductComponent from '../components/ProductComponent'

//const arrMoreProd=[];

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
        <ProductComponent key={obj.id}
        dataDeUnProducto={obj}
        addProductsList={props.addProduct}
        totClient={props.totalClient}  />
      )}
   </ul>
  </div>
      </aside>
    );
    
    return element;
      // }
  }

 
export default MenuComponent;
