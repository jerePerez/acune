// src/pages/Register.jsx
import React, { useState } from 'react';
import { Button, Container, Card, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('❌ Las contraseñas no coinciden.');
            return;
        }

        try {
            await signup(email, password, name);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                setError('❌ Este correo ya está registrado. Intenta iniciar sesión.');
            } else if (err.code === 'auth/weak-password') {
                setError('❌ La contraseña es muy débil (mínimo 6 caracteres).');
            } else {
                setError('No se pudo crear el usuario. Verifica los datos.');
            }
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Crear Cuenta</h2>
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleRegister}>
                        <Form.Group id="name" className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

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

                        <Form.Group id="confirm-password" className="mb-3">
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button className="w-100 mt-3" type="submit">Registrarse</Button>
                    </Form>

                    <div className="text-center mt-3">
                        <p>¿Ya tenés cuenta? <a href="/login">Iniciar sesión</a></p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Register;
