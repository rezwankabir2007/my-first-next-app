import React from 'react';

const PostLayout = ({ children }) => {
    return (
        <div>

            <p>Fixed posrion of blog</p>
            <h2>{children}</h2>
        </div>
    );
};

export default PostLayout;