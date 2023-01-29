import React from 'react';

export const Albums = ({album}) => {
    const {userId, id, title} = album

    return (
        <div>
            <hr/>
            <div>User Id: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
        </div>
    );
};