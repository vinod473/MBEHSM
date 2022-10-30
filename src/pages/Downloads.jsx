import React from 'react'
import { Card, Container, Nav, ListGroup } from 'react-bootstrap';
import MessageComponent from '../component/MessageComponent';

const cardCss = {
    width: '25rem',
    margin: '20px 0px 20px 400px'
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
const Downloads = () => {
    return (
        <Container>
            <Card style={cardCss} id='download'>
                <Card.Header style={cardHeaderCss}>
                    <i style={iconCss} class="bi bi-cloud-arrow-down-fill" />
                    Downloads
                </Card.Header>
                <ListGroup variant="flush">
                    <Nav.Link href='#'>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Enrollment Form
                        </ListGroup.Item>
                    </Nav.Link>
                    <Nav.Link href='#'>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Examination Form
                        </ListGroup.Item>
                    </Nav.Link>
                    <Nav.Link href='#'>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Registration Form
                        </ListGroup.Item>
                    </Nav.Link>
                    <Nav.Link href='#'>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Affiliation Form
                        </ListGroup.Item>
                    </Nav.Link>
                </ListGroup>
            </Card>
            <MessageComponent />
        </Container>
    );
};

export default Downloads;