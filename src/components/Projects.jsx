import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projectsData = [
 
  {
    title: 'Web Development Food Ordering with CRM Algorithm',
    subtitle: 'Authentic Cafe Cikampek',
    period: '2018'
  },
  {
    title: 'Web Development landing Page ',
    subtitle: 'Tumbuh Bersama Project',
    period: '2024'
  },

];

const Projects = () => {
  return (
    <section id="projects" className="p-5">
      <Container>
        <h2 className="text-center">My Projects</h2>
        <Row className="d-flex flex-wrap">
          {projectsData.map((project, index) => (
            <Col key={index} md={6} sm={12} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  {project.subtitle && (
                    <Card.Subtitle className="mb-2 text-muted">{project.subtitle}</Card.Subtitle>
                  )}
                  <Card.Text>{project.period}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

