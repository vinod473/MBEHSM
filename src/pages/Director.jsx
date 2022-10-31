import React from "react";
import { Container } from "react-bootstrap";
import MessageComponent from "../component/MessageComponent";
import QuickAccessCards from "../component/QuickAccessCards";

const Director = () => {
    return (
        <Container>
            <h2 style={{padding:'0px 400px'}}>Coming Soon....</h2>
            <MessageComponent />
            <QuickAccessCards />
        </Container>
    );
};

export default Director;