import React from "react";
import Alert from 'react-bootstrap/Alert';
import { useState, useMatch } from "react";
import { Container, InputGroup, Form, Button, Card } from "react-bootstrap";
import { fetchStudentProfile } from "../services/authentication";
import { setCookie, setStudentLoginInfo, setStudentProfileInfo} from "../services/authentication";
import { useNavigate } from 'react-router-dom';

const loginLabelCss = {
    marginTop: '7px',
    marginBottom: '7px'
};
const headerCss = {
    textAlign:'center',
    fontWeight:'bold',
    backgroundColor:'#e876db'
};

const label = {
color: 'rgb(85, 17, 242)',
};

const StudentLogin = (prop) => {
    const navigate = useNavigate();
    const [enrollmentNumber, setEnrollmentNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState('');

    const onDateOfBirthChange = (event) => {
        const dateOfBirth = event.target.value;
        setDateOfBirth(dateOfBirth);
    };

    const onRegistrationNumberChange = (event) => {
        const enrollmentNumber = event.target.value;
        setEnrollmentNumber(enrollmentNumber);
    };

    const formatDateOfBirth = (dateOfBirth) => {
        const dOB = new Date(dateOfBirth)
        const yyyy = dOB.getFullYear();
        let mm = dOB.getMonth() + 1;
        let dd =dOB.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedDOB = dd + '/' + mm + '/' + yyyy;
        return formattedDOB;
    }

    const onSubmit = async () => {
        const user = { enrollmentNumber, dateOfBirth };
        if (!user.enrollmentNumber) {
            setAlert('Please enter enrollment number');
            setShow(true);
            return
        }
        if (!user.dateOfBirth) {
            setAlert('Please enter date of birth');
            setShow(true);
            return
        }
        user.dateOfBirth = formatDateOfBirth(user.dateOfBirth);
        setStudentLoginInfo(user);
        setCookie({enrollmentNumber:user.enrollmentNumber, dateOfBirth: user.dateOfBirth});
        try {
        const studentResp = await fetchStudentProfile(user);
        if(studentResp) {
            setStudentProfileInfo(studentResp.response);
            setCookie({candidateId: studentResp.response.candidateId})
            navigate('/studentDashboard/studentProfile', {
                state: { resp: studentResp.response}
            })
        }
       }catch(error) {
        setAlert('Invalid enrollment number or dob');
        setShow(true);
        return

       }
    };
    

    return (
        <>
            <Container className="mb-6" style={{display:'flex', justifyContent:'space-around', padding:'20px 0px'}} >
                <Card className="mb-3" style={{width: '30rem', margin: '10px 0px 5px 0px'}}>
                    <Card.Header className="mb-3" style={headerCss}>Welcome To Student Portal</Card.Header>
                    <div style={{padding:'20px'}}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Control
                                aria-label="Username"
                                placeholder="Enter Enrollment Number"
                                aria-describedby="basic-addon1"
                                type="number"
                                onChange={onRegistrationNumberChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Control
                            type="date"
                            placeholder="Click to Select Date Of Birth"
                            onChange={onDateOfBirthChange}
                            />
                        </InputGroup>
                        <span style={label}>Use Password as your DOB with ( / ) like DD/MM/YYYY</span>
                        <div className="mt-4"style={{textAlign:'center'}}>
                            <Button variant="success" type="submit" onClick={() => onSubmit()}>Submit</Button>
                        </div>
                    </div>
                </Card>
            </Container>
            <div style={{ textAlign: 'center', width: '500px'}}>
                {show ? (
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        {alert}
                    </Alert>
                ) : null}
            </div>
        </>
    );
};

export default StudentLogin;