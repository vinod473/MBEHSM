import React from "react";
import { Card, Container,Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { getStudentUserInfo } from "../services/authentication";

const StudentProfile = (resp) => {
    const navigate = useNavigate();
    const location = useLocation();
    var profileResp = {};
    if(location && location.state && location.state.resp) {
        profileResp = location.state.resp; // remove this
    }
    const formContrl = {
        marginLeft: '300px',
        color: '#333333',
        marginBotton: '0',
        fontWeight: 'bold'
    };

    const cardHeaderCss = {
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: '#d9f7b7',
        color: '#5511f2'
    };
    
    return (
        <>
        <Container className="mt-3" style={formContrl}>
                <Row className="mb-5">
                    <Col xs={12}>
                      <Card className="shadow-lg">
                          <Card.Header style={cardHeaderCss}className="p-3" >
                             <h3>STUDENT PROFILE</h3>
                          </Card.Header>
                          <Card.Body>
                             <h5 style={{textAlign:'center',color: '#5511f2'}}>COURSE/PROGRAM DETAILS :</h5>
                             <table class="table fnt_sze">
								<tbody>
                                <tr>
										<td class="col_1"></td>
									</tr>
									<tr>
										<td class="col_1 col_f_1">
                                            <span class="col_1_1 pull-left">Form No.</span>
                                            <span style={{marginLeft:100}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.formNumber}</span>
                                        </td>
									</tr>
									<tr>
										<td class="col_1 col_f_1">
                                            <span class="col_1_1 pull-left">Admission Year</span>
                                            <span style={{marginLeft:50}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.admissionYear}</span>
                                        </td>
									</tr>
									<tr>
										<td class="col_1 col_f_1">
                                            <span class="col_1_1 pull-left">Registration No.</span>
                                            <span style={{marginLeft:45}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.enrollmentNumber}</span>
                                        </td>
									</tr>
                                    <tr>
                                    <td class="col_1">
                                            <span class="col_1_1 pull-left">Faculty</span>
                                            <span style={{marginLeft:115}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.faculty}</span>
                                        </td>
                                    </tr>
									<tr>
										<td class="col_1 col_f_1">
                                            <span class="col_1_1 pull-left">Course Type</span>
                                            <span style={{marginLeft:75}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.courseType}</span></td>
									</tr>
                                    <tr>
                                        <td class="col_1">
                                            <span class="col_1_1 pull-left">Course Name</span>
                                            <span style={{marginLeft:65}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.courseName}</span>
                                        </td>
                                    </tr>
								</tbody>
							</table>
                            <h5 style={{textAlign:'center',color: '#5511f2'}}>PERSONAL DETAILS :</h5>
                            <table class="table fnt_sze">
								<tbody>
                                <img src="https://103.191.208.219/accpanel/admission/637f0ed16dde6.jpg"class="col_1_1 pull-right" style={{marginRight:100,width:150, height:150}}/>
                                <tr>
										<td class="col_1"></td>
									</tr>
									<tr>
										<td class="col_1 col_f_1">
                                            <span class="col_1_1 pull-left">Name (Mr./Ms.)</span>
                                            <span style={{marginLeft:50}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.candidateName}</span>
                                        </td>                                        
									</tr>
									<tr>
										<td class="col_1 col_f_1">
                                            <span class="col_1_1 pull-left">Father's Name (Mr.)</span>
                                            <span style={{marginLeft:18}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.candidateFatherName}</span>
                                        </td>
									</tr>
									<tr>
										<td class="col_1 col_f_1">
                                            <span class="col_1_1 pull-left">Gender</span>
                                            <span style={{marginLeft:115}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.candidateGender}</span>
                                        </td>
									</tr>
                                    <tr>
                                    <td class="col_1">
                                            <span class="col_1_1 pull-left">Date Of Birth</span>
                                            <span style={{marginLeft:72}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.candidateDOB}</span>
                                        </td>
                                    </tr>
									<tr>
										<td class="col_1 col_f_1">
                                            <span class="col_1_1 pull-left">Category</span>
                                            <span style={{marginLeft:100}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.candidateCategory}</span></td>
									</tr>
                                    <tr>
                                        <td class="col_1">
                                            <span class="col_1_1 pull-left">Nationality</span>
                                            <span style={{marginLeft:88}}>:</span>
                                            <span style={{marginLeft:30}}>{profileResp.candidateNationality}</span>
                                        </td>
                                    </tr>
								</tbody>
							</table>
                        </Card.Body>
                      </Card>
                    </Col>
                </Row>
        </Container>
        </>
    );
};

export default StudentProfile;