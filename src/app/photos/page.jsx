import Link from 'next/link';
import React from 'react';

const PhotosPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await res.json();

    return (
        <div>

            <h2>This is Photos Pages:{photos.length} </h2>

            <div>
                {
                    photos.map(photo =>

                        <div className="card bg-base-100  shadow-sm" key={photo.id}>
                            <div className="card-body">
                                <h2 className="card-title">{photos.name}</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/photos/${photo.id}`}>  <button className="btn btn-primary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>


        </div>
    );
};

export default PhotosPage;