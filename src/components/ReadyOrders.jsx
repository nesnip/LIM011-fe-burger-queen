import React from 'react';
import ItemKitchen from './ItemKitchen'

const ReadyOrders = ({ dataProduct }) => {
  const { Nombre, Estado, Pedido } = dataProduct;
    const element = (
      <li className="card bg-warning ">
        <ul>
          <span><p data-testid='IdItem'><label>Cliente:</label> { Nombre }</p></span>
          <p data-testid='IdItem'><label>Estado del Pedido:  </label>{ Estado}</p>
          <div className='colorDetOrd'>
          <label>Detalle del Pedido</label>
          { 
            Pedido.map((el, index)=>
            <ItemKitchen key='index' data-testid='IdItem' descOrder={el} />)
          }
          </div>
        </ul>      
      </li>
    )
    return element;
}

export default ReadyOrders;