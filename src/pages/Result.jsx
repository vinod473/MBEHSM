import React from "react";
import { Container, InputGroup, Form, Button, Card } from "react-bootstrap";

const loginLabelCss = {
    marginTop: '7px',
    marginBottom: '7px'
};

const Gallery = () => {
    return (
        <Container>
            <Card style={{padding:'20px'}}>
                <div style={loginLabelCss}>Enter College Code/User ID</div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Enter ID/Code"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Button variant="success" type="submit">Login</Button>
                </Card>
        </Container>
    );
};

export default Gallery;