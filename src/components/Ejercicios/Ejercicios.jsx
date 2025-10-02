import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Ejercicios.css';

// Ejercicios.jsx

// Definimos los ejercicios fuera del componente
const dailyExercises = [
    {
        icon: '🧘‍♀️',
        title: 'Yoga Prenatal',
        description: 'Posturas suaves y seguras que alivian tensiones, mejoran la respiración y preparan tu cuerpo para el parto.',
        steps: [
            'Colócate en una postura cómoda',
            'Respira profundo durante 5s',
            'Mantén la postura por 5s',
            'Exhala suavemente y repite'
        ]
    },
    {
        icon: '💪',
        title: 'Esferodinamia Prenatal',
        description: 'Ejercicios con pelota que fortalecen la zona lumbar y pélvica.',
        steps: [
            'Siéntate sobre la pelota',
            'Realiza movimientos circulares con la pelvis',
            'Mantén la espalda recta',
            'Respira profundo y repite'
        ]
    },
    {
        icon: '🤱',
        title: 'Yoga Postparto',
        description: 'Movimientos que ayudan a recuperar la fuerza abdominal y mejorar la postura.',
        steps: [
            'Colócate en postura cómoda',
            'Inhala lentamente',
            'Realiza estiramientos suaves',
            'Exhala y relaja'
        ]
    },
    {
        icon: '🌸',
        title: 'Rehabilitación Postparto',
        description: 'Rutinas para fortalecer el suelo pélvico y tonificar el cuerpo.',
        steps: [
            'Acuéstate boca arriba',
            'Contrae el suelo pélvico por 5s',
            'Relaja por 5s',
            'Repite 10 veces'
        ]
    },
    {
        icon: '🏃‍♀️',
        title: 'Caminata Prenatal',
        description: 'Ejercicio cardiovascular suave que mejora la circulación.',
        steps: [
            'Camina a paso cómodo 10 min',
            'Mantén respiración profunda',
            'Relaja hombros y cuello',
            'Disfruta del movimiento'
        ]
    },
    {
        icon: '🧘‍♂️',
        title: 'Pilates Postparto',
        description: 'Tonificación de abdomen y espalda para recuperar fuerza.',
        steps: [
            'Acuéstate boca arriba',
            'Levanta pelvis suavemente',
            'Mantén por 3-5s',
            'Baja lentamente y repite'
        ]
    },
    {
        icon: '🤸‍♀️',
        title: 'Estiramientos Diarios',
        description: 'Secuencias sencillas para mejorar flexibilidad y reducir tensiones.',
        steps: [
            'Estira brazos hacia arriba',
            'Inclínate suavemente a los lados',
            'Relaja cuello y hombros',
            'Respira profundamente'
        ]
    }
];


function Ejercicios() {
    const today = new Date();
    const dayIndex = today.getDate() % dailyExercises.length;
    const exercise = dailyExercises[dayIndex];

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
                            {/* Tus 4 ejercicios estáticos */}
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
                                    <h4 className="fw-semibold">Esferodinamia prenatal</h4>
                                    <p className="text-muted">Ejercicios con pelota que fortalecen la zona lumbar y pélvica, favoreciendo el equilibrio y la relajación.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <div className="exercise-icon-bg bg-lavender">🤱</div>
                                <div>
                                    <h4 className="fw-semibold">Yoga postparto</h4>
                                    <p className="text-muted">Movimientos que ayudan a recuperar la fuerza abdominal, mejorar la postura y promover la conexión con tu bebé.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <div className="exercise-icon-bg bg-rose">🌸</div>
                                <div>
                                    <h4 className="fw-semibold">Rehabilitación postparto</h4>
                                    <p className="text-muted">Rutinas progresivas para fortalecer el suelo pélvico, tonificar el cuerpo y apoyar una recuperación segura.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <Card className="p-4 rounded-4 shadow-lg">
                            <Card.Body>
                                <h4 className="text-center fw-semibold mb-4">Ejercicio del Día</h4>
                                <div className="text-center mb-4">
                                    <div className="daily-exercise-icon mx-auto mb-3">{exercise.icon}</div>
                                    <h5 className="fw-semibold">{exercise.title}</h5>
                                    <p className="text-muted">{exercise.description}</p>
                                </div>
                                <ul className="list-unstyled d-flex flex-column gap-2">
                                    {exercise.steps.map((step, index) => (
                                        <li key={index} className="d-flex align-items-center gap-2">
                                            <span className="bullet-point"></span>
                                            {step}
                                        </li>
                                    ))}
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
