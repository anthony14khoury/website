import './navigation.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Navigation() {
  return (
    <Navbar>
        <Container>
            <Navbar.Brand href="#home">Brand</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Experience</Nav.Link>
                <Nav.Link href="#pricing">Resume</Nav.Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigation;
