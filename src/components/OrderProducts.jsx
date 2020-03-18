import React, {useState} from 'react';
import ItemOrder from './ItemOrder'

const OrderProducts = ({ productsOrder, totalClient, resetOrder, sendOrder, delProduct}) => {
   
    const [client,setClient] = useState('');
    /* const order = props.productsOrder;
    const total = props.totalClient;
    const reset = props.resetOrder; */
    //const valTotal = props.tot
    //const totalCount= props.totalCountClient;
    //const sendOrderProd = props.sendOrder;

    const eventChange = (event) => {
        const valor= event.target.value;
        setClient(valor);

    }
   
    const buttonTotal = () => {
        let totalCount = 0;
        productsOrder.forEach(element => {
            const price= element.Precio;
            const quantity = element.Cantidad;
            totalCount += (price * quantity);
            console.log(totalCount);
            /* setTotal(totalCount); */
        }
        );
        return totalCount;
          
    };
    
    const sendOrderKitchen = () => {
        if (client === '') {
            alert('Ingrese nombre del cliente');
        }
        else {
            console.log(productsOrder);    
            const obj1 = {
                Cliente: client,
                Order: productsOrder,
                Total: totalClient,
                Fecha: new Date(),
        }
        sendOrder(obj1);
        resetOrder();
        setClient('');
        alert('La orden se envió con éxito');
        } 
    };
    
            

    const element = (
        <section  className='orderClass' >
       <div>
       
       <br></br><label>Nombre del cliente:</label> <input className='input-name' onChange={eventChange} value={client} ></input></div>
       <br></br>
        <div className="titleTabsOrder"> 
         <button>Producto</button>
         <button>Precio (S/.)</button>
         <button>Cantidad</button>
        </div>
        <div className='tabContentOrder'>
        <ul className='menu-list-order'>
                {productsOrder.map((obj, index) => <ItemOrder data-testid='item' key= {index} data={obj} delOrderProduct={delProduct}  />)}        
            </ul>
        <div className='total' >
        <label onClick={buttonTotal} >TOTAL</label>
      
         {/* <input value={total} ></input>  */}
         <p>S/.{totalClient}</p>
        </div>
        <div>
        <button className='btnOrderSend' onClick={sendOrderKitchen} >ENVIAR ORDEN</button>
        </div>

        </div>  
       
        
        
        </section>
        
    );
    return element;

}

export default OrderProducts;