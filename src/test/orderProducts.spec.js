import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import OrderProducts from '../components/OrderProducts';
//import { act } from 'react-dom/test-utils';

describe('OrderProducts', () => {
  
  it('Deberia mostrar 2 items de una orden de pedido en una lista', () => {
    const totCli = jest.fn();
    const resOrder = jest.fn();
    const sndOrder = jest.fn();
    const deletProduct = jest.fn();
    const obj = [{
        Cantidad: 2,
        Descripcion: 'Hamburguesa doble',
        Precio: '15',
        id: 'AeYaJUiQbMhKGjEVblwu',
      },
      {
        Cantidad: 1,
        Descripcion: 'Hamburguesa simple',
        Precio: '10',
        id: 'hgdL7Pwrg6k2zwCcezDJ',
      }];
       
    const container = render(<OrderProducts productsOrder={ obj } totalClient={ totCli } resetOrder={ resOrder } sendOrder={ sndOrder } delProduct={ deletProduct } />);
    const listaDeNodos = container.getAllByTestId('item');
    console.log(listaDeNodos);
    expect(getNodeText(listaDeNodos[0])).toBe(' 2');
    expect(getNodeText(listaDeNodos[1])).toBe('Hamburguesa doble');
    expect(getNodeText(listaDeNodos[2])).toBe(' 15');
    
    expect(getNodeText(listaDeNodos[3])).toBe(' 1');
    expect(getNodeText(listaDeNodos[4])).toBe('Hamburguesa simple');
    expect(getNodeText(listaDeNodos[5])).toBe(' 10');
   
   /*  expect(getNodeText(listaDeNodos[0])).toBe('Hamburguesa simple');
    expect(getNodeText(listaDeNodos[1])).toBe(' 10');
    expect(getNodeText(listaDeNodos[2])).toBe(' 1'); */
   /*  expect(text).toBe('Hamburguesa doble');
    expect(number1).toBe(15);
    expect(number2).toBe(2); */
    
    /* expect(handler).toHaveBeenCalledTimes(1)
    expect(product).toBe('Hamburguesa doble')
    expect(price).toBe(15) */
  });
  

});