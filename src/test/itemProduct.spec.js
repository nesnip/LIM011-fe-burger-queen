import React from 'react';
import { render, getAllByTestId, getNodeText, fireEvent, getByLabelText } from '@testing-library/react';
import ItemProduct from '../components/ItemProduct';
import { act } from 'react-dom/test-utils';
//import { act } from 'react-dom/test-utils';

describe('ItemProduct', () => {
  
  it('Deberia mostrar el item con el nombre, precio, cantidad y signo mas', () => {
    //const texto  = () => {};
    //const handler = jest.fn()
    //const eliminar = jest.fn();
    const obj = {
      Descripcion: 'Hamburguesa doble',
      Precio: ' 15',
    };
   
    const container = render(<ItemProduct data={ obj } />);
    const listaDeNodos = container.getAllByTestId('item');
    //console.log(listaDeNodos);
    /* const input = container.getByText('texto');
    const button = container.getByText( 'Ag'); */

    // cuando se pinta por primera vez
    //expect(input.value).toBe('');

    // cambiar el valor del input
    /* act(() => {
      fireEvent.change(input, { target: { value: '2' } });
    }) */

    expect(getNodeText(listaDeNodos[0])).toBe('Hamburguesa doble');
    expect(getNodeText(listaDeNodos[1])).toBe(' 15');
     // verifica cambio del input
     //expect(input.value).toBe('2');
     // dar click al boton
    /* act(() => {
        fireEvent.click(button);
      }) */
  
    //expect(getNodeText(listaDeNodos[2])).toBe(' 2');
   /*  expect(text).toBe('Hamburguesa doble');
    expect(number1).toBe(15);
    expect(number2).toBe(2); */
    
    /* expect(handler).toHaveBeenCalledTimes(1)
    expect(product).toBe('Hamburguesa doble')
    expect(price).toBe(15) */
  });
  

});