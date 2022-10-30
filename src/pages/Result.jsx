import React from "react";
import { Container, InputGroup, Form, Button, Card } from "react-bootstrap";

const loginLabelCss = {
    marginTop: '7px',
    marginBottom: '7px'
};
const headerCss = {
    textAlign:'center',
    fontWeight:'bold',
    backgroundColor:'#e876db'
};

const Gallery = () => {
    return (
        <Container style={{display:'flex', justifyContent:'space-around', padding:'20px 0px'}} >
            <Card style={{width: '25rem', margin: '10px 0px 5px 0px'}}>
                <Card.Header style={headerCss}>Student Result Download</Card.Header>
                <div style={{padding:'20px'}}>
                    <div style={loginLabelCss}>Enter Enrollment/Roll Number</div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Enter"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div style={{textAlign:'center'}}>
                        <Button variant="success" type="submit">Submit</Button>
                    </div>
                </div>
            </Card>
        </Container>
    );
};

export default Gallery;