import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

export const Comments = ({comment}) => {
    const navigate = useNavigate()

    const {postId, id, name, email} = comment

    return (
        <div>
            <hr/>
            <div>Post id: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <NavLink to={`${postId}`}>Post by id</NavLink>
        </div>
    );
};