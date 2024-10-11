import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import './Homepage/home.css';

export default function Menubar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => setExpanded(false);

  return (
    <Navbar collapseOnSelect expand="lg" expanded={expanded} className="bg-body-light">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand id='nav-logo' as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClose} className="nav-link-custom" activeClassName="active" id='home-link'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClose} className="nav-link-custom" activeClassName="active" id='other-links'>
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/products" onClick={handleNavClose} className="nav-link-custom" activeClassName="active" id='other-links'>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={handleNavClose} className="nav-link-custom" activeClassName="active" id='other-links'>
              Blog
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button as={Link} to='/login' variant="outline-danger" className="me-2">Login</Button>
            <div className="signup-button-wrapper">
              <Button as={Link} to='/signup' variant="danger">Sign up</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}