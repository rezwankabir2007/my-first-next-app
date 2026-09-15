import React from 'react';

const CommentDetalsPage = async ({params}) => {
const{commentId} = await params;


const res = await fetch (`https://jsonplaceholder.typicode.com/comments/${commentId}`)
const comment = await res.json();
    return (
        <div>
            <h2>Users Dtls page.</h2>
            <h1>{comment.name}</h1>
            <h1>{comment.email}</h1>
            <h1>{comment.body}</h1>
        </div>
    );
};

export default CommentDetalsPage;