// src/pages/Dashboard.jsx

import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

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
                                <Card.Title>Contenido Básico (Nivel 1)</Card.Title>
                                <Card.Text>Bienvenida, este es el contenido inicial visible para todos los usuarios.</Card.Text>
                                <Button variant="success">Ir a Introducción</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}

                {/* 2. NIVEL 2: Contenido Exclusivo (Habilitado por tu OK) */}
                {userPermissions.nivel2 ? (
                    <Col md={6} className="mb-4" data-aos="fade-left"> {/* <-- Animación AOS */}
                        <Card border="warning">
                            <Card.Body>
                                <Card.Title>¡Contenido Nivel 2 Desbloqueado! 🔓</Card.Title>
                                <Card.Text>¡Tu acceso fue aprobado! Ya puedes ver la sección de videos avanzados.</Card.Text>
                                <Button variant="warning">Ver Lecciones Exclusivas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ) : (
                    // Mensaje de Pendiente de Aprobación
                    <Col md={6} className="mb-4" data-aos="fade-left"> {/* <-- Animación AOS */}
                        <Card border="secondary">
                            <Card.Body>
                                <Card.Title>Nivel 2 Pendiente</Card.Title>
                                <Card.Text>Tu acceso al contenido avanzado está pendiente de revisión. ¡Pronto te avisaremos!</Card.Text>
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