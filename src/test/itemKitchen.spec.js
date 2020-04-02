import React from 'react';
import { render, getNodeText, getAllByTestId } from '@testing-library/react';
import ItemKitchen from '../components/ItemKitchen';
//import { act } from 'react-dom/test-utils';
describe('ItemKitchen', () => {
  
  it('Deberia mostrar el item con el producto y cantidad', () => {
    //const handler = jest.fn()
    const descOrder = {
      Cantidad: 2,
      Producto: 'Hamburguesa doble',
    }
    const container = render(<ItemKitchen descOrder={descOrder} />);
    console.log(container)
  
    const listaDeNodos = container.getAllByTestId('IdItem');
    expect(getNodeText(listaDeNodos[0])).toBe(' 2 Hamburguesa doble');
  });
}) 