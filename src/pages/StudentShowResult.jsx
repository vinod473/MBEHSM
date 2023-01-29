import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";

const ShowResult = (resp) => {
  const location = useLocation();
  var studentResultResp;
  if (location && location.state && location.state.resp) {
    studentResultResp = location.state.resp; // remove this
  }
  const formContrl = {
    marginLeft: "300px",
    color: "#333333",
    marginBotton: "0",
    fontWeight: "bold",
  };

  const cardHeaderCss = {
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#d9f7b7",
    color: "#5511f2",
  };
  return (
    <>
      <Container className="mt-3" style={formContrl}>
        <Row className="mb-5">
          <Col xs={12}>
            <Card className="shadow-lg">
              <Card.Header style={cardHeaderCss} className="p-3">
                <h3>ONLINE RESULT</h3>
              </Card.Header>
              <Card.Body>
                {!studentResultResp ? (
                  <h5 style={{ textAlign: "center", color: "#5511f2" }}>
                    Your Result not found
                  </h5>
                ) : (
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>Exam Month And Year</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                        <th>Percentage Of Marks</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{studentResultResp.year}</td>
                        <td>{studentResultResp.examMonthAndYear}</td>
                        <td>{studentResultResp.totalMarks}</td>
                        <td>{studentResultResp.totalObtainedMarks}</td>
                        <td>{studentResultResp.percentage}</td>
                        <td>{studentResultResp.status}</td>
                      </tr>
                    </tbody>
                  </Table>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShowResult;
