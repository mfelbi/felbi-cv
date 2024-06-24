import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="p-5">
      <Container>
        <h2 className="text-center">Contact</h2>
        <Row className="justify-content-center">
          <Col md="auto" className="text-center">
            <p>
              <FaEnvelope /> Email: felbiramdhani@gmail.com
            </p>
          </Col>
          <Col md="auto" className="text-center">
            <p>
              <FaPhone /> Phone: 081298057089 (WhatsApp)
            </p>
          </Col>
        </Row>
        {/* <Row className="justify-content-center mt-3">
          <Col md="auto" className="text-center">
            <a href="https://github.com/mfelbi" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-felbi-ramdhani-866ba9117/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaLinkedin size={30} />
            </a>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default Contact;
