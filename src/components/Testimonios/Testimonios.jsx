import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonios.css';

const testimonials = [
    { name: 'María González', text: 'El acompañamiento durante mi embarazo fue excepcional. Me sentí segura y cuidada.', initial: 'M', color: 'bg-coral' },
    { name: 'Ana Rodríguez', text: 'Los ejercicios postparto me ayudaron a recuperar mi fuerza y confianza. ¡Recomiendo totalmente!', initial: 'A', color: 'bg-mint' },
    { name: 'Laura Martín', text: 'Gracias al apoyo en lactancia, pude disfrutar plenamente de esta hermosa experiencia con mi bebé.', initial: 'L', color: 'bg-lavender' }
];

function Testimonios() {
    return (
        <section id="testimonios" className="bg-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-dark">Lo Que Dicen Nuestras Mamás</h2>
                </div>
                <Row className="g-4">
                    {testimonials.map((item, index) => (
                        <Col lg={4} md={6} key={index}>
                            <Card className="h-100 border-0 bg-cream p-3 rounded-4">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className={`testimonial-initial ${item.color}`}>{item.initial}</div>
                                        <div>
                                            <h5 className="fw-semibold mb-0">{item.name}</h5>
                                            <div className="text-warning">⭐⭐⭐⭐⭐</div>
                                        </div>
                                    </div>
                                    <Card.Text className="text-muted">"{item.text}"</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Testimonios;