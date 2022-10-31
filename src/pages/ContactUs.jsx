import React from 'react'
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ListGroup } from 'react-bootstrap';

const iconCss = {
    margin: '0px 30px 0px 10px',
    color: 'blue',
    fontSize: '18px'
};
const ContactUs = () => {
    return (
        <Container style={{padding:'50px 300px 25px 200px'}}>
            <Card>
                <Card.Header style={{textAlign:'center', fontSize:'20px', fontWeight:'bold', backgroundColor:'#f5efbf'}}>Post Your Message </Card.Header>
                <Form style={{margin:'40px'}}>
                    <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Container>
                    <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="phone" />
                        </Form.Group>
                    </Container>
                    <Container style={{padding:'10px 70px'}}>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </Container>
                    <Container style={{textAlign:'center'}}>
                        <Button variant="primary" type="submit" >
                            Send Message
                        </Button>
                    </Container>
                </Form>
            </Card>
            <Card style={{margin:'30px 100px 0px 100px'}}>
                <Card.Header style={{textAlign:'center', fontSize:'18px', fontWeight:'bold'}}>Contact Info</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Container style={{display:'flex'}}>
                            <i style={iconCss} class="bi bi-geo-alt-fill"></i>
                            <div>
                                <p>Office: Near Dhanaura Bus Stand,</p>
                                <p>Amroha - 244236,</p>
                                <p>Amroha</p>
                            </div>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container style={{display:'flex'}}>
                            <i style={iconCss} class="bi bi-telephone-fill"/>
                            <div>
                                <p>+91-7599833082</p>
                                <p>+91 9458445207</p>
                            </div>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container style={{display:'flex'}}>
                            <i style={iconCss} class="bi bi-envelope-fill" />
                            admission@mbehsm.in
                        </Container>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    );
};

export default ContactUs;

