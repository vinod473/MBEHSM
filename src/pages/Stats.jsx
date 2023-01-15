import React from "react";
import { Card, Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container style={{ display: "flex", paddingLeft: "200px"}}> 
            <Card
                bg="primary"
                key="Primary"
                text="white"
                style={{ width: '18rem', margin: "30px 50px"}}
                className="mb-2"
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card
                bg="secondary"
                key="secondary"
                text="white"
                style={{ width: '18rem', margin: "30px 50px" }}
                className="mb-2"
            >
            <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card
                bg="primary"
                key="Primary"
                text="white"
                style={{ width: '18rem', margin: "30px 50px" }}
                className="mb-2"
            >
            <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;