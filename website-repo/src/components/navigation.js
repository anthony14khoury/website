import './navigation.css';

import * as React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navigation() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Home</Link>
            <CustomLink to="/experience">Experience</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </nav>
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
