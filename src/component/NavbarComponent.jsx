import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="About Board" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">About Board</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Electro Homeopathy</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Father of Electropathy</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Why to Join M.B.E.H.S</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Administration" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Adminstration Officials</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Director Message</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Registrar Message</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Academic" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Student Corner</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Course Details</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Academic Calender</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Legal Status Details</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Affiliation Process</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Practice Registration</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Registered Doctor List</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Registration</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Gallery</Nav.Link>
                <Nav.Link href="#home">Examination</Nav.Link>
                <Nav.Link href="#home">Results</Nav.Link>
                <Nav.Link href="#home">Download</Nav.Link>
                <Nav.Link href="#home">Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavbarComponent;