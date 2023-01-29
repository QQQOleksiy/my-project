import React from 'react';

export const Todos = ({todo}) => {
    const {userId, id, title, completed} = todo

    return (
        <div>
            <hr/>
            <div>User Id: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed ? 'True' : 'False'}</div>
        </div>
    );
};
