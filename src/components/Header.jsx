import React from 'react';
import '../index.css';
import { Link }from 'react-router-dom'

  function Header() {
    const element= (
    
         <header className='logoheader'>
          
          <h1 className='title-logo'>BURGUER QUEEN</h1>
          <img src='queenBurguer1.png' className="img-logo" alt="logo"/> 
      
          <ul>
            <li>
              <Link to='/OrderView'>Vista Pedido </Link>
              <Link to='/KitchenView'> Vista Cocina</Link>
            </li>
          </ul>

       
          </header>
    );
    return element;
  }
export default Header;