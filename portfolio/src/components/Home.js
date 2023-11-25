import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import ArtItems from './ArtItems.js';
import GameItems from './GameDesignItems.js';
import CodingItems from './CodingItems.js';
import { Image, Row, Col, Modal, Button, Container} from 'react-bootstrap';


// TODO: Make carousel smaller, see if you can make it have multiple images at once (just do multiple images per carousel items)
// Make carousels a separate componenet and import them into the home page
// make carousel images/ open popups when clicked
// Make pop-ups a reusable component

function Home() {

    const [showModal, setShowModal] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <div className='home page'>
            <div className="page-border">
                {/* <div className="page-border-outer"></div>
                <div className="home page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-inner"></div>
                <div className="white page-border-outer"></div> */}
            </div>
            <h1>JACOB WOOD'S PORTFOLIO SITE</h1>

            <div className="carousel-box">
                <Carousel className="custom-carousel game-design" interval={null}>
                    {GameItems.images?.reduce((acc, picture, index) => {
                        if (index % 4 === 0) {
                            acc.push([]);
                        }
                        acc[acc.length - 1].push(picture);
                        return acc;
                    }, []).map((pictureSet) => (
                        <Carousel.Item>
                            <Row xs={2} md={4} class="g-4">
                                {pictureSet.map((picture) => (
                                    <Col key={picture.id}>
                                        <Image
                                            src={picture.thumb}
                                            alt={picture.alt}
                                            fluid
                                            onClick={() => handleImageClick(picture)}
                                        />
                                    </Col>
                                ))}
                            </Row>
                            {/* Add spacers on the ends of each picture set so that the arrows don't block the images to open modals */}
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className='triangle-game-design'></div>
                <div className='triangle-background'></div>
                <Link className="game-design carousel-name" to="/gamedesign">GAME DESIGN</Link>
            </div>

            <div className="carousel-box">
                <Carousel className="custom-carousel coding" interval={null}>
                    {CodingItems.images?.reduce((acc, picture, index) => {
                        if (index % 4 === 0) {
                            acc.push([]);
                        }
                        acc[acc.length - 1].push(picture);
                        return acc;
                    }, []).map((pictureSet) => (
                        <Carousel.Item>
                            <Row xs={2} md={4} class="g-4">
                                {pictureSet.map((picture) => (
                                    <Col key={picture.id}>
                                        <Image
                                            src={picture.thumb}
                                            alt={picture.alt}
                                            fluid
                                            onClick={() => handleImageClick(picture)}
                                        />
                                    </Col>
                                ))}
                            </Row>
                            {/* Add spacers on the ends of each picture set so that the arrows don't block the images to open modals */}
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className='triangle-coding'></div>
                <div className='triangle-background'></div>
                <Link className="coding carousel-name" to="/coding">CODING PROJECTS</Link>
            </div>

            <div className="carousel-box">
                <Carousel className="custom-carousel art" interval={null}>
                    {ArtItems.images?.reduce((acc, picture, index) => {
                        if (index % 4 === 0) {
                            acc.push([]);
                        }
                        acc[acc.length - 1].push(picture);
                        return acc;
                    }, []).map((pictureSet) => (
                        <Carousel.Item>
                            <Row xs={2} md={4} class="no-gutters">
                                {pictureSet.map((picture) => (
                                    <Col key={picture.id}>
                                        <Image
                                            src={picture.thumb}
                                            alt={picture.alt}
                                            fluid
                                            onClick={() => handleImageClick(picture)}
                                        />
                                    </Col>
                                ))}
                            </Row>
                            {/* Add spacers on the ends of each picture set so that the arrows don't block the images to open modals */}
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className='triangle-art'></div>
                <div className='triangle-background'></div>
                <Link className="art carousel-name" to="/art">ART PROJECTS</Link>
            </div>

            
            
            
            {/* Need to make a class to align text to the right */}
            <div className="about-link"> 
                <Link to="/about">About Me</Link>
            </div>



            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedImage?.alt}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={15} md={6}>
                            {/* <Image src={selectedImage?.carousel[0]} alt={selectedImage?.alt} fluid /> */}
                            <Carousel>
                                {selectedImage?.carousel.map((picture) => (
                                    <Carousel.Item>
                                        <Image src={picture} alt={selectedImage?.alt} fluid />   
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col xs={6} md={3}>
                            <a href={selectedImage?.link}>{selectedImage?.link}</a>
                            <p>{selectedImage?.text}</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default Home;
            