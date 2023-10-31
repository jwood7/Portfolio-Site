import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';


// TODO: Make carousel smaller, see if you can make it have multiple images at once (just do multiple images per carousel items)
// Make carousels a separate componenet and import them into the home page
// make carousel images/ open popups when clicked
// Make pop-ups a reusable component

function Home() {
    return (
        <div className='home'>
            <h1>JACOB WOOD'S PORTFOLIO SITE</h1>
            <div className="carousel-box">
                <Carousel>
                    <Carousel.Item>
                        <div className="d-flex flex-row flex-nowrap">
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=First+Carousel+Image"
                                alt="First slide"
                            />
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=First+Carousel+Image"
                                alt="First slide"
                            />

                        </div>
                        <Carousel.Caption>
                            <h3>First Carousel Image</h3>
                            <p>Some description about the first carousel image.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex flex-row flex-nowrap">
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=Second+Carousel+Image"
                                alt="Second slide"
                            />
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=Second+Carousel+Image"
                                alt="Second slide"
                            />

                        </div>
                        <Carousel.Caption>
                            <h3>Second Carousel Image</h3>
                            <p>Some description about the second carousel image.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex flex-row flex-nowrap">
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=Third+Carousel+Image"
                                alt="Third slide"
                            />
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=Third+Carousel+Image"
                                alt="Third slide"
                            />

                        </div>
                        <Carousel.Caption>
                            <h3>Third Carousel Image</h3>
                            <p>Some description about the third carousel image.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="carousel-name">Carousel 1</div>
            </div>
            <div className="carousel-box">
                <Carousel>
                    <Carousel.Item>
                        <div className="d-flex flex-row flex-nowrap">
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=First+Carousel+Image"
                                alt="First slide"
                            />
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=First+Carousel+Image"
                                alt="First slide"
                            />

                        </div>
                        <Carousel.Caption>
                            <h3>First Carousel Image</h3>
                            <p>Some description about the first carousel image.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex flex-row flex-nowrap">
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=Second+Carousel+Image"
                                alt="Second slide"
                            />
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=Second+Carousel+Image"
                                alt="Second slide"
                            />

                        </div>
                        <Carousel.Caption>
                            <h3>Second Carousel Image</h3>
                            <p>Some description about the second carousel image.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex flex-row flex-nowrap">
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=Third+Carousel+Image"
                                alt="Third slide"
                            />
                            <img
                                className="d-block w-50"
                                src="https://via.placeholder.com/800x400?text=Third+Carousel+Image"
                                alt="Third slide"
                            />

                        </div>
                        <Carousel.Caption>
                            <h3>Third Carousel Image</h3>
                            <p>Some description about the third carousel image.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='triangle-left'></div>
                <div className="carousel-name">Carousel 2</div>
            </div>
            
            {/* Need to make a class to align text to the right */}
            <div className="text-right"> 
                <Link to="/about">About Me</Link>
            </div>

        </div>
    );
}

export default Home;
            