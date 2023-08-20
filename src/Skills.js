import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function MySkils(){
    return (
        <div className="Skills">
            <Container fluid className="block-example border rounded border-dark" >
                <h1 style = {{padding: '10px'}}>Skills</h1>
                <div>
                <Row className= "rowMembership " style = {{padding: '20px', textAlign: "left"}}>
                    <Col>
                        <Card className="myImageClass2 cardAlign border rounded border-dark ">
                            <Card.Body>
                                <Card.Title style = {{padding: '20px', textAlign: "center"}}>Coding Skills</Card.Title>
                                <Card.Text>
                                    <ul style={{padding: '10px'}}>
                                        <li>Adept in VHDL, a Hardware Definition Language.</li>
                                        <li>Acquainted with the fundamental SystemVerilog principles.</li>
                                        <li>Robust coding capabilities in C.</li>
                                        <li>Highly skilled in object-oriented programming using C++ and Java.</li>
                                        <li>Proficient in Python and Go programming languages.</li>
                                        <li>Deeply knowledgeable in Yang, a Data Definition Language.</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="myImageClass2 cardAlign border rounded border-dark">
                            <Card.Body>
                                <Card.Title style = {{padding: '20px', textAlign: "center"}}>Technical Skills</Card.Title>
                                <Card.Text>
                                    <ul style={{padding: '10px'}}>
                                        <li>Expertise in hardware design testing employing Quartus and ModelSim.</li>
                                        <li>Proficient in full-stack development using Android Studio.</li>
                                        <li>Extensive utilization of Git and JIRA for project management.</li>
                                        <li>Profound understanding of data structures and algorithms.</li>
                                        <li>Acquired knowledge of databases such as Firebase and PostgreSQL.</li>
                                        <li>Skilled in crafting UML diagrams to facilitate software design.</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className= "rowMembership" style = {{padding: '20px', textAlign: "left"}}>
                    <Col>
                        <Card className="myImageClass2 cardAlign border rounded border-dark">
                            <Card.Body>
                                <Card.Title style = {{padding: '20px', textAlign: "center"}}>Soft Skills</Card.Title>
                                <Card.Text>
                                    <ul style={{padding: '10px'}}>
                                        <li>Problem Solver - analyze challenges, identify solutions, and make informed decisions.</li>
                                        <li>Strong Communicater - effectively convey ideas and actively listen.</li>
                                        <li>Adaptability - embrace changes, learn quickly, and thrive in dynamic environment.</li>
                                        <li>Great teammate - collaborate seamlessly, contribute positively, and foster a cohesive work environment.</li>
                                        <li>Leader - inspire, guide, and motivate others to achieve shared objectives.</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                </div>
            </Container>
        </div>
    );
}   

export default MySkils;