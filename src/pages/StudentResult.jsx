import React from "react";
import Alert from "react-bootstrap/Alert";
import { useState, useMatch } from "react";
import { Container, InputGroup, Form, Button, Card } from "react-bootstrap";
import {
  fetchStudentProfile,
  fetchStudentResult,
} from "../services/authentication";
import { useNavigate, useLocation } from "react-router-dom";
import MDBSelect from "mdb-react-ui-kit";

const loginLabelCss = {
  marginTop: "7px",
  marginBottom: "7px",
};
const headerCss = {
  textAlign: "center",
  fontWeight: "bold",
  backgroundColor: "#e876db",
};

const label = {
  color: "rgb(85, 17, 242)",
};

const StudentResult = (prop) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [year, setYear] = useState("");
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState("");

  const onYearChange = (event) => {
    const year = event.target.value;
    setYear(year);
  };

  const onRegistrationNumberChange = (event) => {
    const enrollmentNumber = event.target.value;
    setEnrollmentNumber(enrollmentNumber);
  };

  const onSubmit = async () => {
    const user = { enrollmentNumber, year };
    if (!user.enrollmentNumber) {
      setAlert("Please enter enrollment number");
      setShow(true);
      return;
    }
    if (!user.year) {
      setAlert("Please select year");
      setShow(true);
      return;
    }
    const studentResultResp = await fetchStudentResult(user);
    navigate("/studentDashboard/showResult", {
      state: { resp: studentResultResp },
    });
  };

  return (
    <>
      <Container
        className="mb-6"
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px 0px",
        }}
      >
        <Card
          className="mb-2"
          style={{ width: "30rem", margin: "10px 0px 5px 0px" }}
        >
          <Card.Header className="mb-3" style={headerCss}>
            Online Result
          </Card.Header>
          <div style={{ padding: "20px" }}>
            <Form.Label column sm="4">
              Enrollment No:
            </Form.Label>
            <InputGroup className="mb-3" style={{ display: "flex" }}>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                aria-label="Username"
                placeholder="Enter Enrollment Number"
                aria-describedby="basic-addon1"
                onChange={onRegistrationNumberChange}
              />
            </InputGroup>
            <Form.Label column sm="3">
              Year:
            </Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Select onChange={onYearChange}>
                <option value="">Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Form.Select>
            </InputGroup>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              className="mb-4"
              variant="success"
              type="submit"
              onClick={() => onSubmit()}
            >
              Submit
            </Button>
          </div>
        </Card>
      </Container>
      <div style={{ textAlign: "center", width: "500px" }}>
        {show ? (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            {alert}
          </Alert>
        ) : null}
      </div>
    </>
  );
};

export default StudentResult;
