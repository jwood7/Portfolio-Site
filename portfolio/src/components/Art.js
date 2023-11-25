import React from 'react';
import Images from './ArtItems.js';
import Gallery from './GalleryPage.js';

function Art() {

    return (
        <div className="art page">
            <div className="page-border">
                {/* <div className="page-border-outer"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="art page-border-inner"></div>
                <div className="page-border-outer"></div> */}
            </div>
            <h1>ART PROJECTS</h1>
            <Gallery images={Images.images} />
        </div>
    );
}

export default Art;
