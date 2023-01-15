import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    // if (!values.age || !values.email) {
    //   setError(true);
    // } else {
      nextStep();
    // }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="contactNo"
                defaultValue={values.firstName}
                type="number"
                placeholder="Contact No."
                onChange={handleFormData("contactNo")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                This is a required field
                </Form.Text>
              ) : (
                ""
              )}
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="email"
                defaultValue={values.lastName}
                type="email"
                placeholder="Enter email"
                onChange={handleFormData("email")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                This is a required field
                </Form.Text>
              ) : (
                ""
              )}
              </Form.Group>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Form.Group className="mb-3">
              <Form.Label>Father's Contact No</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="fatherNo"
                defaultValue={values.lastName}
                type="number"
                placeholder="Father Contact No."
                onChange={handleFormData("fatherNo")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                This is a required field
                </Form.Text>
              ) : (
                ""
              )}
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Mother's Contact No.*</Form.Label>
              <Form.Control 
                style={{ border: error ? "2px solid red" : "" }}
                name="motherNo"
                type="number"
                placeholder="Mother Contact No."
                onChange={handleFormData("motherNo")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                This is a required field
                </Form.Text>
              ) : null}
              </Form.Group>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select
                style={{ border: error ? "2px solid red" : "" }}
                name="country"
                onChange={handleFormData("country")}
              >
                <option>Select Country</option>
                <option>India</option>
                <option>other</option>
              </Form.Select>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                This is a required field
                </Form.Text>
              ) : null}
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Nationality</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                placeholder="Nationality"
                type="text" 
                onChange={handleFormData("nationality")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>This is a required field</Form.Text>
              ) : null}
              </Form.Group>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              
              <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="address"
                type="text"
                placeholder="Enter Address"
                onChange={handleFormData("address")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                This is a required field
                </Form.Text>
              ) : (
                ""
              )}
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="pincode"	
                type="number"
                placeholder="Enter Pincode"
                onChange={handleFormData("pincode")}
              >
              </Form.Control>
              {error ? (
                <Form.Text style={{ color: "red" }}>This is a required field</Form.Text>
              ) : null }
              </Form.Group>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button variant="primary" onClick={prevStep}>
                    Previous
                </Button>

                <Button variant="primary" type="submit">
                    Next
                </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;