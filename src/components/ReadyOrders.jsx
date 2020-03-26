import React from 'react';
import ItemKitchen from './ItemKitchen'


const ReadyOrders = ({ dataProduct }) => {

const { Nombre, Estado, Pedido } = dataProduct;

  const element = (
      <li className="card bg-warning ">
        <ul >
        <span><p><label>Cliente:</label> { Nombre }</p></span>
        <label>Estado del Pedido:  </label>{ Estado}
        <div className='colorDetOrd'>
        <label>Detalle del Pedido</label>
        { 
          Pedido.map((el, index)=>
          <ItemKitchen key='index' descOrder={el} />)
         }
        </div>
       
        </ul>      
      </li>
  )
  return element;
}

export default ReadyOrders;