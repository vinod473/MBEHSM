import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { getStudentList } from "../services/StudentList";

const AdmissionList = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const admList = async () => {
            try {
                const allStudents = await getStudentList();
                if (allStudents.response)
                    setStudents(allStudents.response);
                console.log(students);
            } catch(err) {
                console.log(err);
            }
        };
        admList();
    }, []);
    return (
        <Container style={{ display: "flex", paddingLeft: "200px", paddingTop: "30px"}}> 
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Enrollment No.</th>
                        <th>Student Name</th>
                        <th>Contact No.</th>
                        <th>Photo</th>
                        <th>Course</th>
                        <th>Session</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Verify Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, i) => (
                            <tr key={i+1}>
                                <td>{i+1}</td>
                                <td>{student.enrollmentNumber}</td>
                                <td>{student.candidateName}</td>
                                <td>{student.candidateContactNumber}</td>
                                <td>{student.candidateContactNumber}</td>
                                <td>{student.courseName}</td>
                                <td>{student.courseSession}</td>
                                <td>{student.candidateCity}</td>
                                <td>{student.candidateState}</td>
                                <td>{student.candidateStatus}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default AdmissionList;