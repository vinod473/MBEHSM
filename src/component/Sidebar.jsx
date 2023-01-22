import React, { useState } from "react";
import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../services/authentication";

const Sidebar = (isLoggedInUser) => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [alert, setAlert] = useState('');
    const [show, setShow] = useState(false);
    const onClickLogout = () => {
        const isLogin = isLoggedIn();
        if (!isLogin) {
            setAlert('Please enter Enrollment/ Roll no.');
            setShow(true);
            return;
        }
        logout();
        navigate('/login', {
            state : { name: 'vinod' }
        });
    }

    useEffect(() => {

    },[isLogin]);
    useEffect(() => {
        const isLogin = isLoggedIn();
        setIsLogin(isLogin);
    }, []);
    return (
        <div className="wrapper" style={{ position: 'absolute' }}>
            <div className="sidebar">
                <ul>
                    <li>
                        <a href="/dashboard/stats">
                            <span className="icon"><i className="bi bi-speedometer"></i></span>
                            <span className="item">My Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/register">
                            <span className="icon"><i className="bi bi-megaphone"></i></span>
                            <span className="item">Add Admission</span>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/admissions">
                            <span className="icon"><i className="bi bi-card-checklist"></i></span>
                            <span className="item">Total admission</span>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/generateResult">
                            <span className="icon"><i className="bi bi-journal-check"></i></span>
                            <span className="item">Student Results</span>
                        </a>
                    </li>
                    { isLoggedIn() && isLoggedInUser
                        ? (<li>
                            <a onClick={onClickLogout}>
                                <span className="icon"><i class="bi bi-box-arrow-right"></i></span>
                                <span className="item">Logout</span>
                            </a>
                        </li> ) : null
                    }
                </ul>
            </div>
            <div style={{ textAlign: 'center', width: '500px'}}>
                {show ? (
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        {alert}
                    </Alert>
                ) : null}
            </div>
        </div>
    );
};

export default Sidebar;