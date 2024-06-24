import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" className="p-5">
      <Container>
        <h2 className="text-center">My Projects</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Founder</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Instagram: @catataninfo</Card.Subtitle>
                <Card.Text>2017 - 2019</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Marketing Project</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Instagram: @AbangFelix</Card.Subtitle>
                <Card.Text>2017 - 2018</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Reinstall OS dan Software PC dan laptop Laboratorium Fasilkom</Card.Title>
                <Card.Text>2017</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Web Development Food Ordering</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Authentic Cafe Cikampek</Card.Subtitle>
                <Card.Text>2018</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tumbuh Bersama Project</Card.Subtitle>
                <Card.Text>2024</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
