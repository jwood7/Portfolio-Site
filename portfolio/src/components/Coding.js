import React from 'react';
import Images from './CodingItems.js';
import Gallery from './GalleryPage.js';

function Art() {

    return (
        <div className="coding page">
            {/* <div className="page-border">
                <div className="page-border-outer"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="coding page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="page-border-outer"></div>
            </div> */}
            <h1>CODING PROJECTS</h1>
            <Gallery images={Images.images} />
        </div>
    );
}

export default Art;
