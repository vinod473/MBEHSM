import moment from "moment";
import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { Alert, Button, Container, Form, Table } from "react-bootstrap";
import SubjectInfo from "../component/SubjectInfoComponent";
import { generateStudentResult, getCandidateInfo } from "../services/StudentList";

const GenerateResult = () => {
    const firstYearSubjects = [{'subject':'Anatomy-I'}, {'subject':'Physiology-I'}, {'subject':'Philosopy & Material'}, {'subject':'Pharmacy'}, {'subject':'SPM'}];
    const secondYearSubjects = [{'subject':'Anatomy-II'}, {'subject':'Physiology-II'}, {'subject':'Materia Medic'}, {'subject':'Pathology'}];
    const thirdYearSubjects = [{'subject':'Opthalmology'}, {'subject':'Gynacology'}, {'subject':'Electrohomeopathic PM'}, {'subject':'E.N.T'}];
    const fourthYearSubjects = [{'subject':'Electrohomeopathic PCM'}, {'subject':'Surgery'}, {'subject':'Obstetrics & Pediatrics'}, {'subject':'Jurisprudence & Toxicology'}];
    const initResultData = {
        candidateId: '',
        dob: '',
        resultYear: '',
        examMonthAndYear: '',
        status: '',
        resultInfoList: []
    };
    const [resultData, setResultData] = useReducer((state, newState) => ({ ...state, ...newState }), initResultData);
    const [alert, setAlert] = useState('');
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState('');
    const [studentData, setStudentData] = useState(null);

    const showMessage = (message, type) => {
        setAlert(message);
        setVariant(type)
        setShow(true);
    };
    useEffect(() => {
        console.log(resultData.resultYear);
    }, [resultData])
    
    const isDataValid = () => {
        let flag = true;
        if (!resultData.candidateId || !resultData.resultYear || !resultData.status || !resultData.examMonthAndYear || resultData.resultInfoList.length == 0) {
            return false;
        }
        resultData.resultInfoList.forEach((info) => {
            if (!info.totalMarks || !info.obtainedMarks) 
                flag = false;
        });
        if (!flag)
            return false;
        return true;
    };
    const onClickSubmit = async () => {
        const isValid = isDataValid();
        if (!isValid) {
            setAlert('Please enter all details.');
            setShow(true);
            return;
        }
        try {
            resultData.candidateId = studentData.candidateId;
            const ans = await generateStudentResult(studentData.candidateId, resultData);
            if(ans.response) {
                showMessage('Result generated successfully.', 'success');
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                return;
            }
        } catch(err) {
            console.log(err);
        }
    };
    useEffect(() => {

    }, [resultData]);
    const onSubjectInfoChange = (year, i, item, val) => {
        if (resultData.resultInfoList.length > 0) {
            resultData.resultInfoList[i][item] = val;
            setResultData({ resultInfoList: [...resultData.resultInfoList] });
            return;
        }
        if (year == '1') {
            firstYearSubjects[i][item] = val;
            setResultData({ resultInfoList: [...firstYearSubjects] });
        } else if (year == '2') {
            secondYearSubjects[i][item] = val;
            setResultData({ resultInfoList: [...secondYearSubjects] });
        } else if (year == '3' ) {
            thirdYearSubjects[i][item] = val;
            setResultData({ resultInfoList: [...thirdYearSubjects] });
        } else if (year == '4') {
            fourthYearSubjects[i][item] = val;
            setResultData({ resultInfoList: [...fourthYearSubjects] });
        }
    };
    const onClickGetDetails = async () => {
        if (!resultData.candidateId) {
            showMessage('Please enter Enrollment No.', 'danger');
            return;
        }
        if (!resultData.dob) {
            showMessage('Please enter DOB.', 'danger');
            return;
        }
        try {
            const candidateInfo = await getCandidateInfo(resultData.candidateId, resultData.dob);
            if (candidateInfo.response) {
                setStudentData(candidateInfo.response);
            }
        } catch(err) {
            showMessage('Enrollment No. or DOB not correct!', 'danger');
            console.log(err);
        }
    };
    return (
        <Container style={{ paddingLeft: "200px", paddingTop: "30px"}}> 
            <div style={{ textAlign: 'center', width: '300px'}}>
                {show ? (
                    <Alert variant={variant} onClose={() => setShow(false)} dismissible>
                        {alert}
                    </Alert>
                ) : null}
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="enlNo">
                    <Form.Label>Enrollment No.</Form.Label>
                    <Form.Control type="text" disabled={studentData} placeholder="Enter enrollment Number" onChange={(e) => setResultData({ candidateId: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="dob">
                    <Form.Label>DOB</Form.Label>
                    <Form.Control type="date" disabled={studentData} onChange={(e) => setResultData({ dob: moment(e.target.value).format('DD/MM/YYYY') })} />
                </Form.Group>
                <Button className="btn btn-warning" style={{ marginBottom: '10px' }} onClick={onClickGetDetails}> Get details</Button>
            </Form>
            {studentData ? (
                <div>
                    <Form>
                    <div style={{ margin: '5px 0px' }}>
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
                    </div>
                    <hr />
                </Form>
            
                <Form>
                    <Form.Group className="mb-3" controlId="examMoYear">
                        <Form.Label>Exam Month & Year</Form.Label>
                        <Form.Control type="text" placeholder="Enter exam month & Year" onChange={(e) => setResultData({ examMonthAndYear: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="resultYear">
                        <Form.Label>Result Year</Form.Label>
                        <Form.Select onChange={(e) => setResultData({ resultYear: e.target.value, resultInfoList: [] })}>
                            <option value="">select</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
                { resultData.resultYear == '1' ? <SubjectInfo index={1} year={1} subjects={firstYearSubjects} onSubjectInfoChange={onSubjectInfoChange} /> : null }
                { resultData.resultYear == '2' ? <SubjectInfo index={2} year={2} subjects={secondYearSubjects} onSubjectInfoChange={onSubjectInfoChange} /> : null }
                { resultData.resultYear == '3' ? <SubjectInfo index={3} year={3} subjects={thirdYearSubjects} onSubjectInfoChange={onSubjectInfoChange} /> : null }
                { resultData.resultYear == '4' ? <SubjectInfo index={4} year={4} subjects={fourthYearSubjects} onSubjectInfoChange={onSubjectInfoChange} /> : null }
                <Form>
                    <Form.Group className="mb-3" controlId="examMoYear">
                        <Form.Label>Status :</Form.Label>
                        <Form.Select onChange={(e) => setResultData({ status: e.target.value })}>
                            <option value="">select</option>
                            <option value="PASS">Pass</option>
                            <option value="FAIL">Fail</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
                <div style={{ textAlign: 'center', marginBottom: '20px'}}>
                    <Button onClick={onClickSubmit}>Generate Result</Button>
                </div>
            </div>) : null }
        </Container>
    );
};

export default GenerateResult;