import React from "react";
import { Container } from "react-bootstrap";

const brandimageCss = {
    height: '100px',
};

const BrandContent = () => {
    return (
        <Container style={{display:'flex', padding:'6px 0px 4px 0px'}}>
            <img src="Brand Logo.png" alt="logo" style={brandimageCss}/>
            <div style={{marginLeft:'15px', marginTop:'10px'}}>
                <h2 style={{color:'green'}}>MEDICINE BOARD OF ELECTRO HOMEOPATHY SYSTEM OF MEDICINE</h2>
                <h3>For the Promotion, Research and Development of Electro Homeopathy</h3>
            </div>
        </Container>
    );
};

export default BrandContent;