import React, { useReducer } from "react";
import { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { getCandidateTotalStats } from "../services/StudentList";

const admissionDetail = {
    width: "18rem",
    margin: "40px 80px 40px 40px",
    height: "150px",
    fontSize: '18px'
};
const admCountCss = {
    textAlign: 'center',
    verticalAlign: 'middle'
};

const Stats = () => {
    const initData = {
        totalAdmission: '',
        admissionVerify: '',
        admissionPending: ''
    };

    const [candidateCountStats, setCandidateCountStats] = useReducer((state, newState) => ({ ...state, ...newState }), initData);
    useEffect(() => {
        const getStats = async (req) => {
            try {
                const candiateStats = await getCandidateTotalStats(req);
                if (candiateStats.response) {
                    setCandidateCountStats(candiateStats.response);
                }
            } catch(error) {

            }
        };
        getStats();
    }, []);

    return (
        <Container style={{ display: "flex", paddingLeft: "200px", marginBottom: '530px'}}> 
            <Card
                bg="primary"
                key="Primary"
                text="white"
                style={admissionDetail}
                className="mb-2"
            >
                <Card.Header>Total Admissions :</Card.Header>
                <Card.Body>
                    <Card.Title style={admCountCss}>{candidateCountStats.totalAdmission}</Card.Title>
                </Card.Body>
            </Card>
            <Card
                bg="secondary"
                key="secondary"
                text="white"
                style={admissionDetail}
                className="mb-2"
            >
            <Card.Header>Admissions verified :</Card.Header>
                <Card.Body>
                    <Card.Title style={admCountCss}>{candidateCountStats.admissionVerify}</Card.Title>
                </Card.Body>
            </Card>
            <Card
                bg="warning"
                key="warning"
                text="white"
                style={admissionDetail}
                className="mb-2"
            >
            <Card.Header>Admissions Pending :</Card.Header>
                <Card.Body>
                    <Card.Title style={admCountCss}>{candidateCountStats.admissionPending}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Stats;