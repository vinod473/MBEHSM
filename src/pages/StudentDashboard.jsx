import React from "react";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import StudentDashboardSidebar from "../component/StudentDashboardSidebar";
import { Container, InputGroup, Row, Col, Card } from "react-bootstrap";

import { isStudentLoggedIn } from "../services/authentication";

const StudentDashboard = (props) => {
    const location = useLocation();
    const navigate = useNavigate();    
    return (
        <> 
        <StudentDashboardSidebar {...props}/>
        <Container className="mt-4">
                <Row className="mb-5">
                    <Col>
                    </Col>
                </Row>
        </Container>
        <Outlet />
        </>
    );
};

export default StudentDashboard;