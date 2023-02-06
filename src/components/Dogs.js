import React from 'react';
import {Dog} from "./Dog";

export const Dogs = ({dogs}) => {
    return (
        <div>
            {dogs.map(dog => <Dog key={dog.id2} dog={dog}/>)}
        </div>
    );
};
