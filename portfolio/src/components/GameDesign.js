import React from 'react';
import Images from './GameDesignItems.js';
import Gallery from './GalleryPage.js';



function GameDesign() {

    return (
        <div className="game-design page">
            <h1>GAME DESIGN PROJECTS</h1>
            <Gallery images={Images.images} />
        </div>
    );
}

export default GameDesign;
