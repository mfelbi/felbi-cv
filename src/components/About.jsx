import React from 'react';
import profilePic from '../assets/Image/Felbi.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-light p-5">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <Image src={profilePic} roundedCircle className="profile-pic mb-3" />
            <h1 className="display-6">Muhammad Felbi Ramdhani</h1>
            <div className="d-flex justify-content-center mt-3">
              <a href="https://github.com/mfelbi" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-felbi-ramdhani-866ba9117/" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaLinkedin size={30} />
              </a>
            </div>
          </Col>
          <Col md={8}>
            <h2 className="text-center text-md-start">About Me</h2>
            <p>Hello, my name is Muhammad Felbi Ramdhani. I am an IT Support Engineer with 4 years of experience, recently transitioning to a Fullstack Developer/Technical Support/IT Engineer role. I possess the ability to diagnose and resolve technical issues. I aim to leverage my technical support background and new development skills to effectively contribute to a dynamic development team.</p>
            <h2 className="text-center text-md-start mt-4">Education</h2>
            <p className="text-md-start">
              <strong>Bachelor of Information Technology</strong><br />
              Universitas Singaperbangsa Karawang<br />
              2013 - 2018
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
