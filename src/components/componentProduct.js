import React from 'react';
import ItemProduct from './componentItemProduc';

const Product = (props) => {
    const dataDeUnProducto = props.productsList;

   
        return (
            <ul className='menu-list'>
            {dataDeUnProducto.map((obj, index) =>
              <ItemProduct  key= {obj.id} data={obj} />
            )}
         </ul>
        )
}

export default Product;
