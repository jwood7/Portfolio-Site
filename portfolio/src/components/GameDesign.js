import React from 'react';
import Images from './GameDesignItems.js';
import Gallery from './GalleryPage.js';



function GameDesign() {

    return (
        <div className="game-design page">
            {/* <div className="page-border">
                <div className="page-border-outer"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="game-design page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="page-border-outer"></div>
            </div> */}
            <h1>GAME DESIGN PROJECTS</h1>
            <Gallery images={Images.images} />
        </div>
    );
}

export default GameDesign;
