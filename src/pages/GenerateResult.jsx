import React, { useState } from "react";
import { useReducer } from "react";
import { Alert, Button, Container, Form, Table } from "react-bootstrap";
import SubjectInfo from "../component/SubjectInfoComponent";
import { generateStudentResult, getCandidateInfo } from "../services/StudentList";
import _ from 'lodash';

const imageCss = {
    maxWidth: '300px',
    maxHeight: '300px',
    padding: '20px 0px 10px 0px'
};
const GenerateResult = () => {
    const n = 6;
    const initSubject = {
        subject: '',
        totalMarks: 0,
        obtainedMarks: 0
    };
    const initResultData = {
        candidateId: '',
        resultYear: '',
        examMonthAndYear: '',
        status: '',
        resultInfoList: [initSubject, initSubject,initSubject, initSubject, initSubject, initSubject]
    };
    const [resultData, setResultData] = useReducer((state, newState) => ({ ...state, ...newState }), initResultData);
    const [alert, setAlert] = useState('');
    const [show, setShow] = useState(false);
    const [studentData, setStudentData] = useState(null);

    const onClickSubmit = async () => {
        try {
            const ans = await generateStudentResult(resultData.candidateId, resultData);
            if(ans.response) {
                console.log('gg');
            }
        } catch(err) {
            console.log(err);
        }
    }
    const onSubjectInfoChange = (i, item) => {

    };
    const onClickGetDetails = async () => {
        if (!resultData.candidateId) {
            setAlert('Please enter Enrollment No.');
            setShow(true);
            return;
        }
        try {
            const candidateInfo = await getCandidateInfo(resultData.candidateId);
            if (candidateInfo.response && candidateInfo.response.length > 0) {
                setStudentData(candidateInfo.response[0]);
            }
        } catch(err) {

        }
    }
    return (
        <Container style={{ paddingLeft: "200px", paddingTop: "30px"}}> 
            <div style={{ textAlign: 'center', width: '300px'}}>
                {show ? (
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        {alert}
                    </Alert>
                ) : null}
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="enlNo">
                    <Form.Label>Enrollment No.</Form.Label>
                    <Form.Control type="text" placeholder="Enter enrollment Number" onChange={(e) => setResultData({ candidateId: e.target.value })} />
                </Form.Group>
                <Button className="btn btn-warning" onClick={onClickGetDetails}> Get details</Button>
                <div style={{ margin: '5px 0px' }}>
                    { studentData ? (
                        <Table bordered striped>
                            <thead>
                                <tr>
                                    <th>Candidate Name</th>
                                    <th>DOB</th>
                                    <th>Course Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{studentData.candidateName}</td>
                                    <td>{studentData.candidateDOB}</td>
                                    <td>{studentData.courseName}</td>
                                </tr>
                            </tbody>
                        </Table>
                    ): null}
                </div>
                <hr />
                <Form.Group className="mb-3" controlId="resultYear">
                    <Form.Label>Result Year</Form.Label>
                    <Form.Control type="text" placeholder="enter result year" onChange={(e) => setResultData({ resultYear: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="examMoYear">
                    <Form.Label>Exam Month & Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter exam month & Year" onChange={(e) => setResultData({ examMonthAndYear: e.target.value })} />
                </Form.Group>
            </Form>
            <Table bordered>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Subject Name</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 6 }, (_, i) => <SubjectInfo index={i+1} onSubjectInfoChange={onSubjectInfoChange} />)}
                </tbody>
            </Table>
            <Form>
                <Form.Group className="mb-3" controlId="examMoYear">
                    <Form.Label>Status :</Form.Label>
                    <Form.Select value={resultData.value} onChange={(e) => setResultData({ status: e.target.value })}>
                        <option value="">select</option>
                        <option value="PASS">Pass</option>
                        <option value="FAIL">Fail</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <div style={{ textAlign: 'center', marginBottom: '20px'}}>
                <Button onClick={onClickSubmit}>Generate Result</Button>
            </div>
        </Container>
    );
};

export default GenerateResult;