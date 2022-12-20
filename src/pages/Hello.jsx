import React from "react";
import { Button, Container } from "react-bootstrap";
import { generateStudentRecordPdf } from "../services/StudentRecordPdfGenerate";
const studentRecord = async () => {
    const res = await generateStudentRecordPdf();
    console.log('hey', res);
};

const Gallery = () => {
    return (
        <Container>
            <div>
                <Button type="submit" onClick={() => studentRecord()}>Generate result</Button>
            </div>
        </Container>
    );
};

export default Gallery;