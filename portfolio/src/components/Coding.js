import React from 'react';
import Images from './CodingItems.js';
import Gallery from './GalleryPage.js';

function Art() {

    return (
        <div className="coding page">
            <h1> WEB DEVELOPMENT AND CODING PROJECTS</h1>
            <Gallery images={Images.images} />
        </div>
    );
}

export default Art;
