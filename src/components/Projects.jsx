import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const styles = {
  projectText: {
    marginBottom: '1px', // Mengatur jarak antar elemen
  },
};

const projectsData = [
  {
    title: 'Web Development Food Ordering with CRM Algorithm',
    subtitle: 'Authentic Cafe Cikampek',
    period: '2018',
    frontend: ['HTML', 'CSS'],
    backend: ['PHP'],
    database: ['SQL'],
    websiteLink: 'Local', // Link website
  },
  {
    title: 'Web Development Landing Page',
    subtitle: 'Tumbuh Bersama Project',
    period: '2024',
    frontend: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    backend: ['-'],
    database: ['-'],
    websiteLink: 'Local',
  },
  {
    title: 'My Personal CV',
    subtitle: 'Personal CV',
    period: '2023',
    frontend: ['React.js','HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    backend: ['-'],
    database: [''],
    websiteLink: 'felbi.vercel.app',
  },
  {
    title: 'Kelapa Bakar Pak Muhdi',
    subtitle: 'Personal Family Project',
    period: '2024-2025',
    frontend: ['React JS', 'HTML','CSS', 'JavaScript', 'Bootstrap'],
    backend: ['Node JS'],
    database: ['MongoDB'],
    websiteLink: 'Local',
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

                  {/* Frontend */}
                  {project.frontend && (
                    <Card.Text style={styles.projectText}>
                      <strong>Frontend:</strong> {project.frontend.join(', ')}
                    </Card.Text>
                  )}

                  {/* Backend */}
                  {project.backend && (
                    <Card.Text style={styles.projectText}>
                      <strong>Backend:</strong> {project.backend.join(', ')}
                    </Card.Text>
                  )}

                  {/* Database */}
                  {project.database && (
                    <Card.Text style={styles.projectText}>
                      <strong>Database:</strong> {project.database.join(', ')}
                    </Card.Text>
                  )}

                  {/* Website Link */}
                  {project.websiteLink && (
                    <Card.Text>
                      <strong>Website Link:</strong>{' '}
                      {project.websiteLink === 'Local' ? (
                        // Jika websiteLink adalah "Local", tampilkan teks biasa
                        <span>{project.websiteLink}</span>
                      ) : (
                        // Jika bukan "Local", tampilkan sebagai tautan
                        <a href={`https://${project.websiteLink}`} target="_blank" rel="noopener noreferrer">
                          {project.websiteLink}
                        </a>
                      )}
                    </Card.Text>
                  )}
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
