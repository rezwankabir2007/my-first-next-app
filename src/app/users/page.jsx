import Link from 'next/link';
import React from 'react';

const UsersPage = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    const users = await res.json();


    return (
        <div>
            <p>hellow users : {users.length}</p>

            <div className='grid grid-cols-3 gap-5'>
                {
                    users.map(user =>
                        <div className="card bg-base-100  shadow-sm" key={user.id}>
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                  <Link href={`/users/${user.id}`}>  <button className="btn btn-primary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UsersPage;