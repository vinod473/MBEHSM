import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { Button, Collapse, Container, Form } from "react-bootstrap";
import { addNewAdmission } from "../services/StudentList";

const collapseHeader = {
    margin: '5px 0px',
    cursor: 'pointer'
};

const StudentRegistration = () => {
    const initStudentData = {
        studentName: '',
        fatherName: '',
        motherName: '',
        dob: '',
        gender: '',
        proofType: '',
        proofNumber: '',
        isEmployed: '',
        enrollmentNo: '',
        courseType: '',
        studyMode: '',
        isHostel: false,
        duration: '',
        country: '',
        monthSession: ''
    };

    const [studentDetails, setStudentDetails] = useReducer((state, newState) => ({ ...state, ...newState }), initStudentData);

    const onClickSubmit = async (e) => {
        console.log('hh:  ', e.target.value);
        const admissionResp = await addNewAdmission(studentDetails);
        console.log('hh:  ', e.target.value);
        setStudentDetails(admissionResp);
    };
    const [togglePer, setTogglePer] = useState(true);
    const [toggleComm, setToggleComm] = useState(false);
    const [togglePrevQual, setTogglePrevQual] = useState(false);
    const [toggleProgDetail, setToggleProgDetail] = useState(false);
    
    useEffect(() => {
       
    }, [togglePer]);

    return (
        <Container style={{ display: "flex", flexDirection:'column', paddingLeft: "300px", paddingTop: '20px', paddingBottom: '20px'}}> 
            <button className="btn btn-warning" style={collapseHeader} onClick={() => setTogglePer(togglePer => !togglePer)}>
                    Personal Details
            </button>
            <Form style={{width: '700px', marginLeft: '150px'}}>
                {togglePer ? (<div>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter student name" onChange={(e) => setStudentDetails({ studentName: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicFatherName">
                        <Form.Label>Father Name</Form.Label>
                        <Form.Control type="text" placeholder="Father name" onChange={(e) => setStudentDetails({ fatherName: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMotherName">
                        <Form.Label>Mother Name</Form.Label>
                        <Form.Control type="text" placeholder="Mother name" onChange={(e) => setStudentDetails({ motherName: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDOB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" onChange={(e) => setStudentDetails({ dob: e.target.value })}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select value={studentDetails.gender} onChange={(e) => setStudentDetails({ gender: e.target.value })}>
                            <option value="">select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicProod">
                        <Form.Label>Proof Type</Form.Label>
                        <Form.Select value={studentDetails.proofType} onChange={(e) => setStudentDetails({ proofType: e.target.value })}>
                            <option value="">select</option>
                            <option value="ADHAAR_CARD">Aadhar Card</option>
                            <option value="PAN_CARD">PAN Card</option>
                            <option value="VOTER_ID_CARD">Voter ID Card</option>
                            <option value="PASSPORT">Passport</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicProofNo">
                        <Form.Label>Proof Number</Form.Label>
                        <Form.Control type="text" placeholder="Proof id no" onChange={(e) => setStudentDetails({ proofNumber: e.target.value })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <Form.Label>Is Employed?</Form.Label>
                        <Form.Select value={studentDetails.isEmployed} onChange={(e) => setStudentDetails({ isEmployed: e.target.value })}>
                            <option value="">select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEnrollmentNo">
                        <Form.Label>Enrollment No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter enrollment no." onChange={(e) => setStudentDetails({ enrollmentNo: e.target.value })}/>
                    </Form.Group>
                </div>): null }
            </Form>
                    
            <button className="btn btn-danger" style={collapseHeader} onClick={() => setToggleComm(toggleComm => !toggleComm)}>
                Communication Details
            </button>
            <Form style={{width: '700px', marginLeft: '150px'}}>
                {toggleComm ? (<div>
                    <Form.Group className="mb-3" controlId="formBasicContact">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control type="number" placeholder="Enter contact no." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicContact">
                        <Form.Label>Father Contact No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter father contact no." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Select value={studentDetails.country} onChange={(e) => setStudentDetails({ country: e.target.value })}>
                            <option value="">select</option>
                            <option value="India">India</option>
                            <option value="other">other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="enter city name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="enter state" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="enter address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPIN">
                        <Form.Label>PIN code</Form.Label>
                        <Form.Control type="text" placeholder="enter pin code" />
                    </Form.Group>
                </div>): null}
            </Form>

            <button className="btn btn-success" style={collapseHeader} onClick={() => setTogglePrevQual(togglePrevQual => !togglePrevQual)}>
                Previous Qualification Details
            </button>
            <Form style={{width: '700px', marginLeft: '150px'}}>
                {togglePrevQual ? (<div>
                    <Form.Group className="mb-3" controlId="formBasicExamName">
                        <Form.Label>Examination name</Form.Label>
                        <Form.Control type="text" placeholder="enter examination name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicYOP">
                        <Form.Label>Year of Passing</Form.Label>
                        <Form.Control type="text" placeholder="enter year of passing" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicBoardName">
                        <Form.Label>Board Name</Form.Label>
                        <Form.Control type="text" placeholder="enter board name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Percentage</Form.Label>
                        <Form.Control type="text" placeholder="enter percentage" />
                    </Form.Group>
                </div>) : null }
            </Form>

            <button className="btn btn-info" style={collapseHeader} onClick={() => setToggleProgDetail(toggleProgDetail => !toggleProgDetail)}>
                Programme Details
            </button>
            <Form style={{width: '700px', marginLeft: '150px'}}>
                {toggleProgDetail ? (<div>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Course Type</Form.Label>
                        <Form.Select value={studentDetails.courseType} onChange={(e) => setStudentDetails({ courseType: e.target.value })}>
                            <option value="">select</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Graduate">Under Graduate</option>
                            <option value="Under Graduate">Post Graduate</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Faculty</Form.Label>
                        <Form.Select>
                            <option value="">select</option>
                            <option value="BEMS">BEMS</option>
                            <option value="Faculty Of Nursing">Faculty Of Nursing</option>
                            <option value="Faculty Of Medical Science">Faculty Of Medical Science</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Course</Form.Label>
                        <Form.Select>
                            <option value="">select</option>
                            <option value="BEMS (Bachelor in Electropathy and medical science)">BEMS (Bachelor in Electropathy and medical science)</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Stream</Form.Label>
                        <Form.Select>
                            <option value="">select</option>
                            <option value="Nursing">Nursing</option>
                            <option value="Medical Science">Medical Science</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number" placeholder="enter Year" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Month Session</Form.Label>
                        <Form.Select value={studentDetails.monthSession} onChange={(e) => setStudentDetails({ monthSession: e.target.value })}>
                            <option value="">select</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Session</Form.Label>
                        <Form.Control type="number" placeholder="Enter session" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Mode of Study</Form.Label>
                        <Form.Select value={studentDetails.studyMode} onChange={(e) => setStudentDetails({ studyMode: e.target.value })}>
                            <option value="">select</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Hostel Facility</Form.Label>
                        <Form.Select value={studentDetails.isHostel} onChange={(e) => setStudentDetails({ isHostel: e.target.value })}>
                            <option value="">select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Application Fee</Form.Label>
                        <Form.Control type="text" placeholder="Enter application fee" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Duration (In years)</Form.Label>
                        <Form.Select value={studentDetails.duration} onChange={(e) => setStudentDetails({ duration: e.target.value })}>
                            <option value="">select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Total Fee</Form.Label>
                        <Form.Control type="text" placeholder="Enter total fee" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Paying Fee</Form.Label>
                        <Form.Control type="text" placeholder="Enter paying fee" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>registration No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter registartion no." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Date of Registration</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                    <Button variant="primary" onClick={onClickSubmit}>
                        Submit
                    </Button>
                </div>) : null }
            </Form>
        </Container>
    );
};

export default StudentRegistration;