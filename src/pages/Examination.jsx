import React from 'react'
import MessageComponent from '../component/MessageComponent';
import QuickAccessCards from '../component/QuickAccessCards';
import { Container } from 'react-bootstrap';

const Examination = () => {
    return (
        <Container>
            <div style={{padding:'20px 30px 0px 30px'}}>
                <p>
                    Medicine Board Of Electro Homeopathy System Of Medicine invites
                    applications for the admission of offered courses for Annual basis.
                    The academic year for the annual course will be commenced from
                    July only.
                </p>
                <p>
                    The prospectus can be obtained from the Council offices/authorised
                    centers or persons/affiliated Institutions.
                </p>
            </div>
            <MessageComponent />
            <QuickAccessCards />
        </Container>
    );
}

export default Examination;