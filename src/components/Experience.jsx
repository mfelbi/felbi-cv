import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import mastersystemLogo from '../assets//Logo perusahaan/mastersystem.png'; // Logo PT. Mastersystem Infotama
import infomediaLogo from '../assets/Logo perusahaan/infomedia.png'; // Logo PT. Infomedia Nusantara
import tozyLogo from '../assets/Logo perusahaan/base.png'; // Logo PT. Tozy Sentosa
import idamanLogo from '../assets/Logo perusahaan/base.png'; // Logo PT. Idaman Megah Indah
import kodingaiLogo from '../assets/Logo perusahaan/kodingai.png'; // Logo PT.Koding Anak Indonesia

const experienceData = [
  {
    title: 'Junior Software Engineer',
    company: 'PT. Koding Anak Indonesia',
    logo: kodingaiLogo,
    period: 'Sept 2024 - Jan 2025',
    location: 'Tangerang, Indonesia',
    tasks: [
      'Provide  technical  support  for  internal  and  external  users,  ensuring  fast  and  effective problem resolution in terms of bugs, system issues, and new feature implementation.',
      'Support Application: Monitoring & Troubleshoot Database, Backend & Frontend',
      'POS  System  and  SAP:  Support  development  and  troubleshooting  of  Sales  App-based',
      'POS  applications  integrated  with  SAP  systems,  ensuring  smooth  transaction  and operational processes.'
    ]
  },
  {
    title: 'IT Engineer (Project PT. Superbank)',
    company: 'PT. Mastersystem Infotama',
    logo: mastersystemLogo,
    period: 'Jan 2024 - Sept 2024',
    location: 'Jakarta, Indonesia',
    tasks: [
      'Installed, Hardening, Configured device Windows, Mac OS & onboarding device.',
      'Troubleshot computer hardware, software, and network.',
      'Google Workspace service and migration.',
      'Jira ticketing and management.',
      'Implemented new policies and procedures for end user computing.',
      'Meeting room preparation and audio-visual setup.'
    ]
  },
  {
    title: 'IT Support SPV',
    company: 'PT. Tozy Sentosa',
    logo: tozyLogo,
    period: 'Jan 2019 - Sept 2019',
    location: 'Karawang, Indonesia',
    tasks: [
      'Installed applications and monitored systems for efficient operation.',
      'Quickly resolved technical issues to minimize downtime.',
      'Diagnosed and fixed hardware, software, and networking issues.'
    ]
  },
  {
    title: 'IT End User Computing (Project PT. HM Sampoerna)',
    company: 'PT. Infomedia Nusantara',
    logo: infomediaLogo,
    period: 'Agust 2021 - Jan 2023',
    location: 'Jakarta, Indonesia',
    tasks: [
      'Installed and configured Windows Autopilot/Standalone.',
      'Troubleshot computer hardware, software, and network.',
      'Microsoft 365 Service and migration.',
      'ServiceNow ticketing management system.',
      'Meeting room preparation and audio-visual setup.',
      'IT asset management.'
    ]
  },
  {
    title: 'IT Support',
    company: 'PT. Idaman Megah Indah',
    logo: idamanLogo,
    period: 'Jan 2018 - Dec 2018',
    location: 'Karawang, Indonesia',
    tasks: [
      'Installed, configured, and maintained IT infrastructure.',
      'Ensured IT systems and policies complied with regulations.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-light p-5">
      <Container>
        <h2 className="text-center mb-4">Work Experience</h2>
        <Row className="d-flex flex-warp">
          {experienceData.map((job, index) => (
            <Col key={index} md={6} sm={12} className="mb-4 d-flex">
              <Card className="flex-fill">
                <Card.Body>
                  <Row>
                    <Col xs={3} className="text-center">
                      <Image src={job.logo} alt={job.company} style={{ maxWidth: '65%' }} />
                    </Col>
                    <Col xs={9}>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                      <Card.Text>
                        {job.period}
                        <br />
                        <FaMapMarkerAlt /> {job.location}
                      </Card.Text>
                      <Card.Text>
                        <ul>
                          {job.tasks.map((task, i) => (
                            <li key={i}>{task}</li>
                          ))}
                        </ul>
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
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
        {/* <h2 className="text-center mt-5">Training & Certification</h2>
        <Row>
          <Col>
            <ul>
              <li>FullStack Developer JavaScript Mern 2024 | PT. DIKA, juaracoding.com</li>
              <li>Cisco CCNA 200-301 | udemy.com</li>
              <li>Mikrotik Fundamental | udemy.com</li>
              <li>Communication Skill | PT. Infomedia Nusantara</li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default Experience;