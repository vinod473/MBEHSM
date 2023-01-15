import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

const examRowCss = {
    margin: '0px 10px'
};
const examTitleRowCss = {
    width: '170px'
};
// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    // if (!values.candidateName || !values.fatherName || !values.motherName || !values.dob
	// 	 || !values.gender || !values.category || !values.idType || !values.employmentStatus) {
    //   setError(true);
    // } else {
      nextStep();
    // }
  };

  return (
    <div>
      <Card style={{ marginTop: 100, maxWidth: '800px'}}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Form.Group className="mb-3" style={{ display: 'flex' }}>
					<Form.Label style={examTitleRowCss}>Candidate Name</Form.Label>
					<Form.Control
						style={{ border: error ? "2px solid red" : "" }}
						name="candidateName"
						defaultValue={values.firstName}
						type="text"
						placeholder="Candidate Name"
						onChange={handleFormData("candidateName")}
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
				<Form.Label>Father Name</Form.Label>
				<Form.Control
					style={{ border: error ? "2px solid red" : "" }}
					name="fatherName"
					defaultValue={values.lastName}
					type="text"
					placeholder="Father Name"
					onChange={handleFormData("fatherName")}
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
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Form.Group className="mb-3">
				<Form.Label>Mother Name</Form.Label>
				<Form.Control
					style={{ border: error ? "2px solid red" : "" }}
					name="motherName"
					defaultValue={values.lastName}
					type="text"
					placeholder="Mother Name"
					onChange={handleFormData("motherName")}
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
				<Form.Label>Date of Birth</Form.Label>
				<Form.Control 
					style={{ border: error ? "2px solid red" : "" }}
					name="dob"
					type="date"
					onChange={handleFormData("dob")}
				/>
				{error ? (
					<Form.Text style={{ color: "red" }}>
					This is a required field
					</Form.Text>
				) : null}
				</Form.Group>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Form.Group className="mb-3">
				<Form.Label>Photo</Form.Label>
				<Form.Control 
					style={{ border: error ? "2px solid red" : "" }}
					placeholder="Father Name"
					onChange={handleFormData("photo")}
					type="file" 
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
				<Form.Label>Gender</Form.Label>
				<Form.Select
					style={{ border: error ? "2px solid red" : "" }}
					name="gender"
					onChange={handleFormData("gender")}
				>
					<option>Select</option>
					<option>Male</option>
					<option>Female</option>
				</Form.Select>
				{error ? (
					<Form.Text style={{ color: "red" }}>
					This is a required field
					</Form.Text>
				) : (
					""
				)}
				</Form.Group>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Form.Group className="mb-3">
				<Form.Label>Category</Form.Label>
				<Form.Select
					style={{ border: error ? "2px solid red" : "" }}
					name="category"
					onChange={handleFormData("category")}
				>
					<option>Select Category</option>
					<option>General</option>
					<option>SC</option>
					<option>ST</option>
					<option>BC</option>
					<option>SBC</option>
					<option>OBC</option>
					<option>EBC</option>
					<option>PH</option>
					<option>Ex-Servicemen</option>
					<option>other</option>
				</Form.Select>
				{error ? (
					<Form.Text style={{ color: "red" }}>
					This is a required field
					</Form.Text>
				) : (
					""
				)}
				</Form.Group>
				<Form.Group className="mb-3">
				<Form.Label>ID proof Type</Form.Label>
				<Form.Select
					style={{ border: error ? "2px solid red" : "" }}
					name="idType"
					onChange={handleFormData("idType")}
				>
					<option>Select ID Type</option>
					<option>Aadhar card</option>
					<option>PAN card</option>
					<option>Voter ID card</option>
					<option>Passport</option>
					<option>other</option>
				</Form.Select>
				{error ? (
					<Form.Text style={{ color: "red" }}>
					This is a required field
					</Form.Text>
				) : (
					""
				)}
				</Form.Group>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Form.Group className="mb-3">
				<Form.Label>Are you employed?</Form.Label>
				<Form.Select
					style={{ border: error ? "2px solid red" : "" }}
					name="employment"	
					onChange={handleFormData("employmentStatus")}
				>
					<option>Select</option>
					<option>Yes</option>
					<option>No</option>
				</Form.Select>
				{error ? (
					<Form.Text style={{ color: "red" }}>This is a required field</Form.Text>
				) : null }
				</Form.Group>
			</div>
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				<Button variant="primary" type="submit">
					Next
				</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;