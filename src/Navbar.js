import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";

const MyNavbar = () => {
    const navbarStyle={
        background: 'rgba(4, 59, 92, 1)',
        position: 'sticky'
    };

    const textStyle = {
        color: "white",
    };

    return (  
        <Navbar expand="lg" style={navbarStyle}>
            <Container fluid>
                <Navbar.Brand href="/resume" style={textStyle}>Assaad Howayek</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/resume" style={textStyle}>About Me</NavLink>
                    <NavLink to="/resume/experience" style={textStyle}>Experience</NavLink>
                    <NavLink to="/resume/skills" style={textStyle}>Skills</NavLink>
                    <NavLink to="/resume/projects" style={textStyle}>Sample Projects</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;