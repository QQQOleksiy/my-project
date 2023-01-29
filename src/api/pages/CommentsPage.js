import React, {useEffect, useState} from 'react';

import {commentsRequest} from "../../requests/commentsRequest";
import {Comments} from "../../components/comments/Comments";
import {Outlet} from "react-router-dom";

export const CommentsPage = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsRequest.getAll().then(({data}) => setComments([...data]))
    },[])
    return (
        <div>
            <Outlet/>
            <h1>Comments</h1>
            {
                comments.map(comment => <Comments key={comment.id} comment={comment}/>)
            }
        </div>
    );
};
