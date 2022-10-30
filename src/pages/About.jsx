import React from 'react'
import MessageComponent from '../component/MessageComponent';
import QuickAccessCards from '../component/QuickAccessCards';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div style={{padding:'20px 40px 0px 40px'}}>
                <p>
                    Medicine Board Of Electro Homeopathy System Of Medicine is an
                    autonomous organization providing education in medical Science
                    of Electro Homeopathy/ Electropathy through regular classes,
                    correspondence courses and practical training established by
                    passing the bill by Mission of India, which was registered under
                    the Central Society Act 21,1860.
                </p>
                <p>
                    Efforts made it possible to reach enthusiasm and dedication to this
                    system of medicine at the grassroots level and also to the political
                    level. He thought that for the advancement of this science, a
                    platform was needed where it was possible to jump ahead due to the
                    effect of Electro Homeopathy has continued to draw attention from the
                    current government with the development of Electro Homeopathy from
                    time to time, to promote "Indian Electro Homeopathic".
                </p>
                <p>
                    The Council is conducting annual examination of various Electro
                    Homeopathic courses regularly by the Council so that they can work
                    for the betterment of the system and for the poor people of different
                    parts of the country for the qualified doctors of this system. This
                    Council Seminar, Conference, Getting together Convocation function and
                    free support camps in different parts of the country by the Independent
                    All India based Razd. Through this Council, more than 200 registered
                    practitioners across the country are moving towards Healthy India by
                    treating Electro Homeopathy. This is the system and the service of
                    rural India. We have a humble demand from the government. Please allow
                    us for rural health program through this system. If the government
                    recognizes this system and this council, then there is no financial
                    burden on governance, but this body maintains it automatically.
                </p>
                <p>
                    This council is successfully operating more than 50 E.H.P. Colleges
                    / Institutes and training centers across India with its dispensaries
                    and hospitals. In the direction of the Council, the College /
                    Institution operates various Certificates, Diplomas and PG level
                    courses. With this economic situation, the weak and meritorious
                    students are excited by the Council in different ways to enhance
                    their bright future.
                </p>
            </div>
            <MessageComponent />
            <QuickAccessCards />
        </Container>
    );
}

export default About;