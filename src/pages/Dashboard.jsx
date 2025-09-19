import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Error al cerrar sesión', error);
        }
    };

    return (
        <Container className="text-center py-5">
            <h1>Bienvenida al Dashboard, {user?.email}!</h1>
            <p>Aquí encontrarás tus cursos y contenido exclusivo.</p>
            <Button variant="danger" onClick={handleLogout}>Cerrar Sesión</Button>
        </Container>
    );
};

export default Dashboard;