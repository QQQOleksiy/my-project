import React from 'react';
import './Simpsons_style.css'

export const Simpsons = (props) => {
    let {name, img} = props
    return (
        <div className={'card'}>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
        </div>
    );
};