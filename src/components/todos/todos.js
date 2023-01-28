import React from 'react';

export const Todos = ({value}) => {
    const {userId, id, title, completed} = value

    return (
        <div>
            <div>User Id: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed}</div>
        </div>
    );
};
