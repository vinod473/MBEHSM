import React from "react";
import { Form, Table } from "react-bootstrap";

const SubjectInfo = ({ year, onSubjectInfoChange, subjects = [] }) => {

    const onObtainedMarksChange = (e, i) => {
        onSubjectInfoChange(year, i, 'obtainedMarks', parseInt(e.target.value, 10));
    };
    const onTotalMarksChange = (e, i) => {
        onSubjectInfoChange(year, i, 'totalMarks', parseInt(e.target.value, 10));
    };

    return (
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
                { subjects.map((subject, i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td><Form.Label>{subject.subject}</Form.Label></td>
                        <td><Form.Control type="number" onChange={(e) => onTotalMarksChange(e,i)} /></td>
                        <td><Form.Control type="number" onChange={(e) => onObtainedMarksChange(e,i)} /></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
export default SubjectInfo;