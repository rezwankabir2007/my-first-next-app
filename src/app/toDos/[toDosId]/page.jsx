import React from 'react';

const toDosDetailsPage = async ({ params }) => {

    const {toDosId} = await params;

    const res = await fetch (`https://jsonplaceholder.typicode.com/todos/${toDosId}`)
    const todo = await res.json();




    return (
        <div>
            
            <h2>UserId:{todo.userId}</h2>
            <h2>Id:{todo.id}</h2>
            <h2>Title:{todo.title}</h2>
            <h2>Completed:{todo.completed}</h2>

        </div>
    );
};

export default toDosDetailsPage;