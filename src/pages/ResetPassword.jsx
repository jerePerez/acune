import React, { useState } from 'react';
import { Button, Container, Card, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { resetPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            await resetPassword(email);
            setMessage('📧 Se envió un correo para restablecer tu contraseña.');
        } catch (err) {
            console.error(err);
            setError('No se pudo enviar el correo. Verifica el email ingresado.');
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Recuperar Contraseña</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Button className="w-100 mt-4" type="submit">
                            Enviar correo
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ResetPassword;
