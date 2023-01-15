import React from "react";
import Container from 'react-bootstrap/Container';

const copyrightCss = {
    backgroundColor: 'lightgreen',
    padding: '6px 0px'
};
const Copyright = () => {
    return (
        <div style={copyrightCss} id='contactUs'>
            <Container style={{textAlign: 'center'}}>
                <i className="bi bi-c-circle-fill" style={{margin:'0px 5px'}}/>
                All Copyright Reserved By MBEHSM
            </Container>
        </div>
    );
};

export default Copyright;