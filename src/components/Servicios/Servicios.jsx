import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Servicios.css';

const services = [
    { icon: '🤱', title: 'Talleres Prenatales', text: 'Seguimiento personalizado durante tu embarazo.', gradient: 'gradient-peach', btnClass: 'btn-coral-text' },
    { icon: '👩‍⚕️', title: 'Asesoramiento en Lactancia', text: 'Asesoría especializada para una lactancia exitosa.', gradient: 'gradient-lavender', btnClass: 'btn-lavender-text' },
    { icon: '💆‍♀️', title: 'Cuidado Postparto', text: 'Recuperación integral con masajes, nutrición y apoyo.', gradient: 'gradient-mint', btnClass: 'btn-mint-text' },
    { icon: '👶', title: 'Servicio para Bebés', text: 'Cuidados y estimulación temprana para el bienestar de tu bebé.', gradient: 'gradient-sky', btnClass: 'btn-sky-text' }
];

function Servicios() {
    return (
        <section id="servicios" className="bg-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-dark">Nuestros Servicios</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '90%' }}>
                        Cuidado integral diseñado especialmente para mamás en todas las etapas
                    </p>
                </div>
                <Row className="g-4">
                    {services.map((service, index) => (
                        <Col md={6} key={index}>
                            <Card className={`text-center text-white border-0 p-4 rounded-4 card-hover ${service.gradient}`}>
                                <Card.Body>
                                    <div className="icon-wrapper mx-auto mb-4"><span className="fs-1">{service.icon}</span></div>
                                    <Card.Title as="h4" className="fw-semibold mb-3">{service.title}</Card.Title>
                                    <Card.Text className="mb-4">{service.text}</Card.Text>
                                    <Button className={`btn-service rounded-pill px-4 py-2 fw-semibold ${service.btnClass}`}>Más Info</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Servicios;