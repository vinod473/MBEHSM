import React, { useState } from "react";
import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchStudentProfile } from "../services/authentication";
import { logout, getStudentUserInfo } from "../services/authentication";

const StudentDashboardSidebar = (studentProfileResp) => {
    const profileResp = studentProfileResp;
    const location = useLocation()
    const navigate = useNavigate();
    const [alert, setAlert] = useState('');
    const [show, setShow] = useState(false);
    const onClickLogout = () => {
        logout();
        navigate('/studentLogin');
    }
    const showResult = () => {
        navigate('/studentDashboard/studentResult');
    }

    const showStudentProfile = async () => {
        const user = getStudentUserInfo().user;
        const studentResp = await fetchStudentProfile(user)
        navigate('/studentDashboard/studentProfile', {
            state: { resp: studentResp}
        });
    }
    return (
        <div className="wrapper" style={{ position: 'absolute',   overflow: 'hidden'}}>
            <div className="sidebar" style={{height:1002}}>
                <ul>
                    <li>
                        <a onClick={showStudentProfile}>
                            <span className="icon"><i className="bi bi-person-circle"></i></span>
                            <span className="item">Student Profile</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={showResult}>
                            <span className="icon"><i className="bi bi-journal-check"></i></span>
                            <span className="item">Student Results</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={onClickLogout}>
                            <span className="icon"><i class="bi bi-box-arrow-right"></i></span>
                            <span className="item">Logout</span>
                        </a>
                        </li>
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

export default StudentDashboardSidebar;