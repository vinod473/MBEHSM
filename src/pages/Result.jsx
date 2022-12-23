import React from "react";
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";
import { Container, InputGroup, Form, Button, Card } from "react-bootstrap";

const loginLabelCss = {
    marginTop: '7px',
    marginBottom: '7px'
};
const headerCss = {
    textAlign:'center',
    fontWeight:'bold',
    backgroundColor:'#e876db'
};

const Result = () => {
    const [rollNo, setRollNo] = useState('');
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState('');

    const downloadStudentRecord = () => {
        if (rollNo === '') {
            setAlert('Plese enter Enrollment/ Roll no.');
            setShow(true);
        } else if (rollNo === 'b-17-22001') {
            window.open("https://mbehsmcandidatedocuments.s3.ap-south-1.amazonaws.com/Student+Record_AHSAN+ALI+(2).pdf","_blank");
        } else {
            setAlert('Enrollment No. not found!');
            setShow(true);
        }
    };

    return (
        <>
            <Container style={{display:'flex', justifyContent:'space-around', padding:'20px 0px'}} >
                <Card style={{width: '25rem', margin: '10px 0px 5px 0px'}}>
                    <Card.Header style={headerCss}>Student Result Download</Card.Header>
                    <div style={{padding:'20px'}}>
                        <div style={loginLabelCss}>Enter Enrollment/Roll Number</div>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Control
                                onChange={(event) => setRollNo(event.target.value)}
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <div style={{textAlign:'center'}}>
                            <Button variant="success" type="submit" onClick={() => downloadStudentRecord()}>Submit</Button>
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

export default Result;