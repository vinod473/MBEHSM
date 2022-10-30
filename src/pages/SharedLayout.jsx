import React from "react";
import { Outlet } from "react-router-dom";
import BrandContent from "../component/BrandContent";
import ContactComponent from "../component/ContactComponent";
import Copyright from "../component/CopyrightComponent";
import NavbarComponent from "../component/NavbarComponent";

const SharedLayout = () => {
    return (
        <>
            <ContactComponent />
            <BrandContent />
            <NavbarComponent />
            <Outlet />
            <Copyright />
        </>
    )
};

export default SharedLayout;