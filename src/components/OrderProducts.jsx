import React, {useState} from 'react';
import ItemOrder from './ItemOrder'

const OrderProducts = ({ productsOrder, totalClient, resetOrder, sendOrder, delProduct, numPro}) => {
    console.log(numPro);
    const [client,setClient] = useState('');

    const eventChange = (event) => {
        const valor= event.target.value;
        setClient(valor);
    }
    let totalCount = 0;
    const buttonTotal = () => {
        //let totalCount = 0;
       /*  productsOrder.forEach(element => {
            const price= element.Precio;
            const quantity = numPro;
            totalCount += (price * quantity);
        }
        );
        return totalCount;      */ 
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
        console.log(obj1);
        sendOrder(obj1);
        resetOrder();
        setClient('');
        alert('La orden se envió con éxito');
        } 
    };
    
    const element = (
        <section  className='orderClass' >
       <div>
       <br></br><span className="label label-danger">Nombre del cliente:</span> <input className='input-name' onChange={eventChange} value={client} ></input></div>
       <br></br>
        <div className="titleTabsOrder"> 
         <button>      </button>
         <button>Cantidad</button>
         <button>      </button>
         <button>Producto</button>
         <button>Precio (S/.)</button>
         <button>Eliminar</button>
        </div>
        <div className='tabContentOrder'>
        <ul className='menu-list-order'>
                {productsOrder.map((obj, index) =>
                <ItemOrder data-testid='item' key= {index} data={obj} delOrderProduct={delProduct} qntProd={numPro} />)}        
            </ul>
        <div className='total' >
        <label onClick={buttonTotal} >TOTAL</label>
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