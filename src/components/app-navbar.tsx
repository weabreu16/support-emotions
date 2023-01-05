import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const AppNavBar = () => {
  return (
    <Navbar>
        <Container>
            <Navbar.Brand>EmotionsAPP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navbar-collapse collapse">
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
