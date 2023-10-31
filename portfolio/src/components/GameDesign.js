import React from 'react';
import { Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';

const images = [
    {
        id: 1,
        src: 'https://via.placeholder.com/500x500',
        alt: 'Image 1',
        text: 'This is a description of image 1.',
    },
    {
        id: 2,
        src: 'https://via.placeholder.com/500x500',
        alt: 'Image 2',
        text: 'This is a description of image 2.',
    },
    {
        id: 3,
        src: 'https://via.placeholder.com/500x500',
        alt: 'Image 3',
        text: 'This is a description of image 3.',
    },
    {
        id: 4,
        src: 'https://via.placeholder.com/500x500',
        alt: 'Image 4',
        text: 'This is a description of image 4.',
    },
    {
        id: 5,
        src: 'https://via.placeholder.com/500x500',
        alt: 'Image 5',
        text: 'This is a description of image 5.',
    },
    {
        id: 6,
        src: 'https://via.placeholder.com/500x500',
        alt: 'Image 6',
        text: 'This is a description of image 6.',
    },
    {
        id: 7,
        src: 'https://via.placeholder.com/500x500',
        alt: 'Image 7',
        text: 'This is a description of image 7.',
    },
    {
        id: 8,
        src: 'https://via.placeholder.com/500x500',
        alt: 'Image 8',
        text: 'This is a description of image 8.',
    },
    {
        id: 9,
        src: 'https://via.placeholder.com/500x500',
        alt: 'Image 9',
        text: 'This is a description of image 9.',
    },
    {
        id: 10,
        src: 'https://via.placeholder.com/500x500',
        alt: 'Image 10',
        text: 'This is a description of image 10.',
    },
];

function GameDesign() {
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
        <div className="game-design"><Container >
            <h1>GAME DESIGN PROJECTS</h1>
            <Row xs={2} md={4} className="g-4">
                {images.map((image) => (
                    <Col key={image.id}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fluid
                            onClick={() => handleImageClick(image)}
                        />
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedImage?.alt}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12} md={6}>
                            <Image src={selectedImage?.src} alt={selectedImage?.alt} fluid />
                        </Col>
                        <Col xs={12} md={6}>
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
        </Container></div>
    );
}

export default GameDesign;
