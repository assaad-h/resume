import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phone from './phoneNumIcon.png';
import email from './email.jpg';
import grad from './grad.jpg'
import linkedin from './linkedin.png'

function MyHome() {
    
    return (
        <div className="home">
            <Container fluid className="block-example border rounded border-dark" >
                <Row className= "rowImage" style = {{padding: '10px'}}>
                    <Col>
                        <h1>About Me</h1>
                        <p>
                            <br />
                            Welcome! Using the navigation bar above, you will uncover a comprehensive overview of my journey—spanning experience, skills, and a portfolio of projects that have shaped my trajectory. You will also find a brief
                            introduction of myself below.
                            <br /><br />
                            I am a recent graduate in Computer Engineering from the University of Ottawa, where I finished at the top of my class. I've always had a passion for software and hardware since my high school computing classes. 
                            This is the reason I enrolled in my program since it encompasses both these domains.
                            I am an avid learner and am always looking to deepen my knowledge and strengthen my skills as a computer engineer.<p></p>
                        <h5>Contact Information</h5></p>
                        <>
                            <p><img src={phone} alt="phone logo" id="icon" style={{width:'60px', padding:'5px'}}/>Telephone: 613-859-1635</p>
                            <p><img src={email} alt="mail logo" id="icon" style={{width:'60px', padding:'5px'}}/>Email: <a href="mailto:assaad.h@hotmail.com?subject=Requested Information via Website Inquiry">assaad.h@hotmail.com</a></p>
                            <p><img src={linkedin} alt="linkedin logo" id="icon" style={{width:'60px', padding:'5px'}}/>LinkedIn profile: <a href="https://www.linkedin.com/in/assaad-howayek-88a3481a8">link</a> </p>
                        </>
                    </Col>
                    <Col>
                        <div class="row justify-content-center">
                            <img src={grad} className='myImageClass' style={{borderRadius: 25, height:'475px', width:'350px', padding:'20px', align:"center"}}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MyHome;