import './navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Resume from '../assets/Anthony Khoury Resume.pdf';

import * as React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navigation() {
    return (
        <div className='navigation'>
            <Navbar>
                <Nav className="mx-auto">
                    <Nav.Link className='nav-center'>
                        <Link to="/" className="nav-name home_nav">Home</Link>
                    </Nav.Link>

                    <Nav.Link className='nav-center'>
                        <CustomLink to="/experience" className="nav-name professional_experience_nav">Professional Experience</CustomLink>
                    </Nav.Link>

                    <Nav.Link className='nav-center'>
                        <CustomLink to="/projects" className="nav-name projects_nav">Projects</CustomLink>
                    </Nav.Link>
                    
                    <Nav.Link className='nav-center'>
                        <a className='nav-center' href={Resume} target="_blank" rel="noreferrer" class="nav-name resume_nav">Resume</a>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
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
