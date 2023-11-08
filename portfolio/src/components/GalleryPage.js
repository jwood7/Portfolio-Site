import React from 'react';
import { Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Gallery({images}) {
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
        
        <Container >
            <Row xs={2} md={4} className="g-4">
                {images.map((image) => (
                    <Col key={image.id}>
                        <Image
                            src={image.thumb}
                            alt={image.alt}
                            fluid
                            onClick={() => handleImageClick(image)}
                        />
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedImage?.alt}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={15} md={6}>
                            {/* <Image src={selectedImage?.carousel[0]} alt={selectedImage?.alt} fluid /> */}
                            <Carousel interval={null}>
                                {selectedImage?.carousel.map((picture) => (
                                    <Carousel.Item>
                                        <Image src={picture} alt={selectedImage?.alt} fluid />   
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col xs={6} md={3}>
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
        </Container>
    );
}

export default Gallery;