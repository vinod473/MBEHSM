import React from "react";
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";
import { Container, InputGroup, Form, Button, Card } from "react-bootstrap";

const loginLabelCss = {
    marginTop: '7px',
    marginBottom: '7px'
};
const headerCss = {
    textAlign:'center',
    fontWeight:'bold',
    backgroundColor:'#e876db'
};

const Result = () => {
    const [rollNo, setRollNo] = useState('');
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState('');

    const downloadStudentRecord = () => {
        if (rollNo === '') {
            setAlert('Plese enter Enrollment/ Roll no.');
            setShow(true);
        } else if (rollNo === 'b-17-22001') {
            window.open("https://mbehsmcandidatedocuments.s3.ap-south-1.amazonaws.com/Student%20Record_AHSAN%20ALI%20%282%29.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCmFwLXNvdXRoLTEiSDBGAiEA8PzBWhzAoyPqGDTcjhqQfdNbODdOj5pwz9RJeTOUsW0CIQDGAJOjhjNJEPk6Ic8wHvuODRs46%2FDmQz%2BYcQL95DdaVyrkAghyEAAaDDU2ODI5MzYzNDQ0NSIMC0vvGoZVuWOgoiK4KsECt03Pp3efSi%2Fg0FUP9q2OI4TiHxsfr69boVWKu34HfJ%2FYby517scyy431DQsYDVgQ%2FaVoYda1vnDyD6GFdDOPSeDhmWD3Xexzy4N%2FwQsMsFismm9eLpzFNlOJbem5RvxXz%2B6Qa%2Fc4GJ%2BYGkb6FfHcJZuiP0jPR7MepEk5Ie5vA795KOpTaVegiR36h3SM2syrNzWHcprJt6Q%2FSauBelTYfMDi5XoIiqEYXadWcHmyXnqNQiD%2FettIFb%2BJlhwIkZiIr2Nly0z2lsXJWfsXljJyY5itbs3kyrwT0x9s2pkskNOb%2FcUIkaMHj3Nyg1YG7AWQ9dzyHBM2kWDFyF81taUQRwQKtysaHMrtUqpoEBdt%2BfJk82JPWFS2ehlcI1ydBTUFfgSDQUJ%2BfOJ%2FIMKRoz6hljEOklntKDBVacynRb%2BSssAHMPzthZ0GOrICGAFqRDy53AgEHyNLHTrUuvwx46gUCSDlDORamxypJW%2BezkzMi7O3pNISZX49IWXuiivweYTn%2Bonei7u%2BHnK15OVB1zi9z9eDBbSaX3LTGusWkyvvLgCVqC9FL8LRPtf%2FQug%2FPcphjiIdAZrSB2jpYGcmFhke6xOYwlZUVLMsM%2BX7mXPNN41RWk0iAAUk%2FO%2BDhYCmOGf0%2BjRC582rONKl1BMYmq0LrBBJhZC2x08S6Q2st0t1qZYIMzqmxtthE9wbb2iWktSuld0qWD7nl4Gi8wUNiyXVKjma9O7O2FWcoHdWnoQBp0P8FDCljhdWVXhGdPN6vHqk6HNu%2FYbONRKWgD%2BrXwWEwj2%2FqOwjNLu8xdnwT1FgbeYMvIqZ%2Bmpi9qKTVoe02hFuPTf3o5T%2FfsyrgbW8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221220T085117Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIAYIUHQWGGTR6EEIWX%2F20221220%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=1e3a79527ba9a5c4c22301d2d7c3afd1e1274edfc00d92b4c6047cbee6b131a1","_blank");
        } else {
            setAlert('Enrollment No. not found!');
            setShow(true);
        }
    };

    return (
        <>
            <Container style={{display:'flex', justifyContent:'space-around', padding:'20px 0px'}} >
                <Card style={{width: '25rem', margin: '10px 0px 5px 0px'}}>
                    <Card.Header style={headerCss}>Student Result Download</Card.Header>
                    <div style={{padding:'20px'}}>
                        <div style={loginLabelCss}>Enter Enrollment/Roll Number</div>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Control
                                onChange={(event) => setRollNo(event.target.value)}
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <div style={{textAlign:'center'}}>
                            <Button variant="success" type="submit" onClick={() => downloadStudentRecord()}>Submit</Button>
                        </div>
                    </div>
                </Card>
            </Container>
            <div style={{ textAlign: 'center', width: '500px'}}>
                {show ? (
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        {alert}
                    </Alert>
                ) : null}
            </div>
        </>
    );
};

export default Result;