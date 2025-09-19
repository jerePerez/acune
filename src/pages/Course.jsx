import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Course = () => {
    const { courseId } = useParams();

    return (
        <Container className="py-5">
            <h1>Detalle del Curso: {courseId}</h1>
            <p>Aquí se mostrará el contenido del curso comprado.</p>
        </Container>
    );
};

export default Course;