import React from 'react';
import Images from './ArtItems.js';
import Gallery from './GalleryPage.js';

function Art() {

    return (
        <div className="art page">
            <h1>ART PROJECTS</h1>
            <Gallery images={Images.images} />
        </div>
    );
}

export default Art;
