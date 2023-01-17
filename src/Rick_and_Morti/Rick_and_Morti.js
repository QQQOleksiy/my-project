import React from 'react';
import './Rick_and_Morti_style.css'

export const RickAndMorti = (props) => {
    let {id, name, status, species, gender, image} = props
    return (
        <div className={'main'}>
            <div className={'image'}><img src={image} alt={name}/></div>
            <div className={'all_info'}>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Status: {status}</div>
                <div>Species: {species}</div>
                <div>Gender: {gender}</div>
            </div>
        </div>
    );
};