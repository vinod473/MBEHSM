import React from "react";
import CarouselComponent from '../component/CarouselComponent';
import MessageComponent from "../component/MessageComponent";
import QuickAccessCards from "../component/QuickAccessCards";

const Home = () => {
    return (
    <div>
        <CarouselComponent />
        <MessageComponent/>
        <QuickAccessCards />
    </div> 
    );
};

export default Home;