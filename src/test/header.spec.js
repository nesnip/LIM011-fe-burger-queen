/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react'; 
import Header from '../components/Header';

describe('Header', () => {
  it('Deberia mostrar el logo y la imagen de la Aplicacion', () => {
    const title = () => <h1>BURGUER QUEEN</h1>
    const { debug } = render(<Header />)
    debug()
  })
})
