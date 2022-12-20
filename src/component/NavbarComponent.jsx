import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const test = {
    margin:'0px 8px',
    backgroundColor:'lightgreen'
};
const NavbarComponent = () => {
    return (
        <Navbar style={{backgroundColor:'lightgreen'}} expand="lg">
            <Container style={{paddingLeft:'40px'}}>
                <Navbar.Brand as={Link} to='/' href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="About Board" id="basic-nav-dropdown" style={test}>
                        <NavDropdown.Item as={Link} to='/about'>About Board</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/electropathy'>Electro Homeopathy</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/father-ehp'>Father of Electropathy</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/joinMBEHSM'>Why to Join M.B.E.H.S</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Administration" id="basic-nav-dropdown" style={test}>
                        <NavDropdown.Item as={Link} to='/'>Adminstration Officials</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/director'>Director Message</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/registrar'>Registrar Message</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Academic" id="basic-nav-dropdown" style={test}>
                        <NavDropdown.Item as={Link} to='/student'>Student Corner</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Course Details</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/'>Academic Calender</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/legal">Legal Status Details</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/affiliation'>Affiliation Process</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/'>Practice Registration</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/'>Registered Doctor List</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/registration'>Registration</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to='/gallery' style={test}>Gallery</Nav.Link>
                    <Nav.Link as={Link} to="/examination" style={test}>Examination</Nav.Link>
                    <Nav.Link as={Link} to="/result" style={test}>Results</Nav.Link>
                    <Nav.Link as={Link} to="/download" style={test}>Download</Nav.Link>
                    <Nav.Link as={Link} to='/contactUs' style={test}>Contact Us</Nav.Link>
                    <Nav.Link as={Link} to='/login' style={test}>Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;