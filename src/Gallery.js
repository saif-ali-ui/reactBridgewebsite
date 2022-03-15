import React from 'react'
import GalleryObj from './GalleryObj';

const Gallery = () => {
    return (
        <div className='container'>
            <h1 className='heading'> Gallery </h1>
            <div className="row">
                {
                    GalleryObj.map((data) => {
                        let {id, image} = data;
                        return (
                            <div className="col-lg-3" key={id}>
                                <div className="box">
                                    <img alt='img' src={image}/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Gallery;