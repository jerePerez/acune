import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <footer id="contacto" className="bg-dark text-white">
            <Container className="py-5">
                <Row className="gy-4">
                    <Col lg={4} md={12}>
                        <div className="d-flex align-items-center mb-2">
                            <div className="footer-logo-icon me-2">👶</div>
                            <h4 className="mb-0">Acune</h4>
                        </div>
                        <p className="text-white-50">Cuidado integral para tu maternidad con amor y profesionalismo.</p>
                    </Col>
                    <Col lg={2} md={4}>
                        <h5 className="fw-semibold">Servicios</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="#" className="footer-link">Consulta Prenatal</Nav.Link>
                            <Nav.Link href="#" className="footer-link">Cuidado Postparto</Nav.Link>
                            <Nav.Link href="#" className="footer-link">Lactancia</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={3} md={4}>
                        <h5 className="fw-semibold">Contacto</h5>
                        <ul className="list-unstyled text-white-50">
                            <li>📞 +34 123 456 789</li>
                            <li>📧 info@acune.com</li>
                            <li>📍 Calle Falsa 123, Buenos Aires</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={4}>
                        <h5 className="fw-semibold">Síguenos</h5>
                        <div>
                            <Button variant="coral" className="social-icon">📘</Button>
                            <Button variant="coral" className="social-icon">📷</Button>
                            <Button variant="coral" className="social-icon">🐦</Button>
                        </div>
                    </Col>
                </Row>
                <hr className="mt-5 mb-4" />
                <p className="text-center text-white-50">&copy; 2025 Acune. Todos los derechos reservados.</p>
            </Container>
        </footer>
    );
}

export default Footer;