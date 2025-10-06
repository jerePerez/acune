import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './Servicios.css';

const services = [
    {
        icon: '🤱',
        title: 'Talleres Prenatales',
        text: 'Seguimiento personalizado durante tu embarazo.',
        gradient: 'gradient-peach',
        btnClass: 'btn-coral-text',
        modalInfo: (
            <>
                <p>En nuestros talleres prenatales te ofrecemos:</p>
                <ul>
                    <li>Taller "Momento de nacer"</li>
                    <li>Taller "Lactancia materna"</li>
                    <li>Taller "Movimiento y respiración"</li>
                </ul>
            </>
        )
    },
    {
        icon: '👩‍⚕️',
        title: 'Asesoramiento en Lactancia',
        text: 'Asesoría especializada para una lactancia exitosa.',
        gradient: 'gradient-lavender',
        btnClass: 'btn-lavender-text',
        modalInfo: 'Recibirás orientación práctica y emocional para que la lactancia sea una experiencia positiva para vos y tu bebé.'
    },
    {
        icon: '💆‍♀️',
        title: 'Cuidado Postparto',
        text: 'Recuperación integral con masajes, nutrición y apoyo.',
        gradient: 'gradient-mint',
        btnClass: 'btn-mint-text',
        modalInfo: 'Rutinas adaptadas al postparto para rehabilitar las zonas modificadas en la gestación'
    },
    {
        icon: '👶',
        title: 'Servicio para Bebés',
        text: 'Cuidados y estimulación temprana para el bienestar de tu bebé.',
        gradient: 'gradient-sky',
        btnClass: 'btn-sky-text',
        modalInfo: (
            <>
                <p>Contamos con:</p>
                <ul>
                    <li>Corte de pelo</li>
                    <li>Colocación de aros</li>
                    <li>Masajes Shantala</li>
                </ul>
            </>
        )
    }
];

function Servicios() {
    const [show, setShow] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleShow = (service) => {
        setSelectedService(service);
        setShow(true);
    };

    const handleClose = () => setShow(false);

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
                        <Col md={6} key={index} data-aos="fade-right" data-aos-mirror="true" data-aos-delay={index * 150}>
                            <Card className={`text-center text-white border-0 p-4 rounded-4 card-hover ${service.gradient}`}>
                                <Card.Body>
                                    <div className="icon-wrapper mx-auto mb-4"><span className="fs-1">{service.icon}</span></div>
                                    <Card.Title as="h4" className="fw-semibold mb-3">{service.title}</Card.Title>
                                    <Card.Text className="mb-4">{service.text}</Card.Text>
                                    <Button
                                        className={`btn-service rounded-pill px-4 py-2 fw-semibold ${service.btnClass}`}
                                        onClick={() => handleShow(service)}
                                    >
                                        Más Info
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Modal */}
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedService?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <span style={{ fontSize: '2.5rem' }}>{selectedService?.icon}</span>
                        </div>
                        {selectedService?.modalInfo}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </section>
    );
}

export default Servicios;
