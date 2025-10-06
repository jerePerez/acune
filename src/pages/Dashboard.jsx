// src/pages/Dashboard.jsx

import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const nivel2Content = "https://drive.google.com/file/d/1cUM82iWjoJkD7_u4Lpi8mv73Fkg0YR-B/preview"
const Dashboard = () => {
    // 1. Obtener los permisos del contexto
    const { user, logout, userPermissions, loading } = useAuth();
    const navigate = useNavigate();

    // ... (Tu función handleLogout se mantiene igual)
    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Error al cerrar sesión', error);
        }
    };

    // Muestra un mensaje de carga si los permisos aún no están listos
    if (loading || !user) {
        return <Container className="text-center py-5">Cargando Dashboard...</Container>;
    }

    const renderContent = () => {
        // Muestra un mensaje de carga si solo los permisos están pendientes (raro si AuthContext funciona bien)
        if (!userPermissions) {
            return <p>Cargando tu perfil y accesos...</p>;
        }

        return (
            <Row className="mt-4 justify-content-center">

                {/* 1. NIVEL 1: Contenido Básico (Siempre true) */}
                {userPermissions.nivel1 && (
                    <Col md={6} className="mb-4" data-aos="fade-right"> {/* <-- Animación AOS */}
                        <Card border="success">
                            <Card.Body>
                                <Card.Title>Introducción (Nivel básico)</Card.Title>
                                <Card.Text>El objetivo de esta planificación es rehabilitar progresivamente aquellas zonas del cuerpo que producto de la gestación se vieron modificadas. Entre ellas: Suelo pélvico y Core.

                                    Este primer mes, el punto de partida es el reconocimiento. Donde realizaremos ejercicios de conciencia postural, reconocimiento del suelo pélvico y donde se iniciará con la técnica hipopresiva.
                                </Card.Text>
                                <Button variant="success">Continuar recorrido</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}

                {/* 2. NIVEL 2: Contenido Exclusivo (Habilitado por tu OK) */}
                {userPermissions.nivel2 ? (
                    <Col md={6} className="mx-auto mb-4" data-aos="zoom-in" data-aos-mirror="true">
                        <Card border="warning" className="text-center">
                            <Card.Body>
                                <Card.Title as="h3" className="mb-3 text-warning">Video Exclusivo</Card.Title>

                                {/* 🚨 Contenedor con estilos en línea para la proporción 9:16 */}
                                <div style={{
                                    position: 'relative',
                                    paddingBottom: '177.78%', // Proporción 16/9
                                    height: 0,
                                    overflow: 'hidden'
                                }}>
                                    <iframe
                                        // El iframe se posiciona y estira para llenar el contenedor
                                        src={nivel2Content}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Contenido Nivel 2"
                                        className="rounded"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            // Esto asegura que el contenido vertical no se corte si el contenedor es estrecho
                                            objectFit: 'cover'
                                        }}
                                    ></iframe>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                ) : (
                    // Mensaje de Pendiente de Aprobación
                    <Col md={6} className="mb-4" data-aos="fade-left"> {/* <-- Animación AOS */}
                        <Card border="secondary">
                            <Card.Body>
                                <Card.Title>Nivel 2 Pendiente</Card.Title>
                                <Card.Text>Tu acceso al contenido está pendiente. ¡Contactanos para comenzar!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}

            </Row>
        );
    };

    return (
        <Container className="text-center py-5" data-aos="fade-down"> {/* <-- Animación AOS para el encabezado */}
            <h1>Bienvenida al Dashboard, {user?.email}!</h1>
            <p>Tu nivel de acceso: **{userPermissions?.nivel2 ? 'Avanzado' : 'Básico'}**</p>

            {renderContent()}

            <Button variant="danger" onClick={handleLogout} className="mt-4" data-aos="zoom-in">Cerrar Sesión</Button>
        </Container>
    );
};

export default Dashboard;