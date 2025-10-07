// src/pages/Dashboard.jsx

import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const nivel2Content = "https://drive.google.com/file/d/1cUM82iWjoJkD7_u4Lpi8mv73Fkg0YR-B/preview"

const Dashboard = () => {
    const { user, userProfile, logout, userPermissions, loading } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Error al cerrar sesión', error);
        }
    };

    if (loading || !user) {
        return <Container className="text-center py-5">Cargando Dashboard...</Container>;
    }

    const renderContent = () => {
        if (!userPermissions) return <p>Cargando tu perfil y accesos...</p>;

        return (
            <>
                {/* NIVEL 1 */}
                {userPermissions.nivel1 && (
                    <Row className="justify-content-center mb-4" data-aos="fade-right">
                        <Col xs={12} md={6}>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title>Introducción</Card.Title>
                                    <Card.Text>
                                        Aquí encontrarás los primeros pasos para comenzar tu recorrido con nosotros. ¡Disfruta de los beneficios iniciales y prepárate para avanzar!
                                    </Card.Text>
                                    {userPermissions.nivel2 ? (
                                        <div className="btn-gradient no-cursor">
                                            Bienvenido
                                        </div>
                                    ) : (
                                        <Button variant="success" href="https://wa.me/5491124973529?text=Hola%21%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n" target="_blank" aria-label="Contactar por WhatsApp" className="wapp-link">Solicitar acceso</Button>
                                    )}

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}

                {/* NIVEL 2 */}
                <Row className="justify-content-center mb-4" data-aos={userPermissions.nivel2 ? "zoom-in" : "fade-left"}>
                    <Col xs={12} md={6}>
                        {userPermissions.nivel2 ? (
                            <Card border="warning" className="text-center">
                                <Card.Body>
                                    <Card.Title as="h3" className="mb-3 text-warning">Video Exclusivo</Card.Title>
                                    <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0, overflow: 'hidden' }}>
                                        <iframe
                                            src={nivel2Content}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Contenido Nivel 2"
                                            className="rounded"
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        ) : (
                            <Card border="secondary">
                                <Card.Body>
                                    <Card.Title>Nivel 2 Pendiente</Card.Title>
                                    <Card.Text>Tu acceso al contenido está pendiente. ¡Contactanos para comenzar!</Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>

                {/* NIVEL 3 */}
                <Row className="justify-content-center mb-4" data-aos={userPermissions.nivel3 ? "zoom-in" : "fade-left"}>
                    <Col xs={12} md={6}>
                        {userPermissions.nivel3 ? (
                            <Card border="warning" className="text-center">
                                <Card.Body>
                                    <Card.Title as="h3" className="mb-3 text-warning">Video Nuevo</Card.Title>
                                    <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0, overflow: 'hidden' }}>
                                        <iframe
                                            src={nivel2Content}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Contenido Nivel 3"
                                            className="rounded"
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        ) : (
                            <Card border="secondary">
                                <Card.Body>
                                    <Card.Title>Nivel 3 Pendiente</Card.Title>
                                    <Card.Text>Tu acceso al contenido está pendiente. ¡Contactanos para comenzar!</Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </>
        );
    };

    return (
        <Container className="text-center py-5" data-aos="fade-down">
            {/* 🔹 Saludo por nombre, si existe */}
            <h1>Bienvenida al Dashboard, {userProfile?.name || user?.email}!</h1>
            <p>Tu nivel de acceso: <strong>{userPermissions?.nivel2 ? 'Avanzado' : 'Básico'}</strong></p>

            {renderContent()}

            <Button variant="danger" onClick={handleLogout} className="mt-4" data-aos="zoom-in">Cerrar Sesión</Button>
        </Container>
    );
};

export default Dashboard;
