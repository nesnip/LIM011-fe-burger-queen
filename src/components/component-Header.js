import React from 'react';
import '../main.css';
//import burguerheader from '../burguerheader.jpg';


  function Header() {
    const element= (
      
        <header class='logoheader'>
          
          <h1 className='title-logo'>BURGUER QUEEN</h1>
          <img src='queenBurguer1.png' className="img-logo" alt="logo"/> 
         
          </header> 
      
    
    );
    return element;
  }
export default Header;