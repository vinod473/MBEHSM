import React from "react";
import {Card, Button} from 'react-bootstrap';
import {Container, ListGroup} from 'react-bootstrap';
import {Form, InputGroup} from 'react-bootstrap';

const cardCss = {
    width: '25rem',
    margin: '10px 0px 5px 0px'
};
const cardImgCss = {
    maxHeight: '14rem'
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
const loginLabelCss = {
    marginTop: '7px',
    marginBottom: '7px'
};
const downloadIconCss = {
    margin: '0px 10px'
};

const QuickAccessCards = () => {
    return (
        <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
            <Card style={cardCss}>
                <Card.Header style={cardHeaderCss}>
                    <i style={iconCss} class="bi bi-cloud-arrow-down-fill" />
                    Downloads
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item><i class="bi bi-download" style={downloadIconCss}/>Application Form</ListGroup.Item>
                    <ListGroup.Item><i class="bi bi-download" style={downloadIconCss}/>Examination Form</ListGroup.Item>
                    <ListGroup.Item><i class="bi bi-download" style={downloadIconCss}/>Syllabus Download</ListGroup.Item>
                    <ListGroup.Item><i class="bi bi-download" style={downloadIconCss}/>Brochure Download</ListGroup.Item>
                    <ListGroup.Item><i class="bi bi-download" style={downloadIconCss}/>Practice Registration Form</ListGroup.Item>
                    <ListGroup.Item><i class="bi bi-download" style={downloadIconCss}/>Download Student's Admit Card</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card style={cardCss}>
                <Card.Header style={cardHeaderCss}>
                    <i style={iconCss} class="bi bi-bullseye" />
                    Notice Board
                </Card.Header>
            </Card>
            <Card style={cardCss}>
                <Card.Header style={cardHeaderCss}>
                    <i style={iconCss} class="bi bi-person-check-fill" />
                    College Login Dashboard
                </Card.Header>
                <Container>
                    <div style={loginLabelCss}>Enter College Code/User ID</div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Enter ID/Code"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>   
                    <Button variant="success" type="submit">Submit</Button>
                </Container>
            </Card>
            <Card style={cardCss}>
                <Card.Img style={cardImgCss} variant="top" src="pexels-gustavo-fring-3985153.jpg" />
                <Card.Body>
                    <Card.Title>About Us</Card.Title>
                    <Card.Text>
                        Medicine Board Of Electro Homeopathy System Of Medicine is an autonomous
                        organization providing education in medical Science
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Card style={cardCss}>
                <Card.Img style={cardImgCss} variant="top" src="pexels-lil-artsy-1925536.jpg" />
                <Card.Body>
                    <Card.Title>Electro Homeopathy</Card.Title>
                    <Card.Text>
                        Electro Homoeopathy is a plant-orientated system of herbal medicine. The
                        Electro Homoeopathic remedies
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Card style={cardCss}>
                <Card.Img style={cardImgCss} variant="top" src="pexels-perfecto-capucine-1329571.jpg" />
                <Card.Body>
                    <Card.Title>Course Details</Card.Title>
                    <Card.Text>
                        Course in Electropathy offered by M.B.E.H.S.M. 
                        Students completing the Certificate course are eligible for Diploma Course (D.E.M.S.)
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default QuickAccessCards;