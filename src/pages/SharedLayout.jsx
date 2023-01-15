import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import BrandContent from "../component/BrandContent";
import ContactComponent from "../component/ContactComponent";
import Copyright from "../component/CopyrightComponent";
import NavbarComponent from "../component/NavbarComponent";

const SharedLayout = (isLoggedInUser, setIsLoggedInUser) => {
    useState(() => {

    }, [])
    return (
        <>
            <ContactComponent />
            <BrandContent />
            <NavbarComponent isLoggedInUser={isLoggedInUser} setIsLoggedInUser={setIsLoggedInUser} />
            <Outlet />
            <Copyright />
        </>
    )
};

export default SharedLayout;