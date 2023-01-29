import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postByIdRequest} from "../../requests/postByIdRequest";

export const PostByCommentPage = () => {
    const {postId} = useParams()

    const [post, setPost] = useState()

    useEffect(() => {
        if (postId){
            postByIdRequest.getPost(postId).then(({data}) => console.log(setPost(data)))
        }
    }, [postId])


    return (
        <div>
            <div>User ID: {post.userId}</div>
            <div>ID: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
        </div>
    );
};

