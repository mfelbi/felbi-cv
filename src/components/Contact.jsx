import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const contactData = [
  {
    icon: <FaEnvelope />, 
    text: 'Email: felbiramdhani@gmail.com', 
    link: 'mailto:felbiramdhani@gmail.com'
  },
  {
    icon: <FaPhone />, 
    text: 'Phone: 081298057089', 
    link: 'tel:+6281298057089'
  },
  {
    icon: <FaWhatsapp />, 
    text: 'WhatsApp', 
    link: 'https://wa.me/6281298057089'
  },

];

const Contact = () => {
  return (
    <section id="contact" className="p-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contact</h2>
        <Row className="justify-content-center">
          {contactData.map((contact, index) => (
            <Col key={index} md="auto" className="text-center">
              <p>
                {contact.icon}{' '}
                <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                  {contact.text}
                </a>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
