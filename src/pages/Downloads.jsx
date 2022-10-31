import React from 'react'
import { Card, Container, Nav, ListGroup } from 'react-bootstrap';

const cardCss = {
    width: '25rem',
    backgroundColor: '#e876db'
};
const iconCss = {
    fontSize: '25px',
    color: 'blue',
    marginRight: '7px'
};
const cardHeaderCss = {
    textAlign: 'center',
    fontSize: '1.2rem'
};
const downloadIconCss = {
    margin: '0px 20px'
};
const containerCss = {
    display:'flex',
    justifyContent:'space-around',
    padding:'20px 0px',
};

const Downloads = () => {
    return (
        <Container style={containerCss}>
            <Card style={cardCss} id='download'>
                <Card.Header style={cardHeaderCss}>
                    <i style={iconCss} class="bi bi-cloud-arrow-down-fill" />
                    Downloads
                </Card.Header>
                <ListGroup variant="flush">
                    <Nav.Link href='enrollmentForm.pdf' download>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Enrollment Form
                        </ListGroup.Item>
                    </Nav.Link>
                    <Nav.Link href='examinationForm.pdf' download>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Examination Form
                        </ListGroup.Item>
                    </Nav.Link>
                    <Nav.Link href='registrationForm.pdf' download>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Registration Form
                        </ListGroup.Item>
                    </Nav.Link>
                    <Nav.Link href='AffiliationForm.pdf' download>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Affiliation Form
                        </ListGroup.Item>
                    </Nav.Link>
                </ListGroup>
            </Card>
        </Container>
    );
};

export default Downloads;