import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const test = {
    maxHeight: '500px'
};
const CarouselComponent = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
                style={test}
                className="d-block w-100"
                src="Slide-2.jpeg"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                style={test}
                className="d-block w-100"
                src="Slide-3.png"
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                style={test}
                className="d-block w-100"
                src="Slide-4.jpeg"
                alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;