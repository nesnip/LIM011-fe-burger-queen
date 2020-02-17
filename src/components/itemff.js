import React from 'react';

const Itemff = (props) => {
    const obj = props.data1;
    console.log(obj);
    return (
        <li>{obj.Descripcion}</li>
    )
};
export default Itemff;