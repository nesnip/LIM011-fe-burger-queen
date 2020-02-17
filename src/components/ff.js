import React from 'react';
import  Itemff from  './itemff';

const Ffgg = (props) => {
    const tareas = props.productitem;
    console.log(tareas);
return (
    
         <ul className='menu-list'>
          {tareas.map((obj, index) =>
              <Itemff  key= {index} data1={obj} />
              
            )}
            
         </ul>
)
}
export default Ffgg;