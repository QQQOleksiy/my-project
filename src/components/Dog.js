import React from 'react';

export const Dog = ({dog}) => {
    const {id2, name} = dog
    return (
        <div>
            <div>id: {id2}</div>
            <div>name: {name}</div>
        </div>
    );
};
