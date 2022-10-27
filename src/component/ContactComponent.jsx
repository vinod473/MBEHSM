import React from 'react';
import Container from 'react-bootstrap/Container';
import '../App.css';

const contactCss = {
    backgroundColor: 'lightgreen',
    padding: '5px 0px'
};
const contactItemCss = {
    padding: '5px',
};
const iconCss = {
    margin: '0px 8px'
};

const ContactComponent = () => {
    return (
        <div style={contactCss}>
            <Container style={{paddingLeft:'30px'}}>
                <span style={contactItemCss}>
                    <i style={iconCss} class="bi bi-telephone-fill"/>
                    +91-7599833082,9458445207
                </span>
                <span style={contactItemCss}>
                    <i style={iconCss} class="bi bi-envelope-fill" />
                    admission@mbehsmindia.com
                </span>
                <span style={contactItemCss}>
                    <i style={iconCss} class="bi bi-hand-index-thumb-fill" />
                    <span class='blink_me'>Welcome to our website</span>
                </span>
            </Container>
        </div>
    );
};

export default ContactComponent;