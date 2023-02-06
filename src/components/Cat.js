import React from 'react';

export const Cat = ({cat}) => {
    const {id, name} = cat
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};