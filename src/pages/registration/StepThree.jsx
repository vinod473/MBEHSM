import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

const examRowCss = {
    margin: '0px 10px'
};
const examTitleRowCss = {
    width: '170px'
};
// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
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
      <Card style={{ marginTop: 100, width: '1000px' }}>
        <Card.Body>
            <Form onSubmit={submitFormData}>
                <div style={{ display: 'flex', margin: '10px' }}>
                    <Form.Label style={examTitleRowCss}>Secondary</Form.Label>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />      
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            placeholder="Father Name"
                            onChange={handleFormData("photo")}
                            type="file" 
                        />
                    </Form.Group>
                </div>
                <div style={{ display: 'flex', margin: '10px' }}>
                    <Form.Label style={examTitleRowCss}>Sr. Secondary</Form.Label>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />      
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            placeholder="Father Name"
                            onChange={handleFormData("photo")}
                            type="file" 
                        />
                    </Form.Group>
                </div>
                <div style={{ display: 'flex', margin: '10px' }}>
                    <Form.Label style={examTitleRowCss}>Graduation</Form.Label>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />      
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            placeholder="Father Name"
                            onChange={handleFormData("photo")}
                            type="file" 
                        />
                    </Form.Group>
                </div>
                <div style={{ display: 'flex', margin: '10px' }}>
                    <Form.Label style={examTitleRowCss}>Post Graduation</Form.Label>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />      
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            placeholder="Father Name"
                            onChange={handleFormData("photo")}
                            type="file" 
                        />
                    </Form.Group>
                </div>
                <div style={{ display: 'flex', margin: '10px' }}>
                    <Form.Label style={examTitleRowCss}>Other</Form.Label>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />      
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("photo")}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group style={examRowCss}>
                        <Form.Control 
                            style={{ border: error ? "2px solid red" : "" }}
                            placeholder="Father Name"
                            onChange={handleFormData("photo")}
                            type="file" 
                        />
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

export default StepThree;