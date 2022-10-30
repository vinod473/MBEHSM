import React from "react";
import { Container } from "react-bootstrap";
import MessageComponent from "../component/MessageComponent";
const imageCss = {
    maxWidth: '300px',
    maxHeight: '300px',
    padding: '20px 0px 10px 0px'
};
const Gallery = () => {
    return (
        <Container>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
                <img style={imageCss} src="galleryPhoto1.jpeg" alt="photo1" />
                <img style={imageCss} src="galleryPhoto2.jpeg" alt="photo2" />
                <img style={imageCss} src="galleryPhoto3.webp" alt="photo3" />
                <img style={imageCss} src="galleryPhoto4.jpeg" alt="photo4" />
            </div>
            <MessageComponent />
        </Container>
    );
};

export default Gallery;