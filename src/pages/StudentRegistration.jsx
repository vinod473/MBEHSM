import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { addNewAdmission } from "../services/StudentList";

const collapseHeader = {
    margin: '5px 0px',
    cursor: 'pointer'
};

const StudentRegistration = () => {
    const initStudentData = {
        'personalDetails.candidateName': '',
        'personalDetails.candidateFatherName': '',
        'personalDetails.candidateMotherName': '',
        'personalDetails.candidateDOB': '',
        'personalDetails.candidateGender': '',
        'personalDetails.proofType': '',
        'personalDetails.candidateIdProofNumber': '',
        'personalDetails.isEmployed': '',
        'personalDetails.enrolmentNumber': '',
        'communicationDetails.contactNumber': '',
        'communicationDetails.emailId': '',
        'communicationDetails.fatherContactNumber': '',
        'communicationDetails.country': '',
        'communicationDetails.nationality': '',
        'communicationDetails.city': '',
        'communicationDetails.state': '',
        'communicationDetails.address': '',
        'communicationDetails.pinCode': '',
        'programmeDetails.courseType': '',
        'programmeDetails.faculty': '',
        'programmeDetails.course': '',
        'programmeDetails.stream': '',
        'programmeDetails.year': '',
        'programmeDetails.monthSession': '',
        'programmeDetails.session': '',
        'programmeDetails.modeOfStudy': '',
        'programmeDetails.hostelFacility': '',
        'programmeDetails.applicationFee': '',
        'programmeDetails.duration': '',
        'programmeDetails.totalFees': '',
        'programmeDetails.payingFees': '',
        'programmeDetails.registrationNumber': '',
        'programmeDetails.dateOfRegistration': '',
        'programmeDetails.diplomaNumberAndDateOfIssue': '',
        'programmeDetails.formNumber': '',
        'programmeDetails.admissionYear': '',
        'qualificationDetails[0].examinationName': '',
        'qualificationDetails[0].yearOfPassing': '',
        'qualificationDetails[0].boardName': '',
        'qualificationDetails[0].percentage': '',
    };

    const [studentDetails, setStudentDetails] = useReducer((state, newState) => ({ ...state, ...newState }), initStudentData);
    const [profilePic, setProfilePic] = useState({});
    const [alert, setAlert] = useState('');
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState('');

    const showMessage = (message, type) => {
        setAlert(message);
        setVariant(type)
        setShow(true);
    };
    const isValidData = async (data) => {
        let flag = true;
        Object.keys(data).every((key) => {
            if (!data[key]) {
                flag = false;
                return;
            }
        })
        return flag;
    };
    const onClickSubmit = async () => {
        const isValid = await isValidData(studentDetails);
        if (!isValid) {
            showMessage('All fields are mandatory!!', 'danger');
            return;
        }
        try {
            studentDetails['personalDetails.candidateDOB'] = moment(studentDetails['personalDetails.candidateDOB']).format('DD-MM-YYYY');
            studentDetails['programmeDetails.dateOfRegistration'] = moment(studentDetails['programmeDetails.dateOfRegistration']).format('DD-MM-YYYY');
            const admissionResp = await addNewAdmission(profilePic, studentDetails);
            if(admissionResp.response) {
                showMessage('Student added successfully!', 'success');
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                return;
            }
        } catch(error) {
            showMessage('Something went wrong', 'danger');
        }
    };
    const [togglePer, setTogglePer] = useState(true);
    const [toggleComm, setToggleComm] = useState(false);
    const [togglePrevQual, setTogglePrevQual] = useState(false);
    const [toggleProgDetail, setToggleProgDetail] = useState(false);
    
    useEffect(() => {
       
    }, [togglePer]);

    const onFileUpload = (e) => {
        setProfilePic({ file: e.target.files[0] });
    };

    return (
        <Container style={{ display: "flex", flexDirection:'column', paddingLeft: "300px", paddingTop: '20px', paddingBottom: '20px'}}> 
            <button className="btn btn-warning" style={collapseHeader} onClick={() => setTogglePer(togglePer => !togglePer)}>
                    Personal Details
            </button>
            <Form style={{width: '700px', marginLeft: '150px'}}>
                {togglePer ? (<div>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter student name" onChange={(e) => setStudentDetails({ 'personalDetails.candidateName': e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicFatherName">
                        <Form.Label>Father Name</Form.Label>
                        <Form.Control type="text" placeholder="Father name" onChange={(e) => setStudentDetails({ 'personalDetails.candidateFatherName': e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMotherName">
                        <Form.Label>Mother Name</Form.Label>
                        <Form.Control type="text" placeholder="Mother name" onChange={(e) => setStudentDetails({ 'personalDetails.candidateMotherName': e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDOB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" onChange={(e) => setStudentDetails({ 'personalDetails.candidateDOB': e.target.value })}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select value={studentDetails.gender} onChange={(e) => setStudentDetails({ 'personalDetails.candidateGender': e.target.value })}>
                            <option value="">select</option>
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicProod">
                        <Form.Label>Proof Type</Form.Label>
                        <Form.Select value={studentDetails.proofType} onChange={(e) => setStudentDetails({ 'personalDetails.proofType': e.target.value })}>
                            <option value="">select</option>
                            <option value="AADHAAR_CARD">Aadhar Card</option>
                            <option value="PAN_CARD">PAN Card</option>
                            <option value="VOTER_ID_CARD">Voter ID Card</option>
                            <option value="PASSPORT">Passport</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicProofNo">
                        <Form.Label>Proof Number</Form.Label>
                        <Form.Control type="text" placeholder="Proof id no" onChange={(e) => setStudentDetails({ 'personalDetails.candidateIdProofNumber': e.target.value })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <Form.Label>Is Employed?</Form.Label>
                        <Form.Select value={studentDetails.isEmployed} onChange={(e) => setStudentDetails({ 'personalDetails.isEmployed': e.target.value })}>
                            <option value="">select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEnrollmentNo">
                        <Form.Label>Enrollment No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter enrollment no." onChange={(e) => setStudentDetails({ 'personalDetails.enrolmentNumber': e.target.value })}/>
                    </Form.Group>
                </div>): null }
            </Form>
                    
            <button className="btn btn-info" style={collapseHeader} onClick={() => setToggleComm(toggleComm => !toggleComm)}>
                Communication Details
            </button>
            <Form style={{width: '700px', marginLeft: '150px'}}>
                {toggleComm ? (<div>
                    <Form.Group className="mb-3" controlId="formBasicContact">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control type="number" placeholder="Enter contact no." onChange={(e) => setStudentDetails({ 'communicationDetails.contactNumber': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setStudentDetails({ 'communicationDetails.emailId': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicContact">
                        <Form.Label>Father Contact No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter father contact no." onChange={(e) => setStudentDetails({ 'communicationDetails.fatherContactNumber': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Select value={studentDetails.country} onChange={(e) => setStudentDetails({ 'communicationDetails.country': e.target.value })}>
                            <option value="">select</option>
                            <option value="India">India</option>
                            <option value="other">other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="enter city name" onChange={(e) => setStudentDetails({ 'communicationDetails.city': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="enter state" onChange={(e) => setStudentDetails({ 'communicationDetails.state': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="enter address" onChange={(e) => setStudentDetails({ 'communicationDetails.address': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPIN">
                        <Form.Label>PIN code</Form.Label>
                        <Form.Control type="text" placeholder="enter pin code" onChange={(e) => setStudentDetails({ 'communicationDetails.pinCode': e.target.value })} />
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
                        <Form.Control type="text" placeholder="enter examination name" onChange={(e) => setStudentDetails({ 'qualificationDetails[0].examinationName': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicYOP">
                        <Form.Label>Year of Passing</Form.Label>
                        <Form.Control type="text" placeholder="enter year of passing" onChange={(e) => setStudentDetails({ 'qualificationDetails[0].yearOfPassing': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicBoardName">
                        <Form.Label>Board Name</Form.Label>
                        <Form.Control type="text" placeholder="enter board name" onChange={(e) => setStudentDetails({ 'qualificationDetails[0].boardName': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Percentage</Form.Label>
                        <Form.Control type="text" placeholder="enter percentage" onChange={(e) => setStudentDetails({ 'qualificationDetails[0].percentage': e.target.value })} />
                    </Form.Group>
                </div>) : null }
            </Form>

            <button className="btn btn-danger" style={collapseHeader} onClick={() => setToggleProgDetail(toggleProgDetail => !toggleProgDetail)}>
                Programme Details
            </button>
            <Form style={{width: '700px', marginLeft: '150px'}}>
                {toggleProgDetail ? (<div>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Course Type</Form.Label>
                        <Form.Select value={studentDetails.courseType} onChange={(e) => setStudentDetails({ 'programmeDetails.courseType': e.target.value })}>
                            <option value="">select</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Graduate">Under Graduate</option>
                            <option value="Under Graduate">Post Graduate</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Faculty</Form.Label>
                        <Form.Select onChange={(e) => setStudentDetails({ 'programmeDetails.faculty': e.target.value })} >
                            <option value="">select</option>
                            <option value="BEMS">BEMS</option>
                            <option value="Faculty Of Nursing">Faculty Of Nursing</option>
                            <option value="Faculty Of Medical Science">Faculty Of Medical Science</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Course</Form.Label>
                        <Form.Select onChange={(e) => setStudentDetails({ 'programmeDetails.course': e.target.value })} >
                            <option value="">select</option>
                            <option value="BEMS (Bachelor in Electropathy and medical science)">BEMS (Bachelor in Electropathy and medical science)</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Stream</Form.Label>
                        <Form.Select onChange={(e) => setStudentDetails({ 'programmeDetails.stream': e.target.value })} >
                            <option value="">select</option>
                            <option value="Nursing">Nursing</option>
                            <option value="Medical Science">Medical Science</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number" placeholder="enter Year" onChange={(e) => setStudentDetails({ 'programmeDetails.yearOfPassing': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Month Session</Form.Label>
                        <Form.Select value={studentDetails.monthSession} onChange={(e) => setStudentDetails({ 'programmeDetails.monthSession': e.target.value })}>
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
                        <Form.Control type="number" placeholder="Enter session" onChange={(e) => setStudentDetails({ 'programmeDetails.session': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Mode of Study</Form.Label>
                        <Form.Select value={studentDetails.studyMode} onChange={(e) => setStudentDetails({ 'programmeDetails.modeOfStudy': e.target.value })}>
                            <option value="">select</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Hostel Facility</Form.Label>
                        <Form.Select value={studentDetails.hostelFacility} onChange={(e) => setStudentDetails({ 'programmeDetails.hostelFacility': e.target.value })}>
                            <option value="">select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Application Fee</Form.Label>
                        <Form.Control type="text" placeholder="Enter application fee" onChange={(e) => setStudentDetails({ 'programmeDetails.applicationFee': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Duration (In years)</Form.Label>
                        <Form.Select value={studentDetails.duration} onChange={(e) => setStudentDetails({ 'programmeDetails.duration': e.target.value })}>
                            <option value="">select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Total Fee</Form.Label>
                        <Form.Control type="text" placeholder="Enter total fee" onChange={(e) => setStudentDetails({ 'programmeDetails.totalFees': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Paying Fee</Form.Label>
                        <Form.Control type="text" placeholder="Enter paying fee" onChange={(e) => setStudentDetails({ 'programmeDetails.payingFees': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>registration No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter registartion no." onChange={(e) => setStudentDetails({ 'programmeDetails.registrationNumber': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPer">
                        <Form.Label>Date of Registration</Form.Label>
                        <Form.Control type="date" onChange={(e) => setStudentDetails({ 'programmeDetails.dateOfRegistration': e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control type="file" onChange={onFileUpload}/>
                    </Form.Group>
                    <div style={{ textAlign: 'center' }}>
                        <Button variant="primary" onClick={onClickSubmit}>Submit</Button>
                    </div>
                </div>) : null }
            </Form>
            <div style={{ textAlign: 'center', width: '300px'}}>
                {show ? (
                    <Alert variant={variant} onClose={() => setShow(false)} dismissible>
                        {alert}
                    </Alert>
                ) : null}
            </div>
        </Container>
    );
};

export default StudentRegistration;