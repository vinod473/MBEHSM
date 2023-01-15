import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import { isLoggedIn } from "../services/authentication";

const Dashboard = (isLoggedInUser) => {
    useState(() => {
        console.log(isLoggedInUser);
    }, []);
    return (
        <>
        {
            isLoggedIn()
            ? (  
                <><Sidebar /><Outlet /></>
            )
            : (
                <div>Denied</div>
            )
        }
        </>
    );
};

export default Dashboard;