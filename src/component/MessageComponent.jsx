import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
const cardHeaderCss = {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#d9f7b7',
    color: '#5511f2'
};

const MessageComponent = () => {
  return (
    <Container>
        <div style={{ margin:'10px 18px',display:'flex'}}>
            <Card bg='light' style={{ width: '18rem', flex:'1', marginRight:'5px' }}>
                <Card.Header style={cardHeaderCss}>FATHER OF ELECTRO HOMEOPATHY</Card.Header>
                <Card.Body>
                    <Card.Text >
                        The Electro Homoeopathy is a quite harmless, unique, natural and
                        scientific system of medicine, Dr Count Ceasre Mattei of Rochetta,
                        Bolonga, Italy has invented it on about 1865.This system of medicine
                        is based on the principles of “The Human organization is entirely
                        composed of two elementary liquids Lymph & Blood and the health
                        and diseases are depend on the such liquids.” The Electricity has
                        been observed in all the living beings including plants. It is
                        proved that no cell, no tissue, no organ and or a body could
                        possibly manifest its legitimate function without electrical energy.
                        It is a fundamental and basic principle of the science that the
                        manufacture, transmission , utilization and discharge of Electrical
                        energy of living cells is responsible for metabolism of the body and
                        also give us a rational explanation for all the phenomena of life,
                        Health ,diseases and therapeutics. The Electro Homoeopathic medicine
                        generate and regenerate greater power restoring functional capacity and
                        arresting organic changes than all the drugs mentioned in other
                        Pharmacopoeia.The Electro Homoeopathy remedies are prepared by the
                        vegetables on a specific process called ‘SPAGIRIC WAY” which was
                        introduced by Dr.Theophrastus Von Hoheneeim (Paracelsus) and Dr. Von
                        Helmont
                    </Card.Text>
                    <Card.Link href="#">Read More</Card.Link>
                </Card.Body>
            </Card>
            <Card bg='light' style={{ width: '18rem', flex:'1', marginLeft:'5px' }}>
                <Card.Header style={cardHeaderCss}>DIRECTOR MESSEGE</Card.Header>
                <Card.Body>
                    <Card.Text>
                        There are four medical systems viz. Allopathy, Ayurveda, Unani &
                        Homoeopathy which are hitherto recognised by the Government of India.
                        They had been under going their promotion, development and research
                        before they were recognised by the Government.
                        Electropathy is a new fifth medical system in India. Its medicines
                        are purely herbal oriented (essences from medicinal plants only),
                        non toxic, non alcoholic, harmless with no side effects besides being
                        cheap for the poor people.
                        Dr. Count Ceaser Mattei discovered Electropathy/ Electro Homoeopathy
                        in 1865 in Italy. It was later developed & accepted by the German
                        Government in its Health Programmes. Electropathy is an independent
                        and a separate medical system and has no relation whatsoever, with
                        Allopathy, Ayurveda, Unani & Homoeopathy medical systems. Its
                        Pharmacopoeia is totally different from those of these other pathies.
                        There are about hundred Electropathy Institutions imparting four and
                        half year's medical education in the field of Electropathy System. After
                        successful completion of the course the candidates get registration and
                        practice in Electropathy Medicine only. Hon'ble Justice Banerjee of
                        Calcutta High Court in his strongly worded decision has remarked that
                        Govt. Can't stop the development of new medical science (Electropathy)
                    </Card.Text>
                    <Card.Link href="#">Read More</Card.Link>
                </Card.Body>
            </Card>
        </div>
    </Container>
  );
}

export default MessageComponent;