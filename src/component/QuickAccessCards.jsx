import React from "react";
import {Card, Button} from 'react-bootstrap';
import {Container, ListGroup, Nav} from 'react-bootstrap';
import {Form, InputGroup} from 'react-bootstrap';

const cardCss = {
    width: '25rem',
    margin: '10px 0px 5px 0px',
};
const cardImgCss = {
    maxHeight: '14rem'
};
const iconCss = {
    fontSize: '25px',
    color: 'green',
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
const noticeHeading = {
    color: 'blue',
    fontSize: '15px',
};
const noticeBody = {
    fontSize: '15px',
    borderBottomStyle: 'solid',
    marginBottom: '10px',
    paddingBottom: '10px'
};
const QuickAccessCards = () => {
    return (
        <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
            <Card style={cardCss} id='download'>
                <Card.Header style={cardHeaderCss}>
                    <i style={iconCss} class="bi bi-cloud-arrow-down-fill" />
                    Downloads
                </Card.Header>
                <ListGroup variant="primary">
                    <Nav.Link href='#'>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Application Form
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
                            Syllabus Download
                        </ListGroup.Item>
                    </Nav.Link>
                    <Nav.Link href='#'>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Brochure Download
                        </ListGroup.Item>
                    </Nav.Link>
                    <Nav.Link href='#'>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Practice Registration Form
                        </ListGroup.Item>
                    </Nav.Link>
                    <Nav.Link href='#'>
                        <ListGroup.Item>
                            <i class="bi bi-download" style={downloadIconCss}/>
                            Download Student's Admit Card
                        </ListGroup.Item>
                    </Nav.Link>
                </ListGroup>
            </Card>
            <Card style={cardCss}>
                <Card.Header style={cardHeaderCss}>
                    <i style={iconCss} class="bi bi-bullseye" />
                    Notice Board
                </Card.Header>
                <Container>
                    <div id="scroll-container">
                        <div id="scroll-text">
                            <div>
                                <div style={noticeHeading}>ADMISSION NOTICE</div>
                                <div style={noticeBody}>Admissions are open</div>
                            </div>
                            <div>
                                <div style={noticeHeading}>RESULT PUBLICATION</div>
                                <div style={noticeBody}>All Result Declared.</div>
                            </div>
                            <div>
                                <div style={noticeHeading}>ADMISSION NOTICE</div>
                                <div style={noticeBody}>Admissions are open</div>
                            </div>
                            <div>
                                <div style={noticeHeading}>RESULT PUBLICATION</div>
                                <div style={noticeBody}>All Result Declared.</div>
                            </div>
                        </div>
                    </div>
                </Container>
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
                    <Button variant="success" type="submit">Login</Button>
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