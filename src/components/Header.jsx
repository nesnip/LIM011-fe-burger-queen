import React from 'react';
import '../index.css';
import { Link }from 'react-router-dom'

  const Header= () =>{
    const element= (
         <header className='logoheader'>   
          <h1 className='title-logo'>BURGUER QUEEN</h1>
          <img src='queenBurguer1.png' className="img-logo" alt="logo"/> 
          <nav class="navbar-header navbar navbar-right">
          <ul class="active navbar-brand navbar navbar-right">
            <li>
              {/* <Link to='/OrderView'>Vista Pedido </Link> */}

              <Link to='/KitchenView'> Vista Cocina</Link>
            </li>
          </ul>
          </nav>
          </header>
    );
    return element;
  }
export default Header;