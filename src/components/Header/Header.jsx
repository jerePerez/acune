import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';
import logo from '../../assets/nacersalud.png';

function Header() {
    const { user } = useAuth();

    return (
        <Navbar bg="white" expand="lg" className="shadow-lg sticky-top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src={logo} alt="nacer logo" style={{ width: '40px', height: '40px' }} />
                    <span className="fw-bold ms-2 nombre-logo">Nacer Salud</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/#servicios" className="nav-link-custom">Servicios</Nav.Link>
                        <Nav.Link href="/#ejercicios" className="nav-link-custom">Ejercicios</Nav.Link>
                        <Nav.Link href="/#contacto" className="nav-link-custom">Contacto</Nav.Link>
                    </Nav>
                    {user ? (
                        <Button as={Link} to="/dashboard" variant="coral" className="rounded-pill px-4">Ir al Dashboard</Button>
                    ) : (
                        <Button as={Link} to="/login" variant="coral" className="rounded-pill px-4">Iniciar Sesión</Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;