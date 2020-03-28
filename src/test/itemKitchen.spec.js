/* import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import ItemKitchen from '../components/ItemKitchen';
//import { act } from 'react-dom/test-utils';

describe('ItemOrder', () => {
  
  it('Deberia mostrar el item con el producto y cantidad', () => {
    //const handler = jest.fn()
    const Procant = { 
        producto: 'Hamburguesa doble',
        cantidad: 2,
    }
    
    const container = render(<ItemKitchen descOrder={ Procant } />);
    console.log(container)
  
    const liElem = container.getByText(2);
    const liElem1 = container.getByText('Hamburguesa doble');

    const text = getNodeText(liElem);
    const text1 = getNodeText(liElem1);
    expect(text1).toBe('2'); 
    expect(text).toBe('Hamburguesa doble');
  

  });
}) */