import React from 'react';
import { Container, Button, Stack } from 'react-bootstrap';
import './CTA.css';

function CTA() {
    return (
        <section className="gradient-bg text-black text-center">
            <Container>
                <h2 className="display-5 fw-bold mb-4">¿Lista para Comenzar tu Viaje?</h2>
                <p className="lead mb-5 mx-auto" style={{ maxWidth: '90%' }}>
                    Unite a quienes han confiado en nosotras para vivir su maternidad de forma plena y saludable.
                </p>
                <Stack direction="horizontal" gap={3} className="justify-content-center">
                    <Button size="lg" href="https://wa.me/5491124973529?text=Hola%21%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n" target="_blank" aria-label="Contactar por WhatsApp" className="wapp-link btn btn-dark rounded-pill px-5 py-3">Agendar Consulta</Button>

                </Stack>
            </Container>
        </section>
    );
}

export default CTA;