import React from 'react';

const User = ({user, setDetails}) => {
    const {id, name} = user
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div><button onClick={() => setDetails(user)}>Details info</button></div>
        </div>
    );
};

export default User;