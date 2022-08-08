import './navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Resume from '../assets/Anthony Khoury Resume.pdf';

import * as React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="mx-auto">
                    <Nav.Link className='nav-center'>
                        <Link to="/" className="nav-name">Home</Link>
                    </Nav.Link>

                    <Nav.Link className='nav-center'>
                        <CustomLink to="/about" className="nav-name">About</CustomLink>
                    </Nav.Link>

                    <Nav.Link className='nav-center'>
                        <CustomLink to="/experience" className="nav-name">Experience</CustomLink>
                    </Nav.Link>
                    
                    <Nav.Link className='nav-center'>
                        <a className='nav-center' href={Resume} target="_blank" rel="noreferrer" class="nav-name">Resume</a>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}> {children} </Link>
        </li>
    )
  }
