import React from 'react';
import {Cat} from "./Cat";

export const Cats = ({cats}) => {
    return (
        <div>
            {cats.map(cat => <Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

