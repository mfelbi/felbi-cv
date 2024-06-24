import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/Image/logofelbi.png';

const Header = () => {
  const navbarHeight = '40px'; // Tinggi navbar
  const logoHeight = '30px'; // Tinggi logo 

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      fixed="top" 
      style={{ height: navbarHeight, padding: '0' }} // Tinggi dan padding navbar
    >
      <Navbar.Brand href="#home" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: logoHeight }} // Tinggi logo
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ alignItems: 'center', height: '100%' }}>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
