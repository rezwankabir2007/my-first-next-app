import React from 'react';
import Link from 'next/link';

const Post = ({ post }) => {

    const { id, title } = post;

    return (
        <div className="card bg-primary  text-primary-content w-96">
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${id}`} >
                        <button className="btn ">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;