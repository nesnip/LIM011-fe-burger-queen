import React from 'react';
import ReadyOrders from '../components/ReadyOrders';
import { render, getNodeText } from '@testing-library/react';


describe('ReadyOrders', () => {
  it('Deberia mostrar dos ordenes listas',() => {
        //const addProductItem = jest.fn();
        //const totalCta = jest.fn();
        //const obj1 = jest.fn();
        const dataProduct = {
            Nombre: 'Lili',
            Estado: 'listo',
            Pedido: [{
                Cantidad: 3,
                Producto: 'Hamburguesa doble',
            },
            {
                Cantidad: 5,
                Producto: 'Hamburguesa simple',
            },],
            
        }
      
    const container = render(<ReadyOrders dataProduct={dataProduct} />)
       
    const listaDeNodos = container.getAllByTestId('IdItem');
    console.log(listaDeNodos); 
    expect(getNodeText(listaDeNodos[0])).toBe(' Lili');
    expect(getNodeText(listaDeNodos[1])).toBe('listo');
    //const ped=container.getAllByTestId('item');
    expect(getNodeText(listaDeNodos[2])).toBe(' 3 Hamburguesa doble');
    expect(getNodeText(listaDeNodos[3])).toBe(' 5 Hamburguesa simple');
    //expect(getNodeText(listaDeNodos[2])).toBe()
    
    }
    
    )
}

)