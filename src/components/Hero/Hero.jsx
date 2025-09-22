import React from 'react';
import { Container, Button, Stack } from 'react-bootstrap';
import './Hero.css';

function Hero() {
    return (
        <section className="img-back-hero text-white text-center">
            <Container>
                <h1 className="display-3 fw-bold mb-4">Tu Bienestar en Cada Etapa</h1>
                <p className="lead mb-5 mx-auto hero-subtitle">
                    Acompañamos tu maternidad con amor, cuidado profesional y ejercicios especializados para que vivas esta hermosa etapa con confianza y alegría.
                </p>
                <Stack direction="horizontal" gap={3} className="justify-content-center">
                    <Button className="btn-hero-primary rounded-pill px-5 py-3">Comenzar Ahora</Button>
                    <Button variant="outline-light" className="rounded-pill px-5 py-3 btn-hero-secondary">Ver Testimonios</Button>
                </Stack>
            </Container>
        </section>
    );
}

export default Hero;