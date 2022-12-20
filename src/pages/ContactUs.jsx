import React from 'react'
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        </Container>
    );
};

export default ContactUs;

