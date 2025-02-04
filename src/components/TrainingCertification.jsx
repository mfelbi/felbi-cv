import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import fullstackCert from '../assets/sertifikat_training/Bootcamp.jpg';
import ccnaCert from '../assets/sertifikat_training/CCNA.jpg';
import mikrotikCert from '../assets/sertifikat_training/mikrotik.jpg';
import communiCert from '../assets/sertifikat_training/Komunikasi.jpg';

const certificationData = [
  {
    title: 'FullStack Developer JavaScript Mern 2024',
    provider: 'PT. DIKA, juaracoding.com',
    image: fullstackCert,
  },
  {
    title: 'Cisco CCNA 200-301',
    provider: 'udemy.com',
    image: ccnaCert,
  },
  {
    title: 'Mikrotik Fundamental',
    provider: 'udemy.com',
    image: mikrotikCert,
  },
  {
    title: 'Communication Skill',
    provider: 'PT. Infomedia Nusantara',
    image: communiCert,
  },
];

const TrainingCertification = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleShow = (image) => {
    setSelectedCertificate(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  
  const toggleFullScreen = () => setIsFullScreen(!isFullScreen);
  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <section id="certifications" className="bg-light p-5">
      <Container>
        <h2 className="text-center mb-4">Training & Certification</h2>
        <Row>
          {certificationData.map((cert, index) => (
            <Col key={index} md={6} sm={12} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{cert.provider}</Card.Subtitle>
                  <Button variant="primary" onClick={() => handleShow(cert.image)}>View Certification</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Certification</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedCertificate && (
            <div className={`image-container ${isFullScreen ? 'fullscreen' : ''}`}>
              <Image
                src={selectedCertificate}
                alt="Certification"
                fluid
                style={{
                  transition: 'transform 0.3s ease',
                  transform: isZoomed ? 'scale(1.5)' : 'scale(1)', // Zoom effect
                  maxWidth: isFullScreen ? '100%' : '80%', // Adjust size in fullscreen
                  maxHeight: isFullScreen ? '100vh' : '80vh',
                  objectFit: 'contain',
                }}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleZoom}>
            {isZoomed ? 'Zoom Out' : 'Zoom In'}
          </Button>
          <Button variant="primary" onClick={toggleFullScreen}>
            {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default TrainingCertification;
