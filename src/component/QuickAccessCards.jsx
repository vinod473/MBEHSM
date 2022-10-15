import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

const cardCss = {
    width: '25rem',
    margin: '10px 0px 5px 0px'
};
const cardImgCss = {
    maxHeight: '15rem'
};

const QuickAccessCards = () => {
    return (
        <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
            <Card style={cardCss}>
            <Card.Header style={{textAlign:'center'}}>Downloads</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Application Form</ListGroup.Item>
                <ListGroup.Item>Examination Form</ListGroup.Item>
                <ListGroup.Item>Syllabus Download</ListGroup.Item>
                <ListGroup.Item>Brochure Download</ListGroup.Item>
                <ListGroup.Item>Practice Registration Form</ListGroup.Item>
                <ListGroup.Item>Download Student's Admit Card</ListGroup.Item>
            </ListGroup>
            </Card>
            <Card style={cardCss}>
                <Card.Img style={cardImgCss} variant="top" src="pexels-lil-artsy-1925536.jpg" />
                <Card.Body>
                    <Card.Title>Electro Homeopathy</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Card style={cardCss}>
                <Card.Img style={cardImgCss} variant="top" src="pexels-perfecto-capucine-1329571.jpg" />
                <Card.Body>
                    <Card.Title>Course Details</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Card style={cardCss}>
                <Card.Img style={cardImgCss} variant="top" src="pexels-gustavo-fring-3985153.jpg" />
                <Card.Body>
                    <Card.Title>About Us</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Card style={cardCss}>
                <Card.Img style={cardImgCss} variant="top" src="pexels-lil-artsy-1925536.jpg" />
                <Card.Body>
                    <Card.Title>Electro Homeopathy</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Card style={cardCss}>
                <Card.Img style={cardImgCss} variant="top" src="pexels-perfecto-capucine-1329571.jpg" />
                <Card.Body>
                    <Card.Title>Course Details</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default QuickAccessCards;