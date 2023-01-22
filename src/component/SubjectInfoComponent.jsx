import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

const SubjectInfo = ({ index, onSubjectInfoChange }) => {
    const [obtainedMarks, setObtainedMarks] = useState();
    const [totalMarks, setTotalMarks] = useState();

    useEffect(() => {
        onSubjectInfoChange();
    }, [obtainedMarks, totalMarks]);

    return (
        <tr>
            <td>{index}</td>
            <td>
                <Form.Group className="mb-3" controlId="formBasicProod">
                    <Form.Select >
                        <option value="">select</option>
                        <option value="ADHAAR_CARD">Maths</option>
                        <option value="PAN_CARD">Physics</option>
                        <option value="VOTER_ID_CARD">Chemestry</option>
                        <option value="PASSPORT">Biology</option>
                    </Form.Select>
                </Form.Group>
                
            </td>
            <td><Form.Control type="number" onChange={(e) => setTotalMarks(e.target.value)} /></td>
            <td><Form.Control type="number" onChange={(e) => setObtainedMarks(e.target.value)} /></td>
        </tr>
    )
};

export default SubjectInfo;