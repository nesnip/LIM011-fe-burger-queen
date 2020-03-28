import React from 'react';
import ProductComponent from '../components/ProductComponent';
import { render, fireEvent, act, getNodeText } from '@testing-library/react';


describe('ProductComponent', () => {
    it('Deberia capturar la cantidad y agregar un producto',() => {
        //const addProductItem = jest.fn();
        const totalCta = jest.fn();
        //const obj1 = jest.fn();
        const obj1 = {
            Descripcion: 'Hamburguesa doble',
           Precio: 14,
           Cantidad: 3,
         
          };
        const container = render(<ProductComponent /* addProductsList={addProductItem} */
        totClient={totalCta} dataDeUnProducto={obj1}/>)
       
    const listaDeNodos = container.getAllByTestId('idItem');
    console.log(listaDeNodos); 
    expect(getNodeText(listaDeNodos[0])).toBe('Hamburguesa doble');
    expect(getNodeText(listaDeNodos[1])).toBe('S/.14');
    const inputCant= container.getByTestId('idInput');
    act(() => {
        fireEvent.change(inputCant, { target: { value: '3' }})
    })
    expect(inputCant.value).toBe('3');
    }
    
    )
}

)

