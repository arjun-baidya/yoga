import React from 'react'
import { Container,Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../style/header.css'

export default function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top" >
                <Container>
                    <Navbar.Brand >
                        <NavLink className="navlink" to="/">Traditional Yoga</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <NavLink className="navlink" to="/" activeStyle={{ color: '#be6229e8' }}>Home</NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink className="navlink" to="/about" activeStyle={{ color: '#be6229e8' }}>About</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="navlink" to="/services" activeStyle={{ color: '#be6229e8' }}>Services</NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink className="navlink" to="/membership" activeStyle={{ color: '#be6229e8' }}>Membership</NavLink>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
