import React from 'react';
import Container from 'react-bootstrap/Container';

const contactCss = {
    backgroundColor: 'lightgreen'
};
const hello = {
    padding: '5px',
};
const ContactComponent = () => {
    return (
        <div style={contactCss}>
            <Container>
                <span style={hello}>
                    +91-7599833082,9458445207
                </span>
                <span style={hello}>admission@mbehsmindia.com</span>
                <span style={hello}>Welcome to our website</span>
            </Container>
        </div>
    );
};

export default ContactComponent;