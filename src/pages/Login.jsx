// src/pages/Login.jsx
import React, { useState } from 'react';
import { Button, Container, Card, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setError('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Iniciar Sesión</h2>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleLogin}>
                        <Form.Group id="email" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group id="password" className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button className="w-100 mt-3" type="submit">Entrar</Button>
                    </Form>

                    <div className="text-center mt-3">
                        <p>
                            <a href="/reset-password">¿Olvidaste tu contraseña?</a>
                        </p>
                        <p>
                            ¿No tenés cuenta? <a href="/register">Crear una cuenta</a>
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
