import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import mastersystemLogo from '../assets//Logo perusahaan/mastersystem.png'; // Logo PT. Mastersystem Infotama
import infomediaLogo from '../assets/Logo perusahaan/infomedia.png'; // Logo PT. Infomedia Nusantara
import tozyLogo from '../assets/Logo perusahaan/base.png'; // Logo PT. Tozy Sentosa
import idamanLogo from '../assets/Logo perusahaan/base.png'; // Logo PT. Idaman Megah Indah

const Experience = () => {
  return (
    <section id="experience" className="bg-light p-5">
      <Container>
        <h2 className="text-center">Work Experience</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col xs={3} className="text-center">
                    <Image src={mastersystemLogo} alt="Mastersystem Infotama" style={{ maxWidth: '65%' }} />
                  </Col>
                  <Col xs={9}>
                    <Card.Title>Information Technology (Project PT. Superbank)</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">PT. Mastersystem Infotama</Card.Subtitle>
                    <Card.Text>
                      Jan 2024 - Present · 6 bln
                      <br />
                      <FaMapMarkerAlt /> Jakarta, Indonesia
                    </Card.Text>
                    <Card.Text>
                      <ul>
                        <li>Installed, Hardening, Configured device Windows, Mac OS & on boarding device.</li>
                        <li>Troubleshot computer hardware, software and network.</li>
                        <li>Google Workspace service and migration.</li>
                        <li>Jira ticketing and management working.</li>
                        <li>Implemented new policies and procedures for end user computing.</li>
                        <li>Meeting room preparation and audio visual.</li>
                      </ul>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col xs={3} className="text-center">
                    <Image src={infomediaLogo} alt="Infomedia Nusantara" style={{ maxWidth: '65%' }} />
                  </Col>
                  <Col xs={9}>
                    <Card.Title>IT Engineer (Project PT. HM Sampoerna)</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">PT. Infomedia Nusantara</Card.Subtitle>
                    <Card.Text>
                      2021 - 2022
                      <br />
                      <FaMapMarkerAlt /> Jakarta, Indonesia 
                    </Card.Text>
                    <Card.Text>
                      <ul>
                        <li>Installed and configured Windows autopilot/ Standalone.</li>
                        <li>Troubleshot computer hardware, software and network.</li>
                        <li>Microsoft 365 Service and migration.</li>
                        <li>ServiceNow ticketing management system.</li>
                        <li>Meeting room preparation and audio visual.</li>
                        <li>Asset management IT.</li>
                      </ul>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col xs={3} className="text-center">
                    <Image src={tozyLogo} alt="Tozy Sentosa" style={{ maxWidth: '65%' }} />
                  </Col>
                  <Col xs={9}>
                    <Card.Title>IT Support</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">PT. Tozy Sentosa</Card.Subtitle>
                    <Card.Text>
                      2019
                      <br />
                      <FaMapMarkerAlt /> Karawang, Indonesia 
                    </Card.Text>
                    <Card.Text>
                      <ul>
                        <li>Installed applications and monitoring computers to ensure the operations systems were running effectively and efficiently.</li>
                        <li>Resolved technical issues quickly and accurately to minimize downtime.</li>
                        <li>Diagnosed and fixed hardware, software and networking issues in a timely manner to reduce user impact.</li>
                      </ul>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col xs={3} className="text-center">
                    <Image src={idamanLogo} alt="Idaman Megah Indah" style={{ maxWidth: '65%' }} />
                  </Col>
                  <Col xs={9}>
                    <Card.Title>IT Engineer</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">PT. Idaman Megah Indah</Card.Subtitle>
                    <Card.Text>
                      2018
                      <br />
                      <FaMapMarkerAlt /> Karawang, Indonesia 
                    </Card.Text>
                    <Card.Text>
                      <ul>
                        <li>Installed, configured, and maintained software and network systems for end users.</li>
                        <li>Ensured all IT systems and processes were compliant with industry standards and regulations.</li>
                      </ul>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h2 className="text-center mt-5">Areas of Expertise & Technical Skills</h2>
        <Row>
          <Col>
            <ul>
              <li><strong>Technical Support:</strong> Installer OS - Software, Troubleshooting, Backup</li>
              <li><strong>ITSM:</strong> ServiceNow, Jira</li>
              <li><strong>Programming Languages:</strong> JavaScript, HTML</li>
              <li><strong>Frameworks/Libraries:</strong> React, Node.js, Express.js</li>
              <li><strong>Frameworks Front-End:</strong> CSS, Bootstrap, HTML</li>
              <li><strong>Databases:</strong> MongoDB, MySQL</li>
              <li><strong>Operating Systems:</strong> Windows, Mac OS, Linux</li>
              <li><strong>Networking:</strong> Network configuration with Cisco/Mikrotik</li>
            </ul>
          </Col>
        </Row>
        <h2 className="text-center mt-5">Training & Certification</h2>
        <Row>
          <Col>
            <ul>
              <li>FullStack Developer JavaScript Mern 2024 | PT. DIKA, juaracoding.com</li>
              <li>Cisco CCNA 200-301 | udemy.com</li>
              <li>Mikrotik Fundamental | udemy.com</li>
              <li>Communication Skill | PT. Infomedia Nusantara</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;