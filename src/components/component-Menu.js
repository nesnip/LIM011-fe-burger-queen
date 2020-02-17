import React, {useState} from 'react';
//import ReactDOM from 'react-dom'
import '../main.css';
import firebase from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';



//const arrMoreProd=[];
const ProductComponent = (props) => {
  const [cant, setCant]=useState()
  
  
  const obj1 = props.dataDeUnProducto;
 // console.log(obj1);


  function handleChange(event) {
    //event.preventDefault();
    console.log('hola');
    const valor= event.target.value;
    setCant(valor);
    //console.log(cant);
  };


  function more (desc, price, quantity) { 
   // console.log(desc, price, quantity.value)
    const arrMore = {
      Descripcion: desc,
     Precio: price,
     Cantidad: quantity,
    };
 
  console.log(arrMore);

  };
 // const arrelementProd=props.more;
  //console.log(arrelementProd);
  
 
  
  //coloca en value la cantidad de cada elemento
  return (<li className='menu-item-list' key={obj1.id}><span>{obj1.Descripcion} {obj1.Precio} <input className='cant-prod' type='text' value={cant} id='canti' onChange={handleChange}></input>
  <button className='more' onClick={(event)=> {
    event.preventDefault();
   // console.log(cant.value);
    more(obj1.Descripcion, obj1.Precio, cant);
    }}>+</button></span></li>)
};

  function MenuComponent(props) {
    const [menu, setMenu]=useState([])
   
   
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
         }}>Desayunos</button>
         <button className="tablinks" onClick={(event) => {
           event.preventDefault();
           click('Menu')
         }}>Menú</button>
         <button className="tablinks" onClick={(event) => {
           event.preventDefault();
         click('Acompañamientos')
         }}>Acompañamientos</button>
         <button className="tablinks" onClick={(event)=>{
           event.preventDefault();
         click('Bebidas')
         }}>Bebidas</button>
      </div>
      
      <div className='tabContent'>
      
   <ul className='menu-list'>
      {menu.map((obj) =>
        <ProductComponent dataDeUnProducto={obj} />
      )}
   </ul>
  </div>
      </aside>
    );
    
    return element;
      // }
  }

 
export default MenuComponent;