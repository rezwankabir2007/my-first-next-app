import React from 'react';

const page = async ({params}) => {

const {photoId} = await params;

const res = await fetch (`https://jsonplaceholder.typicode.com/photos/${photoId}`)

const Photo = await res.json();

    return (
        <div>
           <h2>THis Is A PAge of PhoTO.</h2>
           <h2>{Photo.title}</h2>
           <h2>{Photo.url}</h2>
           <h2>{Photo.thumbnailUrl}</h2>
        </div>
    );
};

export default page;