import React, {useState} from 'react';
import ItemOrder from './itemOrder'

const OrderProducts = (props) => {
   
    const [client,setClient] = useState('');
    const order = props.productsOrder;
    const total = props.totalClient;
    //const valTotal = props.tot
    //const totalCount= props.totalCountClient;
    const sendOrderProd = props.sendOrder;

    const eventChange = (event) => {
        const valor= event.target.value;
        setClient(valor);

    }
   
    //const delOrder= props.delProduct;
/*     const buttonTotal = (event) => {
        event.preventDefault();
        console.log('total');
        let totalCount = 0;
        order.forEach(element => {
            const price= element.Precio;
            const quantity = element.Cantidad;
            totalCount += (price * quantity);
            console.log(totalCount);
            setTotal(totalCount);
        }
        );
          
    }; */

    const buttonTotal = () => {
        let totalCount = 0;
        order.forEach(element => {
            const price= element.Precio;
            const quantity = element.Cantidad;
            totalCount += (price * quantity);
            console.log(totalCount);
            /* setTotal(totalCount); */
        }
        );
        return totalCount;
          
    };
    
    const sendOrder = () => {
        console.log(order);    
            const obj1 = {
                Cliente: client,
                Order: order,
                Total: total
        }
        sendOrderProd(obj1);
    }
        
       
                console.log('objFirebase');
                //console.log(obj1);
        //sendOrderProd(obj1);
    


    const element = (
        <section  class='orderClass' >
       <div>
       
       <br></br><label>Nombre del cliente:</label> <input className='input-name' onChange={eventChange} value={client} ></input></div>
       <br></br>
        <div className="titleTabsOrder"> 
         <button>Producto</button>
         <button>Precio</button>
         <button>Cantidad</button>
        </div>
        <div className='tabContentOrder'>
        <ul className='menu-list-order'>
                {order.map((obj, index) => <ItemOrder  key= {index} data={obj} delOrderProduct={props.delProduct} />)}        
            </ul>
        <div className='total' >
        <label onClick={buttonTotal} >TOTAL</label>
        <label>S/.</label>
         {/* <input value={total} ></input>  */}
         <p>{total}</p>
        </div>
        <div>
        <button className='btnOrderSend' onClick={sendOrder} >ENVIAR ORDEN</button>
        </div>

        </div>  
       
        
        
        </section>
        
    );
    return element;

}

export default OrderProducts;