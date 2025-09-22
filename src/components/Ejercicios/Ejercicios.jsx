import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Ejercicios.css';

function Ejercicios() {
    return (
        <section id="ejercicios" className="bg-cream">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-dark">Ejercicios Especializados</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '90%' }}>
                        Rutinas seguras y efectivas para cada etapa de tu maternidad
                    </p>
                </div>
                <Row className="g-5 align-items-center">
                    <Col lg={6}>
                        <div className="d-flex flex-column gap-4">
                            <div className="d-flex align-items-start gap-3">
                                <div className="exercise-icon-bg bg-coral">🧘‍♀️</div>
                                <div>
                                    <h4 className="fw-semibold">Yoga Prenatal</h4>
                                    <p className="text-muted">Posturas seguras que fortalecen tu cuerpo y calman tu mente.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <div className="exercise-icon-bg bg-mint">💪</div>
                                <div>
                                    <h4 className="fw-semibold">Fortalecimiento Postparto</h4>
                                    <p className="text-muted">Ejercicios graduales para recuperar tu fuerza y tonificar tu cuerpo.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <div className="exercise-icon-bg bg-lavender">🏃‍♀️</div>
                                <div>
                                    <h4 className="fw-semibold">Cardio Suave</h4>
                                    <p className="text-muted">Rutinas cardiovasculares adaptadas para mantener tu energía.</p>
                                </div>
                            </div>
                            <Button variant="coral" size="lg" className="rounded-pill align-self-start mt-3">Ver Rutinas</Button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Card className="p-4 rounded-4 shadow-lg">
                            <Card.Body>
                                <h4 className="text-center fw-semibold mb-4">Ejercicio del Día</h4>
                                <div className="text-center mb-4">
                                    <div className="daily-exercise-icon mx-auto mb-3">🤸‍♀️</div>
                                    <h5 className="fw-semibold">Respiración Profunda</h5>
                                    <p className="text-muted">Relajación para reducir el estrés y mejorar la oxigenación.</p>
                                </div>
                                <ul className="list-unstyled d-flex flex-column gap-2">
                                    <li className="d-flex align-items-center gap-2"><span className="bullet-point"></span>Siéntate cómodamente</li>
                                    <li className="d-flex align-items-center gap-2"><span className="bullet-point"></span>Inhala lentamente por 4s</li>
                                    <li className="d-flex align-items-center gap-2"><span className="bullet-point"></span>Mantén por 4s</li>
                                    <li className="d-flex align-items-center gap-2"><span className="bullet-point"></span>Exhala suavemente por 6s</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Ejercicios;