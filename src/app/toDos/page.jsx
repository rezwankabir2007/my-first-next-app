import Link from 'next/link';
import React from 'react';

const toDosPage = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const toDos = await res.json();



    return (


        <div>
            <h2>kjas:{toDos.length}</h2>
            {
                toDos.map(todo =>

                    <div className="card bg-base-100  shadow-sm" key={todo.id}>
                        <div className="card-body">
                            <h2 className="card-title">{todo.title}</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <Link href={`/toDos/${todo.id}`}>  <button className="btn btn-primary">View Now</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default toDosPage;