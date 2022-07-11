import './navigation.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import Experience from '../pages/experience';
import App from '../App';

function Navigation() {
    return (
        <Navbar>
            <Container>
                    <Navbar.Brand to={App}>Brand</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                            <Nav.Link to={Experience}>Experience</Nav.Link>
                            {/* <Nav.Link href="#pricing">Resume</Nav.Link> */}
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
