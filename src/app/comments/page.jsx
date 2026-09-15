import Link from 'next/link';
import React from 'react';

const CommentsPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await res.json();


    return (
        <div>
            <h2>This is a comments Pages:{comments.length}</h2>

            <div className='grid grid-cols-4 gap-4'>
                {
                    comments.map(comment =>
                        <div key={comment.id} className="card bg-base-100 w-96 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    
                                <Link href={`/comments/${comment.id}`}><button className="btn btn-primary">View dtls</button></Link>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default CommentsPage;