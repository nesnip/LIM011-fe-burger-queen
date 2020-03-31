import React, {useState} from 'react';
import ItemOrder from './ItemOrder'

const OrderProducts = ({ productsOrder, totalClient, resetOrder, sendOrder, delProduct, countTotal, tp}) => {
   //const { Precio, Descripcion } = productsOrder;

    const [client,setClient] = useState('');
    //const [total, setTotal] = useState(0);
console.log(countTotal)
    const eventChange = (event) => {
        const valor= event.target.value;
        setClient(valor);
    }
       /*  const ttt = total + countTotal;
        setTotal(ttt); */
    let totalCount = 0;
   
      totalCount += totalCount+ countTotal;
   
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
        console.log(obj1);
        sendOrder(obj1);
        resetOrder();
        setClient('');
        alert('La orden se envió con éxito');
        } 
    };
    
    //totalClient = total;

    const element = (
        <section  className='orderClass' >
       <div>
       
       <br></br><span className="label label-danger">Nombre del cliente:</span> <input className='input-name' onChange={eventChange} value={client} ></input></div>
       <br></br>
        <div className="titleTabsOrder"> 
         <button>Cantidad</button>
         <button>Producto</button>
         <button>Precio (S/.)</button>
         <button>Eliminar</button>
        </div>
        <div className='tabContentOrder'>
        <ul className='menu-list-order'>
                {productsOrder.map((obj, index) => <ItemOrder data-testid='item' key= {index} data={obj} delOrderProduct={delProduct} countTotal={countTotal} cantidadprod={tp} />)}        
            </ul>
        <div className='total' >
        <label /* onClick={buttonTotal} */ >TOTAL</label>
         <p>S/.{totalCount}</p>
        </div>
        <div>
        <button className='btn btn-primary' onClick={sendOrderKitchen} >ENVIAR ORDEN</button>
       
        </div>

        </div>  
       
        
        
        </section>
        
    );
    return element;

}

export default OrderProducts;