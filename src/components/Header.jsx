import React from 'react';
import '../index.css';
import { Link }from 'react-router-dom'

  const Header= () =>{
    const element= (
         <header className='logoheader'>   
          <h1 className='title-logo'>BURGUER QUEEN</h1>
          <img src='queenBurguer1.png' className="img-logo" alt="logo"/> 
          <nav className="navbar-header navbar navbar-right">
          <ul className="active navbar-brand navbar navbar-right">
            <li>
              <Link to='/KitchenView'> Ordenes en espera   ///  </Link>
              <Link to='/ReadyView'> Ordenes Listas</Link>
            </li>
          </ul>
          </nav>
          </header>
    );
    return element;
  }
export default Header;