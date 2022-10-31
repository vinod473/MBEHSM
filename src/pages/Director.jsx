import React from "react";
import { Container } from "react-bootstrap";
import MessageComponent from "../component/MessageComponent";
import QuickAccessCards from "../component/QuickAccessCards";

const Director = () => {
    return (
        <Container>
            <MessageComponent />
            <QuickAccessCards />
        </Container>
    );
};

export default Director;