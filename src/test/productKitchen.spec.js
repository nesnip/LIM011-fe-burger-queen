import React from 'react';
import ProductKitchen from '../components/ProductKitchen';
import { render, getAllByTestId, getNodeText } from '@testing-library/react';


describe('ProductKitchen', () => {
    it('Deberia capturar la cantidad y agregar un producto',() => {
        //const addProductItem = jest.fn();
        //const totalCta = jest.fn();
        //const obj1 = jest.fn();
        const dataProduct = {
            Nombre: 'Lili',
            Pedido: [{
                Cantidad: 3,
                Producto: 'Hamburguesa doble',
            },
            {
                Cantidad: 5,
                Producto: 'Hamburguesa simple',
            },],
            Fecha: '01/04/2020',
            ID: 'z74647474hfgfbbf',
        }
      
    const container = render(<ProductKitchen dataProduct={dataProduct} />)
       
    const listaDeNodos = container.getAllByTestId('IdItem');
    console.log(listaDeNodos); 
    expect(getNodeText(listaDeNodos[0])).toBe(' Lili');
    expect(getNodeText(listaDeNodos[1])).toBe(' 01/04/2020');
    //const ped=container.getAllByTestId('item');
    expect(getNodeText(listaDeNodos[2])).toBe(' 3 Hamburguesa doble');
    expect(getNodeText(listaDeNodos[3])).toBe(' 5 Hamburguesa simple');
    //expect(getNodeText(listaDeNodos[2])).toBe()
    
    }
    
    )
}

)