import React, { useEffect, useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import ImageSearch from '../ImageCard/ImageSearch';
import Loading from "../../Pages/Loading/Loading";
import './Gallery.css';

const Gallery = () => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=26120165-87b0bb234a5d0d318f5b67ed6&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [term]);

    return (
        <div className='lg:px-32 photo-gallery'>

            <div className="container mx-auto mb-16">
                <ImageSearch searchText={(text) => setTerm(text)} />
                {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
                {isLoading ?
                    <Loading></Loading> :
                    <div className="grid grid-cols-3 gap-8 gallery">
                        {images.map(image => <ImageCard key={image.id} image={image} />)}
                    </div>
                }
            </div>

        </div>
    );
};

export default Gallery;