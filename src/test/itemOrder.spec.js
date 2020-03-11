import React from 'react';
import { render, getAllByTestId, getNodeText } from '@testing-library/react';
import ItemOrder from '../components/ItemOrder';
//import { act } from 'react-dom/test-utils';

describe('ItemOrder', () => {
  
  it('Deberia mostrar el item con el nombre, precio y cantidad', () => {
    //const handler = jest.fn()
    const eliminar = jest.fn();
    const obj = {
      Descripcion: 'Hamburguesa doble',
      Precio: '15', 
      Cantidad: 2,
      id: 'AeYaJUiQbMhKGjEVblwu',
    };
   
    const container = render(<ItemOrder data={ obj } delOrderProduct={ eliminar } />);
    const listaDeNodos = container.getAllByTestId('item');
    console.log(listaDeNodos);

    expect(getNodeText(listaDeNodos[0])).toBe('Hamburguesa doble');
    expect(getNodeText(listaDeNodos[1])).toBe(' 15');
    expect(getNodeText(listaDeNodos[2])).toBe(' 2');
   /*  expect(text).toBe('Hamburguesa doble');
    expect(number1).toBe(15);
    expect(number2).toBe(2); */
    
    /* expect(handler).toHaveBeenCalledTimes(1)
    expect(product).toBe('Hamburguesa doble')
    expect(price).toBe(15) */
  });
  

});