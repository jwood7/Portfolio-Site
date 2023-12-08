import React from 'react';
import { Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import linkImage from '../Images/Logos/link.png';

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
                        <div className="hover-image">
                        <Image
                            src={image.thumb}
                            alt={image.alt}
                            fluid
                            onClick={() => handleImageClick(image)}
                        />
                        <div className="overlay" onClick={() => handleImageClick(image)}>{image.alt}</div> 
                        </div>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedImage?.alt}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                {/* <Image src={selectedImage?.carousel[0]} alt={selectedImage?.alt} fluid /> */}
                                <Carousel interval={null}>
                                    {selectedImage?.carousel.map((picture) => (
                                        <Carousel.Item>
                                            <Image className="modal-image" src={picture} alt={selectedImage?.alt} title={selectedImage?.alt} />   
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                            <Col>
                            <p>{selectedImage?.text}</p>
                            {selectedImage?.link ? <a className="link-label" href={selectedImage?.link}><Image className="link-img" src={linkImage}/>{selectedImage?.linkLabel}</a> : null}
                            </Col>
                        </Row>
                    </Container>
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